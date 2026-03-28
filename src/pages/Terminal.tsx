import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Terminal as TermIcon, Zap, Settings } from "lucide-react";

export default function Terminal() {
  return (
    <PageContainer
      title="Terminal e Bash"
      subtitle="Domine o terminal Linux — shell Bash, atalhos, customização e dicas para aumentar sua produtividade."
      difficulty="intermediario"
      timeToRead="60 min"
    >
      <h2><TermIcon className="inline-block mr-2 mb-1 w-5 h-5" /> O Shell Bash</h2>
      <p>
        O <strong>Bash</strong> (Bourne Again SHell) é o shell padrão no Fedora. É a interface de linha de comando que interpreta seus comandos e scripts.
      </p>

      <h2>Atalhos do Terminal</h2>
      <table>
        <thead><tr><th>Atalho</th><th>Ação</th></tr></thead>
        <tbody>
          <tr><td><code>Ctrl + C</code></td><td>Cancelar comando em execução</td></tr>
          <tr><td><code>Ctrl + Z</code></td><td>Suspender processo (para em background)</td></tr>
          <tr><td><code>Ctrl + D</code></td><td>Sair do terminal (EOF)</td></tr>
          <tr><td><code>Ctrl + L</code></td><td>Limpar a tela (igual a clear)</td></tr>
          <tr><td><code>Ctrl + A</code></td><td>Ir ao início da linha</td></tr>
          <tr><td><code>Ctrl + E</code></td><td>Ir ao fim da linha</td></tr>
          <tr><td><code>Ctrl + U</code></td><td>Apagar do cursor até o início</td></tr>
          <tr><td><code>Ctrl + K</code></td><td>Apagar do cursor até o fim</td></tr>
          <tr><td><code>Ctrl + R</code></td><td>Buscar no histórico de comandos</td></tr>
          <tr><td><code>Tab</code></td><td>Autocompletar</td></tr>
          <tr><td><code>↑ / ↓</code></td><td>Navegar no histórico</td></tr>
        </tbody>
      </table>

      <h2>Variáveis de Ambiente</h2>
      <CodeBlock
        code={`# Ver todas as variáveis de ambiente
env
printenv

# Ver uma variável específica
echo $HOME
echo $PATH
echo $USER
echo $SHELL

# Definir uma variável (somente para a sessão atual)
NOME="Fedora"
echo $NOME

# Exportar variável (disponível para processos filhos)
export EDITOR="vim"

# Adicionar ao PATH permanentemente (edite ~/.bashrc)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc`}
        language="bash"
        title="variáveis de ambiente"
      />

      <h2>Redirecionamento e Pipes</h2>
      <CodeBlock
        code={`# Redirecionar saída para arquivo (sobrescrever)
ls -la > lista.txt

# Redirecionar saída para arquivo (adicionar/append)
echo "nova linha" >> arquivo.txt

# Redirecionar erros
comando 2> erros.txt

# Redirecionar saída e erros
comando > saida.txt 2>&1
comando &> tudo.txt       # forma abreviada

# Pipe — passar saída de um comando para outro
ls -la | grep ".txt"
cat arquivo.txt | sort | uniq | wc -l
ps aux | grep firefox`}
        language="bash"
        title="redirecionamento"
      />

      <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Aliases e Funções</h2>
      <CodeBlock
        code={`# Criar um alias (somente para a sessão atual)
alias ll='ls -la'
alias gs='git status'
alias update='sudo dnf update -y'

# Para tornar permanentes, adicione ao ~/.bashrc
echo "alias ll='ls -la'" >> ~/.bashrc
echo "alias update='sudo dnf update -y'" >> ~/.bashrc

# Recarregar o .bashrc
source ~/.bashrc

# Criar uma função no .bashrc
mkcd() {
  mkdir -p "$1" && cd "$1"
}`}
        language="bash"
        title="aliases"
      />

      <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Customizando o Bash (.bashrc)</h2>
      <CodeBlock
        code={`# Editar o arquivo de configuração do bash
nano ~/.bashrc

# Exemplo de um ~/.bashrc útil:

# Aliases essenciais
alias ll='ls -la --color=auto'
alias la='ls -A --color=auto'
alias l='ls -CF --color=auto'
alias grep='grep --color=auto'
alias update='sudo dnf update -y'
alias install='sudo dnf install'
alias ports='ss -tulpn'

# Prompt colorido personalizado
export PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '

# Histórico maior
export HISTSIZE=10000
export HISTFILESIZE=20000

# Carregar alterações
source ~/.bashrc`}
        language="bash"
        title="~/.bashrc"
      />

      <h2>Comandos de Busca</h2>
      <CodeBlock
        code={`# Encontrar arquivos por nome
find /home -name "*.txt"
find / -name "nginx.conf" 2>/dev/null

# Encontrar com tipo
find . -type f -name "*.log"   # apenas arquivos
find . -type d -name "tmp"     # apenas diretórios

# Encontrar por data (modificados nos últimos 7 dias)
find . -mtime -7

# Buscar conteúdo dentro de arquivos
grep -r "palavra" /pasta/
grep -ri "fedora" /etc/          # case-insensitive
grep -rn "erro" /var/log/        # com número de linha

# Usar ripgrep (mais rápido que grep)
sudo dnf install ripgrep
rg "palavra" /pasta/`}
        language="bash"
        title="busca"
      />

      <h2>Processamento de Texto</h2>
      <p>O Linux tem ferramentas poderosas para processar texto diretamente no terminal — muito úteis para analisar logs, extrair dados e transformar arquivos.</p>

      <h3>sort, uniq, wc — Ordenar, filtrar e contar</h3>
      <CodeBlock
        code={`# Ordenar linhas de um arquivo (alfabético)
sort arquivo.txt

# Ordenar numericamente
sort -n numeros.txt

# Ordenar em ordem reversa
sort -r arquivo.txt

# Ordenar por coluna específica (campo 3, separador vírgula)
sort -t',' -k3 -n arquivo.csv

# Remover linhas duplicadas (o arquivo precisa estar ordenado)
sort arquivo.txt | uniq

# Contar ocorrências de cada linha
sort arquivo.txt | uniq -c | sort -rn

# Mostrar apenas duplicatas
sort arquivo.txt | uniq -d

# Mostrar apenas únicas
sort arquivo.txt | uniq -u

# Contar linhas, palavras e caracteres
wc arquivo.txt
wc -l arquivo.txt     # só linhas
wc -w arquivo.txt     # só palavras
wc -c arquivo.txt     # só bytes`}
        language="bash"
        title="sort, uniq, wc"
      />

      <h3>cut e paste — Extrair e combinar colunas</h3>
      <CodeBlock
        code={`# Extrair campo/coluna de texto (separador: vírgula)
cut -d',' -f1 arquivo.csv         # primeira coluna
cut -d',' -f1,3 arquivo.csv       # colunas 1 e 3
cut -d':' -f1 /etc/passwd         # nomes de usuário

# Extrair por posição de caractere
cut -c1-10 arquivo.txt            # primeiros 10 caracteres
cut -c5- arquivo.txt              # do 5º caractere até o fim

# Combinar dois arquivos coluna a coluna
paste arquivo1.txt arquivo2.txt
paste -d',' arquivo1.txt arquivo2.txt   # separador vírgula`}
        language="bash"
        title="cut e paste"
      />

      <h3>sed — Editor de Fluxo (substituição e edição)</h3>
      <CodeBlock
        code={`# Substituir texto (só a primeira ocorrência por linha)
sed 's/velho/novo/' arquivo.txt

# Substituir TODAS as ocorrências (flag g = global)
sed 's/velho/novo/g' arquivo.txt

# Substituir sem diferenciar maiúsculas
sed 's/velho/novo/gi' arquivo.txt

# Editar o arquivo diretamente (in-place)
sed -i 's/velho/novo/g' arquivo.txt

# Fazer backup antes de editar
sed -i.bak 's/velho/novo/g' arquivo.txt  # cria arquivo.txt.bak

# Remover linhas vazias
sed '/^$/d' arquivo.txt

# Remover comentários (linhas que começam com #)
sed '/^#/d' arquivo.txt

# Mostrar apenas linhas de 5 a 10
sed -n '5,10p' arquivo.txt

# Adicionar texto no início de cada linha
sed 's/^/PREFIXO: /' arquivo.txt

# Adicionar texto no fim de cada linha
sed 's/$/ SUFIXO/' arquivo.txt`}
        language="bash"
        title="sed"
      />

      <h3>awk — Processamento avançado de texto</h3>
      <CodeBlock
        code={`# Sintaxe básica: awk '{ação}' arquivo
# $1, $2... = colunas; NR = número da linha; NF = número de campos

# Imprimir a primeira coluna
awk '{print $1}' arquivo.txt

# Imprimir colunas 1 e 3
awk '{print $1, $3}' arquivo.txt

# Separador de campos personalizado (vírgula)
awk -F',' '{print $2}' arquivo.csv

# Filtrar linhas onde a 3ª coluna é maior que 100
awk '$3 > 100 {print}' dados.txt

# Somar todos os valores da 2ª coluna
awk '{soma += $2} END {print soma}' dados.txt

# Imprimir número da linha + conteúdo
awk '{print NR": "$0}' arquivo.txt

# Exemplo real: listar usuários e shells do /etc/passwd
awk -F':' '{print $1, $7}' /etc/passwd`}
        language="bash"
        title="awk"
      />

      <h3>tr — Traduzir/substituir caracteres</h3>
      <CodeBlock
        code={`# Converter minúsculas para maiúsculas
echo "fedora linux" | tr '[:lower:]' '[:upper:]'

# Remover caracteres específicos
echo "olá mundo!" | tr -d '!'

# Substituir espaços por tabs
echo "um dois três" | tr ' ' '\\t'

# Remover caracteres repetidos
echo "feeeedoooraaaa" | tr -s 'aeiou'`}
        language="bash"
        title="tr"
      />

      <h2>Compressão e Arquivos Compactados</h2>
      <CodeBlock
        code={`# tar — o mais usado no Linux
# Criar um arquivo .tar.gz (comprimido com gzip)
tar -czf backup.tar.gz pasta/
tar -czf backup.tar.gz arquivo1 arquivo2

# Extrair um .tar.gz
tar -xzf backup.tar.gz
tar -xzf backup.tar.gz -C /destino/  # extrair em pasta específica

# Listar conteúdo sem extrair
tar -tzf backup.tar.gz

# Criar .tar.bz2 (melhor compressão, mais lento)
tar -cjf backup.tar.bz2 pasta/

# Criar .tar.xz (melhor compressão ainda)
tar -cJf backup.tar.xz pasta/

# Ver progresso da compressão
tar -czf backup.tar.gz pasta/ --checkpoint=100 --checkpoint-action=dot

# Flags do tar explicadas:
# -c = create (criar)
# -x = extract (extrair)
# -t = list (listar)
# -z = gzip
# -j = bzip2
# -J = xz
# -f = file (especificar o arquivo)
# -v = verbose (mostrar o que está sendo feito)
# -C = change directory (pasta de destino)

# gzip / gunzip
gzip arquivo.txt           # cria arquivo.txt.gz, remove o original
gunzip arquivo.txt.gz      # descomprime
gzip -k arquivo.txt        # mantém o arquivo original (-k = keep)
gzip -9 arquivo.txt        # máxima compressão

# zip / unzip (compatível com Windows)
zip arquivo.zip pasta/
zip -r arquivo.zip pasta/  # recursivo (para diretórios)
unzip arquivo.zip
unzip arquivo.zip -d /destino/

# xz
xz arquivo.txt             # melhor compressão, mais lento
xz -d arquivo.txt.xz       # descomprimir`}
        language="bash"
        title="compressão"
      />

      <h2>Editores de Texto no Terminal</h2>
      <h3>nano — Mais fácil para iniciantes</h3>
      <CodeBlock
        code={`# Abrir ou criar arquivo com nano
nano arquivo.txt

# Atalhos do nano (^ = Ctrl, M = Alt):
# Ctrl + O   = salvar (Write Out)
# Ctrl + X   = sair
# Ctrl + W   = buscar (Where Is)
# Ctrl + \\   = buscar e substituir
# Ctrl + K   = cortar linha
# Ctrl + U   = colar linha
# Ctrl + G   = ajuda completa
# Ctrl + A   = ir ao início da linha
# Ctrl + E   = ir ao fim da linha
# Alt + U    = desfazer
# Alt + E    = refazer`}
        language="bash"
        title="nano"
      />

      <h3>vim — Editor profissional (modos de operação)</h3>
      <CodeBlock
        code={`# Abrir arquivo com vim
vim arquivo.txt

# O vim tem modos:
# NORMAL    = padrão ao abrir. Navegação e comandos
# INSERT    = para digitar texto (pressione i, a, o)
# VISUAL    = para selecionar texto (pressione v)
# COMMAND   = para executar comandos (pressione :)

# Entrando no modo Insert (edição):
i    # inserir antes do cursor
a    # inserir depois do cursor
o    # nova linha abaixo
O    # nova linha acima
I    # inserir no início da linha
A    # inserir no fim da linha

# Voltando ao modo Normal: Esc

# Comandos no modo Normal:
h j k l    # mover: esquerda, baixo, cima, direita
w          # palavra seguinte
b          # palavra anterior
0          # início da linha
$          # fim da linha
gg         # início do arquivo
G          # fim do arquivo
dd         # deletar linha inteira
yy         # copiar linha (yank)
p          # colar abaixo
u          # desfazer
Ctrl + r   # refazer
/palavra   # buscar
n          # próxima ocorrência

# Comandos com : (modo command):
:w         # salvar
:q         # sair (só se não houver mudanças)
:wq        # salvar e sair
:q!        # sair sem salvar (forçar)
:wq!       # salvar e sair (forçar)
:set nu    # mostrar números de linha
:%s/velho/novo/g   # substituir em todo o arquivo`}
        language="bash"
        title="vim"
      />

      <h2>xargs — Construir Comandos a partir de Entradas</h2>
      <CodeBlock
        code={`# xargs pega saída de um comando e passa como argumento para outro

# Remover todos os arquivos .log encontrados
find /var/log -name "*.log" | xargs rm

# Contar linhas de vários arquivos
find . -name "*.txt" | xargs wc -l

# Executar com múltiplos argumentos de uma vez (-n = itens por execução)
cat lista-de-pacotes.txt | xargs -n 1 sudo dnf install

# Executar em paralelo (-P = número de processos)
find . -name "*.jpg" | xargs -P 4 -I{} convert {} {}.png

# Usar com espaços nos nomes de arquivo (separar por null byte)
find . -name "*.txt" -print0 | xargs -0 rm

# Pedir confirmação antes de executar
find . -name "*.tmp" | xargs -p rm`}
        language="bash"
        title="xargs"
      />

      <AlertBox type="info" title="Instale o Zsh + Oh My Zsh">
        O <strong>Zsh</strong> é um shell mais poderoso que o Bash, com autocompletar avançado e suporte a plugins. Com o <strong>Oh My Zsh</strong>, a customização é ainda mais simples. <code>sudo dnf install zsh && chsh -s /bin/zsh</code>
      </AlertBox>
    </PageContainer>
  );
}
