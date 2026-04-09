import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Cpu, HardDrive, Monitor, Wifi, Battery, Usb } from "lucide-react";

  export default function Hardware() {
    return (
      <PageContainer
        title="Hardware e Drivers"
        subtitle="Gerencie hardware no Fedora: informações do sistema, drivers de GPU (NVIDIA/AMD), periféricos e diagnóstico."
        difficulty="intermediario"
        timeToRead="20 min"
      >
        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> Informações do Hardware</h2>
        <CodeBlock
          code={`# CPU
  lscpu
  cat /proc/cpuinfo | head -20

  # Memória RAM
  free -h
  cat /proc/meminfo | head -5

  # Discos
  lsblk
  df -h
  sudo fdisk -l

  # Dispositivos PCI (GPU, rede, etc.)
  lspci
  lspci | grep -i vga          # placa de vídeo
  lspci | grep -i network      # placa de rede

  # Dispositivos USB
  lsusb

  # Informações completas do sistema
  sudo dmidecode --type system
  sudo dmidecode --type memory

  # Resumo geral
  hostnamectl
  neofetch    # sudo dnf install neofetch

  # Sensores de temperatura
  sudo dnf install lm_sensors
  sudo sensors-detect    # detectar sensores
  sensors                # ver temperaturas`}
          language="bash"
          title="informações"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Drivers de GPU</h2>
        <CodeBlock
          code={`# Ver GPU atual
  lspci | grep -i vga
  glxinfo | grep "OpenGL renderer"

  # AMD (drivers open source — já funcionam!)
  # Instalar suporte Vulkan
  sudo dnf install mesa-vulkan-drivers vulkan-tools
  vulkaninfo --summary

  # NVIDIA (precisa de RPM Fusion)
  # 1. Habilitar RPM Fusion
  sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
  sudo dnf install https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # 2. Instalar driver
  sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda

  # 3. Reiniciar
  sudo reboot

  # 4. Verificar
  nvidia-smi

  # Intel (drivers open source — já funcionam!)
  sudo dnf install intel-media-driver`}
          language="bash"
          title="GPU"
        />

        <h2><Wifi className="inline-block mr-2 mb-1 w-5 h-5" /> Wi-Fi e Bluetooth</h2>
        <CodeBlock
          code={`# Ver interfaces de rede
  ip link show
  nmcli device status

  # Wi-Fi
  nmcli device wifi list          # listar redes
  nmcli device wifi connect NOME password SENHA

  # Bluetooth
  bluetoothctl
  # power on
  # scan on
  # pair XX:XX:XX:XX:XX:XX
  # connect XX:XX:XX:XX:XX:XX

  # Se Wi-Fi não funcionar (driver proprietário Broadcom)
  sudo dnf install broadcom-wl`}
          language="bash"
          title="Wi-Fi e Bluetooth"
        />

        <AlertBox type="info" title="Fedora e hardware">
          O Fedora tem excelente suporte a hardware graças ao kernel atualizado. A maioria dos
          dispositivos funciona automaticamente. Se algo não funcionar, verifique se há um driver
          no RPM Fusion.
        </AlertBox>
      </PageContainer>
    );
  }
  