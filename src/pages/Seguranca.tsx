import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { ShieldCheck, Lock, Eye, UserX } from "lucide-react";

export default function Seguranca() {
  return (
    <PageContainer
      title="Segurança no Fedora"
      subtitle="Boas práticas, hardening do sistema, auditoria, fail2ban, SELinux e como proteger seu Fedora Linux."
      difficulty="avancado"
      timeToRead="40 min"
    >
      <h2><ShieldCheck className="inline-block mr-2 mb-1 w-5 h-5" /> Por onde Começar</h2>
      <p>
        O Fedora já vem com um dos melhores conjuntos de segurança entre as distros Linux — SELinux ativo por padrão, firewalld configurado e atualizações frequentes. O objetivo aqui é entender e fortalecer ainda mais essas camadas.
      </p>
      <AlertBox type="info" title="Princípio do menor privilégio">
        Nunca use o usuário root para o dia a dia. Use <code>sudo</code> apenas quando necessário. Um invasor que comprometer seu usuário comum ainda não terá acesso de root.
      </AlertBox>

      <h2>Atualizações de Segurança</h2>
      <CodeBlock
        code={`# Instalar apenas atualizações de segurança
sudo dnf update --security

# Ver quais pacotes têm atualizações de segurança pendentes
sudo dnf updateinfo list security

# Ver detalhes sobre vulnerabilidades (CVEs)
sudo dnf updateinfo list security --verbose

# Habilitar atualização automática (recomendado para servidores)
sudo dnf install dnf-automatic

# Configurar para aplicar só atualizações de segurança automaticamente
sudo nano /etc/dnf/automatic.conf
# [commands]
# upgrade_type = security
# apply_updates = yes

# Habilitar o timer
sudo systemctl enable --now dnf-automatic.timer
sudo systemctl status dnf-automatic.timer`}
        language="bash"
        title="atualizações de segurança"
      />

      <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux — Security-Enhanced Linux</h2>
      <p>
        O <strong>SELinux</strong> é a característica de segurança mais importante do Fedora. Ele controla o que cada processo pode acessar — mesmo que um serviço seja comprometido, o SELinux limita os danos.
      </p>
      <CodeBlock
        code={`# Ver o status atual do SELinux
sestatus
# SELinux status: enabled
# SELinuxfs mount: /sys/fs/selinux
# SELinux mount point: /sys/fs/selinux
# Loaded policy name: targeted
# Current mode: enforcing   ← NUNCA mude para disabled
# Mode from config file: enforcing
# Policy MLS status: enabled
# Policy deny_unknown status: allowed
# Memory protection checking: actual (secure)
# Max kernel policy version: 33

# Ver o modo atual de forma simples
getenforce
# Enforcing   ← protegendo ativamente
# Permissive  ← apenas log, não bloqueia
# Disabled    ← totalmente desativado (evite!)

# Mudar para modo permissive temporariamente (para debug)
sudo setenforce 0    # permissive
sudo setenforce 1    # enforcing (volta ao normal)

# Verificar se um serviço está sendo bloqueado pelo SELinux
sudo journalctl -b | grep "avc: denied"
sudo ausearch -m avc -ts recent`}
        language="bash"
        title="SELinux básico"
      />
      <CodeBlock
        code={`# Ver contexto SELinux de arquivos
ls -Z /var/www/html/
# -rw-r--r--. root root unconfined_u:object_r:httpd_sys_content_t:s0 index.html

# Ver contexto de processos
ps -eZ | grep httpd

# Corrigir contexto de arquivo após movimentação
# (quando você move um arquivo de lugar, o contexto pode ficar errado)
sudo restorecon -v /var/www/html/arquivo.html

# Restaurar contexto de um diretório inteiro
sudo restorecon -Rv /var/www/html/

# Verificar e corrigir contextos do sistema todo
sudo touch /.autorelabel && sudo reboot   # relabela tudo no próximo boot

# Definir contexto permanente para um caminho
sudo semanage fcontext -a -t httpd_sys_content_t "/meu-site(/.*)?"
sudo restorecon -Rv /meu-site/`}
        language="bash"
        title="SELinux contextos"
      />
      <CodeBlock
        code={`# Ver e gerenciar booleanos do SELinux
# (booleans são switches que habilitam/desabilitam comportamentos)

# Listar todos os booleanos
getsebool -a | grep httpd

# Ver booleano específico
getsebool httpd_can_network_connect

# Habilitar um booleano temporariamente (reset no reboot)
sudo setsebool httpd_can_network_connect on

# Habilitar permanentemente (-P)
sudo setsebool -P httpd_can_network_connect on

# Exemplos comuns:
sudo setsebool -P httpd_can_network_connect_db on  # Apache conectar ao DB
sudo setsebool -P httpd_use_nfs on                  # Apache usar NFS
sudo setsebool -P allow_user_exec_content on        # Usuários executar conteúdo`}
        language="bash"
        title="SELinux booleanos"
      />

      <h2>Firewall com firewalld</h2>
      <CodeBlock
        code={`# Ver status do firewall
sudo firewall-cmd --state
sudo firewall-cmd --list-all

# Ver todas as zonas
sudo firewall-cmd --get-zones
sudo firewall-cmd --get-default-zone

# Ver o que está aberto na zona padrão (public)
sudo firewall-cmd --list-all --zone=public

# Abrir uma porta
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# Abrir um serviço (mais legível que porta)
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload

# Fechar uma porta/serviço
sudo firewall-cmd --permanent --remove-port=8080/tcp
sudo firewall-cmd --permanent --remove-service=telnet
sudo firewall-cmd --reload

# Listar serviços disponíveis
sudo firewall-cmd --get-services

# Bloquear um IP específico
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="1.2.3.4" reject'
sudo firewall-cmd --reload

# Ver regras ricas
sudo firewall-cmd --list-rich-rules`}
        language="bash"
        title="firewalld"
      />

      <h2><UserX className="inline-block mr-2 mb-1 w-5 h-5" /> fail2ban — Bloqueio de Ataques de Força Bruta</h2>
      <CodeBlock
        code={`# Instalar o fail2ban
sudo dnf install fail2ban

# Habilitar e iniciar
sudo systemctl enable --now fail2ban

# Criar configuração local (não edite o .conf original)
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Configurações importantes no jail.local:
[DEFAULT]
bantime  = 3600       # Tempo de banimento (segundos)
findtime = 600        # Janela de tempo para contar falhas
maxretry = 5          # Número de falhas antes de banir

[sshd]
enabled = true
port    = ssh
logpath = /var/log/secure    # Fedora usa /var/log/secure (não auth.log)
maxretry = 3

# Reiniciar após configurar
sudo systemctl restart fail2ban

# Ver status de todas as jails
sudo fail2ban-client status

# Ver status do SSH jail
sudo fail2ban-client status sshd

# Desbanir um IP manualmente
sudo fail2ban-client set sshd unbanip 1.2.3.4

# Ver IPs banidos
sudo fail2ban-client get sshd banned`}
        language="bash"
        title="fail2ban"
      />

      <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> Auditoria e Monitoramento</h2>
      <CodeBlock
        code={`# auditd — sistema de auditoria do kernel Linux

# Instalar e habilitar
sudo dnf install audit
sudo systemctl enable --now auditd

# Ver logs de auditoria
sudo ausearch -ts recent          # Eventos recentes
sudo ausearch -m avc              # Negações do SELinux
sudo ausearch -x /bin/su          # Usos do comando su

# Relatório de auditoria resumido
sudo aureport --summary
sudo aureport --auth              # Tentativas de autenticação
sudo aureport --failed            # Eventos com falha

# Listar logins recentes
last
lastb                             # Tentativas falhas de login

# Ver quem está logado agora
who
w

# Ver últimos logins de cada usuário
lastlog

# Monitorar um arquivo em tempo real (quem acessa)
sudo auditctl -w /etc/passwd -p rwxa -k passwd_changes

# Ver eventos relacionados à regra
sudo ausearch -k passwd_changes`}
        language="bash"
        title="auditoria"
      />

      <h2>Senhas e Autenticação</h2>
      <CodeBlock
        code={`# Ver política de senha atual
sudo authselect current

# Configurar complexidade de senha (PAM)
sudo nano /etc/security/pwquality.conf

# Parâmetros importantes:
# minlen = 12         ← comprimento mínimo
# minclass = 3        ← tipos de caracteres (letras, números, símbolos)
# maxrepeat = 3       ← máximo de caracteres repetidos
# gecoscheck = 1      ← não usar nome do usuário na senha

# Forçar troca de senha no próximo login
sudo chage -d 0 usuario

# Definir expiração de senha (a cada 90 dias)
sudo chage -M 90 usuario

# Ver configurações de expiração de um usuário
sudo chage -l usuario

# Bloquear conta de um usuário
sudo passwd -l usuario

# Desbloquear
sudo passwd -u usuario`}
        language="bash"
        title="política de senhas"
      />

      <h2>Verificação de Integridade do Sistema</h2>
      <CodeBlock
        code={`# rpm --verify — verificar integridade dos arquivos instalados
# (Fedora usa RPM, que tem verificação de hash integrada)

# Verificar um pacote específico
sudo rpm -V openssh

# Verificar todos os pacotes do sistema (demora!)
sudo rpm -Va

# Saída: cada letra indica um tipo de alteração
# S = tamanho diferente
# M = permissões diferentes
# 5 = hash MD5 diferente
# T = timestamp diferente
# . = OK (sem alteração)

# AIDE — Advanced Intrusion Detection Environment
sudo dnf install aide

# Inicializar banco de dados de referência
sudo aide --init
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz

# Verificar o sistema contra o banco de dados
sudo aide --check

# Atualizar banco após mudanças legítimas
sudo aide --update
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz`}
        language="bash"
        title="integridade do sistema"
      />

      <h2>Comandos de Segurança Rápida</h2>
      <CodeBlock
        code={`# Ver todas as portas abertas
sudo ss -tulpn

# Ver conexões estabelecidas
sudo ss -tnp

# Checar processos rodando como root
ps aux | awk '$1=="root" {print $0}'

# Listar arquivos SUID (perigosos se mal configurados)
sudo find / -perm -4000 -type f 2>/dev/null

# Listar arquivos SGID
sudo find / -perm -2000 -type f 2>/dev/null

# Verificar arquivos world-writable (escrita pública)
sudo find /etc -perm -002 -type f 2>/dev/null

# Ver se há usuários com UID 0 (além do root)
awk -F: '$3==0 {print $1}' /etc/passwd

# Verificar contas sem senha
sudo awk -F: '($2 == "" || $2 == "!") {print $1}' /etc/shadow

# Verificar atualizações de segurança pendentes
sudo dnf updateinfo list security`}
        language="bash"
        title="checklist de segurança"
      />

      <AlertBox type="warning" title="Nunca desative o SELinux">
        A maioria dos problemas com SELinux tem solução sem precisar desativá-lo. Use <code>sealert</code> ou <code>ausearch -m avc</code> para diagnosticar, e corrija o contexto ou ajuste um booleano. Desativar o SELinux remove uma das proteções mais eficazes do Fedora.
      </AlertBox>
    </PageContainer>
  );
}
