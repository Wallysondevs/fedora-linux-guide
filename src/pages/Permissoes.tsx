import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Shield, Lock } from "lucide-react";

export default function Permissoes() {
  return (
    <PageContainer
      title="Permissões de Arquivo"
      subtitle="Domine o sistema de permissões do Linux — chmod, chown, ACLs e tudo que você precisa saber para proteger seus arquivos."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Entendendo as Permissões</h2>
      <p>Cada arquivo no Linux tem três categorias de permissões:</p>
      <ul>
        <li><strong>Dono (Owner/User)</strong> — o usuário que criou ou possui o arquivo</li>
        <li><strong>Grupo (Group)</strong> — o grupo proprietário do arquivo</li>
        <li><strong>Outros (Others)</strong> — todos os demais usuários</li>
      </ul>
      <p>E três tipos de permissão para cada categoria:</p>
      <ul>
        <li><strong>r (read = 4)</strong> — ler o arquivo / listar diretório</li>
        <li><strong>w (write = 2)</strong> — escrever/modificar / criar arquivos no diretório</li>
        <li><strong>x (execute = 1)</strong> — executar / entrar no diretório</li>
      </ul>

      <CodeBlock
        code={`# Ver permissões de arquivos
ls -la

# Exemplo de saída:
# -rwxr-xr-- 1 joao devs 1234 jan 15 10:30 script.sh
# │└──┬──┘└──┬──┘└──┬──┘
# │   │      │      └── outros: r-- (somente leitura = 4)
# │   │      └───────── grupo:  r-x (leitura e execução = 5)
# │   └──────────────── dono:   rwx (tudo = 7)
# └──────────────────── tipo:   - = arquivo, d = diretório, l = symlink`}
        language="bash"
        title="lendo permissões"
      />

      <h2>chmod — Alterando Permissões</h2>
      <CodeBlock
        code={`# Notação octal (numérica)
chmod 755 script.sh      # rwxr-xr-x (dono=7, grupo=5, outros=5)
chmod 644 arquivo.txt    # rw-r--r-- (dono=6, grupo=4, outros=4)
chmod 600 privado.txt    # rw------- (somente o dono pode ler e escrever)
chmod 777 pasta/         # rwxrwxrwx (todos têm acesso total — EVITE!)
chmod 000 bloqueado.txt  # ---------- (ninguém acessa)

# Notação simbólica
chmod u+x script.sh      # adiciona execução para o dono (u=user)
chmod g-w arquivo.txt    # remove escrita do grupo (g=group)
chmod o-r privado.txt    # remove leitura para outros (o=others)
chmod a+r arquivo.txt    # adiciona leitura para todos (a=all)
chmod u=rwx,g=rx,o=r arquivo.txt   # define exatamente

# Aplicar recursivamente
chmod -R 755 pasta/`}
        language="bash"
        title="chmod"
      />

      <h2>chown — Alterando Proprietário</h2>
      <CodeBlock
        code={`# Mudar o dono de um arquivo
sudo chown joao arquivo.txt

# Mudar dono e grupo
sudo chown joao:devs arquivo.txt

# Mudar apenas o grupo
sudo chown :devs arquivo.txt
sudo chgrp devs arquivo.txt    # equivalente

# Recursivamente
sudo chown -R joao:devs pasta/`}
        language="bash"
        title="chown"
      />

      <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Permissões Especiais</h2>
      <CodeBlock
        code={`# SUID (Set User ID) — executa como o dono do arquivo, não como o executor
# Exemplo: /usr/bin/passwd tem SUID para poder modificar /etc/shadow
chmod u+s executavel
chmod 4755 executavel    # octal: 4 ativa SUID

# SGID (Set Group ID) — arquivos criados herdam o grupo do diretório
chmod g+s pasta/
chmod 2755 pasta/        # octal: 2 ativa SGID

# Sticky bit — apenas o dono pode deletar arquivos no diretório
# Usado em /tmp para que cada usuário só apague seus próprios arquivos
chmod +t pasta/
chmod 1777 pasta/        # octal: 1 ativa sticky bit

# Ver permissões especiais
ls -la /tmp    # verá 't' no final: drwxrwxrwt
ls -la /usr/bin/passwd    # verá 's': -rwsr-xr-x`}
        language="bash"
        title="permissões especiais"
      />

      <h2>ACL — Listas de Controle de Acesso</h2>
      <CodeBlock
        code={`# Instalar ferramentas de ACL
sudo dnf install acl

# Ver ACLs de um arquivo
getfacl arquivo.txt

# Definir ACL para um usuário específico
setfacl -m u:maria:rw arquivo.txt    # maria pode ler e escrever

# Definir ACL para um grupo
setfacl -m g:devs:r arquivo.txt      # grupo devs pode ler

# ACL padrão (herança para novos arquivos em diretório)
setfacl -d -m u:maria:rw pasta/

# Remover ACL específica
setfacl -x u:maria arquivo.txt

# Remover todas as ACLs
setfacl -b arquivo.txt`}
        language="bash"
        title="acl"
      />

      <AlertBox type="info" title="Tabela de valores octais">
        <code>0</code>=nada, <code>1</code>=x, <code>2</code>=w, <code>3</code>=wx, <code>4</code>=r, <code>5</code>=rx, <code>6</code>=rw, <code>7</code>=rwx. Os três dígitos representam dono, grupo e outros respectivamente.
      </AlertBox>
    </PageContainer>
  );
}
