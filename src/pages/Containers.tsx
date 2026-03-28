import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Box, Layers, Server } from "lucide-react";

export default function Containers() {
  return (
    <PageContainer
      title="Podman e Containers"
      subtitle="Use containers no Fedora com o Podman — alternativa ao Docker sem daemon, mais segura e compatível com Kubernetes."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <h2><Box className="inline-block mr-2 mb-1 w-5 h-5" /> Podman no Fedora</h2>
      <p>
        O <strong>Podman</strong> é a solução de containers padrão do Fedora. Diferente do Docker, o Podman é <strong>daemonless</strong> (sem daemon root) e permite executar containers como usuário comum (<em>rootless containers</em>), o que é muito mais seguro.
      </p>
      <p>
        O Podman é compatível com imagens Docker e com o formato OCI. Você pode usar imagens do Docker Hub, Quay.io e outros registros.
      </p>

      <AlertBox type="info" title="Podman é 100% compatível com Docker">
        Você pode usar <code>alias docker=podman</code> no seu bashrc e seus scripts Docker vão funcionar com Podman sem modificações.
      </AlertBox>

      <h2>Instalação e Configuração</h2>
      <CodeBlock
        code={`# Podman já vem instalado no Fedora!
podman --version

# Se não tiver:
sudo dnf install podman

# Verificar instalação
podman info

# Habilitar socket do Podman (para compatibilidade com ferramentas Docker)
systemctl --user enable --now podman.socket
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock`}
        language="bash"
        title="instalação"
      />

      <h2>Operações Básicas</h2>
      <CodeBlock
        code={`# Baixar uma imagem
podman pull ubuntu:22.04
podman pull nginx:latest
podman pull python:3.12

# Listar imagens locais
podman images

# Executar um container
podman run hello-world
podman run -it ubuntu:22.04 bash          # interativo
podman run -d -p 8080:80 nginx            # em background com porta mapeada
podman run --name meu-nginx -d nginx      # com nome personalizado

# Listar containers
podman ps                    # em execução
podman ps -a                 # todos (incluindo parados)

# Parar e remover
podman stop meu-nginx
podman rm meu-nginx
podman stop --all
podman rm --all

# Remover imagem
podman rmi nginx
podman rmi --all             # remover todas as imagens`}
        language="bash"
        title="operações básicas"
      />

      <h2>Gerenciando Containers</h2>
      <CodeBlock
        code={`# Executar comando em container em execução
podman exec -it meu-nginx bash
podman exec meu-nginx ls /var/www/html

# Ver logs de um container
podman logs meu-nginx
podman logs -f meu-nginx     # seguir em tempo real

# Inspecionar um container
podman inspect meu-nginx

# Copiar arquivos entre host e container
podman cp arquivo.txt meu-nginx:/tmp/
podman cp meu-nginx:/var/log/nginx/access.log .

# Estatísticas de recursos
podman stats
podman top meu-nginx`}
        language="bash"
        title="gerenciamento"
      />

      <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Podman Compose</h2>
      <CodeBlock
        code={`# Instalar podman-compose (alternativa ao docker-compose)
sudo dnf install podman-compose

# Usar com um arquivo docker-compose.yml
podman-compose up -d
podman-compose down
podman-compose logs

# Exemplo de docker-compose.yml para WordPress
# version: "3"
# services:
#   db:
#     image: mysql:8
#     environment:
#       MYSQL_DATABASE: wordpress
#       MYSQL_USER: wpuser
#       MYSQL_PASSWORD: wppass
#       MYSQL_ROOT_PASSWORD: rootpass
#   wordpress:
#     image: wordpress:latest
#     ports:
#       - "8080:80"
#     environment:
#       WORDPRESS_DB_HOST: db
#       WORDPRESS_DB_USER: wpuser
#       WORDPRESS_DB_PASSWORD: wppass`}
        language="bash"
        title="podman-compose"
      />

      <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> Buildah — Construindo Imagens</h2>
      <CodeBlock
        code={`# Buildah é instalado junto com o Podman
buildah --version

# Construir imagem a partir de Dockerfile/Containerfile
buildah build -t minha-app .
# ou
podman build -t minha-app .

# Exemplo de Containerfile (equivalente ao Dockerfile)
# FROM fedora:latest
# RUN dnf install -y python3 && dnf clean all
# COPY app.py /app/
# WORKDIR /app
# CMD ["python3", "app.py"]

# Enviar imagem para o Docker Hub
podman login docker.io
podman tag minha-app docker.io/usuario/minha-app:latest
podman push docker.io/usuario/minha-app:latest

# Enviar para o Quay.io (Red Hat)
podman login quay.io
podman push quay.io/usuario/minha-app:latest`}
        language="bash"
        title="buildah"
      />
    </PageContainer>
  );
}
