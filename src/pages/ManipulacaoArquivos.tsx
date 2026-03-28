import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { FolderOpen, Copy, Trash, Link } from "lucide-react";

export default function ManipulacaoArquivos() {
  return (
    <PageContainer
      title="Manipulação de Arquivos e Diretórios"
      subtitle="Comandos essenciais para criar, copiar, mover, renomear e apagar arquivos e pastas no Linux."
      difficulty="iniciante"
      timeToRead="25 min"
    >
      <h2><FolderOpen className="inline-block mr-2 mb-1 w-5 h-5" /> touch — Criar Arquivos Vazios</h2>
      <p>
        O <code>touch</code> cria arquivos vazios ou atualiza a data de modificação de arquivos existentes.
      </p>
      <CodeBlock
        code={`# Criar um arquivo vazio
touch novo_arquivo.txt

# Criar múltiplos arquivos de uma vez
touch arquivo1.txt arquivo2.txt arquivo3.txt

# Criar arquivo com nome que tem espaço
touch "meu arquivo.txt"

# Atualizar a data de modificação de um arquivo existente
touch arquivo-existente.txt

# Criar com chaves (expansão de chaves — muito prático)
touch relatorio_{jan,fev,mar}.txt
# cria: relatorio_jan.txt, relatorio_fev.txt, relatorio_mar.txt`}
        language="bash"
        title="touch"
      />

      <h2>mkdir — Criar Diretórios</h2>
      <CodeBlock
        code={`# Criar um diretório
mkdir nova_pasta

# Criar múltiplas pastas de uma vez
mkdir pasta1 pasta2 pasta3

# Criar toda a árvore de diretórios (flag -p)
mkdir -p projetos/2026/janeiro
# Cria: projetos/ → 2026/ → janeiro/  (mesmo se projetos/ não existir)

# Criar com permissões específicas
mkdir -m 755 minha-pasta

# Expansão de chaves
mkdir -p projetos/{frontend,backend,docs}
# cria: projetos/frontend, projetos/backend, projetos/docs`}
        language="bash"
        title="mkdir"
      />

      <h2><Copy className="inline-block mr-2 mb-1 w-5 h-5" /> cp — Copiar Arquivos e Diretórios</h2>
      <CodeBlock
        code={`# Copiar arquivo para a mesma pasta com outro nome
cp foto.jpg foto_backup.jpg

# Copiar arquivo para outro diretório
cp documento.pdf /home/usuario/Documentos/

# Copiar múltiplos arquivos para uma pasta
cp doc1.txt doc2.txt /home/usuario/Documentos/

# Copiar uma pasta inteira e seu conteúdo (requer -r de recursivo)
cp -r pasta_projetos/ backup_projetos/

# Avisar antes de sobrescrever (-i de interactive)
cp -i importante.txt /backup/

# Preservar permissões, dono e timestamps (-p)
cp -p arquivo.conf /backup/

# Copiar preservando tudo: -a é o mais completo
cp -a pasta_original/ pasta_backup/

# Mostrar o que está sendo copiado (-v de verbose)
cp -rv pasta_grande/ /backup/

# Copiar apenas se o arquivo destino é mais antigo (-u de update)
cp -u *.txt /backup/`}
        language="bash"
        title="cp"
      />

      <h2>mv — Mover e Renomear</h2>
      <CodeBlock
        code={`# Renomear um arquivo
mv projeto_velho.txt projeto_novo.txt

# Mover arquivo para outra pasta
mv relatorio.pdf /home/usuario/Documentos/

# Mover múltiplos arquivos usando wildcard (*)
mv *.jpg /home/usuario/Imagens/

# Mover pasta inteira
mv projetos/ /home/usuario/backup/

# Avisar antes de sobrescrever (-i)
mv -i arquivo.txt /destino/

# Não sobrescrever se já existir (-n)
mv -n arquivo.txt /destino/

# Mostrar o que está sendo feito (-v)
mv -v *.log /var/log/antigos/

# Renomear vários arquivos com loop
for f in *.txt; do
  mv "$f" "\${f%.txt}.md"    # troca extensão .txt por .md
done`}
        language="bash"
        title="mv"
      />

      <h2><Trash className="inline-block mr-2 mb-1 w-5 h-5" /> rm — Remover Arquivos</h2>
      <AlertBox type="danger" title="Cuidado: rm é permanente">
        Arquivos deletados com <code>rm</code> <strong>não vão para a lixeira</strong> — são apagados definitivamente. Sempre verifique o que você está removendo antes de confirmar.
      </AlertBox>
      <CodeBlock
        code={`# Apagar um arquivo simples
rm arquivo.txt

# Apagar múltiplos arquivos
rm arquivo1.txt arquivo2.txt

# Apagar todos os arquivos com extensão .log
rm *.log

# Pedir confirmação antes de apagar cada arquivo (-i)
rm -i importante.txt

# Apagar pasta inteira e todo o seu conteúdo
rm -r pasta_antiga/

# Apagar pasta sem pedir confirmação (-f de force)
rm -rf pasta_para_deletar/

# Mostrar o que está sendo apagado (-v)
rm -rv /tmp/lixo/

# NUNCA FAÇA ISSO:
# rm -rf /          ← apaga TUDO do sistema (requer --no-preserve-root)
# rm -rf ~          ← apaga sua pasta home`}
        language="bash"
        title="rm"
      />

      <h2>rmdir — Remover Diretórios Vazios</h2>
      <CodeBlock
        code={`# Apagar um diretório vazio
rmdir pasta_vazia

# Apagar diretórios vazios aninhados (-p)
rmdir -p projetos/2025/dezembro

# Verificar se está vazio antes
ls -la pasta/   # se apenas mostrar . e .. está vazio`}
        language="bash"
        title="rmdir"
      />

      <h2><Link className="inline-block mr-2 mb-1 w-5 h-5" /> Links Simbólicos (ln -s)</h2>
      <p>
        Links simbólicos são como atalhos do Windows — apontam para outro arquivo ou diretório. Se você modificar o link, modifica o original. Se deletar o original, o link fica "quebrado".
      </p>
      <CodeBlock
        code={`# Criar link simbólico (atalho)
# Sintaxe: ln -s [arquivo_original] [nome_do_link]
ln -s arquivo_real.txt atalho.txt

# Exemplo prático: link para um diretório
ln -s /mnt/hd-externo/projetos ~/projetos

# Criar link simbólico para configuração (muito usado em servidores)
sudo ln -s /etc/nginx/sites-available/meusite.conf \
           /etc/nginx/sites-enabled/meusite.conf

# Ver para onde um link aponta
ls -la atalho.txt
# atalho.txt -> arquivo_real.txt

readlink atalho.txt
# arquivo_real.txt

# Apagar um link simbólico (não apaga o original)
rm atalho.txt

# Link físico (hard link) — sem o -s
# Hard links são duas entradas que apontam para os mesmos dados no disco
ln arquivo_original.txt hardlink.txt`}
        language="bash"
        title="links simbólicos"
      />

      <h2>Operações em Massa com Wildcards</h2>
      <CodeBlock
        code={`# * = qualquer sequência de caracteres
cp *.txt /backup/         # todos os .txt
rm *.log                  # todos os .log
mv relatorio_* /arquivo/  # tudo que começa com relatorio_

# ? = um único caractere qualquer
ls arquivo?.txt           # arquivo1.txt, arquivo2.txt, arquivoA.txt...

# [abc] = um dos caracteres dentro dos colchetes
ls arquivo[123].txt       # arquivo1.txt, arquivo2.txt ou arquivo3.txt

# {a,b,c} = expansão de chaves (gera múltiplos valores)
mkdir {frontend,backend,docs}
cp arquivo.{txt,md,pdf} /backup/
touch log_{2024,2025,2026}.txt`}
        language="bash"
        title="wildcards e expansão"
      />

      <h2>Referência Rápida</h2>
      <CodeBlock
        code={`# CRIAR
touch arquivo.txt          # Criar arquivo vazio
mkdir pasta                # Criar diretório
mkdir -p a/b/c             # Criar árvore de diretórios

# COPIAR
cp origem destino          # Copiar arquivo
cp -r pasta/ backup/       # Copiar pasta inteira
cp -a pasta/ backup/       # Copiar preservando tudo

# MOVER / RENOMEAR
mv velho.txt novo.txt      # Renomear
mv arquivo.txt /pasta/     # Mover

# APAGAR
rm arquivo.txt             # Apagar arquivo
rm -r pasta/               # Apagar pasta
rm -i arquivo.txt          # Apagar com confirmação

# LINKS
ln -s original link        # Criar link simbólico
readlink link              # Ver para onde aponta
ls -la                     # Ver links (indicados com →)`}
        language="bash"
        title="referência rápida"
      />
    </PageContainer>
  );
}
