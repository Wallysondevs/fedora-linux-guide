import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { FolderSync, Settings, Shield, Users, Monitor, Network } from "lucide-react";

  export default function Samba() {
    return (
      <PageContainer
        title="Samba — Compartilhamento de Arquivos"
        subtitle="Compartilhe pastas entre Linux e Windows na rede local com Samba no Fedora: instalação, configuração, permissões e acesso."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><FolderSync className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Samba?</h2>
        <p>
          O <strong>Samba</strong> permite compartilhar arquivos e impressoras entre computadores Linux e Windows
          na mesma rede. É o protocolo <strong>SMB/CIFS</strong>, usado nativamente pelo Windows para
          compartilhamento de rede. Com Samba, seu Fedora aparece como uma "pasta compartilhada"
          acessível por qualquer computador da rede.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar Samba
  sudo dnf install samba samba-client

  # Habilitar e iniciar
  sudo systemctl enable --now smb nmb

  # smb = serviço principal de compartilhamento
  # nmb = serviço de resolução de nomes (NetBIOS)

  # Abrir firewall
  sudo firewall-cmd --permanent --add-service=samba
  sudo firewall-cmd --reload

  # Verificar status
  sudo systemctl status smb`}
          language="bash"
          title="instalação"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração</h2>
        <CodeBlock
          code={`# Backup da configuração original
  sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak

  # Editar configuração
  sudo vim /etc/samba/smb.conf

  # === Exemplo de smb.conf ===
  [global]
  workgroup = WORKGROUP
  server string = Fedora Server
  security = user
  map to guest = Bad User

  # Compartilhamento público (sem senha)
  [Publico]
  path = /srv/samba/publico
  browseable = yes
  read only = no
  guest ok = yes
  create mask = 0775
  directory mask = 0775

  # Compartilhamento privado (com senha)
  [Documentos]
  path = /home/joao/Documentos
  browseable = yes
  read only = no
  valid users = joao
  create mask = 0700
  directory mask = 0700

  # Criar diretórios e permissões
  sudo mkdir -p /srv/samba/publico
  sudo chmod 777 /srv/samba/publico
  sudo chcon -t samba_share_t /srv/samba/publico

  # Testar configuração
  testparm

  # Reiniciar
  sudo systemctl restart smb nmb`}
          language="bash"
          title="configuração"
        />

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Usuários Samba</h2>
        <CodeBlock
          code={`# Criar usuário Samba (precisa existir no sistema)
  sudo smbpasswd -a joao
  # Define uma senha para acesso Samba (pode ser diferente da do sistema)

  # Habilitar usuário
  sudo smbpasswd -e joao

  # Desabilitar usuário
  sudo smbpasswd -d joao

  # Remover usuário Samba
  sudo smbpasswd -x joao

  # Listar usuários Samba
  sudo pdbedit -L`}
          language="bash"
          title="usuários"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Acessar Compartilhamentos</h2>
        <CodeBlock
          code={`# Acessar de outro Linux (via terminal)
  smbclient //192.168.1.100/Documentos -U joao

  # Montar compartilhamento
  sudo mkdir -p /mnt/rede
  sudo mount -t cifs //192.168.1.100/Documentos /mnt/rede -o username=joao

  # Montar automaticamente (/etc/fstab)
  # //192.168.1.100/Documentos /mnt/rede cifs credentials=/root/.smbcredentials 0 0

  # Arquivo de credenciais (/root/.smbcredentials)
  # username=joao
  # password=senha_samba

  # De Windows: no Explorer, digite:
  # \\192.168.1.100\Documentos

  # Do GNOME Files:
  # Pressione Ctrl+L e digite: smb://192.168.1.100/`}
          language="bash"
          title="acessar"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux e Samba</h2>
        <CodeBlock
          code={`# Permitir Samba acessar diretórios home
  sudo setsebool -P samba_enable_home_dirs on

  # Definir contexto SELinux para pastas compartilhadas
  sudo semanage fcontext -a -t samba_share_t "/srv/samba(/.*)?"
  sudo restorecon -Rv /srv/samba`}
          language="bash"
          title="SELinux"
        />

        <AlertBox type="success" title="Alternativa: GNOME Files">
          Se você só quer acessar compartilhamentos Windows/Samba (não servir), o GNOME Files
          já suporta SMB nativamente. Pressione <code>Ctrl+L</code> e digite <code>smb://ip-do-servidor/</code>.
        </AlertBox>
      </PageContainer>
    );
  }
  