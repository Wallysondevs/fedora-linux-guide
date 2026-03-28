import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Navigation, Search, Folder } from "lucide-react";

export default function Navegacao() {
  return (
    <PageContainer
      title="Navegação no Sistema de Arquivos"
      subtitle="Domine os comandos essenciais para se mover pelo Linux: pwd, cd, ls, tree, find e locate."
      difficulty="iniciante"
      timeToRead="30 min"
    >
      <h2><Navigation className="inline-block mr-2 mb-1 w-5 h-5" /> pwd — Onde Estou?</h2>
      <p>
        O <code>pwd</code> (Print Working Directory) mostra o caminho completo do diretório em que você está.
      </p>
      <CodeBlock
        code={`pwd
# Saída: /home/usuario`}
        language="bash"
        title="pwd básico"
      />
      <CodeBlock
        code={`# -L (padrão): Mostra o caminho lógico (segue links simbólicos)
pwd -L

# -P: Mostra o caminho físico real (resolve links simbólicos)
pwd -P

# Exemplo prático:
# Se /home/usuario/projetos é um link simbólico para /mnt/ssd/projetos
cd /home/usuario/projetos
pwd -L   # /home/usuario/projetos  (caminho do link)
pwd -P   # /mnt/ssd/projetos      (caminho real no disco)`}
        language="bash"
        title="pwd com flags"
      />

      <h2>Caminhos Absolutos e Relativos</h2>
      <CodeBlock
        code={`# Caminho ABSOLUTO: Começa sempre com /
# É como dar o endereço completo de uma casa
cd /etc/dnf
cd /home/usuario/Documentos
cd /var/log

# Caminho RELATIVO: Parte do diretório atual
# É como dar direções a partir de onde você está
cd Documentos        # entra na pasta Documentos (dentro do diretório atual)
cd projetos/web      # entra em projetos, depois em web
cd ../               # volta um nível
cd ../../etc         # volta dois níveis e entra em /etc`}
        language="bash"
        title="absoluto vs relativo"
      />

      <h2>cd — Mudando de Diretório</h2>
      <CodeBlock
        code={`# Ir para o diretório home do usuário (3 formas equivalentes)
cd
cd ~
cd $HOME

# Voltar ao diretório anterior (como o botão "voltar" do navegador)
cd -
# Exemplo:
cd /etc          # vai para /etc
cd /var/log      # vai para /var/log
cd -             # volta para /etc
cd -             # volta para /var/log

# Subir um nível (diretório pai)
cd ..

# Subir dois níveis
cd ../..

# Subir um nível e entrar em outro diretório
cd ../outro-diretorio`}
        language="bash"
        title="cd"
      />

      <h2><Folder className="inline-block mr-2 mb-1 w-5 h-5" /> ls — Listando Arquivos</h2>
      <CodeBlock
        code={`# Listar conteúdo do diretório atual
ls

# Listar conteúdo de um diretório específico
ls /etc
ls ~/Documentos

# Listar múltiplos diretórios
ls /etc /var /tmp`}
        language="bash"
        title="ls básico"
      />
      <CodeBlock
        code={`# -l: Formato longo (detalhes completos)
# Mostra permissões, dono, grupo, tamanho, data e nome
ls -l
# drwxr-xr-x  2 usuario usuario 4096 jan 15 10:30 Documentos
# -rw-r--r--  1 usuario usuario  234 jan 14 09:15 notas.txt

# -a: Mostra arquivos ocultos (começam com .)
ls -a
# .  ..  .bashrc  .config  Documentos  notas.txt

# -la: Combinação mais usada — detalhes + ocultos
ls -la

# -lh: Formato longo com tamanhos legíveis (KB, MB, GB)
ls -lh`}
        language="bash"
        title="ls com flags"
      />
      <CodeBlock
        code={`# Ver tudo com detalhes e tamanhos legíveis (a mais usada de todas)
ls -lah

# Os 10 maiores arquivos do diretório
ls -lhS | head -10

# Arquivos modificados recentemente com detalhes
ls -lht

# Listar apenas diretórios
ls -d */

# Listar apenas arquivos .conf
ls -la *.conf

# Contar quantos arquivos existem no diretório
ls -1 | wc -l`}
        language="bash"
        title="ls avançado"
      />

      <h2>tree — Visualizar Árvore de Diretórios</h2>
      <CodeBlock
        code={`# Instalar tree (se não tiver)
sudo dnf install tree

# Mostrar árvore do diretório atual
tree

# Limitar a profundidade (muito útil para diretórios grandes)
tree -L 1    # apenas 1 nível
tree -L 2    # até 2 níveis
tree -L 3    # até 3 níveis

# Mostrar apenas diretórios (sem arquivos)
tree -d

# Mostrar tamanho dos arquivos
tree -h

# Mostrar arquivos ocultos
tree -a

# Ignorar certos padrões
tree -I "node_modules|.git|__pycache__"

# Mostrar com cores e contagem
tree -C`}
        language="bash"
        title="tree"
      />

      <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> find — Buscando Arquivos</h2>
      <p>O <code>find</code> é uma das ferramentas mais poderosas do Linux. Busca arquivos com critérios variados.</p>

      <h3>Busca por nome</h3>
      <CodeBlock
        code={`# Sintaxe: find [onde] [critérios]
find /home -name "*.txt"

# Buscar por nome exato (case sensitive)
find /etc -name "dnf.conf"

# Buscar ignorando maiúsculas/minúsculas
find /home -iname "readme.md"

# Buscar com wildcard (padrão glob)
find . -name "*.log"
find . -name "*.txt"
find /etc -name "*.conf"

# Buscar arquivos que começam com um prefixo
find . -name "config*"`}
        language="bash"
        title="find por nome"
      />

      <h3>Busca por tipo e tamanho</h3>
      <CodeBlock
        code={`# -type f: apenas arquivos regulares
find /var/log -type f -name "*.log"

# -type d: apenas diretórios
find /home -type d -name "projetos"

# -type l: apenas links simbólicos
find /usr/bin -type l

# Encontrar diretórios vazios
find . -type d -empty

# Encontrar arquivos vazios
find . -type f -empty

# Arquivos maiores que 100MB
find / -type f -size +100M

# Arquivos menores que 1KB
find . -type f -size -1k

# Arquivos entre 10MB e 100MB
find . -type f -size +10M -size -100M

# Unidades: c (bytes), k (kilobytes), M (megabytes), G (gigabytes)`}
        language="bash"
        title="find por tipo e tamanho"
      />

      <h3>Busca por data e execução de ação</h3>
      <CodeBlock
        code={`# Arquivos modificados nos últimos 7 dias
find . -type f -mtime -7

# Arquivos modificados há mais de 30 dias
find . -type f -mtime +30

# Arquivos modificados nas últimas 2 horas
find . -type f -mmin -120

# Executar ação nos arquivos encontrados (-exec)
# Deletar todos os arquivos .tmp
find /tmp -type f -name "*.tmp" -exec rm {} \;

# Mudar permissões de todos os scripts
find . -type f -name "*.sh" -exec chmod +x {} \;

# Listar detalhes de arquivos grandes
find / -type f -size +500M -exec ls -lh {} \;

# Usar + em vez de \; (mais eficiente — passa todos de uma vez)
find . -name "*.log" -exec rm {} +`}
        language="bash"
        title="find com datas e ações"
      />

      <h2>locate — Busca Rápida por Banco de Dados</h2>
      <CodeBlock
        code={`# Instalar o plocate (mais rápido que o locate clássico)
sudo dnf install plocate

# Atualizar o banco de dados (necessário antes do primeiro uso)
sudo updatedb

# Busca simples (instantânea)
locate dnf.conf

# Ignorar maiúsculas/minúsculas
locate -i readme

# Limitar número de resultados
locate -l 10 "*.conf"

# Contar quantos resultados existem
locate -c ".log"

# Mostrar apenas arquivos que ainda existem no disco
locate -e "bashrc"

# Usar regex
locate -r "/etc/.*\\.conf$"

# Atualizar banco de dados automaticamente (timer do systemd)
sudo systemctl enable --now plocate-updatedb.timer`}
        language="bash"
        title="locate"
      />

      <AlertBox type="info" title="find vs locate">
        Use <code>locate</code> quando quiser velocidade (banco pré-indexado). Use <code>find</code> quando precisar de buscas em tempo real com critérios avançados (tamanho, data, permissão, ações).
      </AlertBox>

      <h2>which e whereis — Encontrando Executáveis</h2>
      <CodeBlock
        code={`# which — mostra o caminho do executável que será rodado
which dnf
# /usr/bin/dnf

which python3
# /usr/bin/python3

# Se o comando não existe (sem saída, exit code 1)
which programa_inexistente

# whereis — binário, código-fonte e manual
whereis dnf
# dnf: /usr/bin/dnf /usr/share/man/man8/dnf.8.gz

# type — o que o shell vai executar (alias, função, builtin ou arquivo)
type ls
# ls is aliased to 'ls --color=auto'

type cd
# cd is a shell builtin`}
        language="bash"
        title="which, whereis, type"
      />

      <h2>Referência Rápida</h2>
      <CodeBlock
        code={`# NAVEGAÇÃO
pwd                  # Onde estou?
cd /caminho          # Ir para caminho absoluto
cd pasta             # Entrar em pasta (relativo)
cd ..                # Subir um nível
cd ~                 # Ir para home
cd -                 # Voltar ao diretório anterior

# LISTAGEM
ls                   # Listar arquivos
ls -lah              # Listagem completa (a mais usada)
ls -lhS              # Ordenar por tamanho
tree -L 2            # Árvore de 2 níveis

# BUSCA
find . -name "*.txt"         # Buscar por nome
find . -size +100M           # Buscar por tamanho
find . -mtime -7             # Modificados em 7 dias
locate arquivo.conf          # Busca rápida no banco
which comando                # Caminho do executável`}
        language="bash"
        title="referência rápida"
      />
    </PageContainer>
  );
}
