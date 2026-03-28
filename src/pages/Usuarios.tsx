import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Users, UserPlus, Shield } from "lucide-react";

export default function Usuarios() {
  return (
    <PageContainer
      title="Usuários e Grupos"
      subtitle="Gerencie usuários, grupos e controle de acesso no Fedora Linux com os comandos tradicionais e modernos."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Conceito de Usuários e Grupos</h2>
      <p>
        O Linux é um sistema multiusuário. Cada usuário tem um <strong>UID</strong> (User ID) e pertence a um ou mais <strong>grupos</strong> (GID). O controle de acesso a arquivos e recursos é feito com base no usuário e grupo proprietários.
      </p>
      <p>O usuário <strong>root</strong> (UID 0) tem acesso total ao sistema. Nunca use root para tarefas cotidianas — use <code>sudo</code> somente quando necessário.</p>

      <h2><UserPlus className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciando Usuários</h2>
      <CodeBlock
        code={`# Ver usuários do sistema
cat /etc/passwd
getent passwd

# Informações do usuário atual
whoami
id
id nome-de-usuario

# Criar um novo usuário
sudo useradd -m -s /bin/bash joao        # -m cria home, -s define shell
sudo useradd -m -G wheel,docker joao     # adiciona ao grupo wheel (sudo) e docker

# Definir senha para o usuário
sudo passwd joao

# Modificar um usuário existente
sudo usermod -s /bin/zsh joao            # mudar shell
sudo usermod -G wheel joao               # adicionar ao grupo wheel (sudo)
sudo usermod -aG docker,video joao       # adicionar a grupos sem remover dos atuais (-a)
sudo usermod -d /novo/home joao          # mudar diretório home

# Remover usuário
sudo userdel joao                        # sem remover home
sudo userdel -r joao                     # remove home e arquivos do usuário

# Travar/destravar conta
sudo usermod -L joao                     # travar (lock)
sudo usermod -U joao                     # destravar (unlock)`}
        language="bash"
        title="gerenciamento de usuários"
      />

      <h2>Gerenciando Grupos</h2>
      <CodeBlock
        code={`# Ver grupos do sistema
cat /etc/group
getent group

# Grupos do usuário atual
groups
groups joao

# Criar grupo
sudo groupadd desenvolvedores

# Adicionar usuário a um grupo
sudo usermod -aG desenvolvedores joao
sudo gpasswd -a joao desenvolvedores      # forma alternativa

# Remover usuário de um grupo
sudo gpasswd -d joao desenvolvedores

# Remover grupo
sudo groupdel desenvolvedores

# Mudar o grupo primário temporariamente
newgrp docker`}
        language="bash"
        title="grupos"
      />

      <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> sudo no Fedora</h2>
      <p>
        No Fedora, o grupo <strong>wheel</strong> concede acesso ao <code>sudo</code>. Qualquer usuário neste grupo pode executar comandos como root.
      </p>
      <CodeBlock
        code={`# Verificar se você está no grupo wheel
groups | grep wheel
id | grep wheel

# Adicionar usuário ao wheel (precisa estar logado como root ou outro sudoer)
sudo usermod -aG wheel joao

# Editar configurações do sudo (SEMPRE use visudo)
sudo visudo

# Permitir que um usuário específico use sudo sem senha
# Adicione no final do sudoers:
# joao ALL=(ALL) NOPASSWD: ALL

# Verificar o que pode executar com sudo
sudo -l`}
        language="bash"
        title="sudo"
      />

      <AlertBox type="warning" title="Use visudo para editar o sudoers">
        Nunca edite <code>/etc/sudoers</code> diretamente com um editor de texto comum. Use sempre <code>sudo visudo</code> — ele valida a sintaxe antes de salvar, evitando travar o acesso sudo por erro de digitação.
      </AlertBox>

      <h2>Senhas e Segurança</h2>
      <CodeBlock
        code={`# Mudar sua própria senha
passwd

# Mudar senha de outro usuário (como root)
sudo passwd joao

# Ver informações da senha e expiração
sudo chage -l joao

# Definir expiração de senha (força troca em 90 dias)
sudo chage -M 90 joao

# Forçar troca de senha no próximo login
sudo chage -d 0 joao

# Ver últimos logins
last
lastlog
who     # usuários logados agora
w       # usuários logados com atividade`}
        language="bash"
        title="senhas e segurança"
      />
    </PageContainer>
  );
}
