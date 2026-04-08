import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Server, Play, Square, RefreshCw, Clock, Settings, Shield } from "lucide-react";

  export default function Servicos() {
    return (
      <PageContainer
        title="Systemd e Serviços"
        subtitle="Gerencie serviços, units, timers e o processo de inicialização do Fedora com o systemd — da inicialização ao monitoramento."
        difficulty="intermediario"
        timeToRead="40 min"
      >
        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Systemd?</h2>
        <p>
          O <strong>systemd</strong> é o sistema de inicialização (<em>init system</em>) do Fedora e da grande maioria das distros Linux modernas. Ele é responsável por inicializar o sistema, gerenciar serviços, montar sistemas de arquivos, gerenciar sessões de usuário e muito mais.
        </p>
        <p>No systemd, tudo é organizado em <strong>units</strong> — arquivos de configuração que descrevem o que deve ser executado, quando e como.</p>

        <h3>Tipos de Units</h3>
        <table>
          <thead><tr><th>Tipo</th><th>Extensão</th><th>Função</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Service</strong></td><td>.service</td><td>Define um serviço/daemon</td><td>nginx.service, sshd.service</td></tr>
            <tr><td><strong>Timer</strong></td><td>.timer</td><td>Agendamento (substitui cron)</td><td>dnf-automatic.timer</td></tr>
            <tr><td><strong>Socket</strong></td><td>.socket</td><td>Ativação por socket</td><td>cups.socket</td></tr>
            <tr><td><strong>Target</strong></td><td>.target</td><td>Agrupa units (equivale a runlevels)</td><td>multi-user.target, graphical.target</td></tr>
            <tr><td><strong>Mount</strong></td><td>.mount</td><td>Ponto de montagem</td><td>home.mount</td></tr>
            <tr><td><strong>Path</strong></td><td>.path</td><td>Monitoramento de caminhos</td><td>Dispara ação quando arquivo muda</td></tr>
            <tr><td><strong>Slice</strong></td><td>.slice</td><td>Controle de recursos (cgroups)</td><td>user.slice, system.slice</td></tr>
          </tbody>
        </table>

        <h2><Play className="inline-block mr-2 mb-1 w-5 h-5" /> systemctl — Gerenciando Serviços</h2>
        <CodeBlock
          code={`# Ver status detalhado de um serviço
  systemctl status nginx
  # ● nginx.service - A high performance web server
  #      Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled)
  #      Active: active (running) since Mon 2024-01-15 10:30:00 BRT
  #    Main PID: 1234 (nginx)
  #       Tasks: 3 (limit: 4915)
  #      Memory: 12.4M
  #         CPU: 45ms
  #      CGroup: /system.slice/nginx.service
  #              └─1234 nginx: master process

  # Iniciar, parar e reiniciar
  sudo systemctl start nginx
  sudo systemctl stop nginx
  sudo systemctl restart nginx

  # Recarregar configurações sem interromper
  sudo systemctl reload nginx

  # Habilitar para iniciar no boot
  sudo systemctl enable nginx

  # Habilitar e já iniciar
  sudo systemctl enable --now nginx

  # Desabilitar
  sudo systemctl disable nginx

  # Verificações rápidas
  systemctl is-enabled nginx    # enabled/disabled
  systemctl is-active nginx     # active/inactive
  systemctl is-failed nginx     # failed/active`}
          language="bash"
          title="gerenciamento de serviços"
        />

        <h2>Listando e Filtrando Units</h2>
        <CodeBlock
          code={`# Listar serviços em execução
  systemctl list-units --type=service --state=running

  # Listar todos os serviços (ativos e inativos)
  systemctl list-units --type=service --all

  # Listar serviços com falha
  systemctl --failed
  # UNIT            LOAD   ACTIVE SUB    DESCRIPTION
  # ● foo.service   loaded failed failed Foo Service

  # Listar units por tipo
  systemctl list-units --type=timer
  systemctl list-units --type=socket
  systemctl list-units --type=target

  # Listar unit files (inclui desabilitados)
  systemctl list-unit-files --type=service

  # Filtrar por estado
  systemctl list-unit-files --state=enabled
  systemctl list-unit-files --state=disabled

  # Buscar por nome
  systemctl list-units | grep -i network`}
          language="bash"
          title="listando units"
        />

        <h2>journalctl — Logs do Sistema</h2>
        <p>O <strong>journald</strong> é o sistema de logging do systemd. Ele coleta logs de todos os serviços, kernel e mensagens do sistema em um formato binário estruturado.</p>
        <CodeBlock
          code={`# Ver todos os logs
  journalctl

  # Logs de um serviço específico
  journalctl -u nginx
  journalctl -u sshd -f            # -f: seguir em tempo real

  # Logs desde o boot atual
  journalctl -b

  # Logs do boot anterior
  journalctl -b -1

  # Listar boots anteriores
  journalctl --list-boots

  # Logs por tempo
  journalctl --since "2 hours ago"
  journalctl --since "2024-01-01 10:00" --until "2024-01-01 12:00"
  journalctl --since today
  journalctl --since yesterday

  # Logs por prioridade (severidade)
  journalctl -p err           # error e acima
  journalctl -p warning       # warning e acima
  journalctl -p 0..3          # emerg(0), alert(1), crit(2), err(3)

  # Logs do kernel (equivalente a dmesg)
  journalctl -k
  journalctl -k -b            # kernel do boot atual

  # Saída formatada
  journalctl -u nginx -o json-pretty    # JSON formatado
  journalctl -u nginx -o short-precise  # timestamps precisos

  # Seguir em tempo real (como tail -f)
  journalctl -f
  journalctl -f -u nginx -u php-fpm    # múltiplos serviços`}
          language="bash"
          title="journalctl"
        />

        <h3>Gerenciando espaço de logs</h3>
        <CodeBlock
          code={`# Ver tamanho dos logs
  journalctl --disk-usage
  # Archived and active journals take up 2.3G on disk.

  # Limpar logs antigos (por tempo)
  sudo journalctl --vacuum-time=30d    # manter últimos 30 dias

  # Limpar logs por tamanho
  sudo journalctl --vacuum-size=500M   # manter até 500MB

  # Configuração permanente em /etc/systemd/journald.conf:
  # SystemMaxUse=500M
  # SystemMaxFileSize=100M
  # MaxRetentionSec=30day

  # Aplicar configuração
  sudo systemctl restart systemd-journald`}
          language="bash"
          title="gerenciamento de logs"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Criando Serviços Personalizados</h2>
        <p>Você pode criar seus próprios serviços para rodar aplicações, scripts de backup, monitoramento, etc.</p>

        <h3>Serviço simples (Type=simple)</h3>
        <CodeBlock
          code={`# Criar o arquivo de unit
  sudo nano /etc/systemd/system/meu-app.service

  # Conteúdo:
  [Unit]
  Description=Meu Aplicativo Web
  Documentation=https://github.com/meu/app
  After=network.target postgresql.service
  Wants=postgresql.service

  [Service]
  Type=simple
  User=appuser
  Group=appuser
  WorkingDirectory=/opt/meu-app
  Environment=NODE_ENV=production
  Environment=PORT=3000
  ExecStart=/usr/bin/node /opt/meu-app/server.js
  ExecReload=/bin/kill -HUP $MAINPID
  Restart=always
  RestartSec=5
  StandardOutput=journal
  StandardError=journal
  SyslogIdentifier=meu-app

  # Segurança (hardening)
  NoNewPrivileges=true
  ProtectSystem=strict
  ProtectHome=true
  ReadWritePaths=/opt/meu-app/data

  [Install]
  WantedBy=multi-user.target`}
          language="ini"
          title="meu-app.service"
        />

        <CodeBlock
          code={`# Recarregar o systemd para reconhecer o novo serviço
  sudo systemctl daemon-reload

  # Habilitar e iniciar
  sudo systemctl enable --now meu-app

  # Verificar status
  systemctl status meu-app

  # Ver logs
  journalctl -u meu-app -f

  # Após editar o arquivo .service:
  sudo systemctl daemon-reload
  sudo systemctl restart meu-app`}
          language="bash"
          title="ativar serviço"
        />

        <h3>Tipos de serviço</h3>
        <table>
          <thead><tr><th>Type</th><th>Comportamento</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td><strong>simple</strong></td><td>O processo principal é o ExecStart</td><td>Apps Node.js, Python, etc.</td></tr>
            <tr><td><strong>forking</strong></td><td>O processo faz fork (daemon clássico)</td><td>Nginx, Apache</td></tr>
            <tr><td><strong>oneshot</strong></td><td>Executa e termina (não fica rodando)</td><td>Scripts de backup, tarefas únicas</td></tr>
            <tr><td><strong>notify</strong></td><td>O processo notifica o systemd quando pronto</td><td>PostgreSQL, apps com sd_notify</td></tr>
          </tbody>
        </table>

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Systemd Timers</h2>
        <p>Timers substituem o cron no systemd. São mais poderosos: suportam dependências, logging integrado e execução precisa.</p>

        <h3>Timer vs Cron</h3>
        <table>
          <thead><tr><th>Aspecto</th><th>Systemd Timer</th><th>Cron</th></tr></thead>
          <tbody>
            <tr><td>Logging</td><td>Integrado (journalctl)</td><td>Manual (redirecionamento)</td></tr>
            <tr><td>Dependências</td><td>Sim (After=, Requires=)</td><td>Não</td></tr>
            <tr><td>Execução perdida</td><td>Persistent=true (executa ao ligar)</td><td>Perdida se máquina estava desligada</td></tr>
            <tr><td>Granularidade</td><td>Microssegundos</td><td>Minutos</td></tr>
            <tr><td>Gerenciamento</td><td>systemctl</td><td>crontab -e</td></tr>
          </tbody>
        </table>

        <h3>Criando um timer de backup</h3>
        <CodeBlock
          code={`# 1. Criar o serviço (o que executar)
  sudo nano /etc/systemd/system/backup.service

  [Unit]
  Description=Backup diário do sistema

  [Service]
  Type=oneshot
  ExecStart=/usr/local/bin/backup.sh
  User=root
  StandardOutput=journal
  StandardError=journal

  # 2. Criar o timer (quando executar)
  sudo nano /etc/systemd/system/backup.timer

  [Unit]
  Description=Executar backup diariamente às 3h

  [Timer]
  OnCalendar=*-*-* 03:00:00
  Persistent=true
  RandomizedDelaySec=1800

  [Install]
  WantedBy=timers.target

  # 3. Habilitar o timer
  sudo systemctl daemon-reload
  sudo systemctl enable --now backup.timer

  # Verificar timers ativos
  systemctl list-timers
  # NEXT                         LEFT          LAST                         PASSED   UNIT
  # Tue 2024-01-16 03:00:00 BRT  14h left      Mon 2024-01-15 03:00:00 BRT  10h ago  backup.timer`}
          language="bash"
          title="timer de backup"
        />

        <h3>Formatos de OnCalendar</h3>
        <CodeBlock
          code={`# Diário às 3h
  OnCalendar=*-*-* 03:00:00

  # A cada hora
  OnCalendar=hourly

  # A cada 15 minutos
  OnCalendar=*:0/15

  # Toda segunda às 9h
  OnCalendar=Mon *-*-* 09:00:00

  # Primeiro dia do mês
  OnCalendar=*-*-01 00:00:00

  # Verificar expressão de calendário
  systemd-analyze calendar "Mon *-*-* 09:00:00"
  # Original form: Mon *-*-* 09:00:00
  # Next elapse: Mon 2024-01-22 09:00:00 BRT`}
          language="bash"
          title="formatos de calendário"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Targets (Runlevels)</h2>
        <p>Targets são equivalentes modernos dos runlevels do SysV init:</p>
        <table>
          <thead><tr><th>Target</th><th>Runlevel Antigo</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>poweroff.target</code></td><td>0</td><td>Desligar</td></tr>
            <tr><td><code>rescue.target</code></td><td>1</td><td>Modo de resgate (single user)</td></tr>
            <tr><td><code>multi-user.target</code></td><td>3</td><td>Multi-usuário sem GUI</td></tr>
            <tr><td><code>graphical.target</code></td><td>5</td><td>Multi-usuário com GUI (padrão)</td></tr>
            <tr><td><code>reboot.target</code></td><td>6</td><td>Reiniciar</td></tr>
            <tr><td><code>emergency.target</code></td><td>—</td><td>Shell de emergência mínimo</td></tr>
          </tbody>
        </table>
        <CodeBlock
          code={`# Ver target padrão
  systemctl get-default
  # graphical.target

  # Mudar para modo texto (servidor sem GUI)
  sudo systemctl set-default multi-user.target

  # Voltar para modo gráfico
  sudo systemctl set-default graphical.target

  # Alternar temporariamente
  sudo systemctl isolate multi-user.target    # desliga GUI
  sudo systemctl isolate graphical.target     # inicia GUI`}
          language="bash"
          title="targets"
        />

        <h2>Análise de Boot</h2>
        <CodeBlock
          code={`# Ver tempo total de boot
  systemd-analyze
  # Startup finished in 3.5s (firmware) + 1.2s (loader) + 2.1s (kernel) + 5.3s (userspace) = 12.1s

  # Ver serviços mais lentos
  systemd-analyze blame
  # 3.201s NetworkManager-wait-online.service
  # 1.530s dnf-makecache.service
  # 0.892s firewalld.service

  # Gerar gráfico SVG do boot
  systemd-analyze plot > boot.svg

  # Ver cadeia crítica (caminho mais lento)
  systemd-analyze critical-chain`}
          language="bash"
          title="análise de boot"
        />

        <AlertBox type="info" title="systemd vs SysV">
          O systemd inicia serviços em paralelo (muito mais rápido que o SysV sequencial), usa cgroups para isolamento de processos, oferece logging integrado via journald e suporta ativação por socket (serviços iniciam sob demanda). O Fedora foi uma das primeiras distros a adotá-lo.
        </AlertBox>
      </PageContainer>
    );
  }
  