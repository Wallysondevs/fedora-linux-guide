import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { GitMerge, ArrowRight, Filter, Terminal, Zap, Settings } from "lucide-react";

  export default function Pipes() {
    return (
      <PageContainer
        title="Pipes e Redirecionamento"
        subtitle="Combine comandos com pipes (|), redirecione saída para arquivos e construa fluxos de trabalho poderosos no terminal."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><GitMerge className="inline-block mr-2 mb-1 w-5 h-5" /> A Filosofia Unix</h2>
        <p>
          O Linux segue a filosofia Unix: <strong>cada comando faz uma coisa e faz bem</strong>. A força real vem de combinar comandos simples com pipes e redirecionamento. Com isso, você resolve problemas complexos com uma linha no terminal.
        </p>

        <h3>Entendendo os fluxos de dados</h3>
        <p>Todo comando no Linux tem três fluxos de dados padrão:</p>
        <table>
          <thead><tr><th>Fluxo</th><th>Número</th><th>Nome</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><strong>stdin</strong></td><td>0</td><td>Standard Input</td><td>Entrada de dados (teclado por padrão)</td></tr>
            <tr><td><strong>stdout</strong></td><td>1</td><td>Standard Output</td><td>Saída normal (tela por padrão)</td></tr>
            <tr><td><strong>stderr</strong></td><td>2</td><td>Standard Error</td><td>Mensagens de erro (tela por padrão)</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="A fórmula mágica">
          <code>comando1 | comando2 | comando3</code> — a saída (stdout) de um vira a entrada (stdin) do próximo. Cada comando processa e passa adiante.
        </AlertBox>

        <h2><ArrowRight className="inline-block mr-2 mb-1 w-5 h-5" /> Pipes ( | )</h2>
        <p>
          O pipe <code>|</code> conecta a <strong>saída padrão</strong> (stdout) de um comando à <strong>entrada padrão</strong> (stdin) do próximo.
        </p>
        <CodeBlock
          code={`# Listar arquivos e filtrar apenas os .txt
  ls -la | grep '.txt'

  # Contar quantos processos estão rodando
  ps aux | wc -l

  # Ver quais serviços estão ativos, ordenados
  systemctl list-units --state=active | sort

  # Listar os 10 arquivos/dirs maiores no diretório atual
  du -sh * | sort -rh | head -10

  # Ver log do sistema com filtro de erro
  journalctl -b | grep -i error | tail -20

  # Contar quantas vezes "dnf" aparece no histórico
  history | grep -c dnf

  # Encontrar pacotes instalados que contêm "python"
  dnf list installed | grep python

  # Combinar vários filtros
  cat /etc/passwd | cut -d':' -f1 | sort | head -15

  # Paginação de saída longa
  dnf list installed | less`}
          language="bash"
          title="pipes básicos"
        />

        <h2>Redirecionamento de Saída ( &gt; e &gt;&gt; )</h2>
        <CodeBlock
          code={`# > sobrescreve o arquivo (CUIDADO — apaga conteúdo anterior!)
  echo "Linha 1" > arquivo.txt

  # >> adiciona ao final do arquivo (append)
  echo "Linha 2" >> arquivo.txt

  # Salvar saída de comando em arquivo
  ls -la > lista-arquivos.txt
  dnf list installed > pacotes-instalados.txt
  date >> /var/log/meu-script.log

  # Criar arquivo vazio
  > arquivo-vazio.txt

  # Esvaziar um arquivo existente (sem remover)
  > /var/log/meu-log.txt`}
          language="bash"
          title="redirecionamento de saída"
        />

        <h2>Redirecionamento de Entrada ( &lt; )</h2>
        <CodeBlock
          code={`# < usa o arquivo como entrada do comando
  sort < lista.txt
  wc -l < arquivo.txt

  # Heredoc — bloco de texto como entrada
  cat << EOF > config.txt
  [configuracao]
  nome = fedora
  versao = 41
  EOF

  # Heredoc com variáveis (expandidas)
  cat << EOF > info.txt
  Usuário: $USER
  Data: $(date)
  Host: $(hostname)
  EOF

  # Heredoc sem expandir variáveis (aspas no delimitador)
  cat << 'EOF' > script.sh
  echo $HOME
  echo $USER
  EOF

  # Herestring — string como entrada
  grep "root" <<< "root:x:0:0:root:/root:/bin/bash"
  wc -w <<< "contando palavras nesta frase"`}
          language="bash"
          title="redirecionamento de entrada"
        />

        <h2>Redirecionamento de Erros ( 2&gt; e &amp;&gt; )</h2>
        <CodeBlock
          code={`# Redirecionar apenas erros para arquivo
  comando 2> erros.txt

  # Ignorar erros (jogar no buraco negro)
  comando 2>/dev/null

  # Saída normal para um arquivo, erros para outro
  comando > saida.txt 2> erros.txt

  # TUDO (stdout + stderr) para o mesmo arquivo
  comando &> tudo.txt
  comando > tudo.txt 2>&1        # equivalente, mais portável

  # Redirecionar stderr para stdout (para usar com pipe)
  comando 2>&1 | grep "erro"

  # Muito útil para scripts:
  rsync -av /home/ /backup/ > /var/log/backup.log 2>&1

  # Descartar TODA a saída (silenciar completamente)
  comando > /dev/null 2>&1
  comando &> /dev/null             # atalho no bash`}
          language="bash"
          title="redirecionamento de erros"
        />

        <h2><Filter className="inline-block mr-2 mb-1 w-5 h-5" /> grep — O Filtro Universal</h2>
        <CodeBlock
          code={`# Filtrar linhas que contêm uma palavra
  grep "erro" /var/log/dnf.log

  # Em um pipe
  journalctl -b | grep -i "error"

  # Flags mais usadas:
  grep -i "erro" arquivo.txt       # ignora maiúsculas/minúsculas
  grep -r "palavra" /etc/          # busca recursiva
  grep -n "palavra" arquivo.txt    # mostra número da linha
  grep -c "palavra" arquivo.txt    # conta ocorrências
  grep -v "comentário" arquivo     # linhas que NÃO contêm
  grep -l "palavra" *.txt          # mostra apenas nomes dos arquivos
  grep -w "root" /etc/passwd       # palavra completa
  grep -A 3 "erro" arquivo         # 3 linhas DEPOIS do match
  grep -B 3 "erro" arquivo         # 3 linhas ANTES do match
  grep -C 3 "erro" arquivo         # 3 linhas antes E depois
  grep -E "^root|^joao" /etc/passwd  # regex extendida (OU)

  # Grep com múltiplos padrões
  grep -e "erro" -e "falha" -e "warning" arquivo.txt`}
          language="bash"
          title="grep"
        />

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Processamento de Texto</h2>

        <h3>awk — Processamento por colunas</h3>
        <CodeBlock
          code={`# awk divide cada linha em campos ($1, $2, $3, ...)
  # Separador padrão: espaço/tab

  # Extrair colunas específicas
  ls -l | awk '{print $9}'              # nome do arquivo
  ps aux | awk '{print $1, $11}'        # usuário e comando
  df -h | awk '{print $1, $5}'          # dispositivo e % uso

  # Filtrar com condição
  awk -F: '$3 >= 1000' /etc/passwd       # UIDs >= 1000
  ps aux | awk '$3 > 10 {print $0}'     # processos com CPU > 10%

  # Somar valores de uma coluna
  cat vendas.txt | awk '{soma += $2} END {print "Total:", soma}'

  # Usar outro separador
  awk -F: '{print $1, $6}' /etc/passwd  # -F: define separador :
  awk -F',' '{print $1}' dados.csv       # CSV

  # Formatação
  awk '{printf "%-20s %s\n", $1, $2}' arquivo`}
          language="bash"
          title="awk"
        />

        <h3>sed — Editor de fluxo</h3>
        <CodeBlock
          code={`# Substituir texto (primeira ocorrência por linha)
  sed 's/antigo/novo/' arquivo.txt

  # Substituir TODAS as ocorrências
  sed 's/antigo/novo/g' arquivo.txt

  # Substituir e salvar no arquivo original
  sed -i 's/antigo/novo/g' arquivo.txt

  # Deletar linhas
  sed '3d' arquivo.txt              # deletar linha 3
  sed '/padrão/d' arquivo.txt       # deletar linhas com padrão
  sed '/^#/d' arquivo.txt           # deletar comentários
  sed '/^$/d' arquivo.txt           # deletar linhas vazias

  # Inserir texto
  sed '2i\Nova linha' arquivo.txt   # inserir antes da linha 2
  sed '2a\Nova linha' arquivo.txt   # inserir depois da linha 2

  # Mostrar apenas linhas específicas
  sed -n '5,10p' arquivo.txt        # linhas 5 a 10
  sed -n '/início/,/fim/p' arquivo  # entre padrões`}
          language="bash"
          title="sed"
        />

        <h3>sort, uniq, cut e tr</h3>
        <CodeBlock
          code={`# sort — ordenar
  sort arquivo.txt              # alfabético
  sort -n arquivo.txt           # numérico
  sort -r arquivo.txt           # reverso
  sort -k2 arquivo.txt          # pela coluna 2
  sort -t: -k3 -n /etc/passwd  # por UID (coluna 3, numérico)

  # uniq — remover duplicatas (requer sort antes!)
  sort arquivo.txt | uniq       # remover duplicatas
  sort arquivo.txt | uniq -c    # contar ocorrências
  sort arquivo.txt | uniq -d    # mostrar apenas duplicadas
  sort arquivo.txt | uniq -u    # mostrar apenas únicas

  # cut — extrair campos
  cut -d: -f1 /etc/passwd       # campo 1, delimitador :
  cut -d',' -f1,3 dados.csv     # campos 1 e 3, delimitador ,
  cut -c1-10 arquivo.txt        # caracteres 1 a 10

  # tr — transformar caracteres
  echo "MAIÚSCULO" | tr 'A-Z' 'a-z'   # para minúsculo
  echo "minúsculo" | tr 'a-z' 'A-Z'   # para maiúsculo
  echo "a b c" | tr ' ' '\n'          # espaços → quebras de linha
  echo "aabbcc" | tr -s 'a-z'          # comprimir repetidos
  echo "abc123" | tr -d '0-9'          # deletar dígitos`}
          language="bash"
          title="sort, uniq, cut, tr"
        />

        <h2>tee — Bifurcar a Saída</h2>
        <CodeBlock
          code={`# tee mostra na tela E salva em arquivo ao mesmo tempo
  ls -la | tee lista.txt
  sudo dnf update | tee /var/log/update.log

  # Adicionar ao arquivo (append)
  comando | tee -a /var/log/script.log

  # Salvar em múltiplos arquivos
  echo "log" | tee arquivo1.txt arquivo2.txt

  # Combinar com sudo (truque útil!)
  # Isso NÃO funciona: sudo echo "texto" > /etc/arquivo
  # Isso FUNCIONA:
  echo "texto" | sudo tee /etc/arquivo > /dev/null
  echo "nova linha" | sudo tee -a /etc/arquivo > /dev/null`}
          language="bash"
          title="tee"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> xargs — Construir Comandos</h2>
        <CodeBlock
          code={`# xargs converte stdin em argumentos de um comando

  # Remover arquivos encontrados pelo find
  find /tmp -name "*.log" | xargs rm -f

  # Contar linhas em todos os arquivos .py
  find . -name "*.py" | xargs wc -l

  # Comprimir arquivos encontrados
  find . -name "*.txt" | xargs tar czf textos.tar.gz

  # Com espaços em nomes (use -0 com find -print0)
  find . -name "*.pdf" -print0 | xargs -0 cp -t /backup/

  # Executar comando para cada item
  echo "file1 file2 file3" | xargs -n1 echo "Processando:"

  # Limitar itens por execução
  echo "a b c d e f" | xargs -n2 echo
  # a b
  # c d
  # e f

  # Pedir confirmação antes de executar
  echo "arquivo1 arquivo2" | xargs -p rm`}
          language="bash"
          title="xargs"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Exemplos Completos e Práticos</h2>
        <CodeBlock
          code={`# === TOP 10 COMANDOS MAIS USADOS ===
  history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

  # === ENCONTRAR ARQUIVOS GRANDES ===
  find /home -type f -size +100M 2>/dev/null | xargs ls -lh

  # === VER IPs QUE TENTARAM FAZER LOGIN ===
  grep "Failed password" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -rn

  # === MONITORAR LOG EM TEMPO REAL COM FILTRO ===
  tail -f /var/log/messages | grep --color=auto -i "error"

  # === CONTAR LINHAS DE CÓDIGO NO PROJETO ===
  find . -name "*.tsx" | xargs wc -l | sort -n

  # === LISTAR PORTAS ABERTAS ===
  ss -tulpn | grep LISTEN | awk '{print $1, $5}' | sort

  # === VER PROCESSOS POR USO DE MEMÓRIA ===
  ps aux --sort=-%mem | head -10 | awk '{printf "%-8s %5s%% %s\n", $1, $4, $11}'

  # === RENOMEAR ARQUIVOS EM LOTE ===
  # Trocar extensão .jpeg para .jpg usando rename
  rename .jpeg .jpg *.jpeg

  # === CONTAR PALAVRAS ÚNICAS EM ARQUIVO ===
  cat texto.txt | tr ' ' '\n' | sort | uniq -c | sort -rn | head -20

  # === EXTRAIR E-MAILS DE UM ARQUIVO ===
  grep -oE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' arquivo.txt | sort -u`}
          language="bash"
          title="exemplos práticos"
        />

        <AlertBox type="success" title="Dica de ouro">
          Combine <code>grep</code>, <code>awk</code>, <code>sort</code>, <code>uniq</code>, <code>cut</code>, <code>sed</code> e <code>head/tail</code> com pipes. Essa combinação resolve 90% dos problemas de análise de texto e logs no Linux. Quando precisar aplicar um comando a muitos itens, use <code>xargs</code>.
        </AlertBox>
      </PageContainer>
    );
  }
  