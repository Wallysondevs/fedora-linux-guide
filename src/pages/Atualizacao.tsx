import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { RefreshCw, Shield, Clock, AlertTriangle, Settings, ArrowUpCircle, CheckCircle } from "lucide-react";

  export default function Atualizacao() {
    return (
      <PageContainer
        title="Atualizações do Sistema"
        subtitle="Mantenha seu Fedora sempre atualizado: atualizações de segurança, upgrade de versão, atualizações automáticas e rollback."
        difficulty="iniciante"
        timeToRead="30 min"
      >
        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Por que Atualizar?</h2>
        <p>
          Manter o sistema atualizado é uma das práticas mais importantes no Linux. As atualizações corrigem <strong>falhas de segurança</strong>, melhoram a <strong>estabilidade</strong>, adicionam <strong>novos recursos</strong> e garantem <strong>compatibilidade</strong> com hardware recente.
        </p>
        <p>
          O Fedora recebe atualizações frequentes — desde pequenas correções até grandes atualizações de kernel e desktop. Recomenda-se verificar atualizações pelo menos uma vez por semana.
        </p>

        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizações com DNF</h2>
        <CodeBlock
          code={`# Verificar se há atualizações disponíveis
  sudo dnf check-update

  # Saída exemplo:
  # firefox.x86_64           121.0-2.fc41     updates
  # kernel.x86_64            6.11.5-301.fc41  updates
  # vim-enhanced.x86_64      9.1.0-1.fc41     updates
  # Código de saída: 100 = há atualizações, 0 = sistema atualizado

  # Atualizar todos os pacotes
  sudo dnf update -y

  # Atualizar um pacote específico
  sudo dnf update firefox

  # Atualizar excluindo pacotes específicos
  sudo dnf update --exclude=kernel*
  sudo dnf update --exclude=firefox --exclude=thunderbird

  # Ver informações sobre as atualizações disponíveis
  dnf updateinfo list
  dnf updateinfo summary`}
          language="bash"
          title="atualizações básicas"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizações de Segurança</h2>
        <p>
          O Fedora categoriza atualizações por tipo. Atualizações de segurança são as mais críticas e devem ser aplicadas o mais rápido possível.
        </p>
        <CodeBlock
          code={`# Instalar APENAS atualizações de segurança
  sudo dnf update --security

  # Ver detalhes das atualizações de segurança
  dnf updateinfo list --security

  # Ver CVEs (vulnerabilidades) corrigidas
  dnf updateinfo info --security

  # Saída exemplo:
  # ===============================================
  # FEDORA-2024-abc123
  # Title: Critical: firefox security update
  # Type: security
  # Severity: Critical
  # CVEs: CVE-2024-1234
  # Description: Mozilla Firefox 121.0.1 security update
  # ===============================================

  # Ver apenas atualizações críticas
  dnf updateinfo list --security --severity=Critical`}
          language="bash"
          title="atualizações de segurança"
        />

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizações Automáticas</h2>
        <p>
          Para quem quer manter o sistema sempre atualizado sem precisar lembrar de rodar comandos manualmente, o Fedora oferece o <strong>dnf-automatic</strong>:
        </p>
        <CodeBlock
          code={`# Instalar o dnf-automatic
  sudo dnf install dnf-automatic

  # Configurar o comportamento
  sudo nano /etc/dnf/automatic.conf

  # Opções importantes no arquivo de configuração:
  # [commands]
  # apply_updates = yes          # aplicar atualizações automaticamente
  # download_updates = yes       # baixar atualizações
  # upgrade_type = default       # default = todas, security = só segurança
  #
  # [emitters]
  # emit_via = stdio             # como notificar (stdio, email, motd)
  #
  # [email]
  # email_from = root@localhost
  # email_to = seu@email.com

  # Habilitar o timer (verifica diariamente)
  sudo systemctl enable --now dnf-automatic-install.timer

  # Verificar se está ativo
  sudo systemctl status dnf-automatic-install.timer

  # Para APENAS baixar (sem instalar automaticamente):
  sudo systemctl enable --now dnf-automatic-download.timer

  # Para apenas notificar sobre atualizações:
  sudo systemctl enable --now dnf-automatic-notifyonly.timer`}
          language="bash"
          title="atualizações automáticas"
        />

        <AlertBox type="warning" title="Atualizações automáticas e estabilidade">
          Atualizações automáticas são ótimas para desktops pessoais, mas em servidores de produção, é melhor revisar as atualizações antes de aplicá-las. Uma atualização pode ocasionalmente quebrar algo.
        </AlertBox>

        <h2><ArrowUpCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Upgrade de Versão do Fedora</h2>
        <p>
          O Fedora lança uma nova versão a cada ~6 meses. Você pode fazer o upgrade sem reinstalar o sistema. Por exemplo, de Fedora 40 para Fedora 41:
        </p>
        <CodeBlock
          code={`# Passo 1: Atualizar o sistema atual completamente
  sudo dnf update -y
  sudo reboot

  # Passo 2: Instalar o plugin de system-upgrade
  sudo dnf install dnf-plugin-system-upgrade

  # Passo 3: Baixar os pacotes da nova versão
  sudo dnf system-upgrade download --releasever=41

  # Se houver conflitos, tente:
  sudo dnf system-upgrade download --releasever=41 --allowerasing

  # Passo 4: Iniciar o upgrade (reinicia o sistema)
  sudo dnf system-upgrade reboot

  # O sistema reinicia e aplica o upgrade.
  # Esse processo pode levar 15-60 minutos dependendo do hardware.

  # Passo 5: Após o upgrade, limpar pacotes antigos
  sudo dnf autoremove
  sudo dnf clean all

  # Verificar a nova versão
  cat /etc/fedora-release
  # Fedora release 41 (Forty One)`}
          language="bash"
          title="upgrade de versão"
        />

        <AlertBox type="info" title="Quantas versões posso pular?">
          O Fedora oficialmente suporta upgrade de até <strong>2 versões</strong> (ex: 39 para 41). Se você está muito atrás, faça upgrades incrementais (39→40→41). Nunca pule mais de 2 versões — pode causar problemas.
        </AlertBox>

        <h2><AlertTriangle className="inline-block mr-2 mb-1 w-5 h-5" /> Rollback de Atualizações</h2>
        <p>
          Se uma atualização causou problemas, o DNF permite reverter operações:
        </p>
        <CodeBlock
          code={`# Ver histórico de operações do DNF
  dnf history
  # ID | Command line           | Date and time    | Action  | Altered
  #  5 | update -y              | 2024-01-15 10:00 | Upgrade |   45
  #  4 | install nginx          | 2024-01-14 15:00 | Install |    3

  # Desfazer a última operação
  sudo dnf history undo last

  # Desfazer uma operação específica
  sudo dnf history undo 5

  # Ver detalhes de uma operação antes de desfazer
  dnf history info 5

  # Fazer downgrade de um pacote específico
  sudo dnf downgrade firefox

  # Se o sistema não boota após atualização de kernel:
  # No GRUB, selecione um kernel anterior
  # Depois, remova o kernel problemático:
  sudo dnf remove kernel-6.11.5-301.fc41

  # Com Btrfs: restaurar de um snapshot
  sudo snapper -c root list
  sudo snapper -c root undochange 5`}
          language="bash"
          title="rollback"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciamento de Kernels</h2>
        <p>
          O Fedora mantém múltiplos kernels instalados por segurança. Se um kernel novo causar problemas, você pode iniciar com um anterior:
        </p>
        <CodeBlock
          code={`# Ver kernels instalados
  rpm -qa kernel-core

  # Ver kernel em uso
  uname -r

  # O Fedora mantém os 3 últimos kernels por padrão
  # Configurar quantos manter:
  # Em /etc/dnf/dnf.conf:
  # installonly_limit=3

  # Remover kernels antigos manualmente
  sudo dnf remove kernel-core-6.10.0-200.fc41

  # No GRUB: pressione ESC ou segure SHIFT durante o boot
  # para ver o menu e selecionar um kernel diferente`}
          language="bash"
          title="gerenciamento de kernels"
        />

        <h2><CheckCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Boas Práticas</h2>
        <ul>
          <li><strong>Atualize semanalmente</strong> — Mantenha o sistema atualizado com <code>sudo dnf update</code></li>
          <li><strong>Crie snapshots antes de grandes mudanças</strong> — Use Snapper/Btrfs antes de upgrades</li>
          <li><strong>Leia os changelogs</strong> — <code>dnf updateinfo</code> mostra o que mudou</li>
          <li><strong>Não pule versões</strong> — Faça upgrade incremental (máximo 2 versões por vez)</li>
          <li><strong>Reinicie após kernels</strong> — Atualizações de kernel só fazem efeito após reboot</li>
          <li><strong>Verifique após o upgrade</strong> — Teste som, Wi-Fi, vídeo e aplicativos após atualizar</li>
          <li><strong>Mantenha kernels antigos</strong> — Não remova todos os kernels anteriores</li>
        </ul>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Erro de mirror/repositório</td><td><code>sudo dnf clean all && sudo dnf makecache</code></td></tr>
            <tr><td>Conflito de dependências no upgrade</td><td>Use <code>--allowerasing</code> ou <code>--skip-broken</code></td></tr>
            <tr><td>Sistema não boota após update</td><td>Selecione kernel anterior no GRUB</td></tr>
            <tr><td>Upgrade travou</td><td>Não force reiniciar! Espere. Se travar &gt;2h, use Live USB</td></tr>
            <tr><td>Pacotes órfãos após upgrade</td><td><code>sudo dnf autoremove && dnf list extras</code></td></tr>
            <tr><td>Aplicativos sumiram após upgrade</td><td><code>sudo dnf distro-sync</code> para sincronizar pacotes</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Suporte do Fedora">
          Cada versão do Fedora recebe suporte por ~13 meses. Sempre mantenha-se em uma versão suportada para receber atualizações de segurança. Verifique em <strong>docs.fedoraproject.org</strong>.
        </AlertBox>
      </PageContainer>
    );
  }
  