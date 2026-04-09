import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { GitBranch, Settings, Users, Undo2, Eye, Zap } from "lucide-react";

  export default function Git() {
    return (
      <PageContainer
        title="Git — Controle de Versão"
        subtitle="Domine o Git no Fedora: configuração, branches, merges, resolução de conflitos, rebase, stash e fluxos de trabalho."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><GitBranch className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Git?</h2>
        <p>
          O <strong>Git</strong> é o sistema de controle de versão mais usado no mundo. Ele rastreia
          todas as mudanças nos seus arquivos, permite voltar a versões anteriores, trabalhar em
          paralelo com branches e colaborar com outras pessoas via GitHub, GitLab ou Gitea.
        </p>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação e Configuração</h2>
        <CodeBlock
          code={`# Git já vem instalado no Fedora, mas pode atualizar
  sudo dnf install git

  # Configuração inicial (OBRIGATÓRIA)
  git config --global user.name "Seu Nome"
  git config --global user.email "seu@email.com"

  # Configurações recomendadas
  git config --global init.defaultBranch main
  git config --global core.editor vim
  git config --global color.ui auto
  git config --global pull.rebase false
  git config --global push.autoSetupRemote true

  # Ver todas as configurações
  git config --list

  # Gerar chave SSH para GitHub/GitLab
  ssh-keygen -t ed25519 -C "seu@email.com"
  cat ~/.ssh/id_ed25519.pub
  # Copie e adicione em GitHub > Settings > SSH Keys`}
          language="bash"
          title="configuração"
        />

        <h2>Comandos Essenciais</h2>
        <CodeBlock
          code={`# Criar novo repositório
  git init
  git init meu-projeto

  # Clonar repositório existente
  git clone https://github.com/usuario/repo.git
  git clone git@github.com:usuario/repo.git   # via SSH

  # Ver status
  git status
  git status -s    # formato curto

  # Adicionar arquivos ao staging
  git add arquivo.txt         # um arquivo
  git add .                   # todos os arquivos
  git add *.py                # todos os .py
  git add -p                  # interativo (escolher trechos)

  # Commit
  git commit -m "Descrição clara do que foi feito"
  git commit -am "Commit + add de arquivos tracked"

  # Ver histórico
  git log
  git log --oneline           # uma linha por commit
  git log --oneline --graph   # com gráfico de branches
  git log --oneline -10       # últimos 10 commits
  git log -p arquivo.txt      # mudanças no arquivo`}
          language="bash"
          title="comandos essenciais"
        />

        <h2>Branches</h2>
        <CodeBlock
          code={`# Listar branches
  git branch              # locais
  git branch -a           # locais + remotas

  # Criar branch
  git branch nova-feature

  # Mudar para branch
  git checkout nova-feature
  git switch nova-feature        # moderno

  # Criar e mudar para branch
  git checkout -b nova-feature
  git switch -c nova-feature     # moderno

  # Merge (trazer mudanças de outra branch)
  git checkout main
  git merge nova-feature

  # Deletar branch (após merge)
  git branch -d nova-feature
  git branch -D nova-feature     # forçar

  # Renomear branch
  git branch -m nome-antigo nome-novo`}
          language="bash"
          title="branches"
        />

        <h2><Undo2 className="inline-block mr-2 mb-1 w-5 h-5" /> Desfazer Mudanças</h2>
        <CodeBlock
          code={`# Desfazer mudanças em arquivo (não commitado)
  git checkout -- arquivo.txt
  git restore arquivo.txt        # moderno

  # Remover do staging (após git add)
  git reset HEAD arquivo.txt
  git restore --staged arquivo.txt  # moderno

  # Desfazer último commit (mantém mudanças)
  git reset --soft HEAD~1

  # Desfazer último commit (descarta mudanças)
  git reset --hard HEAD~1

  # Criar commit que desfaz outro (seguro para branches compartilhadas)
  git revert abc1234

  # Stash — guardar mudanças temporariamente
  git stash                  # guardar
  git stash list             # listar
  git stash pop              # restaurar e remover do stash
  git stash apply            # restaurar sem remover
  git stash drop             # remover do stash`}
          language="bash"
          title="desfazer"
        />

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Trabalho Remoto</h2>
        <CodeBlock
          code={`# Ver repositórios remotos
  git remote -v

  # Adicionar remoto
  git remote add origin https://github.com/usuario/repo.git

  # Push (enviar commits)
  git push origin main
  git push -u origin main    # definir upstream

  # Pull (buscar e mesclar)
  git pull origin main

  # Fetch (buscar sem mesclar)
  git fetch origin

  # Ver diferenças com remoto
  git diff main..origin/main`}
          language="bash"
          title="remoto"
        />

        <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> Comparar Mudanças</h2>
        <CodeBlock
          code={`# Ver mudanças não commitadas
  git diff

  # Ver mudanças no staging
  git diff --staged

  # Comparar branches
  git diff main..feature

  # Comparar commits
  git diff abc1234..def5678

  # Ver o que mudou em um commit
  git show abc1234

  # Quem alterou cada linha de um arquivo
  git blame arquivo.txt`}
          language="bash"
          title="comparar"
        />

        <h2>.gitignore</h2>
        <CodeBlock
          code={`# .gitignore — Arquivos que o Git deve ignorar
  # Dependências
  node_modules/
  vendor/
  venv/
  __pycache__/

  # Build
  dist/
  build/
  *.o
  *.class

  # IDE
  .vscode/
  .idea/
  *.swp

  # Ambiente
  .env
  .env.local
  *.log

  # OS
  .DS_Store
  Thumbs.db`}
          language="gitignore"
          title=".gitignore"
        />

        <h2>Referência Rápida</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>git init</code></td><td>Criar repositório</td></tr>
            <tr><td><code>git clone URL</code></td><td>Clonar repositório</td></tr>
            <tr><td><code>git add .</code></td><td>Adicionar todos ao staging</td></tr>
            <tr><td><code>git commit -m "msg"</code></td><td>Criar commit</td></tr>
            <tr><td><code>git push</code></td><td>Enviar para remoto</td></tr>
            <tr><td><code>git pull</code></td><td>Baixar e mesclar</td></tr>
            <tr><td><code>git branch</code></td><td>Listar branches</td></tr>
            <tr><td><code>git switch -c nome</code></td><td>Criar e mudar branch</td></tr>
            <tr><td><code>git merge branch</code></td><td>Mesclar branch</td></tr>
            <tr><td><code>git log --oneline</code></td><td>Histórico resumido</td></tr>
            <tr><td><code>git stash</code></td><td>Guardar temporariamente</td></tr>
            <tr><td><code>git diff</code></td><td>Ver mudanças</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Mensagens de commit">
          Escreva mensagens claras e no imperativo: "Adicionar validação de email" em vez de
          "Adicionei validação" ou "Validação adicionada". Isso facilita a leitura do histórico.
        </AlertBox>
      </PageContainer>
    );
  }
  