import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Download, HardDrive, CheckCircle, Monitor, Usb, Settings } from "lucide-react";

  export default function Instalacao() {
    return (
      <PageContainer
        title="Instalação do Fedora"
        subtitle="Passo a passo completo para instalar o Fedora Workstation do zero — desde o download até o primeiro boot."
        difficulty="iniciante"
        timeToRead="35 min"
      >
        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Baixando o Fedora</h2>
        <p>Acesse <strong>getfedora.org</strong> e baixe a imagem ISO do <strong>Fedora Workstation</strong> (a edição desktop com GNOME). A imagem tem cerca de 2 GB.</p>

        <AlertBox type="info" title="Qual edição baixar?">
          Para uso desktop, baixe <strong>Fedora Workstation</strong>. Para servidores, use o <strong>Fedora Server</strong>. Para experimentar um desktop imutável, tente o <strong>Fedora Silverblue</strong>. Para outro ambiente desktop (KDE, Xfce), baixe a Spin correspondente.
        </AlertBox>

        <h3>Verificando a Integridade da ISO</h3>
        <p>Após o download, verifique se o arquivo não está corrompido. O site do Fedora fornece o checksum SHA-256:</p>
        <CodeBlock
          code={`# Baixar o arquivo de checksums do site do Fedora
  # (disponível na mesma página de download)

  # Verificar o hash SHA-256 da ISO baixada
  sha256sum Fedora-Workstation-Live-x86_64-41-1.4.iso

  # Comparar a saída com o valor fornecido no site
  # Se forem iguais, a ISO está íntegra

  # Verificar com o arquivo CHECKSUM (se baixou junto)
  sha256sum -c Fedora-Workstation-41-1.4-x86_64-CHECKSUM`}
          language="bash"
          title="verificação de integridade"
        />

        <h2><Usb className="inline-block mr-2 mb-1 w-5 h-5" /> Criando o Pendrive Bootável</h2>
        <p>Você precisa de um pendrive com pelo menos <strong>4 GB</strong>. Todos os dados do pendrive serão apagados.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 border border-border rounded-xl bg-card">
            <h4 className="font-bold mb-2 mt-0 border-0">Fedora Media Writer</h4>
            <p className="text-sm text-muted-foreground mb-1">Ferramenta oficial do Fedora. A mais simples e confiável.</p>
            <p className="text-xs text-muted-foreground">Windows, macOS e Linux (Flathub)</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h4 className="font-bold mb-2 mt-0 border-0">Balena Etcher</h4>
            <p className="text-sm text-muted-foreground mb-1">Alternativa popular, interface drag-and-drop.</p>
            <p className="text-xs text-muted-foreground">Disponível em balena.io/etcher</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h4 className="font-bold mb-2 mt-0 border-0">Ventoy</h4>
            <p className="text-sm text-muted-foreground mb-1">Permite múltiplas ISOs no mesmo pendrive. Basta copiar a ISO para o pendrive.</p>
            <p className="text-xs text-muted-foreground">ventoy.net — multiplataforma</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h4 className="font-bold mb-2 mt-0 border-0">dd (Linux/macOS)</h4>
            <p className="text-sm text-muted-foreground mb-1">Método via terminal. Poderoso mas exige cuidado.</p>
            <p className="text-xs text-muted-foreground">Nativo no Linux e macOS</p>
          </div>
        </div>

        <h3>Método via Terminal (dd)</h3>
        <CodeBlock
          code={`# PRIMEIRO: identifique seu pendrive (NÃO o disco do sistema!)
  lsblk
  # Procure o dispositivo pelo tamanho (ex: /dev/sdb com 16G)

  # Desmontar o pendrive se estiver montado
  sudo umount /dev/sdX*

  # Criar o pendrive bootável
  # CUIDADO: substitua /dev/sdX pelo seu pendrive (ex: /dev/sdb)
  # NÃO use partições (sdb1), use o disco inteiro (sdb)
  sudo dd if=Fedora-Workstation-Live-x86_64-41-1.4.iso of=/dev/sdX bs=4M status=progress oflag=sync

  # Saída esperada:
  # 2147483648 bytes (2,1 GB) copied, 120 s, 17,9 MB/s
  # Quando terminar, o pendrive está pronto`}
          language="bash"
          title="criando pendrive com dd"
        />

        <AlertBox type="danger" title="Cuidado com o dd!">
          O <code>dd</code> não pede confirmação. Se você especificar o disco errado (ex: <code>/dev/sda</code> que é seu HD), vai apagar todo o sistema. Sempre confirme o dispositivo com <code>lsblk</code> antes de executar.
        </AlertBox>

        <h2>Configurando o Boot pelo Pendrive</h2>
        <p>Para iniciar pelo pendrive, você precisa acessar o menu de boot do BIOS/UEFI:</p>
        <table>
          <thead>
            <tr><th>Fabricante</th><th>Tecla de Boot Menu</th><th>Tecla de BIOS/UEFI</th></tr>
          </thead>
          <tbody>
            <tr><td>Dell</td><td>F12</td><td>F2</td></tr>
            <tr><td>HP</td><td>F9</td><td>F10 ou ESC</td></tr>
            <tr><td>Lenovo</td><td>F12</td><td>F2 ou Fn+F2</td></tr>
            <tr><td>ASUS</td><td>F8 ou ESC</td><td>F2 ou Del</td></tr>
            <tr><td>Acer</td><td>F12</td><td>F2</td></tr>
            <tr><td>MSI</td><td>F11</td><td>Del</td></tr>
            <tr><td>Gigabyte</td><td>F12</td><td>Del</td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="Secure Boot">
          O Fedora funciona com <strong>Secure Boot habilitado</strong> — não é necessário desabilitar. Se tiver problemas, verifique se o pendrive foi criado corretamente.
        </AlertBox>

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Processo de Instalação (Anaconda)</h2>
        <p>O instalador do Fedora se chama <strong>Anaconda</strong>. Ele é gráfico e intuitivo:</p>

        <h3>Passo 1 — Boot pelo pendrive</h3>
        <ol>
          <li>Ligue o computador e pressione a tecla de boot menu (veja tabela acima)</li>
          <li>Selecione o pendrive USB na lista de dispositivos</li>
          <li>Na tela do GRUB, selecione <strong>"Start Fedora Workstation Live"</strong></li>
          <li>Aguarde o carregamento do ambiente live</li>
        </ol>

        <AlertBox type="info" title="Ambiente Live">
          O ambiente live permite testar o Fedora sem instalar nada. Você pode navegar na internet, testar a compatibilidade de hardware (Wi-Fi, som, vídeo) e decidir se quer instalar. Tudo roda na memória RAM.
        </AlertBox>

        <h3>Passo 2 — Iniciar a instalação</h3>
        <ol>
          <li>No ambiente live, clique em <strong>"Install to Hard Drive"</strong> (ou "Instalar no Disco Rígido")</li>
          <li>Selecione o <strong>idioma</strong>: Português (Brasil)</li>
        </ol>

        <h3>Passo 3 — Configurações essenciais</h3>
        <p>Na tela principal do Anaconda, configure:</p>
        <ul>
          <li><strong>Teclado</strong> — Português (Brasil) com layout ABNT2</li>
          <li><strong>Fuso horário</strong> — America/Sao_Paulo (ou sua região)</li>
          <li><strong>Destino da instalação</strong> — o disco onde o Fedora será instalado (veja particionamento abaixo)</li>
        </ul>

        <h3>Passo 4 — Instalar e reiniciar</h3>
        <ol>
          <li>Clique em <strong>"Iniciar Instalação"</strong></li>
          <li>Aguarde a cópia dos arquivos (5-15 minutos dependendo do hardware)</li>
          <li>Quando terminar, clique em <strong>"Reiniciar"</strong></li>
          <li>Remova o pendrive USB durante a reinicialização</li>
          <li>No primeiro boot, configure seu nome de usuário e senha</li>
        </ol>

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Particionamento</h2>

        <h3>Automático (recomendado para iniciantes)</h3>
        <p>O Anaconda oferece particionamento automático que funciona muito bem para a maioria dos casos. Ele cria:</p>
        <ul>
          <li>Partição EFI para boot UEFI</li>
          <li>Partição /boot para o bootloader</li>
          <li>Volume Btrfs com subvolumes <code>@</code> (raiz) e <code>@home</code> (dados do usuário)</li>
        </ul>

        <h3>Manual (para usuários avançados)</h3>
        <p>Se precisar de controle total, use o particionamento manual. Esquema recomendado:</p>
        <table>
          <thead>
            <tr><th>Partição</th><th>Tamanho</th><th>Tipo</th><th>Ponto de Montagem</th><th>Observação</th></tr>
          </thead>
          <tbody>
            <tr><td>EFI</td><td>600 MB</td><td>FAT32</td><td>/boot/efi</td><td>Obrigatório para UEFI</td></tr>
            <tr><td>Boot</td><td>1 GB</td><td>ext4</td><td>/boot</td><td>Kernel e initramfs</td></tr>
            <tr><td>Swap</td><td>2-8 GB</td><td>swap</td><td>—</td><td>Igual à RAM para hibernação</td></tr>
            <tr><td>Root</td><td>Resto do disco</td><td>Btrfs</td><td>/</td><td>Sistema + dados do usuário</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Swap — preciso?">
          O Fedora usa <strong>zram</strong> por padrão (compressão de RAM), o que reduz a necessidade de swap em disco. Se você tem 8 GB+ de RAM e não precisa de hibernação, pode pular a partição swap. Para hibernação, crie swap igual ao tamanho da RAM.
        </AlertBox>

        <h3>Dual Boot com Windows</h3>
        <p>Para instalar o Fedora ao lado do Windows:</p>
        <ol>
          <li><strong>No Windows</strong>: abra o Gerenciador de Disco e reduza a partição do Windows para liberar espaço (mínimo 40 GB)</li>
          <li><strong>Desabilite o Fast Startup</strong>: Painel de Controle → Opções de Energia → "Escolher a função dos botões de energia" → desmarque "Ligar inicialização rápida"</li>
          <li><strong>No Anaconda</strong>: selecione "I want to configure partitioning" e use o espaço livre para criar as partições do Fedora</li>
          <li>O GRUB detectará o Windows automaticamente e mostrará ambos no menu de boot</li>
        </ol>

        <AlertBox type="warning" title="Backup antes do dual boot!">
          Sempre faça backup dos seus dados antes de particionar o disco. Erros no particionamento podem apagar dados do Windows. Use o espaço <strong>livre/não alocado</strong> — nunca redimensione partições do Windows pelo Anaconda.
        </AlertBox>

        <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Pós-instalação Essencial</h2>
        <p>Após o primeiro boot, execute estas configurações essenciais:</p>

        <h3>1. Atualizar o sistema</h3>
        <CodeBlock
          code={`# Atualizar todos os pacotes (sempre faça isso primeiro!)
  sudo dnf update -y

  # Reiniciar se o kernel foi atualizado
  # (verifique se a saída menciona "kernel")
  sudo reboot`}
          language="bash"
          title="atualização inicial"
        />

        <h3>2. Habilitar RPM Fusion</h3>
        <CodeBlock
          code={`# Repositório free (codecs, ferramentas open source não incluídas)
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

  # Repositório nonfree (drivers NVIDIA, Steam, etc.)
  sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

  # Verificar que foram adicionados
  dnf repolist | grep rpmfusion`}
          language="bash"
          title="rpm fusion"
        />

        <h3>3. Instalar codecs multimídia</h3>
        <CodeBlock
          code={`# Codecs completos (áudio e vídeo)
  sudo dnf install @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin

  # Codecs adicionais do RPM Fusion
  sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel

  # Suporte a fontes Microsoft (Arial, Times, etc.)
  sudo dnf install curl cabextract xorg-x11-font-utils fontconfig
  sudo rpm -i https://downloads.sourceforge.net/project/mscorefonts2/rpms/msttcore-fonts-installer-2.6-1.noarch.rpm`}
          language="bash"
          title="codecs e fontes"
        />

        <h3>4. Habilitar Flathub</h3>
        <CodeBlock
          code={`# Adicionar repositório Flathub para apps Flatpak
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # Agora você pode instalar apps como:
  # flatpak install flathub com.spotify.Client
  # flatpak install flathub com.discordapp.Discord`}
          language="bash"
          title="flathub"
        />

        <h3>5. Instalar drivers NVIDIA (se aplicável)</h3>
        <CodeBlock
          code={`# Verificar se você tem placa NVIDIA
  lspci | grep -i nvidia

  # Se sim, instalar drivers proprietários (requer RPM Fusion nonfree)
  sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda

  # Aguardar a compilação do módulo (pode levar alguns minutos)
  # Depois, reinicie:
  sudo reboot

  # Verificar se o driver está ativo
  nvidia-smi`}
          language="bash"
          title="driver nvidia"
        />

        <AlertBox type="info" title="Placa AMD ou Intel?">
          Drivers de vídeo AMD (amdgpu) e Intel (i915) já vêm incluídos no kernel do Fedora. Não é necessário instalar nada adicional — funciona out of the box.
        </AlertBox>

        <h3>6. Otimizar o DNF</h3>
        <CodeBlock
          code={`# Acelerar downloads do DNF
  echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
  echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

  # Verificar configuração
  cat /etc/dnf/dnf.conf`}
          language="bash"
          title="otimizar dnf"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Checklist Pós-Instalação</h2>
        <table>
          <thead><tr><th>Tarefa</th><th>Comando</th><th>Prioridade</th></tr></thead>
          <tbody>
            <tr><td>Atualizar sistema</td><td><code>sudo dnf update -y</code></td><td>Essencial</td></tr>
            <tr><td>RPM Fusion</td><td>Ver acima</td><td>Essencial</td></tr>
            <tr><td>Codecs multimídia</td><td><code>sudo dnf install @multimedia</code></td><td>Essencial</td></tr>
            <tr><td>Flathub</td><td><code>flatpak remote-add</code></td><td>Recomendado</td></tr>
            <tr><td>Driver NVIDIA</td><td><code>sudo dnf install akmod-nvidia</code></td><td>Se aplicável</td></tr>
            <tr><td>Otimizar DNF</td><td><code>max_parallel_downloads=10</code></td><td>Recomendado</td></tr>
            <tr><td>Fontes Microsoft</td><td>Ver acima</td><td>Opcional</td></tr>
            <tr><td>Ferramentas dev</td><td><code>sudo dnf install @development-tools</code></td><td>Para desenvolvedores</td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting da Instalação</h2>
        <table>
          <thead><tr><th>Problema</th><th>Causa Provável</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Pendrive não aparece no boot</td><td>Secure Boot ou pendrive mal criado</td><td>Recrie com Fedora Media Writer; verifique a ordem de boot no BIOS</td></tr>
            <tr><td>Tela preta após boot</td><td>Driver de vídeo incompatível</td><td>No GRUB, edite a entrada e adicione <code>nomodeset</code> ao kernel</td></tr>
            <tr><td>Wi-Fi não funciona no live</td><td>Driver proprietário necessário</td><td>Use cabo ethernet para instalar; depois instale o driver via DNF</td></tr>
            <tr><td>Erro de particionamento</td><td>Tabela de partição incompatível</td><td>Use o particionamento manual; converta MBR para GPT se necessário</td></tr>
            <tr><td>Boot loop após instalar</td><td>GRUB não foi instalado corretamente</td><td>Reinstale o GRUB pelo ambiente live com <code>chroot</code></td></tr>
            <tr><td>Windows sumiu do boot</td><td>GRUB não detectou</td><td>Execute <code>sudo grub2-mkconfig -o /boot/grub2/grub.cfg</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  