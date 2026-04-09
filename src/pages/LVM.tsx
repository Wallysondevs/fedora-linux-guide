import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { HardDrive, Layers, Settings, Maximize, Minimize, FileText } from "lucide-react";

  export default function LVM() {
    return (
      <PageContainer
        title="LVM — Volumes Lógicos"
        subtitle="Gerencie espaço em disco flexivelmente com LVM no Fedora: criar, redimensionar e mover volumes lógicos sem perder dados."
        difficulty="avancado"
        timeToRead="25 min"
      >
        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> O que é LVM?</h2>
        <p>
          O <strong>LVM</strong> (Logical Volume Manager) é uma camada de abstração entre os discos físicos
          e os sistemas de arquivos. Em vez de criar partições fixas no disco, o LVM permite criar
          "volumes lógicos" que podem ser redimensionados, movidos e expandidos sem desligar o sistema.
        </p>
        <p>
          O Fedora usa LVM por padrão na instalação (quando não usa Btrfs). A estrutura é:
        </p>
        <ul>
          <li><strong>PV (Physical Volume)</strong> — o disco/partição física</li>
          <li><strong>VG (Volume Group)</strong> — grupo que agrupa PVs</li>
          <li><strong>LV (Logical Volume)</strong> — "partição virtual" dentro do VG</li>
        </ul>

        <h2>Visualizar Configuração Atual</h2>
        <CodeBlock
          code={`# Ver Physical Volumes (discos/partições)
  sudo pvs
  sudo pvdisplay

  # Ver Volume Groups
  sudo vgs
  sudo vgdisplay

  # Ver Logical Volumes
  sudo lvs
  sudo lvdisplay

  # Tudo de uma vez
  sudo lsblk`}
          language="bash"
          title="visualizar"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Criar LVM do Zero</h2>
        <CodeBlock
          code={`# PASSO 1: Criar Physical Volume
  sudo pvcreate /dev/sdb

  # PASSO 2: Criar Volume Group
  sudo vgcreate meu_vg /dev/sdb

  # PASSO 3: Criar Logical Volume
  # Criar LV com tamanho fixo
  sudo lvcreate -L 50G -n dados meu_vg

  # Criar LV usando 100% do espaço livre
  sudo lvcreate -l 100%FREE -n dados meu_vg

  # PASSO 4: Formatar
  sudo mkfs.ext4 /dev/meu_vg/dados

  # PASSO 5: Montar
  sudo mkdir -p /mnt/dados
  sudo mount /dev/meu_vg/dados /mnt/dados

  # Adicionar ao fstab para montagem automática
  echo '/dev/meu_vg/dados /mnt/dados ext4 defaults 0 2' | sudo tee -a /etc/fstab`}
          language="bash"
          title="criar LVM"
        />

        <h2><Maximize className="inline-block mr-2 mb-1 w-5 h-5" /> Expandir Volume (Sem Perder Dados!)</h2>
        <CodeBlock
          code={`# Expandir LV em 10GB
  sudo lvextend -L +10G /dev/meu_vg/dados

  # Expandir usando todo espaço livre
  sudo lvextend -l +100%FREE /dev/meu_vg/dados

  # Redimensionar o sistema de arquivos (ext4)
  sudo resize2fs /dev/meu_vg/dados

  # Ou fazer tudo em um comando:
  sudo lvextend -L +10G --resizefs /dev/meu_vg/dados

  # Adicionar novo disco ao Volume Group
  sudo pvcreate /dev/sdc
  sudo vgextend meu_vg /dev/sdc
  # Agora o VG tem mais espaço para expandir LVs!`}
          language="bash"
          title="expandir"
        />

        <h2><Minimize className="inline-block mr-2 mb-1 w-5 h-5" /> Reduzir Volume</h2>
        <CodeBlock
          code={`# CUIDADO: Reduzir é mais perigoso que expandir!
  # Faça backup antes!

  # 1. Desmontar
  sudo umount /mnt/dados

  # 2. Verificar sistema de arquivos
  sudo e2fsck -f /dev/meu_vg/dados

  # 3. Reduzir o filesystem PRIMEIRO
  sudo resize2fs /dev/meu_vg/dados 30G

  # 4. Reduzir o LV
  sudo lvreduce -L 30G /dev/meu_vg/dados

  # 5. Remontar
  sudo mount /dev/meu_vg/dados /mnt/dados`}
          language="bash"
          title="reduzir"
        />

        <h2>Referência</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>pvs / pvdisplay</code></td><td>Ver Physical Volumes</td></tr>
            <tr><td><code>vgs / vgdisplay</code></td><td>Ver Volume Groups</td></tr>
            <tr><td><code>lvs / lvdisplay</code></td><td>Ver Logical Volumes</td></tr>
            <tr><td><code>pvcreate</code></td><td>Criar Physical Volume</td></tr>
            <tr><td><code>vgcreate</code></td><td>Criar Volume Group</td></tr>
            <tr><td><code>lvcreate</code></td><td>Criar Logical Volume</td></tr>
            <tr><td><code>lvextend --resizefs</code></td><td>Expandir LV</td></tr>
            <tr><td><code>lvreduce</code></td><td>Reduzir LV</td></tr>
            <tr><td><code>vgextend</code></td><td>Adicionar disco ao VG</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="LVM vs Btrfs">
          O Fedora Workstation usa <strong>Btrfs</strong> por padrão (sem LVM). O Fedora Server usa
          <strong> LVM</strong>. Se você usa Btrfs, os subvolumes oferecem funcionalidade similar ao LVM
          com snapshots nativos. Use LVM quando precisar de máxima flexibilidade em ambientes de servidor.
        </AlertBox>
      </PageContainer>
    );
  }
  