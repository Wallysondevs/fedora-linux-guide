import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Box, Layers, Settings, Play, FileText, Network } from "lucide-react";

  export default function DockerCompose() {
    return (
      <PageContainer
        title="Podman Compose — Orquestração de Containers"
        subtitle="Gerencie aplicações multi-container com Podman Compose: defina serviços, redes e volumes em um único arquivo YAML."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Box className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Podman Compose?</h2>
        <p>
          O <strong>Podman Compose</strong> é a alternativa do Fedora ao Docker Compose. Ele permite definir e
          gerenciar aplicações com múltiplos containers usando um arquivo <code>docker-compose.yml</code>
          (ou <code>compose.yml</code>). Em vez de subir cada container manualmente, você descreve toda a
          infraestrutura em um arquivo YAML e sobe tudo com um único comando.
        </p>
        <p>
          Como o Fedora usa <strong>Podman</strong> (sem daemon, rootless por padrão), o podman-compose é a
          ferramenta nativa. Ele é compatível com a maioria dos arquivos docker-compose.yml existentes.
        </p>

        <CodeBlock
          code={`# Instalar podman-compose
  sudo dnf install podman-compose

  # Verificar versão
  podman-compose --version

  # Alternativa: docker-compose standalone (compatível com Podman)
  # Com Podman, você pode emular o Docker:
  sudo dnf install podman-docker
  # Agora "docker" e "docker-compose" chamam o Podman por baixo`}
          language="bash"
          title="instalação"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura do compose.yml</h2>
        <p>
          O arquivo compose.yml define todos os serviços (containers), redes e volumes da aplicação:
        </p>
        <CodeBlock
          code={`# compose.yml — Aplicação web com banco de dados
  version: '3.8'

  services:
    # Serviço 1: Aplicação web
    web:
      image: nginx:alpine
      # Imagem do container (baixada automaticamente do Docker Hub)
      ports:
        - "8080:80"
      # Mapeia porta 8080 do host para porta 80 do container
      volumes:
        - ./site:/usr/share/nginx/html:ro
      # Monta pasta local no container (:ro = somente leitura)
      depends_on:
        - db
      # Só inicia depois que o "db" estiver pronto
      restart: unless-stopped
      # Reiniciar automaticamente (exceto se parado manualmente)

    # Serviço 2: Banco de dados PostgreSQL
    db:
      image: postgres:16-alpine
      environment:
        POSTGRES_DB: meuapp
        POSTGRES_USER: admin
        POSTGRES_PASSWORD: senha_segura_123
      # Variáveis de ambiente para configurar o PostgreSQL
      volumes:
        - postgres_data:/var/lib/postgresql/data
      # Volume nomeado para persistência dos dados
      ports:
        - "5432:5432"

    # Serviço 3: Adminer (gerenciador web do banco)
    adminer:
      image: adminer
      ports:
        - "8081:8080"
      depends_on:
        - db

  # Volumes nomeados (persistentes)
  volumes:
    postgres_data:`}
          language="yaml"
          title="compose.yml básico"
        />

        <h2><Play className="inline-block mr-2 mb-1 w-5 h-5" /> Comandos Essenciais</h2>
        <CodeBlock
          code={`# Subir todos os serviços (em segundo plano)
  podman-compose up -d
  # -d = detached (roda em background)

  # Subir e ver logs em tempo real
  podman-compose up

  # Ver status dos serviços
  podman-compose ps

  # Ver logs de todos os serviços
  podman-compose logs

  # Ver logs de um serviço específico
  podman-compose logs web
  podman-compose logs -f db    # -f = follow (tempo real)

  # Parar todos os serviços
  podman-compose down

  # Parar e remover volumes (APAGA dados!)
  podman-compose down -v

  # Reiniciar serviços
  podman-compose restart
  podman-compose restart web   # apenas um serviço

  # Executar comando dentro de um container
  podman-compose exec db psql -U admin -d meuapp
  podman-compose exec web sh

  # Reconstruir imagens (após mudanças no Dockerfile)
  podman-compose build
  podman-compose up -d --build   # rebuild e subir`}
          language="bash"
          title="comandos essenciais"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Exemplos Práticos</h2>

        <h3>WordPress + MySQL</h3>
        <CodeBlock
          code={`# compose.yml — WordPress completo
  version: '3.8'

  services:
    wordpress:
      image: wordpress:latest
      ports:
        - "8080:80"
      environment:
        WORDPRESS_DB_HOST: mysql
        WORDPRESS_DB_USER: wp_user
        WORDPRESS_DB_PASSWORD: wp_senha_123
        WORDPRESS_DB_NAME: wordpress
      volumes:
        - wp_data:/var/www/html
      depends_on:
        - mysql
      restart: unless-stopped

    mysql:
      image: mysql:8
      environment:
        MYSQL_ROOT_PASSWORD: root_senha_123
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wp_user
        MYSQL_PASSWORD: wp_senha_123
      volumes:
        - mysql_data:/var/lib/mysql
      restart: unless-stopped

  volumes:
    wp_data:
    mysql_data:`}
          language="yaml"
          title="wordpress"
        />

        <h3>Aplicação Node.js + Redis + Nginx</h3>
        <CodeBlock
          code={`# compose.yml — Stack Node.js completa
  version: '3.8'

  services:
    app:
      build: .
      # Constrói imagem a partir do Dockerfile no diretório atual
      environment:
        NODE_ENV: production
        REDIS_URL: redis://cache:6379
      depends_on:
        - cache
      restart: unless-stopped

    cache:
      image: redis:7-alpine
      volumes:
        - redis_data:/data
      restart: unless-stopped

    proxy:
      image: nginx:alpine
      ports:
        - "80:80"
      volumes:
        - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
      depends_on:
        - app
      restart: unless-stopped

  volumes:
    redis_data:`}
          language="yaml"
          title="node.js + redis + nginx"
        />

        <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> Redes e Volumes</h2>
        <CodeBlock
          code={`# Redes personalizadas
  version: '3.8'

  services:
    web:
      image: nginx
      networks:
        - frontend

    api:
      image: node:20-alpine
      networks:
        - frontend
        - backend

    db:
      image: postgres:16
      networks:
        - backend
      # O "db" NÃO é acessível pela rede "frontend"
      # Apenas o "api" consegue se comunicar com ele

  networks:
    frontend:
      driver: bridge
    backend:
      driver: bridge
      internal: true    # sem acesso à internet`}
          language="yaml"
          title="redes"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Variáveis de Ambiente e .env</h2>
        <CodeBlock
          code={`# Criar arquivo .env no mesmo diretório do compose.yml
  # .env
  POSTGRES_DB=meuapp
  POSTGRES_USER=admin
  POSTGRES_PASSWORD=senha_super_segura

  # No compose.yml, referenciar com $\{VARIAVEL\}:
  services:
    db:
      image: postgres:16
      environment:
        POSTGRES_DB: \${POSTGRES_DB}
        POSTGRES_USER: \${POSTGRES_USER}
        POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}

  # Ou usar env_file:
  services:
    app:
      image: meuapp
      env_file:
        - .env
        - .env.production`}
          language="yaml"
          title="variáveis de ambiente"
        />

        <AlertBox type="warning" title="Segurança">
          Nunca commite arquivos <code>.env</code> com senhas no Git! Adicione <code>.env</code> ao <code>.gitignore</code>
          e use <code>.env.example</code> como template (sem senhas reais).
        </AlertBox>

        <h2>Referência de Comandos</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>podman-compose up -d</code></td><td>Subir serviços em background</td></tr>
            <tr><td><code>podman-compose down</code></td><td>Parar e remover containers</td></tr>
            <tr><td><code>podman-compose ps</code></td><td>Ver status dos serviços</td></tr>
            <tr><td><code>podman-compose logs -f</code></td><td>Ver logs em tempo real</td></tr>
            <tr><td><code>podman-compose exec</code></td><td>Executar comando no container</td></tr>
            <tr><td><code>podman-compose build</code></td><td>Reconstruir imagens</td></tr>
            <tr><td><code>podman-compose restart</code></td><td>Reiniciar serviços</td></tr>
            <tr><td><code>podman-compose pull</code></td><td>Baixar/atualizar imagens</td></tr>
            <tr><td><code>podman-compose down -v</code></td><td>Parar e remover volumes</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Migrar do Docker Compose">
          Se você já usa Docker Compose, seus arquivos <code>docker-compose.yml</code> funcionam com <code>podman-compose</code>
          na maioria dos casos. Basta instalar <code>podman-compose</code> e rodar os mesmos comandos.
        </AlertBox>
      </PageContainer>
    );
  }
  