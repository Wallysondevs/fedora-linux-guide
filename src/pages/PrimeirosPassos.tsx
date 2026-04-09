import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Rocket, Settings, Package, Monitor, Shield, Palette, Wifi, HardDrive } from "lucide-react";

  export default function PrimeirosPassos() {
    return (
      <PageContainer
        title="Primeiros Passos no Fedora"
        subtitle="Checklist completo para configurar seu Fedora após a instalação: repositórios, codecs, drivers, aplicativos e otimizações."
        difficulty="iniciante"
        timeToRead="35 min"
      >
        <h2><Rocket className="inline-block mr-2 mb-1 w-5 h-5" /> Visão Geral</h2>
        <p>
          Após instalar o Fedora, há vários passos importantes para deixar o sistema pronto para uso diário. O Fedora vem com uma base sólida, mas por sua filosofia de usar apenas software livre por padrão, alguns extras precisam ser instalados manualmente — como codecs de vídeo, drivers proprietários e repositórios adicionais.
        </p>
        <p>
          Este guia cobre tudo o que você precisa fazer no primeiro dia com o Fedora, em ordem lógica.
        </p>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> 1. Atualizar o Sistema</h2>
        <p>
          O primeiro passo é sempre atualizar todos os pacotes para as versões mais recentes. Isso corrige bugs, falhas de segurança e melhora a compatibilidade.
        </p>
        <CodeBlock
          code={`# Atualizar todos os pacotes
  sudo dnf update -y

  # Reiniciar após atualizações do kernel
  sudo reboot

  # Verificar a versão do Fedora e kernel
  cat /etc/fedora-release
  uname -r`}
          language="bash"
          title="atualizar sistema"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> 2. Otimizar o DNF</h2>
        <p>
          O DNF pode ser significativamente mais rápido com algumas configurações extras:
        </p>
        <CodeBlock
          code={`# Adicionar configurações de performance ao DNF
  echo 'max_parallel_downloads=10' | sudo tee -a /etc/dnf/dnf.conf
  echo 'fastestmirror=True' | sudo tee -a /etc/dnf/dnf.conf

  # Verificar as configurações
  cat /etc/dnf/dnf.conf`}
          language="bash"
          title="otimizar DNF"
        />

        <AlertBox type="info" title="Diferença de velocidade">
          Com <code>max_parallel_downloads=10</code>, o DNF baixa até 10 pacotes simultaneamente (o padrão é 3), acelerando muito as instalações.
        </AlertBox>

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> 3. Instalar Repositórios RPM Fusion</h2>
        <p>
          O RPM Fusion é o repositório extra mais importante para o Fedora. Ele contém software que o Fedora não pode incluir por questões de licenciamento — como codecs proprietários, drivers NVIDIA e alguns aplicativos populares.
        </p>
        <p>
          Existem duas partes: <strong>Free</strong> (software open source que o Fedora não empacota) e <strong>Nonfree</strong> (software proprietário).
        </p>
        <CodeBlock
          code={`# Instalar RPM Fusion Free e Nonfree
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
  sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # Atualizar o cache após adicionar repositórios
  sudo dnf update -y

  # Verificar se foram adicionados
  dnf repolist | grep rpmfusion`}
          language="bash"
          title="RPM Fusion"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> 4. Instalar Codecs Multimídia</h2>
        <p>
          Sem codecs extras, você não conseguirá reproduzir muitos formatos de áudio e vídeo (MP4, MP3, H264, H265, etc.). Com o RPM Fusion instalado:
        </p>
        <CodeBlock
          code={`# Codecs GStreamer (usados pelo GNOME Videos, Firefox, etc.)
  sudo dnf install gstreamer1-plugins-bad-free gstreamer1-plugins-bad-freeworld gstreamer1-plugins-good-\* gstreamer1-plugins-ugly-\* gstreamer1-plugin-openh264 mozilla-openh264

  # FFmpeg (ferramenta completa de áudio/vídeo)
  sudo dnf install ffmpeg ffmpeg-libs

  # Suporte a DVD (se necessário)
  sudo dnf install libdvdcss libdvdread libdvdnav

  # Hardware video acceleration (VAAPI para Intel/AMD)
  sudo dnf install libva-utils
  # Intel:
  sudo dnf install intel-media-driver
  # AMD:
  sudo dnf install mesa-va-drivers`}
          language="bash"
          title="codecs multimídia"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> 5. Drivers de Vídeo</h2>
        <p>
          O Fedora suporta GPUs Intel e AMD nativamente com drivers open source. Para NVIDIA, é necessário instalar o driver proprietário:
        </p>

        <h3>Intel / AMD (já funcionam por padrão)</h3>
        <p>
          Drivers Mesa (open source) já vêm instalados. Para garantir que está tudo atualizado:
        </p>
        <CodeBlock
          code={`# Verificar GPU detectada
  lspci | grep -i vga
  lspci | grep -i 3d

  # Verificar driver em uso
  glxinfo | grep "OpenGL renderer"

  # Atualizar drivers Mesa
  sudo dnf update mesa-*`}
          language="bash"
          title="drivers Intel/AMD"
        />

        <h3>NVIDIA (driver proprietário)</h3>
        <CodeBlock
          code={`# Com RPM Fusion já instalado:
  sudo dnf install akmod-nvidia

  # Para suporte CUDA (computação GPU):
  sudo dnf install xorg-x11-drv-nvidia-cuda

  # Aguardar compilação do módulo (pode levar alguns minutos)
  # Verificar se o módulo foi compilado:
  modinfo -F version nvidia

  # Reiniciar obrigatoriamente após instalar
  sudo reboot

  # Após reiniciar, verificar:
  nvidia-smi`}
          language="bash"
          title="driver NVIDIA"
        />

        <AlertBox type="warning" title="NVIDIA e Secure Boot">
          Se você tem Secure Boot habilitado, precisa assinar o módulo do kernel NVIDIA ou desativar o Secure Boot na BIOS. O <code>akmod-nvidia</code> tenta fazer isso automaticamente, mas em alguns casos pode falhar.
        </AlertBox>

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> 6. Configurar Flatpak e Flathub</h2>
        <p>
          O Fedora já vem com Flatpak instalado, mas usa o repositório Fedora Flatpak por padrão (com menos aplicativos). Adicione o Flathub para acesso completo:
        </p>
        <CodeBlock
          code={`# Adicionar repositório Flathub (catálogo completo)
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # Verificar repositórios configurados
  flatpak remotes

  # Instalar aplicativos populares via Flatpak:
  flatpak install flathub com.spotify.Client            # Spotify
  flatpak install flathub com.discordapp.Discord         # Discord
  flatpak install flathub com.google.Chrome              # Chrome
  flatpak install flathub org.telegram.desktop            # Telegram
  flatpak install flathub com.obsproject.Studio           # OBS Studio
  flatpak install flathub com.visualstudio.code           # VS Code
  flatpak install flathub org.gimp.GIMP                   # GIMP
  flatpak install flathub org.libreoffice.LibreOffice     # LibreOffice`}
          language="bash"
          title="Flatpak e Flathub"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> 7. Instalar Programas Essenciais</h2>
        <p>
          Programas que a maioria dos usuários vai querer instalar:
        </p>
        <table>
          <thead><tr><th>Categoria</th><th>Programa</th><th>Comando</th></tr></thead>
          <tbody>
            <tr><td>Navegador</td><td>Chrome</td><td><code>flatpak install flathub com.google.Chrome</code></td></tr>
            <tr><td>Editor de texto</td><td>VS Code</td><td><code>flatpak install flathub com.visualstudio.code</code></td></tr>
            <tr><td>Terminal</td><td>Vim / Nano</td><td><code>sudo dnf install vim nano</code></td></tr>
            <tr><td>Comunicação</td><td>Telegram / Discord</td><td>Via Flatpak (Flathub)</td></tr>
            <tr><td>Multimídia</td><td>VLC</td><td><code>sudo dnf install vlc</code></td></tr>
            <tr><td>Imagens</td><td>GIMP</td><td><code>sudo dnf install gimp</code></td></tr>
            <tr><td>Escritório</td><td>LibreOffice</td><td>Já vem instalado!</td></tr>
            <tr><td>Vídeo</td><td>OBS Studio</td><td><code>flatpak install flathub com.obsproject.Studio</code></td></tr>
            <tr><td>Ferramentas</td><td>htop, neofetch</td><td><code>sudo dnf install htop neofetch</code></td></tr>
            <tr><td>Compactação</td><td>7zip, unrar</td><td><code>sudo dnf install p7zip p7zip-plugins unrar</code></td></tr>
            <tr><td>Git</td><td>Git</td><td><code>sudo dnf install git</code></td></tr>
          </tbody>
        </table>

        <h2><Wifi className="inline-block mr-2 mb-1 w-5 h-5" /> 8. Configurar Rede</h2>
        <p>
          O Wi-Fi geralmente funciona automaticamente. Se não funcionar:
        </p>
        <CodeBlock
          code={`# Verificar interfaces de rede
  nmcli device status

  # Listar redes Wi-Fi disponíveis
  nmcli device wifi list

  # Conectar a uma rede Wi-Fi
  nmcli device wifi connect "NomeDaRede" password "suasenha"

  # Se o Wi-Fi não funcionar, pode ser necessário instalar firmware:
  sudo dnf install linux-firmware

  # Reiniciar o NetworkManager
  sudo systemctl restart NetworkManager`}
          language="bash"
          title="configurar rede"
        />

        <h2><Palette className="inline-block mr-2 mb-1 w-5 h-5" /> 9. Personalizar o GNOME</h2>
        <p>
          O GNOME do Fedora é bastante limpo (vanilla). Para personalizá-lo:
        </p>
        <CodeBlock
          code={`# Instalar GNOME Tweaks (configurações avançadas)
  sudo dnf install gnome-tweaks

  # Instalar extensões do GNOME
  sudo dnf install gnome-extensions-app

  # Extensões populares (instale via extensions.gnome.org):
  # - Dash to Dock — dock no estilo macOS
  # - AppIndicator — ícones na barra de notificação
  # - Blur My Shell — efeito de desfoque
  # - Clipboard Indicator — histórico de área de transferência
  # - GSConnect — integração com celular Android

  # Instalar temas e ícones
  sudo dnf install papirus-icon-theme
  sudo dnf install arc-theme`}
          language="bash"
          title="personalizar GNOME"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> 10. Configurar Snapshots (Btrfs)</h2>
        <p>
          O Fedora usa Btrfs por padrão, que suporta snapshots — como "pontos de restauração" do sistema:
        </p>
        <CodeBlock
          code={`# Instalar Snapper para snapshots automáticos
  sudo dnf install snapper

  # Criar configuração para a raiz
  sudo snapper -c root create-config /

  # Criar um snapshot manual antes de grandes mudanças
  sudo snapper -c root create --description "Antes de instalar NVIDIA"

  # Listar snapshots
  sudo snapper -c root list`}
          language="bash"
          title="snapshots Btrfs"
        />

        <h2>Checklist Resumido</h2>
        <table>
          <thead><tr><th>Etapa</th><th>Comando Principal</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Atualizar sistema</td><td><code>sudo dnf update -y</code></td><td>Obrigatório</td></tr>
            <tr><td>Otimizar DNF</td><td>Editar <code>/etc/dnf/dnf.conf</code></td><td>Recomendado</td></tr>
            <tr><td>RPM Fusion</td><td>Instalar free + nonfree</td><td>Obrigatório</td></tr>
            <tr><td>Codecs</td><td>GStreamer + FFmpeg</td><td>Obrigatório</td></tr>
            <tr><td>Driver NVIDIA</td><td><code>sudo dnf install akmod-nvidia</code></td><td>Se aplicável</td></tr>
            <tr><td>Flathub</td><td>Adicionar remote</td><td>Recomendado</td></tr>
            <tr><td>Programas</td><td>Instalar favoritos</td><td>Pessoal</td></tr>
            <tr><td>GNOME Tweaks</td><td><code>sudo dnf install gnome-tweaks</code></td><td>Recomendado</td></tr>
            <tr><td>Snapshots</td><td>Configurar Snapper</td><td>Recomendado</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Sistema pronto!">
          Seguindo todos esses passos, seu Fedora estará completo e pronto para uso diário — com codecs, drivers, aplicativos e otimizações configurados.
        </AlertBox>
      </PageContainer>
    );
  }
  