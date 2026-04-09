import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Key, Lock, Shield, FileText, Mail, Settings } from "lucide-react";

  export default function GPG() {
    return (
      <PageContainer
        title="GPG — Criptografia e Assinaturas"
        subtitle="Use GPG no Fedora para criptografar arquivos, assinar digitalmente documentos, verificar pacotes e proteger e-mails."
        difficulty="avancado"
        timeToRead="30 min"
      >
        <h2><Key className="inline-block mr-2 mb-1 w-5 h-5" /> O que é GPG?</h2>
        <p>
          O <strong>GPG</strong> (GNU Privacy Guard) é a implementação livre do padrão OpenPGP. Ele permite
          <strong> criptografar</strong> arquivos e mensagens (só o destinatário pode ler) e
          <strong> assinar digitalmente</strong> (provar que é você quem enviou). O GPG usa criptografia
          de chave pública: você tem uma chave pública (que compartilha) e uma chave privada (que guarda).
        </p>

        <h2>Gerar Par de Chaves</h2>
        <CodeBlock
          code={`# GPG já vem instalado no Fedora
  gpg --version

  # Gerar par de chaves (interativo)
  gpg --full-generate-key
  # Tipo: RSA and RSA (opção 1)
  # Tamanho: 4096 bits (máxima segurança)
  # Validade: 1y (1 ano) ou 0 (sem expiração)
  # Nome Real: Seu Nome
  # Email: seu@email.com
  # Comentário: (opcional)
  # Defina uma passphrase FORTE

  # Gerar chave rapidamente (valores padrão)
  gpg --quick-generate-key "Seu Nome <seu@email.com>"

  # Listar chaves
  gpg --list-keys
  gpg --list-secret-keys

  # Exportar chave pública
  gpg --armor --export seu@email.com > minha-chave-publica.asc

  # Exportar chave privada (backup — GUARDE COM SEGURANÇA!)
  gpg --armor --export-secret-keys seu@email.com > minha-chave-privada.asc`}
          language="bash"
          title="gerar chaves"
        />

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Criptografar e Descriptografar</h2>
        <CodeBlock
          code={`# Criptografar arquivo para alguém (precisa da chave pública dele)
  gpg --encrypt --recipient email@destino.com arquivo.txt
  # Gera: arquivo.txt.gpg (só o destinatário pode abrir)

  # Criptografar com armadura ASCII (texto, bom para email)
  gpg --armor --encrypt --recipient email@destino.com arquivo.txt
  # Gera: arquivo.txt.asc

  # Criptografar para você mesmo (backup seguro)
  gpg --encrypt --recipient seu@email.com documentos.tar.gz

  # Descriptografar
  gpg --decrypt arquivo.txt.gpg > arquivo.txt
  gpg --decrypt arquivo.txt.asc > arquivo.txt

  # Criptografar com senha simétrica (sem chaves — só senha)
  gpg --symmetric arquivo.txt
  # Pede uma senha. Qualquer pessoa com a senha pode descriptografar.
  gpg --decrypt arquivo.txt.gpg`}
          language="bash"
          title="criptografar"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Assinar Digitalmente</h2>
        <CodeBlock
          code={`# Assinar arquivo (cria arquivo.sig separado)
  gpg --detach-sign arquivo.txt
  # Gera: arquivo.txt.sig

  # Assinar com armadura ASCII
  gpg --armor --detach-sign arquivo.txt
  # Gera: arquivo.txt.asc

  # Assinar e incluir no arquivo
  gpg --clearsign mensagem.txt
  # Gera: mensagem.txt.asc (com assinatura embutida)

  # Verificar assinatura
  gpg --verify arquivo.txt.sig arquivo.txt
  # "Good signature from..." = autêntico!
  # "BAD signature" = foi adulterado!

  # Assinar commits do Git com GPG
  git config --global user.signingkey SEU_KEY_ID
  git config --global commit.gpgsign true
  # Agora todos os commits serão assinados`}
          language="bash"
          title="assinaturas"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciar Chaves de Outros</h2>
        <CodeBlock
          code={`# Importar chave pública de alguém
  gpg --import chave-publica.asc

  # Importar de um servidor de chaves
  gpg --keyserver hkps://keys.openpgp.org --recv-keys KEY_ID

  # Verificar fingerprint (IMPORTANTE antes de confiar)
  gpg --fingerprint email@pessoa.com

  # Assinar a chave (marcar como confiável)
  gpg --sign-key email@pessoa.com

  # Enviar sua chave para servidor de chaves
  gpg --keyserver hkps://keys.openpgp.org --send-keys SEU_KEY_ID

  # Deletar chave
  gpg --delete-keys email@pessoa.com       # chave pública
  gpg --delete-secret-keys email@pessoa.com # chave privada`}
          language="bash"
          title="gerenciar chaves"
        />

        <h2><Mail className="inline-block mr-2 mb-1 w-5 h-5" /> Verificar Pacotes RPM</h2>
        <p>
          O Fedora usa GPG para assinar todos os pacotes RPM, garantindo que não foram adulterados:
        </p>
        <CodeBlock
          code={`# Verificar assinatura de um pacote RPM
  rpm -K pacote.rpm

  # Listar chaves GPG importadas no RPM
  rpm -qa gpg-pubkey*

  # Importar chave GPG do Fedora
  sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$(rpm -E %fedora)-primary

  # Verificar integridade de pacotes instalados
  rpm -Va`}
          language="bash"
          title="verificar RPMs"
        />

        <h2>Referência Rápida</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>gpg --full-generate-key</code></td><td>Gerar par de chaves</td></tr>
            <tr><td><code>gpg --list-keys</code></td><td>Listar chaves públicas</td></tr>
            <tr><td><code>gpg --encrypt -r EMAIL file</code></td><td>Criptografar arquivo</td></tr>
            <tr><td><code>gpg --decrypt file.gpg</code></td><td>Descriptografar</td></tr>
            <tr><td><code>gpg --sign file</code></td><td>Assinar arquivo</td></tr>
            <tr><td><code>gpg --verify file.sig</code></td><td>Verificar assinatura</td></tr>
            <tr><td><code>gpg --import key.asc</code></td><td>Importar chave</td></tr>
            <tr><td><code>gpg --export -a EMAIL</code></td><td>Exportar chave pública</td></tr>
          </tbody>
        </table>

        <AlertBox type="danger" title="Proteja sua chave privada!">
          A chave privada é como uma senha mestre. Se alguém obtiver sua chave privada, pode
          descriptografar suas mensagens e se passar por você. Faça backup em local seguro
          e <strong>nunca compartilhe</strong>.
        </AlertBox>
      </PageContainer>
    );
  }
  