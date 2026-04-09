import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Clock, Shield, Settings, Undo2, HardDrive, Calendar } from "lucide-react";

  export default function Timeshift() {
    return (
      <PageContainer
        title="Timeshift — Restauração do Sistema"
        subtitle="Proteja seu Fedora com snapshots automáticos: crie pontos de restauração com Timeshift e Snapper para reverter problemas."
        difficulty="iniciante"
        timeToRead="20 min"
      >
        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Timeshift?</h2>
        <p>
          O <strong>Timeshift</strong> cria "pontos de restauração" do sistema, similares ao Restauração
          do Sistema do Windows. Se uma atualização quebrar algo, você pode voltar ao estado anterior
          em minutos. No Fedora com Btrfs, os snapshots são instantâneos e ocupam pouco espaço.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar Timeshift
  sudo dnf install timeshift

  # Abrir interface gráfica
  sudo timeshift-gtk

  # Ou usar pela linha de comando
  sudo timeshift --help`}
          language="bash"
          title="instalação"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração</h2>
        <CodeBlock
          code={`# Configurar via CLI
  # Tipo de snapshot: BTRFS (recomendado no Fedora) ou RSYNC
  sudo timeshift --snapshot-device /dev/sda2 --btrfs

  # Criar snapshot manual
  sudo timeshift --create --comments "Antes de instalar NVIDIA"

  # Listar snapshots
  sudo timeshift --list

  # Restaurar snapshot
  sudo timeshift --restore --snapshot '2024-01-15_10-00-00'

  # Deletar snapshot
  sudo timeshift --delete --snapshot '2024-01-15_10-00-00'

  # Via interface gráfica (mais fácil):
  # 1. Abra Timeshift
  # 2. Escolha BTRFS como tipo
  # 3. Configure agenda (diário, semanal)
  # 4. Clique "Create" para snapshot manual`}
          language="bash"
          title="uso"
        />

        <h2><Calendar className="inline-block mr-2 mb-1 w-5 h-5" /> Agenda Automática</h2>
        <p>
          Configure snapshots automáticos na interface gráfica:
        </p>
        <ul>
          <li><strong>Boot</strong> — snapshot antes de cada inicialização (útil!)</li>
          <li><strong>Hourly</strong> — a cada hora (manter últimas 5)</li>
          <li><strong>Daily</strong> — diário (manter últimos 5)</li>
          <li><strong>Weekly</strong> — semanal (manter últimos 3)</li>
          <li><strong>Monthly</strong> — mensal (manter últimos 2)</li>
        </ul>

        <h2><Undo2 className="inline-block mr-2 mb-1 w-5 h-5" /> Quando Usar</h2>
        <ul>
          <li><strong>Antes de atualizações grandes</strong> — <code>sudo dnf upgrade</code></li>
          <li><strong>Antes de instalar drivers</strong> — NVIDIA, por exemplo</li>
          <li><strong>Antes de mudanças no sistema</strong> — configurações, partições</li>
          <li><strong>Antes de experimentar</strong> — novo software, configurações arriscadas</li>
        </ul>

        <h2>Btrfs Snapshots vs Timeshift</h2>
        <table>
          <thead><tr><th>Recurso</th><th>Timeshift</th><th>Snapper</th></tr></thead>
          <tbody>
            <tr><td>Interface gráfica</td><td>Sim (excelente)</td><td>Não (CLI)</td></tr>
            <tr><td>Facilidade</td><td>Muito fácil</td><td>Mais técnico</td></tr>
            <tr><td>Restaurar boot</td><td>Sim</td><td>Sim (com grub-btrfs)</td></tr>
            <tr><td>Automação</td><td>Sim</td><td>Sim (mais flexível)</td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="Timeshift não é backup!">
          Timeshift protege o <strong>sistema</strong> (arquivos de configuração, pacotes instalados),
          mas <strong>não protege seus dados pessoais</strong> por padrão. Para proteger documentos,
          fotos e projetos, use uma ferramenta de backup como rsync ou Borg (veja a página de Backup).
        </AlertBox>

        <AlertBox type="success" title="Dica de ouro">
          Crie um snapshot ANTES de cada <code>sudo dnf upgrade</code>. Se a atualização causar problemas,
          restaure em 2 minutos. Com Btrfs, o snapshot é instantâneo e não ocupa espaço extra até
          que os arquivos mudem.
        </AlertBox>
      </PageContainer>
    );
  }
  