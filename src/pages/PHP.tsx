import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Settings, Database, Globe, Package, Terminal } from "lucide-react";

  export default function PHP() {
    return (
      <PageContainer
        title="PHP no Fedora"
        subtitle="Configure o ambiente PHP no Fedora: instalação, extensões, Composer, PHP-FPM com Nginx/Apache e frameworks como Laravel."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> PHP no Fedora</h2>
        <p>
          O <strong>PHP</strong> é uma das linguagens mais usadas para desenvolvimento web. Ele alimenta
          WordPress, Laravel, Symfony e milhões de sites na internet. O Fedora mantém versões recentes
          do PHP nos repositórios oficiais.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar PHP
  sudo dnf install php php-cli php-common

  # Extensões populares
  sudo dnf install \
    php-mysqlnd \
    php-pgsql \
    php-json \
    php-mbstring \
    php-xml \
    php-curl \
    php-zip \
    php-gd \
    php-intl \
    php-opcache \
    php-bcmath

  # Verificar versão e módulos
  php --version
  php -m    # listar módulos instalados

  # Executar PHP no terminal
  php -r 'echo "PHP funcionando!\n";'

  # Servidor embutido (desenvolvimento)
  php -S localhost:8000`}
          language="bash"
          title="instalação"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Composer — Gerenciador de Pacotes</h2>
        <CodeBlock
          code={`# Instalar Composer
  sudo dnf install composer
  # Ou manualmente:
  # php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  # php composer-setup.php --install-dir=/usr/local/bin --filename=composer

  # Verificar
  composer --version

  # Criar projeto
  composer init

  # Instalar dependências
  composer require guzzlehttp/guzzle
  composer require --dev phpunit/phpunit

  # Instalar dependências do projeto
  composer install

  # Atualizar dependências
  composer update

  # Autoloader
  composer dump-autoload`}
          language="bash"
          title="Composer"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> PHP-FPM com Nginx</h2>
        <CodeBlock
          code={`# Instalar PHP-FPM
  sudo dnf install php-fpm

  # Iniciar
  sudo systemctl enable --now php-fpm

  # Configuração do Nginx para PHP
  # /etc/nginx/conf.d/php-site.conf
  server {
      listen 80;
      server_name meusite.com;
      root /var/www/meusite;
      index index.php index.html;

      location / {
          try_files $uri $uri/ /index.php?$query_string;
      }

      location ~ \.php$ {
          fastcgi_pass unix:/run/php-fpm/www.sock;
          fastcgi_index index.php;
          fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
          include fastcgi_params;
      }
  }

  # Reiniciar serviços
  # sudo systemctl restart php-fpm nginx`}
          language="bash"
          title="PHP-FPM + Nginx"
        />

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Laravel — Framework PHP</h2>
        <CodeBlock
          code={`# Criar projeto Laravel
  composer create-project laravel/laravel meu-projeto

  cd meu-projeto

  # Servidor de desenvolvimento
  php artisan serve

  # Comandos úteis do Artisan
  php artisan make:controller UserController
  php artisan make:model User -m    # com migration
  php artisan migrate                # executar migrations
  php artisan db:seed                # popular banco
  php artisan route:list             # listar rotas
  php artisan cache:clear            # limpar cache`}
          language="bash"
          title="Laravel"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração (php.ini)</h2>
        <CodeBlock
          code={`# Localizar php.ini
  php --ini

  # Editar
  sudo vim /etc/php.ini

  # Configurações recomendadas para desenvolvimento:
  memory_limit = 256M
  upload_max_filesize = 64M
  post_max_size = 64M
  max_execution_time = 300
  display_errors = On
  error_reporting = E_ALL
  date.timezone = America/Sao_Paulo

  # Para produção:
  display_errors = Off
  error_log = /var/log/php-errors.log
  opcache.enable = 1

  # Reiniciar após mudanças
  sudo systemctl restart php-fpm`}
          language="bash"
          title="php.ini"
        />

        <AlertBox type="info" title="SELinux e PHP">
          Se PHP-FPM não conseguir conectar ao banco: <code>sudo setsebool -P httpd_can_network_connect_db 1</code>.
          Se não conseguir enviar emails: <code>sudo setsebool -P httpd_can_sendmail 1</code>.
        </AlertBox>
      </PageContainer>
    );
  }
  