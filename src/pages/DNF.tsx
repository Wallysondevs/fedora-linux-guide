import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Package, Search, Trash, RefreshCw } from "lucide-react";

export default function DNF() {
  return (
    <PageContainer
      title="DNF — Gerenciador de Pacotes"
      subtitle="Domine o DNF para instalar, remover, atualizar e gerenciar softwares no Fedora de forma profissional."
      difficulty="iniciante"
      timeToRead="30 min"
    >
      <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> O que é o DNF?</h2>
      <p>
        O <strong>DNF</strong> (Dandified YUM) é o gerenciador de pacotes oficial do Fedora. Ele substitui o antigo YUM e oferece melhor desempenho, resolução de dependências mais inteligente e uso de metadados em cache.
      </p>

      <h2>Operações Básicas</h2>

      <h3>Instalação de Pacotes</h3>
      <CodeBlock
        code={`# Instalar um pacote
sudo dnf install nome-do-pacote

# Instalar múltiplos pacotes de uma vez
sudo dnf install vim git curl wget

# Instalar sem confirmação (modo automático)
sudo dnf install -y nome-do-pacote

# Instalar um pacote .rpm local
sudo dnf install /caminho/para/arquivo.rpm`}
        language="bash"
        title="instalação"
      />

      <h3>Remoção de Pacotes</h3>
      <CodeBlock
        code={`# Remover um pacote
sudo dnf remove nome-do-pacote

# Remover pacote e suas dependências não utilizadas
sudo dnf autoremove nome-do-pacote

# Remover pacotes órfãos (dependências não mais necessárias)
sudo dnf autoremove`}
        language="bash"
        title="remoção"
      />

      <h3>Atualização</h3>
      <CodeBlock
        code={`# Verificar se há atualizações disponíveis
sudo dnf check-update

# Atualizar todos os pacotes
sudo dnf update

# Atualizar um pacote específico
sudo dnf update nome-do-pacote

# Atualizar e não instalar novos pacotes (apenas atualizar)
sudo dnf upgrade`}
        language="bash"
        title="atualização"
      />

      <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Busca e Informações</h2>
      <CodeBlock
        code={`# Buscar pacotes por nome ou descrição
dnf search termo-de-busca

# Informações detalhadas de um pacote
dnf info nome-do-pacote

# Listar pacotes instalados
dnf list installed

# Listar pacotes disponíveis
dnf list available

# Descobrir qual pacote fornece um arquivo ou comando
dnf provides /usr/bin/vim
dnf provides "*/python3.11"

# Listar pacotes de um grupo
dnf group info "Development Tools"`}
        language="bash"
        title="busca"
      />

      <h2>Grupos de Pacotes</h2>
      <p>O DNF permite instalar grupos temáticos de pacotes — por exemplo, ferramentas de desenvolvimento, ambiente de desktop, servidor web, etc.</p>
      <CodeBlock
        code={`# Listar todos os grupos disponíveis
dnf group list

# Instalar um grupo de pacotes
sudo dnf group install "Development Tools"
sudo dnf install @development-tools   # notação alternativa

# Grupos úteis
sudo dnf install @c-development
sudo dnf install @python-classroom
sudo dnf install @nodejs
sudo dnf install @multimedia
sudo dnf install @virtualization`}
        language="bash"
        title="grupos de pacotes"
      />

      <h2>Repositórios</h2>
      <CodeBlock
        code={`# Listar repositórios habilitados
dnf repolist

# Listar todos os repositórios (incluindo desabilitados)
dnf repolist all

# Habilitar um repositório
sudo dnf config-manager --enable nome-do-repo

# Desabilitar um repositório
sudo dnf config-manager --disable nome-do-repo

# Adicionar um repositório por URL
sudo dnf config-manager --add-repo https://url-do-repositorio.repo

# Instalar a partir de um repositório específico
sudo dnf install --enablerepo=nome-repo pacote`}
        language="bash"
        title="repositórios"
      />

      <h2><Trash className="inline-block mr-2 mb-1 w-5 h-5" /> Limpeza e Manutenção</h2>
      <CodeBlock
        code={`# Limpar cache do DNF
sudo dnf clean all

# Limpar apenas metadados
sudo dnf clean metadata

# Limpar pacotes baixados
sudo dnf clean packages

# Reconstruir o cache
sudo dnf makecache

# Verificar a base de dados de pacotes
sudo dnf check

# Histórico de operações
dnf history
dnf history info 5          # detalhes da operação 5
sudo dnf history undo 5     # desfazer operação 5`}
        language="bash"
        title="manutenção"
      />

      <AlertBox type="info" title="DNF vs YUM">
        O DNF substitui completamente o YUM no Fedora desde o Fedora 22. O comando <code>yum</code> ainda existe como alias para <code>dnf</code> em muitas distros, mas no Fedora use sempre <code>dnf</code>.
      </AlertBox>

      <h2>Configuração do DNF</h2>
      <CodeBlock
        code={`# Arquivo de configuração principal
cat /etc/dnf/dnf.conf

# Configurações úteis para adicionar ao /etc/dnf/dnf.conf:
# max_parallel_downloads=10   # downloads paralelos (padrão: 3)
# fastestmirror=True          # usar o mirror mais rápido
# deltarpm=True               # usar delta RPMs para economizar banda

# Editar configurações
sudo nano /etc/dnf/dnf.conf`}
        language="bash"
        title="configuração"
      />

      <table>
        <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td><code>dnf install</code></td><td>Instalar pacote</td></tr>
          <tr><td><code>dnf remove</code></td><td>Remover pacote</td></tr>
          <tr><td><code>dnf update</code></td><td>Atualizar pacotes</td></tr>
          <tr><td><code>dnf search</code></td><td>Buscar pacote</td></tr>
          <tr><td><code>dnf info</code></td><td>Informações do pacote</td></tr>
          <tr><td><code>dnf list installed</code></td><td>Listar instalados</td></tr>
          <tr><td><code>dnf provides</code></td><td>Qual pacote fornece um arquivo</td></tr>
          <tr><td><code>dnf history</code></td><td>Histórico de operações</td></tr>
          <tr><td><code>dnf autoremove</code></td><td>Remover pacotes órfãos</td></tr>
          <tr><td><code>dnf clean all</code></td><td>Limpar cache</td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
