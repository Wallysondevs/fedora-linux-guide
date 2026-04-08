import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Shield, Lock, Eye, Settings, AlertTriangle, Server } from "lucide-react";

  export default function Firewall() {
    return (
      <PageContainer
        title="Firewall e SELinux"
        subtitle="Proteja seu sistema Fedora com firewalld e SELinux — duas camadas de segurança que trabalham juntas."
        difficulty="intermediario"
        timeToRead="40 min"
      >
        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> firewalld — Firewall do Fedora</h2>
        <p>
          O <strong>firewalld</strong> é o firewall padrão do Fedora. Ele gerencia regras de filtragem de pacotes usando o conceito de <strong>zonas</strong> — cada zona define um nível de confiança para uma conexão de rede.
        </p>
        <p>
          O firewalld usa <strong>nftables</strong> como backend (substituto do iptables) e suporta regras dinâmicas — você pode alterar regras sem reiniciar o serviço.
        </p>

        <h3>Conceito de Zonas</h3>
        <table>
          <thead><tr><th>Zona</th><th>Nível de Confiança</th><th>Uso Típico</th></tr></thead>
          <tbody>
            <tr><td><strong>drop</strong></td><td>Nenhum</td><td>Descarta tudo sem resposta</td></tr>
            <tr><td><strong>block</strong></td><td>Nenhum</td><td>Rejeita tudo com mensagem ICMP</td></tr>
            <tr><td><strong>public</strong></td><td>Baixo</td><td>Redes públicas (padrão no Fedora)</td></tr>
            <tr><td><strong>external</strong></td><td>Baixo</td><td>Roteadores/NAT</td></tr>
            <tr><td><strong>dmz</strong></td><td>Baixo</td><td>Servidores expostos externamente</td></tr>
            <tr><td><strong>work</strong></td><td>Médio</td><td>Rede do trabalho</td></tr>
            <tr><td><strong>home</strong></td><td>Médio-alto</td><td>Rede doméstica</td></tr>
            <tr><td><strong>internal</strong></td><td>Alto</td><td>Rede interna confiável</td></tr>
            <tr><td><strong>trusted</strong></td><td>Total</td><td>Permite todo o tráfego</td></tr>
          </tbody>
        </table>

        <h2>firewall-cmd — Gerenciamento</h2>

        <h3>Status e informações</h3>
        <CodeBlock
          code={`# Verificar se o firewall está ativo
  sudo firewall-cmd --state
  # Saída: running

  # Ver zona padrão
  firewall-cmd --get-default-zone
  # Saída: FedoraWorkstation (ou public)

  # Listar zonas ativas e suas interfaces
  firewall-cmd --get-active-zones
  # FedoraWorkstation
  #   interfaces: wlp2s0 enp0s3

  # Listar todas as regras da zona ativa
  sudo firewall-cmd --list-all
  # public (active)
  #   target: default
  #   services: dhcpv6-client ssh
  #   ports:
  #   ...

  # Listar regras de uma zona específica
  sudo firewall-cmd --zone=home --list-all

  # Listar todos os serviços disponíveis
  firewall-cmd --get-services`}
          language="bash"
          title="status do firewall"
        />

        <h3>Gerenciando serviços</h3>
        <CodeBlock
          code={`# Permitir um serviço (temporário — até reiniciar)
  sudo firewall-cmd --add-service=http
  sudo firewall-cmd --add-service=https

  # Permitir permanentemente
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https

  # Aplicar regras permanentes (recarregar)
  sudo firewall-cmd --reload

  # Remover um serviço
  sudo firewall-cmd --permanent --remove-service=http

  # Serviços comuns
  # http (80), https (443), ssh (22), dns (53),
  # ftp (21), smtp (25), nfs (2049), samba (samba)

  # Listar serviços permitidos
  firewall-cmd --list-services`}
          language="bash"
          title="gerenciando serviços"
        />

        <h3>Gerenciando portas</h3>
        <CodeBlock
          code={`# Abrir uma porta específica
  sudo firewall-cmd --permanent --add-port=8080/tcp
  sudo firewall-cmd --permanent --add-port=3000/tcp
  sudo firewall-cmd --permanent --add-port=53/udp

  # Abrir faixa de portas
  sudo firewall-cmd --permanent --add-port=5000-5100/tcp

  # Remover porta
  sudo firewall-cmd --permanent --remove-port=8080/tcp

  # Sempre recarregar após mudanças permanentes
  sudo firewall-cmd --reload

  # Verificar portas abertas
  firewall-cmd --list-ports`}
          language="bash"
          title="gerenciando portas"
        />

        <h3>Rich Rules (regras avançadas)</h3>
        <CodeBlock
          code={`# Permitir acesso SSH apenas de um IP específico
  sudo firewall-cmd --permanent --add-rich-rule='
    rule family="ipv4"
    source address="192.168.1.100"
    service name="ssh"
    accept'

  # Bloquear um IP específico
  sudo firewall-cmd --permanent --add-rich-rule='
    rule family="ipv4"
    source address="10.0.0.50"
    drop'

  # Permitir porta apenas de uma sub-rede
  sudo firewall-cmd --permanent --add-rich-rule='
    rule family="ipv4"
    source address="192.168.1.0/24"
    port port="3306" protocol="tcp"
    accept'

  # Limitar taxa de conexões (rate limiting)
  sudo firewall-cmd --permanent --add-rich-rule='
    rule family="ipv4"
    service name="ssh"
    limit value="3/m"
    accept'

  # Listar rich rules
  firewall-cmd --list-rich-rules

  # Remover uma rich rule
  sudo firewall-cmd --permanent --remove-rich-rule='...'

  sudo firewall-cmd --reload`}
          language="bash"
          title="rich rules"
        />

        <h3>Port forwarding (redirecionamento)</h3>
        <CodeBlock
          code={`# Redirecionar porta 80 para 8080
  sudo firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=8080

  # Redirecionar para outro IP (NAT)
  sudo firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=80:toaddr=192.168.1.10

  # Habilitar masquerade (NAT)
  sudo firewall-cmd --permanent --add-masquerade

  sudo firewall-cmd --reload`}
          language="bash"
          title="port forwarding"
        />

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux — Security Enhanced Linux</h2>
        <p>
          O <strong>SELinux</strong> é um sistema de controle de acesso obrigatório (MAC — Mandatory Access Control) integrado ao kernel do Linux. Ele adiciona uma camada extra de segurança além das permissões tradicionais Unix.
        </p>
        <p>
          No modelo tradicional, se um processo roda como root, ele tem acesso a tudo. Com SELinux, mesmo processos root são restritos por <strong>políticas de segurança</strong> — um servidor web só pode acessar arquivos da web, por exemplo.
        </p>

        <h3>Modos do SELinux</h3>
        <table>
          <thead><tr><th>Modo</th><th>Comportamento</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td><strong>Enforcing</strong></td><td>Aplica e registra violações</td><td>Produção (padrão do Fedora)</td></tr>
            <tr><td><strong>Permissive</strong></td><td>Apenas registra, não bloqueia</td><td>Depuração e troubleshooting</td></tr>
            <tr><td><strong>Disabled</strong></td><td>Desativado completamente</td><td>Não recomendado</td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="Nunca desabilite o SELinux permanentemente">
          Desabilitar o SELinux remove uma camada crítica de segurança. Se algo não funciona com SELinux, use o modo <strong>Permissive</strong> para diagnosticar e corrija a política — não desabilite.
        </AlertBox>

        <h3>Comandos básicos</h3>
        <CodeBlock
          code={`# Ver status do SELinux
  getenforce
  # Saída: Enforcing

  # Informações detalhadas
  sestatus
  # SELinux status:                 enabled
  # SELinuxfs mount:                /sys/fs/selinux
  # Current mode:                   enforcing
  # Mode from config file:          enforcing
  # Policy MLS status:              enabled
  # Policy deny_unknown status:     allowed

  # Mudar para Permissive temporariamente (até reiniciar)
  sudo setenforce 0

  # Voltar para Enforcing
  sudo setenforce 1

  # Mudar permanentemente (editar arquivo)
  sudo nano /etc/selinux/config
  # SELINUX=enforcing
  # SELINUX=permissive`}
          language="bash"
          title="selinux básico"
        />

        <h3><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> Contextos de Segurança</h3>
        <p>No SELinux, cada arquivo, processo e porta tem um <strong>contexto de segurança</strong> (label) no formato: <code>user:role:type:level</code>. O componente mais importante é o <strong>type</strong>.</p>
        <CodeBlock
          code={`# Ver contexto de arquivos
  ls -Z /var/www/html/
  # system_u:object_r:httpd_sys_content_t:s0 index.html
  #                   ^^^^^^^^^^^^^^^^^^
  #                   tipo = httpd_sys_content_t

  # Ver contexto de processos
  ps auxZ | grep httpd
  # system_u:system_r:httpd_t:s0 ... /usr/sbin/httpd
  #                   ^^^^^^^
  #                   tipo = httpd_t

  # O httpd (tipo httpd_t) só pode acessar arquivos do tipo httpd_sys_content_t
  # Se tentar acessar outros tipos → BLOQUEADO pelo SELinux`}
          language="bash"
          title="contextos selinux"
        />

        <h3>Resolvendo problemas com SELinux</h3>
        <CodeBlock
          code={`# Ver erros do SELinux (AVCs)
  sudo ausearch -m avc -ts today
  sudo journalctl -t setroubleshoot --since today

  # Usar sealert para diagnóstico legível
  sudo dnf install setroubleshoot-server
  sudo sealert -a /var/log/audit/audit.log

  # Ver sugestões de correção
  sudo audit2why < /var/log/audit/audit.log

  # Exemplo: Nginx não acessa /srv/site/
  # Problema: arquivo tem contexto errado

  # Corrigir contexto de um arquivo/diretório
  sudo semanage fcontext -a -t httpd_sys_content_t "/srv/site(/.*)?"
  sudo restorecon -Rv /srv/site/

  # Restaurar contexto padrão de um diretório
  sudo restorecon -Rv /var/www/html/

  # Verificar se o contexto está correto
  ls -Z /srv/site/`}
          language="bash"
          title="troubleshooting selinux"
        />

        <h3>SELinux Booleans</h3>
        <p>Booleans são interruptores que controlam comportamentos específicos de políticas SELinux:</p>
        <CodeBlock
          code={`# Listar todos os booleans
  getsebool -a
  getsebool -a | grep httpd

  # Booleans úteis para servidores web:
  # httpd_can_network_connect — permite conexões de rede (ex: proxy reverso)
  # httpd_enable_homedirs — permite servir diretórios home
  # httpd_can_sendmail — permite envio de emails

  # Ativar um boolean
  sudo setsebool -P httpd_can_network_connect on
  # -P = persistente (sobrevive reinicialização)

  # Desativar
  sudo setsebool -P httpd_can_network_connect off

  # Exemplo: Nginx como proxy reverso
  # Sem o boolean, Nginx não consegue fazer requests HTTP para backends
  sudo setsebool -P httpd_can_network_connect on`}
          language="bash"
          title="selinux booleans"
        />

        <h3>Portas SELinux</h3>
        <CodeBlock
          code={`# Ver portas permitidas para HTTP
  sudo semanage port -l | grep http
  # http_port_t    tcp  80, 81, 443, 488, 8008, 8009, 8443, 9000

  # Adicionar porta personalizada para HTTP
  sudo semanage port -a -t http_port_t -p tcp 3000

  # Se a porta já está atribuída a outro tipo, use -m para modificar
  sudo semanage port -m -t http_port_t -p tcp 8081

  # Remover porta customizada
  sudo semanage port -d -t http_port_t -p tcp 3000`}
          language="bash"
          title="portas selinux"
        />

        <h2>Troubleshooting Completo</h2>
        <table>
          <thead><tr><th>Problema</th><th>Diagnóstico</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>App não abre porta</td><td><code>sudo firewall-cmd --list-ports</code></td><td>Adicione a porta: <code>--add-port=XXXX/tcp</code></td></tr>
            <tr><td>Nginx 403 Forbidden</td><td><code>ls -Z</code> e <code>ausearch -m avc</code></td><td>Corrija o contexto SELinux com <code>restorecon</code> ou <code>semanage fcontext</code></td></tr>
            <tr><td>SSH recusado de fora</td><td><code>firewall-cmd --list-services</code></td><td>Adicione ssh: <code>--add-service=ssh --permanent</code></td></tr>
            <tr><td>Servidor web não faz proxy</td><td><code>getsebool httpd_can_network_connect</code></td><td><code>setsebool -P httpd_can_network_connect on</code></td></tr>
            <tr><td>App em porta não-padrão</td><td><code>semanage port -l</code></td><td>Registre a porta: <code>semanage port -a -t http_port_t -p tcp XXXX</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Segurança em camadas">
          O Fedora combina firewalld (proteção de rede) + SELinux (proteção de processos) + permissões Unix (proteção de arquivos). Juntas, essas três camadas tornam o Fedora uma das distros Linux mais seguras por padrão.
        </AlertBox>
      </PageContainer>
    );
  }
  