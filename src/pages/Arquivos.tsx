import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { FolderOpen, Search, HardDrive, FileText, Archive, Settings } from "lucide-react";

  export default function Arquivos() {
    return (
      <PageContainer
        title="Sistema de Arquivos"
        subtitle="Navegue, organize e manipule arquivos no Fedora — FHS, comandos essenciais, busca, compactação e redirecionamento."
        difficulty="iniciante"
        timeToRead="35 min"
      >
        <h2><FolderOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura de Diretórios (FHS)</h2>
        <p>
          O Linux segue o <strong>FHS (Filesystem Hierarchy Standard)</strong> — uma estrutura padronizada de diretórios. Entender essa estrutura é fundamental para administrar o sistema.
        </p>
        <table>
          <thead><tr><th>Diretório</th><th>Conteúdo</th><th>Exemplos</th></tr></thead>
          <tbody>
            <tr><td><code>/</code></td><td>Raiz do sistema (tudo começa aqui)</td><td>—</td></tr>
            <tr><td><code>/bin</code></td><td>Binários essenciais do sistema</td><td>ls, cp, mv, bash</td></tr>
            <tr><td><code>/sbin</code></td><td>Binários de administração (root)</td><td>fdisk, iptables, mount</td></tr>
            <tr><td><code>/usr</code></td><td>Programas e bibliotecas do usuário</td><td>/usr/bin, /usr/lib, /usr/share</td></tr>
            <tr><td><code>/etc</code></td><td>Arquivos de configuração do sistema</td><td>/etc/fstab, /etc/hostname</td></tr>
            <tr><td><code>/home</code></td><td>Diretórios home dos usuários</td><td>/home/joao, /home/maria</td></tr>
            <tr><td><code>/root</code></td><td>Diretório home do root</td><td>—</td></tr>
            <tr><td><code>/var</code></td><td>Dados variáveis (logs, cache, spool)</td><td>/var/log, /var/cache</td></tr>
            <tr><td><code>/tmp</code></td><td>Arquivos temporários (limpo no boot)</td><td>—</td></tr>
            <tr><td><code>/opt</code></td><td>Software de terceiros</td><td>/opt/google/chrome</td></tr>
            <tr><td><code>/dev</code></td><td>Dispositivos (discos, USB, etc.)</td><td>/dev/sda, /dev/null</td></tr>
            <tr><td><code>/proc</code></td><td>Info de processos e kernel (virtual)</td><td>/proc/cpuinfo, /proc/meminfo</td></tr>
            <tr><td><code>/sys</code></td><td>Info de hardware e kernel (virtual)</td><td>/sys/class/net</td></tr>
            <tr><td><code>/mnt</code></td><td>Montagem temporária manual</td><td>/mnt/usb</td></tr>
            <tr><td><code>/media</code></td><td>Montagem automática de mídia</td><td>/media/joao/pendrive</td></tr>
            <tr><td><code>/boot</code></td><td>Kernel e bootloader</td><td>vmlinuz, initramfs, grub</td></tr>
            <tr><td><code>/srv</code></td><td>Dados de serviços (web, FTP)</td><td>/srv/www</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="No Fedora, /bin e /sbin são links">
          No Fedora (e distros modernas), <code>/bin</code> é um link para <code>/usr/bin</code> e <code>/sbin</code> é um link para <code>/usr/sbin</code>. Isso se chama <strong>UsrMerge</strong> — simplifica a estrutura do sistema.
        </AlertBox>

        <h2>Navegação Básica</h2>
        <CodeBlock
          code={`# Onde estou?
  pwd
  # /home/joao

  # Listar conteúdo do diretório
  ls                    # básico
  ls -l                 # detalhado (permissões, tamanho, data)
  ls -la                # incluir arquivos ocultos (começam com .)
  ls -lh                # tamanhos legíveis (KB, MB, GB)
  ls -lt                # ordenar por data de modificação
  ls -lS                # ordenar por tamanho
  ls -R                 # recursivo (subdiretórios)

  # Navegar entre diretórios
  cd /etc               # caminho absoluto
  cd documentos         # caminho relativo
  cd ~                  # ir para home
  cd -                  # voltar para diretório anterior
  cd ..                 # subir um nível
  cd ../..              # subir dois níveis

  # Árvore de diretórios
  tree                  # árvore visual (sudo dnf install tree)
  tree -L 2             # limitar a 2 níveis
  tree -d               # apenas diretórios`}
          language="bash"
          title="navegação"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Manipulando Arquivos e Diretórios</h2>
        <CodeBlock
          code={`# Criar arquivos
  touch arquivo.txt                 # arquivo vazio
  echo "conteúdo" > arquivo.txt     # criar com conteúdo (sobrescreve)
  echo "mais" >> arquivo.txt        # adicionar ao final (append)

  # Criar diretórios
  mkdir pasta
  mkdir -p pasta/sub1/sub2          # criar toda a hierarquia

  # Copiar
  cp arquivo.txt copia.txt          # copiar arquivo
  cp -r pasta/ pasta-backup/        # copiar diretório recursivamente
  cp -i arquivo.txt destino/        # pedir confirmação se existir
  cp -p arquivo.txt destino/        # preservar permissões e timestamps

  # Mover / Renomear
  mv arquivo.txt novo-nome.txt      # renomear
  mv arquivo.txt /tmp/              # mover
  mv -i origem destino              # pedir confirmação

  # Remover
  rm arquivo.txt                    # remover arquivo
  rm -i arquivo.txt                 # pedir confirmação
  rm -r pasta/                      # remover diretório recursivamente
  rm -rf pasta/                     # forçar (SEM confirmação — CUIDADO!)

  # Links
  ln -s /caminho/original link      # link simbólico (atalho)
  ln /caminho/original hardlink     # hard link (mesmo inode)
  readlink -f link                  # ver destino de um link

  # Visualizar conteúdo
  cat arquivo.txt                   # mostrar tudo
  less arquivo.txt                  # paginador (q para sair)
  head -20 arquivo.txt              # primeiras 20 linhas
  tail -20 arquivo.txt              # últimas 20 linhas
  tail -f /var/log/messages         # seguir em tempo real
  wc -l arquivo.txt                 # contar linhas`}
          language="bash"
          title="manipulação de arquivos"
        />

        <AlertBox type="danger" title="Cuidado com rm -rf">
          O comando <code>rm -rf</code> remove tudo sem perguntar e sem lixeira. Nunca use <code>rm -rf /</code> ou <code>rm -rf ~</code>. Para mais segurança, instale <code>trash-cli</code> e use <code>trash</code> ao invés de <code>rm</code>.
        </AlertBox>

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Buscando Arquivos</h2>
        <CodeBlock
          code={`# find — busca completa
  find /home -name "*.txt"                  # por nome
  find /home -name "*.txt" -type f          # apenas arquivos
  find /home -name "*.txt" -type d          # apenas diretórios
  find /home -iname "*.PDF"                 # case-insensitive
  find /home -size +100M                    # maiores que 100MB
  find /home -mtime -7                      # modificados nos últimos 7 dias
  find /home -mmin -60                      # modificados na última hora
  find /home -user joao                     # por dono
  find /home -perm 755                      # por permissão
  find /home -empty                         # arquivos/pastas vazias
  find /tmp -name "*.log" -delete           # encontrar e deletar

  # find + exec (executar comando em cada resultado)
  find /home -name "*.tmp" -exec rm {} \;
  find /home -name "*.jpg" -exec cp {} /backup/ \;

  # find + xargs (mais eficiente para muitos resultados)
  find /home -name "*.log" | xargs wc -l
  find /home -name "*.bak" | xargs rm

  # fd — alternativa moderna ao find (mais rápida)
  sudo dnf install fd-find
  fd "*.py"                                 # buscar por extensão
  fd -e tsx src/                            # buscar .tsx em src/
  fd -H ".bashrc"                           # incluir ocultos
  fd --size +1m                             # maiores que 1MB

  # locate — busca instantânea (usa índice)
  sudo dnf install mlocate
  sudo updatedb                             # atualizar índice
  locate firefox.desktop                    # busca instantânea

  # grep — buscar conteúdo DENTRO de arquivos
  grep "erro" /var/log/messages             # buscar texto
  grep -r "TODO" src/                       # recursivo em diretório
  grep -rn "import" src/                    # com número da linha
  grep -ri "password" /etc/                 # case-insensitive
  grep -l "pattern" *.py                    # apenas nomes dos arquivos
  grep -c "error" log.txt                   # contar ocorrências
  grep -v "debug" log.txt                   # linhas que NÃO contêm

  # ripgrep — grep moderno e muito mais rápido
  sudo dnf install ripgrep
  rg "TODO" src/
  rg -t py "def main"                       # filtrar por tipo
  rg -i "error" --glob "*.log"              # case-insensitive + filtro`}
          language="bash"
          title="busca de arquivos"
        />

        <h2>Redirecionamento e Pipes</h2>
        <CodeBlock
          code={`# Redirecionamento de saída
  comando > arquivo.txt         # sobrescreve
  comando >> arquivo.txt        # append (adiciona ao final)
  comando 2> erros.txt          # redirecionar stderr
  comando > saida.txt 2>&1      # stdout e stderr no mesmo arquivo
  comando &> tudo.txt           # atalho para o acima

  # /dev/null — "buraco negro" (descarta saída)
  comando > /dev/null 2>&1      # silenciar completamente

  # Pipes — conectar saída de um comando à entrada de outro
  ls -la | less                 # paginar lista longa
  ps aux | grep firefox         # filtrar processos
  cat log.txt | sort | uniq     # linhas únicas ordenadas
  history | grep dnf | tail -5  # últimos 5 comandos com "dnf"

  # Comandos úteis com pipes
  sort arquivo.txt              # ordenar
  sort -n                       # ordenar numericamente
  sort -r                       # ordem reversa
  uniq                          # remover duplicatas adjacentes
  sort | uniq -c                # contar duplicatas
  cut -d: -f1 /etc/passwd       # extrair campo (delimitador :)
  awk '{print $1, $3}' file     # extrair colunas
  sed 's/antigo/novo/g' file    # substituir texto
  tr 'a-z' 'A-Z' < file        # converter maiúsculas
  tee arquivo.txt               # mostrar e salvar ao mesmo tempo
  ls | tee lista.txt            # ver saída E salvar`}
          language="bash"
          title="redirecionamento e pipes"
        />

        <h2><Archive className="inline-block mr-2 mb-1 w-5 h-5" /> Compactação e Descompactação</h2>
        <CodeBlock
          code={`# tar (empacotamento + compressão)
  tar czf backup.tar.gz pasta/         # compactar com gzip
  tar cjf backup.tar.bz2 pasta/       # compactar com bzip2
  tar cJf backup.tar.xz pasta/        # compactar com xz (menor)
  tar xzf backup.tar.gz               # extrair gzip
  tar xjf backup.tar.bz2              # extrair bzip2
  tar xJf backup.tar.xz               # extrair xz
  tar tf backup.tar.gz                 # listar conteúdo
  tar xzf backup.tar.gz -C /destino/  # extrair em diretório

  # zip/unzip
  zip -r backup.zip pasta/            # compactar
  unzip backup.zip                     # extrair
  unzip -l backup.zip                  # listar conteúdo
  unzip backup.zip -d /destino/       # extrair em diretório

  # gzip / bzip2 / xz (arquivo único)
  gzip arquivo.txt                     # compacta → arquivo.txt.gz
  gunzip arquivo.txt.gz               # descompacta

  # Comparação de compressão
  # gzip  → rápido, compressão moderada
  # bzip2 → mais lento, melhor compressão
  # xz    → mais lento ainda, melhor compressão
  # zstd  → rápido E boa compressão (recomendado)`}
          language="bash"
          title="compactação"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Discos e Montagem</h2>
        <CodeBlock
          code={`# Ver discos e partições
  lsblk
  # NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
  # sda      8:0    0   500G  0 disk
  # ├─sda1   8:1    0   600M  0 part /boot/efi
  # ├─sda2   8:2    0     1G  0 part /boot
  # └─sda3   8:3    0 498.4G  0 part /home

  # Uso de disco
  df -h                       # espaço livre por partição
  du -sh /home/joao           # tamanho de um diretório
  du -sh /home/joao/*         # tamanho de cada item
  ncdu /                      # navegação interativa

  # Montar partição/pendrive
  sudo mount /dev/sdb1 /mnt/usb
  sudo mount -t ntfs-3g /dev/sdb1 /mnt/windows    # partição NTFS

  # Desmontar
  sudo umount /mnt/usb

  # Montagem automática (editar /etc/fstab)
  # UUID=xxxx-xxxx  /mnt/dados  ext4  defaults  0  2

  # Ver UUID das partições
  blkid
  sudo lsblk -f

  # Verificar tipo de filesystem
  df -T
  file -s /dev/sda1`}
          language="bash"
          title="discos e montagem"
        />

        <h2>Dispositivos Especiais</h2>
        <table>
          <thead><tr><th>Dispositivo</th><th>Função</th><th>Uso Comum</th></tr></thead>
          <tbody>
            <tr><td><code>/dev/null</code></td><td>Descarta tudo que recebe</td><td>Silenciar saída: <code>cmd > /dev/null</code></td></tr>
            <tr><td><code>/dev/zero</code></td><td>Produz zeros infinitos</td><td>Zerar disco: <code>dd if=/dev/zero</code></td></tr>
            <tr><td><code>/dev/urandom</code></td><td>Números pseudo-aleatórios</td><td>Gerar senha: <code>head -c 32 /dev/urandom | base64</code></td></tr>
            <tr><td><code>/dev/sda</code></td><td>Primeiro disco SATA/SCSI</td><td>Particionamento</td></tr>
            <tr><td><code>/dev/nvme0n1</code></td><td>Primeiro disco NVMe (SSD)</td><td>Particionamento</td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  