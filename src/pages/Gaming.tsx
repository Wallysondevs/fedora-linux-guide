import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Gamepad2, Download, Settings, Monitor, Cpu, Wine } from "lucide-react";

  export default function Gaming() {
    return (
      <PageContainer
        title="Gaming no Fedora"
        subtitle="Configure seu Fedora para jogos: Steam, Proton, Lutris, Wine, drivers de GPU, GameMode e otimizações de performance."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Gamepad2 className="inline-block mr-2 mb-1 w-5 h-5" /> Gaming no Linux</h2>
        <p>
          O gaming no Linux evoluiu enormemente nos últimos anos, especialmente graças ao <strong>Proton</strong>
          da Valve (baseado no Wine), que permite rodar jogos Windows no Linux. O Fedora é uma excelente
          plataforma para jogos, com kernel atualizado, drivers recentes e suporte nativo a Vulkan.
        </p>

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Drivers de GPU</h2>
        <p>
          Drivers atualizados são essenciais para performance em jogos:
        </p>

        <h3>AMD (recomendado para Linux)</h3>
        <CodeBlock
          code={`# AMD usa drivers Mesa open source (já instalados!)
  # Verificar versão do driver:
  glxinfo | grep "OpenGL renderer"

  # Instalar suporte Vulkan (essencial para jogos)
  sudo dnf install vulkan-loader vulkan-tools mesa-vulkan-drivers

  # Verificar se Vulkan está funcionando
  vulkaninfo --summary

  # Atualizar drivers
  sudo dnf update mesa-*`}
          language="bash"
          title="drivers AMD"
        />

        <h3>NVIDIA</h3>
        <CodeBlock
          code={`# Instalar driver proprietário (via RPM Fusion)
  sudo dnf install akmod-nvidia

  # Instalar suporte Vulkan para NVIDIA
  sudo dnf install xorg-x11-drv-nvidia-cuda vulkan-loader

  # IMPORTANTE: Reiniciar após instalar!
  sudo reboot

  # Verificar
  nvidia-smi
  vulkaninfo --summary`}
          language="bash"
          title="drivers NVIDIA"
        />

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Steam</h2>
        <CodeBlock
          code={`# Método 1: Via RPM Fusion (nativo)
  sudo dnf install steam

  # Método 2: Via Flatpak (sandboxed)
  flatpak install flathub com.valvesoftware.Steam

  # Habilitar Steam Play (Proton) para todos os jogos:
  # Steam > Settings > Compatibility
  # Marque: "Enable Steam Play for all other titles"
  # Selecione: Proton Experimental (ou versão mais recente)

  # Ver jogos compatíveis: https://www.protondb.com/
  # ProtonDB mostra ratings de compatibilidade:
  # Platinum = funciona perfeitamente
  # Gold = funciona com pequenos ajustes
  # Silver = funciona com configuração extra`}
          language="bash"
          title="steam"
        />

        <h2><Wine className="inline-block mr-2 mb-1 w-5 h-5" /> Wine e Lutris</h2>
        <p>
          Para jogos fora da Steam (Epic Games, GOG, Battle.net, etc.), use o <strong>Lutris</strong>:
        </p>
        <CodeBlock
          code={`# Instalar Wine (camada de compatibilidade Windows)
  sudo dnf install wine wine-mono wine-gecko

  # Instalar Lutris (gerenciador de jogos)
  sudo dnf install lutris
  # Ou via Flatpak:
  flatpak install flathub net.lutris.Lutris

  # Lutris tem scripts de instalação automática para:
  # - Epic Games Store
  # - GOG Galaxy
  # - Battle.net / Blizzard
  # - EA App / Origin
  # - Ubisoft Connect
  # Basta buscar o jogo em lutris.net e clicar "Install"

  # Instalar Bottles (alternativa mais moderna ao Wine)
  flatpak install flathub com.usebottles.bottles`}
          language="bash"
          title="Wine e Lutris"
        />

        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> GameMode e Otimizações</h2>
        <CodeBlock
          code={`# GameMode — otimiza o sistema enquanto joga
  sudo dnf install gamemode

  # O Steam detecta GameMode automaticamente
  # Para outros jogos, use:
  gamemoderun /caminho/do/jogo

  # MangoHud — overlay de FPS e performance
  sudo dnf install mangohud

  # Usar MangoHud com jogos:
  mangohud /caminho/do/jogo
  # Ou no Steam: adicione nas opções de lançamento:
  # mangohud %command%
  # gamemoderun mangohud %command%    (ambos juntos!)

  # Configurar MangoHud
  mkdir -p ~/.config/MangoHud
  cat > ~/.config/MangoHud/MangoHud.conf << 'EOF'
  fps
  gpu_stats
  cpu_stats
  ram
  frame_timing
  position=top-left
  font_size=20
  EOF

  # Verificar se GameMode está ativo
  gamemoded -s`}
          language="bash"
          title="otimizações"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Controladores/Joysticks</h2>
        <CodeBlock
          code={`# Xbox Controllers (funcionam nativamente via USB e Bluetooth)
  # Verificar se foi detectado:
  ls /dev/input/js*

  # PlayStation DualShock/DualSense
  # Funcionam nativamente no Fedora via Bluetooth ou USB

  # Testar controlador
  sudo dnf install joystick
  jstest /dev/input/js0

  # Se o controlador não for detectado:
  sudo dnf install xpadneo-dkms   # driver melhorado para Xbox
  sudo dnf install game-devices-udev  # regras udev para controladores`}
          language="bash"
          title="controladores"
        />

        <h2>Emuladores</h2>
        <table>
          <thead><tr><th>Console</th><th>Emulador</th><th>Instalação</th></tr></thead>
          <tbody>
            <tr><td>Nintendo Switch</td><td>Ryujinx / Yuzu</td><td>Flatpak</td></tr>
            <tr><td>PlayStation 2</td><td>PCSX2</td><td><code>flatpak install flathub net.pcsx2.PCSX2</code></td></tr>
            <tr><td>PlayStation 3</td><td>RPCS3</td><td><code>flatpak install flathub net.rpcs3.RPCS3</code></td></tr>
            <tr><td>GameCube / Wii</td><td>Dolphin</td><td><code>sudo dnf install dolphin-emu</code></td></tr>
            <tr><td>Multi-sistema</td><td>RetroArch</td><td><code>flatpak install flathub org.libretro.RetroArch</code></td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Jogo não inicia no Proton</td><td>Tente outra versão do Proton; veja ProtonDB para dicas</td></tr>
            <tr><td>FPS baixo</td><td>Verifique driver GPU; use GameMode; feche apps desnecessários</td></tr>
            <tr><td>Vulkan não encontrado</td><td><code>sudo dnf install mesa-vulkan-drivers vulkan-loader</code></td></tr>
            <tr><td>Anti-cheat não funciona</td><td>Alguns anti-cheats não suportam Linux (verifique ProtonDB)</td></tr>
            <tr><td>Controlador não detectado</td><td><code>sudo dnf install game-devices-udev</code> e reconecte</td></tr>
            <tr><td>Tearing na tela</td><td>Habilite VSync nas configurações do jogo ou compositor</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="ProtonDB é seu melhor amigo">
          Antes de comprar um jogo, verifique em <strong>protondb.com</strong> se ele funciona no Linux.
          A comunidade reporta compatibilidade e dicas de configuração para cada jogo.
        </AlertBox>
      </PageContainer>
    );
  }
  