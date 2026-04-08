import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Package, Search, FileText, Settings, Shield, Layers } from "lucide-react";

  export default function RPM() {
    return (
      <PageContainer
        title="Formato RPM"
        subtitle="Entenda o formato de pacotes RPM — consultando, verificando, instalando pacotes individuais e entendendo o ecossistema de empacotamento do Fedora."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> O que é RPM?</h2>
        <p>
          <strong>RPM (Red Hat Package Manager)</strong> é o formato de pacotes usado pelo Fedora, RHEL, CentOS, openSUSE e outras distros. Cada pacote <code>.rpm</code> contém os arquivos do software, metadados (nome, versão, dependências) e scripts de instalação/remoção.
        </p>
        <p>
          Enquanto o <strong>DNF</strong> é o gerenciador de alto nível (resolve dependências, baixa de repositórios), o <strong>rpm</strong> é a ferramenta de baixo nível que manipula pacotes individuais diretamente.
        </p>

        <h3>Anatomia de um nome RPM</h3>
        <div className="my-4 p-4 rounded-xl border border-border bg-card font-mono text-sm">
          <p className="mb-2">Exemplo: <code>firefox-121.0-1.fc41.x86_64.rpm</code></p>
          <table>
            <tbody>
              <tr><td><strong>firefox</strong></td><td>Nome do pacote</td></tr>
              <tr><td><strong>121.0</strong></td><td>Versão upstream</td></tr>
              <tr><td><strong>1</strong></td><td>Release (revisão do empacotador)</td></tr>
              <tr><td><strong>fc41</strong></td><td>Distribuição (Fedora 41)</td></tr>
              <tr><td><strong>x86_64</strong></td><td>Arquitetura (64-bit)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Arquiteturas comuns</h3>
        <table>
          <thead><tr><th>Arq.</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td><code>x86_64</code></td><td>Intel/AMD 64-bit (mais comum)</td></tr>
            <tr><td><code>aarch64</code></td><td>ARM 64-bit (Raspberry Pi, servidores ARM)</td></tr>
            <tr><td><code>i686</code></td><td>Intel/AMD 32-bit (legado)</td></tr>
            <tr><td><code>noarch</code></td><td>Independente de arquitetura (scripts, fontes, docs)</td></tr>
            <tr><td><code>src</code></td><td>Pacote fonte (código-fonte + spec)</td></tr>
          </tbody>
        </table>

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Consultando Pacotes Instalados</h2>
        <CodeBlock
          code={`# Listar todos os pacotes instalados
  rpm -qa
  rpm -qa | wc -l          # contar pacotes instalados
  rpm -qa | sort

  # Verificar se um pacote está instalado
  rpm -q firefox
  # Saída: firefox-121.0-1.fc41.x86_64

  # Informações detalhadas do pacote
  rpm -qi firefox
  # Name        : firefox
  # Version     : 121.0
  # Release     : 1.fc41
  # Architecture: x86_64
  # Install Date: Mon 15 Jan 2024
  # Size        : 284 MB
  # License     : MPL-2.0
  # Description : Mozilla Firefox Web browser

  # Listar arquivos instalados por um pacote
  rpm -ql firefox
  rpm -ql firefox | head -20

  # Apenas arquivos de configuração
  rpm -qc firefox

  # Apenas documentação
  rpm -qd firefox

  # Qual pacote instalou um arquivo
  rpm -qf /usr/bin/firefox
  # Saída: firefox-121.0-1.fc41.x86_64

  rpm -qf /usr/lib64/libssl.so.3
  # Saída: openssl-libs-3.2.0-1.fc41.x86_64

  # Listar dependências de um pacote
  rpm -qR firefox
  rpm -q --requires firefox

  # Quais pacotes dependem de X
  rpm -q --whatrequires openssl-libs

  # Ver scripts de pré/pós instalação
  rpm -q --scripts firefox

  # Changelog do pacote
  rpm -q --changelog firefox | head -30`}
          language="bash"
          title="consultas rpm"
        />

        <h2>Consultando Pacotes Não-Instalados</h2>
        <CodeBlock
          code={`# Informações de um arquivo .rpm (não instalado)
  rpm -qpi pacote.rpm

  # Listar arquivos de um .rpm
  rpm -qpl pacote.rpm

  # Dependências de um .rpm
  rpm -qpR pacote.rpm

  # Consultar informações do repositório (via DNF)
  dnf info firefox
  dnf repoquery --list firefox
  dnf repoquery --deplist firefox`}
          language="bash"
          title="consultas de pacotes não instalados"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Verificação e Integridade</h2>
        <CodeBlock
          code={`# Verificar integridade de TODOS os pacotes instalados
  sudo rpm -Va
  # Verifica se arquivos foram modificados desde a instalação
  # Saída: flags indicando o que mudou
  # S = tamanho, M = permissões, 5 = checksum MD5,
  # D = dispositivo, L = symlink, U = usuário, G = grupo,
  # T = timestamp, P = capabilities

  # Exemplo de saída:
  # S.5....T.  c /etc/ssh/sshd_config
  # ^^         ^ = arquivo de configuração (modificado pelo admin, ok)
  # ||
  # |+--- checksum diferente
  # +---- tamanho diferente

  # Verificar apenas um pacote
  rpm -V firefox

  # Ignorar arquivos de configuração (que são normalmente editados)
  sudo rpm -Va 2>/dev/null | grep -v "^..........c"

  # Verificar assinatura GPG de um .rpm
  rpm -K pacote.rpm
  rpm --checksig pacote.rpm

  # Importar chave GPG de um repositório
  sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

  # Listar chaves GPG importadas
  rpm -qa gpg-pubkey*`}
          language="bash"
          title="verificação"
        />

        <h2>Instalando e Removendo com RPM</h2>
        <AlertBox type="warning" title="Prefira usar DNF!">
          Sempre que possível, use <code>dnf install</code> em vez de <code>rpm -i</code>. O DNF resolve dependências automaticamente, enquanto o rpm não. Use rpm diretamente apenas para consultas, diagnósticos ou situações especiais.
        </AlertBox>

        <CodeBlock
          code={`# Instalar um pacote .rpm (NÃO resolve dependências)
  sudo rpm -ivh pacote.rpm
  # -i = install, -v = verbose, -h = barra de progresso

  # Atualizar um pacote
  sudo rpm -Uvh pacote.rpm
  # -U = upgrade (instala se não existir)

  # Remover um pacote
  sudo rpm -e nome-do-pacote

  # Instalar .rpm COM resolução de dependências (use DNF!)
  sudo dnf install ./pacote.rpm
  # O DNF baixa e instala dependências automaticamente

  # Forçar instalação (CUIDADO — pode quebrar o sistema)
  sudo rpm -ivh --force --nodeps pacote.rpm

  # Reconstruir banco de dados RPM (se corrompido)
  sudo rpm --rebuilddb`}
          language="bash"
          title="instalação e remoção"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Repositórios Importantes</h2>
        <table>
          <thead><tr><th>Repositório</th><th>Conteúdo</th><th>Habilitado por padrão?</th></tr></thead>
          <tbody>
            <tr><td><strong>fedora</strong></td><td>Pacotes oficiais do Fedora</td><td>Sim</td></tr>
            <tr><td><strong>updates</strong></td><td>Atualizações de segurança e correções</td><td>Sim</td></tr>
            <tr><td><strong>updates-testing</strong></td><td>Atualizações em teste (QA)</td><td>Não</td></tr>
            <tr><td><strong>RPM Fusion Free</strong></td><td>Codecs, drivers open source não incluídos</td><td>Não</td></tr>
            <tr><td><strong>RPM Fusion NonFree</strong></td><td>Drivers NVIDIA, Steam, Discord</td><td>Não</td></tr>
            <tr><td><strong>COPR</strong></td><td>Repositórios criados pela comunidade (como PPAs)</td><td>Não</td></tr>
          </tbody>
        </table>

        <h3>COPR — Repositórios da Comunidade</h3>
        <CodeBlock
          code={`# COPR é o equivalente aos PPAs do Ubuntu

  # Habilitar um repositório COPR
  sudo dnf copr enable usuario/repositorio

  # Exemplo: instalar lazygit via COPR
  sudo dnf copr enable atim/lazygit
  sudo dnf install lazygit

  # Listar repositórios COPR habilitados
  dnf copr list

  # Desabilitar um COPR
  sudo dnf copr disable usuario/repositorio

  # Buscar no COPR: copr.fedorainfracloud.org`}
          language="bash"
          title="copr"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Criando um RPM Básico</h2>
        <p>Para criar seu próprio pacote RPM, você precisa de um arquivo <strong>.spec</strong> que descreve o pacote:</p>
        <CodeBlock
          code={`# Instalar ferramentas de construção
  sudo dnf install rpm-build rpmdevtools

  # Criar estrutura de diretórios
  rpmdev-setuptree
  # Cria: ~/rpmbuild/{BUILD,RPMS,SOURCES,SPECS,SRPMS}

  # Criar spec file básico
  rpmdev-newspec ~/rpmbuild/SPECS/meu-app.spec

  # Editar o spec file (estrutura simplificada):
  # Name:    meu-app
  # Version: 1.0
  # Release: 1%{?dist}
  # Summary: Minha aplicação
  # License: MIT
  # Source0: meu-app-1.0.tar.gz
  #
  # %description
  # Descrição do meu aplicativo.
  #
  # %prep
  # %setup -q
  #
  # %build
  # make
  #
  # %install
  # make install DESTDIR=%{buildroot}
  #
  # %files
  # /usr/local/bin/meu-app
  #
  # %changelog
  # * Mon Jan 15 2024 Seu Nome <email> - 1.0-1
  # - Versão inicial

  # Construir o RPM
  rpmbuild -ba ~/rpmbuild/SPECS/meu-app.spec
  # O .rpm final fica em ~/rpmbuild/RPMS/x86_64/`}
          language="bash"
          title="criando rpm"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Diagnóstico</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Dependência não encontrada</td><td><code>rpm -qpR pacote.rpm</code></td><td>Use <code>sudo dnf install ./pacote.rpm</code> para resolver automaticamente</td></tr>
            <tr><td>Conflito de arquivos</td><td><code>rpm -qf /caminho/arquivo</code></td><td>Remova o pacote conflitante ou use <code>--replacefiles</code></td></tr>
            <tr><td>DB RPM corrompida</td><td>Erros em qualquer operação rpm</td><td><code>sudo rpm --rebuilddb</code></td></tr>
            <tr><td>Chave GPG não confiável</td><td><code>rpm -K pacote.rpm</code></td><td>Importe a chave: <code>rpm --import URL_DA_CHAVE</code></td></tr>
            <tr><td>Arquivo modificado</td><td><code>rpm -V pacote</code></td><td>Reinstale: <code>sudo dnf reinstall pacote</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  