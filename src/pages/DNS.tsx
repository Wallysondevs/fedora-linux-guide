import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Globe, Settings, Shield, Search, FileText, Network } from "lucide-react";

  export default function DNS() {
    return (
      <PageContainer
        title="DNS — Resolução de Nomes"
        subtitle="Entenda e configure DNS no Fedora: resolv.conf, systemd-resolved, servidores DNS, dig, nslookup e DNS-over-HTTPS."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> O que é DNS?</h2>
        <p>
          O <strong>DNS</strong> (Domain Name System) traduz nomes de domínio (como <code>google.com</code>)
          em endereços IP (como <code>142.250.218.14</code>). Sem DNS, você teria que memorizar IPs
          numéricos para acessar qualquer site. O DNS é como uma "agenda de contatos" da internet.
        </p>

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas de Consulta DNS</h2>
        <CodeBlock
          code={`# dig — a ferramenta mais completa
  sudo dnf install bind-utils

  # Consulta básica
  dig google.com
  dig google.com A          # registro A (IPv4)
  dig google.com AAAA       # registro AAAA (IPv6)
  dig google.com MX         # servidores de email
  dig google.com NS         # servidores DNS
  dig google.com TXT        # registros TXT (SPF, DKIM, etc.)
  dig google.com ANY        # todos os registros

  # Resposta curta
  dig +short google.com

  # Consulta usando servidor específico
  dig @8.8.8.8 google.com
  dig @1.1.1.1 google.com

  # Trace completo (ver toda a resolução)
  dig +trace google.com

  # Reverso (IP → nome)
  dig -x 8.8.8.8

  # nslookup (alternativa mais simples)
  nslookup google.com
  nslookup -type=MX google.com

  # host (mais simples ainda)
  host google.com
  host -t MX google.com`}
          language="bash"
          title="consultas DNS"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração DNS no Fedora</h2>
        <p>
          O Fedora usa <strong>systemd-resolved</strong> por padrão para resolver DNS:
        </p>
        <CodeBlock
          code={`# Ver configuração DNS atual
  resolvectl status
  # Ou:
  cat /etc/resolv.conf

  # Ver qual servidor DNS está sendo usado
  resolvectl dns

  # Configurar DNS via NetworkManager (recomendado)
  # Interface gráfica: Settings > Network > sua conexão > IPv4/IPv6 > DNS

  # Via terminal:
  nmcli connection modify "Wired connection 1" ipv4.dns "1.1.1.1 8.8.8.8"
  nmcli connection modify "Wired connection 1" ipv4.ignore-auto-dns yes
  nmcli connection up "Wired connection 1"

  # Verificar
  resolvectl status`}
          language="bash"
          title="configuração"
        />

        <h2>Servidores DNS Populares</h2>
        <table>
          <thead><tr><th>Provedor</th><th>IPv4</th><th>IPv6</th><th>Privacidade</th></tr></thead>
          <tbody>
            <tr><td><strong>Cloudflare</strong></td><td><code>1.1.1.1</code> / <code>1.0.0.1</code></td><td><code>2606:4700:4700::1111</code></td><td>Alta (não vende dados)</td></tr>
            <tr><td><strong>Google</strong></td><td><code>8.8.8.8</code> / <code>8.8.4.4</code></td><td><code>2001:4860:4860::8888</code></td><td>Média</td></tr>
            <tr><td><strong>Quad9</strong></td><td><code>9.9.9.9</code></td><td><code>2620:fe::fe</code></td><td>Alta (bloqueia malware)</td></tr>
            <tr><td><strong>OpenDNS</strong></td><td><code>208.67.222.222</code></td><td><code>2620:0:ccc::2</code></td><td>Média</td></tr>
          </tbody>
        </table>

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> DNS-over-HTTPS (DoH)</h2>
        <CodeBlock
          code={`# Habilitar DNS-over-HTTPS no systemd-resolved
  sudo mkdir -p /etc/systemd/resolved.conf.d/
  sudo cat > /etc/systemd/resolved.conf.d/doh.conf << 'EOF'
  [Resolve]
  DNS=1.1.1.1#cloudflare-dns.com 8.8.8.8#dns.google
  DNSOverTLS=yes
  EOF

  sudo systemctl restart systemd-resolved

  # Verificar
  resolvectl status`}
          language="bash"
          title="DNS-over-HTTPS"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> /etc/hosts</h2>
        <CodeBlock
          code={`# /etc/hosts — resolução local (tem prioridade sobre DNS)
  sudo vim /etc/hosts

  # Formato:
  # IP        domínio            alias
  127.0.0.1   localhost
  ::1         localhost
  192.168.1.100  meuservidor.local  meuservidor

  # Útil para:
  # - Bloquear sites (apontar para 0.0.0.0)
  # - Definir nomes para máquinas na rede local
  # - Testar antes de alterar DNS real`}
          language="bash"
          title="/etc/hosts"
        />

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Comando de Diagnóstico</th></tr></thead>
          <tbody>
            <tr><td>Não resolve nomes</td><td><code>dig google.com @1.1.1.1</code> (testar com DNS externo)</td></tr>
            <tr><td>Resolução lenta</td><td><code>dig google.com +stats</code> (ver tempo de resposta)</td></tr>
            <tr><td>Cache desatualizado</td><td><code>resolvectl flush-caches</code></td></tr>
            <tr><td>Ver qual DNS está usando</td><td><code>resolvectl status</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Limpar cache DNS">
          Se um site mudou de servidor mas você ainda vê a versão antiga:
          <code>resolvectl flush-caches</code> limpa o cache DNS do systemd-resolved.
        </AlertBox>
      </PageContainer>
    );
  }
  