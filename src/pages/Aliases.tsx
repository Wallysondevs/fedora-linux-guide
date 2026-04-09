import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Terminal, Zap, Settings, FileText, BookOpen } from "lucide-react";

  export default function Aliases() {
    return (
      <PageContainer
        title="Aliases — Atalhos de Comandos"
        subtitle="Crie aliases no Bash para simplificar comandos longos: aliases temporários, permanentes e funções úteis para o dia a dia."
        difficulty="iniciante"
        timeToRead="20 min"
      >
        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> O que são Aliases?</h2>
        <p>
          Um <strong>alias</strong> é um atalho para um comando ou sequência de comandos. Em vez de digitar
          <code>sudo dnf update -y && sudo dnf autoremove -y</code> toda vez, você cria um alias como
          <code>atualizar</code> e digita apenas isso. Aliases economizam tempo e reduzem erros.
        </p>

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Criar Aliases</h2>
        <CodeBlock
          code={`# Alias temporário (desaparece ao fechar o terminal)
  alias atualizar='sudo dnf update -y'
  alias ll='ls -la --color=auto'
  alias cls='clear'

  # Usar o alias
  atualizar    # executa: sudo dnf update -y

  # Ver todos os aliases ativos
  alias

  # Ver um alias específico
  alias ll

  # Remover alias temporário
  unalias ll`}
          language="bash"
          title="aliases básicos"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Aliases Permanentes</h2>
        <p>
          Adicione aliases ao <code>~/.bashrc</code> para que persistam entre sessões:
        </p>
        <CodeBlock
          code={`# Edite o ~/.bashrc
  vim ~/.bashrc

  # Adicione seus aliases no final do arquivo:

  # === Aliases de navegação ===
  alias ..='cd ..'
  alias ...='cd ../..'
  alias ....='cd ../../..'
  alias home='cd ~'
  alias dl='cd ~/Downloads'
  alias docs='cd ~/Documents'
  alias proj='cd ~/projetos'

  # === Aliases de listagem ===
  alias ll='ls -lah --color=auto'
  alias la='ls -A --color=auto'
  alias l='ls -CF --color=auto'
  alias lt='ls -ltrh'    # ordenar por data modificação

  # === Aliases de segurança ===
  alias rm='rm -i'        # pedir confirmação antes de remover
  alias cp='cp -i'        # pedir confirmação antes de sobrescrever
  alias mv='mv -i'        # pedir confirmação antes de mover

  # === Aliases de sistema (DNF) ===
  alias atualizar='sudo dnf update -y && sudo dnf autoremove -y'
  alias instalar='sudo dnf install'
  alias remover='sudo dnf remove'
  alias buscar='dnf search'
  alias info='dnf info'

  # === Aliases de rede ===
  alias ip='ip -c a'         # IP com cores
  alias portas='ss -tulpn'   # portas abertas
  alias ping='ping -c 5'     # ping com 5 pacotes

  # === Aliases de processos ===
  alias ps='ps auxf'
  alias top='htop'
  alias mem='free -h'
  alias disco='df -h'

  # === Aliases de Git ===
  alias gs='git status'
  alias ga='git add'
  alias gc='git commit'
  alias gp='git push'
  alias gl='git log --oneline --graph'
  alias gd='git diff'
  alias gb='git branch'

  # === Aliases de Podman/Docker ===
  alias pods='podman ps -a'
  alias pimg='podman images'

  # === Utilitários ===
  alias h='history'
  alias cls='clear'
  alias reload='source ~/.bashrc'
  alias clima='curl wttr.in'
  alias myip='curl ifconfig.me'

  # Aplicar mudanças
  source ~/.bashrc`}
          language="bash"
          title="aliases permanentes"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Aliases com Parâmetros (Funções)</h2>
        <p>
          Aliases simples não aceitam parâmetros. Para isso, use <strong>funções</strong>:
        </p>
        <CodeBlock
          code={`# Funções no ~/.bashrc

  # Criar diretório e entrar nele
  mkcd() {
      mkdir -p "$1" && cd "$1"
  }
  # Uso: mkcd meu-projeto

  # Extrair qualquer tipo de arquivo compactado
  extrair() {
      if [ -f "$1" ]; then
          case "$1" in
              *.tar.bz2) tar xjf "$1" ;;
              *.tar.gz)  tar xzf "$1" ;;
              *.tar.xz)  tar xJf "$1" ;;
              *.bz2)     bunzip2 "$1" ;;
              *.gz)      gunzip "$1" ;;
              *.tar)     tar xf "$1" ;;
              *.zip)     unzip "$1" ;;
              *.7z)      7z x "$1" ;;
              *.rar)     unrar x "$1" ;;
              *)         echo "Formato não suportado: $1" ;;
          esac
      else
          echo "Arquivo não encontrado: $1"
      fi
  }
  # Uso: extrair arquivo.tar.gz

  # Backup rápido de um arquivo
  bak() {
      cp "$1" "$1.bak.$(date +%Y%m%d)"
  }
  # Uso: bak config.conf  →  config.conf.bak.20240115

  # Buscar processos
  pgrep_custom() {
      ps aux | grep -v grep | grep -i "$1"
  }
  alias pg='pgrep_custom'
  # Uso: pg firefox`}
          language="bash"
          title="funções no .bashrc"
        />

        <h2>Arquivo Separado para Aliases</h2>
        <CodeBlock
          code={`# Para organizar melhor, crie um arquivo separado:
  touch ~/.bash_aliases

  # No ~/.bashrc, adicione:
  if [ -f ~/.bash_aliases ]; then
      source ~/.bash_aliases
  fi

  # Agora coloque todos os aliases em ~/.bash_aliases
  # Isso mantém o .bashrc mais limpo e organizado`}
          language="bash"
          title="~/.bash_aliases"
        />

        <AlertBox type="info" title="Aliases vs Scripts">
          Use <strong>aliases</strong> para atalhos curtos e simples. Para lógica complexa (condicionais,
          loops, vários comandos), crie um <strong>script</strong> em <code>~/scripts/</code> e adicione
          ao PATH.
        </AlertBox>
      </PageContainer>
    );
  }
  