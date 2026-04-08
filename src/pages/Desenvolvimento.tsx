import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Globe, Package, Database, Terminal, Settings, GitBranch } from "lucide-react";

  export default function Desenvolvimento() {
    return (
      <PageContainer
        title="Ambiente de Desenvolvimento"
        subtitle="Configure um ambiente de desenvolvimento completo no Fedora — Python, Node.js, Java, Go, Rust, bancos de dados, Git e ferramentas essenciais."
        difficulty="intermediario"
        timeToRead="45 min"
      >
        <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas Base</h2>
        <CodeBlock
          code={`# Instalar grupo de ferramentas de compilação
  sudo dnf groupinstall "Development Tools" "C Development Tools and Libraries"

  # Ou instalar individualmente
  sudo dnf install gcc gcc-c++ make cmake autoconf automake
  sudo dnf install git curl wget openssl-devel zlib-devel

  # Verificar versões
  gcc --version
  make --version
  git --version`}
          language="bash"
          title="ferramentas base"
        />

        <h2><GitBranch className="inline-block mr-2 mb-1 w-5 h-5" /> Git — Configuração Completa</h2>
        <CodeBlock
          code={`# Configuração inicial obrigatória
  git config --global user.name "Seu Nome"
  git config --global user.email "seu@email.com"

  # Configurações recomendadas
  git config --global core.editor "vim"             # ou code, nano
  git config --global init.defaultBranch main        # branch padrão
  git config --global pull.rebase true               # rebase ao invés de merge no pull
  git config --global push.autoSetupRemote true      # push automático para nova branch
  git config --global diff.colorMoved default        # highlight de código movido
  git config --global merge.conflictstyle diff3      # mostra base no conflito

  # Aliases úteis
  git config --global alias.st "status -sb"
  git config --global alias.lg "log --oneline --graph --all --decorate"
  git config --global alias.co "checkout"
  git config --global alias.br "branch"
  git config --global alias.cm "commit -m"
  git config --global alias.last "log -1 HEAD --stat"
  git config --global alias.undo "reset HEAD~1 --mixed"

  # Gerar chave SSH para GitHub/GitLab
  ssh-keygen -t ed25519 -C "seu@email.com"
  # Copie ~/.ssh/id_ed25519.pub e adicione nas settings do GitHub

  # Testar conexão SSH com GitHub
  ssh -T git@github.com

  # Ver toda a configuração
  git config --list --show-origin

  # Instalar git-delta (diff melhorado)
  sudo dnf install git-delta
  git config --global core.pager delta
  git config --global delta.navigate true
  git config --global delta.side-by-side true`}
          language="bash"
          title="configuração do git"
        />

        <h2>Python</h2>
        <CodeBlock
          code={`# Python 3 vem pré-instalado no Fedora
  python3 --version
  pip3 --version

  # Instalar versões adicionais
  sudo dnf install python3.11 python3.12

  # Ambiente virtual (SEMPRE use para projetos)
  python3 -m venv meu-projeto
  source meu-projeto/bin/activate
  pip install flask requests pandas
  pip freeze > requirements.txt    # salvar dependências
  deactivate                       # sair do venv

  # Instalar a partir de requirements.txt
  pip install -r requirements.txt

  # pyenv — gerenciar múltiplas versões do Python
  # Dependências primeiro:
  sudo dnf install readline-devel sqlite-devel bzip2-devel \
    libffi-devel xz-devel tk-devel

  curl https://pyenv.run | bash
  # Adicione ao ~/.bashrc:
  # export PYENV_ROOT="$HOME/.pyenv"
  # export PATH="$PYENV_ROOT/bin:$PATH"
  # eval "$(pyenv init -)"
  source ~/.bashrc
  pyenv install 3.12.0
  pyenv global 3.12.0
  pyenv versions          # listar versões instaladas

  # Poetry — gerenciador moderno de dependências
  curl -sSL https://install.python-poetry.org | python3 -
  poetry new meu-projeto
  poetry add flask
  poetry install
  poetry run python app.py`}
          language="bash"
          title="python"
        />

        <h2>Node.js e JavaScript/TypeScript</h2>
        <CodeBlock
          code={`# Instalar Node.js via dnf (versão dos repos)
  sudo dnf install nodejs npm

  # NVM — gerenciar múltiplas versões (RECOMENDADO)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc
  nvm install --lts          # última versão LTS
  nvm install 20             # versão específica
  nvm install 22
  nvm use 20                 # alternar versão
  nvm list                   # listar instaladas
  nvm alias default 20       # definir padrão

  # Verificar versões
  node --version
  npm --version

  # Gerenciadores de pacotes alternativos
  npm install -g pnpm        # pnpm — rápido, eficiente
  npm install -g yarn        # yarn — clássico

  # Criar projeto moderno
  pnpm create vite meu-app -- --template react-ts
  cd meu-app
  pnpm install
  pnpm dev

  # TypeScript global
  npm install -g typescript ts-node
  tsc --version`}
          language="bash"
          title="node.js"
        />

        <h2>Go (Golang)</h2>
        <CodeBlock
          code={`# Instalar Go
  sudo dnf install golang

  # Verificar versão e ambiente
  go version
  go env GOPATH GOROOT

  # Configurar paths (adicione ao ~/.bashrc)
  export GOPATH=$HOME/go
  export PATH=$PATH:$GOPATH/bin

  # Criar um projeto Go
  mkdir -p ~/projetos/meu-app && cd ~/projetos/meu-app
  go mod init github.com/usuario/meu-app

  # Exemplo de programa
  cat > main.go << 'EOF'
  package main

  import (
      "fmt"
      "net/http"
  )

  func main() {
      http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
          fmt.Fprintf(w, "Olá do Fedora!")
      })
      fmt.Println("Servidor rodando em :8080")
      http.ListenAndServe(":8080", nil)
  }
  EOF

  go run main.go
  go build -o meu-app main.go    # compilar binário

  # Ferramentas úteis
  go install golang.org/x/tools/gopls@latest        # LSP
  go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest  # linter`}
          language="bash"
          title="go"
        />

        <h2>Rust</h2>
        <CodeBlock
          code={`# Instalar Rust via rustup (método oficial)
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  source $HOME/.cargo/env

  # Verificar instalação
  rustc --version
  cargo --version
  rustup --version

  # Criar projeto
  cargo new meu-projeto
  cd meu-projeto
  cargo run              # compilar e executar
  cargo build            # compilar (debug)
  cargo build --release  # compilar (otimizado)
  cargo test             # rodar testes
  cargo fmt              # formatar código
  cargo clippy           # linter

  # Instalar componentes adicionais
  rustup component add rustfmt clippy rust-analyzer

  # Atualizar Rust
  rustup update

  # Instalar ferramenta a partir de crates.io
  cargo install ripgrep fd-find bat`}
          language="bash"
          title="rust"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Java</h2>
        <CodeBlock
          code={`# Instalar Java (OpenJDK)
  sudo dnf install java-21-openjdk java-21-openjdk-devel

  # Ver versões disponíveis
  sudo dnf list java* | grep openjdk

  # Alternar entre versões Java instaladas
  sudo alternatives --config java
  sudo alternatives --config javac

  # Verificar versão ativa
  java -version
  javac -version

  # Definir JAVA_HOME
  export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))
  echo "export JAVA_HOME=$JAVA_HOME" >> ~/.bashrc

  # Build tools
  sudo dnf install maven gradle

  # Criar projeto Maven
  mvn archetype:generate -DgroupId=com.exemplo -DartifactId=meu-app

  # SDKMAN — gerenciar múltiplas versões Java
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  sdk list java
  sdk install java 21-open
  sdk use java 21-open`}
          language="bash"
          title="java"
        />

        <h2><Database className="inline-block mr-2 mb-1 w-5 h-5" /> Bancos de Dados</h2>

        <h3>PostgreSQL</h3>
        <CodeBlock
          code={`# Instalar PostgreSQL
  sudo dnf install postgresql-server postgresql

  # Inicializar o banco de dados
  sudo postgresql-setup --initdb

  # Habilitar e iniciar
  sudo systemctl enable --now postgresql

  # Acessar como superuser
  sudo -u postgres psql

  # Dentro do psql:
  # CREATE USER meuuser WITH PASSWORD 'senha123';
  # CREATE DATABASE meubanco OWNER meuuser;
  # GRANT ALL PRIVILEGES ON DATABASE meubanco TO meuuser;
  # \q

  # Conectar ao banco
  psql -U meuuser -d meubanco -h localhost

  # Permitir conexões com senha (editar pg_hba.conf)
  sudo nano /var/lib/pgsql/data/pg_hba.conf
  # Mude "ident" para "md5" ou "scram-sha-256"
  sudo systemctl restart postgresql`}
          language="bash"
          title="postgresql"
        />

        <h3>MySQL/MariaDB</h3>
        <CodeBlock
          code={`# Instalar MariaDB (fork do MySQL)
  sudo dnf install mariadb-server mariadb

  # Habilitar e iniciar
  sudo systemctl enable --now mariadb

  # Configuração de segurança inicial
  sudo mysql_secure_installation

  # Acessar
  sudo mysql -u root
  # CREATE DATABASE meubanco;
  # CREATE USER 'meuuser'@'localhost' IDENTIFIED BY 'senha123';
  # GRANT ALL ON meubanco.* TO 'meuuser'@'localhost';
  # FLUSH PRIVILEGES;`}
          language="bash"
          title="mariadb"
        />

        <h3>Redis e MongoDB</h3>
        <CodeBlock
          code={`# Redis
  sudo dnf install redis
  sudo systemctl enable --now redis
  redis-cli ping    # Saída: PONG

  # MongoDB (via repositório oficial)
  # Adicionar repo: docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
  # Ou via Podman (mais simples):
  podman run -d --name mongo -p 27017:27017 mongo:7

  # SQLite (já instalado)
  sqlite3 meubanco.db`}
          language="bash"
          title="redis e mongodb"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Editores e IDEs</h2>
        <CodeBlock
          code={`# VS Code (via repo oficial da Microsoft)
  sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
  echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo
  sudo dnf install code

  # VS Code via Flatpak (alternativa)
  flatpak install flathub com.visualstudio.code

  # Neovim
  sudo dnf install neovim python3-neovim
  # Config em ~/.config/nvim/init.lua

  # Vim
  sudo dnf install vim-enhanced

  # JetBrains Toolbox (IntelliJ, PyCharm, GoLand, etc.)
  # Baixe em jetbrains.com/toolbox-app
  # Ou via Flatpak:
  flatpak install flathub com.jetbrains.IntelliJ-IDEA-Community

  # Extensões VS Code essenciais
  code --install-extension ms-python.python
  code --install-extension golang.go
  code --install-extension rust-lang.rust-analyzer
  code --install-extension dbaeumer.vscode-eslint
  code --install-extension esbenp.prettier-vscode
  code --install-extension ms-vscode.vscode-typescript-next`}
          language="bash"
          title="editores e ides"
        />

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas de Desenvolvimento</h2>
        <CodeBlock
          code={`# Ferramentas essenciais
  sudo dnf install -y \
    htop btop \            # monitoramento
    bat \                  # cat melhorado
    fd-find \              # find rápido
    ripgrep \              # grep rápido
    fzf \                  # busca fuzzy
    jq \                   # processador JSON
    yq \                   # processador YAML
    httpie \               # HTTP client amigável
    tmux \                 # multiplexador de terminal
    strace ltrace \        # debug de syscalls
    valgrind \             # análise de memória
    shellcheck              # linter para bash

  # lazygit — interface Git no terminal
  sudo dnf copr enable atim/lazygit -y
  sudo dnf install lazygit

  # Starship — prompt bonito e informativo
  curl -sS https://starship.rs/install.sh | sh
  echo 'eval "$(starship init bash)"' >> ~/.bashrc

  # direnv — variáveis de ambiente por diretório
  sudo dnf install direnv
  echo 'eval "$(direnv hook bash)"' >> ~/.bashrc`}
          language="bash"
          title="ferramentas dev"
        />

        <AlertBox type="info" title="Fedora é a distro dos desenvolvedores">
          O Fedora é amplamente usado por desenvolvedores na Red Hat, IBM e comunidade open source. Ferramentas como systemd, Wayland, PipeWire e Podman foram desenvolvidas e amadurecidas no ecossistema Fedora antes de chegar a outras distros. Linus Torvalds usa Fedora como distro principal.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Comparação de Setup</h2>
        <table>
          <thead><tr><th>Linguagem</th><th>Instalação</th><th>Gerenciador de Versões</th><th>Gerenciador de Pacotes</th></tr></thead>
          <tbody>
            <tr><td><strong>Python</strong></td><td>Pré-instalado</td><td>pyenv</td><td>pip, poetry</td></tr>
            <tr><td><strong>Node.js</strong></td><td>dnf ou nvm</td><td>nvm</td><td>npm, pnpm, yarn</td></tr>
            <tr><td><strong>Go</strong></td><td>dnf</td><td>goenv</td><td>go mod</td></tr>
            <tr><td><strong>Rust</strong></td><td>rustup</td><td>rustup</td><td>cargo</td></tr>
            <tr><td><strong>Java</strong></td><td>dnf</td><td>sdkman, alternatives</td><td>maven, gradle</td></tr>
            <tr><td><strong>C/C++</strong></td><td>dnf</td><td>—</td><td>conan, vcpkg</td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  