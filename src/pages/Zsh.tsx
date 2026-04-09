import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Terminal, Zap, Settings, Palette, Download, BookOpen } from "lucide-react";

  export default function Zsh() {
    return (
      <PageContainer
        title="Zsh — Shell Avançado"
        subtitle="Instale e configure o Zsh com Oh My Zsh no Fedora: temas, plugins, auto-sugestões e personalização do terminal."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Zsh?</h2>
        <p>
          O <strong>Zsh</strong> (Z Shell) é uma alternativa poderosa ao Bash. Ele oferece auto-completar
          avançado, correção de erros, temas visuais, plugins e muitos recursos que tornam o uso do
          terminal mais produtivo e agradável. Combinado com o <strong>Oh My Zsh</strong>, o Zsh se torna
          um ambiente altamente personalizável.
        </p>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação</h2>
        <CodeBlock
          code={`# Instalar Zsh
  sudo dnf install zsh

  # Verificar versão
  zsh --version

  # Definir Zsh como shell padrão
  chsh -s $(which zsh)

  # Faça logout e login para aplicar
  # Na primeira vez, o Zsh pergunta sobre configuração
  # Escolha opção 2 (configuração recomendada)

  # Verificar shell atual
  echo $SHELL`}
          language="bash"
          title="instalação"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Oh My Zsh</h2>
        <CodeBlock
          code={`# Instalar Oh My Zsh
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

  # O Oh My Zsh instala em ~/.oh-my-zsh/
  # E cria o arquivo de config ~/.zshrc

  # Editar configuração
  vim ~/.zshrc`}
          language="bash"
          title="Oh My Zsh"
        />

        <h2><Palette className="inline-block mr-2 mb-1 w-5 h-5" /> Temas</h2>
        <CodeBlock
          code={`# Editar o tema no ~/.zshrc:
  # ZSH_THEME="robbyrussell"    ← padrão

  # Temas populares:
  ZSH_THEME="agnoster"        # visual bonito com setas
  ZSH_THEME="powerlevel10k/powerlevel10k"  # o mais popular
  ZSH_THEME="spaceship"       # informações do git, node, python
  ZSH_THEME="af-magic"        # simples e limpo
  ZSH_THEME="bira"            # duas linhas, informativo

  # Instalar Powerlevel10k (tema mais popular)
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
    \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

  # Ativar no ~/.zshrc:
  # ZSH_THEME="powerlevel10k/powerlevel10k"

  # Recarregar
  source ~/.zshrc

  # O Powerlevel10k abre um wizard de configuração interativo
  # Ele pergunta sobre visual, ícones, informações a mostrar, etc.`}
          language="bash"
          title="temas"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Plugins Essenciais</h2>
        <CodeBlock
          code={`# Editar plugins no ~/.zshrc:
  plugins=(
      git                 # aliases de git (gst, ga, gc, gp, etc.)
      dnf                 # aliases para dnf
      sudo                # pressione Esc Esc para adicionar sudo
      history             # melhorias no histórico
      colored-man-pages   # man pages coloridas
      command-not-found   # sugere pacote quando comando não existe
      copypath            # copiar caminho do diretório atual
      copyfile            # copiar conteúdo de um arquivo
      web-search          # buscar no google direto do terminal
      extract             # extrair qualquer arquivo compactado
      z                   # navegação rápida por diretórios frequentes
  )

  # Instalar plugins de terceiros:

  # zsh-autosuggestions (sugestões enquanto digita)
  git clone https://github.com/zsh-users/zsh-autosuggestions \
    \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

  # zsh-syntax-highlighting (cores na sintaxe)
  git clone https://github.com/zsh-users/zsh-syntax-highlighting \
    \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

  # Adicionar ao plugins=() no ~/.zshrc:
  plugins=(
      git
      sudo
      z
      zsh-autosuggestions
      zsh-syntax-highlighting
  )

  # Recarregar
  source ~/.zshrc`}
          language="bash"
          title="plugins"
        />

        <h2>Recursos Únicos do Zsh</h2>
        <CodeBlock
          code={`# Auto-completar com Tab (muito mais inteligente que Bash)
  cd /u/l/b<Tab>     # expande para /usr/local/bin
  kill <Tab>         # mostra lista de processos
  ssh <Tab>          # lista hosts do ~/.ssh/config

  # Globbing avançado
  ls **/*.txt        # todos os .txt recursivamente
  ls *(.)            # apenas arquivos
  ls *(/)            # apenas diretórios
  ls *(.m-7)         # arquivos modificados nos últimos 7 dias

  # Correção automática
  sl                 # "Did you mean 'ls'?" → y para corrigir

  # Histórico compartilhado entre terminais
  # Habilitar no ~/.zshrc:
  setopt SHARE_HISTORY

  # Busca no histórico com setas (com texto parcial)
  # Digite "ssh" e pressione ↑ — mostra último comando com "ssh"`}
          language="bash"
          title="recursos do Zsh"
        />

        <h2>Configuração Recomendada (.zshrc)</h2>
        <CodeBlock
          code={`# ~/.zshrc — Configuração recomendada

  # Oh My Zsh
  export ZSH="$HOME/.oh-my-zsh"
  ZSH_THEME="powerlevel10k/powerlevel10k"

  # Plugins
  plugins=(git sudo z history zsh-autosuggestions zsh-syntax-highlighting)

  source $ZSH/oh-my-zsh.sh

  # Aliases
  alias ll='ls -lah --color=auto'
  alias atualizar='sudo dnf update -y'
  alias reload='source ~/.zshrc'

  # PATH
  export PATH="$HOME/.local/bin:$PATH"

  # Editor padrão
  export EDITOR="vim"

  # Histórico
  HISTSIZE=10000
  SAVEHIST=10000
  setopt SHARE_HISTORY`}
          language="bash"
          title="~/.zshrc"
        />

        <h2>Bash vs Zsh</h2>
        <table>
          <thead><tr><th>Recurso</th><th>Bash</th><th>Zsh</th></tr></thead>
          <tbody>
            <tr><td>Auto-completar</td><td>Básico</td><td>Avançado com menus</td></tr>
            <tr><td>Correção de erros</td><td>Não</td><td>Sim</td></tr>
            <tr><td>Temas</td><td>Limitado (PS1)</td><td>Oh My Zsh (centenas)</td></tr>
            <tr><td>Plugins</td><td>Manual</td><td>Sistema de plugins</td></tr>
            <tr><td>Globbing</td><td>Básico</td><td>Avançado (**/*)</td></tr>
            <tr><td>Disponibilidade</td><td>Padrão em quase tudo</td><td>Precisa instalar</td></tr>
            <tr><td>Scripts</td><td>Padrão POSIX</td><td>Compatível (quase tudo funciona)</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Seus scripts Bash continuam funcionando">
          O Zsh é compatível com a maioria dos scripts Bash. Seus <code>~/.bashrc</code> aliases e
          funções podem ser portados para <code>~/.zshrc</code> facilmente. Scripts com <code>#!/bin/bash</code>
          continuam usando Bash independente do shell padrão.
        </AlertBox>
      </PageContainer>
    );
  }
  