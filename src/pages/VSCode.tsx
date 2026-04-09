import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Download, Settings, Keyboard, Puzzle, Palette } from "lucide-react";

  export default function VSCode() {
    return (
      <PageContainer
        title="VS Code — Editor de Código"
        subtitle="Instale e configure o Visual Studio Code no Fedora: extensões essenciais, atalhos, configurações, terminal integrado e debugging."
        difficulty="iniciante"
        timeToRead="25 min"
      >
        <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> O que é VS Code?</h2>
        <p>
          O <strong>Visual Studio Code</strong> (VS Code) é o editor de código mais popular do mundo. Desenvolvido
          pela Microsoft, é open source, gratuito e disponível para Linux. Oferece IntelliSense (auto-completar
          inteligente), debugging integrado, controle de versão Git, terminal embutido e milhares de extensões.
        </p>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação</h2>
        <CodeBlock
          code={`# Método 1: Repositório oficial Microsoft
  sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
  sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
  sudo dnf install code

  # Método 2: Flatpak
  flatpak install flathub com.visualstudio.code

  # Abrir VS Code
  code

  # Abrir pasta no VS Code
  code ~/meu-projeto

  # Abrir arquivo específico
  code arquivo.py`}
          language="bash"
          title="instalação"
        />

        <AlertBox type="info" title="VS Code vs VSCodium">
          O <strong>VSCodium</strong> é uma versão 100% open source do VS Code, sem telemetria da Microsoft.
          Instale com: <code>sudo dnf install codium</code> (via RPM Fusion) ou Flatpak.
        </AlertBox>

        <h2><Keyboard className="inline-block mr-2 mb-1 w-5 h-5" /> Atalhos Essenciais</h2>
        <table>
          <thead><tr><th>Atalho</th><th>Ação</th></tr></thead>
          <tbody>
            <tr><td><code>Ctrl+Shift+P</code></td><td>Paleta de comandos (o mais importante!)</td></tr>
            <tr><td><code>Ctrl+P</code></td><td>Abrir arquivo pelo nome</td></tr>
            <tr><td><code>Ctrl+Shift+F</code></td><td>Buscar em todos os arquivos</td></tr>
            <tr><td><code>Ctrl+`</code></td><td>Abrir/fechar terminal integrado</td></tr>
            <tr><td><code>Ctrl+B</code></td><td>Mostrar/ocultar sidebar</td></tr>
            <tr><td><code>Ctrl+D</code></td><td>Selecionar próxima ocorrência</td></tr>
            <tr><td><code>Ctrl+Shift+K</code></td><td>Deletar linha</td></tr>
            <tr><td><code>Alt+↑/↓</code></td><td>Mover linha para cima/baixo</td></tr>
            <tr><td><code>Ctrl+/</code></td><td>Comentar/descomentar linha</td></tr>
            <tr><td><code>Ctrl+Shift+L</code></td><td>Selecionar TODAS as ocorrências</td></tr>
            <tr><td><code>Ctrl+Space</code></td><td>IntelliSense (auto-completar)</td></tr>
            <tr><td><code>F2</code></td><td>Renomear símbolo</td></tr>
            <tr><td><code>F12</code></td><td>Ir para definição</td></tr>
            <tr><td><code>Alt+Shift+F</code></td><td>Formatar documento</td></tr>
            <tr><td><code>Ctrl+K Ctrl+S</code></td><td>Ver todos os atalhos</td></tr>
          </tbody>
        </table>

        <h2><Puzzle className="inline-block mr-2 mb-1 w-5 h-5" /> Extensões Essenciais</h2>
        <CodeBlock
          code={`# Instalar extensões pela linha de comando:

  # Geral
  code --install-extension esbenp.prettier-vscode
  code --install-extension dbaeumer.vscode-eslint
  code --install-extension eamodio.gitlens
  code --install-extension wayou.vscode-todo-highlight
  code --install-extension christian-kohler.path-intellisense

  # Python
  code --install-extension ms-python.python
  code --install-extension ms-python.vscode-pylance

  # JavaScript/TypeScript
  code --install-extension bradlc.vscode-tailwindcss
  code --install-extension dsznajder.es7-react-js-snippets

  # C/C++
  code --install-extension ms-vscode.cpptools

  # Java
  code --install-extension vscjava.vscode-java-pack

  # Docker/Podman
  code --install-extension ms-azuretools.vscode-docker

  # Tema
  code --install-extension dracula-theme.theme-dracula
  code --install-extension PKief.material-icon-theme

  # Listar extensões instaladas
  code --list-extensions`}
          language="bash"
          title="extensões"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configurações Recomendadas</h2>
        <CodeBlock
          code={`// Abra: Ctrl+Shift+P → "Open User Settings (JSON)"
  // Ou edite: ~/.config/Code/User/settings.json
  {
      "editor.fontSize": 14,
      "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
      "editor.fontLigatures": true,
      "editor.tabSize": 2,
      "editor.formatOnSave": true,
      "editor.wordWrap": "on",
      "editor.minimap.enabled": false,
      "editor.bracketPairColorization.enabled": true,
      "editor.guides.bracketPairs": true,
      "editor.linkedEditing": true,
      "editor.smoothScrolling": true,
      "editor.cursorBlinking": "smooth",
      "editor.cursorSmoothCaretAnimation": "on",

      "workbench.colorTheme": "Dracula",
      "workbench.iconTheme": "material-icon-theme",
      "workbench.startupEditor": "none",

      "terminal.integrated.fontSize": 13,
      "terminal.integrated.defaultProfile.linux": "bash",

      "files.autoSave": "afterDelay",
      "files.autoSaveDelay": 1000,
      "files.trimTrailingWhitespace": true,
      "files.insertFinalNewline": true,

      "explorer.confirmDragAndDrop": false,
      "explorer.confirmDelete": false
  }`}
          language="json"
          title="settings.json"
        />

        <h2><Palette className="inline-block mr-2 mb-1 w-5 h-5" /> Fontes para Programação</h2>
        <CodeBlock
          code={`# JetBrains Mono (recomendada)
  sudo dnf install jetbrains-mono-fonts

  # Fira Code (com ligatures)
  sudo dnf install fira-code-fonts

  # Depois, configure no VS Code:
  # "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace"
  # "editor.fontLigatures": true`}
          language="bash"
          title="fontes"
        />

        <AlertBox type="success" title="Terminal integrado">
          O VS Code tem um terminal embutido (<code>Ctrl+`</code>) que permite executar comandos
          sem sair do editor. Você pode abrir múltiplos terminais, dividir a tela e até usar
          diferentes shells (Bash, Zsh, Fish).
        </AlertBox>
      </PageContainer>
    );
  }
  