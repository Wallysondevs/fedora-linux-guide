import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Download, HardDrive, CheckCircle, Monitor } from "lucide-react";

export default function Instalacao() {
  return (
    <PageContainer
      title="Instalação do Fedora"
      subtitle="Passo a passo completo para instalar o Fedora Workstation do zero — desde o download até o primeiro boot."
      difficulty="iniciante"
      timeToRead="30 min"
    >
      <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Baixando o Fedora</h2>
      <p>Acesse <strong>getfedora.org</strong> e baixe a imagem ISO do <strong>Fedora Workstation</strong> (a edição desktop com GNOME). A imagem tem cerca de 2 GB.</p>

      <AlertBox type="info" title="Qual edição baixar?">
        Para uso desktop, baixe <strong>Fedora Workstation</strong>. Para servidores, use o <strong>Fedora Server</strong>. Para experimentar um desktop imutável, tente o <strong>Fedora Silverblue</strong>.
      </AlertBox>

      <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Criando o Pendrive Bootável</h2>
      <p>Use o <strong>Fedora Media Writer</strong> (disponível para Windows, macOS e Linux) — é a forma mais simples e recomendada.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 border border-border rounded-xl bg-card">
          <h4 className="font-bold mb-2 mt-0 border-0">Fedora Media Writer</h4>
          <p className="text-sm text-muted-foreground">Ferramenta oficial. Baixe em flathub.org ou no site do Fedora. Suporta Windows e Linux.</p>
        </div>
        <div className="p-4 border border-border rounded-xl bg-card">
          <h4 className="font-bold mb-2 mt-0 border-0">Balena Etcher</h4>
          <p className="text-sm text-muted-foreground">Alternativa popular e fácil de usar. Disponível em balena.io/etcher para todos os sistemas.</p>
        </div>
        <div className="p-4 border border-border rounded-xl bg-card">
          <h4 className="font-bold mb-2 mt-0 border-0">dd (Linux/macOS)</h4>
          <p className="text-sm text-muted-foreground">Método via terminal. Poderoso mas exige cuidado para não apagar o disco errado.</p>
        </div>
        <div className="p-4 border border-border rounded-xl bg-card">
          <h4 className="font-bold mb-2 mt-0 border-0">Rufus (Windows)</h4>
          <p className="text-sm text-muted-foreground">Popular no Windows. Use o modo DD Image para criar o pendrive corretamente.</p>
        </div>
      </div>

      <p>Via terminal (Linux/macOS), substitua <code>/dev/sdX</code> pelo seu pendrive:</p>
      <CodeBlock
        code={`# Criar pendrive bootável com dd (CUIDADO: apaga todos os dados do pendrive)
sudo dd if=Fedora-Workstation-Live.iso of=/dev/sdX bs=4M status=progress oflag=sync`}
        language="bash"
        title="criando pendrive bootável"
      />

      <AlertBox type="danger" title="Atenção!">
        Verifique com cuidado o dispositivo correto (<code>lsblk</code> ou <code>fdisk -l</code>). O comando <code>dd</code> apagará tudo no disco especificado sem confirmação.
      </AlertBox>

      <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Processo de Instalação (Anaconda)</h2>
      <p>O instalador do Fedora se chama <strong>Anaconda</strong>. Siga os passos abaixo:</p>
      <ol>
        <li>Inicie o computador pelo pendrive (F12, F2, Del ou ESC no boot)</li>
        <li>Selecione <strong>"Start Fedora Workstation Live"</strong></li>
        <li>No ambiente live, clique em <strong>"Install to Hard Drive"</strong></li>
        <li>Selecione o <strong>idioma</strong> (Português do Brasil)</li>
        <li>Configure o <strong>fuso horário</strong> (America/Sao_Paulo)</li>
        <li>Configure o <strong>teclado</strong> (Português - Brasil)</li>
        <li>Configure o <strong>destino de instalação</strong> (particionamento)</li>
        <li>Clique em <strong>"Iniciar Instalação"</strong></li>
        <li>Aguarde a instalação terminar e reinicie</li>
      </ol>

      <h2>Particionamento Recomendado</h2>
      <AlertBox type="info" title="Particionamento automático">
        Para iniciantes, o particionamento automático do Anaconda funciona muito bem. Ele usará Btrfs com subvolumes <code>@</code> (raiz) e <code>@home</code> automaticamente.
      </AlertBox>

      <table>
        <thead>
          <tr><th>Partição</th><th>Tamanho</th><th>Tipo</th><th>Ponto de Montagem</th></tr>
        </thead>
        <tbody>
          <tr><td>EFI</td><td>600 MB</td><td>FAT32</td><td>/boot/efi</td></tr>
          <tr><td>Boot</td><td>1 GB</td><td>ext4</td><td>/boot</td></tr>
          <tr><td>Root</td><td>resto do disco</td><td>Btrfs</td><td>/</td></tr>
        </tbody>
      </table>

      <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Pós-instalação</h2>
      <CodeBlock
        code={`# Atualizar o sistema logo após instalar
sudo dnf update -y

# Instalar o RPM Fusion (repositórios com mais pacotes)
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Instalar codecs multimídia
sudo dnf install @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin

# Instalar suporte a fontes da Microsoft
sudo dnf install curl cabextract xorg-x11-font-utils fontconfig
sudo rpm -i https://downloads.sourceforge.net/project/mscorefonts2/rpms/msttcore-fonts-installer-2.6-1.noarch.rpm`}
        language="bash"
        title="pós-instalação essencial"
      />
    </PageContainer>
  );
}
