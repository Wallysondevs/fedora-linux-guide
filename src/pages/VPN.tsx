import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Shield, Lock, Globe, Settings, Network, Key } from "lucide-react";

  export default function VPN() {
    return (
      <PageContainer
        title="VPN no Fedora"
        subtitle="Configure VPNs no Fedora: OpenVPN, WireGuard, integração com NetworkManager e serviços VPN comerciais."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> O que é VPN?</h2>
        <p>
          Uma <strong>VPN</strong> (Virtual Private Network) cria um túnel criptografado entre seu computador
          e um servidor remoto, protegendo seu tráfego de internet. Útil para privacidade, acesso remoto
          a redes corporativas e bypass de restrições geográficas.
        </p>

        <h2><Lock className="inline-block mr-2 mb-1 w-5 h-5" /> WireGuard (Recomendado)</h2>
        <p>
          O <strong>WireGuard</strong> é o protocolo VPN mais moderno, rápido e seguro, integrado ao kernel Linux.
        </p>
        <CodeBlock
          code={`# Instalar WireGuard
  sudo dnf install wireguard-tools

  # Gerar par de chaves
  wg genkey | tee privatekey | wg pubkey > publickey

  # Configuração do cliente
  sudo cat > /etc/wireguard/wg0.conf << 'EOF'
  [Interface]
  PrivateKey = SUA_CHAVE_PRIVADA
  Address = 10.0.0.2/24
  DNS = 1.1.1.1

  [Peer]
  PublicKey = CHAVE_PUBLICA_DO_SERVIDOR
  Endpoint = servidor.com:51820
  AllowedIPs = 0.0.0.0/0
  PersistentKeepalive = 25
  EOF

  sudo chmod 600 /etc/wireguard/wg0.conf

  # Conectar
  sudo wg-quick up wg0

  # Desconectar
  sudo wg-quick down wg0

  # Ver status
  sudo wg show

  # Conectar automaticamente no boot
  sudo systemctl enable wg-quick@wg0`}
          language="bash"
          title="WireGuard"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> OpenVPN</h2>
        <CodeBlock
          code={`# Instalar OpenVPN
  sudo dnf install openvpn NetworkManager-openvpn NetworkManager-openvpn-gnome

  # Conectar com arquivo .ovpn
  sudo openvpn --config minha-vpn.ovpn

  # Ou via NetworkManager:
  # Settings > Network > VPN > + > Import from file...
  # Selecione o arquivo .ovpn

  # Via terminal:
  nmcli connection import type openvpn file minha-vpn.ovpn
  nmcli connection up minha-vpn`}
          language="bash"
          title="OpenVPN"
        />

        <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> Serviços VPN Comerciais</h2>
        <table>
          <thead><tr><th>Serviço</th><th>Protocolo</th><th>App Linux</th><th>Instalação no Fedora</th></tr></thead>
          <tbody>
            <tr><td>Mullvad</td><td>WireGuard</td><td>Nativo</td><td><code>sudo dnf install mullvad-vpn</code></td></tr>
            <tr><td>ProtonVPN</td><td>OpenVPN/WG</td><td>Nativo</td><td>Flatpak ou .rpm do site</td></tr>
            <tr><td>NordVPN</td><td>OpenVPN/WG</td><td>CLI</td><td>.rpm do site</td></tr>
            <tr><td>Surfshark</td><td>OpenVPN/WG</td><td>Nativo</td><td>.rpm do site</td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>VPN não conecta</td><td>Verifique firewall: <code>sudo firewall-cmd --add-port=51820/udp</code></td></tr>
            <tr><td>DNS não funciona com VPN</td><td>Configure DNS no arquivo de config da VPN</td></tr>
            <tr><td>Lento com OpenVPN</td><td>Tente WireGuard (muito mais rápido)</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="WireGuard vs OpenVPN">
          O <strong>WireGuard</strong> é mais rápido, mais simples e mais seguro. Use OpenVPN apenas
          se seu provedor VPN não suportar WireGuard. O WireGuard está no kernel do Linux, então
          a performance é nativa.
        </AlertBox>
      </PageContainer>
    );
  }
  