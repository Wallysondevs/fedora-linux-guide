import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { HardDrive, Camera, RefreshCw } from "lucide-react";

export default function Btrfs() {
  return (
    <PageContainer
      title="Btrfs — Filesystem Padrão"
      subtitle="Aproveite ao máximo o Btrfs — o sistema de arquivos padrão do Fedora — com subvolumes, snapshots e compressão."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Btrfs?</h2>
      <p>
        O <strong>Btrfs</strong> (B-Tree Filesystem) é o sistema de arquivos padrão do Fedora desde o Fedora 33. É um sistema moderno com recursos avançados que o ext4 não oferece nativamente:
      </p>
      <ul>
        <li><strong>Snapshots</strong> — cópias instantâneas do sistema de arquivos</li>
        <li><strong>Subvolumes</strong> — partições lógicas dentro do filesystem</li>
        <li><strong>Copy-on-Write (CoW)</strong> — integridade de dados garantida</li>
        <li><strong>Compressão transparente</strong> — economiza espaço automaticamente</li>
        <li><strong>Checksums</strong> — detecta corrupção de dados</li>
        <li><strong>RAID integrado</strong> — sem precisar de software adicional</li>
        <li><strong>Redimensionamento online</strong> — sem desmontar</li>
      </ul>

      <AlertBox type="info" title="Subvolumes padrão do Fedora">
        O instalador cria automaticamente dois subvolumes: <code>@</code> (montado em <code>/</code>) e <code>@home</code> (montado em <code>/home</code>). Isso facilita snapshots independentes do sistema e dos dados do usuário.
      </AlertBox>

      <h2>Comandos Básicos do Btrfs</h2>
      <CodeBlock
        code={`# Ver informações do filesystem Btrfs
sudo btrfs filesystem show /
sudo btrfs filesystem df /
sudo btrfs filesystem usage /

# Ver subvolumes
sudo btrfs subvolume list /

# Uso de espaço (mostra espaço real, não o do df que pode enganar)
sudo btrfs filesystem du -s /home`}
        language="bash"
        title="informações"
      />

      <h2><Camera className="inline-block mr-2 mb-1 w-5 h-5" /> Snapshots</h2>
      <p>Snapshots são cópias instantâneas e imutáveis de um subvolume. Como o Btrfs usa CoW, snapshots são criados em milissegundos e quase sem uso de espaço inicial.</p>
      <CodeBlock
        code={`# Criar um snapshot (somente leitura) do subvolume raiz
sudo btrfs subvolume snapshot -r / /snapshots/root-$(date +%Y%m%d)

# Criar um snapshot do /home
sudo btrfs subvolume snapshot -r /home /snapshots/home-$(date +%Y%m%d)

# Criar snapshot gravável (útil para restauração)
sudo btrfs subvolume snapshot / /snapshots/root-editavel

# Listar snapshots
sudo btrfs subvolume list /
ls /snapshots/

# Remover um snapshot
sudo btrfs subvolume delete /snapshots/root-20240101`}
        language="bash"
        title="snapshots"
      />

      <h2>Compressão Automática</h2>
      <CodeBlock
        code={`# Ver opções de montagem atuais
cat /proc/mounts | grep btrfs
findmnt -t btrfs

# Habilitar compressão Zstd (recomendado — bom equilíbrio)
# Edite /etc/fstab e adicione "compress=zstd:1" nas opções
# Exemplo de linha no fstab:
# UUID=xxx / btrfs compress=zstd:1,subvol=@ 0 0

# Aplicar compressão nos arquivos existentes
sudo btrfs filesystem defragment -r -v -czstd /

# Verificar taxa de compressão
sudo compsize /home   # precisa instalar: sudo dnf install btrfs-compsize`}
        language="bash"
        title="compressão"
      />

      <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Manutenção e Scrub</h2>
      <CodeBlock
        code={`# Scrub — verifica integridade e corrige erros com redundância
sudo btrfs scrub start /
sudo btrfs scrub status /

# Desfragmentação (menos necessária no Btrfs que no ext4)
sudo btrfs filesystem defragment -r /home

# Balanceamento (redistribui dados — útil após adicionar disco)
sudo btrfs balance start /
sudo btrfs balance status /

# Ver uso detalhado por tipo de dado
sudo btrfs filesystem df /`}
        language="bash"
        title="manutenção"
      />

      <h2>Snapper — Gerenciamento Automático de Snapshots</h2>
      <CodeBlock
        code={`# Instalar o Snapper
sudo dnf install snapper

# Criar configuração para o subvolume raiz
sudo snapper -c root create-config /

# Criar configuração para o /home
sudo snapper -c home create-config /home

# Criar snapshot manual
sudo snapper -c root create --description "antes de atualização"

# Listar snapshots
sudo snapper -c root list

# Comparar dois snapshots
sudo snapper -c root diff 1..2

# Restaurar um arquivo de um snapshot
sudo snapper -c root undochange 1..0 /etc/hosts

# Habilitar snapshots automáticos na timeline
sudo systemctl enable --now snapper-timeline.timer
sudo systemctl enable --now snapper-cleanup.timer`}
        language="bash"
        title="snapper"
      />
    </PageContainer>
  );
}
