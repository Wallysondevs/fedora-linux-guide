import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Shield, Settings, FileText, Eye, Lock, AlertTriangle } from "lucide-react";

  export default function Fail2Ban() {
    return (
      <PageContainer
        title="Fail2Ban — Proteção contra Ataques"
        subtitle="Proteja seu servidor Fedora contra ataques de força bruta: configure jails para SSH, Nginx, MariaDB e monitore tentativas bloqueadas."
        difficulty="avancado"
        timeToRead="30 min"
      >
        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Fail2Ban?</h2>
        <p>
          O <strong>Fail2Ban</strong> monitora logs do sistema e bloqueia automaticamente IPs que fazem
          muitas tentativas falhas de login. Ele é essencial para qualquer servidor exposto à internet,
          protegendo contra ataques de força bruta em SSH, servidores web, bancos de dados e outros serviços.
        </p>
        <p>
          Funciona assim: o Fail2Ban lê os logs, detecta padrões de falha (ex: senha errada), e
          cria regras de firewall temporárias para bloquear o IP atacante.
        </p>

        <h2>Instalação e Configuração</h2>
        <CodeBlock
          code={`# Instalar Fail2Ban
  sudo dnf install fail2ban

  # Iniciar e habilitar no boot
  sudo systemctl enable --now fail2ban

  # Verificar status
  sudo systemctl status fail2ban

  # IMPORTANTE: Nunca edite /etc/fail2ban/jail.conf diretamente!
  # Crie um arquivo local que sobrescreve as configurações:
  sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
  sudo vim /etc/fail2ban/jail.local`}
          language="bash"
          title="instalação"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração Básica</h2>
        <CodeBlock
          code={`# /etc/fail2ban/jail.local — Configuração principal

  [DEFAULT]
  # Tempo de banimento (10 minutos)
  bantime = 10m

  # Janela de tempo para contar falhas
  findtime = 10m

  # Número de falhas antes de banir
  maxretry = 5

  # Ação padrão: bloquear via firewalld (padrão do Fedora)
  banaction = firewallcmd-ipset

  # Email para notificações (opcional)
  # destemail = admin@meuservidor.com
  # action = %(action_mwl)s

  # IPs que NUNCA serão banidos (whitelist)
  ignoreip = 127.0.0.1/8 ::1 192.168.1.0/24`}
          language="ini"
          title="configuração padrão"
        />

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Jails — Proteção por Serviço</h2>
        <CodeBlock
          code={`# /etc/fail2ban/jail.local — Adicionar jails

  # Proteger SSH (o mais importante!)
  [sshd]
  enabled = true
  port = ssh
  logpath = /var/log/secure
  maxretry = 3
  bantime = 1h

  # Proteger Nginx
  [nginx-http-auth]
  enabled = true
  port = http,https
  logpath = /var/log/nginx/error.log
  maxretry = 5

  [nginx-botsearch]
  enabled = true
  port = http,https
  logpath = /var/log/nginx/access.log
  maxretry = 2
  bantime = 1d

  # Proteger MariaDB/MySQL
  [mysqld-auth]
  enabled = true
  port = 3306
  logpath = /var/log/mariadb/error.log
  maxretry = 5

  # Proteger PostgreSQL
  [postgresql]
  enabled = true
  port = 5432
  logpath = /var/lib/pgsql/data/log/postgresql-*.log
  maxretry = 5

  # Aplicar mudanças
  sudo systemctl restart fail2ban`}
          language="ini"
          title="jails"
        />

        <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> Monitoramento</h2>
        <CodeBlock
          code={`# Ver status geral
  sudo fail2ban-client status

  # Ver status de uma jail específica
  sudo fail2ban-client status sshd
  # Status for the jail: sshd
  # |- Filter
  # |  |- Currently failed: 2
  # |  |- Total failed: 47
  # |  `- File list: /var/log/secure
  # `- Actions
  #    |- Currently banned: 3
  #    |- Total banned: 15
  #    `- Banned IP list: 45.33.xx.xx 103.xx.xx.xx 185.xx.xx.xx

  # Ver IPs banidos
  sudo fail2ban-client get sshd banip

  # Desbanir um IP
  sudo fail2ban-client set sshd unbanip 192.168.1.100

  # Banir manualmente
  sudo fail2ban-client set sshd banip 45.33.xx.xx

  # Ver log do Fail2Ban
  sudo journalctl -u fail2ban
  sudo tail -f /var/log/fail2ban.log`}
          language="bash"
          title="monitoramento"
        />

        <h2>Banimento Progressivo</h2>
        <CodeBlock
          code={`# /etc/fail2ban/jail.local
  # Banir por mais tempo a cada reincidência

  [recidive]
  enabled = true
  logpath = /var/log/fail2ban.log
  banaction = firewallcmd-ipset
  bantime = 1w
  findtime = 1d
  maxretry = 3
  # Se o mesmo IP for banido 3 vezes em 1 dia,
  # banir por 1 semana inteira!`}
          language="ini"
          title="banimento progressivo"
        />

        <h2>Referência</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>fail2ban-client status</code></td><td>Status geral</td></tr>
            <tr><td><code>fail2ban-client status sshd</code></td><td>Status do jail SSH</td></tr>
            <tr><td><code>fail2ban-client set sshd unbanip IP</code></td><td>Desbanir IP</td></tr>
            <tr><td><code>fail2ban-client set sshd banip IP</code></td><td>Banir IP manualmente</td></tr>
            <tr><td><code>fail2ban-client reload</code></td><td>Recarregar configuração</td></tr>
            <tr><td><code>fail2ban-regex</code></td><td>Testar regex de filtro</td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="Cuidado com auto-banimento!">
          Sempre adicione seu IP ao <code>ignoreip</code> para não se bloquear acidentalmente.
          Se você se trancar, reinicie via console físico ou IPMI: <code>sudo systemctl stop fail2ban</code>
        </AlertBox>
      </PageContainer>
    );
  }
  