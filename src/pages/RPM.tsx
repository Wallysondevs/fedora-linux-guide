import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Package, Search, Shield, Settings, FileText, Database, CheckCircle } from "lucide-react";

  export default function RPM() {
    return (
      <PageContainer
        title="RPM — Red Hat Package Manager"
        subtitle="Entenda o formato de pacotes RPM, consultas avançadas, verificação de integridade, repositórios COPR e criação de pacotes."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> O que é RPM?</h2>
        <p>
          O <strong>RPM</strong> (Red Hat Package Manager) é o formato de pacotes usado pelo Fedora, RHEL, CentOS, openSUSE e outras distribuições. Enquanto o <strong>DNF</strong> é o gerenciador de alto nível (resolve dependências, baixa de repositórios), o <strong>rpm</strong> é a ferramenta de baixo nível que manipula pacotes individuais.
        </p>
        <p>
          Um arquivo <code>.rpm</code> contém os binários compilados, scripts de instalação, metadados (nome, versão, dependências) e checksums para verificação de integridade.
        </p>

        <h3>Anatomia de um pacote RPM</h3>
        <table>
          <thead><tr><th>Parte</th><th>Descrição</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Nome</strong></td><td>Nome do software</td><td>firefox</td></tr>
            <tr><td><strong>Versão</strong></td><td>Versão upstream</td><td>121.0</td></tr>
            <tr><td><strong>Release</strong></td><td>Número da compilação</td><td>1.fc41</td></tr>
            <tr><td><strong>Arch</strong></td><td>Arquitetura</td><td>x86_64, noarch, aarch64</td></tr>
            <tr><td><strong>Nome completo</strong></td><td>Tudo junto</td><td>firefox-121.0-1.fc41.x86_64.rpm</td></tr>
          </tbody>
        </table>

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Consultas RPM</h2>
        <p>
          O comando <code>rpm -q</code> permite consultar informações detalhadas sobre pacotes instalados:
        </p>
        <CodeBlock
          code={`# Verificar se um pacote está instalado
  rpm -q firefox
  # firefox-121.0-1.fc41.x86_64

  # Informações completas
  rpm -qi firefox
  # Name        : firefox
  # Version     : 121.0
  # Release     : 1.fc41
  # Architecture: x86_64
  # Install Date: Mon 15 Jan 2024 10:00:00 AM
  # Size        : 284000000
  # License     : MPLv2.0
  # Summary     : Mozilla Firefox Web browser

  # Listar TODOS os arquivos de um pacote
  rpm -ql firefox | head -20

  # Listar apenas arquivos de configuração
  rpm -qc firefox

  # Listar apenas documentação
  rpm -qd firefox

  # Descobrir a qual pacote um arquivo pertence
  rpm -qf /usr/bin/vim
  # vim-enhanced-9.1.0-1.fc41.x86_64

  rpm -qf /etc/hostname
  # setup-2.14.5-2.fc41.noarch

  # Listar dependências de um pacote
  rpm -qR firefox | head -10

  # Listar todos os pacotes instalados
  rpm -qa | wc -l

  # Listar pacotes ordenados por data de instalação
  rpm -qa --last | head -20

  # Listar pacotes por tamanho
  rpm -qa --queryformat '%{size} %{name}\n' | sort -rn | head -20`}
          language="bash"
          title="consultas RPM"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Verificação de Integridade</h2>
        <p>
          O RPM pode verificar se os arquivos de um pacote foram modificados, corrompidos ou removidos:
        </p>
        <CodeBlock
          code={`# Verificar integridade de um pacote
  rpm -V firefox
  # Saída vazia = tudo OK
  # Se houver diferenças, mostra códigos:
  # S = tamanho diferente
  # M = permissões/modo diferente
  # 5 = checksum MD5 diferente
  # D = dispositivo major/minor diferente
  # L = readlink path diferente
  # U = dono (user) diferente
  # G = grupo diferente
  # T = tempo de modificação diferente
  # P = capabilities diferente

  # Exemplo de saída com modificações:
  # S.5....T.  c /etc/nginx/nginx.conf
  # (o arquivo de config foi editado - normal!)

  # Verificar TODOS os pacotes (demora)
  rpm -Va

  # Verificar assinatura GPG de um arquivo .rpm
  rpm --checksig pacote.rpm

  # Importar chave GPG de um repositório
  sudo rpm --import https://example.com/RPM-GPG-KEY

  # Listar chaves GPG importadas
  rpm -qa gpg-pubkey*`}
          language="bash"
          title="verificação de integridade"
        />

        <h2><Database className="inline-block mr-2 mb-1 w-5 h-5" /> Operações com Pacotes .rpm</h2>
        <CodeBlock
          code={`# IMPORTANTE: Prefira SEMPRE usar dnf para instalar pacotes
  # O rpm NÃO resolve dependências automaticamente!

  # Instalar um pacote .rpm local
  sudo rpm -ivh pacote.rpm

  # Atualizar um pacote
  sudo rpm -Uvh pacote.rpm   # instala se não existe, atualiza se existe
  sudo rpm -Fvh pacote.rpm   # apenas atualiza (não instala se não existe)

  # Remover um pacote
  sudo rpm -e nome-do-pacote

  # Flags importantes:
  # -i = install    -U = upgrade    -e = erase (remover)
  # -v = verbose    -h = hash (barra de progresso)

  # Instalar ignorando dependências (CUIDADO!)
  sudo rpm -ivh --nodeps pacote.rpm

  # Extrair conteúdo de um .rpm sem instalar
  rpm2cpio pacote.rpm | cpio -idmv

  # Ver conteúdo de um .rpm sem instalar
  rpm -qlp pacote.rpm

  # Ver informações de um .rpm não instalado
  rpm -qip pacote.rpm`}
          language="bash"
          title="operações com .rpm"
        />

        <AlertBox type="warning" title="rpm vs dnf">
          Use <code>rpm</code> apenas para consultas e verificações. Para instalar/remover pacotes, sempre prefira <code>dnf</code> — ele resolve dependências automaticamente e evita quebrar o sistema.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> COPR — Repositórios da Comunidade</h2>
        <p>
          O <strong>COPR</strong> (Cool Other Package Repositories) é o sistema de repositórios pessoais do Fedora — similar aos PPAs do Ubuntu. Qualquer desenvolvedor pode criar um COPR para distribuir seu software.
        </p>
        <CodeBlock
          code={`# Buscar repositórios COPR
  dnf copr search lazygit

  # Habilitar um repositório COPR
  sudo dnf copr enable atim/lazygit

  # Instalar pacotes do COPR
  sudo dnf install lazygit

  # Listar COPRs habilitados
  dnf copr list

  # Desabilitar um COPR
  sudo dnf copr disable atim/lazygit

  # Remover completamente um COPR
  sudo dnf copr remove atim/lazygit

  # COPRs populares para Fedora:
  # atim/lazygit         — interface TUI para Git
  # zeno/scrcpy          — espelhar tela do Android
  # elxreno/preload      — pré-carregamento de apps
  # kwizart/fedy         — ferramenta de pós-instalação`}
          language="bash"
          title="repositórios COPR"
        />

        <AlertBox type="warning" title="Segurança dos COPRs">
          COPRs são repositórios de terceiros e <strong>não são verificados pela equipe do Fedora</strong>. Use apenas COPRs de desenvolvedores confiáveis. Verifique o código-fonte e a reputação antes de habilitar.
        </AlertBox>

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Criar um Pacote RPM</h2>
        <p>
          Se você desenvolve software e quer distribuí-lo como RPM, precisa criar um arquivo <code>.spec</code>:
        </p>
        <CodeBlock
          code={`# Instalar ferramentas de build
  sudo dnf install rpm-build rpmdevtools

  # Criar estrutura de diretórios
  rpmdev-setuptree
  # Cria: ~/rpmbuild/{BUILD,RPMS,SOURCES,SPECS,SRPMS}

  # Estrutura de um arquivo .spec mínimo:
  cat << 'EOF' > ~/rpmbuild/SPECS/meuapp.spec
  Name:           meuapp
  Version:        1.0.0
  Release:        1%{?dist}
  Summary:        Meu aplicativo exemplo

  License:        MIT
  URL:            https://github.com/usuario/meuapp
  Source0:        %{name}-%{version}.tar.gz

  BuildRequires:  gcc, make
  Requires:       glibc

  %description
  Descrição completa do meu aplicativo.
  Pode ter múltiplas linhas explicando o que faz.

  %prep
  %autosetup

  %build
  make %{?_smp_mflags}

  %install
  make install DESTDIR=%{buildroot}

  %files
  %license LICENSE
  %doc README.md
  %{_bindir}/meuapp

  %changelog
  * Mon Jan 15 2024 Seu Nome <email@exemplo.com> - 1.0.0-1
  - Versão inicial do pacote
  EOF

  # Compilar o pacote
  rpmbuild -ba ~/rpmbuild/SPECS/meuapp.spec

  # O pacote .rpm será criado em:
  # ~/rpmbuild/RPMS/x86_64/meuapp-1.0.0-1.fc41.x86_64.rpm`}
          language="bash"
          title="criar pacote RPM"
        />

        <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Referência Rápida RPM</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>rpm -q pacote</code></td><td>Verificar se está instalado</td></tr>
            <tr><td><code>rpm -qi pacote</code></td><td>Informações detalhadas</td></tr>
            <tr><td><code>rpm -ql pacote</code></td><td>Listar arquivos do pacote</td></tr>
            <tr><td><code>rpm -qc pacote</code></td><td>Listar arquivos de configuração</td></tr>
            <tr><td><code>rpm -qf /caminho/arquivo</code></td><td>Qual pacote fornece este arquivo</td></tr>
            <tr><td><code>rpm -qa</code></td><td>Listar todos os pacotes</td></tr>
            <tr><td><code>rpm -qa --last</code></td><td>Pacotes por data de instalação</td></tr>
            <tr><td><code>rpm -V pacote</code></td><td>Verificar integridade</td></tr>
            <tr><td><code>rpm -qip arquivo.rpm</code></td><td>Info de .rpm não instalado</td></tr>
            <tr><td><code>rpm -qlp arquivo.rpm</code></td><td>Listar arquivos de .rpm não instalado</td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Dependência faltando ao instalar .rpm</td><td>Use <code>sudo dnf install ./pacote.rpm</code> em vez de <code>rpm -ivh</code></td></tr>
            <tr><td>Banco de dados RPM corrompido</td><td><code>sudo rpm --rebuilddb</code></td></tr>
            <tr><td>Pacote não remove</td><td><code>sudo rpm -e --nodeps pacote</code> (cuidado!)</td></tr>
            <tr><td>Arquivos de config modificados</td><td><code>rpm -V pacote</code> mostra diferenças (normal para configs editados)</td></tr>
            <tr><td>Chave GPG não confiável</td><td><code>sudo rpm --import</code> a chave GPG do repositório</td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  