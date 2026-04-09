import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Database, Settings, Shield, FileText, Users, Search } from "lucide-react";

  export default function MySQL() {
    return (
      <PageContainer
        title="MySQL/MariaDB — Banco de Dados Relacional"
        subtitle="Instale e configure o MariaDB no Fedora: criação de bancos, tabelas, consultas SQL, backup, segurança e otimização."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Database className="inline-block mr-2 mb-1 w-5 h-5" /> MySQL vs MariaDB</h2>
        <p>
          O <strong>MariaDB</strong> é o banco de dados relacional padrão no Fedora — é um fork open source
          do MySQL, criado pelo próprio fundador do MySQL. Os comandos e a sintaxe SQL são praticamente
          idênticos. O Fedora usa MariaDB por padrão porque ele é 100% open source.
        </p>

        <h2>Instalação e Configuração</h2>
        <CodeBlock
          code={`# Instalar MariaDB (servidor e cliente)
  sudo dnf install mariadb-server mariadb

  # Iniciar e habilitar no boot
  sudo systemctl enable --now mariadb

  # Verificar status
  sudo systemctl status mariadb

  # Executar wizard de segurança (MUITO IMPORTANTE!)
  sudo mysql_secure_installation
  # Responda:
  # Set root password? → Y (defina uma senha forte)
  # Remove anonymous users? → Y
  # Disallow root login remotely? → Y
  # Remove test database? → Y
  # Reload privilege tables? → Y

  # Conectar ao MariaDB
  mysql -u root -p
  # Digite a senha que você definiu`}
          language="bash"
          title="instalação"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciamento de Bancos</h2>
        <CodeBlock
          code={`-- Dentro do MariaDB (mysql -u root -p)

  -- Listar bancos de dados
  SHOW DATABASES;

  -- Criar banco de dados
  CREATE DATABASE meuapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  -- utf8mb4 suporta emojis e caracteres especiais

  -- Usar um banco
  USE meuapp;

  -- Ver banco atual
  SELECT DATABASE();

  -- Deletar banco (CUIDADO!)
  DROP DATABASE meuapp;

  -- Ver informações do servidor
  STATUS;`}
          language="sql"
          title="bancos de dados"
        />

        <h2>Tabelas e Tipos de Dados</h2>
        <CodeBlock
          code={`-- Criar tabela
  CREATE TABLE usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      senha VARCHAR(255) NOT NULL,
      idade INT DEFAULT 0,
      ativo BOOLEAN DEFAULT TRUE,
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

  -- Listar tabelas
  SHOW TABLES;

  -- Ver estrutura de uma tabela
  DESCRIBE usuarios;
  SHOW CREATE TABLE usuarios;

  -- Alterar tabela
  ALTER TABLE usuarios ADD COLUMN telefone VARCHAR(20);
  ALTER TABLE usuarios DROP COLUMN telefone;
  ALTER TABLE usuarios MODIFY COLUMN nome VARCHAR(200);

  -- Deletar tabela
  DROP TABLE usuarios;`}
          language="sql"
          title="tabelas"
        />

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> CRUD — Operações Básicas</h2>
        <CodeBlock
          code={`-- INSERT — Inserir dados
  INSERT INTO usuarios (nome, email, senha) VALUES
      ('João Silva', 'joao@email.com', 'hash_da_senha_123'),
      ('Maria Santos', 'maria@email.com', 'hash_da_senha_456');

  -- SELECT — Consultar dados
  SELECT * FROM usuarios;
  SELECT nome, email FROM usuarios WHERE ativo = TRUE;
  SELECT * FROM usuarios WHERE nome LIKE '%Silva%';
  SELECT * FROM usuarios ORDER BY criado_em DESC LIMIT 10;
  SELECT COUNT(*) FROM usuarios;

  -- UPDATE — Atualizar dados
  UPDATE usuarios SET nome = 'João da Silva' WHERE id = 1;
  UPDATE usuarios SET ativo = FALSE WHERE email = 'joao@email.com';

  -- DELETE — Remover dados
  DELETE FROM usuarios WHERE id = 1;
  DELETE FROM usuarios WHERE ativo = FALSE;

  -- TRUNCATE — Limpar toda a tabela (mais rápido que DELETE)
  TRUNCATE TABLE usuarios;`}
          language="sql"
          title="CRUD"
        />

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Usuários e Permissões</h2>
        <CodeBlock
          code={`-- Criar usuário
  CREATE USER 'meuapp'@'localhost' IDENTIFIED BY 'senha_forte_123';

  -- Dar permissões
  GRANT ALL PRIVILEGES ON meuapp.* TO 'meuapp'@'localhost';
  -- ALL PRIVILEGES = tudo (SELECT, INSERT, UPDATE, DELETE, etc.)

  -- Permissões específicas (mais seguro)
  GRANT SELECT, INSERT, UPDATE, DELETE ON meuapp.* TO 'leitor'@'localhost';

  -- Aplicar mudanças de permissão
  FLUSH PRIVILEGES;

  -- Ver permissões de um usuário
  SHOW GRANTS FOR 'meuapp'@'localhost';

  -- Listar todos os usuários
  SELECT user, host FROM mysql.user;

  -- Remover permissão
  REVOKE ALL PRIVILEGES ON meuapp.* FROM 'meuapp'@'localhost';

  -- Deletar usuário
  DROP USER 'meuapp'@'localhost';`}
          language="sql"
          title="usuários"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Backup e Restauração</h2>
        <CodeBlock
          code={`# Backup de um banco de dados
  mysqldump -u root -p meuapp > backup-meuapp.sql

  # Backup de todas as databases
  mysqldump -u root -p --all-databases > backup-total.sql

  # Backup com compressão
  mysqldump -u root -p meuapp | gzip > backup-meuapp.sql.gz

  # Restaurar backup
  mysql -u root -p meuapp < backup-meuapp.sql

  # Restaurar backup compactado
  gunzip < backup-meuapp.sql.gz | mysql -u root -p meuapp

  # Backup automático (adicionar ao cron ou systemd timer)
  # mysqldump -u root -p'senha' meuapp | gzip > /backup/meuapp-$(date +%Y%m%d).sql.gz`}
          language="bash"
          title="backup"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração</h2>
        <CodeBlock
          code={`# Arquivo de configuração principal
  sudo vim /etc/my.cnf.d/mariadb-server.cnf

  # Configurações recomendadas:
  [mysqld]
  # Codificação UTF-8
  character-set-server = utf8mb4
  collation-server = utf8mb4_unicode_ci

  # Performance
  innodb_buffer_pool_size = 256M
  max_connections = 100
  query_cache_size = 32M

  # Logs
  log_error = /var/log/mariadb/error.log
  slow_query_log = 1
  long_query_time = 2

  # Reiniciar após mudanças
  sudo systemctl restart mariadb`}
          language="bash"
          title="configuração"
        />

        <AlertBox type="warning" title="SELinux">
          Se o MariaDB não conseguir acessar arquivos ou portas, verifique o SELinux:
          <code>sudo setsebool -P mysql_connect_any 1</code> e
          <code>sudo semanage port -a -t mysqld_port_t -p tcp 3306</code>
        </AlertBox>
      </PageContainer>
    );
  }
  