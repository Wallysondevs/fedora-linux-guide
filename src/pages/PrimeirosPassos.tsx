import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Terminal, Settings, Keyboard } from "lucide-react";

export default function PrimeirosPassos() {
  return (
    <PageContainer
      title="Primeiros Passos"
      subtitle="O que fazer assim que o Fedora é instalado — configurações iniciais, terminal, sudo e ajuste do sistema."
      difficulty="iniciante"
      timeToRead="25 min"
    >
      <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Abrindo o Terminal</h2>
      <p>No GNOME, você pode abrir o terminal de várias formas:</p>
      <ul>
        <li>Pressione <code>Ctrl + Alt + T</code> (atalho padrão)</li>
        <li>Abra o menu de aplicativos (Super) e busque por <strong>Terminal</strong></li>
        <li>Clique com o botão direito na área de trabalho → <strong>Abrir no Terminal</strong></li>
        <li>Use o <strong>GNOME Console</strong> (kgx) — terminal moderno incluído por padrão</li>
      </ul>

      <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configurações Iniciais Essenciais</h2>

      <h3>1. Atualizar o Sistema</h3>
      <CodeBlock
        code={`# Sempre atualize logo após instalar
sudo dnf update -y

# Verificar se há atualizações sem instalar
sudo dnf check-update`}
        language="bash"
        title="atualização do sistema"
      />

      <h3>2. Configurar o hostname</h3>
      <CodeBlock
        code={`# Ver hostname atual
hostnamectl

# Definir um novo hostname
sudo hostnamectl set-hostname meu-fedora

# Verificar alteração
hostname`}
        language="bash"
        title="hostname"
      />

      <h3>3. Instalar o RPM Fusion</h3>
      <p>O RPM Fusion é um repositório essencial que adiciona pacotes não incluídos no Fedora por questões de licença (codecs, drivers NVIDIA, etc.).</p>
      <CodeBlock
        code={`# Repositório free (licenças livres, mas não no Fedora por outras razões)
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

# Repositório nonfree (drivers proprietários como NVIDIA)
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Verificar repositórios habilitados
dnf repolist`}
        language="bash"
        title="rpm fusion"
      />

      <h3>4. Instalar codecs multimídia</h3>
      <CodeBlock
        code={`# Instalar pacote de multimídia completo
sudo dnf install @multimedia --setopt="install_weak_deps=False"

# Suporte a formatos de vídeo adicionais (após habilitar RPM Fusion)
sudo dnf install gstreamer1-plugins-{bad-\*,good-\*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel

# Codecs de áudio
sudo dnf install lame\* --exclude=lame-devel`}
        language="bash"
        title="multimídia"
      />

      <h2><Keyboard className="inline-block mr-2 mb-1 w-5 h-5" /> Comandos Básicos do Terminal</h2>
      <CodeBlock
        code={`# Navegar entre diretórios
cd /home/usuario     # ir para um diretório
cd ~                 # ir para home
cd ..                # voltar um nível
cd -                 # voltar ao diretório anterior

# Listar arquivos
ls                   # listar arquivos
ls -la               # listar com detalhes (incluindo ocultos)
ls -lh               # tamanhos legíveis por humanos

# Criar e remover
mkdir pasta          # criar diretório
rmdir pasta          # remover diretório vazio
rm arquivo.txt       # remover arquivo
rm -rf pasta/        # remover pasta e conteúdo (CUIDADO!)

# Copiar e mover
cp origem destino    # copiar
mv origem destino    # mover/renomear

# Ver conteúdo
cat arquivo.txt      # mostrar conteúdo
less arquivo.txt     # paginar conteúdo
head -n 10 arquivo   # primeiras 10 linhas
tail -n 10 arquivo   # últimas 10 linhas

# Informações do sistema
df -h                # uso de disco
free -h              # uso de memória
top                  # processos em tempo real
htop                 # versão melhorada do top`}
        language="bash"
        title="comandos essenciais"
      />

      <AlertBox type="info" title="sudo — Execute como root">
        No Fedora, você não usa a conta <code>root</code> diretamente. Para comandos administrativos, use <code>sudo</code> antes do comando. Seu usuário foi adicionado ao grupo <code>wheel</code> durante a instalação, o que permite usar o sudo.
      </AlertBox>

      <h2>Descoberta de Informações do Sistema</h2>
      <CodeBlock
        code={`# Versão do Fedora
cat /etc/fedora-release

# Informações detalhadas do hardware
sudo dmidecode | head -50

# Processador
lscpu

# Memória RAM
free -h

# Discos
lsblk
df -h

# Placa de vídeo
lspci | grep -i vga

# Placa de rede
ip link show
nmcli device status`}
        language="bash"
        title="informações do sistema"
      />
    </PageContainer>
  );
}
