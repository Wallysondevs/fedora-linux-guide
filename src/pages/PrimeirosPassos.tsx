import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Rocket, Monitor, Settings, Package, Globe, Terminal, Palette } from "lucide-react";

  export default function PrimeirosPassos() {
    return (
      <PageContainer
        title="Primeiros Passos"
        subtitle="Configurações essenciais após instalar o Fedora — repositórios, codecs, apps, personalização e otimizações."
        difficulty="iniciante"
        timeToRead="30 min"
      >
        <h2><Rocket className="inline-block mr-2 mb-1 w-5 h-5" /> Após o Primeiro Boot</h2>
        <p>
          Parabéns por instalar o Fedora! Agora vamos configurar tudo para que seu sistema esteja completo e pronto para uso diário. Siga este guia na ordem para uma configuração ideal.
        </p>

        <h2>Passo 1 — Atualizar o Sistema</h2>
        <p>Sempre comece atualizando todos os pacotes. Isso garante correções de segurança e estabilidade:</p>
        <CodeBlock
          code={`# Atualizar todos os pacotes
  sudo dnf update -y

  # Se o kernel foi atualizado, reinicie:
  sudo reboot`}
          language="bash"
          title="atualização inicial"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 2 — Habilitar Repositórios Essenciais</h2>

        <h3>RPM Fusion (codecs e drivers)</h3>
        <CodeBlock
          code={`# RPM Fusion Free (codecs open source, ferramentas extras)
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

  # RPM Fusion NonFree (drivers NVIDIA, Steam, etc.)
  sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # Verificar
  dnf repolist | grep rpmfusion`}
          language="bash"
          title="rpm fusion"
        />

        <h3>Flathub (aplicativos Flatpak)</h3>
        <CodeBlock
          code={`# Adicionar o repositório Flathub completo
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # Verificar
  flatpak remotes`}
          language="bash"
          title="flathub"
        />

        <h2>Passo 3 — Codecs Multimídia</h2>
        <p>O Fedora não inclui codecs proprietários por padrão (por questões de licença). Instale para reproduzir MP3, H.264, AAC e outros formatos:</p>
        <CodeBlock
          code={`# Instalar codecs completos
  sudo dnf install @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin

  # Codecs extras do RPM Fusion
  sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel

  # Codec H.264 do OpenH264
  sudo dnf config-manager --enable fedora-cisco-openh264
  sudo dnf install gstreamer1-plugin-openh264 mozilla-openh264

  # Hardware video acceleration (VA-API)
  # Intel:
  sudo dnf install intel-media-driver
  # AMD:
  sudo dnf install mesa-va-drivers`}
          language="bash"
          title="codecs"
        />

        <h2>Passo 4 — Driver de Vídeo NVIDIA (se aplicável)</h2>
        <CodeBlock
          code={`# Verificar se tem placa NVIDIA
  lspci | grep -i nvidia

  # Se sim, instalar drivers proprietários
  sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda

  # Aguardar compilação do módulo (pode levar alguns minutos)
  # NÃO reinicie até terminar:
  sudo akmods --force
  sudo dracut --force

  # Reiniciar
  sudo reboot

  # Verificar se está funcionando
  nvidia-smi`}
          language="bash"
          title="driver nvidia"
        />

        <AlertBox type="info" title="AMD e Intel">
          Drivers de vídeo AMD (amdgpu) e Intel (i915) já vêm no kernel — não precisa instalar nada. Funciona automaticamente.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 5 — Otimizar o DNF</h2>
        <CodeBlock
          code={`# Acelerar downloads e busca de mirrors
  echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
  echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

  # Verificar
  cat /etc/dnf/dnf.conf`}
          language="bash"
          title="otimizar dnf"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 6 — Instalar Aplicativos Essenciais</h2>

        <h3>Via DNF (sistema)</h3>
        <CodeBlock
          code={`# Ferramentas de terminal
  sudo dnf install -y \
    vim neovim \
    htop btop \
    bat fd-find ripgrep fzf \
    tldr tmux \
    git curl wget \
    fastfetch \
    gnome-tweaks

  # Fontes Microsoft (Arial, Times New Roman, etc.)
  sudo dnf install curl cabextract xorg-x11-font-utils fontconfig
  sudo rpm -i https://downloads.sourceforge.net/project/mscorefonts2/rpms/msttcore-fonts-installer-2.6-1.noarch.rpm

  # Fontes de programação
  sudo dnf install jetbrains-mono-fonts fira-code-fonts`}
          language="bash"
          title="apps via dnf"
        />

        <h3>Via Flatpak (aplicativos desktop)</h3>
        <CodeBlock
          code={`# Navegador
  flatpak install -y flathub com.google.Chrome
  # ou: flatpak install -y flathub com.brave.Browser

  # Comunicação
  flatpak install -y flathub com.discordapp.Discord
  flatpak install -y flathub org.telegram.desktop
  flatpak install -y flathub us.zoom.Zoom

  # Produtividade
  flatpak install -y flathub com.visualstudio.code
  flatpak install -y flathub org.libreoffice.LibreOffice
  flatpak install -y flathub com.obsproject.Studio

  # Mídia
  flatpak install -y flathub com.spotify.Client
  flatpak install -y flathub org.videolan.VLC

  # Jogos
  flatpak install -y flathub com.valvesoftware.Steam

  # Utilitários
  flatpak install -y flathub com.github.tchx84.Flatseal    # gerenciar permissões
  flatpak install -y flathub com.mattjakeman.ExtensionManager  # extensões GNOME
  flatpak install -y flathub com.usebottles.bottles         # rodar apps Windows`}
          language="bash"
          title="apps via flatpak"
        />

        <h2><Palette className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 7 — Personalizar o GNOME</h2>

        <h3>Tema escuro</h3>
        <CodeBlock
          code={`# Ativar tema escuro globalmente
  gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'

  # Ou via Configurações do GNOME → Aparência → Estilo Escuro`}
          language="bash"
          title="tema escuro"
        />

        <h3>Ajustes úteis</h3>
        <CodeBlock
          code={`# Mostrar data e dia da semana no relógio
  gsettings set org.gnome.desktop.interface clock-show-date true
  gsettings set org.gnome.desktop.interface clock-show-weekday true

  # Tap-to-click no touchpad
  gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true

  # Volume acima de 100%
  gsettings set org.gnome.desktop.sound allow-volume-above-100-percent true

  # Minimizar ao clicar no dock
  gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'

  # Centralizar novas janelas
  gsettings set org.gnome.mutter center-new-windows true

  # Botão de minimizar e maximizar na barra de título
  gsettings set org.gnome.desktop.wm.preferences button-layout ':minimize,maximize,close'`}
          language="bash"
          title="ajustes gnome"
        />

        <h3>Extensões GNOME recomendadas</h3>
        <table>
          <thead><tr><th>Extensão</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><strong>AppIndicator</strong></td><td>Ícones de bandeja do sistema (Discord, Telegram, etc.)</td></tr>
            <tr><td><strong>Dash to Dock</strong></td><td>Dock estilo macOS (sempre visível)</td></tr>
            <tr><td><strong>Blur my Shell</strong></td><td>Transparência e blur no shell</td></tr>
            <tr><td><strong>Caffeine</strong></td><td>Impedir suspensão automática</td></tr>
            <tr><td><strong>Clipboard Indicator</strong></td><td>Histórico de área de transferência</td></tr>
            <tr><td><strong>GSConnect</strong></td><td>Integração com celular Android (KDE Connect)</td></tr>
          </tbody>
        </table>

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 8 — Configurar o Terminal</h2>
        <CodeBlock
          code={`# Adicionar aliases úteis ao ~/.bashrc
  cat >> ~/.bashrc << 'EOF'

  # Aliases personalizados
  alias ll="ls -lah --color=auto"
  alias la="ls -A"
  alias ..="cd .."
  alias ...="cd ../.."
  alias update="sudo dnf update -y"
  alias myip="curl -s ifconfig.me"
  alias ports="ss -tulpn"

  # Funções úteis
  mkcd() { mkdir -p "$1" && cd "$1"; }
  EOF

  # Aplicar
  source ~/.bashrc

  # Instalar Starship (prompt bonito e informativo — opcional)
  curl -sS https://starship.rs/install.sh | sh
  echo 'eval "$(starship init bash)"' >> ~/.bashrc`}
          language="bash"
          title="configurar terminal"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 9 — Configurações do Sistema</h2>
        <CodeBlock
          code={`# Definir hostname
  sudo hostnamectl set-hostname meu-fedora

  # Configurar fuso horário (se não configurou na instalação)
  sudo timedatectl set-timezone America/Sao_Paulo

  # Habilitar TRIM para SSDs (geralmente já habilitado)
  sudo systemctl enable --now fstrim.timer

  # Verificar se o SSD TRIM funciona
  sudo fstrim -v /

  # Habilitar compressão Btrfs (se não estiver)
  # Adicione compress=zstd:1 às opções no /etc/fstab`}
          language="bash"
          title="configurações do sistema"
        />

        <h2>Checklist Completo</h2>
        <table>
          <thead><tr><th>#</th><th>Tarefa</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Atualizar sistema (<code>sudo dnf update -y</code>)</td><td>Essencial</td></tr>
            <tr><td>2</td><td>Habilitar RPM Fusion (free + nonfree)</td><td>Essencial</td></tr>
            <tr><td>3</td><td>Habilitar Flathub</td><td>Essencial</td></tr>
            <tr><td>4</td><td>Instalar codecs multimídia</td><td>Essencial</td></tr>
            <tr><td>5</td><td>Driver NVIDIA (se aplicável)</td><td>Se necessário</td></tr>
            <tr><td>6</td><td>Otimizar DNF (parallel downloads)</td><td>Recomendado</td></tr>
            <tr><td>7</td><td>Instalar apps essenciais</td><td>Recomendado</td></tr>
            <tr><td>8</td><td>Instalar fontes Microsoft</td><td>Opcional</td></tr>
            <tr><td>9</td><td>Personalizar GNOME</td><td>Opcional</td></tr>
            <tr><td>10</td><td>Configurar terminal e aliases</td><td>Opcional</td></tr>
            <tr><td>11</td><td>Habilitar TRIM para SSD</td><td>Recomendado</td></tr>
            <tr><td>12</td><td>Habilitar compressão Btrfs</td><td>Opcional</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Pronto!">
          Se você seguiu todos os passos, seu Fedora está completamente configurado para uso diário. Explore as outras seções deste guia para aprender sobre o terminal, gerenciamento de pacotes, segurança e muito mais!
        </AlertBox>
      </PageContainer>
    );
  }
  