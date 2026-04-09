import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Server, Settings, Shield, Globe, FileText, Lock } from "lucide-react";

  export default function Apache() {
    return (
      <PageContainer
        title="Apache — Servidor Web"
        subtitle="Instale e configure o Apache (httpd) no Fedora: virtual hosts, módulos, .htaccess, SSL e integração com PHP."
        difficulty="avancado"
        timeToRead="30 min"
      >
        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Apache?</h2>
        <p>
          O <strong>Apache HTTP Server</strong> (httpd) é o servidor web mais usado da história. Ele é
          extremamente flexível com suporte a <code>.htaccess</code>, módulos dinâmicos e configuração
          por diretório. No Fedora, o serviço se chama <code>httpd</code>.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar Apache
  sudo dnf install httpd

  # Iniciar e habilitar no boot
  sudo systemctl enable --now httpd

  # Abrir firewall
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https
  sudo firewall-cmd --reload

  # Verificar status
  sudo systemctl status httpd

  # Testar — acesse http://localhost`}
          language="bash"
          title="instalação"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura de Configuração</h2>
        <table>
          <thead><tr><th>Arquivo/Diretório</th><th>Função</th></tr></thead>
          <tbody>
            <tr><td><code>/etc/httpd/conf/httpd.conf</code></td><td>Configuração principal</td></tr>
            <tr><td><code>/etc/httpd/conf.d/</code></td><td>Configurações adicionais (*.conf)</td></tr>
            <tr><td><code>/var/www/html/</code></td><td>Diretório padrão do site</td></tr>
            <tr><td><code>/var/log/httpd/access_log</code></td><td>Log de acessos</td></tr>
            <tr><td><code>/var/log/httpd/error_log</code></td><td>Log de erros</td></tr>
          </tbody>
        </table>

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Virtual Hosts</h2>
        <CodeBlock
          code={`# /etc/httpd/conf.d/meusite.conf
  <VirtualHost *:80>
      ServerName meusite.com
      ServerAlias www.meusite.com
      DocumentRoot /var/www/meusite

      <Directory /var/www/meusite>
          AllowOverride All
          Require all granted
      </Directory>

      ErrorLog /var/log/httpd/meusite-error.log
      CustomLog /var/log/httpd/meusite-access.log combined
  </VirtualHost>

  # Criar diretório e testar
  # sudo mkdir -p /var/www/meusite
  # echo "<h1>Meu Site</h1>" | sudo tee /var/www/meusite/index.html
  # sudo systemctl reload httpd`}
          language="apache"
          title="virtual hosts"
        />

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> SSL/TLS com Let's Encrypt</h2>
        <CodeBlock
          code={`# Instalar mod_ssl e Certbot
  sudo dnf install mod_ssl python3-certbot-apache

  # Obter certificado
  sudo certbot --apache -d meusite.com -d www.meusite.com

  # Renovar automaticamente
  sudo certbot renew --dry-run

  # Verificar timer de renovação
  sudo systemctl status certbot-renew.timer`}
          language="bash"
          title="SSL"
        />

        <h2>Módulos Úteis</h2>
        <CodeBlock
          code={`# Listar módulos carregados
  httpd -M

  # Instalar mod_rewrite (para URLs amigáveis)
  # Já vem instalado, basta habilitar no .htaccess:
  # RewriteEngine On

  # Instalar PHP
  sudo dnf install php php-mysqlnd php-json php-mbstring
  sudo systemctl restart httpd

  # Instalar mod_security (WAF)
  sudo dnf install mod_security

  # Proxy reverso
  # Habilitar no httpd.conf:
  # LoadModule proxy_module modules/mod_proxy.so
  # LoadModule proxy_http_module modules/mod_proxy_http.so`}
          language="bash"
          title="módulos"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux</h2>
        <CodeBlock
          code={`# Se Apache não consegue servir arquivos:
  sudo semanage fcontext -a -t httpd_sys_content_t "/var/www/meusite(/.*)?"
  sudo restorecon -Rv /var/www/meusite

  # Se precisa de proxy reverso:
  sudo setsebool -P httpd_can_network_connect 1

  # Se precisa de conexão com banco:
  sudo setsebool -P httpd_can_network_connect_db 1`}
          language="bash"
          title="SELinux"
        />

        <AlertBox type="info" title="Apache vs Nginx">
          O Apache é mais flexível com <code>.htaccess</code> e módulos dinâmicos. O Nginx é mais leve
          e rápido para conteúdo estático e proxy reverso. Ambos estão disponíveis no Fedora. Para
          aplicações PHP (WordPress, Laravel), o Apache com mod_php é a escolha mais simples.
        </AlertBox>
      </PageContainer>
    );
  }
  