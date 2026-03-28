import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Eye, FileDiff, FileSearch } from "lucide-react";

export default function Visualizacao() {
  return (
    <PageContainer
      title="Visualização de Arquivos"
      subtitle="Aprenda a ler, inspecionar e analisar arquivos de texto diretamente no terminal: cat, less, head, tail, grep, diff e mais."
      difficulty="iniciante"
      timeToRead="30 min"
    >
      <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> cat — Exibir Conteúdo</h2>
      <p>O <code>cat</code> (concatenate) exibe o conteúdo de arquivos. Ideal para arquivos curtos.</p>
      <CodeBlock
        code={`# Exibir conteúdo de um arquivo
cat /etc/hostname

# Exibir múltiplos arquivos (concatenar)
cat arquivo1.txt arquivo2.txt

# Exibir com números de linha
cat -n /etc/dnf/dnf.conf

# Exibir com números apenas em linhas não-vazias
cat -b /etc/dnf/dnf.conf

# Mostrar caracteres invisíveis (tabs como ^I, fim de linha como $)
cat -A arquivo.txt

# Comprimir linhas em branco consecutivas em uma só
cat -s arquivo-com-muitas-linhas-vazias.txt`}
        language="bash"
        title="cat — leitura"
      />
      <CodeBlock
        code={`# Criar um arquivo rapidamente (terminar com Ctrl+D)
cat > notas.txt
Este é o conteúdo do arquivo.
Pressione Ctrl+D para salvar.

# Adicionar conteúdo ao final de um arquivo (append)
cat >> notas.txt
Mais uma linha adicionada.

# Concatenar vários arquivos em um só
cat parte1.txt parte2.txt parte3.txt > documento-completo.txt`}
        language="bash"
        title="cat — criação e concatenação"
      />

      <h2>less — Leitura Paginada (Recomendado)</h2>
      <p>Para arquivos grandes, o <code>less</code> é muito superior ao <code>cat</code> — ele pagina o conteúdo e permite navegação e busca.</p>
      <CodeBlock
        code={`# Abrir arquivo para leitura paginada
less /var/log/dnf.log

# Abrir com números de linha
less -N /etc/dnf/dnf.conf

# Abrir ignorando maiúsculas na busca
less -i arquivo.txt

# Abrir múltiplos arquivos (navegar com :n e :p)
less arquivo1.txt arquivo2.txt`}
        language="bash"
        title="less"
      />
      <CodeBlock
        code={`NAVEGAÇÃO:
  Espaço / Page Down    Avançar uma página
  b / Page Up           Voltar uma página
  j / Seta para baixo   Avançar uma linha
  k / Seta para cima    Voltar uma linha
  G                     Ir para o final do arquivo
  g                     Ir para o início do arquivo
  50g                   Ir para a linha 50

BUSCA:
  /padrão               Buscar para frente
  ?padrão               Buscar para trás
  n                     Próxima ocorrência
  N                     Ocorrência anterior
  &padrão               Mostrar APENAS linhas que contêm o padrão

OUTROS:
  q                     Sair
  h                     Ajuda
  :n                    Próximo arquivo
  :p                    Arquivo anterior`}
        language="bash"
        title="atalhos do less"
      />

      <h2>head e tail — Partes do Arquivo</h2>
      <CodeBlock
        code={`# === HEAD — primeiras linhas ===
# Primeiras 10 linhas (padrão)
head /etc/dnf/dnf.conf

# Primeiras 20 linhas
head -n 20 /etc/dnf/dnf.conf

# Primeiras 5 linhas de múltiplos arquivos
head -n 5 arquivo1.txt arquivo2.txt

# Primeiros 100 bytes
head -c 100 arquivo.bin

# Tudo EXCETO as últimas 5 linhas
head -n -5 arquivo.txt

# Uso prático: ver os 10 maiores arquivos
du -ah /var | sort -rh | head -10

# Ver os processos que mais consomem memória
ps aux --sort=-%mem | head -10`}
        language="bash"
        title="head"
      />
      <CodeBlock
        code={`# === TAIL — últimas linhas ===
# Últimas 10 linhas (padrão)
tail /var/log/dnf.log

# Últimas 30 linhas
tail -n 30 /var/log/dnf.log

# Últimas linhas a partir da linha 100
tail -n +100 arquivo.txt

# Últimos 200 bytes
tail -c 200 arquivo.txt

# === -f: Seguir log em tempo real ===
tail -f /var/log/messages

# Seguir múltiplos arquivos
tail -f /var/log/messages /var/log/secure

# Seguir com tentativas de reabrir o arquivo
tail -F /var/log/messages

# Combinação poderosa: seguir log e filtrar
tail -f /var/log/messages | grep -i "error"

# Para parar: Ctrl+C`}
        language="bash"
        title="tail e tail -f"
      />

      <h2><FileSearch className="inline-block mr-2 mb-1 w-5 h-5" /> grep — Buscar Dentro de Arquivos</h2>
      <CodeBlock
        code={`# Buscar uma palavra em um arquivo
grep "error" /var/log/dnf.log

# Buscar ignorando maiúsculas/minúsculas
grep -i "error" /var/log/dnf.log

# Buscar recursivamente em todos os arquivos de um diretório
grep -r "TODO" ~/projetos/

# Buscar e mostrar o número da linha
grep -n "gpgcheck" /etc/dnf/dnf.conf

# Buscar e mostrar contexto (3 linhas antes e depois)
grep -C 3 "error" /var/log/messages

# Buscar apenas 2 linhas antes do match
grep -B 2 "failed" /var/log/messages

# Buscar apenas 2 linhas depois do match
grep -A 2 "failed" /var/log/messages`}
        language="bash"
        title="grep básico"
      />
      <CodeBlock
        code={`# Busca invertida: linhas que NÃO contêm o padrão
grep -v "^#" /etc/dnf/dnf.conf     # Remove linhas de comentário

# Contar ocorrências
grep -c "Installed" /var/log/dnf.log

# Mostrar apenas os nomes dos arquivos que contêm o padrão
grep -l "TODO" *.py

# Usar regex estendida
grep -E "(error|warning|critical)" /var/log/messages

# Buscar palavra exata (não como substring)
grep -w "log" arquivo.txt   # Encontra "log" mas não "login" ou "catalog"

# Combinação com pipes (extremamente comum)
journalctl -b | grep -i "failed" | grep -v "systemd"`}
        language="bash"
        title="grep avançado"
      />

      <h2>wc — Contar Linhas, Palavras e Bytes</h2>
      <CodeBlock
        code={`# Contagem completa: linhas, palavras, bytes
wc /etc/dnf/dnf.conf
#  linhas  palavras  bytes  nome

# Contar apenas linhas
wc -l /etc/dnf/dnf.conf

# Contar apenas palavras
wc -w arquivo.txt

# Contar apenas caracteres
wc -m arquivo.txt

# Combinações práticas com pipes
ls /etc | wc -l              # Quantos itens tem em /etc
ps aux | wc -l               # Quantos processos estão rodando
grep -c "error" log.txt      # Quantas linhas contêm "error"`}
        language="bash"
        title="wc"
      />

      <h2><FileDiff className="inline-block mr-2 mb-1 w-5 h-5" /> diff — Comparar Arquivos</h2>
      <CodeBlock
        code={`# Comparação simples
diff arquivo1.txt arquivo2.txt

# Comparação lado a lado
diff -y arquivo1.txt arquivo2.txt

# Formato unificado (o mais legível, usado em patches e Git)
diff -u original.conf modificado.conf
# --- original.conf
# +++ modificado.conf
# @@ -10,3 +10,4 @@
#  linha igual
# -linha removida
# +linha adicionada

# Comparar apenas se são diferentes (sem mostrar detalhes)
diff -q arquivo1.txt arquivo2.txt

# Comparar diretórios recursivamente
diff -r dir1/ dir2/

# Ignorar espaços extras
diff -w arquivo1.txt arquivo2.txt

# Gerar um patch e aplicar
diff -u original.conf modificado.conf > mudancas.patch
patch original.conf < mudancas.patch`}
        language="bash"
        title="diff"
      />

      <h2>file e strings — Identificar Tipo de Arquivo</h2>
      <CodeBlock
        code={`# Identificar tipo de arquivo (não confia na extensão)
file /bin/bash
# /bin/bash: ELF 64-bit LSB pie executable, x86-64...

file /etc/dnf/dnf.conf
# /etc/dnf/dnf.conf: ASCII text

file imagem.jpg
# imagem.jpg: JPEG image data, JFIF standard 1.01...

file documento.pdf
# documento.pdf: PDF document, version 1.4

# Mostrar tipo MIME
file -i documento.pdf
# documento.pdf: application/pdf; charset=binary

# Verificar múltiplos arquivos
file *

# strings — extrair texto de arquivos binários
strings /usr/bin/ls | head -20

# Ver versão de um programa compilado
strings /usr/bin/gcc | grep "version"

# Encontrar URLs embutidas em um programa
strings programa | grep "http"`}
        language="bash"
        title="file e strings"
      />

      <AlertBox type="info" title="Referência rápida">
        <table className="w-full text-sm mt-2">
          <thead><tr><th className="text-left">Comando</th><th className="text-left">Uso</th></tr></thead>
          <tbody>
            <tr><td><code>cat arquivo</code></td><td>Arquivos curtos, exibição rápida</td></tr>
            <tr><td><code>less arquivo</code></td><td>Arquivos longos, navegação interativa</td></tr>
            <tr><td><code>head -n 20 arquivo</code></td><td>Primeiras 20 linhas</td></tr>
            <tr><td><code>tail -n 20 arquivo</code></td><td>Últimas 20 linhas</td></tr>
            <tr><td><code>tail -f arquivo</code></td><td>Monitorar log em tempo real</td></tr>
            <tr><td><code>grep "padrão" arq</code></td><td>Buscar texto no arquivo</td></tr>
            <tr><td><code>diff arq1 arq2</code></td><td>Comparar dois arquivos</td></tr>
          </tbody>
        </table>
      </AlertBox>
    </PageContainer>
  );
}
