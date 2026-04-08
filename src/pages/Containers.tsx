import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Box, Layers, Server, Network, HardDrive, Shield } from "lucide-react";

  export default function Containers() {
    return (
      <PageContainer
        title="Podman e Containers"
        subtitle="Use containers no Fedora com o Podman — alternativa ao Docker sem daemon, mais segura e 100% compatível."
        difficulty="intermediario"
        timeToRead="40 min"
      >
        <h2><Box className="inline-block mr-2 mb-1 w-5 h-5" /> O que são Containers?</h2>
        <p>
          Containers são ambientes isolados e leves que empacotam uma aplicação com todas as suas dependências (bibliotecas, runtime, configurações). Diferente de máquinas virtuais, containers compartilham o kernel do host, tornando-os muito mais rápidos e eficientes em recursos.
        </p>

        <h3>Podman vs Docker</h3>
        <table>
          <thead><tr><th>Aspecto</th><th>Podman</th><th>Docker</th></tr></thead>
          <tbody>
            <tr><td><strong>Daemon</strong></td><td>Sem daemon (daemonless)</td><td>Requer daemon rodando como root</td></tr>
            <tr><td><strong>Rootless</strong></td><td>Nativo — containers como usuário comum</td><td>Requer configuração extra</td></tr>
            <tr><td><strong>Segurança</strong></td><td>Mais seguro (sem processo root)</td><td>Daemon root = superfície de ataque</td></tr>
            <tr><td><strong>Compatibilidade</strong></td><td>100% compatível com Docker CLI</td><td>Referência original</td></tr>
            <tr><td><strong>Systemd</strong></td><td>Integração nativa (quadlet)</td><td>Precisa de scripts separados</td></tr>
            <tr><td><strong>Pods</strong></td><td>Suporte nativo (como Kubernetes)</td><td>Apenas com Compose</td></tr>
            <tr><td><strong>Compose</strong></td><td>podman-compose ou docker-compose</td><td>docker-compose nativo</td></tr>
            <tr><td><strong>No Fedora</strong></td><td>Pré-instalado</td><td>Precisa instalar</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Compatibilidade total">
          O Podman aceita os mesmos comandos do Docker. Você pode usar <code>alias docker=podman</code> no bashrc e scripts Docker funcionam sem modificação. Imagens Docker Hub funcionam diretamente no Podman.
        </AlertBox>

        <h2>Instalação e Configuração</h2>
        <CodeBlock
          code={`# Podman já vem instalado no Fedora!
  podman --version
  # Saída: podman version 5.x.x

  # Se não tiver:
  sudo dnf install podman

  # Verificar informações do Podman
  podman info

  # Instalar ferramentas adicionais
  sudo dnf install podman-compose buildah skopeo

  # Habilitar socket do Podman (compatibilidade com Docker API)
  systemctl --user enable --now podman.socket
  export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock

  # Configurar registros de imagens
  # Arquivo: ~/.config/containers/registries.conf
  # [registries.search]
  # registries = ['docker.io', 'quay.io', 'registry.fedoraproject.org']`}
          language="bash"
          title="instalação e configuração"
        />

        <h2>Operações Básicas com Containers</h2>

        <h3>Baixando imagens</h3>
        <CodeBlock
          code={`# Baixar uma imagem do Docker Hub
  podman pull ubuntu:22.04
  podman pull nginx:latest
  podman pull python:3.12-slim
  podman pull node:20-alpine

  # Baixar do Quay.io (Red Hat)
  podman pull quay.io/fedora/fedora:latest

  # Listar imagens locais
  podman images
  # REPOSITORY                TAG       IMAGE ID       CREATED        SIZE
  # docker.io/library/nginx   latest    a8758716bb6a   2 weeks ago    192 MB

  # Buscar imagens em registros
  podman search nginx
  podman search --filter=is-official nginx

  # Inspecionar uma imagem sem baixar
  skopeo inspect docker://docker.io/library/nginx:latest`}
          language="bash"
          title="imagens"
        />

        <h3>Executando containers</h3>
        <CodeBlock
          code={`# Executar um container simples
  podman run hello-world

  # Container interativo com terminal
  podman run -it ubuntu:22.04 bash
  # -i = interativo (mantém stdin aberto)
  # -t = aloca um pseudo-TTY (terminal)

  # Container em background (daemon)
  podman run -d --name meu-nginx -p 8080:80 nginx
  # -d = detached (background)
  # --name = nome personalizado
  # -p = mapeamento de porta host:container

  # Container com variáveis de ambiente
  podman run -d --name meu-db \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD=senha123 \
    -e POSTGRES_DB=meudb \
    -p 5432:5432 \
    postgres:16

  # Container com limite de recursos
  podman run -d --name app \
    --memory=512m \
    --cpus=1.5 \
    nginx

  # Container que remove automaticamente ao parar
  podman run --rm -it python:3.12 python3 -c "print('Olá do container!')"`}
          language="bash"
          title="executando containers"
        />

        <h2>Gerenciando Containers</h2>
        <CodeBlock
          code={`# Listar containers em execução
  podman ps

  # Listar todos (incluindo parados)
  podman ps -a

  # Parar, iniciar e reiniciar
  podman stop meu-nginx
  podman start meu-nginx
  podman restart meu-nginx

  # Parar todos os containers
  podman stop --all

  # Remover container
  podman rm meu-nginx

  # Forçar remoção (se estiver rodando)
  podman rm -f meu-nginx

  # Remover todos os containers parados
  podman container prune

  # Executar comando em container rodando
  podman exec -it meu-nginx bash
  podman exec meu-nginx ls /var/www/html

  # Ver logs
  podman logs meu-nginx
  podman logs -f meu-nginx         # seguir em tempo real
  podman logs --tail 50 meu-nginx  # últimas 50 linhas
  podman logs --since 1h meu-nginx # última hora

  # Estatísticas de recursos
  podman stats
  podman top meu-nginx

  # Inspecionar container (JSON completo)
  podman inspect meu-nginx
  podman inspect --format='{{.NetworkSettings.IPAddress}}' meu-nginx`}
          language="bash"
          title="gerenciamento de containers"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Volumes e Persistência</h2>
        <p>Dados dentro de containers são efêmeros — são perdidos quando o container é removido. Use <strong>volumes</strong> para persistir dados:</p>
        <CodeBlock
          code={`# Criar um volume nomeado
  podman volume create meus-dados

  # Listar volumes
  podman volume ls

  # Usar volume em um container
  podman run -d --name db \
    -v meus-dados:/var/lib/postgresql/data \
    postgres:16

  # Bind mount (diretório do host)
  podman run -d --name web \
    -v /home/usuario/site:/usr/share/nginx/html:ro \
    -p 8080:80 nginx
  # :ro = somente leitura (read-only)
  # :rw = leitura e escrita (padrão)
  # :Z  = aplica label SELinux automaticamente

  # Copiar arquivos entre host e container
  podman cp arquivo.txt meu-nginx:/tmp/
  podman cp meu-nginx:/var/log/nginx/access.log ./logs/

  # Inspecionar volume
  podman volume inspect meus-dados

  # Remover volume
  podman volume rm meus-dados

  # Remover volumes não utilizados
  podman volume prune`}
          language="bash"
          title="volumes"
        />

        <AlertBox type="warning" title="SELinux e volumes">
          No Fedora com SELinux, bind mounts podem ser bloqueados. Use o sufixo <code>:Z</code> para aplicar o label correto automaticamente: <code>-v /host/path:/container/path:Z</code>
        </AlertBox>

        <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> Networking</h2>
        <CodeBlock
          code={`# Listar redes
  podman network ls

  # Criar rede personalizada
  podman network create minha-rede

  # Executar container em rede personalizada
  podman run -d --name app --network minha-rede nginx

  # Containers na mesma rede podem se comunicar pelo nome
  podman run -d --name db --network minha-rede postgres:16
  # O container "app" pode acessar "db" pelo hostname "db"

  # Conectar container existente a uma rede
  podman network connect minha-rede container-existente

  # Inspecionar rede
  podman network inspect minha-rede

  # Remover rede
  podman network rm minha-rede`}
          language="bash"
          title="networking"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Podman Compose</h2>
        <CodeBlock
          code={`# Instalar podman-compose
  sudo dnf install podman-compose

  # Usar com docker-compose.yml (mesma sintaxe)
  podman-compose up -d
  podman-compose down
  podman-compose logs -f
  podman-compose ps

  # Exemplo de docker-compose.yml para stack completa:
  # version: "3"
  # services:
  #   db:
  #     image: postgres:16
  #     environment:
  #       POSTGRES_DB: app
  #       POSTGRES_USER: admin
  #       POSTGRES_PASSWORD: senha123
  #     volumes:
  #       - db-data:/var/lib/postgresql/data
  #     ports:
  #       - "5432:5432"
  #
  #   app:
  #     image: node:20
  #     working_dir: /app
  #     volumes:
  #       - ./:/app
  #     ports:
  #       - "3000:3000"
  #     depends_on:
  #       - db
  #     command: npm start
  #
  # volumes:
  #   db-data:`}
          language="bash"
          title="podman-compose"
        />

        <h2>Pods — Agrupando Containers</h2>
        <p>Pods são um conceito do Kubernetes que o Podman suporta nativamente. Um pod agrupa containers que compartilham rede e namespaces:</p>
        <CodeBlock
          code={`# Criar um pod
  podman pod create --name meu-pod -p 8080:80

  # Adicionar containers ao pod
  podman run -d --pod meu-pod --name web nginx
  podman run -d --pod meu-pod --name app python:3.12

  # Containers no mesmo pod compartilham localhost
  # O app pode acessar o nginx via localhost:80

  # Listar pods
  podman pod ls

  # Ver containers de um pod
  podman pod inspect meu-pod

  # Parar e remover pod (e todos os containers)
  podman pod stop meu-pod
  podman pod rm meu-pod

  # Gerar YAML do Kubernetes a partir de um pod
  podman generate kube meu-pod > meu-pod.yaml
  # Útil para migrar para Kubernetes!`}
          language="bash"
          title="pods"
        />

        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> Construindo Imagens</h2>
        <CodeBlock
          code={`# Construir imagem a partir de Containerfile/Dockerfile
  podman build -t minha-app .
  podman build -t minha-app:v1.0 -f Containerfile .

  # Exemplo de Containerfile (equivalente ao Dockerfile)
  # FROM fedora:latest
  # RUN dnf install -y python3 pip && dnf clean all
  # WORKDIR /app
  # COPY requirements.txt .
  # RUN pip install -r requirements.txt
  # COPY . .
  # EXPOSE 8000
  # CMD ["python3", "app.py"]

  # Multi-stage build (imagem menor)
  # FROM node:20 AS build
  # WORKDIR /app
  # COPY package*.json .
  # RUN npm install
  # COPY . .
  # RUN npm run build
  #
  # FROM nginx:alpine
  # COPY --from=build /app/dist /usr/share/nginx/html

  # Enviar imagem para registro
  podman login docker.io
  podman tag minha-app docker.io/usuario/minha-app:latest
  podman push docker.io/usuario/minha-app:latest

  # Enviar para Quay.io
  podman login quay.io
  podman push quay.io/usuario/minha-app:latest`}
          language="bash"
          title="construindo imagens"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Containers como Serviço (Quadlet)</h2>
        <p>O Podman integra com systemd via <strong>Quadlet</strong> — você pode gerenciar containers como serviços:</p>
        <CodeBlock
          code={`# Criar arquivo de unidade Quadlet
  mkdir -p ~/.config/containers/systemd/

  # Criar ~/.config/containers/systemd/nginx.container
  # [Container]
  # Image=nginx:latest
  # PublishPort=8080:80
  # Volume=/home/usuario/site:/usr/share/nginx/html:ro,Z
  #
  # [Service]
  # Restart=always
  #
  # [Install]
  # WantedBy=default.target

  # Recarregar e iniciar
  systemctl --user daemon-reload
  systemctl --user start nginx
  systemctl --user enable nginx

  # Ver status
  systemctl --user status nginx

  # Ver logs
  journalctl --user -u nginx -f`}
          language="bash"
          title="quadlet (systemd)"
        />

        <h2>Limpeza e Manutenção</h2>
        <CodeBlock
          code={`# Remover tudo que não está em uso
  podman system prune -a
  # Remove: containers parados, imagens sem uso, redes sem uso, cache de build

  # Ver uso de disco pelo Podman
  podman system df
  # TYPE           TOTAL   ACTIVE  SIZE     RECLAIMABLE
  # Images         5       2       2.1GB    1.3GB (61%)
  # Containers     3       1       50MB     30MB (60%)
  # Local Volumes  2       1       500MB    200MB (40%)

  # Limpar cache de build
  podman builder prune`}
          language="bash"
          title="limpeza"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Permissão negada ao montar volume</td><td>Use <code>:Z</code> no volume para SELinux: <code>-v /path:/path:Z</code></td></tr>
            <tr><td>Porta já em uso</td><td>Mude a porta do host: <code>-p 8081:80</code></td></tr>
            <tr><td>Container não resolve DNS</td><td>Use rede personalizada: <code>--network minha-rede</code></td></tr>
            <tr><td>Imagem não encontrada</td><td>Especifique o registro: <code>docker.io/library/nginx</code></td></tr>
            <tr><td>Rootless: sem acesso a porta baixa</td><td>Portas abaixo de 1024 requerem root ou <code>sysctl net.ipv4.ip_unprivileged_port_start=80</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  