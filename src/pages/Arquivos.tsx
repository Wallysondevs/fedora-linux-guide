import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { FolderOpen, HardDrive } from "lucide-react";

export default function Arquivos() {
  return (
    <PageContainer
      title="Sistema de Arquivos"
      subtitle="Entenda a estrutura de diretórios do Linux, manipule arquivos e gerencie permissões de forma eficiente."
      difficulty="iniciante"
      timeToRead="25 min"
    >
      <h2><FolderOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura de Diretórios do Linux</h2>
      <p>O Linux segue o padrão <strong>FHS</strong> (Filesystem Hierarchy Standard). Tudo começa na raiz <code>/</code>:</p>
      <table>
        <thead><tr><th>Diretório</th><th>Função</th></tr></thead>
        <tbody>
          <tr><td><code>/</code></td><td>Raiz — tudo começa aqui</td></tr>
          <tr><td><code>/bin</code></td><td>Comandos essenciais (ls, cp, mv...)</td></tr>
          <tr><td><code>/boot</code></td><td>Arquivos de boot e kernel</td></tr>
          <tr><td><code>/dev</code></td><td>Dispositivos de hardware (disco, USB...)</td></tr>
          <tr><td><code>/etc</code></td><td>Arquivos de configuração do sistema</td></tr>
          <tr><td><code>/home</code></td><td>Diretórios pessoais dos usuários</td></tr>
          <tr><td><code>/lib</code></td><td>Bibliotecas do sistema</td></tr>
          <tr><td><code>/mnt</code></td><td>Ponto de montagem temporário</td></tr>
          <tr><td><code>/opt</code></td><td>Softwares de terceiros</td></tr>
          <tr><td><code>/proc</code></td><td>Informações de processos (virtual)</td></tr>
          <tr><td><code>/root</code></td><td>Home do usuário root</td></tr>
          <tr><td><code>/run</code></td><td>Dados de runtime dos serviços</td></tr>
          <tr><td><code>/sbin</code></td><td>Comandos de administração</td></tr>
          <tr><td><code>/srv</code></td><td>Dados de serviços (web, FTP)</td></tr>
          <tr><td><code>/sys</code></td><td>Informações do kernel (virtual)</td></tr>
          <tr><td><code>/tmp</code></td><td>Arquivos temporários (limpo no boot)</td></tr>
          <tr><td><code>/usr</code></td><td>Programas de usuário</td></tr>
          <tr><td><code>/var</code></td><td>Dados variáveis (logs, banco de dados)</td></tr>
        </tbody>
      </table>

      <h2>Operações com Arquivos e Diretórios</h2>
      <CodeBlock
        code={`# Criar diretórios
mkdir pasta
mkdir -p pasta/subpasta/subsubpasta   # cria toda a hierarquia

# Copiar
cp arquivo.txt destino/
cp -r pasta/ destino/                  # copiar pasta recursivamente
cp -p arquivo.txt destino/             # preservar permissões e data

# Mover e renomear
mv arquivo.txt novo-nome.txt           # renomear
mv arquivo.txt /outro/caminho/         # mover
mv -i arquivo.txt destino/             # pedir confirmação se sobrescrever

# Remover
rm arquivo.txt
rm -r pasta/                           # remover pasta recursivamente
rm -rf pasta/                          # forçar (sem confirmação)
rm -i arquivo.txt                      # pedir confirmação

# Criar arquivo vazio
touch arquivo.txt
touch arquivo{1..5}.txt               # criar múltiplos: arquivo1.txt ... arquivo5.txt`}
        language="bash"
        title="manipulação de arquivos"
      />

      <h2>Visualização de Arquivos</h2>
      <CodeBlock
        code={`# Mostrar conteúdo
cat arquivo.txt
cat -n arquivo.txt         # com números de linha

# Paginação
less arquivo.txt           # navegação interativa (q para sair)
more arquivo.txt           # apenas para frente

# Primeiras e últimas linhas
head -n 20 arquivo.txt     # primeiras 20 linhas
tail -n 20 arquivo.txt     # últimas 20 linhas
tail -f /var/log/syslog    # monitorar em tempo real

# Contar linhas, palavras e caracteres
wc -l arquivo.txt          # linhas
wc -w arquivo.txt          # palavras
wc -c arquivo.txt          # caracteres`}
        language="bash"
        title="visualização"
      />

      <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Uso de Disco</h2>
      <CodeBlock
        code={`# Espaço disponível no sistema
df -h

# Tamanho de diretórios e arquivos
du -sh pasta/              # tamanho total da pasta
du -sh *                   # tamanho de cada item no diretório atual
du -sh /* 2>/dev/null      # tamanho de cada diretório raiz

# Top 10 maiores arquivos/diretórios
du -ah / 2>/dev/null | sort -rh | head -10

# Ver dispositivos montados
lsblk
mount | grep "^/dev"
findmnt`}
        language="bash"
        title="uso de disco"
      />

      <h2>Links Simbólicos e Hard Links</h2>
      <CodeBlock
        code={`# Criar link simbólico (symlink — como um atalho)
ln -s /caminho/original /caminho/link

# Exemplos práticos
ln -s /usr/local/bin/python3 /usr/local/bin/python
ln -s ~/Documentos/projetos ~/projetos   # atalho para pasta

# Criar hard link
ln arquivo-original.txt hard-link.txt

# Ver onde um symlink aponta
ls -la link
readlink -f link`}
        language="bash"
        title="links"
      />

      <AlertBox type="info" title="Tudo é arquivo no Linux">
        No Linux, praticamente tudo é representado como arquivo — dispositivos (<code>/dev/sda</code>), processos (<code>/proc/1234</code>), configurações (<code>/etc/hosts</code>) e sockets de rede. Isso torna o sistema extremamente consistente e previsível.
      </AlertBox>
    </PageContainer>
  );
}
