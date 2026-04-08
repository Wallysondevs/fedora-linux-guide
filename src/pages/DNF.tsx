import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Package, Search, Trash, RefreshCw, Shield, Settings, Clock } from "lucide-react";

  export default function DNF() {
    return (
      <PageContainer
        title="DNF — Gerenciador de Pacotes"
        subtitle="Domine o DNF para instalar, remover, atualizar e gerenciar softwares no Fedora de forma profissional."
        difficulty="iniciante"
        timeToRead="35 min"
      >
        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> O que é o DNF?</h2>
        <p>
          O <strong>DNF</strong> (Dandified YUM) é o gerenciador de pacotes oficial do Fedora. Ele substitui o antigo YUM e oferece melhor desempenho, resolução de dependências mais inteligente e uso de metadados em cache. O DNF5 é a versão mais recente, escrita em C++ para máxima performance.
        </p>
        <p>
          O DNF trabalha com pacotes no formato <strong>RPM</strong> e baixa-os de <strong>repositórios</strong> (servidores online que hospedam os pacotes). Ele resolve dependências automaticamente — se um pacote precisa de outro, o DNF instala ambos.
        </p>

        <h2>Operações Básicas</h2>

        <h3>Instalação de Pacotes</h3>
        <CodeBlock
          code={`# Instalar um pacote
  sudo dnf install nome-do-pacote

  # Instalar múltiplos pacotes de uma vez
  sudo dnf install vim git curl wget htop

  # Instalar sem confirmação (modo automático)
  sudo dnf install -y nome-do-pacote

  # Instalar um pacote .rpm local (resolve dependências!)
  sudo dnf install ./pacote-baixado.rpm

  # Instalar a partir de uma URL
  sudo dnf install https://exemplo.com/pacote.rpm

  # Reinstalar um pacote (restaurar arquivos originais)
  sudo dnf reinstall pacote

  # Instalar sem dependências fracas (instala menos coisas)
  sudo dnf install --setopt=install_weak_deps=False pacote

  # Simular instalação (ver o que seria instalado, sem instalar)
  sudo dnf install --assumeno pacote`}
          language="bash"
          title="instalação"
        />

        <h3>Remoção de Pacotes</h3>
        <CodeBlock
          code={`# Remover um pacote
  sudo dnf remove nome-do-pacote

  # Remover pacotes órfãos (dependências não mais necessárias)
  sudo dnf autoremove

  # Remover e listar o que será removido
  sudo dnf remove pacote --assumeno

  # Remover múltiplos
  sudo dnf remove pacote1 pacote2 pacote3`}
          language="bash"
          title="remoção"
        />

        <AlertBox type="warning" title="Cuidado com autoremove">
          O <code>dnf autoremove</code> pode remover pacotes que você ainda usa se eles foram instalados como dependência. Sempre revise a lista antes de confirmar.
        </AlertBox>

        <h3>Atualização</h3>
        <CodeBlock
          code={`# Verificar se há atualizações disponíveis
  sudo dnf check-update
  # Saída: lista de pacotes com versão atual e nova
  # Retorna código 100 se há atualizações, 0 se não

  # Atualizar todos os pacotes
  sudo dnf update -y

  # Atualizar um pacote específico
  sudo dnf update firefox

  # Atualizar e excluir pacotes específicos
  sudo dnf update --exclude=kernel*

  # Apenas atualizações de segurança
  sudo dnf update --security

  # Ver informações sobre atualizações de segurança
  dnf updateinfo list
  dnf updateinfo info --security

  # Verificar qual versão de um pacote está disponível
  dnf list firefox`}
          language="bash"
          title="atualização"
        />

        <AlertBox type="info" title="update vs upgrade">
          No Fedora, <code>dnf update</code> e <code>dnf upgrade</code> são exatamente equivalentes. Ambos atualizam pacotes existentes. Não confunda com <code>dnf system-upgrade</code> que muda de versão do Fedora.
        </AlertBox>

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Busca e Informações</h2>
        <CodeBlock
          code={`# Buscar pacotes por nome ou descrição
  dnf search termo-de-busca
  dnf search "media player"

  # Buscar apenas por nome
  dnf search --names-only firefox

  # Informações detalhadas de um pacote
  dnf info firefox
  # Name         : firefox
  # Version      : 121.0
  # Release      : 1.fc41
  # Architecture : x86_64
  # Size         : 284 M
  # Source       : firefox-121.0-1.fc41.src.rpm
  # Repository   : updates
  # Summary      : Mozilla Firefox Web browser
  # License      : MPLv2.0

  # Listar pacotes instalados
  dnf list installed
  dnf list installed | wc -l    # contar total

  # Listar pacotes disponíveis para instalar
  dnf list available | grep python

  # Descobrir qual pacote fornece um arquivo ou comando
  dnf provides /usr/bin/htop
  dnf provides "*/libssl.so*"
  dnf provides htop

  # Listar todos os arquivos de um pacote
  dnf repoquery -l firefox

  # Ver dependências de um pacote
  dnf repoquery --requires firefox
  dnf repoquery --deplist firefox

  # Quais pacotes dependem de X
  dnf repoquery --whatrequires openssl-libs

  # Ver pacotes instalados diretamente pelo usuário
  dnf repoquery --userinstalled

  # Listar pacotes por tamanho (maiores primeiro)
  dnf repoquery --installed --queryformat '%{size} %{name}' | sort -rn | head -20`}
          language="bash"
          title="busca e informações"
        />

        <h2>Grupos de Pacotes</h2>
        <p>O DNF permite instalar grupos temáticos de pacotes — coleções pré-definidas para facilitar a configuração:</p>
        <CodeBlock
          code={`# Listar todos os grupos disponíveis
  dnf group list

  # Ver conteúdo de um grupo
  dnf group info "Development Tools"

  # Instalar um grupo de pacotes
  sudo dnf group install "Development Tools"
  sudo dnf install @development-tools     # notação alternativa com @

  # Grupos úteis
  sudo dnf install @c-development         # ferramentas C/C++
  sudo dnf install @python-classroom      # Python completo
  sudo dnf install @multimedia            # codecs multimídia
  sudo dnf install @virtualization        # KVM/QEMU/libvirt

  # Remover grupo
  sudo dnf group remove "Development Tools"

  # Listar grupos instalados
  dnf group list --installed`}
          language="bash"
          title="grupos de pacotes"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Repositórios</h2>
        <CodeBlock
          code={`# Listar repositórios habilitados
  dnf repolist
  # repo id             repo name                          status
  # fedora              Fedora 41 - x86_64                 74,600
  # updates             Fedora 41 - x86_64 - Updates       25,300

  # Listar todos (incluindo desabilitados)
  dnf repolist all

  # Habilitar/desabilitar repositório
  sudo dnf config-manager --enable nome-do-repo
  sudo dnf config-manager --disable nome-do-repo

  # Adicionar repositório por URL
  sudo dnf config-manager --add-repo https://url-do-repo.repo

  # Instalar a partir de um repositório específico
  sudo dnf install --enablerepo=updates-testing pacote

  # Instalar RPM Fusion (repositório extra mais popular)
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
  sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # COPR — repositórios da comunidade (como PPAs do Ubuntu)
  sudo dnf copr enable usuario/repositorio
  sudo dnf copr disable usuario/repositorio
  dnf copr list`}
          language="bash"
          title="repositórios"
        />

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Histórico e Desfazer</h2>
        <CodeBlock
          code={`# Ver histórico de operações
  dnf history
  # ID  | Command line             | Date and time    | Action(s) | Altered
  #  5  | install nginx            | 2024-01-15 10:00 | Install   |    3
  #  4  | update                   | 2024-01-14 15:00 | Upgrade   |   45
  #  3  | install vim git curl     | 2024-01-13 09:00 | Install   |   12

  # Detalhes de uma operação
  dnf history info 5

  # Desfazer a última operação
  sudo dnf history undo last

  # Desfazer uma operação específica
  sudo dnf history undo 5

  # Refazer uma operação desfeita
  sudo dnf history redo 5

  # Fazer downgrade de um pacote
  sudo dnf downgrade firefox

  # Reverter para uma versão específica
  sudo dnf downgrade firefox-120.0-1.fc41`}
          language="bash"
          title="histórico"
        />

        <h2><Trash className="inline-block mr-2 mb-1 w-5 h-5" /> Limpeza e Manutenção</h2>
        <CodeBlock
          code={`# Limpar todo o cache do DNF
  sudo dnf clean all

  # Limpar apenas metadados / pacotes
  sudo dnf clean metadata
  sudo dnf clean packages

  # Reconstruir o cache
  sudo dnf makecache

  # Verificar problemas no banco de dados de pacotes
  sudo dnf check

  # Ver pacotes duplicados
  dnf repoquery --duplicates

  # Ver pacotes que não existem mais nos repositórios
  dnf list extras

  # Verificar espaço usado pelo cache
  du -sh /var/cache/dnf/`}
          language="bash"
          title="manutenção"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração do DNF</h2>
        <CodeBlock
          code={`# Arquivo de configuração principal
  cat /etc/dnf/dnf.conf

  # [main]
  # gpgcheck=1                    # verificar assinaturas GPG
  # installonly_limit=3           # manter 3 kernels instalados
  # clean_requirements_on_remove=True  # remover deps ao remover pacote
  # best=True                     # instalar melhor versão disponível
  # skip_if_unavailable=False     # falhar se repo indisponível

  # Adicionar configurações de performance:
  echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
  echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

  # Travar versão de um pacote (impedir atualização)
  sudo dnf install dnf-plugin-versionlock
  sudo dnf versionlock add kernel-6.11.4-301.fc41
  sudo dnf versionlock list
  sudo dnf versionlock delete kernel-6.11.4-301.fc41`}
          language="bash"
          title="configuração"
        />

        <AlertBox type="info" title="DNF vs YUM vs DNF5">
          O <strong>YUM</strong> foi o gerenciador original (Fedora até 21). O <strong>DNF</strong> o substituiu com melhor performance (Fedora 22+). O <strong>DNF5</strong> (Fedora 40+) é a reescrita em C++ — ainda mais rápido. Os comandos são compatíveis entre si.
        </AlertBox>

        <h2>Referência Rápida</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td><code>install</code></td><td>Instalar pacote</td><td><code>sudo dnf install vim</code></td></tr>
            <tr><td><code>remove</code></td><td>Remover pacote</td><td><code>sudo dnf remove vim</code></td></tr>
            <tr><td><code>update</code></td><td>Atualizar pacotes</td><td><code>sudo dnf update -y</code></td></tr>
            <tr><td><code>search</code></td><td>Buscar pacote</td><td><code>dnf search editor</code></td></tr>
            <tr><td><code>info</code></td><td>Informações</td><td><code>dnf info firefox</code></td></tr>
            <tr><td><code>list installed</code></td><td>Listar instalados</td><td><code>dnf list installed</code></td></tr>
            <tr><td><code>provides</code></td><td>Qual pacote fornece arquivo</td><td><code>dnf provides htop</code></td></tr>
            <tr><td><code>history</code></td><td>Histórico</td><td><code>dnf history</code></td></tr>
            <tr><td><code>history undo</code></td><td>Desfazer operação</td><td><code>sudo dnf history undo last</code></td></tr>
            <tr><td><code>autoremove</code></td><td>Remover órfãos</td><td><code>sudo dnf autoremove</code></td></tr>
            <tr><td><code>clean all</code></td><td>Limpar cache</td><td><code>sudo dnf clean all</code></td></tr>
            <tr><td><code>check-update</code></td><td>Ver atualizações</td><td><code>sudo dnf check-update</code></td></tr>
            <tr><td><code>repoquery</code></td><td>Consultar pacotes</td><td><code>dnf repoquery -l firefox</code></td></tr>
            <tr><td><code>group install</code></td><td>Instalar grupo</td><td><code>sudo dnf install @multimedia</code></td></tr>
            <tr><td><code>downgrade</code></td><td>Voltar versão</td><td><code>sudo dnf downgrade firefox</code></td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Erro de metadados / mirror</td><td><code>sudo dnf clean all && sudo dnf makecache</code></td></tr>
            <tr><td>Conflito de dependências</td><td><code>sudo dnf install --allowerasing pacote</code> ou <code>--skip-broken</code></td></tr>
            <tr><td>Pacote não encontrado</td><td>Verifique repositórios: <code>dnf repolist</code>. Habilite RPM Fusion se necessário</td></tr>
            <tr><td>Instalação travou</td><td><code>sudo dnf clean all</code> e tente novamente. Verifique internet</td></tr>
            <tr><td>Espaço em disco insuficiente</td><td><code>sudo dnf clean all && sudo dnf autoremove</code></td></tr>
            <tr><td>Pacote instalado mas comando não encontrado</td><td><code>dnf provides /usr/bin/comando</code> para verificar qual pacote instalar</td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  