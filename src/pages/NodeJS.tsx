import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Package, Settings, Terminal, Zap, Globe } from "lucide-react";

  export default function NodeJS() {
    return (
      <PageContainer
        title="Node.js no Fedora"
        subtitle="Configure o Node.js no Fedora: instalação via DNF e NVM, npm/pnpm/yarn, gerenciamento de versões e frameworks populares."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> Node.js no Fedora</h2>
        <p>
          O <strong>Node.js</strong> permite executar JavaScript fora do navegador, ideal para servidores web,
          APIs, ferramentas CLI e muito mais. O Fedora oferece Node.js via DNF ou via <strong>NVM</strong>
          (Node Version Manager) para gerenciar múltiplas versões.
        </p>

        <h2>Instalação via DNF</h2>
        <CodeBlock
          code={`# Instalar Node.js (versão do repositório Fedora)
  sudo dnf install nodejs npm

  # Verificar versões
  node --version
  npm --version

  # Instalar versão LTS específica via módulos
  sudo dnf module list nodejs
  sudo dnf module install nodejs:20/default`}
          language="bash"
          title="instalação DNF"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação via NVM (Recomendado)</h2>
        <CodeBlock
          code={`# Instalar NVM
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

  # Recarregar terminal
  source ~/.bashrc

  # Instalar versão LTS mais recente
  nvm install --lts

  # Instalar versão específica
  nvm install 20
  nvm install 18

  # Listar versões instaladas
  nvm ls

  # Trocar versão
  nvm use 20
  nvm use 18

  # Definir versão padrão
  nvm alias default 20

  # Usar em projeto específico (.nvmrc)
  echo "20" > .nvmrc
  nvm use    # lê do .nvmrc`}
          language="bash"
          title="NVM"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciadores de Pacotes</h2>
        <CodeBlock
          code={`# npm (vem com Node.js)
  npm init -y                    # criar package.json
  npm install express            # instalar pacote
  npm install -D typescript      # dependência de desenvolvimento
  npm install -g nodemon         # instalar globalmente
  npm uninstall pacote           # remover
  npm update                     # atualizar tudo
  npm run start                  # executar script
  npm list                       # listar dependências

  # pnpm (mais rápido e eficiente que npm)
  npm install -g pnpm
  pnpm init
  pnpm add express
  pnpm add -D typescript
  pnpm install
  pnpm run dev

  # yarn
  npm install -g yarn
  yarn init -y
  yarn add express
  yarn add -D typescript
  yarn install
  yarn dev`}
          language="bash"
          title="gerenciadores"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Criar Projeto</h2>
        <CodeBlock
          code={`# Projeto Express.js básico
  mkdir meu-api && cd meu-api
  npm init -y
  npm install express

  # Criar server.js
  cat > server.js << 'EOF'
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ mensagem: 'API funcionando!' });
  });

  app.listen(PORT, () => {
    console.log(\`Servidor rodando na porta \${PORT}\`);
  });
  EOF

  # Executar
  node server.js

  # Criar projeto React
  npx create-react-app meu-app
  cd meu-app && npm start

  # Criar projeto Next.js
  npx create-next-app@latest meu-site
  cd meu-site && npm run dev

  # Criar projeto Vite (React/Vue/Svelte)
  npm create vite@latest meu-projeto -- --template react-ts`}
          language="bash"
          title="criar projetos"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Dicas de Produção</h2>
        <CodeBlock
          code={`# PM2 — gerenciador de processos para produção
  npm install -g pm2

  pm2 start server.js          # iniciar
  pm2 start server.js -i max   # cluster mode (usa todos os CPUs)
  pm2 list                     # listar processos
  pm2 logs                     # ver logs
  pm2 restart all              # reiniciar
  pm2 stop all                 # parar
  pm2 startup                  # iniciar com o sistema
  pm2 save                     # salvar lista de processos

  # Variáveis de ambiente
  PORT=8080 node server.js

  # Ou com .env
  npm install dotenv
  # No código: require('dotenv').config()

  # Executar com auto-reload (desenvolvimento)
  npm install -g nodemon
  nodemon server.js`}
          language="bash"
          title="produção"
        />

        <h2>npm vs pnpm vs yarn</h2>
        <table>
          <thead><tr><th>Recurso</th><th>npm</th><th>pnpm</th><th>yarn</th></tr></thead>
          <tbody>
            <tr><td>Velocidade</td><td>Médio</td><td>Rápido</td><td>Rápido</td></tr>
            <tr><td>Espaço em disco</td><td>Alto</td><td>Baixo (links)</td><td>Médio</td></tr>
            <tr><td>Lock file</td><td>package-lock.json</td><td>pnpm-lock.yaml</td><td>yarn.lock</td></tr>
            <tr><td>Já vem com Node</td><td>Sim</td><td>Não</td><td>Não</td></tr>
            <tr><td>Workspaces</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Recomendação">
          Para projetos novos no Fedora, use <strong>NVM</strong> para gerenciar versões do Node.js e
          <strong> pnpm</strong> como gerenciador de pacotes. O pnpm é mais rápido e economiza espaço
          em disco por usar hard links compartilhados.
        </AlertBox>
      </PageContainer>
    );
  }
  