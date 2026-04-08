import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { RefreshCw, ArrowUp, CheckCircle, Shield, Clock, Settings } from "lucide-react";

  export default function Atualizacao() {
    return (
      <PageContainer
        title="Atualização do Sistema"
        subtitle="Mantenha o Fedora sempre atualizado — atualizações de segurança, upgrade de versão, automação e melhores práticas."
        difficulty="iniciante"
        timeToRead="30 min"
      >
        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Tipos de Atualização</h2>
        <p>Existem dois tipos fundamentais de atualização no Fedora:</p>
        <ul>
          <li><strong>Atualizações regulares</strong> — correções de bugs, segurança e melhorias dentro da mesma versão (ex: Fedora 41.x)</li>
          <li><strong>Upgrade de versão</strong> — migração para uma nova versão major (ex: Fedora 40 → 41)</li>
        </ul>

        <h2>Atualizações Regulares (mesma versão)</h2>
        <p>
          Manter o sistema atualizado é essencial para segurança e estabilidade. O Fedora recebe atualizações frequentes de pacotes, kernels e correções de segurança.
        </p>
        <CodeBlock
          code={`# Verificar atualizações disponíveis (sem instalar)
  sudo dnf check-update
  # Lista todos os pacotes com atualização disponível
  # Saída: nome do pacote, versão nova, repositório

  # Instalar todas as atualizações
  sudo dnf update -y

  # Atualizar apenas pacotes de segurança
  sudo dnf update --security

  # Atualizar um pacote específico
  sudo dnf update firefox

  # Atualizar e excluir um pacote da atualização
  sudo dnf update --exclude=kernel*

  # Ver changelog das atualizações disponíveis
  dnf updateinfo list
  dnf updateinfo info --security    # apenas de segurança

  # Ver o histórico de atualizações
  dnf history
  dnf history info last    # detalhes da última operação`}
          language="bash"
          title="atualizações regulares"
        />

        <AlertBox type="info" title="update vs upgrade">
          No Fedora, <code>dnf update</code> e <code>dnf upgrade</code> são equivalentes. Ambos atualizam pacotes existentes. Não confunda com <code>dnf system-upgrade</code> que é o upgrade de versão major.
        </AlertBox>

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizações Automáticas</h2>
        <p>Você pode configurar atualizações automáticas de duas formas:</p>

        <h3>GNOME Software (interface gráfica)</h3>
        <p>O GNOME Software atualiza automaticamente em segundo plano. Verifique em <strong>Configurações → Sobre → Atualizações</strong>.</p>

        <h3>dnf-automatic (servidores e avançados)</h3>
        <CodeBlock
          code={`# Instalar o dnf-automatic
  sudo dnf install dnf-automatic

  # Configurar o comportamento
  sudo nano /etc/dnf/automatic.conf

  # Opções importantes no arquivo:
  # [commands]
  # apply_updates = yes           # aplicar automaticamente
  # download_updates = yes        # baixar automaticamente
  # upgrade_type = default        # default (tudo) ou security
  #
  # [emitters]
  # emit_via = stdio              # stdio, email, ou motd

  # Habilitar o timer para atualizações diárias
  sudo systemctl enable --now dnf-automatic.timer

  # Verificar status do timer
  systemctl status dnf-automatic.timer
  systemctl list-timers | grep dnf

  # Se quiser apenas baixar (sem instalar automaticamente):
  sudo systemctl enable --now dnf-automatic-download.timer

  # Se quiser apenas notificar sobre atualizações:
  sudo systemctl enable --now dnf-automatic-notifyavail.timer`}
          language="bash"
          title="atualizações automáticas"
        />

        <h3>Comparação dos modos automáticos</h3>
        <table>
          <thead><tr><th>Timer</th><th>Comportamento</th><th>Uso recomendado</th></tr></thead>
          <tbody>
            <tr><td><code>dnf-automatic.timer</code></td><td>Baixa e instala automaticamente</td><td>Servidores não-críticos</td></tr>
            <tr><td><code>dnf-automatic-download.timer</code></td><td>Baixa mas não instala</td><td>Desktops (aplique manualmente)</td></tr>
            <tr><td><code>dnf-automatic-notifyavail.timer</code></td><td>Apenas notifica</td><td>Servidores de produção</td></tr>
            <tr><td><code>dnf-automatic-install.timer</code></td><td>Baixa e instala</td><td>Igual ao primeiro</td></tr>
          </tbody>
        </table>

        <h2><ArrowUp className="inline-block mr-2 mb-1 w-5 h-5" /> Upgrade de Versão (ex: Fedora 40 → 41)</h2>
        <p>
          A atualização de uma versão major do Fedora é feita com o <strong>dnf system-upgrade</strong>. O processo é seguro e preserva suas configurações e dados pessoais.
        </p>

        <h3>Pré-requisitos</h3>
        <AlertBox type="warning" title="Antes de fazer upgrade de versão">
          <ul>
            <li>Faça <strong>backup dos seus dados</strong> importantes (documentos, fotos, projetos)</li>
            <li>Crie um <strong>snapshot Btrfs</strong> se possível (permite reverter facilmente)</li>
            <li>Certifique-se de ter <strong>energia estável</strong> (não faça em laptop sem carregador)</li>
            <li>Feche todos os aplicativos antes de reiniciar</li>
            <li>Tenha pelo menos <strong>5 GB livres</strong> no disco</li>
            <li>Leia as <strong>notas de lançamento</strong> da nova versão em docs.fedoraproject.org</li>
          </ul>
        </AlertBox>

        <h3>Criando um snapshot antes do upgrade (recomendado)</h3>
        <CodeBlock
          code={`# Se usa Btrfs (padrão do Fedora), crie um snapshot de segurança
  sudo btrfs subvolume snapshot / /snapshots/pre-upgrade-f41

  # Se usa snapper:
  sudo snapper -c root create --description "antes do upgrade para F41"`}
          language="bash"
          title="snapshot de segurança"
        />

        <h3>Processo de upgrade</h3>
        <CodeBlock
          code={`# Passo 1: Atualizar todos os pacotes da versão atual primeiro
  sudo dnf update --refresh -y
  # IMPORTANTE: reinicie se o kernel foi atualizado
  sudo reboot

  # Passo 2: Instalar o plugin de upgrade (já vem com dnf5)
  sudo dnf install dnf-plugin-system-upgrade

  # Passo 3: Baixar os pacotes da nova versão
  sudo dnf system-upgrade download --releasever=41
  # Isso pode levar 15-60 minutos dependendo da conexão
  # O sistema baixa ~2-4 GB de pacotes

  # Se houver erros de dependências:
  sudo dnf system-upgrade download --releasever=41 --allowerasing
  # --allowerasing permite remover pacotes conflitantes

  # Se quiser pular pacotes com problemas:
  sudo dnf system-upgrade download --releasever=41 --allowerasing --skip-broken

  # Passo 4: Iniciar o upgrade (reinicia o sistema)
  sudo dnf system-upgrade reboot
  # O sistema reinicia e aplica as atualizações
  # NÃO desligue o computador durante este processo!
  # Tempo estimado: 15-45 minutos dependendo do hardware`}
          language="bash"
          title="upgrade de versão"
        />

        <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Verificação e Limpeza Pós-Upgrade</h2>

        <h3>Verificar se o upgrade funcionou</h3>
        <CodeBlock
          code={`# Verificar versão do Fedora
  cat /etc/fedora-release
  # Saída esperada: Fedora release 41 (Forty One)

  # Versão do kernel
  uname -r

  # Ver todos os kernels instalados
  rpm -qa | grep kernel-core | sort

  # Verificar se há serviços com falha
  systemctl --failed`}
          language="bash"
          title="verificação pós-upgrade"
        />

        <h3>Limpeza pós-upgrade</h3>
        <CodeBlock
          code={`# Remover pacotes órfãos (dependências antigas)
  sudo dnf autoremove

  # Limpar cache do DNF (libera bastante espaço)
  sudo dnf clean all

  # Verificar pacotes que não existem mais nos repos
  sudo dnf list extras
  # Se quiser remover: sudo dnf remove $(dnf list extras -q | awk '{print $1}')

  # Reconstruir cache dos repositórios
  sudo dnf makecache

  # Remover kernels antigos (mantém os 3 mais recentes por padrão)
  sudo dnf remove --oldinstallonly --setopt installonly_limit=2

  # Verificar arquivos de configuração com backup
  find /etc -name "*.rpmsave" 2>/dev/null
  find /etc -name "*.rpmnew" 2>/dev/null
  # .rpmsave = seu arquivo antigo foi substituído (seu backup)
  # .rpmnew = nova configuração que não substituiu a sua`}
          language="bash"
          title="limpeza pós-upgrade"
        />

        <h2>Revertendo uma Atualização</h2>
        <CodeBlock
          code={`# Reverter a última operação DNF
  sudo dnf history undo last

  # Ver histórico detalhado
  dnf history
  dnf history info 5    # detalhes da operação 5

  # Reverter uma operação específica
  sudo dnf history undo 5

  # Fazer downgrade de um pacote específico
  sudo dnf downgrade firefox

  # Se fez snapshot Btrfs antes do upgrade:
  # Reinicie pelo GRUB, entre no snapshot e faça rollback
  # Ou monte o snapshot e copie os arquivos necessários`}
          language="bash"
          title="revertendo atualizações"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Melhores Práticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { title: "Atualize regularmente", desc: "Atualizações semanais mantêm o sistema seguro. Atualizações de segurança são críticas." },
            { title: "Não pule versões", desc: "Atualize uma versão por vez. Fedora 39 → 40 → 41, nunca 39 → 41 diretamente." },
            { title: "Leia as notas de lançamento", desc: "Antes de cada upgrade, veja as mudanças em docs.fedoraproject.org." },
            { title: "Faça backups", desc: "Sempre tenha backup antes de upgrades de versão. Use snapshots Btrfs ou rsync." },
            { title: "Use snapshots", desc: "Se usa Btrfs, crie um snapshot antes de qualquer operação arriscada." },
            { title: "Reinicie após kernel", desc: "Após atualizar o kernel, reinicie para usar a nova versão." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card">
              <h4 className="font-bold mt-0 mb-1 border-0 text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Troubleshooting de Atualizações</h2>
        <table>
          <thead><tr><th>Problema</th><th>Causa</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Erro de dependência no upgrade</td><td>Pacotes de terceiros conflitantes</td><td>Use <code>--allowerasing</code> ou remova o pacote conflitante</td></tr>
            <tr><td>Upgrade travou durante reboot</td><td>Hardware/energia</td><td>Aguarde — pode levar 30+ min. Se realmente travou, force reboot e execute <code>sudo dnf system-upgrade clean</code></td></tr>
            <tr><td>Sistema não inicia após upgrade</td><td>Driver incompatível</td><td>Selecione kernel anterior no GRUB; ou entre no rescue mode</td></tr>
            <tr><td>RPM Fusion quebrado</td><td>Repositório não atualizado</td><td>Reinstale RPM Fusion para a nova versão do Fedora</td></tr>
            <tr><td>Apps Flatpak não abrem</td><td>Runtime desatualizado</td><td><code>flatpak update</code> para atualizar os runtimes</td></tr>
            <tr><td>Espaço insuficiente</td><td>Cache cheio ou disco pequeno</td><td><code>sudo dnf clean all</code> e <code>flatpak uninstall --unused</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  