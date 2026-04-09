import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Lock, HardDrive, Key, Shield, Settings, FileText } from "lucide-react";

  export default function LUKS() {
    return (
      <PageContainer
        title="LUKS — Criptografia de Disco"
        subtitle="Proteja seus dados com criptografia completa de disco usando LUKS no Fedora: criptografar partições, pendrives e containers."
        difficulty="avancado"
        timeToRead="30 min"
      >
        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> O que é LUKS?</h2>
        <p>
          O <strong>LUKS</strong> (Linux Unified Key Setup) é o padrão de criptografia de disco no Linux.
          Ele criptografa partições inteiras, tornando os dados ilegíveis sem a senha correta. Mesmo que
          alguém remova seu HD/SSD e conecte em outro computador, não conseguirá ler os dados.
        </p>
        <p>
          O Fedora oferece criptografia LUKS durante a instalação. Se você não habilitou na instalação,
          pode criptografar discos e partições adicionais depois.
        </p>

        <h2>Criptografar uma Partição/Disco</h2>
        <CodeBlock
          code={`# AVISO: Isso APAGA todos os dados da partição!
  # Identifique o dispositivo
  lsblk
  # NAME   SIZE TYPE
  # sdb    32G  disk
  #  └─sdb1 32G  part    ← partição a criptografar

  # PASSO 1: Formatar com LUKS
  sudo cryptsetup luksFormat /dev/sdb1
  # Confirme digitando YES (em maiúsculas)
  # Defina uma passphrase FORTE

  # PASSO 2: Abrir (desbloquear) o dispositivo
  sudo cryptsetup open /dev/sdb1 meu_disco_criptografado
  # Cria /dev/mapper/meu_disco_criptografado

  # PASSO 3: Criar sistema de arquivos
  sudo mkfs.ext4 /dev/mapper/meu_disco_criptografado

  # PASSO 4: Montar
  sudo mkdir -p /mnt/seguro
  sudo mount /dev/mapper/meu_disco_criptografado /mnt/seguro

  # Usar normalmente
  sudo cp documentos-importantes/* /mnt/seguro/

  # PASSO 5: Desmontar e fechar (bloquear)
  sudo umount /mnt/seguro
  sudo cryptsetup close meu_disco_criptografado`}
          language="bash"
          title="criptografar partição"
        />

        <h2><Key className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciar Chaves</h2>
        <CodeBlock
          code={`# LUKS permite até 8 chaves (slots 0-7)
  # Útil para ter senha + arquivo-chave, ou senha do admin + senha do usuário

  # Ver informações LUKS
  sudo cryptsetup luksDump /dev/sdb1

  # Adicionar nova chave (precisa de uma chave existente)
  sudo cryptsetup luksAddKey /dev/sdb1

  # Adicionar arquivo-chave
  sudo dd if=/dev/urandom of=/root/chave-luks bs=4096 count=1
  sudo chmod 400 /root/chave-luks
  sudo cryptsetup luksAddKey /dev/sdb1 /root/chave-luks

  # Abrir com arquivo-chave (sem digitar senha)
  sudo cryptsetup open /dev/sdb1 disco --key-file /root/chave-luks

  # Remover uma chave
  sudo cryptsetup luksRemoveKey /dev/sdb1

  # Trocar senha
  sudo cryptsetup luksChangeKey /dev/sdb1`}
          language="bash"
          title="gerenciar chaves"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Criptografar Pendrive</h2>
        <CodeBlock
          code={`# Criptografar pendrive USB
  # 1. Identifique (CUIDADO para não escolher o disco errado!)
  lsblk
  # sdc      32G disk
  #  └─sdc1   32G part

  # 2. Desmontar se estiver montado
  sudo umount /dev/sdc1

  # 3. Formatar com LUKS
  sudo cryptsetup luksFormat /dev/sdc1

  # 4. Abrir, formatar e montar
  sudo cryptsetup open /dev/sdc1 pendrive
  sudo mkfs.ext4 /dev/mapper/pendrive
  sudo mount /dev/mapper/pendrive /mnt/pendrive

  # No GNOME, o pendrive criptografado aparece automaticamente
  # e pede a senha ao conectar`}
          language="bash"
          title="criptografar pendrive"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Montagem Automática (crypttab)</h2>
        <CodeBlock
          code={`# Para montar automaticamente no boot (com arquivo-chave):

  # 1. Pegar o UUID
  sudo blkid /dev/sdb1
  # /dev/sdb1: UUID="xxxx-yyyy-zzzz" TYPE="crypto_LUKS"

  # 2. Adicionar ao /etc/crypttab
  # nome_mapeado  UUID=xxxx-yyyy-zzzz  /root/chave-luks  luks
  echo 'dados_criptografados UUID=xxxx-yyyy-zzzz /root/chave-luks luks' | sudo tee -a /etc/crypttab

  # 3. Adicionar ao /etc/fstab
  echo '/dev/mapper/dados_criptografados /mnt/seguro ext4 defaults 0 2' | sudo tee -a /etc/fstab

  # 4. Testar
  sudo cryptsetup open /dev/sdb1 dados_criptografados --key-file /root/chave-luks
  sudo mount /mnt/seguro`}
          language="bash"
          title="montagem automática"
        />

        <h2>Referência</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>cryptsetup luksFormat</code></td><td>Criptografar dispositivo (APAGA dados!)</td></tr>
            <tr><td><code>cryptsetup open</code></td><td>Desbloquear dispositivo</td></tr>
            <tr><td><code>cryptsetup close</code></td><td>Bloquear dispositivo</td></tr>
            <tr><td><code>cryptsetup luksDump</code></td><td>Ver informações LUKS</td></tr>
            <tr><td><code>cryptsetup luksAddKey</code></td><td>Adicionar chave</td></tr>
            <tr><td><code>cryptsetup luksChangeKey</code></td><td>Trocar senha</td></tr>
          </tbody>
        </table>

        <AlertBox type="danger" title="Não esqueça a senha!">
          Se você esquecer a senha e não tiver arquivo-chave de backup, seus dados estarão
          <strong> permanentemente inacessíveis</strong>. Não existe "recuperação de senha" com LUKS.
          Guarde a senha em um gerenciador de senhas seguro.
        </AlertBox>
      </PageContainer>
    );
  }
  