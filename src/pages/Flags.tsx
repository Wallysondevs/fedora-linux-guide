import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { HelpCircle, BookOpen, Terminal, Info } from "lucide-react";

export default function Flags() {
  return (
    <PageContainer
      title="Flags, Parâmetros e --help"
      subtitle="Aprenda a ler e entender a ajuda dos comandos Linux em Português — flags, parâmetros obrigatórios, opcionais e como nunca ficar perdido no terminal."
      difficulty="iniciante"
      timeToRead="30 min"
    >
      <h2><HelpCircle className="inline-block mr-2 mb-1 w-5 h-5" /> O que são Flags e Parâmetros?</h2>
      <p>
        Todo comando Linux aceita <strong>entradas extras</strong> que modificam seu comportamento. Essas entradas se dividem em:
      </p>
      <ul>
        <li><strong>Flags / Opções</strong> — modificam o comportamento do comando. Começam com <code>-</code> (curto) ou <code>--</code> (longo). Ex: <code>ls -l</code> ou <code>ls --long</code></li>
        <li><strong>Argumentos / Parâmetros</strong> — valores que o comando precisa para agir. Ex: <code>dnf install <em>firefox</em></code> — "firefox" é o argumento</li>
      </ul>

      <CodeBlock
        code={`# Estrutura geral de um comando Linux:
comando [opções] [argumentos]

# Exemplos:
ls -la /home          # ls = comando, -la = flags, /home = argumento
dnf install -y vim    # dnf = comando, install = subcomando, -y = flag, vim = argumento
cp -r pasta/ destino/ # -r = flag, pasta/ e destino/ = argumentos`}
        language="bash"
        title="anatomia de um comando"
      />

      <h2>Formato das Flags</h2>
      <table>
        <thead><tr><th>Formato</th><th>Tipo</th><th>Exemplo</th><th>Significado</th></tr></thead>
        <tbody>
          <tr><td><code>-l</code></td><td>Flag curta (1 letra)</td><td><code>ls -l</code></td><td>Listagem longa</td></tr>
          <tr><td><code>--long</code></td><td>Flag longa (palavra)</td><td><code>ls --all</code></td><td>Mostrar tudo (incluindo ocultos)</td></tr>
          <tr><td><code>-la</code></td><td>Flags combinadas</td><td><code>ls -la</code></td><td>Equivale a <code>-l -a</code></td></tr>
          <tr><td><code>-n 10</code></td><td>Flag com valor</td><td><code>head -n 10</code></td><td>Mostrar 10 linhas</td></tr>
          <tr><td><code>--lines=10</code></td><td>Flag longa com valor</td><td><code>head --lines=10</code></td><td>Mesmo que acima</td></tr>
        </tbody>
      </table>

      <AlertBox type="info" title="Dica: flags curtas e longas fazem a mesma coisa">
        <code>ls -a</code> e <code>ls --all</code> são equivalentes. A forma curta é mais rápida de digitar, a forma longa é mais legível em scripts.
      </AlertBox>

      <h2><HelpCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Como usar o --help</h2>
      <p>
        Quase todo comando Linux aceita a flag <code>--help</code> (ou <code>-h</code>). Ela exibe um resumo rápido das opções disponíveis, direto no terminal — sem precisar de internet ou manual.
      </p>
      <CodeBlock
        code={`# Forma padrão
comando --help

# Alguns comandos aceitam -h (forma curta)
comando -h

# Exemplos
ls --help
dnf --help
cp --help
chmod --help
systemctl --help`}
        language="bash"
        title="usando --help"
      />

      <h2>Como Ler a Saída do --help (Explicado em Português)</h2>
      <p>A saída do <code>--help</code> sempre segue um padrão. Veja o exemplo do <code>ls --help</code> traduzido e explicado:</p>
      <CodeBlock
        code={`# Saída real do: ls --help (simplificada e comentada)

Uso: ls [OPÇÃO]... [ARQUIVO]...
#    └── "ls" seguido de opções (todas opcionais) e arquivos/diretórios

# [OPÇÃO]...  = você pode passar zero ou mais flags
# [ARQUIVO]... = você pode passar zero ou mais arquivos/diretórios
# Os colchetes [ ] indicam que o item é OPCIONAL
# As reticências ... indicam que pode repetir

Opções principais:
  -a, --all          # não ocultar entradas que começam com .
  -A, --almost-all   # como --all, mas não lista . e ..
  -l                 # usar formato de listagem longa
  -h, --human-readable   # com -l, mostra tamanhos legíveis (1K, 2M...)
  -r, --reverse      # inverter a ordem de ordenação
  -S                 # ordenar pelo tamanho do arquivo
  -t                 # ordenar por data de modificação
  -R, --recursive    # listar subdiretórios recursivamente
      --help         # exibir esta ajuda e sair
      --version      # exibir informação da versão e sair`}
        language="bash"
        title="lendo o --help do ls"
      />

      <h2>Flags Explicadas: Comandos Mais Usados</h2>

      <h3>ls — Listar Arquivos</h3>
      <table>
        <thead><tr><th>Flag</th><th>Nome Completo</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>-l</code></td><td><code>--long</code></td><td>Mostra formato longo: permissões, dono, tamanho, data</td></tr>
          <tr><td><code>-a</code></td><td><code>--all</code></td><td>Mostra todos os arquivos, incluindo os ocultos (que começam com ponto)</td></tr>
          <tr><td><code>-h</code></td><td><code>--human-readable</code></td><td>Tamanhos legíveis (KB, MB, GB) — use junto com <code>-l</code></td></tr>
          <tr><td><code>-r</code></td><td><code>--reverse</code></td><td>Inverte a ordem de listagem</td></tr>
          <tr><td><code>-t</code></td><td>—</td><td>Ordena por data de modificação (mais recente primeiro)</td></tr>
          <tr><td><code>-S</code></td><td>—</td><td>Ordena por tamanho (maior primeiro)</td></tr>
          <tr><td><code>-R</code></td><td><code>--recursive</code></td><td>Lista recursivamente todos os subdiretórios</td></tr>
          <tr><td><code>-1</code></td><td>—</td><td>Um arquivo por linha</td></tr>
          <tr><td><code>-d</code></td><td><code>--directory</code></td><td>Lista o diretório em si, não seu conteúdo</td></tr>
        </tbody>
      </table>
      <CodeBlock
        code={`ls -la           # longa (-l) + ocultos (-a)
ls -lh           # longa (-l) + tamanhos legíveis (-h)
ls -lt           # longa (-l) + ordena por data (-t)
ls -lS           # longa (-l) + ordena por tamanho (-S)
ls -laht         # tudo junto: long, all, human, time`}
        language="bash"
        title="combinando flags do ls"
      />

      <h3>cp — Copiar Arquivos</h3>
      <table>
        <thead><tr><th>Flag</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>-r</code> / <code>--recursive</code></td><td>Copia diretórios recursivamente (obrigatório para pastas)</td></tr>
          <tr><td><code>-v</code> / <code>--verbose</code></td><td>Mostra o que está sendo copiado</td></tr>
          <tr><td><code>-p</code> / <code>--preserve</code></td><td>Preserva permissões, dono e data</td></tr>
          <tr><td><code>-i</code> / <code>--interactive</code></td><td>Pergunta antes de sobrescrever</td></tr>
          <tr><td><code>-f</code> / <code>--force</code></td><td>Força a cópia sem perguntar</td></tr>
          <tr><td><code>-n</code> / <code>--no-clobber</code></td><td>Não sobrescreve arquivos existentes</td></tr>
          <tr><td><code>-u</code> / <code>--update</code></td><td>Copia apenas se o arquivo de origem for mais novo</td></tr>
          <tr><td><code>-a</code> / <code>--archive</code></td><td>Equivale a <code>-rpP</code> — ideal para backups completos</td></tr>
        </tbody>
      </table>

      <h3>dnf — Gerenciador de Pacotes</h3>
      <table>
        <thead><tr><th>Flag</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>-y</code> / <code>--assumeyes</code></td><td>Responde "sim" automaticamente para todas as perguntas</td></tr>
          <tr><td><code>-q</code> / <code>--quiet</code></td><td>Modo silencioso — mostra menos informações</td></tr>
          <tr><td><code>-v</code> / <code>--verbose</code></td><td>Modo detalhado — mostra mais informações</td></tr>
          <tr><td><code>--no-best</code></td><td>Não falha se a melhor versão não puder ser instalada</td></tr>
          <tr><td><code>--allowerasing</code></td><td>Permite remover pacotes para resolver conflitos</td></tr>
          <tr><td><code>--security</code></td><td>Aplica apenas atualizações de segurança</td></tr>
          <tr><td><code>--downloadonly</code></td><td>Apenas baixa, não instala</td></tr>
          <tr><td><code>--refresh</code></td><td>Força atualização dos metadados antes da operação</td></tr>
          <tr><td><code>--enablerepo=X</code></td><td>Habilita um repositório específico para esta operação</td></tr>
          <tr><td><code>--disablerepo=X</code></td><td>Desabilita um repositório para esta operação</td></tr>
        </tbody>
      </table>

      <h3>chmod — Permissões</h3>
      <table>
        <thead><tr><th>Flag</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>-R</code> / <code>--recursive</code></td><td>Aplica permissões recursivamente em todos os arquivos dentro de um diretório</td></tr>
          <tr><td><code>-v</code> / <code>--verbose</code></td><td>Mostra cada arquivo alterado</td></tr>
          <tr><td><code>-c</code> / <code>--changes</code></td><td>Como verbose, mas mostra apenas quando há mudança</td></tr>
          <tr><td><code>-f</code> / <code>--silent</code></td><td>Silencia mensagens de erro</td></tr>
          <tr><td><code>--reference=FILE</code></td><td>Usa as permissões de outro arquivo como referência</td></tr>
        </tbody>
      </table>

      <h3>systemctl — Controle de Serviços</h3>
      <table>
        <thead><tr><th>Subcomando / Flag</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>start</code></td><td>Inicia o serviço agora (não persiste após reiniciar)</td></tr>
          <tr><td><code>stop</code></td><td>Para o serviço agora</td></tr>
          <tr><td><code>restart</code></td><td>Para e reinicia o serviço</td></tr>
          <tr><td><code>reload</code></td><td>Recarrega a configuração sem parar o serviço</td></tr>
          <tr><td><code>enable</code></td><td>Ativa o serviço na inicialização do sistema</td></tr>
          <tr><td><code>disable</code></td><td>Desativa o serviço na inicialização</td></tr>
          <tr><td><code>enable --now</code></td><td>Ativa na inicialização E inicia agora (dois em um)</td></tr>
          <tr><td><code>status</code></td><td>Mostra o estado atual, logs recentes e se está ativo</td></tr>
          <tr><td><code>is-active</code></td><td>Retorna "active" ou "inactive" — útil em scripts</td></tr>
          <tr><td><code>is-enabled</code></td><td>Retorna "enabled" ou "disabled"</td></tr>
          <tr><td><code>--user</code></td><td>Opera no contexto do usuário atual (não root)</td></tr>
          <tr><td><code>--now</code></td><td>Combinado com enable/disable, inicia/para imediatamente</td></tr>
        </tbody>
      </table>

      <h3>grep — Buscar Texto</h3>
      <table>
        <thead><tr><th>Flag</th><th>O que faz</th></tr></thead>
        <tbody>
          <tr><td><code>-i</code> / <code>--ignore-case</code></td><td>Ignora maiúsculas/minúsculas na busca</td></tr>
          <tr><td><code>-r</code> / <code>--recursive</code></td><td>Busca recursivamente em diretórios</td></tr>
          <tr><td><code>-n</code> / <code>--line-number</code></td><td>Mostra o número da linha de cada resultado</td></tr>
          <tr><td><code>-l</code> / <code>--files-with-matches</code></td><td>Mostra apenas o nome dos arquivos que contêm o padrão</td></tr>
          <tr><td><code>-v</code> / <code>--invert-match</code></td><td>Mostra linhas que NÃO contêm o padrão</td></tr>
          <tr><td><code>-c</code> / <code>--count</code></td><td>Conta quantas linhas correspondem</td></tr>
          <tr><td><code>-A N</code></td><td>Mostra N linhas após cada resultado</td></tr>
          <tr><td><code>-B N</code></td><td>Mostra N linhas antes de cada resultado</td></tr>
          <tr><td><code>-C N</code></td><td>Mostra N linhas antes e depois (contexto)</td></tr>
          <tr><td><code>-E</code> / <code>--extended-regexp</code></td><td>Usa expressões regulares estendidas (mais poderosas)</td></tr>
          <tr><td><code>-w</code> / <code>--word-regexp</code></td><td>Corresponde apenas palavras inteiras</td></tr>
          <tr><td><code>--color</code></td><td>Destaca o resultado em cores</td></tr>
        </tbody>
      </table>

      <h2><BookOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Manual Completo: o comando man</h2>
      <p>
        O <strong>man</strong> (manual) é a documentação completa de cada comando. É mais detalhado que o <code>--help</code> e explica cada opção em profundidade.
      </p>
      <CodeBlock
        code={`# Abrir o manual de um comando
man ls
man dnf
man chmod
man grep

# Navegar dentro do manual:
# ↑ ↓ ou j/k  = rolar linha por linha
# PgUp / PgDn  = rolar página por página
# /palavra     = buscar uma palavra (pressione Enter)
# n            = ir para o próximo resultado da busca
# N            = ir para o resultado anterior
# g            = ir para o início
# G            = ir para o final
# q            = sair do manual

# Buscar em todos os manuais por uma palavra
man -k palavra
apropos palavra         # equivalente

# Abrir uma seção específica (o manual tem 8 seções)
man 5 passwd   # seção 5 = formatos de arquivo (ex: /etc/passwd)
man 1 passwd   # seção 1 = comandos de usuário (o comando passwd)`}
        language="bash"
        title="usando o man"
      />

      <h3>Seções do Manual</h3>
      <table>
        <thead><tr><th>Seção</th><th>Conteúdo</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Comandos de usuário (ls, cp, grep...)</td></tr>
          <tr><td>2</td><td>Chamadas de sistema do kernel</td></tr>
          <tr><td>3</td><td>Funções de bibliotecas C</td></tr>
          <tr><td>4</td><td>Arquivos especiais (/dev/...)</td></tr>
          <tr><td>5</td><td>Formatos de arquivo (/etc/passwd, /etc/fstab...)</td></tr>
          <tr><td>6</td><td>Jogos</td></tr>
          <tr><td>7</td><td>Miscelânea (convenções, protocolos)</td></tr>
          <tr><td>8</td><td>Comandos de administração (sudo, mount, fdisk...)</td></tr>
        </tbody>
      </table>

      <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> tldr — Resumos em Português</h2>
      <p>
        O <strong>tldr</strong> é uma alternativa ao man com exemplos práticos e resumidos. Muito mais fácil de entender para quem está começando.
      </p>
      <CodeBlock
        code={`# Instalar o tldr
sudo dnf install tldr

# Atualizar base de dados do tldr
tldr --update

# Ver exemplos de um comando
tldr ls
tldr dnf
tldr chmod
tldr grep
tldr systemctl

# Mudar idioma (português)
LANG=pt tldr ls   # se a tradução estiver disponível`}
        language="bash"
        title="tldr"
      />

      <AlertBox type="success" title="Nunca fique perdido no terminal">
        Se não souber como usar um comando, a ordem de consulta recomendada é:<br/><br/>
        <strong>1.</strong> <code>comando --help</code> — resumo rápido das flags<br/>
        <strong>2.</strong> <code>tldr comando</code> — exemplos práticos<br/>
        <strong>3.</strong> <code>man comando</code> — documentação completa<br/>
        <strong>4.</strong> Pesquisar em <strong>ask.fedoraproject.org</strong> ou <strong>wiki.archlinux.org</strong> em inglês
      </AlertBox>

      <h2><Info className="inline-block mr-2 mb-1 w-5 h-5" /> Símbolos Comuns na Documentação</h2>
      <p>Ao ler a ajuda de comandos, você vai encontrar alguns símbolos com significados específicos:</p>
      <table>
        <thead><tr><th>Símbolo</th><th>Significado</th><th>Exemplo</th></tr></thead>
        <tbody>
          <tr><td><code>[OPÇÃO]</code></td><td>Colchetes = opcional (pode omitir)</td><td><code>ls [OPÇÃO]</code></td></tr>
          <tr><td><code>&lt;ARQUIVO&gt;</code></td><td>Ângulos = obrigatório (não pode omitir)</td><td><code>chmod &lt;modo&gt; &lt;arquivo&gt;</code></td></tr>
          <tr><td><code>OPÇÃO...</code></td><td>Reticências = pode repetir várias vezes</td><td><code>dnf install PKG...</code></td></tr>
          <tr><td><code>A | B</code></td><td>Pipe = escolha um ou outro</td><td><code>start|stop|restart</code></td></tr>
          <tr><td><code>{"{A,B}"}</code></td><td>Chaves = uma das opções entre chaves</td><td><code>{"{read,write}"}</code></td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
