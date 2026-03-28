import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Code, Globe, Package } from "lucide-react";

export default function Desenvolvimento() {
  return (
    <PageContainer
      title="Ambiente de Desenvolvimento"
      subtitle="Configure um ambiente de desenvolvimento completo no Fedora — Python, Node.js, Java, Go, Rust e ferramentas essenciais."
      difficulty="intermediario"
      timeToRead="35 min"
    >
      <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas Base</h2>
      <CodeBlock
        code={`# Instalar ferramentas de compilação essenciais
sudo dnf install @development-tools
sudo dnf install gcc gcc-c++ make cmake
sudo dnf install git curl wget

# Git — configuração inicial
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global core.editor "vim"
git config --global init.defaultBranch main

# Ver configuração do git
git config --list`}
        language="bash"
        title="ferramentas base"
      />

      <h2>Python</h2>
      <CodeBlock
        code={`# Python 3 vem instalado no Fedora
python3 --version
pip3 --version

# Instalar versões adicionais
sudo dnf install python3.11 python3.12

# Ambiente virtual (recomendado para projetos)
python3 -m venv meu-projeto
source meu-projeto/bin/activate
pip install pacote
deactivate

# Instalar via pip (nível de usuário)
pip3 install --user nome-do-pacote

# pyenv — gerenciar múltiplas versões do Python
curl https://pyenv.run | bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
pyenv install 3.12.0
pyenv global 3.12.0`}
        language="bash"
        title="python"
      />

      <h2>Node.js e JavaScript</h2>
      <CodeBlock
        code={`# Instalar Node.js via dnf
sudo dnf install nodejs npm

# Verificar versões
node --version
npm --version

# NVM — gerenciar múltiplas versões Node (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts          # última versão LTS
nvm install 20             # versão específica
nvm use 20
nvm list

# Instalar pnpm (gerenciador de pacotes mais eficiente)
npm install -g pnpm

# Criar projeto
mkdir meu-app && cd meu-app
npm init -y
# ou: pnpm create vite meu-app`}
        language="bash"
        title="node.js"
      />

      <h2>Go (Golang)</h2>
      <CodeBlock
        code={`# Instalar Go via dnf
sudo dnf install golang

# Verificar versão
go version

# Configurar GOPATH
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc

# Criar um projeto Go
mkdir -p ~/go/src/meu-projeto
cd ~/go/src/meu-projeto
go mod init meu-projeto
cat > main.go << 'EOF'
package main
import "fmt"
func main() {
    fmt.Println("Olá do Fedora!")
}
EOF
go run main.go`}
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

# Criar um projeto Rust
cargo new meu-projeto
cd meu-projeto
cargo run
cargo build --release`}
        language="bash"
        title="rust"
      />

      <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Java</h2>
      <CodeBlock
        code={`# Instalar Java (OpenJDK)
sudo dnf install java-21-openjdk java-21-openjdk-devel

# Ver versões disponíveis
sudo dnf list java*

# Alternar entre versões Java
sudo alternatives --config java

# Verificar versão ativa
java -version
javac -version

# Instalar Maven
sudo dnf install maven

# Instalar Gradle
sudo dnf install gradle`}
        language="bash"
        title="java"
      />

      <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Editores e IDEs</h2>
      <CodeBlock
        code={`# VS Code via Flatpak (recomendado)
flatpak install flathub com.visualstudio.code

# Neovim (editor modal avançado)
sudo dnf install neovim python3-neovim

# Vim
sudo dnf install vim-enhanced

# JetBrains Toolbox (para IntelliJ, PyCharm, etc.)
# Baixe em jetbrains.com/toolbox-app

# Instalar extensões no VS Code via CLI
code --install-extension ms-python.python
code --install-extension golang.go
code --install-extension rust-lang.rust-analyzer`}
        language="bash"
        title="editores"
      />

      <AlertBox type="info" title="Fedora é a distro dos desenvolvedores">
        O Fedora é amplamente usado por desenvolvedores na Red Hat, IBM e comunidade open source. Ferramentas como systemd, Wayland, PipeWire e Podman foram desenvolvidas e amadurecidas no ecossistema Fedora antes de chegar a outras distros.
      </AlertBox>
    </PageContainer>
  );
}
