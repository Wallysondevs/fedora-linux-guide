import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { HardDrive, Search, Settings, AlertTriangle, BarChart, Wrench } from "lucide-react";

  export default function Disco() {
    return (
      <PageContainer
        title="Gerenciamento de Disco"
        subtitle="Gerencie discos e partições no Fedora: verificar espaço, criar partições, formatar, montar e diagnosticar saúde do disco."
        difficulty="intermediario"
        timeToRead="20 min"
      >
        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Verificar Espaço em Disco</h2>
        <CodeBlock
          code={`# Espaço por partição
  df -h
  df -h /home       # partição específica

  # Uso de espaço por pasta
  du -sh /home/*
  du -sh /var/log

  # Encontrar maiores diretórios
  du -h --max-depth=1 / 2>/dev/null | sort -rh | head -20

  # Ferramenta interativa (ncdu)
  sudo dnf install ncdu
  ncdu /`}
          language="bash"
          title="espaço em disco"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Partições</h2>
        <CodeBlock
          code={`# Listar discos e partições
  lsblk
  lsblk -f     # com tipo de filesystem

  # Ver partições detalhadas
  sudo fdisk -l

  # Criar/editar partições (interativo)
  sudo fdisk /dev/sdb

  # Formatar partição
  sudo mkfs.ext4 /dev/sdb1       # ext4
  sudo mkfs.btrfs /dev/sdb1      # Btrfs
  sudo mkfs.xfs /dev/sdb1        # XFS
  sudo mkfs.vfat -F 32 /dev/sdb1 # FAT32 (pendrives)

  # Montar
  sudo mount /dev/sdb1 /mnt/dados

  # Desmontar
  sudo umount /mnt/dados

  # Ver UUIDs
  sudo blkid`}
          language="bash"
          title="partições"
        />

        <h2><Wrench className="inline-block mr-2 mb-1 w-5 h-5" /> Saúde do Disco (SMART)</h2>
        <CodeBlock
          code={`# Instalar smartmontools
  sudo dnf install smartmontools

  # Verificar saúde do disco
  sudo smartctl -H /dev/sda

  # Informações detalhadas
  sudo smartctl -a /dev/sda

  # Teste rápido
  sudo smartctl -t short /dev/sda
  sudo smartctl -l selftest /dev/sda   # ver resultado`}
          language="bash"
          title="SMART"
        />

        <AlertBox type="danger" title="Cuidado com fdisk e mkfs!">
          Esses comandos podem <strong>destruir dados permanentemente</strong>! Sempre confirme
          o dispositivo correto com <code>lsblk</code> antes. Nunca formate <code>/dev/sda</code>
          (provavelmente é seu disco principal!).
        </AlertBox>
      </PageContainer>
    );
  }
  