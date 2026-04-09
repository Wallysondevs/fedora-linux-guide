import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { HardDrive, Settings, FileText, Shield, Wrench } from "lucide-react";

  export default function Fstab() {
    return (
      <PageContainer
        title="fstab — Montagem de Discos"
        subtitle="Configure montagem automática de discos e partições no Fedora: fstab, UUID, opções de montagem e troubleshooting."
        difficulty="intermediario"
        timeToRead="20 min"
      >
        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> O que é fstab?</h2>
        <p>
          O arquivo <code>/etc/fstab</code> (File System Table) define quais partições/discos são
          montados automaticamente durante o boot. Cada linha especifica um dispositivo, ponto de
          montagem, sistema de arquivos e opções.
        </p>

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura do fstab</h2>
        <CodeBlock
          code={`# /etc/fstab
  # <dispositivo>              <ponto_montagem>  <tipo>   <opções>        <dump> <pass>
  UUID=abc123-def456           /                 btrfs    defaults        0      0
  UUID=789ghi-jkl012           /boot             ext4     defaults        1      2
  UUID=mno345-pqr678           /boot/efi         vfat     umask=0077      0      2
  UUID=stu901-vwx234           swap              swap     defaults        0      0

  # Campos:
  # 1. Dispositivo — UUID= ou /dev/sdX (UUID é mais seguro)
  # 2. Ponto de montagem — onde o disco aparece (/mnt/dados, etc.)
  # 3. Tipo — ext4, btrfs, vfat, ntfs, nfs, swap, etc.
  # 4. Opções — defaults, noatime, ro, rw, etc.
  # 5. Dump — 0 (não fazer dump) ou 1 (fazer)
  # 6. Pass — ordem de verificação (0=não, 1=raiz, 2=outros)`}
          language="bash"
          title="estrutura"
        />

        <h2>Adicionar Nova Partição ao fstab</h2>
        <CodeBlock
          code={`# 1. Identificar UUID da partição
  sudo blkid /dev/sdb1
  # /dev/sdb1: UUID="abc-123-def" TYPE="ext4"

  # Ou usar lsblk
  lsblk -f

  # 2. Criar ponto de montagem
  sudo mkdir -p /mnt/dados

  # 3. Adicionar ao fstab
  echo 'UUID=abc-123-def /mnt/dados ext4 defaults,noatime 0 2' | sudo tee -a /etc/fstab

  # 4. Testar ANTES de reiniciar!
  sudo mount -a
  # Se não der erro, está correto

  # 5. Verificar
  df -h /mnt/dados`}
          language="bash"
          title="adicionar partição"
        />

        <h2>Opções de Montagem Comuns</h2>
        <table>
          <thead><tr><th>Opção</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>defaults</code></td><td>rw, suid, dev, exec, auto, nouser, async</td></tr>
            <tr><td><code>noatime</code></td><td>Não atualizar data de acesso (melhora performance)</td></tr>
            <tr><td><code>ro</code></td><td>Somente leitura</td></tr>
            <tr><td><code>rw</code></td><td>Leitura e escrita</td></tr>
            <tr><td><code>noexec</code></td><td>Impedir execução de binários (segurança)</td></tr>
            <tr><td><code>nosuid</code></td><td>Ignorar bits SUID/SGID (segurança)</td></tr>
            <tr><td><code>nofail</code></td><td>Não falhar se o dispositivo não existir</td></tr>
            <tr><td><code>x-systemd.automount</code></td><td>Montar sob demanda (quando acessado)</td></tr>
          </tbody>
        </table>

        <h2>NTFS (Discos Windows)</h2>
        <CodeBlock
          code={`# Montar partição NTFS (Windows)
  sudo dnf install ntfs-3g
  echo 'UUID=xxx /mnt/windows ntfs-3g defaults,nofail 0 0' | sudo tee -a /etc/fstab`}
          language="bash"
          title="NTFS"
        />

        <AlertBox type="danger" title="Cuidado ao editar fstab!">
          Um erro no fstab pode impedir o sistema de iniciar! Sempre teste com <code>sudo mount -a</code>
          antes de reiniciar. Se o boot falhar, entre em modo de emergência e corrija o fstab.
        </AlertBox>
      </PageContainer>
    );
  }
  