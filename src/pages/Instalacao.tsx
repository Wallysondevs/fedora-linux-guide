import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Download, HardDrive, Monitor, Shield, CheckCircle, Settings, Usb, AlertTriangle } from "lucide-react";

  export default function Instalacao() {
    return (
      <PageContainer
        title="Instalação do Fedora"
        subtitle="Guia passo a passo completo para instalar o Fedora Linux no seu computador, incluindo dual boot, UEFI e troubleshooting."
        difficulty="iniciante"
        timeToRead="40 min"
      >
        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Requisitos do Sistema</h2>
        <p>
          Antes de instalar, verifique se seu computador atende aos requisitos mínimos. O Fedora Workstation com GNOME é relativamente leve, mas ter hardware adequado garante uma experiência fluida.
        </p>
        <table>
          <thead><tr><th>Componente</th><th>Mínimo</th><th>Recomendado</th><th>Ideal</th></tr></thead>
          <tbody>
            <tr><td><strong>Processador</strong></td><td>2 GHz dual-core</td><td>Quad-core 64-bit</td><td>8+ cores moderno</td></tr>
            <tr><td><strong>Memória RAM</strong></td><td>2 GB</td><td>4 GB</td><td>8-16 GB</td></tr>
            <tr><td><strong>Disco</strong></td><td>15 GB</td><td>40 GB</td><td>100+ GB SSD</td></tr>
            <tr><td><strong>Placa de vídeo</strong></td><td>Compatível com VESA</td><td>Intel/AMD com drivers open source</td><td>AMD/NVIDIA recente</td></tr>
            <tr><td><strong>USB</strong></td><td>Pen drive 4 GB+</td><td>Pen drive 8 GB+ USB 3.0</td><td>USB 3.0 rápido</td></tr>
          </tbody>
        </table>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 1: Baixar a ISO</h2>
        <p>
          Acesse o site oficial do Fedora para baixar a imagem ISO. Existem várias opções dependendo do seu uso:
        </p>
        <ul>
          <li><strong>Fedora Workstation</strong> — Para uso no desktop com GNOME (escolha padrão)</li>
          <li><strong>Fedora KDE Spin</strong> — Se preferir o KDE Plasma</li>
          <li><strong>Fedora Server</strong> — Sem interface gráfica, para servidores</li>
          <li><strong>Fedora Everything</strong> — ISO de instalação por rede (netinstall)</li>
        </ul>
        <CodeBlock
          code={`# Site oficial para download:
  # https://fedoraproject.org/workstation/download

  # Download via terminal (wget ou curl):
  wget https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso

  # Ou com curl:
  curl -LO https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso`}
          language="bash"
          title="download da ISO"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 2: Verificar a ISO (Integridade)</h2>
        <p>
          <strong>Nunca pule esta etapa!</strong> Verificar a integridade da ISO garante que o download não foi corrompido e que o arquivo é autêntico. Uma ISO corrompida pode causar erros durante a instalação ou comprometer a segurança.
        </p>
        <CodeBlock
          code={`# Baixar o arquivo de checksum
  wget https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-41-1.4-x86_64-CHECKSUM

  # Verificar a assinatura GPG do checksum
  curl -O https://fedoraproject.org/fedora.gpg
  gpg --import fedora.gpg
  gpg --verify-files *-CHECKSUM

  # Verificar o checksum SHA256 da ISO
  sha256sum -c *-CHECKSUM
  # Fedora-Workstation-Live-x86_64-41-1.4.iso: OK

  # Método rápido (calcular hash e comparar manualmente):
  sha256sum Fedora-Workstation-Live-x86_64-41-1.4.iso`}
          language="bash"
          title="verificação de integridade"
        />

        <AlertBox type="warning" title="ISO corrompida?">
          Se o checksum não bater, <strong>não use a ISO</strong>. Baixe novamente de outro mirror ou diretamente do site oficial. ISOs corrompidas podem causar falhas de instalação ou problemas de segurança.
        </AlertBox>

        <h2><Usb className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 3: Criar Pen Drive Bootável</h2>
        <p>
          Você precisa gravar a ISO em um pen drive para iniciar a instalação. Existem várias ferramentas disponíveis:
        </p>

        <h3>No Linux</h3>
        <CodeBlock
          code={`# Método 1: Fedora Media Writer (recomendado pelo projeto Fedora)
  sudo dnf install mediawriter
  # Abra o aplicativo e siga as instruções gráficas

  # Método 2: Comando dd (avançado — cuidado com o dispositivo!)
  # Primeiro, identifique o pen drive:
  lsblk
  # NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
  # sda      8:0    0 256.0G  0 disk
  # ├─sda1   8:1    0   512M  0 part /boot/efi
  # └─sda2   8:2    0 255.5G  0 part /
  # sdb      8:16   1  14.9G  0 disk    ← este é o pen drive!

  # Gravar a ISO (substitua /dev/sdX pelo dispositivo correto!)
  sudo dd if=Fedora-Workstation-Live-x86_64-41-1.4.iso of=/dev/sdb bs=4M status=progress oflag=sync

  # Método 3: Ventoy (permite múltiplas ISOs no mesmo pen drive)
  # Instale o Ventoy uma vez, depois basta copiar ISOs para o pen drive`}
          language="bash"
          title="criar pen drive no Linux"
        />

        <h3>No Windows</h3>
        <ul>
          <li><strong>Fedora Media Writer</strong> — Baixe em fedoraproject.org, instale e siga o assistente</li>
          <li><strong>Rufus</strong> — Ferramenta popular para Windows. Use modo DD se o modo ISO não funcionar</li>
          <li><strong>balenaEtcher</strong> — Interface simples, selecione a ISO e o pen drive</li>
          <li><strong>Ventoy</strong> — Instale uma vez, depois só copie ISOs para o pen drive</li>
        </ul>

        <AlertBox type="danger" title="CUIDADO com dd!">
          O comando <code>dd</code> grava diretamente no dispositivo sem confirmação. Se você errar o dispositivo de destino (usar <code>/dev/sda</code> em vez de <code>/dev/sdb</code>), vai apagar seu disco principal! Sempre confirme com <code>lsblk</code> antes.
        </AlertBox>

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 4: Configurar BIOS/UEFI</h2>
        <p>
          Para iniciar pelo pen drive, você precisa configurar a ordem de boot na BIOS/UEFI:
        </p>
        <ul>
          <li>Reinicie o computador e pressione a tecla de acesso à BIOS (geralmente <strong>F2</strong>, <strong>F12</strong>, <strong>DEL</strong> ou <strong>ESC</strong>)</li>
          <li>Procure a seção "Boot Order" ou "Boot Priority"</li>
          <li>Coloque o USB como primeiro dispositivo de boot</li>
          <li>Se existir a opção <strong>Secure Boot</strong>, deixe habilitado — o Fedora suporta Secure Boot nativamente</li>
          <li>Salve e reinicie (<strong>F10</strong> na maioria das BIOS)</li>
        </ul>

        <table>
          <thead><tr><th>Fabricante</th><th>Tecla de Boot Menu</th><th>Tecla de BIOS</th></tr></thead>
          <tbody>
            <tr><td>ASUS</td><td>F8</td><td>F2 ou DEL</td></tr>
            <tr><td>Dell</td><td>F12</td><td>F2</td></tr>
            <tr><td>HP</td><td>F9</td><td>F10</td></tr>
            <tr><td>Lenovo</td><td>F12</td><td>F1 ou F2</td></tr>
            <tr><td>Acer</td><td>F12</td><td>F2 ou DEL</td></tr>
            <tr><td>MSI</td><td>F11</td><td>DEL</td></tr>
            <tr><td>Gigabyte</td><td>F12</td><td>DEL</td></tr>
          </tbody>
        </table>

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 5: Instalação (Anaconda)</h2>
        <p>
          O instalador do Fedora se chama <strong>Anaconda</strong>. Após iniciar pelo pen drive, você verá a opção de testar o Fedora em modo Live ou instalar diretamente.
        </p>
        <p>
          Recomendação: <strong>teste primeiro no modo Live</strong> para verificar se o hardware funciona corretamente (Wi-Fi, som, vídeo, touchpad).
        </p>

        <h3>Configurações do Anaconda</h3>
        <ul>
          <li><strong>Idioma</strong> — Selecione "Português (Brasil)"</li>
          <li><strong>Teclado</strong> — Adicione "Português (Brasil)" e remova "English (US)" se não precisar</li>
          <li><strong>Fuso horário</strong> — Selecione sua cidade (ex: América/São Paulo)</li>
          <li><strong>Destino da instalação</strong> — Escolha o disco e o esquema de particionamento</li>
          <li><strong>Rede</strong> — Conecte ao Wi-Fi para receber atualizações durante a instalação</li>
        </ul>

        <h3>Opções de Particionamento</h3>
        <table>
          <thead><tr><th>Opção</th><th>Quando Usar</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><strong>Automático</strong></td><td>Disco inteiro para Fedora</td><td>O instalador cria as partições automaticamente (EFI, /boot, Btrfs)</td></tr>
            <tr><td><strong>Personalizado</strong></td><td>Dual boot ou controle manual</td><td>Você define tamanho e ponto de montagem de cada partição</td></tr>
            <tr><td><strong>Blivet-GUI</strong></td><td>Particionamento avançado</td><td>Interface gráfica completa para manipular partições</td></tr>
          </tbody>
        </table>

        <h3>Particionamento Recomendado (Manual)</h3>
        <CodeBlock
          code={`# Esquema de partições recomendado para UEFI:

  # 1. Partição EFI (obrigatória em UEFI)
  #    Ponto de montagem: /boot/efi
  #    Tamanho: 512 MB (formato: FAT32)

  # 2. Partição /boot
  #    Ponto de montagem: /boot
  #    Tamanho: 1 GB (formato: ext4)

  # 3. Partição raiz / (principal)
  #    Ponto de montagem: /
  #    Tamanho: restante do disco (formato: Btrfs)
  #    Inclui subvolumes: @home, @root, @var

  # 4. Swap (opcional, recomendado)
  #    Tamanho sugerido:
  #    - 4 GB RAM → 4 GB swap
  #    - 8 GB RAM → 4 GB swap
  #    - 16+ GB RAM → 2-4 GB swap (ou usar zram)
  #    O Fedora usa zram por padrão, então swap em disco é opcional`}
          language="bash"
          title="esquema de partições"
        />

        <h2>Dual Boot: Fedora + Windows</h2>
        <p>
          Se você quer manter o Windows instalado junto com o Fedora, siga estas instruções:
        </p>
        <ul>
          <li><strong>Antes de tudo:</strong> Faça backup dos seus dados no Windows!</li>
          <li><strong>No Windows:</strong> Desative a Inicialização Rápida (Fast Startup) em Opções de Energia</li>
          <li><strong>No Windows:</strong> Reduza a partição Windows usando o Gerenciador de Disco para liberar espaço (mínimo 40 GB)</li>
          <li><strong>Na BIOS:</strong> Desative o Fast Boot (diferente de Fast Startup)</li>
          <li><strong>Na instalação:</strong> Use particionamento personalizado e instale o Fedora no espaço livre</li>
          <li><strong>Importante:</strong> NÃO formate a partição EFI existente — o Fedora a compartilha com o Windows</li>
        </ul>

        <AlertBox type="warning" title="Ordem de instalação">
          Se possível, instale o Windows primeiro e o Fedora depois. O GRUB do Fedora detecta o Windows automaticamente. Se instalar o Windows depois, ele pode sobrescrever o GRUB — nesse caso, use um Live USB do Fedora para reinstalar o GRUB.
        </AlertBox>

        <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Passo 6: Pós-instalação</h2>
        <p>
          Após a instalação, reinicie, remova o pen drive e faça o primeiro login. O assistente inicial do GNOME vai guiá-lo pelas configurações básicas. Em seguida:
        </p>
        <CodeBlock
          code={`# 1. Atualizar todo o sistema
  sudo dnf update -y

  # 2. Instalar repositórios RPM Fusion (para codecs e drivers)
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
  sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # 3. Instalar codecs multimídia
  sudo dnf install gstreamer1-plugins-bad-\* gstreamer1-plugins-good-\* gstreamer1-plugins-ugly-\* gstreamer1-plugin-openh264
  sudo dnf install ffmpeg ffmpeg-libs

  # 4. Instalar ferramentas essenciais
  sudo dnf install vim git curl wget htop neofetch unzip p7zip

  # 5. Configurar Flatpak (já vem habilitado, mas adicione Flathub)
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # 6. Reiniciar para aplicar tudo
  sudo reboot`}
          language="bash"
          title="pós-instalação"
        />

        <h2><AlertTriangle className="inline-block mr-2 mb-1 w-5 h-5" /> Troubleshooting de Instalação</h2>
        <table>
          <thead><tr><th>Problema</th><th>Causa Provável</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Pen drive não aparece no boot</td><td>Secure Boot ou ordem de boot</td><td>Acesse a BIOS e configure USB como primeiro boot</td></tr>
            <tr><td>Tela preta após iniciar a ISO</td><td>Driver de vídeo NVIDIA</td><td>No GRUB, edite o boot e adicione <code>nomodeset</code></td></tr>
            <tr><td>Wi-Fi não funciona no Live</td><td>Driver proprietário necessário</td><td>Use cabo Ethernet ou instale o driver após a instalação</td></tr>
            <tr><td>Instalador travou</td><td>ISO corrompida ou hardware</td><td>Verifique o checksum da ISO e teste a RAM com memtest86+</td></tr>
            <tr><td>Erro de particionamento</td><td>Tabela de partição incompatível</td><td>Use o Blivet-GUI ou particione manualmente com GParted no Live</td></tr>
            <tr><td>GRUB não aparece (dual boot)</td><td>Windows sobrescreveu o bootloader</td><td>Boot pelo Live USB e reinstale o GRUB com <code>grub2-install</code></td></tr>
            <tr><td>Tela com resolução errada</td><td>Driver de vídeo genérico</td><td>Instale drivers proprietários após a instalação via RPM Fusion</td></tr>
            <tr><td>Touchpad não funciona</td><td>Driver não carregado</td><td>Atualize o kernel: <code>sudo dnf update kernel</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Instalação concluída!">
          Parabéns! Com o Fedora instalado, siga para a página de <strong>Primeiros Passos</strong> para configurar completamente seu sistema e instalar os programas essenciais.
        </AlertBox>
      </PageContainer>
    );
  }
  