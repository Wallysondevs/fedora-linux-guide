import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Clock, Settings, FileText, Timer, Calendar, Shield } from "lucide-react";

  export default function Cron() {
    return (
      <PageContainer
        title="Agendamento de Tarefas"
        subtitle="Automatize tarefas com cron e systemd timers no Fedora: agendar backups, limpeza, monitoramento e manutenção do sistema."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Agendamento no Fedora</h2>
        <p>
          O Fedora oferece duas formas de agendar tarefas: o clássico <strong>cron</strong> e os modernos
          <strong> systemd timers</strong>. Ambos permitem executar comandos ou scripts automaticamente
          em horários definidos. Systemd timers são a recomendação moderna no Fedora por serem mais
          flexíveis e se integrarem melhor com o sistema.
        </p>

        <h2><Calendar className="inline-block mr-2 mb-1 w-5 h-5" /> Cron — O Clássico</h2>
        <CodeBlock
          code={`# Instalar cron (se necessário)
  sudo dnf install cronie
  sudo systemctl enable --now crond

  # Editar crontab do seu usuário
  crontab -e

  # Listar tarefas agendadas
  crontab -l

  # Editar crontab do root
  sudo crontab -e

  # Remover todas as tarefas
  crontab -r`}
          language="bash"
          title="cron básico"
        />

        <h3>Formato da Crontab</h3>
        <CodeBlock
          code={`# ┌──────── minuto (0-59)
  # │ ┌────── hora (0-23)
  # │ │ ┌──── dia do mês (1-31)
  # │ │ │ ┌── mês (1-12)
  # │ │ │ │ ┌ dia da semana (0-7, 0 e 7 = domingo)
  # │ │ │ │ │
  # * * * * * comando

  # Exemplos:
  30 2 * * * /home/usuario/scripts/backup.sh
  # Executa todo dia às 02:30

  0 */6 * * * /usr/bin/dnf check-update
  # A cada 6 horas (00:00, 06:00, 12:00, 18:00)

  0 9 * * 1-5 echo "Bom dia!" | wall
  # De segunda a sexta, às 9h

  0 0 1 * * /home/usuario/scripts/relatorio-mensal.sh
  # Dia 1 de cada mês, à meia-noite

  @reboot /home/usuario/scripts/inicializar.sh
  # Executar ao ligar o computador

  @hourly /home/usuario/scripts/check.sh
  # A cada hora

  @daily /home/usuario/scripts/limpeza.sh
  # Uma vez por dia (meia-noite)

  @weekly /home/usuario/scripts/semanal.sh
  # Uma vez por semana (domingo à meia-noite)

  @monthly /home/usuario/scripts/mensal.sh
  # Uma vez por mês`}
          language="bash"
          title="formato crontab"
        />

        <h2><Timer className="inline-block mr-2 mb-1 w-5 h-5" /> Systemd Timers — A Alternativa Moderna</h2>
        <p>
          Systemd timers são a alternativa moderna ao cron no Fedora. Vantagens:
        </p>
        <ul>
          <li><strong>Logs integrados</strong> — use <code>journalctl</code> para ver saída</li>
          <li><strong>Dependências</strong> — pode depender de serviços ou rede</li>
          <li><strong>Persistent</strong> — executa tarefas perdidas (se o PC estava desligado)</li>
          <li><strong>Monotonic</strong> — agendar "5 min após o boot"</li>
          <li><strong>Randomized delay</strong> — evitar todos os timers no mesmo instante</li>
        </ul>

        <CodeBlock
          code={`# PASSO 1: Criar o serviço (o que executar)
  sudo cat > /etc/systemd/system/limpeza.service << 'EOF'
  [Unit]
  Description=Limpeza de cache do sistema

  [Service]
  Type=oneshot
  ExecStart=/home/usuario/scripts/limpeza.sh
  EOF

  # PASSO 2: Criar o timer (quando executar)
  sudo cat > /etc/systemd/system/limpeza.timer << 'EOF'
  [Unit]
  Description=Timer da limpeza diária

  [Timer]
  OnCalendar=daily
  # Executa uma vez por dia

  Persistent=true
  # Se o PC estava desligado, executa ao ligar

  RandomizedDelaySec=1h
  # Delay aleatório de até 1 hora (evita sobrecarga)

  [Install]
  WantedBy=timers.target
  EOF

  # PASSO 3: Habilitar e iniciar o timer
  sudo systemctl daemon-reload
  sudo systemctl enable --now limpeza.timer

  # Verificar timers ativos
  sudo systemctl list-timers --all

  # Ver logs do serviço
  sudo journalctl -u limpeza.service

  # Testar manualmente (executar agora)
  sudo systemctl start limpeza.service`}
          language="bash"
          title="systemd timer"
        />

        <h3>Formatos de OnCalendar</h3>
        <CodeBlock
          code={`# Formatos para OnCalendar:
  OnCalendar=daily                    # Todo dia à meia-noite
  OnCalendar=weekly                   # Todo domingo à meia-noite
  OnCalendar=monthly                  # Dia 1 à meia-noite
  OnCalendar=hourly                   # A cada hora
  OnCalendar=*-*-* 02:30:00           # Todo dia às 02:30
  OnCalendar=Mon..Fri *-*-* 09:00:00  # Seg-Sex às 9h
  OnCalendar=Sat *-*-* 10:00:00       # Sábado às 10h
  OnCalendar=*-*-01 00:00:00          # Dia 1 de cada mês

  # Verificar se o formato está correto:
  systemd-analyze calendar "Mon..Fri *-*-* 09:00:00"
  # Mostra as próximas execuções

  # Timer monotônico (relativo ao boot)
  OnBootSec=5min        # 5 minutos após o boot
  OnUnitActiveSec=1h    # Repetir a cada 1 hora após ativação`}
          language="bash"
          title="formatos OnCalendar"
        />

        <h2>Comparação: Cron vs Systemd Timers</h2>
        <table>
          <thead><tr><th>Recurso</th><th>Cron</th><th>Systemd Timer</th></tr></thead>
          <tbody>
            <tr><td>Sintaxe</td><td>Simples (5 campos)</td><td>Mais verbosa (2 arquivos)</td></tr>
            <tr><td>Logs</td><td>Via syslog/mail</td><td><code>journalctl</code> integrado</td></tr>
            <tr><td>Persistent</td><td>Não</td><td>Sim (executa tarefas perdidas)</td></tr>
            <tr><td>Dependências</td><td>Não</td><td>Sim (After=, Requires=)</td></tr>
            <tr><td>Delay aleatório</td><td>Não</td><td>RandomizedDelaySec</td></tr>
            <tr><td>Gerenciamento</td><td><code>crontab -e</code></td><td><code>systemctl</code></td></tr>
            <tr><td>Recomendado para</td><td>Tarefas simples</td><td>Servidores e automação avançada</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Recomendação">
          No Fedora, prefira <strong>systemd timers</strong> para tarefas do sistema e projetos sérios.
          Use <strong>cron</strong> para tarefas pessoais rápidas onde a simplicidade importa mais.
        </AlertBox>
      </PageContainer>
    );
  }
  