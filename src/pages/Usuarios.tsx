import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Users, Shield, Key, Settings, Lock, UserPlus, UserMinus } from "lucide-react";

  export default function Usuarios() {
    return (
      <PageContainer
        title="Gerenciamento de Usuários e Grupos"
        subtitle="Crie, modifique e remova usuários e grupos, configure permissões sudo, políticas de senha e controle de acesso no Fedora."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Como Funciona</h2>
        <p>
          No Linux, cada pessoa que usa o sistema tem uma <strong>conta de usuário</strong>. Cada usuário tem um <strong>UID</strong> (User ID) numérico, um diretório home e pertence a um ou mais <strong>grupos</strong>. Os grupos facilitam o controle de permissões — em vez de dar acesso a cada usuário individualmente, você adiciona usuários a grupos.
        </p>
        <p>
          Existem três tipos principais de contas:
        </p>
        <ul>
          <li><strong>root (UID 0)</strong> — O superusuário com acesso total ao sistema. Nunca use como conta diária!</li>
          <li><strong>Contas de sistema (UID 1-999)</strong> — Criadas para serviços (nginx, postgres, etc.). Não fazem login.</li>
          <li><strong>Contas de usuário (UID 1000+)</strong> — Contas normais para pessoas reais.</li>
        </ul>

        <h3>Arquivos Importantes</h3>
        <table>
          <thead><tr><th>Arquivo</th><th>Conteúdo</th><th>Quem pode ler</th></tr></thead>
          <tbody>
            <tr><td><code>/etc/passwd</code></td><td>Lista de usuários (nome, UID, home, shell)</td><td>Todos</td></tr>
            <tr><td><code>/etc/shadow</code></td><td>Senhas criptografadas e políticas</td><td>Apenas root</td></tr>
            <tr><td><code>/etc/group</code></td><td>Lista de grupos e membros</td><td>Todos</td></tr>
            <tr><td><code>/etc/gshadow</code></td><td>Senhas de grupos</td><td>Apenas root</td></tr>
            <tr><td><code>/etc/sudoers</code></td><td>Configuração do sudo</td><td>Apenas root</td></tr>
            <tr><td><code>/etc/login.defs</code></td><td>Padrões para criação de contas</td><td>Todos</td></tr>
          </tbody>
        </table>

        <h2><UserPlus className="inline-block mr-2 mb-1 w-5 h-5" /> Criar Usuários</h2>
        <CodeBlock
          code={`# Criar usuário com padrões (cria home, grupo, etc.)
  sudo useradd -m joao

  # Criar e definir senha de uma vez
  sudo useradd -m joao && sudo passwd joao

  # Criar com opções personalizadas
  sudo useradd -m \
    -c "João da Silva" \
    -s /bin/bash \
    -G wheel,docker \
    -d /home/joao \
    joao

  # Flags importantes:
  # -m = criar diretório home
  # -c = comentário/nome completo
  # -s = shell padrão
  # -G = grupos adicionais (separados por vírgula)
  # -g = grupo primário
  # -d = diretório home personalizado
  # -e = data de expiração (YYYY-MM-DD)
  # -u = UID específico

  # Definir/alterar senha
  sudo passwd joao

  # Criar usuário de sistema (para serviços)
  sudo useradd -r -s /sbin/nologin servico-app

  # Ver informações do usuário
  id joao
  # uid=1001(joao) gid=1001(joao) groups=1001(joao),10(wheel),975(docker)

  # Ver todos os usuários do sistema
  cat /etc/passwd | cut -d: -f1 | sort

  # Ver apenas usuários "humanos" (UID >= 1000)
  awk -F: '$3 >= 1000 && $3 != 65534 {print $1}' /etc/passwd`}
          language="bash"
          title="criar usuários"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Modificar Usuários</h2>
        <CodeBlock
          code={`# Alterar nome completo
  sudo usermod -c "João Pedro da Silva" joao

  # Alterar shell
  sudo usermod -s /bin/zsh joao

  # Adicionar a grupos extras (mantendo os atuais!)
  sudo usermod -aG wheel joao    # adicionar ao grupo sudo
  sudo usermod -aG docker joao   # adicionar ao grupo docker
  sudo usermod -aG libvirt joao  # adicionar ao grupo de virtualização

  # CUIDADO: sem -a, os grupos anteriores são REMOVIDOS!
  # ERRADO: sudo usermod -G docker joao  (remove dos outros grupos!)
  # CERTO:  sudo usermod -aG docker joao (adiciona sem remover)

  # Alterar nome de login
  sudo usermod -l novo-nome antigo-nome

  # Renomear diretório home
  sudo usermod -d /home/novo-nome -m novo-nome

  # Bloquear conta (impedir login)
  sudo usermod -L joao

  # Desbloquear conta
  sudo usermod -U joao

  # Definir data de expiração da conta
  sudo usermod -e 2024-12-31 estagiario

  # Remover data de expiração
  sudo usermod -e "" joao`}
          language="bash"
          title="modificar usuários"
        />

        <h2><UserMinus className="inline-block mr-2 mb-1 w-5 h-5" /> Remover Usuários</h2>
        <CodeBlock
          code={`# Remover usuário (mantém o home)
  sudo userdel joao

  # Remover usuário E seu diretório home
  sudo userdel -r joao

  # Remover usuário forçando (mesmo logado)
  sudo userdel -f -r joao

  # Antes de remover, verifique processos do usuário
  ps -u joao
  sudo kill -9 $(pgrep -u joao)  # encerrar processos`}
          language="bash"
          title="remover usuários"
        />

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciamento de Grupos</h2>
        <CodeBlock
          code={`# Criar grupo
  sudo groupadd desenvolvedores

  # Criar grupo com GID específico
  sudo groupadd -g 2000 equipe-ti

  # Adicionar usuário ao grupo
  sudo usermod -aG desenvolvedores joao

  # Remover usuário de um grupo
  sudo gpasswd -d joao desenvolvedores

  # Ver grupos de um usuário
  groups joao
  id joao

  # Listar todos os grupos
  cat /etc/group | cut -d: -f1 | sort

  # Ver membros de um grupo
  getent group wheel
  getent group docker

  # Remover grupo
  sudo groupdel desenvolvedores

  # Renomear grupo
  sudo groupmod -n novo-nome antigo-nome`}
          language="bash"
          title="gerenciamento de grupos"
        />

        <h3>Grupos Importantes do Fedora</h3>
        <table>
          <thead><tr><th>Grupo</th><th>Função</th><th>Quando usar</th></tr></thead>
          <tbody>
            <tr><td><code>wheel</code></td><td>Acesso ao sudo</td><td>Usuários administradores</td></tr>
            <tr><td><code>docker</code></td><td>Usar Docker/Podman sem sudo</td><td>Desenvolvedores</td></tr>
            <tr><td><code>libvirt</code></td><td>Gerenciar VMs (KVM/QEMU)</td><td>Virtualização</td></tr>
            <tr><td><code>audio</code></td><td>Acesso direto ao áudio</td><td>Produção musical</td></tr>
            <tr><td><code>video</code></td><td>Acesso à GPU</td><td>Renderização, jogos</td></tr>
            <tr><td><code>plugdev</code></td><td>Dispositivos removíveis</td><td>Acesso USB</td></tr>
            <tr><td><code>dialout</code></td><td>Portas seriais</td><td>Arduino, embarcados</td></tr>
          </tbody>
        </table>

        <h2><Key className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração do sudo</h2>
        <p>
          O <strong>sudo</strong> permite que usuários executem comandos como root de forma controlada. No Fedora, membros do grupo <code>wheel</code> podem usar sudo.
        </p>
        <CodeBlock
          code={`# Editar configuração do sudo (SEMPRE use visudo!)
  sudo visudo

  # Dar sudo completo ao grupo wheel (padrão no Fedora)
  # %wheel ALL=(ALL) ALL

  # Sudo sem senha para um usuário
  # joao ALL=(ALL) NOPASSWD: ALL

  # Sudo sem senha para comandos específicos
  # joao ALL=(ALL) NOPASSWD: /usr/bin/dnf, /usr/bin/systemctl

  # Sudo para grupo específico
  # %desenvolvedores ALL=(ALL) /usr/bin/docker, /usr/bin/podman

  # Adicionar configuração em arquivo separado (recomendado)
  echo 'joao ALL=(ALL) NOPASSWD: /usr/bin/dnf' | sudo tee /etc/sudoers.d/joao
  sudo chmod 440 /etc/sudoers.d/joao

  # Verificar se a sintaxe está correta
  sudo visudo -c

  # Ver quais permissões sudo o usuário atual tem
  sudo -l`}
          language="bash"
          title="configuração sudo"
        />

        <AlertBox type="danger" title="Nunca edite /etc/sudoers diretamente!">
          Sempre use <code>sudo visudo</code> para editar o sudoers. O visudo verifica a sintaxe antes de salvar — um erro de digitação pode impedir TODOS de usarem sudo, trancando você fora do root.
        </AlertBox>

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Políticas de Senha</h2>
        <CodeBlock
          code={`# Ver informações de senha de um usuário
  sudo chage -l joao
  # Último cambio de senha        : Jan 15, 2024
  # Senha expira                  : nunca
  # Conta expira                  : nunca
  # Dias mínimos entre mudanças   : 0
  # Dias máximos de validade      : 99999
  # Dias de aviso antes de expirar: 7

  # Forçar troca de senha no próximo login
  sudo chage -d 0 joao

  # Definir expiração da senha (máximo 90 dias)
  sudo chage -M 90 joao

  # Definir dias mínimos entre trocas
  sudo chage -m 7 joao

  # Definir dias de aviso
  sudo chage -W 14 joao

  # Definir expiração da conta
  sudo chage -E 2024-12-31 estagiario

  # Política de complexidade de senha (PAM)
  # Instalar módulo de qualidade de senha
  sudo dnf install libpwquality

  # Configurar em /etc/security/pwquality.conf:
  # minlen = 12          # tamanho mínimo
  # dcredit = -1         # pelo menos 1 dígito
  # ucredit = -1         # pelo menos 1 maiúscula
  # lcredit = -1         # pelo menos 1 minúscula
  # ocredit = -1         # pelo menos 1 caractere especial
  # maxrepeat = 3        # máximo 3 caracteres repetidos`}
          language="bash"
          title="políticas de senha"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Trocar de Usuário</h2>
        <CodeBlock
          code={`# Trocar para outro usuário
  su - joao

  # Executar comando como outro usuário
  su - joao -c "whoami"

  # Trocar para root
  su -
  # ou
  sudo -i

  # Voltar para o usuário anterior
  exit

  # Ver quem está logado
  who
  w

  # Ver histórico de logins
  last
  last joao
  lastlog`}
          language="bash"
          title="trocar de usuário"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Usuário não pode usar sudo</td><td><code>sudo usermod -aG wheel usuario</code> (logout/login)</td></tr>
            <tr><td>Senha expirou</td><td><code>sudo chage -d $(date +%Y-%m-%d) usuario</code></td></tr>
            <tr><td>Conta bloqueada</td><td><code>sudo usermod -U usuario</code></td></tr>
            <tr><td>Não consigo deletar usuário logado</td><td>Encerrar processos: <code>sudo pkill -u usuario</code></td></tr>
            <tr><td>Home não foi criado</td><td><code>sudo mkhomedir_helper usuario</code></td></tr>
            <tr><td>Mudança de grupo não faz efeito</td><td>O usuário precisa fazer logout e login novamente</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Boas práticas">
          Nunca use a conta root para tarefas diárias. Crie uma conta pessoal, adicione ao grupo <code>wheel</code> e use <code>sudo</code> quando precisar de privilégios. Isso deixa um registro de quem fez o quê no sistema.
        </AlertBox>
      </PageContainer>
    );
  }
  