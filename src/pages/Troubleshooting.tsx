import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Wrench, Monitor, Package, Volume2, Wifi } from "lucide-react";

export default function Troubleshooting() {
  return (
    <PageContainer
      title="Troubleshooting"
      subtitle="Diagnóstico e solução dos problemas mais comuns no Fedora Linux — boot, gráficos, áudio, rede, pacotes e muito mais."
      difficulty="avancado"
      timeToRead="40 min"
    >
      <h2><Wrench className="inline-block mr-2 mb-1 w-5 h-5" /> Diagnóstico Geral</h2>
      <p>Antes de buscar o problema específico, estas ferramentas dão uma visão geral do estado do sistema:</p>
      <CodeBlock
        code={`# Logs do boot atual (todos)
journalctl -b

# Apenas erros no boot atual
journalctl -b -p err

# Erros e avisos
journalctl -b -p warning

# Logs do boot anterior (útil se o sistema travou)
journalctl -b -1

# Serviços que falharam ao iniciar
systemctl --failed

# Informações de hardware
lspci          # Dispositivos PCI (placa de vídeo, rede, etc.)
lsusb          # Dispositivos USB
lscpu          # Informações da CPU
lsblk          # Discos e partições
free -h        # Memória RAM usada/livre
df -h          # Espaço em disco

# O que mudou recentemente (últimas instalações/atualizações)
sudo dnf history | head -20
sudo dnf history info 5   # detalhes da transação número 5

# Temperatura e sensores (instalar lm_sensors)
sudo dnf install lm_sensors
sudo sensors-detect
sensors`}
        language="bash"
        title="diagnóstico geral"
      />

      <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Problemas com Interface Gráfica (GNOME)</h2>
      <CodeBlock
        code={`# 1. Se o GNOME travou — tente trocar para um TTY
Ctrl + Alt + F2    # Abre TTY2 (terminal puro)
Ctrl + Alt + F1    # Volta ao GNOME (ou F3 se o GNOME for em F3)

# 2. Ver log de erros do GNOME (Wayland)
journalctl -b --user -u gnome-session
journalctl -b | grep -i "gnome\|wayland\|mutter"

# 3. Reiniciar o GNOME sem deslogar (modo X11 antigo)
Alt + F2  → digitar "r" → Enter    # só funciona em X11

# 4. Se travado completamente — matar o GNOME pelo TTY
pkill -f gnome-session
# ou
sudo systemctl restart gdm

# Verificar logs do servidor gráfico
cat /var/log/Xorg.0.log | grep "(EE)"    # Erros
journalctl -b | grep -i "EE\|error" | grep -i "xorg\|display"`}
        language="bash"
        title="problemas com GNOME"
      />

      <h3>Drivers de Vídeo</h3>
      <CodeBlock
        code={`# Verificar qual driver está em uso
lspci -k | grep -A 3 VGA

# === NVIDIA ===
# Verificar se o módulo está carregado
lsmod | grep nvidia

# Instalar drivers NVIDIA via RPM Fusion
sudo dnf install akmod-nvidia
sudo dnf install xorg-x11-drv-nvidia-cuda   # Para CUDA

# Verificar instalação do NVIDIA
nvidia-smi

# === AMD ===
# AMD usa driver open source (amdgpu) — geralmente funciona out of the box
lsmod | grep amdgpu

# Instalar suporte a mesa (OpenGL) — normalmente já instalado
sudo dnf install mesa-dri-drivers mesa-vulkan-drivers

# === Intel ===
sudo dnf install intel-media-driver libva-intel-driver

# Verificar OpenGL geral
glxinfo | grep "OpenGL renderer"
glxgears   # Testar aceleração 3D

# Verificar tipo de sessão (X11 ou Wayland)
echo $XDG_SESSION_TYPE`}
        language="bash"
        title="drivers de vídeo"
      />

      <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Problemas com DNF e Pacotes</h2>
      <CodeBlock
        code={`# Erro: "Lock file '/var/run/dnf.pid' already exists"
# Outro processo está usando o DNF. Espere terminar, ou:
sudo rm /var/run/dnf.pid
sudo kill $(cat /var/cache/dnf/dnf.pid) 2>/dev/null

# Erro: repositório indisponível (timeout)
# Limpar cache e tentar novamente
sudo dnf clean all
sudo dnf makecache
sudo dnf update

# Erro: "GPG key verification failed" (chave de repositório inválida)
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$(rpm -E %fedora)-primary

# Forçar atualização de metadados dos repositórios
sudo dnf --refresh update

# Desabilitar repositório problemático temporariamente
sudo dnf update --disablerepo=rpmfusion-free-updates

# Resolver dependências quebradas
sudo dnf distro-sync
sudo dnf --best --allowerasing upgrade   # Permite remoção de conflitantes`}
        language="bash"
        title="problemas com DNF"
      />
      <CodeBlock
        code={`# Pacote corrompido ou instalação incompleta
# 1. Tentar reinstalar
sudo dnf reinstall pacote

# 2. Verificar integridade do pacote instalado
sudo rpm -V pacote

# 3. Forçar reinstalação sobrescrevendo arquivos
sudo dnf install --allowerasing pacote

# 4. Verificar e corrigir dependências
sudo dnf check
sudo dnf autoremove

# Restaurar sistema após atualização problemática (downgrade)
sudo dnf history undo last        # Desfaz a última transação
sudo dnf history list             # Ver histórico
sudo dnf history undo 5           # Desfaz a transação número 5

# Downgrade de um pacote específico para versão anterior
sudo dnf downgrade pacote

# Ver versões disponíveis para download de um pacote
sudo dnf --showduplicates list pacote`}
        language="bash"
        title="corrigindo pacotes"
      />

      <h2><Volume2 className="inline-block mr-2 mb-1 w-5 h-5" /> Problemas de Áudio</h2>
      <CodeBlock
        code={`# Fedora usa PipeWire como servidor de áudio

# Verificar se os serviços de áudio estão rodando
systemctl --user status pipewire
systemctl --user status pipewire-pulse
systemctl --user status wireplumber

# Reiniciar o áudio (sem reboot)
systemctl --user restart pipewire pipewire-pulse wireplumber

# Verificar dispositivos de áudio
wpctl status              # Status completo do PipeWire
aplay -l                  # Listar dispositivos de saída de som
arecord -l                # Listar dispositivos de entrada

# Ajustar volume via linha de comando
wpctl set-volume @DEFAULT_AUDIO_SINK@ 70%   # Volume a 70%
wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle  # Ligar/desligar mudo

# Verificar volume e mudo com amixer
amixer sget Master

# Testar saída de áudio
speaker-test -c 2 -t wav

# Se HDMI não produz som — selecionar dispositivo correto
wpctl set-default $(wpctl status | grep HDMI | awk '{print $1}' | tr -d '.')

# Instalar pavucontrol (mixer gráfico)
sudo dnf install pavucontrol
pavucontrol`}
        language="bash"
        title="problemas de áudio"
      />

      <h2><Wifi className="inline-block mr-2 mb-1 w-5 h-5" /> Problemas de Rede</h2>
      <CodeBlock
        code={`# Verificar se NetworkManager está rodando
systemctl status NetworkManager

# Verificar interfaces de rede
ip link show
ip addr show

# Reiniciar NetworkManager
sudo systemctl restart NetworkManager

# Wi-Fi não aparece ou não conecta
nmcli device wifi rescan
nmcli device wifi list
nmcli device wifi connect "NomeDaRede" password "SenhaAqui"

# Verificar se firmware Wi-Fi está carregado
dmesg | grep -i firmware
dmesg | grep -i "wlan\|wifi\|wireless"

# Instalar firmwares ausentes
sudo dnf install iwl7260-firmware    # Intel Wi-Fi série 7xxx
sudo dnf install linux-firmware      # Pacote geral de firmwares

# DNS não funciona (resolve nomes mas não conecta)
cat /etc/resolv.conf
# Testar resolução de nome
nslookup google.com
dig google.com

# Definir DNS manualmente (temporário)
sudo resolvectl dns eth0 8.8.8.8 8.8.4.4

# Verificar rota padrão (gateway)
ip route show
# Deve haver uma linha: default via 192.168.x.1

# Testar conectividade passo a passo
ping -c 3 192.168.1.1      # 1. Gateway
ping -c 3 8.8.8.8          # 2. Internet (sem DNS)
ping -c 3 google.com       # 3. Internet (com DNS)`}
        language="bash"
        title="problemas de rede"
      />

      <h2>Problemas de Boot</h2>
      <CodeBlock
        code={`# === BOOT FALHA — usar modo de recuperação ===
# 1. Na tela do GRUB, pressione 'e' na entrada do Fedora
# 2. Encontre a linha que começa com "linux" (kernel)
# 3. No final da linha, adicione: systemd.unit=rescue.target
# 4. Pressione Ctrl+X para bootar em modo rescue

# === GRUB corrompido ===
# 1. Boot pelo pendrive de instalação do Fedora
# 2. Selecionar "Troubleshooting" → "Rescue a Fedora system"
# 3. O sistema monta o Fedora instalado em /mnt/sysimage

# 4. Reinstalar GRUB (BIOS/MBR)
grub2-install /dev/sda

# 5. Regenerar configuração do GRUB
grub2-mkconfig -o /boot/grub2/grub.cfg

# Para UEFI:
grub2-install --target=x86_64-efi --efi-directory=/boot/efi
grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg

# === initramfs corrompido ===
# No modo rescue ou live USB com chroot:
dracut --force    # Regenerar initramfs

# Ver se o kernel está presente
ls /boot/vmlinuz-*
ls /boot/initramfs-*`}
        language="bash"
        title="problemas de boot"
      />

      <h2>SELinux Bloqueando um Serviço</h2>
      <CodeBlock
        code={`# Verificar se o SELinux está bloqueando algo
sudo journalctl -b | grep "avc: denied"
sudo ausearch -m avc -ts recent

# Usar sealert para diagnóstico detalhado e sugestão de solução
sudo dnf install setroubleshoot-server
sudo sealert -a /var/log/audit/audit.log

# Ver detalhes de negações recentes
sudo audit2why -al    # Explica em português qual regra foi violada
sudo audit2allow -al  # Gera a política que permitiria a ação

# Solução temporária: modo permissive para um serviço específico
sudo semanage permissive -a httpd_t    # Apenas o Apache vai no modo permissive

# Voltar ao enforcing
sudo semanage permissive -d httpd_t

# Se um arquivo foi criado no lugar errado (contexto errado)
ls -Z /var/www/html/arquivo.php
sudo restorecon -Rv /var/www/html/`}
        language="bash"
        title="SELinux troubleshooting"
      />

      <h2>Recuperar Espaço em Disco</h2>
      <CodeBlock
        code={`# Ver uso de disco por diretório
df -h
du -sh /* 2>/dev/null | sort -rh | head -20

# Limpar cache do DNF
sudo dnf clean all
du -sh /var/cache/dnf/

# Remover pacotes antigos de kernel (manter apenas os 2 últimos)
sudo dnf remove --oldinstallonly --setopt=installonly_limit=2 kernel

# Limpar journalctl (logs)
sudo journalctl --disk-usage
sudo journalctl --vacuum-size=200M    # Manter apenas 200MB de logs
sudo journalctl --vacuum-time=2weeks  # Manter apenas últimas 2 semanas

# Remover pacotes que não são mais necessários
sudo dnf autoremove

# Encontrar arquivos grandes
sudo find / -type f -size +500M -exec ls -lh {} \; 2>/dev/null

# Flatpak — limpar dados não utilizados
flatpak uninstall --unused`}
        language="bash"
        title="recuperar espaço"
      />

      <AlertBox type="success" title="Checklist de diagnóstico rápido">
        <ol className="list-decimal pl-4 mt-1 space-y-1 text-sm">
          <li><code>systemctl --failed</code> — serviços com falha</li>
          <li><code>journalctl -b -p err</code> — erros no boot atual</li>
          <li><code>df -h</code> — checar espaço em disco</li>
          <li><code>free -h</code> — checar memória</li>
          <li><code>sudo ausearch -m avc -ts recent</code> — negações do SELinux</li>
          <li><code>sudo dnf history | head -5</code> — últimas alterações de pacotes</li>
        </ol>
      </AlertBox>
    </PageContainer>
  );
}
