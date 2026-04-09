import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Server, Shield, Settings, Globe, Lock, FileText } from "lucide-react";

  export default function Nginx() {
    return (
      <PageContainer
        title="Nginx — Servidor Web"
        subtitle="Instale e configure o Nginx no Fedora: virtual hosts, proxy reverso, SSL/TLS com Let's Encrypt e otimizações de performance."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Nginx?</h2>
        <p>
          O <strong>Nginx</strong> (pronuncia-se "Engine X") é um dos servidores web mais populares do mundo.
          Ele pode servir páginas estáticas, funcionar como <strong>proxy reverso</strong> (encaminhar
          requisições para aplicações backend), balancear carga entre servidores e servir como
          terminação SSL/TLS.
        </p>
        <p>
          No Fedora, o Nginx é instalado via DNF e gerenciado pelo systemd. A configuração fica
          em <code>/etc/nginx/</code>.
        </p>

        <h2>Instalação e Configuração Básica</h2>
        <CodeBlock
          code={`# Instalar o Nginx
  sudo dnf install nginx

  # Iniciar e habilitar no boot
  sudo systemctl enable --now nginx

  # Verificar status
  sudo systemctl status nginx
  # ● nginx.service - The nginx HTTP and reverse proxy server
  #    Active: active (running)

  # Testar a configuração (antes de reiniciar)
  sudo nginx -t
  # nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
  # nginx: configuration file /etc/nginx/nginx.conf test is successful

  # Recarregar configuração sem parar o serviço
  sudo systemctl reload nginx

  # Abrir portas no firewall
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https
  sudo firewall-cmd --reload

  # Testar — acesse http://localhost no navegador`}
          language="bash"
          title="instalação"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura de Configuração</h2>
        <table>
          <thead><tr><th>Arquivo/Diretório</th><th>Função</th></tr></thead>
          <tbody>
            <tr><td><code>/etc/nginx/nginx.conf</code></td><td>Configuração principal</td></tr>
            <tr><td><code>/etc/nginx/conf.d/</code></td><td>Configurações de virtual hosts (*.conf)</td></tr>
            <tr><td><code>/usr/share/nginx/html/</code></td><td>Diretório padrão dos arquivos do site</td></tr>
            <tr><td><code>/var/log/nginx/access.log</code></td><td>Log de acessos</td></tr>
            <tr><td><code>/var/log/nginx/error.log</code></td><td>Log de erros</td></tr>
          </tbody>
        </table>

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Virtual Hosts (Server Blocks)</h2>
        <p>
          Cada site/domínio é configurado como um "server block". Crie arquivos <code>.conf</code> em <code>/etc/nginx/conf.d/</code>:
        </p>
        <CodeBlock
          code={`# /etc/nginx/conf.d/meusite.conf
  server {
      listen 80;
      # Porta que o Nginx escuta

      server_name meusite.com www.meusite.com;
      # Domínio(s) deste site

      root /var/www/meusite;
      # Diretório onde ficam os arquivos do site

      index index.html index.htm;
      # Arquivo padrão ao acessar um diretório

      # Logs específicos deste site
      access_log /var/log/nginx/meusite-access.log;
      error_log /var/log/nginx/meusite-error.log;

      # Configuração de localização
      location / {
          try_files $uri $uri/ =404;
          # Tenta servir o arquivo, depois diretório, depois 404
      }

      # Arquivos estáticos com cache longo
      location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff2)$ {
          expires 30d;
          add_header Cache-Control "public, immutable";
      }
  }

  # Criar o diretório e dar permissões
  # sudo mkdir -p /var/www/meusite
  # sudo chown -R nginx:nginx /var/www/meusite
  # echo "<h1>Meu Site</h1>" | sudo tee /var/www/meusite/index.html`}
          language="nginx"
          title="virtual host"
        />

        <h2>Proxy Reverso</h2>
        <p>
          O proxy reverso encaminha requisições do Nginx para uma aplicação backend (Node.js, Python, Go, etc.):
        </p>
        <CodeBlock
          code={`# /etc/nginx/conf.d/api.conf
  server {
      listen 80;
      server_name api.meusite.com;

      location / {
          proxy_pass http://127.0.0.1:3000;
          # Encaminha para a aplicação rodando na porta 3000

          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          # Headers para que o backend saiba o IP real do cliente

          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          # Necessário para WebSocket
      }
  }

  # Balanceamento de carga entre múltiplos backends
  upstream backend_servers {
      server 127.0.0.1:3001;
      server 127.0.0.1:3002;
      server 127.0.0.1:3003;
  }

  server {
      listen 80;
      server_name app.meusite.com;

      location / {
          proxy_pass http://backend_servers;
      }
  }`}
          language="nginx"
          title="proxy reverso"
        />

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> SSL/TLS com Let's Encrypt</h2>
        <CodeBlock
          code={`# Instalar Certbot (Let's Encrypt)
  sudo dnf install certbot python3-certbot-nginx

  # Obter certificado e configurar automaticamente
  sudo certbot --nginx -d meusite.com -d www.meusite.com
  # O Certbot modifica o nginx.conf automaticamente!

  # Renovar certificados (automático, mas pode testar)
  sudo certbot renew --dry-run

  # Verificar timer de renovação automática
  sudo systemctl status certbot-renew.timer

  # Configuração SSL manual (se preferir):
  server {
      listen 443 ssl http2;
      server_name meusite.com;

      ssl_certificate /etc/letsencrypt/live/meusite.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/meusite.com/privkey.pem;

      # Segurança SSL
      ssl_protocols TLSv1.2 TLSv1.3;
      ssl_prefer_server_ciphers on;

      # HSTS
      add_header Strict-Transport-Security "max-age=31536000" always;
  }

  # Redirecionar HTTP para HTTPS
  server {
      listen 80;
      server_name meusite.com www.meusite.com;
      return 301 https://$server_name$request_uri;
  }`}
          language="bash"
          title="SSL com Let's Encrypt"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux e Nginx</h2>
        <p>
          No Fedora, o SELinux pode bloquear o Nginx. Comandos úteis para resolver:
        </p>
        <CodeBlock
          code={`# Se o Nginx não consegue ler arquivos do site:
  sudo semanage fcontext -a -t httpd_sys_content_t "/var/www/meusite(/.*)?"
  sudo restorecon -Rv /var/www/meusite

  # Se o proxy reverso é bloqueado:
  sudo setsebool -P httpd_can_network_connect 1

  # Se precisa acessar banco de dados:
  sudo setsebool -P httpd_can_network_connect_db 1

  # Ver problemas do SELinux
  sudo ausearch -m avc -ts recent | grep nginx
  sudo sealert -a /var/log/audit/audit.log`}
          language="bash"
          title="SELinux"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Erro 403 Forbidden</td><td>Verificar permissões: <code>chmod -R 755 /var/www</code> e contexto SELinux</td></tr>
            <tr><td>Erro 502 Bad Gateway</td><td>Backend não está rodando ou proxy_pass está errado</td></tr>
            <tr><td>Nginx não inicia</td><td><code>sudo nginx -t</code> para ver erros de sintaxe</td></tr>
            <tr><td>Porta em uso</td><td><code>sudo ss -tulpn | grep :80</code> — outro processo usando a porta</td></tr>
            <tr><td>SELinux bloqueando</td><td><code>sudo setsebool -P httpd_can_network_connect 1</code></td></tr>
            <tr><td>Certificado expirado</td><td><code>sudo certbot renew</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Nginx vs Apache">
          O Nginx é geralmente mais rápido para conteúdo estático e como proxy reverso. O Apache é mais flexível
          com <code>.htaccess</code>. Para o Fedora, ambos estão disponíveis: <code>sudo dnf install nginx</code> ou <code>sudo dnf install httpd</code>.
        </AlertBox>
      </PageContainer>
    );
  }
  