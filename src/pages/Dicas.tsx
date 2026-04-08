import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Lightbulb, Zap, Terminal, Settings, Monitor, Shield } from "lucide-react";

  export default function Dicas() {
    return (
      <PageContainer
        title="Dicas e Truques"
        subtitle="Atalhos, hacks e dicas avançadas para aumentar sua produtividade no Fedora Linux."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><Lightbulb className="inline-block mr-2 mb-1 w-5 h-5" /> Produtividade no Terminal</h2>

        <h3>Histórico e Navegação</h3>
        <CodeBlock
          code={`# Buscar no histórico (Ctrl+R)
  # Pressione Ctrl+R e comece a digitar — navega pelo histórico

  # Ver histórico completo
  history
  history | grep dnf      # filtrar por palavra
  history 20              # últimos 20 comandos

  # Executar último comando que começa com uma palavra
  !dnf                    # execute o último comando que começa com "dnf"
  !!                      # repete o último comando
  sudo !!                 # repete o último comando com sudo

  # Reutilizar argumentos do comando anterior
  ls /etc/nginx
  cd !$                   # !$ = último argumento do comando anterior
  echo !^                 # !^ = primeiro argumento do comando anterior
  echo !*                 # !* = todos os argumentos do comando anterior

  # Substituição rápida em comandos
  ^velho^novo             # repete o último comando trocando 'velho' por 'novo'

  # Atalhos de teclado no Bash
  # Ctrl+A = início da linha    Ctrl+E = fim da linha
  # Ctrl+U = apagar até início  Ctrl+K = apagar até fim
  # Ctrl+W = apagar palavra     Alt+B = voltar uma palavra
  # Ctrl+L = limpar tela         Alt+F = avançar uma palavra
  # Ctrl+D = sair do shell       Ctrl+C = cancelar comando`}
          language="bash"
          title="histórico e atalhos"
        />

        <h3>Aliases e Funções</h3>
        <CodeBlock
          code={`# Adicionar aliases úteis ao ~/.bashrc
  alias ll="ls -lah --color=auto"
  alias la="ls -A"
  alias ..="cd .."
  alias ...="cd ../.."
  alias grep="grep --color=auto"
  alias df="df -h"
  alias du="du -sh"
  alias free="free -h"
  alias ports="ss -tulpn"
  alias myip="curl -s ifconfig.me"
  alias update="sudo dnf update -y"
  alias limpar="sudo dnf autoremove && sudo dnf clean all"

  # Funções úteis
  # Criar diretório e entrar nele
  mkcd() { mkdir -p "$1" && cd "$1"; }

  # Extrair qualquer arquivo compactado
  extract() {
    if [ -f "$1" ]; then
      case "$1" in
        *.tar.bz2)   tar xjf "$1"    ;;
        *.tar.gz)    tar xzf "$1"    ;;
        *.tar.xz)    tar xJf "$1"    ;;
        *.bz2)       bunzip2 "$1"    ;;
        *.gz)        gunzip "$1"     ;;
        *.tar)       tar xf "$1"     ;;
        *.zip)       unzip "$1"      ;;
        *.7z)        7z x "$1"       ;;
        *)           echo "Formato não reconhecido: $1" ;;
      esac
    else
      echo "Arquivo não encontrado: $1"
    fi
  }

  # Aplicar as mudanças
  source ~/.bashrc`}
          language="bash"
          title="aliases e funções"
        />

        <h3>Processos em Background</h3>
        <CodeBlock
          code={`# Executar comando em background
  comando &

  # Ver jobs em background
  jobs

  # Trazer job para foreground
  fg %1         # %1 = job número 1

  # Enviar job para background
  bg %1

  # Suspender processo em foreground
  # Ctrl+Z (depois use bg para continuar em background)

  # Executar e desacoplar do terminal
  nohup comando > saida.log 2>&1 &

  # tmux — múltiplos terminais em uma janela
  sudo dnf install tmux
  tmux                          # iniciar sessão
  tmux new -s trabalho          # sessão com nome
  tmux attach -t trabalho       # reconectar
  tmux ls                       # listar sessões

  # Atalhos do tmux (prefixo: Ctrl+B):
  # Ctrl+B c   = nova janela
  # Ctrl+B n/p = próxima/anterior janela
  # Ctrl+B %   = dividir verticalmente
  # Ctrl+B "   = dividir horizontalmente
  # Ctrl+B d   = desacoplar (detach)
  # Ctrl+B [   = modo de scroll (q para sair)`}
          language="bash"
          title="processos e tmux"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Truques do DNF</h2>
        <CodeBlock
          code={`# Acelerar downloads
  echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
  echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

  # Ver qual pacote fornece um arquivo/comando
  dnf provides /usr/bin/htop
  dnf provides "*/libssl.so*"
  dnf provides htop

  # Ver pacotes instalados manualmente (não como dependência)
  dnf repoquery --installed --userinstalled

  # Dependências de um pacote
  dnf repoquery --deplist firefox
  dnf repoquery --requires firefox

  # Quais pacotes dependem de X
  dnf repoquery --whatrequires openssl

  # Simular instalação (dry-run)
  sudo dnf install pacote --assumeno

  # Instalar sem dependências fracas (instala menos coisas)
  sudo dnf install pacote --setopt=install_weak_deps=False

  # Excluir pacote de atualizações permanentemente
  sudo dnf install dnf-plugin-versionlock
  sudo dnf versionlock add nome-do-pacote
  sudo dnf versionlock list
  sudo dnf versionlock delete nome-do-pacote

  # Ver informações de um pacote
  dnf info firefox

  # Listar arquivos de um pacote instalado
  rpm -ql firefox

  # Qual pacote instalou um arquivo
  rpm -qf /usr/bin/firefox`}
          language="bash"
          title="dnf avançado"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Dicas de Segurança</h2>
        <CodeBlock
          code={`# Verificar portas abertas no sistema
  ss -tulpn
  sudo nmap -sT localhost

  # Verificar processos suspeitos
  ps auxf                      # árvore de processos
  sudo lsof -i                 # conexões de rede por processo
  sudo lsof -i :8080           # quem está usando a porta 8080

  # Verificar últimos logins
  last                         # logins bem-sucedidos
  lastb                        # tentativas com falha
  sudo journalctl -u sshd | grep Failed

  # Verificar integridade de pacotes
  sudo rpm -Va 2>/dev/null | grep -v "^..........c"

  # Ver arquivos SUID/SGID (potencial risco)
  sudo find / -perm /6000 -type f 2>/dev/null | grep -v proc

  # Auditoria SELinux
  sudo ausearch -m avc -ts today
  sudo audit2why < /var/log/audit/audit.log

  # Verificar se há atualizações de segurança pendentes
  dnf updateinfo list --security
  sudo dnf update --security`}
          language="bash"
          title="segurança"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Dicas do GNOME</h2>
        <CodeBlock
          code={`# Atalhos essenciais do GNOME
  # Super (Win)         = Visão geral de atividades
  # Super + A           = Abrir menu de aplicativos
  # Super + L           = Bloquear tela
  # Super + D           = Mostrar desktop
  # Super + ←/→         = Snap janela esquerda/direita
  # Super + ↑           = Maximizar janela
  # Super + ↓           = Restaurar janela
  # Alt + F2            = Executar comando
  # Alt + Tab           = Alternar janelas
  # Ctrl + Alt + T      = Terminal (se configurado)
  # Super + Page Up/Down = Trocar workspace

  # gsettings úteis
  gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
  gsettings set org.gnome.desktop.peripherals.touchpad natural-scroll false
  gsettings set org.gnome.desktop.sound allow-volume-above-100-percent true
  gsettings set org.gnome.desktop.interface clock-show-date true
  gsettings set org.gnome.desktop.interface clock-show-weekday true
  gsettings set org.gnome.desktop.interface monospace-font-name 'JetBrains Mono 11'
  gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'

  # Instalar GNOME Tweaks para mais opções
  sudo dnf install gnome-tweaks

  # Instalar Extension Manager (gerenciar extensões)
  flatpak install flathub com.mattjakeman.ExtensionManager

  # Extensões recomendadas:
  # - AppIndicator (ícones de bandeja do sistema)
  # - Dash to Dock (dock estilo macOS)
  # - Blur my Shell (transparência/blur)
  # - Caffeine (impedir suspensão)
  # - Clipboard Indicator (histórico de clipboard)`}
          language="bash"
          title="gnome"
        />

        <h2>Monitoramento do Sistema</h2>
        <CodeBlock
          code={`# Uso de CPU, RAM e processos
  htop                    # monitor interativo
  btop                    # monitor bonito e completo

  # Uso de disco
  df -h                   # espaço em disco
  duf                     # df moderno (sudo dnf install duf)
  ncdu /                  # navegação interativa de uso de disco

  # Uso de memória detalhado
  free -h
  vmstat 1                # estatísticas a cada 1 segundo

  # Temperatura e sensores
  sudo dnf install lm_sensors
  sudo sensors-detect     # configurar (aceite os padrões)
  sensors                 # ver temperaturas

  # Informações do sistema
  neofetch                # resumo visual (sudo dnf install neofetch)
  fastfetch               # alternativa mais rápida (sudo dnf install fastfetch)
  inxi -F                 # informações detalhadas de hardware
  lscpu                   # informações do processador
  lsblk                   # dispositivos de armazenamento
  lspci                   # dispositivos PCI (placa de vídeo, rede, etc.)
  lsusb                   # dispositivos USB`}
          language="bash"
          title="monitoramento"
        />

        <AlertBox type="success" title="Instale o tldr para ajuda rápida">
          O <strong>tldr</strong> oferece exemplos práticos de comandos, muito mais útil que o man para consultas rápidas. <code>sudo dnf install tldr && tldr dnf</code>
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas Essenciais</h2>
        <CodeBlock
          code={`# Ferramentas que todo usuário Fedora deve ter
  sudo dnf install -y \
    vim neovim \              # editores
    htop btop \               # monitoramento de processos
    bat \                     # cat melhorado com syntax highlighting
    fd-find \                 # find mais rápido e amigável
    ripgrep \                 # grep mais rápido
    fzf \                     # busca fuzzy interativa
    tldr \                    # exemplos de comandos
    tmux \                    # multiplexador de terminal
    git-delta \               # diff melhorado para git
    ncdu \                    # uso de disco interativo
    duf \                     # df melhorado
    jq \                      # processador de JSON
    wget curl \               # download de arquivos
    net-tools \               # ifconfig, netstat
    nmap \                    # scan de rede
    rsync \                   # sincronização eficiente
    fastfetch \               # informações do sistema
    trash-cli                  # lixeira pelo terminal

  # bat — cat com syntax highlighting
  bat arquivo.py              # mostra com cores e números de linha
  bat --theme=Dracula arquivo # tema personalizado

  # fd — find melhorado
  fd "*.py"                   # buscar arquivos .py
  fd -e tsx src/              # buscar .tsx em src/

  # ripgrep — grep melhorado
  rg "import" src/            # buscar "import" em src/
  rg -t py "def main"         # buscar apenas em arquivos Python

  # fzf — busca fuzzy
  # Ctrl+R com fzf = busca no histórico interativa
  # Ctrl+T = buscar arquivos
  # Alt+C = navegar diretórios`}
          language="bash"
          title="ferramentas recomendadas"
        />
      </PageContainer>
    );
  }
  