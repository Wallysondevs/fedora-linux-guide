import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Music, Video, Image, Settings, Download, Headphones } from "lucide-react";

  export default function Multimedia() {
    return (
      <PageContainer
        title="Multimídia no Fedora"
        subtitle="Configure codecs, reprodutores de áudio/vídeo, edição de imagens e ferramentas multimídia no Fedora."
        difficulty="iniciante"
        timeToRead="25 min"
      >
        <h2><Music className="inline-block mr-2 mb-1 w-5 h-5" /> Codecs Multimídia</h2>
        <p>
          O Fedora não inclui codecs proprietários por padrão (MP3, H.264, AAC, etc.) por questões
          de licenciamento. Mas é fácil instalá-los via <strong>RPM Fusion</strong>.
        </p>

        <CodeBlock
          code={`# PASSO 1: Habilitar RPM Fusion (se ainda não fez)
  sudo dnf install \
    https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
    https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # PASSO 2: Instalar codecs
  sudo dnf group install multimedia
  sudo dnf install gstreamer1-plugins-{bad-*,good-*,base} gstreamer1-plugin-openh264
  sudo dnf install gstreamer1-plugin-libav
  sudo dnf install lame* --exclude=lame-devel

  # Codecs para Firefox/Chrome (H.264/H.265)
  sudo dnf install ffmpeg-libs

  # VAAPI/VDPAU (aceleração de vídeo por hardware)
  # AMD:
  sudo dnf install mesa-va-drivers mesa-vdpau-drivers
  # Intel:
  sudo dnf install intel-media-driver
  # NVIDIA:
  sudo dnf install nvidia-vaapi-driver`}
          language="bash"
          title="codecs"
        />

        <h2><Video className="inline-block mr-2 mb-1 w-5 h-5" /> Reprodutores de Vídeo</h2>
        <CodeBlock
          code={`# VLC — reproduz praticamente QUALQUER formato
  sudo dnf install vlc
  # Ou via Flatpak:
  flatpak install flathub org.videolan.VLC

  # mpv — reprodutor leve e poderoso
  sudo dnf install mpv

  # Celluloid — interface gráfica para mpv (integração GNOME)
  sudo dnf install celluloid

  # Totem — reprodutor padrão do GNOME (com codecs instalados, funciona bem)
  # Já vem instalado`}
          language="bash"
          title="reprodutores de vídeo"
        />

        <h2><Headphones className="inline-block mr-2 mb-1 w-5 h-5" /> Áudio</h2>
        <CodeBlock
          code={`# Spotify
  flatpak install flathub com.spotify.Client

  # Audacious — reprodutor de música leve
  sudo dnf install audacious

  # Rhythmbox — reprodutor integrado ao GNOME
  sudo dnf install rhythmbox

  # Audacity — edição de áudio
  flatpak install flathub org.audacityteam.Audacity

  # PipeWire (gerenciador de áudio moderno — padrão no Fedora)
  # Verificar status
  systemctl --user status pipewire pipewire-pulse wireplumber

  # Controlar volume pelo terminal
  pactl set-sink-volume @DEFAULT_SINK@ +10%    # aumentar 10%
  pactl set-sink-volume @DEFAULT_SINK@ -10%    # diminuir 10%
  pactl set-sink-mute @DEFAULT_SINK@ toggle    # mudo`}
          language="bash"
          title="áudio"
        />

        <h2><Image className="inline-block mr-2 mb-1 w-5 h-5" /> Edição de Imagem e Vídeo</h2>
        <CodeBlock
          code={`# GIMP — editor de imagem (alternativa ao Photoshop)
  sudo dnf install gimp
  # Ou: flatpak install flathub org.gimp.GIMP

  # Inkscape — editor vetorial (alternativa ao Illustrator)
  sudo dnf install inkscape

  # Kdenlive — editor de vídeo
  flatpak install flathub org.kde.kdenlive

  # OBS Studio — gravação e streaming
  flatpak install flathub com.obsproject.Studio

  # FFmpeg — ferramenta de linha de comando para vídeo/áudio
  sudo dnf install ffmpeg

  # Exemplos FFmpeg:
  # Converter vídeo
  ffmpeg -i video.avi video.mp4

  # Extrair áudio de vídeo
  ffmpeg -i video.mp4 -vn audio.mp3

  # Redimensionar vídeo
  ffmpeg -i video.mp4 -vf scale=1280:720 video_720p.mp4

  # Comprimir vídeo
  ffmpeg -i video.mp4 -crf 28 video_comprimido.mp4

  # Gravar tela (Wayland)
  # Use OBS Studio ou o gravador do GNOME (Ctrl+Shift+Alt+R)`}
          language="bash"
          title="edição"
        />

        <h2>Aplicativos Populares</h2>
        <table>
          <thead><tr><th>Categoria</th><th>Aplicativo</th><th>Instalação</th></tr></thead>
          <tbody>
            <tr><td>Vídeo</td><td>VLC</td><td><code>sudo dnf install vlc</code></td></tr>
            <tr><td>Música</td><td>Spotify</td><td><code>flatpak install com.spotify.Client</code></td></tr>
            <tr><td>Imagem</td><td>GIMP</td><td><code>sudo dnf install gimp</code></td></tr>
            <tr><td>Vetorial</td><td>Inkscape</td><td><code>sudo dnf install inkscape</code></td></tr>
            <tr><td>Edição de vídeo</td><td>Kdenlive</td><td>Flatpak</td></tr>
            <tr><td>Streaming</td><td>OBS Studio</td><td>Flatpak</td></tr>
            <tr><td>Screenshots</td><td>Flameshot</td><td><code>sudo dnf install flameshot</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Flatpak vs DNF para multimídia">
          Para aplicativos multimídia, o <strong>Flatpak</strong> geralmente é a melhor opção: ele inclui
          os codecs necessários no sandbox, sem conflito com o sistema. O VLC via Flatpak, por exemplo,
          funciona sem precisar instalar codecs extras.
        </AlertBox>
      </PageContainer>
    );
  }
  