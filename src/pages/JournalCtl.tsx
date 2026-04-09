import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { FileText, Search, Settings, Clock, AlertTriangle, Filter } from "lucide-react";

  export default function JournalCtl() {
    return (
      <PageContainer
        title="JournalCtl — Logs do Sistema"
        subtitle="Analise e filtre logs do sistema com journalctl no Fedora: erros de boot, logs de serviços, prioridades e limpeza."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> O que é journalctl?</h2>
        <p>
          O <strong>journalctl</strong> é o comando para consultar logs do <strong>systemd journal</strong>,
          o sistema de logging unificado do Fedora. Todos os logs — boot, kernel, serviços, aplicações —
          ficam em um único lugar, estruturados e pesquisáveis.
        </p>

        <h2>Comandos Básicos</h2>
        <CodeBlock
          code={`# Ver todos os logs
  journalctl

  # Logs mais recentes primeiro
  journalctl -r

  # Últimas 50 linhas
  journalctl -n 50

  # Seguir em tempo real (como tail -f)
  journalctl -f

  # Logs do boot atual
  journalctl -b

  # Logs do boot anterior
  journalctl -b -1

  # Listar boots disponíveis
  journalctl --list-boots`}
          language="bash"
          title="básicos"
        />

        <h2><Filter className="inline-block mr-2 mb-1 w-5 h-5" /> Filtrar Logs</h2>
        <CodeBlock
          code={`# Por unidade/serviço
  journalctl -u nginx
  journalctl -u sshd
  journalctl -u NetworkManager

  # Por prioridade (urgência)
  journalctl -p err          # apenas erros
  journalctl -p warning      # avisos e acima
  journalctl -p crit         # críticos

  # Prioridades: emerg, alert, crit, err, warning, notice, info, debug

  # Por tempo
  journalctl --since "2024-01-15"
  journalctl --since "1 hour ago"
  journalctl --since "2024-01-15 10:00" --until "2024-01-15 12:00"
  journalctl --since today
  journalctl --since yesterday

  # Por PID
  journalctl _PID=1234

  # Por executável
  journalctl /usr/sbin/sshd

  # Kernel messages (dmesg equivalente)
  journalctl -k
  journalctl --dmesg

  # Combinar filtros
  journalctl -u sshd -p err --since "1 hour ago"`}
          language="bash"
          title="filtros"
        />

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Saída e Formato</h2>
        <CodeBlock
          code={`# Formato JSON (para scripts)
  journalctl -u nginx -o json-pretty -n 5

  # Formato curto (padrão)
  journalctl -o short

  # Apenas mensagem (sem metadata)
  journalctl -o cat

  # Com timestamps precisos
  journalctl -o short-precise

  # Exportar para arquivo
  journalctl -u nginx > logs-nginx.txt
  journalctl --since today > logs-hoje.txt

  # Buscar por texto
  journalctl -u sshd | grep "Failed password"
  journalctl -g "error|fail" --since "1 hour ago"`}
          language="bash"
          title="formatos"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciar Espaço</h2>
        <CodeBlock
          code={`# Ver espaço usado pelos logs
  journalctl --disk-usage

  # Limpar logs antigos (manter últimos 7 dias)
  sudo journalctl --vacuum-time=7d

  # Limitar tamanho total
  sudo journalctl --vacuum-size=500M

  # Configurar limite permanente
  sudo vim /etc/systemd/journald.conf
  # SystemMaxUse=500M
  # SystemKeepFree=1G
  # MaxRetentionSec=1month

  sudo systemctl restart systemd-journald`}
          language="bash"
          title="gerenciar espaço"
        />

        <h2>Referência de Filtros</h2>
        <table>
          <thead><tr><th>Filtro</th><th>Exemplo</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>-u</code></td><td><code>-u nginx</code></td><td>Serviço específico</td></tr>
            <tr><td><code>-p</code></td><td><code>-p err</code></td><td>Prioridade</td></tr>
            <tr><td><code>-b</code></td><td><code>-b -1</code></td><td>Boot específico</td></tr>
            <tr><td><code>-k</code></td><td><code>-k</code></td><td>Mensagens do kernel</td></tr>
            <tr><td><code>-f</code></td><td><code>-f</code></td><td>Seguir em tempo real</td></tr>
            <tr><td><code>-n</code></td><td><code>-n 100</code></td><td>Últimas N linhas</td></tr>
            <tr><td><code>--since</code></td><td><code>--since "1h ago"</code></td><td>A partir de quando</td></tr>
            <tr><td><code>-g</code></td><td><code>-g "error"</code></td><td>Grep (busca)</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Diagnóstico rápido">
          Para encontrar problemas rapidamente: <code>journalctl -p err -b</code> mostra apenas
          erros do boot atual. É o primeiro comando para diagnosticar qualquer problema.
        </AlertBox>
      </PageContainer>
    );
  }
  