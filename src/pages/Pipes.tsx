import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { GitMerge, ArrowRight, Filter } from "lucide-react";

export default function Pipes() {
  return (
    <PageContainer
      title="Pipes e Redirecionamento"
      subtitle="Combine comandos com pipes (|), redirecione saída para arquivos e construa fluxos de trabalho poderosos no terminal."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <h2><GitMerge className="inline-block mr-2 mb-1 w-5 h-5" /> A Filosofia Unix</h2>
      <p>
        O Linux segue a filosofia Unix: <strong>cada comando faz uma coisa e faz bem</strong>. A força real vem de combinar comandos simples com pipes e redirecionamento. Com isso, você resolve problemas complexos com uma linha no terminal.
      </p>
      <AlertBox type="info" title="A fórmula mágica">
        <code>comando1 | comando2 | comando3</code> — a saída de um vira a entrada do próximo. Simples assim.
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

# Listar os 10 arquivos maiores no diretório atual
du -sh * | sort -rh | head -10

# Ver log do sistema com filtro de erro
journalctl -b | grep -i error | tail -20

# Contar quantas vezes "dnf" aparece no histórico
history | grep -c dnf

# Encontrar e listar pacotes instalados que contêm "python"
dnf list installed | grep python

# Combinar vários filtros
cat /etc/passwd | cut -d':' -f1 | sort | head -15`}
        language="bash"
        title="pipes"
      />

      <h2>Redirecionamento de Saída ( &gt; e &gt;&gt; )</h2>
      <CodeBlock
        code={`# > sobrescreve o arquivo (cuidado!)
echo "Linha 1" > arquivo.txt    # cria ou SOBRESCREVE

# >> adiciona ao final do arquivo
echo "Linha 2" >> arquivo.txt   # adiciona sem apagar

# Salvar saída de comando em arquivo
ls -la > lista-arquivos.txt
dnf list installed > pacotes-instalados.txt
journalctl -b > log-boot.txt

# Exemplos práticos
date >> /var/log/meu-script.log
echo "Backup iniciado: $(date)" >> backup.log`}
        language="bash"
        title="redirecionamento de saída"
      />

      <h2>Redirecionamento de Entrada ( &lt; )</h2>
      <CodeBlock
        code={`# < usa o arquivo como entrada do comando
sort < lista.txt
wc -l < arquivo.txt
mail -s "Assunto" usuario@email.com < mensagem.txt

# Heredoc — bloco de texto como entrada
cat << EOF > config.txt
[configuracao]
nome = fedora
versao = 41
EOF

# Heredoc com comando
while read linha; do
  echo "Processando: $linha"
done << EOF
item1
item2
item3
EOF`}
        language="bash"
        title="redirecionamento de entrada"
      />

      <h2>Redirecionamento de Erros ( 2&gt; e &amp;&gt; )</h2>
      <CodeBlock
        code={`# Saídas em Linux: stdout (1) = saída normal | stderr (2) = erros

# Redirecionar apenas erros para arquivo
comando 2> erros.txt

# Ignorar erros (jogar no buraco negro)
comando 2>/dev/null

# Redirecionar saída normal para um arquivo e erros para outro
comando > saida.txt 2> erros.txt

# Redirecionar TUDO (stdout + stderr) para o mesmo arquivo
comando &> tudo.txt
comando > tudo.txt 2>&1          # equivalente, mais portável

# Muito útil para scripts de backup:
rsync -av /home/ /backup/ > /var/log/backup.log 2>&1

# Mostrar na tela E salvar ao mesmo tempo (tee)
dnf update 2>&1 | tee /var/log/atualizacao.log`}
        language="bash"
        title="redirecionamento de erros"
      />

      <h2><Filter className="inline-block mr-2 mb-1 w-5 h-5" /> grep — O Filtro Universal</h2>
      <CodeBlock
        code={`# Sintaxe: grep [opções] "padrão" [arquivo]

# Filtrar linhas que contêm uma palavra
grep "erro" /var/log/dnf.log
grep "failed" /var/log/messages

# Em um pipe
journalctl -b | grep -i "error"

# Flags mais usadas:
grep -i "erro" arquivo.txt       # -i: ignora maiúsculas/minúsculas
grep -r "palavra" /etc/          # -r: busca recursiva em diretórios
grep -n "palavra" arquivo.txt    # -n: mostra número da linha
grep -c "palavra" arquivo.txt    # -c: conta ocorrências (não as linhas)
grep -v "comentário" arquivo.txt # -v: mostra linhas que NÃO contêm
grep -l "palavra" *.txt          # -l: mostra apenas nomes dos arquivos
grep -w "root" /etc/passwd       # -w: palavra completa (não substring)
grep -A 3 "erro" arquivo.txt     # -A: mostra 3 linhas DEPOIS do match
grep -B 3 "erro" arquivo.txt     # -B: mostra 3 linhas ANTES do match
grep -C 3 "erro" arquivo.txt     # -C: mostra 3 linhas antes e depois

# Expressões regulares com grep (-E ou egrep)
grep -E "^root|^joao" /etc/passwd    # linhas que começam com root OU joao
grep -E "[0-9]{1,3}\.[0-9]{1,3}" arquivo.txt  # padrão de IP

# Grep com múltiplos padrões
grep -e "erro" -e "falha" arquivo.txt`}
        language="bash"
        title="grep"
      />

      <h2>tee — Bifurcar a Saída</h2>
      <CodeBlock
        code={`# tee mostra na tela E salva em arquivo ao mesmo tempo
# É como um T na tubulação — divide o fluxo em dois

# Mostrar na tela E salvar em arquivo
ls -la | tee lista.txt
sudo dnf update | tee /var/log/update.log

# Adicionar ao arquivo em vez de sobrescrever
comando | tee -a /var/log/script.log

# Salvar em múltiplos arquivos ao mesmo tempo
echo "log" | tee arquivo1.txt arquivo2.txt arquivo3.txt

# Caso de uso real: ver e salvar instalação de pacote
sudo dnf install nginx | tee /var/log/install-nginx.log`}
        language="bash"
        title="tee"
      />

      <h2>Exemplos Completos e Práticos</h2>
      <CodeBlock
        code={`# === TOP 10 COMANDOS MAIS USADOS ===
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

# === ENCONTRAR ARQUIVOS GRANDES ===
find /home -type f -size +100M | xargs ls -lh 2>/dev/null

# === VER IPs QUE TENTARAM FAZER LOGIN ===
grep "Failed password" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -rn

# === MONITORAR LOG EM TEMPO REAL COM FILTRO ===
tail -f /var/log/messages | grep --color=auto -i "error"

# === CONTAR LINHAS DE CÓDIGO NO PROJETO ===
find . -name "*.tsx" | xargs wc -l | tail -1

# === LISTAR PORTAS ABERTAS DE FORMA LIMPA ===
ss -tulpn | grep LISTEN | awk '{print $1, $5}'

# === BACKUP RÁPIDO COM DATA NO NOME ===
tar -czf "backup-$(date +%Y%m%d).tar.gz" /home/usuario/documentos/

# === REMOVER ARQUIVOS TEMPORÁRIOS MAIS ANTIGOS QUE 7 DIAS ===
find /tmp -mtime +7 -type f | xargs rm -f 2>/dev/null`}
        language="bash"
        title="exemplos práticos"
      />

      <AlertBox type="success" title="Dica de ouro">
        Combine <code>grep</code>, <code>awk</code>, <code>sort</code>, <code>uniq</code> e <code>head/tail</code> com pipes. Essa combinação resolve 90% dos problemas de análise de texto e logs no Linux.
      </AlertBox>
    </PageContainer>
  );
}
