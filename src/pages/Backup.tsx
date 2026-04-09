import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { HardDrive, Clock, Shield, Cloud, FolderSync, Settings } from "lucide-react";

  export default function Backup() {
    return (
      <PageContainer
        title="Backup e Recuperação"
        subtitle="Proteja seus dados: estratégias de backup, rsync, Timeshift, Snapper, tar, Borg Backup e automatização com cron/timers."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Por que Fazer Backup?</h2>
        <p>
          Backups são a única proteção real contra perda de dados. Não importa quão cuidadoso você seja —
          hardware falha, erros acontecem, e ransomware existe. A regra de ouro é a <strong>regra 3-2-1</strong>:
        </p>
        <ul>
          <li><strong>3 cópias</strong> dos seus dados</li>
          <li><strong>2 mídias diferentes</strong> (SSD + HD externo, por exemplo)</li>
          <li><strong>1 cópia offsite</strong> (nuvem ou local remoto)</li>
        </ul>

        <h2><FolderSync className="inline-block mr-2 mb-1 w-5 h-5" /> rsync — Sincronização de Arquivos</h2>
        <p>
          O <strong>rsync</strong> é a ferramenta padrão para backup no Linux. Ele copia apenas os arquivos
          que mudaram, tornando backups incrementais muito rápidos.
        </p>
        <CodeBlock
          code={`# Backup básico de uma pasta
  rsync -av /home/usuario/documentos/ /mnt/backup/documentos/
  # -a = archive (preserva permissões, datas, links, etc.)
  # -v = verbose (mostra o que está sendo copiado)
  # A / no final do source é importante!

  # Backup com compressão (para destinos remotos)
  rsync -avz /home/usuario/ usuario@servidor:/backup/

  # Backup com progresso
  rsync -avh --progress /home/usuario/ /mnt/backup/

  # Backup excluindo pastas desnecessárias
  rsync -av \
    --exclude='.cache' \
    --exclude='node_modules' \
    --exclude='.local/share/Trash' \
    /home/usuario/ /mnt/backup/home/

  # Sincronização espelho (remove do destino o que não existe mais na origem)
  rsync -av --delete /home/usuario/ /mnt/backup/home/
  # CUIDADO: --delete remove do backup arquivos que você apagou da origem!

  # Backup incremental com hard links (economiza espaço)
  rsync -av --link-dest=/mnt/backup/anterior/ \
    /home/usuario/ /mnt/backup/$(date +%Y%m%d)/

  # Backup via SSH
  rsync -avz -e ssh /home/usuario/ usuario@servidor.com:/backup/`}
          language="bash"
          title="rsync"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Snapper — Snapshots Btrfs</h2>
        <p>
          Como o Fedora usa Btrfs por padrão, você pode usar <strong>Snapper</strong> para criar snapshots
          do sistema — pontos de restauração instantâneos:
        </p>
        <CodeBlock
          code={`# Instalar Snapper
  sudo dnf install snapper

  # Criar configuração para o sistema raiz
  sudo snapper -c root create-config /

  # Criar snapshot manual
  sudo snapper -c root create --description "Antes de instalar NVIDIA"

  # Listar snapshots
  sudo snapper -c root list
  #   # | Type   | Pre # | Date                     | Description
  # ---+--------+-------+--------------------------+---------------------------
  #  0 | single |       |                          | current
  #  1 | single |       | 2024-01-15 10:00:00      | Antes de instalar NVIDIA

  # Comparar mudanças entre snapshots
  sudo snapper -c root diff 1..0

  # Restaurar para um snapshot anterior
  sudo snapper -c root undochange 1..0

  # Configurar snapshots automáticos
  sudo snapper -c root set-config "TIMELINE_CREATE=yes"
  sudo snapper -c root set-config "TIMELINE_CLEANUP=yes"
  sudo snapper -c root set-config "TIMELINE_LIMIT_HOURLY=5"
  sudo snapper -c root set-config "TIMELINE_LIMIT_DAILY=7"
  sudo snapper -c root set-config "TIMELINE_LIMIT_WEEKLY=4"
  sudo snapper -c root set-config "TIMELINE_LIMIT_MONTHLY=6"

  # Deletar snapshot
  sudo snapper -c root delete 1

  # Snapshot home
  sudo snapper -c home create-config /home
  sudo snapper -c home create --description "Backup home"`}
          language="bash"
          title="snapper (Btrfs)"
        />

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> tar — Backup Compactado</h2>
        <CodeBlock
          code={`# Backup completo com tar + compressão
  tar -czf backup-home-$(date +%Y%m%d).tar.gz \
    --exclude='.cache' \
    --exclude='node_modules' \
    /home/usuario/

  # Restaurar backup tar
  tar -xzf backup-home-20240115.tar.gz -C /

  # Backup apenas de configurações
  tar -czf backup-configs.tar.gz \
    /etc/ \
    /home/usuario/.bashrc \
    /home/usuario/.vimrc \
    /home/usuario/.config/

  # Listar conteúdo sem extrair
  tar -tzf backup.tar.gz | head -20

  # Backup com compressão máxima (xz)
  tar -cJf backup.tar.xz /home/usuario/`}
          language="bash"
          title="tar"
        />

        <h2><Cloud className="inline-block mr-2 mb-1 w-5 h-5" /> Borg Backup — Deduplicação</h2>
        <p>
          O <strong>Borg</strong> é uma ferramenta avançada de backup com deduplicação e criptografia.
          Ideal para backups grandes e frequentes — ele detecta blocos duplicados e armazena cada um
          apenas uma vez, economizando muito espaço.
        </p>
        <CodeBlock
          code={`# Instalar Borg
  sudo dnf install borgbackup

  # Inicializar repositório de backup (com criptografia)
  borg init --encryption=repokey /mnt/backup/borg-repo

  # Criar backup
  borg create /mnt/backup/borg-repo::backup-$(date +%Y%m%d) \
    /home/usuario \
    --exclude '/home/usuario/.cache' \
    --exclude '/home/usuario/node_modules' \
    --progress

  # Listar backups
  borg list /mnt/backup/borg-repo

  # Restaurar
  borg extract /mnt/backup/borg-repo::backup-20240115

  # Ver informações do repositório
  borg info /mnt/backup/borg-repo

  # Limpar backups antigos (manter 7 diários, 4 semanais, 6 mensais)
  borg prune /mnt/backup/borg-repo \
    --keep-daily 7 \
    --keep-weekly 4 \
    --keep-monthly 6

  # Backup remoto via SSH
  borg create usuario@servidor:/backup/borg::backup-$(date +%Y%m%d) /home/usuario`}
          language="bash"
          title="Borg Backup"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Automatizar Backups</h2>
        <CodeBlock
          code={`# Criar script de backup
  cat > ~/scripts/backup.sh << 'SCRIPT'
  #!/bin/bash
  # Backup automático com rsync
  DATA=$(date +%Y%m%d_%H%M)
  DESTINO="/mnt/backup"
  LOG="/var/log/backup-$DATA.log"

  echo "Backup iniciado: $(date)" >> $LOG

  rsync -av --delete \
    --exclude='.cache' \
    --exclude='node_modules' \
    --exclude='.local/share/Trash' \
    /home/ $DESTINO/home/ >> $LOG 2>&1

  echo "Backup finalizado: $(date)" >> $LOG
  SCRIPT

  chmod +x ~/scripts/backup.sh

  # Agendar com systemd timer (melhor que cron no Fedora)
  # Criar o serviço
  sudo cat > /etc/systemd/system/backup.service << 'EOF'
  [Unit]
  Description=Backup diário

  [Service]
  Type=oneshot
  ExecStart=/home/usuario/scripts/backup.sh
  EOF

  # Criar o timer
  sudo cat > /etc/systemd/system/backup.timer << 'EOF'
  [Unit]
  Description=Timer do backup diário

  [Timer]
  OnCalendar=daily
  Persistent=true

  [Install]
  WantedBy=timers.target
  EOF

  # Habilitar timer
  sudo systemctl enable --now backup.timer
  sudo systemctl list-timers`}
          language="bash"
          title="automatizar"
        />

        <h2>Comparação de Ferramentas</h2>
        <table>
          <thead><tr><th>Ferramenta</th><th>Tipo</th><th>Melhor para</th><th>Criptografia</th></tr></thead>
          <tbody>
            <tr><td><strong>rsync</strong></td><td>Sincronização</td><td>Backup simples, mirrors</td><td>Via SSH</td></tr>
            <tr><td><strong>Snapper</strong></td><td>Snapshots Btrfs</td><td>Restaurar sistema rapidamente</td><td>Não</td></tr>
            <tr><td><strong>tar</strong></td><td>Arquivo compactado</td><td>Backup pontual, portável</td><td>Via GPG</td></tr>
            <tr><td><strong>Borg</strong></td><td>Deduplicação</td><td>Backups grandes e frequentes</td><td>Sim (nativa)</td></tr>
            <tr><td><strong>Déjà Dup</strong></td><td>GUI (usa Borg)</td><td>Usuários que preferem interface gráfica</td><td>Sim</td></tr>
            <tr><td><strong>Restic</strong></td><td>Deduplicação</td><td>Backup para nuvem (S3, B2)</td><td>Sim (nativa)</td></tr>
          </tbody>
        </table>

        <AlertBox type="danger" title="Teste seus backups!">
          Um backup que nunca foi testado não é um backup. Periodicamente, restaure seus backups em um
          diretório temporário para verificar que os dados estão íntegros e completos.
        </AlertBox>
      </PageContainer>
    );
  }
  