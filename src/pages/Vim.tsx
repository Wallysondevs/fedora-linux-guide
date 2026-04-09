import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { FileText, Settings, Keyboard, Zap, BookOpen, Save } from "lucide-react";

  export default function Vim() {
    return (
      <PageContainer
        title="Vim — Editor de Texto no Terminal"
        subtitle="Domine o editor de texto mais poderoso do Linux: modos de operação, comandos essenciais, busca, substituição, macros e configuração do .vimrc."
        difficulty="intermediario"
        timeToRead="40 min"
      >
        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> O que é o Vim?</h2>
        <p>
          O <strong>Vim</strong> (Vi Improved) é um dos editores de texto mais poderosos e eficientes do mundo Linux.
          Ele funciona inteiramente no terminal, não precisa de mouse, e depois que você aprende seus
          comandos, a produtividade dispara. O Vim é o editor padrão em muitos sistemas e está
          disponível em praticamente qualquer servidor Linux.
        </p>
        <p>
          O Vim pode parecer estranho no início porque usa <strong>modos de operação</strong> — você não digita
          texto diretamente ao abrir. Mas isso é justamente o que o torna tão eficiente: cada tecla
          tem uma função diferente dependendo do modo.
        </p>

        <CodeBlock
          code={`# Instalar o Vim no Fedora
  sudo dnf install vim-enhanced

  # Abrir um arquivo
  vim arquivo.txt

  # Abrir e ir direto para uma linha
  vim +42 arquivo.txt

  # Abrir em modo somente leitura
  vim -R arquivo.txt

  # Abrir múltiplos arquivos
  vim arquivo1.txt arquivo2.txt

  # Verificar a versão
  vim --version | head -1`}
          language="bash"
          title="instalar e abrir"
        />

        <h2><Keyboard className="inline-block mr-2 mb-1 w-5 h-5" /> Modos de Operação</h2>
        <p>
          O Vim tem vários modos. Os três principais que você precisa conhecer:
        </p>
        <table>
          <thead><tr><th>Modo</th><th>Tecla para Entrar</th><th>O que Faz</th><th>Indicador</th></tr></thead>
          <tbody>
            <tr><td><strong>Normal</strong></td><td><code>Esc</code></td><td>Navegação e comandos (modo padrão ao abrir)</td><td>Nada no rodapé</td></tr>
            <tr><td><strong>Inserção</strong></td><td><code>i</code>, <code>a</code>, <code>o</code></td><td>Digitar texto (como um editor normal)</td><td><code>-- INSERT --</code></td></tr>
            <tr><td><strong>Visual</strong></td><td><code>v</code>, <code>V</code>, <code>Ctrl+v</code></td><td>Selecionar texto</td><td><code>-- VISUAL --</code></td></tr>
            <tr><td><strong>Comando</strong></td><td><code>:</code></td><td>Executar comandos (salvar, sair, buscar)</td><td><code>:</code> no rodapé</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="A regra de ouro">
          Quando estiver perdido, pressione <code>Esc</code> para voltar ao modo Normal. Sempre.
          A partir do Normal, você pode ir para qualquer outro modo.
        </AlertBox>

        <h2><Save className="inline-block mr-2 mb-1 w-5 h-5" /> Comandos Essenciais</h2>

        <h3>Salvar e Sair</h3>
        <CodeBlock
          code={`# No modo Normal, pressione : para entrar no modo Comando

  :w              # Salvar (Write)
  :q              # Sair (Quit) — só funciona se não houver mudanças
  :wq             # Salvar e sair
  :q!             # Sair SEM salvar (forçar saída)
  :wq!            # Salvar e sair forçando
  :x              # Salvar (se modificado) e sair
  ZZ              # Atalho: salvar e sair (no modo Normal, sem :)
  ZQ              # Atalho: sair sem salvar

  # Salvar como outro nome
  :w novo-arquivo.txt

  # Salvar e executar comando externo
  :w !sudo tee %  # Salvar arquivo que precisa de sudo (truque!)`}
          language="vim"
          title="salvar e sair"
        />

        <h3>Entrar no Modo de Inserção</h3>
        <CodeBlock
          code={`# Estando no modo Normal, pressione:
  i       # Inserir ANTES do cursor
  a       # Inserir DEPOIS do cursor (append)
  I       # Inserir no INÍCIO da linha
  A       # Inserir no FINAL da linha
  o       # Criar nova linha ABAIXO e inserir
  O       # Criar nova linha ACIMA e inserir
  s       # Apagar caractere atual e inserir
  S       # Apagar linha inteira e inserir

  # Para SAIR do modo de inserção:
  Esc     # Voltar ao modo Normal`}
          language="vim"
          title="modo de inserção"
        />

        <h3>Navegação (Modo Normal)</h3>
        <CodeBlock
          code={`# Movimentação básica (use em vez das setas!)
  h       # ← esquerda
  j       # ↓ baixo
  k       # ↑ cima
  l       # → direita

  # Movimentação por palavras
  w       # Início da próxima palavra
  b       # Início da palavra anterior
  e       # Final da próxima palavra
  W/B/E   # Mesmo, mas considera espaço como separador

  # Movimentação por linha
  0       # Início da linha
  ^       # Primeiro caractere não-branco
  $       # Final da linha

  # Movimentação por tela
  gg      # Primeira linha do arquivo
  G       # Última linha do arquivo
  42G     # Ir para a linha 42 (ou :42)
  Ctrl+f  # Página para baixo (forward)
  Ctrl+b  # Página para cima (backward)
  Ctrl+d  # Meia página para baixo
  Ctrl+u  # Meia página para cima
  H       # Topo da tela (High)
  M       # Meio da tela (Middle)
  L       # Final da tela (Low)

  # Movimentação por blocos
  {       # Parágrafo anterior
  }       # Próximo parágrafo
  %       # Ir para parêntese/chave correspondente`}
          language="vim"
          title="navegação"
        />

        <h3>Edição (Modo Normal)</h3>
        <CodeBlock
          code={`# Apagar
  x       # Apagar caractere sob o cursor
  dd      # Apagar (cortar) linha inteira
  dw      # Apagar do cursor até o fim da palavra
  d$      # Apagar do cursor até o fim da linha
  d0      # Apagar do cursor até o início da linha
  5dd     # Apagar 5 linhas
  D       # Apagar até o final da linha (= d$)

  # Copiar e colar
  yy      # Copiar (yank) linha inteira
  yw      # Copiar palavra
  y$      # Copiar até o fim da linha
  p       # Colar DEPOIS do cursor
  P       # Colar ANTES do cursor
  5yy     # Copiar 5 linhas

  # Desfazer e refazer
  u       # Desfazer (undo) — pode pressionar várias vezes
  Ctrl+r  # Refazer (redo)

  # Substituir
  r       # Substituir UM caractere (pressione r e depois o novo)
  R       # Modo Replace (substituir continuamente)
  cw      # Apagar palavra e entrar em modo inserção (change word)
  cc      # Apagar linha e entrar em modo inserção
  C       # Apagar até o fim da linha e inserir (= c$)
  ciw     # Apagar palavra inteira e inserir (change inner word)
  ci"     # Apagar conteúdo entre " e inserir
  ci(     # Apagar conteúdo entre () e inserir

  # Outros
  .       # Repetir último comando (muito útil!)
  J       # Juntar linha atual com a de baixo
  ~       # Alternar maiúscula/minúscula
  >>      # Indentar linha para direita
  <<      # Indentar linha para esquerda
  ==      # Auto-indentar linha`}
          language="vim"
          title="edição"
        />

        <h2>Busca e Substituição</h2>
        <CodeBlock
          code={`# Buscar
  /palavra        # Buscar "palavra" para frente
  ?palavra        # Buscar "palavra" para trás
  n               # Próxima ocorrência
  N               # Ocorrência anterior
  *               # Buscar a palavra sob o cursor (próxima)
  #               # Buscar a palavra sob o cursor (anterior)

  # Substituir (modo Comando)
  :s/antigo/novo/         # Substituir primeira ocorrência na linha atual
  :s/antigo/novo/g        # Substituir TODAS as ocorrências na linha
  :%s/antigo/novo/g       # Substituir em TODO o arquivo
  :%s/antigo/novo/gc      # Substituir com confirmação (y/n para cada)

  # Exemplos práticos
  :%s/http:/https:/g           # Trocar http por https
  :%s/\t/  /g                  # Trocar tabs por 2 espaços
  :%s/^/#/                     # Comentar todas as linhas (adicionar # no início)
  :%s/^#//                     # Descomentar (remover # do início)
  :%s/\s\+$//                  # Remover espaços em branco no final das linhas`}
          language="vim"
          title="busca e substituição"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Modo Visual (Seleção)</h2>
        <CodeBlock
          code={`# Entrar no modo Visual (a partir do Normal)
  v       # Seleção por caractere
  V       # Seleção por linha (mais útil)
  Ctrl+v  # Seleção em bloco (colunas!)

  # Depois de selecionar, use:
  d       # Apagar seleção
  y       # Copiar seleção
  >       # Indentar seleção
  <       # Desindentar seleção
  :       # Aplicar comando na seleção
  U       # Converter para maiúsculas
  u       # Converter para minúsculas

  # Seleção em bloco (Ctrl+v) é incrível para:
  # - Comentar/descomentar várias linhas de uma vez
  # - Editar colunas de texto
  # Exemplo: adicionar # no início de 10 linhas:
  # 1. Ctrl+v → selecione as 10 linhas
  # 2. I (maiúsculo) → digite #
  # 3. Esc → aplicado a todas as linhas!`}
          language="vim"
          title="modo visual"
        />

        <h2>Trabalhando com Múltiplos Arquivos</h2>
        <CodeBlock
          code={`# Dividir tela horizontalmente
  :split arquivo.txt
  :sp arquivo.txt          # atalho

  # Dividir tela verticalmente
  :vsplit arquivo.txt
  :vsp arquivo.txt         # atalho

  # Navegar entre janelas
  Ctrl+w h    # Janela à esquerda
  Ctrl+w j    # Janela abaixo
  Ctrl+w k    # Janela acima
  Ctrl+w l    # Janela à direita
  Ctrl+w w    # Próxima janela

  # Tabs (abas)
  :tabnew arquivo.txt     # Abrir em nova aba
  :tabn                   # Próxima aba
  :tabp                   # Aba anterior
  gt                      # Próxima aba (modo normal)
  gT                      # Aba anterior (modo normal)

  # Buffers
  :e arquivo2.txt         # Abrir arquivo no buffer atual
  :bn                     # Próximo buffer
  :bp                     # Buffer anterior
  :ls                     # Listar buffers abertos
  :b2                     # Ir para o buffer 2`}
          language="vim"
          title="múltiplos arquivos"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração (.vimrc)</h2>
        <p>
          O arquivo <code>~/.vimrc</code> armazena suas configurações pessoais do Vim. Crie ou edite com <code>vim ~/.vimrc</code>:
        </p>
        <CodeBlock
          code={`" === Configuração básica recomendada para o Vim ===
  " Cole em ~/.vimrc

  " Geral
  set nocompatible           " Desativar compatibilidade com vi
  set encoding=utf-8         " Codificação UTF-8
  set fileencoding=utf-8     " Salvar em UTF-8
  syntax on                  " Habilitar syntax highlighting
  filetype plugin indent on  " Detecção de tipo de arquivo

  " Interface
  set number                 " Mostrar números de linha
  set relativenumber         " Números relativos (útil para navegação)
  set cursorline             " Destacar linha atual
  set showmatch              " Destacar parênteses correspondentes
  set showcmd                " Mostrar comando parcial
  set wildmenu               " Menu de auto-completar no modo comando
  set laststatus=2           " Sempre mostrar barra de status
  set ruler                  " Mostrar posição do cursor
  set scrolloff=8            " Manter 8 linhas visíveis acima/abaixo

  " Indentação
  set tabstop=4              " Tab = 4 espaços visualmente
  set shiftwidth=4           " Indentação automática = 4 espaços
  set expandtab              " Usar espaços em vez de tab
  set autoindent             " Manter indentação da linha anterior
  set smartindent            " Indentação inteligente

  " Busca
  set hlsearch               " Destacar resultados da busca
  set incsearch              " Busca incremental (enquanto digita)
  set ignorecase             " Ignorar maiúsculas/minúsculas
  set smartcase              " Se buscar com maiúscula, ser case-sensitive

  " Performance
  set lazyredraw             " Não redesenhar durante macros
  set ttyfast                " Terminal rápido

  " Mouse (opcional)
  set mouse=a                " Habilitar mouse em todos os modos

  " Backup
  set noswapfile             " Não criar arquivos .swp
  set nobackup               " Não criar backups
  set undodir=~/.vim/undodir " Diretório para undo persistente
  set undofile               " Undo persiste entre sessões`}
          language="vim"
          title="~/.vimrc"
        />

        <h2><BookOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Referência Rápida</h2>
        <table>
          <thead><tr><th>Ação</th><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td>Salvar</td><td><code>:w</code></td><td>Salvar arquivo</td></tr>
            <tr><td>Sair</td><td><code>:q</code></td><td>Sair do Vim</td></tr>
            <tr><td>Salvar e sair</td><td><code>:wq</code> ou <code>ZZ</code></td><td>Salvar e fechar</td></tr>
            <tr><td>Sair sem salvar</td><td><code>:q!</code></td><td>Forçar saída</td></tr>
            <tr><td>Inserir texto</td><td><code>i</code></td><td>Modo inserção</td></tr>
            <tr><td>Apagar linha</td><td><code>dd</code></td><td>Cortar linha</td></tr>
            <tr><td>Copiar linha</td><td><code>yy</code></td><td>Copiar (yank)</td></tr>
            <tr><td>Colar</td><td><code>p</code></td><td>Colar após cursor</td></tr>
            <tr><td>Desfazer</td><td><code>u</code></td><td>Undo</td></tr>
            <tr><td>Refazer</td><td><code>Ctrl+r</code></td><td>Redo</td></tr>
            <tr><td>Buscar</td><td><code>/texto</code></td><td>Buscar para frente</td></tr>
            <tr><td>Substituir</td><td><code>:%s/a/b/g</code></td><td>Substituir em todo arquivo</td></tr>
            <tr><td>Ir para linha</td><td><code>42G</code> ou <code>:42</code></td><td>Pular para linha 42</td></tr>
            <tr><td>Repetir</td><td><code>.</code></td><td>Repetir último comando</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Dica para iniciantes">
          Comece aprendendo apenas: <code>i</code> (inserir), <code>Esc</code> (sair do insert), <code>:wq</code> (salvar e sair),
          <code>dd</code> (apagar linha), <code>u</code> (desfazer). Com esses 5 comandos você já consegue usar o Vim
          para edição básica. Vá adicionando novos comandos ao seu repertório gradualmente.
        </AlertBox>

        <AlertBox type="info" title="Vimtutor">
          O Fedora inclui um tutorial interativo do Vim. Execute <code>vimtutor</code> no terminal para
          uma aula prática de 30 minutos que ensina os comandos essenciais.
        </AlertBox>
      </PageContainer>
    );
  }
  