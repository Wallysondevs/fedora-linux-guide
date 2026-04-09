import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Settings, FileText, Terminal, Shield, Globe, Key } from "lucide-react";

  export default function VariaveisAmbiente() {
    return (
      <PageContainer
        title="Variáveis de Ambiente"
        subtitle="Entenda e configure variáveis de ambiente no Fedora: PATH, HOME, variáveis personalizadas, .bashrc, .bash_profile e exportação."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> O que são Variáveis de Ambiente?</h2>
        <p>
          Variáveis de ambiente são valores nomeados que ficam disponíveis para todos os processos
          do sistema. Elas configuram comportamentos como onde o sistema busca executáveis (<code>PATH</code>),
          qual é o diretório home (<code>HOME</code>), qual editor usar (<code>EDITOR</code>), e muito mais.
        </p>
        <p>
          São fundamentais para: configurar ferramentas de desenvolvimento, definir credenciais de API,
          personalizar o comportamento do shell e compartilhar configurações entre programas.
        </p>

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Variáveis Importantes do Sistema</h2>
        <table>
          <thead><tr><th>Variável</th><th>Descrição</th><th>Exemplo de Valor</th></tr></thead>
          <tbody>
            <tr><td><code>HOME</code></td><td>Diretório home do usuário</td><td><code>/home/joao</code></td></tr>
            <tr><td><code>USER</code></td><td>Nome do usuário atual</td><td><code>joao</code></td></tr>
            <tr><td><code>PATH</code></td><td>Diretórios onde buscar executáveis</td><td><code>/usr/bin:/usr/local/bin</code></td></tr>
            <tr><td><code>SHELL</code></td><td>Shell padrão do usuário</td><td><code>/bin/bash</code></td></tr>
            <tr><td><code>LANG</code></td><td>Idioma/localização</td><td><code>pt_BR.UTF-8</code></td></tr>
            <tr><td><code>EDITOR</code></td><td>Editor de texto padrão</td><td><code>vim</code></td></tr>
            <tr><td><code>TERM</code></td><td>Tipo de terminal</td><td><code>xterm-256color</code></td></tr>
            <tr><td><code>PWD</code></td><td>Diretório atual</td><td><code>/home/joao/projetos</code></td></tr>
            <tr><td><code>HOSTNAME</code></td><td>Nome do computador</td><td><code>fedora-desktop</code></td></tr>
            <tr><td><code>XDG_SESSION_TYPE</code></td><td>Tipo de sessão gráfica</td><td><code>wayland</code></td></tr>
          </tbody>
        </table>

        <h2>Visualizar e Usar Variáveis</h2>
        <CodeBlock
          code={`# Ver TODAS as variáveis de ambiente
  env
  printenv

  # Ver uma variável específica
  echo $HOME
  echo $PATH
  echo $USER
  printenv HOME

  # Ver variáveis em formato mais legível
  env | sort

  # Usar variáveis em comandos
  cd $HOME
  ls $HOME/Downloads
  echo "Olá, $USER! Seu shell é $SHELL"`}
          language="bash"
          title="visualizar variáveis"
        />

        <h2><Key className="inline-block mr-2 mb-1 w-5 h-5" /> Criar e Exportar Variáveis</h2>
        <CodeBlock
          code={`# Criar variável local (só existe no shell atual)
  MEU_NOME="João da Silva"
  echo $MEU_NOME

  # Exportar variável (disponível para processos filhos)
  export API_KEY="minha-chave-secreta"
  export EDITOR="vim"
  export LANG="pt_BR.UTF-8"

  # Criar e exportar em uma linha
  export DATABASE_URL="postgres://user:pass@localhost/meudb"

  # Remover variável
  unset MEU_NOME

  # Diferença entre local e export:
  VARIAVEL_LOCAL="teste"        # só no shell atual
  export VARIAVEL_GLOBAL="teste" # disponível para subprocessos

  # Verificar se está exportada
  export -p | grep VARIAVEL`}
          language="bash"
          title="criar variáveis"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Persistir Variáveis</h2>
        <p>
          Variáveis criadas no terminal desaparecem ao fechar o shell. Para torná-las permanentes,
          adicione-as aos arquivos de configuração:
        </p>
        <table>
          <thead><tr><th>Arquivo</th><th>Quando é lido</th><th>Usar para</th></tr></thead>
          <tbody>
            <tr><td><code>~/.bashrc</code></td><td>Cada novo terminal (shell interativo)</td><td>Aliases, funções, variáveis do dia-a-dia</td></tr>
            <tr><td><code>~/.bash_profile</code></td><td>Login (uma vez)</td><td>PATH, variáveis de sessão</td></tr>
            <tr><td><code>/etc/environment</code></td><td>Login (global)</td><td>Variáveis para todos os usuários</td></tr>
            <tr><td><code>/etc/profile.d/*.sh</code></td><td>Login (global)</td><td>Scripts de configuração do sistema</td></tr>
          </tbody>
        </table>

        <CodeBlock
          code={`# Adicionar ao ~/.bashrc (mais comum)
  echo 'export EDITOR="vim"' >> ~/.bashrc
  echo 'export GOPATH="$HOME/go"' >> ~/.bashrc

  # Aplicar mudanças sem fechar o terminal
  source ~/.bashrc

  # Adicionar ao PATH (permanente)
  echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
  echo 'export PATH="$HOME/go/bin:$PATH"' >> ~/.bashrc

  # Variável global (para todos os usuários)
  echo 'EDITOR=vim' | sudo tee -a /etc/environment

  # Script no profile.d (para todos os usuários)
  sudo cat > /etc/profile.d/meuvars.sh << 'EOF'
  export APP_ENV="production"
  export APP_PORT=8080
  EOF`}
          language="bash"
          title="persistir variáveis"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> PATH — A Variável Mais Importante</h2>
        <p>
          O <code>PATH</code> define onde o sistema procura executáveis quando você digita um comando.
          Quando você digita <code>firefox</code>, o sistema procura em cada diretório do PATH na ordem.
        </p>
        <CodeBlock
          code={`# Ver o PATH atual
  echo $PATH
  # /home/joao/.local/bin:/usr/local/bin:/usr/bin:/bin

  # Adicionar diretório ao PATH (temporário)
  export PATH="$HOME/meus-scripts:$PATH"

  # Adicionar permanentemente (~/.bashrc)
  echo 'export PATH="$HOME/meus-scripts:$PATH"' >> ~/.bashrc

  # Verificar onde um comando está
  which firefox
  # /usr/bin/firefox

  type firefox
  # firefox is /usr/bin/firefox

  # Listar diretórios do PATH (um por linha)
  echo $PATH | tr ':' '\n'`}
          language="bash"
          title="PATH"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Variáveis para Desenvolvimento</h2>
        <CodeBlock
          code={`# Exemplo de .bashrc para desenvolvedor
  # Adicione estas linhas ao ~/.bashrc:

  # Editor padrão
  export EDITOR="vim"
  export VISUAL="code"

  # Go
  export GOPATH="$HOME/go"
  export PATH="$GOPATH/bin:$PATH"

  # Rust
  source "$HOME/.cargo/env"

  # Node.js (nvm)
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

  # Python
  export PYTHONDONTWRITEBYTECODE=1

  # Java
  export JAVA_HOME="/usr/lib/jvm/java-21-openjdk"
  export PATH="$JAVA_HOME/bin:$PATH"

  # Chaves de API (NUNCA commite no Git!)
  export OPENAI_API_KEY="sk-..."
  export DATABASE_URL="postgres://..."

  # Aplicar mudanças
  source ~/.bashrc`}
          language="bash"
          title="variáveis de desenvolvimento"
        />

        <AlertBox type="danger" title="Segurança de variáveis">
          Nunca coloque senhas ou chaves de API em arquivos que são versionados no Git! Use <code>~/.bashrc</code>
          (que não vai para o repositório) ou ferramentas como <code>direnv</code> com <code>.envrc</code> local.
        </AlertBox>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Variável não persiste</td><td>Adicione ao <code>~/.bashrc</code> e execute <code>source ~/.bashrc</code></td></tr>
            <tr><td>Comando não encontrado</td><td>Verifique se o diretório está no <code>PATH</code></td></tr>
            <tr><td>Variável vazia</td><td>Use <code>echo $VAR</code> para verificar; confira se exportou com <code>export</code></td></tr>
            <tr><td>Variável funciona no terminal mas não no app</td><td>Apps gráficos não lêem <code>.bashrc</code>; use <code>/etc/environment</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  