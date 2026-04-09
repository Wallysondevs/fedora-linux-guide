import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Database, Settings, Shield, FileText, Users, Zap } from "lucide-react";

  export default function PostgreSQL() {
    return (
      <PageContainer
        title="PostgreSQL — Banco de Dados Avançado"
        subtitle="Instale e configure o PostgreSQL no Fedora: criação de bancos, roles, consultas avançadas, JSON, extensões e backup."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Database className="inline-block mr-2 mb-1 w-5 h-5" /> O que é PostgreSQL?</h2>
        <p>
          O <strong>PostgreSQL</strong> (ou "Postgres") é o banco de dados relacional open source mais avançado
          do mundo. Usado por empresas como Instagram, Spotify e Netflix, ele suporta JSON nativo,
          full-text search, extensões como PostGIS (geolocalização), e é extremamente confiável.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar PostgreSQL
  sudo dnf install postgresql-server postgresql

  # Inicializar o banco de dados (NECESSÁRIO antes de iniciar!)
  sudo postgresql-setup --initdb

  # Iniciar e habilitar no boot
  sudo systemctl enable --now postgresql

  # Verificar status
  sudo systemctl status postgresql

  # Acessar como superusuário postgres
  sudo -u postgres psql

  # Sair do psql
  \q`}
          language="bash"
          title="instalação"
        />

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Criar Usuário e Banco</h2>
        <CodeBlock
          code={`# Criar usuário e banco pela linha de comando
  sudo -u postgres createuser --interactive meuusuario
  # Superuser? N
  # Create databases? Y
  # Create roles? N

  sudo -u postgres createdb meuapp -O meuusuario

  # Definir senha para o usuário
  sudo -u postgres psql
  ALTER USER meuusuario WITH PASSWORD 'senha_forte_123';
  \q

  # Ou criar tudo dentro do psql:
  sudo -u postgres psql

  CREATE USER meuusuario WITH PASSWORD 'senha_forte_123';
  CREATE DATABASE meuapp OWNER meuusuario;
  GRANT ALL PRIVILEGES ON DATABASE meuapp TO meuusuario;

  -- Listar bancos
  \l

  -- Listar usuários/roles
  \du

  -- Conectar a um banco
  \c meuapp

  -- Sair
  \q`}
          language="bash"
          title="usuários e bancos"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Tabelas e Tipos de Dados</h2>
        <CodeBlock
          code={`-- Conectar ao banco
  -- psql -U meuusuario -d meuapp

  -- Criar tabela
  CREATE TABLE produtos (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(200) NOT NULL,
      descricao TEXT,
      preco DECIMAL(10, 2) NOT NULL,
      estoque INTEGER DEFAULT 0,
      ativo BOOLEAN DEFAULT TRUE,
      tags TEXT[],
      metadata JSONB,
      criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );

  -- SERIAL = auto-increment
  -- TEXT[] = array de texto (recurso exclusivo do PostgreSQL!)
  -- JSONB = JSON binário (busca e indexação eficiente)

  -- Listar tabelas
  \dt

  -- Ver estrutura
  \d produtos

  -- Criar índice
  CREATE INDEX idx_produtos_nome ON produtos(nome);
  CREATE INDEX idx_produtos_tags ON produtos USING GIN(tags);
  CREATE INDEX idx_produtos_metadata ON produtos USING GIN(metadata);`}
          language="sql"
          title="tabelas"
        />

        <h2>CRUD e Consultas</h2>
        <CodeBlock
          code={`-- INSERT
  INSERT INTO produtos (nome, preco, tags, metadata) VALUES
      ('Notebook Dell', 4500.00, ARRAY['eletrônico', 'computador'],
       '{"marca": "Dell", "ram": "16GB", "ssd": "512GB"}'::jsonb),
      ('Mouse Logitech', 150.00, ARRAY['periférico', 'mouse'],
       '{"marca": "Logitech", "wireless": true}'::jsonb);

  -- SELECT com arrays
  SELECT * FROM produtos WHERE 'eletrônico' = ANY(tags);

  -- SELECT com JSONB
  SELECT nome, metadata->>'marca' AS marca FROM produtos;
  SELECT * FROM produtos WHERE metadata->>'wireless' = 'true';
  SELECT * FROM produtos WHERE metadata @> '{"marca": "Dell"}'::jsonb;

  -- UPDATE
  UPDATE produtos SET preco = 4200.00, atualizado_em = NOW() WHERE id = 1;

  -- DELETE
  DELETE FROM produtos WHERE ativo = FALSE;

  -- Consultas avançadas
  SELECT nome, preco,
      CASE
          WHEN preco > 1000 THEN 'Caro'
          WHEN preco > 100 THEN 'Médio'
          ELSE 'Barato'
      END AS faixa_preco
  FROM produtos;

  -- Full-text search
  SELECT * FROM produtos WHERE to_tsvector('portuguese', nome || ' ' || descricao)
      @@ to_tsquery('portuguese', 'notebook');`}
          language="sql"
          title="CRUD e consultas"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Autenticação (pg_hba.conf)</h2>
        <CodeBlock
          code={`# Editar arquivo de autenticação
  sudo vim /var/lib/pgsql/data/pg_hba.conf

  # Formato:
  # TYPE   DATABASE   USER   ADDRESS       METHOD
  # local  all        all                  peer      ← autenticação por SO
  # host   all        all    127.0.0.1/32  md5       ← autenticação por senha
  # host   all        all    ::1/128       md5

  # Para conectar com senha (md5) em vez de peer:
  # Mude "peer" para "md5" na linha "local"

  # Para permitir conexão de outro IP:
  # host   meuapp     meuusuario   192.168.1.0/24   md5

  # Reiniciar após mudanças
  sudo systemctl restart postgresql

  # Conectar com senha
  psql -U meuusuario -d meuapp -h localhost`}
          language="bash"
          title="autenticação"
        />

        <h2>Backup e Restauração</h2>
        <CodeBlock
          code={`# Backup de um banco
  pg_dump -U postgres meuapp > backup-meuapp.sql

  # Backup com compressão
  pg_dump -U postgres meuapp | gzip > backup-meuapp.sql.gz

  # Backup de todos os bancos
  pg_dumpall -U postgres > backup-total.sql

  # Backup em formato custom (melhor para restauração parcial)
  pg_dump -U postgres -Fc meuapp > backup-meuapp.dump

  # Restaurar
  psql -U postgres meuapp < backup-meuapp.sql

  # Restaurar formato custom
  pg_restore -U postgres -d meuapp backup-meuapp.dump

  # Restaurar tabela específica
  pg_restore -U postgres -d meuapp -t produtos backup-meuapp.dump`}
          language="bash"
          title="backup"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Extensões Populares</h2>
        <CodeBlock
          code={`-- Listar extensões disponíveis
  SELECT * FROM pg_available_extensions;

  -- Instalar extensões
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";   -- UUIDs
  CREATE EXTENSION IF NOT EXISTS "pg_trgm";     -- Busca por similaridade
  CREATE EXTENSION IF NOT EXISTS "hstore";      -- Pares chave-valor

  -- Usar UUIDs como ID
  CREATE TABLE minha_tabela (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nome TEXT
  );

  -- Busca por similaridade
  SELECT nome FROM produtos WHERE similarity(nome, 'notbok') > 0.3;`}
          language="sql"
          title="extensões"
        />

        <h2>Comandos Úteis do psql</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>\l</code></td><td>Listar bancos de dados</td></tr>
            <tr><td><code>\c meudb</code></td><td>Conectar a um banco</td></tr>
            <tr><td><code>\dt</code></td><td>Listar tabelas</td></tr>
            <tr><td><code>\d tabela</code></td><td>Descrever tabela</td></tr>
            <tr><td><code>\du</code></td><td>Listar usuários/roles</td></tr>
            <tr><td><code>\di</code></td><td>Listar índices</td></tr>
            <tr><td><code>\df</code></td><td>Listar funções</td></tr>
            <tr><td><code>\x</code></td><td>Modo expandido (vertical)</td></tr>
            <tr><td><code>\timing</code></td><td>Mostrar tempo de execução</td></tr>
            <tr><td><code>\q</code></td><td>Sair do psql</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="PostgreSQL vs MariaDB">
          Use <strong>PostgreSQL</strong> para projetos que precisam de JSON, arrays, full-text search ou extensões.
          Use <strong>MariaDB</strong> para aplicações mais simples onde compatibilidade com MySQL importa.
          Ambos são excelentes — a escolha depende das necessidades do projeto.
        </AlertBox>
      </PageContainer>
    );
  }
  