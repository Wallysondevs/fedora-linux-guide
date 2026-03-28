import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { RefreshCw, ArrowUp, CheckCircle } from "lucide-react";

export default function Atualizacao() {
  return (
    <PageContainer
      title="Atualização do Sistema"
      subtitle="Mantenha o Fedora sempre atualizado — atualizações de segurança, atualização de versão e melhores práticas."
      difficulty="iniciante"
      timeToRead="20 min"
    >
      <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizações do Sistema (mesma versão)</h2>
      <p>
        Manter o sistema atualizado é essencial para segurança e estabilidade. O Fedora recebe atualizações frequentes de pacotes, kernels e correções de segurança.
      </p>
      <CodeBlock
        code={`# Verificar atualizações disponíveis
sudo dnf check-update

# Instalar todas as atualizações
sudo dnf update -y

# Atualizar apenas pacotes de segurança
sudo dnf update --security

# Atualizar apenas um pacote específico
sudo dnf update firefox

# Ver o histórico de atualizações
dnf history
dnf history info 1    # detalhes da última operação`}
        language="bash"
        title="atualizações regulares"
      />

      <AlertBox type="info" title="Atualização automática">
        O GNOME Software (e o dnf-automatic) podem configurar atualizações automáticas. Para servidores, instale: <code>sudo dnf install dnf-automatic && sudo systemctl enable --now dnf-automatic.timer</code>
      </AlertBox>

      <h2><ArrowUp className="inline-block mr-2 mb-1 w-5 h-5" /> Atualização de Versão (ex: Fedora 39 → 40)</h2>
      <p>
        A atualização de uma versão major do Fedora é feita com o <strong>dnf system-upgrade</strong>. O processo é seguro e preserva suas configurações e dados.
      </p>
      <CodeBlock
        code={`# Passo 1: Atualizar todos os pacotes da versão atual primeiro
sudo dnf update --refresh -y

# Passo 2: Instalar o plugin de upgrade (já vem com dnf moderno)
sudo dnf install dnf-plugin-system-upgrade

# Passo 3: Baixar os pacotes da nova versão (ex: para Fedora 41)
sudo dnf system-upgrade download --releasever=41

# Se houver erros de dependências, use:
sudo dnf system-upgrade download --releasever=41 --allowerasing

# Passo 4: Reiniciar e aplicar o upgrade
sudo dnf system-upgrade reboot

# O sistema vai reiniciar e completar a atualização automaticamente
# Isso leva alguns minutos dependendo do hardware`}
        language="bash"
        title="upgrade de versão"
      />

      <AlertBox type="warning" title="Antes de fazer upgrade de versão">
        <ul>
          <li>Faça backup dos seus dados importantes</li>
          <li>Crie um snapshot Btrfs se possível</li>
          <li>Certifique-se de ter energia estável (não faça em laptop sem carregador)</li>
          <li>Feche todos os aplicativos antes de reiniciar para o upgrade</li>
        </ul>
      </AlertBox>

      <h2>Verificar Versão Após Atualização</h2>
      <CodeBlock
        code={`# Ver versão do Fedora
cat /etc/fedora-release

# Ver versão do kernel
uname -r

# Ver todos os kernels instalados
rpm -qa | grep kernel | sort

# Remover kernels antigos (mantém apenas os 3 mais recentes por padrão)
sudo dnf remove --oldinstallonly --setopt installonly_limit=2`}
        language="bash"
        title="verificação pós-upgrade"
      />

      <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Pós-Upgrade: Limpeza</h2>
      <CodeBlock
        code={`# Após o upgrade, limpar pacotes não mais necessários
sudo dnf autoremove

# Limpar cache do DNF
sudo dnf clean all

# Verificar se há pacotes órfãos
sudo dnf list extras

# Sincronizar metadados
sudo dnf makecache

# Verificar se há arquivos de configuração com backup (.rpmsave, .rpmnew)
find /etc -name "*.rpmsave" 2>/dev/null
find /etc -name "*.rpmnew" 2>/dev/null`}
        language="bash"
        title="limpeza pós-upgrade"
      />

      <h2>Revertendo uma Atualização</h2>
      <CodeBlock
        code={`# Ver histórico de operações DNF
dnf history

# Reverter a última operação
sudo dnf history undo last

# Reverter uma operação específica (pelo número)
sudo dnf history undo 5

# Reverter uma atualização específica de um pacote
sudo dnf downgrade firefox`}
        language="bash"
        title="revertendo atualizações"
      />
    </PageContainer>
  );
}
