import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Lock, Users, Shield, Eye, Settings, FileText } from "lucide-react";

  export default function Permissoes() {
    return (
      <PageContainer
        title="Permissões"
        subtitle="Domine as permissões de arquivos no Linux — chmod, chown, ACLs, SUID/SGID, sticky bit e umask."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> Como Funcionam as Permissões</h2>
        <p>
          No Linux, cada arquivo e diretório tem três conjuntos de permissões:
        </p>
        <ul>
          <li><strong>Dono (user/owner)</strong> — o usuário que criou o arquivo</li>
          <li><strong>Grupo (group)</strong> — o grupo associado ao arquivo</li>
          <li><strong>Outros (others)</strong> — todos os demais usuários</li>
        </ul>
        <p>Cada conjunto tem três tipos de permissão:</p>
        <table>
          <thead><tr><th>Permissão</th><th>Letra</th><th>Valor</th><th>Em Arquivos</th><th>Em Diretórios</th></tr></thead>
          <tbody>
            <tr><td><strong>Leitura</strong></td><td>r</td><td>4</td><td>Pode ler o conteúdo</td><td>Pode listar conteúdo (ls)</td></tr>
            <tr><td><strong>Escrita</strong></td><td>w</td><td>2</td><td>Pode modificar</td><td>Pode criar/remover arquivos</td></tr>
            <tr><td><strong>Execução</strong></td><td>x</td><td>1</td><td>Pode executar como programa</td><td>Pode entrar no diretório (cd)</td></tr>
          </tbody>
        </table>

        <h3>Lendo Permissões</h3>
        <CodeBlock
          code={`# Ver permissões detalhadas
  ls -la
  # -rw-r--r--  1 joao  devs  4096 Jan 15 10:00 arquivo.txt
  # drwxr-xr-x  2 joao  devs  4096 Jan 15 10:00 pasta/
  #
  # Decodificando: -rw-r--r--
  # -    = tipo (- arquivo, d diretório, l link)
  # rw-  = dono: leitura + escrita
  # r--  = grupo: apenas leitura
  # r--  = outros: apenas leitura
  #
  # Decodificando: drwxr-xr-x
  # d    = diretório
  # rwx  = dono: leitura + escrita + execução
  # r-x  = grupo: leitura + execução (pode entrar)
  # r-x  = outros: leitura + execução

  # stat — informações completas
  stat arquivo.txt
  # Access: (0644/-rw-r--r--)  Uid: (1000/joao)  Gid: (1000/devs)`}
          language="bash"
          title="lendo permissões"
        />

        <h2>chmod — Alterando Permissões</h2>

        <h3>Modo simbólico</h3>
        <CodeBlock
          code={`# Sintaxe: chmod [quem][operação][permissão] arquivo
  # quem: u=dono, g=grupo, o=outros, a=todos
  # operação: +=adicionar, -=remover, ==definir

  # Exemplos
  chmod u+x script.sh          # dono pode executar
  chmod g+w arquivo.txt         # grupo pode escrever
  chmod o-r arquivo.txt         # remover leitura de outros
  chmod a+r arquivo.txt         # todos podem ler
  chmod u+rwx,g+rx,o-rwx dir/  # dono tudo, grupo lê+executa, outros nada
  chmod u=rwx,g=rx,o= arquivo  # definir exatamente

  # Recursivo (diretório e todo conteúdo)
  chmod -R g+w pasta/`}
          language="bash"
          title="chmod simbólico"
        />

        <h3>Modo numérico (octal)</h3>
        <CodeBlock
          code={`# Cada dígito é a soma de: r=4, w=2, x=1
  # Formato: chmod [dono][grupo][outros]

  chmod 644 arquivo.txt     # rw-r--r-- (arquivos normais)
  chmod 755 script.sh       # rwxr-xr-x (scripts/programas)
  chmod 700 privado/        # rwx------ (apenas o dono)
  chmod 666 compartilhado   # rw-rw-rw- (todos leem e escrevem)
  chmod 600 chave.pem       # rw------- (chaves SSH/certificados)
  chmod 777 publico         # rwxrwxrwx (EVITE — inseguro!)`}
          language="bash"
          title="chmod numérico"
        />

        <h3>Permissões comuns</h3>
        <table>
          <thead><tr><th>Valor</th><th>Permissão</th><th>Uso Típico</th></tr></thead>
          <tbody>
            <tr><td><code>644</code></td><td>rw-r--r--</td><td>Arquivos de texto, configurações</td></tr>
            <tr><td><code>755</code></td><td>rwxr-xr-x</td><td>Scripts, diretórios, programas</td></tr>
            <tr><td><code>700</code></td><td>rwx------</td><td>Diretórios privados (~/.ssh)</td></tr>
            <tr><td><code>600</code></td><td>rw-------</td><td>Chaves SSH, tokens, senhas</td></tr>
            <tr><td><code>775</code></td><td>rwxrwxr-x</td><td>Diretórios compartilhados pelo grupo</td></tr>
            <tr><td><code>664</code></td><td>rw-rw-r--</td><td>Arquivos editáveis pelo grupo</td></tr>
          </tbody>
        </table>

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> chown e chgrp — Alterando Dono e Grupo</h2>
        <CodeBlock
          code={`# Mudar dono de um arquivo
  sudo chown joao arquivo.txt

  # Mudar dono e grupo
  sudo chown joao:devs arquivo.txt

  # Mudar apenas o grupo
  sudo chgrp devs arquivo.txt
  sudo chown :devs arquivo.txt     # atalho

  # Recursivo
  sudo chown -R joao:devs /srv/projeto/

  # Ver dono e grupo
  ls -l arquivo.txt
  stat arquivo.txt`}
          language="bash"
          title="chown e chgrp"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> umask — Permissões Padrão</h2>
        <p>
          O <strong>umask</strong> define as permissões padrão para novos arquivos e diretórios. Ele funciona como uma "máscara" que remove permissões do padrão (666 para arquivos, 777 para diretórios).
        </p>
        <CodeBlock
          code={`# Ver umask atual
  umask
  # 0022

  # Como calcular permissão final:
  # Arquivos: 666 - 022 = 644 (rw-r--r--)
  # Diretórios: 777 - 022 = 755 (rwxr-xr-x)

  # Mudar umask (sessão atual)
  umask 077     # novos arquivos: 600, novos dirs: 700 (mais restritivo)
  umask 002     # novos arquivos: 664, novos dirs: 775 (grupo pode escrever)

  # Tornar permanente (adicionar ao ~/.bashrc)
  echo "umask 027" >> ~/.bashrc
  # 027: arquivos 640, diretórios 750`}
          language="bash"
          title="umask"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Permissões Especiais</h2>

        <h3>SUID, SGID e Sticky Bit</h3>
        <table>
          <thead><tr><th>Bit</th><th>Valor</th><th>Em Arquivos</th><th>Em Diretórios</th></tr></thead>
          <tbody>
            <tr><td><strong>SUID</strong></td><td>4000</td><td>Executa como o dono do arquivo</td><td>—</td></tr>
            <tr><td><strong>SGID</strong></td><td>2000</td><td>Executa como o grupo do arquivo</td><td>Novos arquivos herdam o grupo do dir</td></tr>
            <tr><td><strong>Sticky</strong></td><td>1000</td><td>—</td><td>Apenas o dono pode remover seus arquivos</td></tr>
          </tbody>
        </table>

        <CodeBlock
          code={`# SUID — executa com permissão do dono
  # Exemplo: passwd precisa de SUID para alterar /etc/shadow como root
  ls -l /usr/bin/passwd
  # -rwsr-xr-x. 1 root root  ... /usr/bin/passwd
  #    ^--- s = SUID ativo

  # Aplicar SUID
  chmod u+s programa
  chmod 4755 programa

  # SGID em diretório — novos arquivos herdam o grupo
  # Útil para diretórios compartilhados
  chmod g+s /srv/projeto/
  chmod 2775 /srv/projeto/
  # Todos os arquivos criados aqui terão o grupo do diretório

  # Sticky Bit — protege contra remoção por outros
  # /tmp usa sticky bit: qualquer um cria, mas só o dono remove
  ls -ld /tmp
  # drwxrwxrwt. ... /tmp
  #          ^--- t = sticky bit ativo

  chmod +t /srv/compartilhado/
  chmod 1777 /srv/compartilhado/

  # Encontrar arquivos SUID/SGID no sistema
  sudo find / -perm /6000 -type f 2>/dev/null`}
          language="bash"
          title="permissões especiais"
        />

        <h2><Eye className="inline-block mr-2 mb-1 w-5 h-5" /> ACLs — Permissões Avançadas</h2>
        <p>As ACLs (Access Control Lists) permitem definir permissões para usuários e grupos específicos, além do modelo padrão dono/grupo/outros.</p>
        <CodeBlock
          code={`# Instalar ferramentas ACL
  sudo dnf install acl

  # Verificar se o filesystem suporta ACLs
  mount | grep acl     # Btrfs e ext4 suportam por padrão

  # Ver ACLs de um arquivo
  getfacl arquivo.txt
  # # file: arquivo.txt
  # # owner: joao
  # # group: devs
  # user::rw-
  # group::r--
  # other::r--

  # Conceder permissão a um usuário específico
  setfacl -m u:maria:rw arquivo.txt

  # Conceder permissão a um grupo específico
  setfacl -m g:design:rx pasta/

  # Recursivo
  setfacl -R -m u:maria:rwx /srv/projeto/

  # Definir ACL padrão (para novos arquivos criados no diretório)
  setfacl -d -m u:maria:rw pasta/
  setfacl -d -m g:devs:rwx pasta/

  # Remover ACL de um usuário
  setfacl -x u:maria arquivo.txt

  # Remover todas as ACLs
  setfacl -b arquivo.txt

  # O + no ls -l indica ACLs ativas
  ls -l arquivo.txt
  # -rw-rw-r--+ 1 joao devs 0 Jan 15 10:00 arquivo.txt
  #           ^--- + indica ACLs`}
          language="bash"
          title="acls"
        />

        <h2>Cenário Prático: Diretório de Projeto Compartilhado</h2>
        <CodeBlock
          code={`# Criar diretório compartilhado para equipe de desenvolvimento
  sudo mkdir -p /srv/projeto
  sudo groupadd desenvolvedores
  sudo usermod -aG desenvolvedores joao
  sudo usermod -aG desenvolvedores maria

  # Configurar dono e grupo
  sudo chown root:desenvolvedores /srv/projeto

  # Permissões: SGID para herdar grupo, grupo rwx
  sudo chmod 2775 /srv/projeto
  # 2 = SGID (novos arquivos herdam grupo "desenvolvedores")
  # 7 = dono (rwx)
  # 7 = grupo (rwx) — todos do grupo podem ler/escrever
  # 5 = outros (r-x) — podem ler mas não modificar

  # Resultado: qualquer membro do grupo "desenvolvedores"
  # pode criar e editar arquivos, e todos os novos arquivos
  # automaticamente pertencem ao grupo "desenvolvedores"`}
          language="bash"
          title="projeto compartilhado"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Causa Provável</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Permission denied ao executar script</td><td>Falta permissão de execução</td><td><code>chmod +x script.sh</code></td></tr>
            <tr><td>Não consegue editar arquivo</td><td>Não é o dono ou não tem w</td><td><code>sudo chown usuario arquivo</code> ou <code>chmod g+w</code></td></tr>
            <tr><td>SSH: "Permissions too open"</td><td>Chave SSH com permissão muito aberta</td><td><code>chmod 600 ~/.ssh/id_ed25519</code></td></tr>
            <tr><td>Não consegue entrar em diretório</td><td>Falta permissão x no diretório</td><td><code>chmod +x diretório/</code></td></tr>
            <tr><td>Arquivo do grupo sem permissão</td><td>SGID não configurado</td><td><code>chmod g+s diretório/</code></td></tr>
            <tr><td>SELinux bloqueando acesso</td><td>Contexto SELinux errado</td><td><code>restorecon -Rv /caminho/</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  