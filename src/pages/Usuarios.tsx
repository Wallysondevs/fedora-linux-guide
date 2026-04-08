import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Users, UserPlus, Shield, Lock, Settings, Eye } from "lucide-react";

  export default function Usuarios() {
    return (
      <PageContainer
        title="Usuários e Grupos"
        subtitle="Gerencie usuários, grupos, senhas e privilégios no Fedora — administração multi-usuário completa."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Conceitos Básicos</h2>
        <p>
          No Linux, cada usuário tem um <strong>UID</strong> (User ID) e pertence a pelo menos um <strong>grupo</strong> (GID — Group ID). O sistema usa UIDs/GIDs para controlar permissões de acesso a arquivos, processos e recursos.
        </p>
        <table>
          <thead><tr><th>Tipo de Usuário</th><th>UID</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><strong>root</strong></td><td>0</td><td>Superusuário — acesso total ao sistema</td></tr>
            <tr><td><strong>Sistema</strong></td><td>1-999</td><td>Usuários de serviços (nginx, postgres, etc.)</td></tr>
            <tr><td><strong>Regular</strong></td><td>1000+</td><td>Usuários humanos (criados por você)</td></tr>
          </tbody>
        </table>

        <h3>Arquivos importantes</h3>
        <table>
          <thead><tr><th>Arquivo</th><th>Conteúdo</th><th>Formato</th></tr></thead>
          <tbody>
            <tr><td><code>/etc/passwd</code></td><td>Informações dos usuários</td><td>usuario:x:UID:GID:nome:home:shell</td></tr>
            <tr><td><code>/etc/shadow</code></td><td>Senhas criptografadas</td><td>usuario:hash:últimaMudança:...</td></tr>
            <tr><td><code>/etc/group</code></td><td>Informações dos grupos</td><td>grupo:x:GID:membros</td></tr>
            <tr><td><code>/etc/gshadow</code></td><td>Senhas dos grupos</td><td>grupo:hash:admins:membros</td></tr>
          </tbody>
        </table>

        <h2><UserPlus className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciando Usuários</h2>

        <h3>Criando usuários</h3>
        <CodeBlock
          code={`# Criar usuário com diretório home
  sudo useradd -m joao
  # -m = criar diretório home (/home/joao)

  # Criar e definir senha de uma vez
  sudo useradd -m maria
  sudo passwd maria
  # Nova senha: ********

  # Criar com opções completas
  sudo useradd -m -s /bin/bash -c "João Silva" -G sudo,wheel joao
  # -s = shell padrão
  # -c = comentário (nome completo)
  # -G = grupos adicionais

  # Criar usuário de sistema (para serviços)
  sudo useradd -r -s /sbin/nologin -c "Serviço Web" webservice
  # -r = usuário de sistema (UID < 1000)
  # -s /sbin/nologin = não pode fazer login

  # Criar com UID específico
  sudo useradd -m -u 1500 joao

  # Criar com diretório home customizado
  sudo useradd -m -d /srv/joao joao`}
          language="bash"
          title="criando usuários"
        />

        <h3>Modificando usuários</h3>
        <CodeBlock
          code={`# Mudar nome completo
  sudo usermod -c "João da Silva" joao

  # Mudar shell padrão
  sudo usermod -s /bin/zsh joao
  chsh -s /bin/zsh    # o próprio usuário pode mudar o seu

  # Adicionar a grupos adicionais (sem remover dos atuais)
  sudo usermod -aG wheel joao      # grupo sudo/admin
  sudo usermod -aG docker joao     # grupo docker
  # IMPORTANTE: use -aG (append). Sem -a, REMOVE dos outros grupos!

  # Mudar diretório home
  sudo usermod -d /novo/home -m joao
  # -m = mover arquivos do home antigo

  # Renomear usuário
  sudo usermod -l novo-nome joao

  # Bloquear conta (desabilitar login)
  sudo usermod -L joao
  # Desbloquear
  sudo usermod -U joao

  # Definir data de expiração da conta
  sudo usermod -e 2024-12-31 joao
  # Verificar: sudo chage -l joao`}
          language="bash"
          title="modificando usuários"
        />

        <h3>Removendo usuários</h3>
        <CodeBlock
          code={`# Remover usuário (mantém diretório home)
  sudo userdel joao

  # Remover usuário E diretório home
  sudo userdel -r joao

  # Verificar se o usuário tem processos rodando antes de remover
  ps -u joao
  # Se tiver, mate os processos primeiro:
  sudo pkill -u joao`}
          language="bash"
          title="removendo usuários"
        />

        <h2>Consultando Informações</h2>
        <CodeBlock
          code={`# Quem sou eu?
  whoami
  id
  # uid=1000(joao) gid=1000(joao) groups=1000(joao),10(wheel)

  # Informações de um usuário
  id maria
  finger joao         # (sudo dnf install finger)

  # Listar todos os usuários do sistema
  cat /etc/passwd | cut -d: -f1
  getent passwd       # inclui LDAP/SSSD se configurado

  # Listar apenas usuários humanos (UID >= 1000)
  awk -F: '$3 >= 1000 && $3 != 65534 {print $1}' /etc/passwd

  # Ver usuários logados
  who
  w                   # mais detalhado
  users

  # Histórico de logins
  last
  last joao           # logins de um usuário específico
  lastlog             # último login de cada usuário`}
          language="bash"
          title="consultas"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciando Grupos</h2>
        <CodeBlock
          code={`# Criar grupo
  sudo groupadd desenvolvedores

  # Criar com GID específico
  sudo groupadd -g 2000 projeto

  # Adicionar usuário a um grupo
  sudo usermod -aG desenvolvedores joao
  sudo gpasswd -a joao desenvolvedores    # alternativa

  # Remover usuário de um grupo
  sudo gpasswd -d joao desenvolvedores

  # Ver grupos de um usuário
  groups joao
  id joao

  # Listar membros de um grupo
  getent group desenvolvedores
  grep desenvolvedores /etc/group

  # Renomear grupo
  sudo groupmod -n novo-nome nome-antigo

  # Remover grupo
  sudo groupdel desenvolvedores

  # Listar todos os grupos
  cat /etc/group | cut -d: -f1
  getent group`}
          language="bash"
          title="grupos"
        />

        <h3>Grupos importantes do Fedora</h3>
        <table>
          <thead><tr><th>Grupo</th><th>Função</th></tr></thead>
          <tbody>
            <tr><td><strong>wheel</strong></td><td>Acesso ao sudo (administradores)</td></tr>
            <tr><td><strong>audio</strong></td><td>Acesso a dispositivos de áudio</td></tr>
            <tr><td><strong>video</strong></td><td>Acesso a dispositivos de vídeo</td></tr>
            <tr><td><strong>docker/podman</strong></td><td>Executar containers sem sudo</td></tr>
            <tr><td><strong>libvirt</strong></td><td>Gerenciar máquinas virtuais</td></tr>
            <tr><td><strong>dialout</strong></td><td>Acesso a portas seriais (Arduino, etc.)</td></tr>
          </tbody>
        </table>

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Senhas e Políticas</h2>
        <CodeBlock
          code={`# Definir/mudar senha de um usuário
  sudo passwd joao

  # Mudar sua própria senha
  passwd

  # Forçar troca de senha no próximo login
  sudo passwd -e joao

  # Ver política de senha de um usuário
  sudo chage -l joao
  # Last password change                   : Jan 15, 2024
  # Password expires                       : Apr 15, 2024
  # Password inactive                      : never
  # Account expires                        : never
  # Minimum number of days between changes : 0
  # Maximum number of days between changes : 90
  # Number of days of warning              : 7

  # Definir política de expiração
  sudo chage -M 90 joao    # senha expira a cada 90 dias
  sudo chage -m 7 joao     # mínimo 7 dias entre trocas
  sudo chage -W 14 joao    # avisar 14 dias antes de expirar
  sudo chage -I 30 joao    # desabilitar conta 30 dias após expirar

  # Bloquear/desbloquear conta
  sudo passwd -l joao      # bloquear
  sudo passwd -u joao      # desbloquear

  # Definir senha vazia (NÃO recomendado)
  sudo passwd -d joao`}
          language="bash"
          title="senhas"
        />

        <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> sudo — Elevação de Privilégios</h2>
        <CodeBlock
          code={`# Executar comando como root
  sudo dnf update

  # Abrir shell root
  sudo -i          # login shell (carrega perfil do root)
  sudo su -        # equivalente

  # Executar como outro usuário
  sudo -u postgres psql

  # Ver configuração do sudo
  sudo cat /etc/sudoers
  # NUNCA edite diretamente — use visudo:
  sudo visudo

  # Adicionar regra no sudoers (via visudo):
  # Permitir que joao use sudo sem senha (NÃO recomendado em produção):
  # joao ALL=(ALL) NOPASSWD: ALL

  # Permitir que o grupo devs execute apenas comandos específicos:
  # %devs ALL=(ALL) /usr/bin/systemctl restart nginx, /usr/bin/journalctl

  # Verificar o que o usuário pode fazer com sudo
  sudo -l
  # User joao may run the following commands on fedora:
  #     (ALL) ALL

  # Timeout do sudo (padrão: 5 minutos)
  # Para mudar, adicione no sudoers:
  # Defaults timestamp_timeout=15    # 15 minutos`}
          language="bash"
          title="sudo"
        />

        <AlertBox type="warning" title="Segurança do sudo">
          No Fedora, o grupo <strong>wheel</strong> tem acesso sudo por padrão. Adicione apenas usuários confiáveis a este grupo. Nunca trabalhe como root diretamente — sempre use sudo para rastrear quem executou cada comando via logs.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> su — Trocar de Usuário</h2>
        <CodeBlock
          code={`# Trocar para outro usuário
  su joao              # mantém diretório e ambiente atual
  su - joao            # login completo (carrega perfil do usuário)

  # Trocar para root
  su -
  # Requer a senha do root (diferente do sudo que usa SUA senha)

  # Executar um comando como outro usuário
  su - joao -c "whoami"`}
          language="bash"
          title="su"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Causa</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Usuário não consegue usar sudo</td><td>Não está no grupo wheel</td><td><code>sudo usermod -aG wheel usuario</code> (precisa re-login)</td></tr>
            <tr><td>Grupo adicionado mas sem efeito</td><td>Sessão antiga</td><td>Faça logout/login para carregar os novos grupos</td></tr>
            <tr><td>Conta bloqueada</td><td>Senha expirada ou conta desabilitada</td><td><code>sudo passwd -u usuario</code> e <code>sudo chage -E -1 usuario</code></td></tr>
            <tr><td>Home não criado</td><td>Faltou <code>-m</code> no useradd</td><td><code>sudo mkhomedir_helper usuario</code></td></tr>
            <tr><td>Shell errado</td><td>Shell não definido corretamente</td><td><code>sudo usermod -s /bin/bash usuario</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  