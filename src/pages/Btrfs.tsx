import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { HardDrive, Camera, RefreshCw, Shield, Settings, Layers } from "lucide-react";

  export default function Btrfs() {
    return (
      <PageContainer
        title="Btrfs — Filesystem Padrão"
        subtitle="Domine o Btrfs, o sistema de arquivos padrão do Fedora — snapshots, subvolumes, compressão, RAID e recuperação."
        difficulty="avancado"
        timeToRead="40 min"
      >
        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Btrfs?</h2>
        <p>
          O <strong>Btrfs (B-tree File System)</strong> é o filesystem padrão do Fedora desde a versão 33. Ele oferece recursos avançados que o ext4 não possui: snapshots instantâneos, subvolumes, compressão transparente, checksums de dados e suporte a RAID integrado.
        </p>
        <p>
          O nome é pronunciado "butter FS" ou "better FS". Foi desenvolvido originalmente pela Oracle e agora é mantido pela comunidade com forte suporte da SUSE, Meta (Facebook) e Red Hat.
        </p>

        <h3>Btrfs vs ext4</h3>
        <table>
          <thead><tr><th>Recurso</th><th>Btrfs</th><th>ext4</th></tr></thead>
          <tbody>
            <tr><td><strong>Snapshots</strong></td><td>Sim (instantâneos, COW)</td><td>Não</td></tr>
            <tr><td><strong>Subvolumes</strong></td><td>Sim</td><td>Não</td></tr>
            <tr><td><strong>Compressão</strong></td><td>Sim (zstd, lzo, zlib)</td><td>Não</td></tr>
            <tr><td><strong>Checksums</strong></td><td>Sim (detecta corrupção)</td><td>Apenas metadados</td></tr>
            <tr><td><strong>Copy-on-Write</strong></td><td>Sim</td><td>Não</td></tr>
            <tr><td><strong>RAID</strong></td><td>Integrado</td><td>Via mdadm separado</td></tr>
            <tr><td><strong>Deduplicação</strong></td><td>Offline</td><td>Não</td></tr>
            <tr><td><strong>Redimensionamento</strong></td><td>Aumentar e diminuir online</td><td>Apenas aumentar online</td></tr>
            <tr><td><strong>Maturidade</strong></td><td>Estável para uso desktop/server</td><td>Extremamente maduro</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Por que o Fedora escolheu Btrfs?">
          O Fedora adotou Btrfs pelos snapshots (permite reverter atualizações problemáticas), compressão transparente (economiza disco), e checksums (detecta corrupção silenciosa de dados). Essas funcionalidades tornam o sistema mais resiliente e recuperável.
        </AlertBox>

        <h2>Verificando o Btrfs</h2>
        <CodeBlock
          code={`# Verificar qual filesystem está em uso
  df -T /
  # Filesystem     Type   Size  Used Avail Use% Mounted on
  # /dev/sda3      btrfs  500G  15G  485G   3% /

  # Informações do Btrfs
  sudo btrfs filesystem show
  # Label: 'fedora'  uuid: xxxx-xxxx
  #   Total devices 1 FS bytes used 15.00GiB
  #   devid    1 size 498.40GiB used 20.02GiB path /dev/sda3

  # Uso detalhado de espaço
  sudo btrfs filesystem usage /
  # Overall:
  #   Device size:           498.40GiB
  #   Device allocated:       20.02GiB
  #   Device unallocated:    478.38GiB
  #   Used:                   15.00GiB
  #   Free (estimated):      483.40GiB

  # Uso por tipo de dado
  sudo btrfs filesystem df /`}
          language="bash"
          title="verificando btrfs"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Subvolumes</h2>
        <p>
          Subvolumes são como "partições virtuais" dentro do Btrfs. Cada subvolume pode ser montado separadamente e ter snapshots independentes. O Fedora cria dois subvolumes padrão:
        </p>
        <ul>
          <li><code>root</code> — sistema operacional (<code>/</code>)</li>
          <li><code>home</code> — dados do usuário (<code>/home</code>)</li>
        </ul>

        <CodeBlock
          code={`# Listar subvolumes
  sudo btrfs subvolume list /
  # ID 256 gen 1000 top level 5 path root
  # ID 257 gen 1000 top level 5 path home

  # Criar subvolume
  sudo btrfs subvolume create /mnt/btrfs/meu-subvolume

  # Exemplo prático: subvolume para VMs
  sudo btrfs subvolume create /var/lib/libvirt/images

  # Remover subvolume
  sudo btrfs subvolume delete /mnt/btrfs/meu-subvolume

  # Informações do subvolume
  sudo btrfs subvolume show /

  # Listar com detalhes
  sudo btrfs subvolume list -a /`}
          language="bash"
          title="subvolumes"
        />

        <h2><Camera className="inline-block mr-2 mb-1 w-5 h-5" /> Snapshots</h2>
        <p>
          Snapshots são a funcionalidade mais poderosa do Btrfs. Um snapshot é uma cópia instantânea de um subvolume usando <strong>Copy-on-Write (COW)</strong> — ocupa quase zero espaço inicialmente e cresce conforme os dados são modificados.
        </p>

        <h3>Snapshots manuais</h3>
        <CodeBlock
          code={`# Criar snapshot (somente leitura)
  sudo btrfs subvolume snapshot -r / /snapshots/root-$(date +%Y%m%d)

  # Criar snapshot (leitura e escrita)
  sudo btrfs subvolume snapshot / /snapshots/root-rw-$(date +%Y%m%d)

  # Criar diretório para snapshots (se não existir)
  sudo mkdir -p /snapshots

  # Exemplo: snapshot antes de uma atualização
  sudo btrfs subvolume snapshot -r / /snapshots/pre-update-$(date +%Y%m%d-%H%M)
  sudo dnf update -y
  # Se algo der errado, você pode reverter!

  # Listar snapshots
  sudo btrfs subvolume list -s /
  # Mostra apenas snapshots (flag -s)

  # Remover snapshot
  sudo btrfs subvolume delete /snapshots/root-20240115

  # Ver espaço usado por snapshots
  sudo btrfs filesystem du -s /snapshots/`}
          language="bash"
          title="snapshots manuais"
        />

        <h3>Restaurando um snapshot</h3>
        <CodeBlock
          code={`# Para reverter o sistema a um snapshot:

  # 1. Iniciar pelo modo de resgate ou live USB

  # 2. Montar o Btrfs
  sudo mount /dev/sda3 /mnt

  # 3. Renomear o subvolume atual
  sudo mv /mnt/root /mnt/root.broken

  # 4. Criar snapshot de escrita a partir do snapshot bom
  sudo btrfs subvolume snapshot /mnt/snapshots/pre-update /mnt/root

  # 5. Reiniciar
  sudo reboot

  # 6. Após confirmar que tudo funciona, remover o antigo
  sudo btrfs subvolume delete /mnt/root.broken`}
          language="bash"
          title="restaurando snapshot"
        />

        <h3>Snapper — gerenciamento automático de snapshots</h3>
        <CodeBlock
          code={`# Instalar snapper
  sudo dnf install snapper

  # Criar configuração para o volume raiz
  sudo snapper -c root create-config /

  # Criar snapshot manualmente
  sudo snapper -c root create --description "antes do upgrade"

  # Listar snapshots
  sudo snapper -c root list
  # # | Type   | Pre # | Date                | User | Description
  # 1 | single |       | 2024-01-15 10:00:00 | root | antes do upgrade
  # 2 | single |       | 2024-01-15 14:00:00 | root | pós-upgrade

  # Comparar dois snapshots (ver o que mudou)
  sudo snapper -c root status 1..2

  # Reverter entre snapshots
  sudo snapper -c root undochange 1..2

  # Remover snapshot
  sudo snapper -c root delete 1

  # Configurar limpeza automática
  sudo snapper -c root set-config "TIMELINE_CREATE=yes"
  sudo snapper -c root set-config "TIMELINE_CLEANUP=yes"
  sudo snapper -c root set-config "TIMELINE_LIMIT_DAILY=7"
  sudo snapper -c root set-config "TIMELINE_LIMIT_WEEKLY=4"

  # Habilitar timer automático
  sudo systemctl enable --now snapper-timeline.timer
  sudo systemctl enable --now snapper-cleanup.timer`}
          language="bash"
          title="snapper"
        />

        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Compressão Transparente</h2>
        <p>O Btrfs pode comprimir dados de forma transparente — arquivos são comprimidos ao gravar e descomprimidos ao ler, sem você perceber. Isso economiza disco e pode até melhorar a performance (menos dados para ler do disco).</p>
        <CodeBlock
          code={`# Verificar compressão atual
  sudo btrfs property get / compression
  # ou verificar /etc/fstab

  # Habilitar compressão zstd (recomendado)
  # Edite /etc/fstab e adicione compress=zstd:1 às opções:
  # UUID=xxxx /  btrfs  subvol=root,compress=zstd:1  0 0
  # UUID=xxxx /home  btrfs  subvol=home,compress=zstd:1  0 0

  # Aplicar em tempo real
  sudo mount -o remount,compress=zstd:1 /

  # Comprimir dados existentes (defrag + compressão)
  sudo btrfs filesystem defragment -r -czstd /

  # Ver economia de compressão
  sudo compsize /
  # Processed 150000 extents
  # Type       Perc     Disk Usage   Uncompressed
  # TOTAL       68%       10G          15G
  # none       100%        5G           5G
  # zstd        50%        5G          10G`}
          language="bash"
          title="compressão"
        />

        <h3>Algoritmos de compressão</h3>
        <table>
          <thead><tr><th>Algoritmo</th><th>Velocidade</th><th>Taxa de Compressão</th><th>Recomendação</th></tr></thead>
          <tbody>
            <tr><td><strong>zstd:1</strong></td><td>Muito rápido</td><td>Boa</td><td>Uso geral (recomendado)</td></tr>
            <tr><td><strong>zstd:3</strong></td><td>Rápido</td><td>Melhor</td><td>Equilíbrio velocidade/compressão</td></tr>
            <tr><td><strong>lzo</strong></td><td>Mais rápido</td><td>Menor</td><td>CPUs lentas</td></tr>
            <tr><td><strong>zlib</strong></td><td>Mais lento</td><td>Alta</td><td>Arquivamento</td></tr>
          </tbody>
        </table>

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Manutenção</h2>
        <CodeBlock
          code={`# Scrub — verificar integridade dos dados
  sudo btrfs scrub start /
  sudo btrfs scrub status /
  # Mostra se encontrou erros de checksum

  # Balanço — redistribuir dados entre chunks
  sudo btrfs balance start /
  sudo btrfs balance status /

  # Balance com filtros (mais suave)
  sudo btrfs balance start -dusage=50 /
  # Apenas reorganiza chunks com menos de 50% de uso

  # Verificar filesystem (OFFLINE — não monte primeiro)
  sudo btrfs check /dev/sda3
  # NUNCA use --repair sem orientação de especialista!

  # Desfragmentar
  sudo btrfs filesystem defragment -r /

  # Verificar e corrigir metadados
  sudo btrfs rescue zero-log /dev/sda3`}
          language="bash"
          title="manutenção"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Send/Receive — Backup Incremental</h2>
        <CodeBlock
          code={`# Enviar snapshot para disco externo (backup)
  sudo btrfs subvolume snapshot -r / /snapshots/backup-base
  sudo btrfs send /snapshots/backup-base | sudo btrfs receive /mnt/externo/

  # Backup incremental (apenas diferenças — muito rápido!)
  # Primeiro: crie novo snapshot
  sudo btrfs subvolume snapshot -r / /snapshots/backup-inc1

  # Enviar apenas as diferenças
  sudo btrfs send -p /snapshots/backup-base /snapshots/backup-inc1 | sudo btrfs receive /mnt/externo/

  # Isso permite backups incrementais extremamente eficientes!`}
          language="bash"
          title="send/receive"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Diagnóstico</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Disco cheio mas df mostra espaço</td><td><code>btrfs fi usage /</code></td><td>Balance para redistribuir: <code>btrfs balance start -dusage=10 /</code></td></tr>
            <tr><td>Performance lenta</td><td>Fragmentação alta</td><td><code>btrfs filesystem defragment -r /</code></td></tr>
            <tr><td>Erros de checksum</td><td><code>btrfs scrub status /</code></td><td>Se RAID: auto-corrige. Se não: restaure do backup</td></tr>
            <tr><td>Muitos snapshots ocupando espaço</td><td><code>btrfs subvolume list -s /</code></td><td>Delete snapshots antigos: <code>btrfs subvolume delete</code></td></tr>
            <tr><td>COW lento para VMs/databases</td><td>Escrita aleatória intensa</td><td>Desabilite COW: <code>chattr +C /var/lib/libvirt/</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="COW e bancos de dados">
          O Copy-on-Write pode causar fragmentação e queda de performance em bancos de dados e máquinas virtuais. Desabilite COW para esses diretórios: <code>chattr +C /var/lib/mysql</code> (deve ser feito antes de criar os arquivos).
        </AlertBox>
      </PageContainer>
    );
  }
  