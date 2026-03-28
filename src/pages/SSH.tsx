import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Lock, Key, Globe, Terminal } from "lucide-react";

export default function SSH() {
  return (
    <PageContainer
      title="SSH — Acesso Remoto Seguro"
      subtitle="Conecte-se a servidores remotos com segurança, gerencie chaves, configure o servidor SSH e domine tunneling e transferência de arquivos."
      difficulty="intermediario"
      timeToRead="45 min"
    >
      <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> O que é SSH?</h2>
      <p>
        O <strong>SSH (Secure Shell)</strong> é o protocolo padrão para acesso remoto seguro a sistemas Linux. Toda comunicação é criptografada, tornando-o seguro mesmo em redes públicas. No Fedora, o pacote utilizado é o <strong>openssh</strong>, que fornece tanto o cliente (<code>ssh</code>) quanto o servidor (<code>sshd</code>).
      </p>

      <h2>1. Instalação do OpenSSH</h2>
      <CodeBlock
        code={`# Instalar o pacote openssh
sudo dnf install openssh openssh-server openssh-clients

# Verificar a versão instalada
ssh -V`}
        language="bash"
        title="instalando openssh"
      />

      <h2>2. Conectando a um Servidor</h2>
      <CodeBlock
        code={`# Conectar com usuário padrão (usa o usuário local atual)
ssh servidor.exemplo.com

# Conectar com usuário específico
ssh usuario@servidor.exemplo.com

# Conectar em uma porta diferente (padrão: 22)
ssh -p 2222 usuario@servidor.exemplo.com

# Conectar com verbose para debug de problemas
ssh -v usuario@servidor.exemplo.com

# Executar um comando remoto sem abrir shell interativo
ssh usuario@servidor.exemplo.com "df -h && uptime"

# Manter a conexão ativa com keepalive
ssh -o ServerAliveInterval=60 usuario@servidor.exemplo.com`}
        language="bash"
        title="conectando"
      />

      <h2><Key className="inline-block mr-2 mb-1 w-5 h-5" /> 3. Chaves SSH — Autenticação sem Senha</h2>
      <p>
        Em vez de usar senha (que pode ser descoberta por força bruta), você usa um par de chaves criptográficas: uma <strong>chave privada</strong> que fica no seu computador, e uma <strong>chave pública</strong> que vai para o servidor.
      </p>
      <CodeBlock
        code={`# Gerar chave Ed25519 (recomendada — moderna e segura)
ssh-keygen -t ed25519 -C "seu@email.com"

# Gerar chave RSA de 4096 bits (compatibilidade ampla)
ssh-keygen -t rsa -b 4096 -C "seu@email.com"

# Durante a geração, você verá:
# Enter file in which to save the key (~/.ssh/id_ed25519): [Enter para padrão]
# Enter passphrase (empty for no passphrase): [senha para proteger a chave]
# Enter same passphrase again: [repita]

# Listar suas chaves existentes
ls ~/.ssh/
# id_ed25519       <- chave privada (NUNCA compartilhe)
# id_ed25519.pub   <- chave pública (pode enviar para servidores)

# Ver o conteúdo da chave pública
cat ~/.ssh/id_ed25519.pub`}
        language="bash"
        title="gerando chaves SSH"
      />

      <AlertBox type="danger" title="Proteja sua chave privada">
        A chave privada (<code>~/.ssh/id_ed25519</code>) <strong>nunca deve ser compartilhada</strong>. É como a senha master de todos os servidores que você acessa. Permissão correta: <code>chmod 600 ~/.ssh/id_ed25519</code>
      </AlertBox>

      <h2>4. Copiando a Chave Pública para o Servidor</h2>
      <CodeBlock
        code={`# Forma automática (mais fácil)
ssh-copy-id usuario@servidor.exemplo.com

# Especificar qual chave copiar
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor.exemplo.com

# Em porta não padrão
ssh-copy-id -p 2222 usuario@servidor.exemplo.com

# Forma manual — se ssh-copy-id não estiver disponível
cat ~/.ssh/id_ed25519.pub | ssh usuario@servidor.exemplo.com \
  "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"

# Depois de copiar a chave, conecte sem senha:
ssh usuario@servidor.exemplo.com`}
        language="bash"
        title="copiando chave pública"
      />

      <h2>5. Arquivo de Configuração (~/.ssh/config)</h2>
      <p>
        Em vez de digitar o endereço, porta e usuário toda vez, você cria <strong>aliases</strong> no arquivo de config:
      </p>
      <CodeBlock
        code={`# Criar o arquivo de configuração
touch ~/.ssh/config
chmod 600 ~/.ssh/config

# Alias simples para um servidor
Host meuservidor
    HostName 192.168.1.100
    User deploy
    Port 2222
    IdentityFile ~/.ssh/id_ed25519

# Servidor de produção
Host prod
    HostName prod.minhaempresa.com
    User ubuntu
    IdentityFile ~/.ssh/chave_producao
    ServerAliveInterval 60
    ServerAliveCountMax 3

# Configuração global (para todos os hosts)
Host *
    AddKeysToAgent yes
    IdentityFile ~/.ssh/id_ed25519

# Agora você pode conectar assim:
ssh meuservidor       # em vez de: ssh -p 2222 deploy@192.168.1.100
ssh prod              # em vez de: ssh ubuntu@prod.minhaempresa.com`}
        language="bash"
        title="~/.ssh/config"
      />

      <h2>6. SSH Agent — Carregar Chave Uma Vez</h2>
      <CodeBlock
        code={`# Iniciar o ssh-agent (normalmente já inicia com o sistema)
eval "$(ssh-agent -s)"

# Adicionar sua chave ao agent (pedirá a passphrase uma vez)
ssh-add ~/.ssh/id_ed25519

# Adicionar com tempo de expiração (ex: 8 horas)
ssh-add -t 8h ~/.ssh/id_ed25519

# Listar chaves carregadas no agent
ssh-add -l

# Remover todas as chaves do agent
ssh-add -D

# Para iniciar o agent automaticamente no shell, adicione ao ~/.bashrc:
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
fi`}
        language="bash"
        title="ssh-agent"
      />

      <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> 7. Transferência de Arquivos</h2>
      <h3>scp — Cópia Simples</h3>
      <CodeBlock
        code={`# Copiar arquivo local para servidor remoto
scp arquivo.txt usuario@servidor:/home/usuario/

# Copiar arquivo do servidor para o local
scp usuario@servidor:/etc/nginx/nginx.conf ./nginx.conf.bak

# Copiar diretório inteiro (recursivo)
scp -r ./meu-projeto/ usuario@servidor:/var/www/

# Em porta não padrão (atenção: -P maiúsculo no scp!)
scp -P 2222 arquivo.txt usuario@servidor:/tmp/`}
        language="bash"
        title="scp"
      />

      <h3>sftp — Sessão interativa</h3>
      <CodeBlock
        code={`# Iniciar sessão SFTP
sftp usuario@servidor.exemplo.com

# Comandos dentro do sftp:
sftp> ls                    # listar arquivos remotos
sftp> get arquivo.txt       # baixar arquivo
sftp> get -r pasta/         # baixar pasta inteira
sftp> put relatorio.pdf     # enviar arquivo
sftp> put -r ./projeto/     # enviar pasta inteira
sftp> bye                   # sair`}
        language="bash"
        title="sftp"
      />

      <h3>rsync — Sincronização Eficiente</h3>
      <CodeBlock
        code={`# Sincronizar pasta local com servidor (só envia o que mudou)
rsync -avz ./site/ usuario@servidor:/var/www/html/

# Sincronizar e deletar arquivos que não existem mais na origem
rsync -avz --delete ./site/ usuario@servidor:/var/www/html/

# Progresso visual
rsync -avz --progress ./backup/ usuario@servidor:/backups/

# Em porta SSH não padrão
rsync -avz -e "ssh -p 2222" ./site/ usuario@servidor:/var/www/

# Dry run — simular sem executar
rsync -avz --dry-run ./site/ usuario@servidor:/var/www/`}
        language="bash"
        title="rsync"
      />

      <h2>8. SSH Tunneling</h2>
      <CodeBlock
        code={`# === TÚNEL LOCAL — acessar serviço remoto como se fosse local ===
# Acessa PostgreSQL remoto pela porta local 5433
ssh -L 5433:localhost:5432 usuario@servidor.exemplo.com

# Mantém o túnel sem abrir shell interativo
ssh -L 8080:localhost:3000 -N usuario@servidor.exemplo.com

# === TÚNEL REMOTO — expor porta local para o servidor remoto ===
ssh -R 9000:localhost:8080 usuario@servidor.exemplo.com

# === TÚNEL DINÂMICO — proxy SOCKS5 ===
ssh -D 1080 usuario@servidor.exemplo.com

# === Túnel em background ===
ssh -L 8080:localhost:3000 -N -f usuario@servidor.exemplo.com`}
        language="bash"
        title="tunneling"
      />

      <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> 9. Configurando o Servidor SSH (sshd)</h2>
      <CodeBlock
        code={`# Habilitar e iniciar o serviço SSH no Fedora
sudo systemctl enable --now sshd

# Verificar status
sudo systemctl status sshd

# Reiniciar após alterar a configuração
sudo systemctl restart sshd

# Abrir porta no firewall (Fedora usa firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload`}
        language="bash"
        title="habilitando o servidor SSH"
      />

      <CodeBlock
        code={`# Arquivo de configuração do servidor: /etc/ssh/sshd_config

# Porta personalizada (reduz tentativas de brute force)
Port 2222

# Desabilitar login como root (importante!)
PermitRootLogin no

# Autenticação por senha (desabilite após configurar chaves)
PasswordAuthentication no
PermitEmptyPasswords no

# Autenticação por chave pública (deve estar habilitada)
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# Número máximo de tentativas de autenticação
MaxAuthTries 3

# Limitar quais usuários podem conectar via SSH
AllowUsers usuario1 usuario2

# Tempo limite para autenticar (segundos)
LoginGraceTime 30

# Desabilitar encaminhamento X11 (se não precisar de GUI)
X11Forwarding no

# Após editar, testar sintaxe antes de reiniciar:
sudo sshd -t
sudo systemctl restart sshd`}
        language="bash"
        title="/etc/ssh/sshd_config"
      />

      <AlertBox type="success" title="Fluxo completo para novo servidor">
        <ol className="list-decimal pl-4 mt-1 space-y-1 text-sm">
          <li>Gere suas chaves: <code>ssh-keygen -t ed25519</code></li>
          <li>Copie para o servidor: <code>ssh-copy-id usuario@servidor</code></li>
          <li>Teste o login sem senha: <code>ssh usuario@servidor</code></li>
          <li>Edite <code>/etc/ssh/sshd_config</code>: desabilite <code>PasswordAuthentication no</code></li>
          <li>Reinicie: <code>sudo systemctl restart sshd</code></li>
        </ol>
      </AlertBox>
    </PageContainer>
  );
}
