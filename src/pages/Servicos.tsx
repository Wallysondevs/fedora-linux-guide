import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Server, Play, Square, RefreshCw } from "lucide-react";

export default function Servicos() {
  return (
    <PageContainer
      title="Systemd e Serviços"
      subtitle="Gerencie serviços, units e o sistema de inicialização do Fedora com o systemd — da inicialização ao monitoramento."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Systemd?</h2>
      <p>
        O <strong>systemd</strong> é o sistema de inicialização (<em>init system</em>) do Fedora. Ele é responsável por inicializar o sistema, gerenciar serviços, montar sistemas de arquivos, gerenciar sessões de usuário e muito mais. Substituiu o antigo SysV init.
      </p>
      <p>No systemd, tudo é organizado em <strong>units</strong> — arquivos de configuração que descrevem serviços, dispositivos, pontos de montagem, timers, etc.</p>

      <h2>systemctl — Gerenciando Serviços</h2>
      <CodeBlock
        code={`# Ver status de um serviço
systemctl status nginx
systemctl status sshd

# Iniciar um serviço
sudo systemctl start nginx

# Parar um serviço
sudo systemctl stop nginx

# Reiniciar um serviço
sudo systemctl restart nginx

# Recarregar configurações (sem parar)
sudo systemctl reload nginx

# Habilitar serviço na inicialização do sistema
sudo systemctl enable nginx

# Habilitar e já iniciar
sudo systemctl enable --now nginx

# Desabilitar na inicialização
sudo systemctl disable nginx

# Verificar se está habilitado
systemctl is-enabled nginx

# Verificar se está ativo
systemctl is-active nginx`}
        language="bash"
        title="gerenciamento de serviços"
      />

      <h2>Listando e Filtrando Units</h2>
      <CodeBlock
        code={`# Listar serviços em execução
systemctl list-units --type=service --state=running

# Listar todos os serviços
systemctl list-units --type=service

# Listar serviços com falha
systemctl list-units --type=service --state=failed
systemctl --failed

# Listar todos os arquivos de unit (incluindo desabilitados)
systemctl list-unit-files --type=service

# Filtrar por estado
systemctl list-units --state=active
systemctl list-units --state=inactive`}
        language="bash"
        title="listando units"
      />

      <h2>journalctl — Logs do Sistema</h2>
      <CodeBlock
        code={`# Ver todos os logs
journalctl

# Logs de um serviço específico
journalctl -u nginx
journalctl -u sshd -f       # -f: acompanhar em tempo real

# Logs desde o último boot
journalctl -b

# Logs do boot anterior
journalctl -b -1

# Logs das últimas 2 horas
journalctl --since "2 hours ago"

# Logs entre datas
journalctl --since "2024-01-01 10:00" --until "2024-01-01 12:00"

# Logs de prioridade erro ou superior
journalctl -p err
journalctl -p 0..3           # emerg, alert, crit, err

# Seguir logs em tempo real
journalctl -f

# Limpar logs antigos
sudo journalctl --vacuum-time=30d    # manter últimos 30 dias
sudo journalctl --vacuum-size=1G     # manter até 1GB`}
        language="bash"
        title="journalctl"
      />

      <h2>Criando um Serviço Personalizado</h2>
      <CodeBlock
        code={`# Criar arquivo de unit para um serviço personalizado
sudo nano /etc/systemd/system/meu-app.service

# Conteúdo do arquivo:
[Unit]
Description=Meu Aplicativo Web
After=network.target

[Service]
Type=simple
User=appuser
WorkingDirectory=/opt/meu-app
ExecStart=/opt/meu-app/start.sh
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target

# Recarregar o systemd para reconhecer o novo serviço
sudo systemctl daemon-reload

# Habilitar e iniciar
sudo systemctl enable --now meu-app`}
        language="bash"
        title="serviço personalizado"
      />

      <h2>Systemd Timers (agendamento)</h2>
      <CodeBlock
        code={`# Timers substituem o cron no systemd. Exemplo de backup diário:

# 1. Criar o serviço
sudo nano /etc/systemd/system/backup.service
# [Unit]
# Description=Backup diário
# [Service]
# Type=oneshot
# ExecStart=/usr/local/bin/backup.sh

# 2. Criar o timer
sudo nano /etc/systemd/system/backup.timer
# [Unit]
# Description=Executar backup diariamente
# [Timer]
# OnCalendar=daily
# Persistent=true
# [Install]
# WantedBy=timers.target

# 3. Habilitar o timer
sudo systemctl enable --now backup.timer

# Listar timers ativos
systemctl list-timers`}
        language="bash"
        title="systemd timers"
      />

      <AlertBox type="info" title="systemd vs SysV">
        O systemd inicia serviços em paralelo (muito mais rápido que o SysV), usa cgroups para isolamento de processos e oferece logging integrado via journald. O tempo de boot do Fedora é muito menor que distribuições antigas por causa disso.
      </AlertBox>
    </PageContainer>
  );
}
