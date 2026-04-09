import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Wine, Settings, Download, FolderOpen, Monitor, Wrench } from "lucide-react";

  export default function WinePage() {
    return (
      <PageContainer
        title="Wine — Programas Windows no Linux"
        subtitle="Execute aplicativos e jogos Windows no Fedora com Wine: instalação, configuração de prefixos, Winetricks e resolução de problemas."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Wine className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Wine?</h2>
        <p>
          O <strong>Wine</strong> (Wine Is Not an Emulator) é uma camada de compatibilidade que permite
          executar aplicativos Windows no Linux. Ele traduz chamadas da API do Windows para chamadas
          POSIX em tempo real, sem emulação — o programa roda diretamente no hardware.
        </p>
        <p>
          Wine é a base do <strong>Proton</strong> (Steam), <strong>Lutris</strong> e <strong>Bottles</strong>,
          mas também pode ser usado diretamente para aplicativos como Microsoft Office, Adobe Photoshop
          (versões mais antigas) e muitos outros programas Windows.
        </p>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação</h2>
        <CodeBlock
          code={`# Instalar Wine (versão estável)
  sudo dnf install wine

  # Instalar dependências extras (recomendado)
  sudo dnf install wine-mono wine-gecko

  # wine-mono = substituto do .NET Framework
  # wine-gecko = substituto do Internet Explorer

  # Verificar versão
  wine --version

  # Configurar Wine (cria o prefixo padrão ~/.wine)
  winecfg
  # Abre uma janela gráfica de configuração
  # Selecione a versão do Windows (Windows 10 recomendado)`}
          language="bash"
          title="instalação"
        />

        <h2><FolderOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Prefixos Wine</h2>
        <p>
          Um "prefixo" Wine é um diretório que simula uma instalação completa do Windows
          (com C:, Arquivos de Programas, Registro, etc.). O prefixo padrão fica em <code>~/.wine</code>.
        </p>
        <CodeBlock
          code={`# Prefixo padrão
  ls ~/.wine/
  # dosdevices/  → mapeamento de drives (C:, Z:, etc.)
  # drive_c/     → equivalente ao C:\ do Windows
  # system.reg   → registro do sistema
  # user.reg     → registro do usuário

  # Criar prefixo separado (para isolar aplicativos)
  export WINEPREFIX=~/wine-office
  winecfg
  # Cria um novo prefixo em ~/wine-office/

  # Prefixo 32-bit (necessário para alguns apps antigos)
  export WINEARCH=win32
  export WINEPREFIX=~/wine32
  winecfg

  # Executar programa em prefixo específico
  WINEPREFIX=~/wine-office wine /caminho/programa.exe`}
          language="bash"
          title="prefixos"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Usar Wine</h2>
        <CodeBlock
          code={`# Executar um .exe
  wine programa.exe

  # Executar um instalador
  wine setup.exe

  # Abrir o "Explorador de Arquivos" do Wine
  wine explorer

  # Bloco de Notas
  wine notepad

  # Regedit (Editor de Registro)
  wine regedit

  # Painel de Controle
  wine control

  # Uninstaller
  wine uninstaller

  # Matar todos os processos Wine
  wineserver -k

  # Abrir prompt de comando do Windows
  wine cmd`}
          language="bash"
          title="comandos básicos"
        />

        <h2><Wrench className="inline-block mr-2 mb-1 w-5 h-5" /> Winetricks — Instalar Componentes</h2>
        <CodeBlock
          code={`# Instalar Winetricks
  sudo dnf install winetricks

  # Interface gráfica
  winetricks --gui

  # Instalar componentes comuns
  winetricks vcrun2019          # Visual C++ Redistributable
  winetricks dotnet48            # .NET Framework 4.8
  winetricks corefonts           # Fontes Microsoft (Arial, Times, etc.)
  winetricks d3dx9               # DirectX 9
  winetricks dxvk                # DirectX→Vulkan (para jogos)

  # Instalar em prefixo específico
  WINEPREFIX=~/wine-office winetricks corefonts

  # Listar componentes disponíveis
  winetricks list-all`}
          language="bash"
          title="winetricks"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Bottles — Alternativa Moderna</h2>
        <p>
          O <strong>Bottles</strong> é uma interface gráfica moderna para gerenciar prefixos Wine:
        </p>
        <CodeBlock
          code={`# Instalar Bottles
  flatpak install flathub com.usebottles.bottles

  # Bottles oferece:
  # - Interface gráfica amigável
  # - Templates prontos (Gaming, Aplicativos, Custom)
  # - Instalação automática de dependências
  # - Isolamento por "garrafa" (prefixo)
  # - Integração com Proton e DXVK`}
          language="bash"
          title="Bottles"
        />

        <h2>Compatibilidade</h2>
        <table>
          <thead><tr><th>Aplicativo</th><th>Status</th><th>Notas</th></tr></thead>
          <tbody>
            <tr><td>Microsoft Office</td><td>Funciona parcialmente</td><td>Versões mais antigas funcionam melhor</td></tr>
            <tr><td>Adobe Photoshop</td><td>Funciona parcialmente</td><td>CC 2019 funciona com ajustes</td></tr>
            <tr><td>Jogos DirectX 9/10/11</td><td>Funciona bem</td><td>Use DXVK para melhor performance</td></tr>
            <tr><td>Notepad++</td><td>Funciona perfeitamente</td><td>-</td></tr>
            <tr><td>7-Zip</td><td>Funciona perfeitamente</td><td>Mas use o nativo do Linux</td></tr>
            <tr><td>Anti-cheat (jogos online)</td><td>Problemático</td><td>A maioria não funciona</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="WineHQ AppDB">
          Consulte <strong>appdb.winehq.org</strong> para verificar a compatibilidade de um programa
          antes de tentar instalá-lo. A comunidade classifica cada aplicativo com notas de Platinum a Garbage.
        </AlertBox>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Programa não abre</td><td>Tente <code>wine programa.exe</code> no terminal para ver erros</td></tr>
            <tr><td>Falta de DLL</td><td>Use <code>winetricks</code> para instalar o componente</td></tr>
            <tr><td>Fonte ilegível</td><td><code>winetricks corefonts</code></td></tr>
            <tr><td>Erro de DirectX</td><td><code>winetricks dxvk</code> ou <code>winetricks d3dx9</code></td></tr>
            <tr><td>Crash ao iniciar</td><td>Tente outro WINEPREFIX ou WINEARCH=win32</td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  