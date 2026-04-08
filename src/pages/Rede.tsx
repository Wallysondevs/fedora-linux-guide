import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Network, Wifi, Globe, Shield, Server, Settings } from "lucide-react";

  export default function Rede() {
    return (
      <PageContainer
        title="Configuração de Rede"
        subtitle="Configure e gerencie conexões de rede no Fedora — Ethernet, Wi-Fi, DNS, VPN e diagnóstico de problemas."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> NetworkManager</h2>
        <p>
          O Fedora usa o <strong>NetworkManager</strong> para gerenciar todas as conexões de rede. Ele é controlado tanto pela interface gráfica do GNOME quanto pela ferramenta de linha de comando <strong>nmcli</strong> e pela interface interativa <strong>nmtui</strong>.
        </p>

        <h3>Ferramentas de gerenciamento</h3>
        <table>
          <thead><tr><th>Ferramenta</th><th>Tipo</th><th>Ideal para</th></tr></thead>
          <tbody>
            <tr><td><strong>Configurações do GNOME</strong></td><td>Gráfica</td><td>Configuração básica (Wi-Fi, IP, DNS)</td></tr>
            <tr><td><strong>nmtui</strong></td><td>TUI (terminal gráfico)</td><td>Servidores sem GUI, configuração rápida</td></tr>
            <tr><td><strong>nmcli</strong></td><td>CLI</td><td>Scripts, automação, configuração avançada</td></tr>
            <tr><td><strong>nm-connection-editor</strong></td><td>GUI</td><td>Configurações avançadas (bonding, VPN, etc.)</td></tr>
          </tbody>
        </table>

        <h2>nmcli — Gerenciamento por Linha de Comando</h2>

        <h3>Status e informações</h3>
        <CodeBlock
          code={`# Ver status geral da rede
  nmcli general status
  # STATE      CONNECTIVITY  WIFI-HW  WIFI     WWAN-HW  WWAN
  # connected  full          enabled  enabled  enabled  enabled

  # Listar todas as conexões
  nmcli connection show
  # NAME        UUID                                  TYPE      DEVICE
  # Ethernet    a1b2c3d4-...                          ethernet  enp0s3
  # MinhaWifi   e5f6g7h8-...                          wifi      wlp2s0

  # Listar interfaces de rede
  nmcli device status
  # DEVICE   TYPE      STATE      CONNECTION
  # enp0s3   ethernet  connected  Ethernet
  # wlp2s0   wifi      connected  MinhaWifi
  # lo       loopback  unmanaged  --

  # Detalhes de uma conexão
  nmcli connection show "MinhaWifi"

  # IP, gateway e DNS ativos
  nmcli device show enp0s3
  ip addr show
  ip route show`}
          language="bash"
          title="status da rede"
        />

        <h3><Wifi className="inline-block mr-2 mb-1 w-5 h-5" /> Wi-Fi</h3>
        <CodeBlock
          code={`# Listar redes Wi-Fi disponíveis
  nmcli device wifi list
  # SSID             MODE   CHAN  RATE       SIGNAL  BARS  SECURITY
  # MinhaRede        Infra  6     54 Mbit/s  92      ****  WPA2
  # OutraRede        Infra  11    54 Mbit/s  45      **    WPA2

  # Conectar a uma rede Wi-Fi
  nmcli device wifi connect "MinhaRede" password "minha-senha"

  # Conectar a rede oculta
  nmcli device wifi connect "RedeOculta" password "senha" hidden yes

  # Desconectar do Wi-Fi
  nmcli device disconnect wlp2s0

  # Reescanear redes
  nmcli device wifi rescan

  # Excluir uma conexão salva
  nmcli connection delete "MinhaRede"

  # Ligar/desligar Wi-Fi
  nmcli radio wifi off
  nmcli radio wifi on`}
          language="bash"
          title="wi-fi"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração de IP</h2>

        <h3>IP Estático</h3>
        <CodeBlock
          code={`# Configurar IP estático em uma conexão ethernet
  nmcli connection modify "Ethernet" \
    ipv4.method manual \
    ipv4.addresses 192.168.1.100/24 \
    ipv4.gateway 192.168.1.1 \
    ipv4.dns "8.8.8.8,8.8.4.4"

  # Aplicar as mudanças
  nmcli connection up "Ethernet"

  # Voltar para DHCP
  nmcli connection modify "Ethernet" ipv4.method auto
  nmcli connection up "Ethernet"

  # Adicionar IP secundário
  nmcli connection modify "Ethernet" +ipv4.addresses 192.168.1.101/24

  # Verificar configuração
  ip addr show enp0s3
  ip route show`}
          language="bash"
          title="ip estático"
        />

        <h3>DNS</h3>
        <CodeBlock
          code={`# Configurar DNS personalizado
  nmcli connection modify "Ethernet" ipv4.dns "1.1.1.1 1.0.0.1"

  # Adicionar DNS sem substituir
  nmcli connection modify "Ethernet" +ipv4.dns "8.8.8.8"

  # Impedir que o DHCP sobrescreva o DNS
  nmcli connection modify "Ethernet" ipv4.ignore-auto-dns yes

  # Aplicar
  nmcli connection up "Ethernet"

  # Verificar DNS em uso
  cat /etc/resolv.conf
  resolvectl status

  # Testar resolução DNS
  nslookup google.com
  dig google.com
  host google.com`}
          language="bash"
          title="configuração de dns"
        />

        <h3>Servidores DNS populares</h3>
        <table>
          <thead><tr><th>Provedor</th><th>DNS Primário</th><th>DNS Secundário</th><th>Diferencial</th></tr></thead>
          <tbody>
            <tr><td><strong>Cloudflare</strong></td><td>1.1.1.1</td><td>1.0.0.1</td><td>Mais rápido, privacidade</td></tr>
            <tr><td><strong>Google</strong></td><td>8.8.8.8</td><td>8.8.4.4</td><td>Confiável, global</td></tr>
            <tr><td><strong>Quad9</strong></td><td>9.9.9.9</td><td>149.112.112.112</td><td>Bloqueio de malware</td></tr>
            <tr><td><strong>OpenDNS</strong></td><td>208.67.222.222</td><td>208.67.220.220</td><td>Filtro de conteúdo</td></tr>
          </tbody>
        </table>

        <h2>Hostname</h2>
        <CodeBlock
          code={`# Ver hostname atual
  hostnamectl

  # Alterar hostname
  sudo hostnamectl set-hostname meu-fedora

  # Hostname transitório (até reiniciar)
  sudo hostnamectl set-hostname meu-fedora --transient

  # Editar /etc/hosts para resolução local
  sudo nano /etc/hosts
  # 127.0.0.1   localhost
  # 192.168.1.10 servidor.local servidor`}
          language="bash"
          title="hostname"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> VPN</h2>
        <CodeBlock
          code={`# WireGuard — VPN moderna e rápida
  sudo dnf install wireguard-tools

  # Gerar par de chaves
  wg genkey | tee privatekey | wg pubkey > publickey

  # Configurar interface WireGuard
  sudo nano /etc/wireguard/wg0.conf
  # [Interface]
  # PrivateKey = <sua-chave-privada>
  # Address = 10.0.0.2/24
  # DNS = 1.1.1.1
  #
  # [Peer]
  # PublicKey = <chave-pública-do-servidor>
  # Endpoint = vpn.exemplo.com:51820
  # AllowedIPs = 0.0.0.0/0

  # Conectar/desconectar
  sudo wg-quick up wg0
  sudo wg-quick down wg0

  # Status da VPN
  sudo wg show

  # Habilitar no boot
  sudo systemctl enable wg-quick@wg0

  # OpenVPN
  sudo dnf install openvpn NetworkManager-openvpn-gnome
  # Importe o arquivo .ovpn pelo GNOME Settings ou:
  nmcli connection import type openvpn file minha-vpn.ovpn`}
          language="bash"
          title="vpn"
        />

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Diagnóstico de Rede</h2>
        <CodeBlock
          code={`# Testar conectividade básica
  ping google.com
  ping -c 4 8.8.8.8    # 4 pacotes apenas

  # Traçar rota até um destino
  traceroute google.com
  tracepath google.com    # não requer root

  # Verificar portas abertas localmente
  ss -tulpn
  # -t = TCP, -u = UDP, -l = listening, -p = processo, -n = numérico

  # Verificar portas de um host remoto
  nmap -sT 192.168.1.1

  # Testar conexão a uma porta específica
  nc -zv google.com 443

  # Download de teste para medir velocidade
  curl -o /dev/null -w "Velocidade: %{speed_download} bytes/s\n" https://speed.cloudflare.com/__down?bytes=10000000

  # Ver tabela de roteamento
  ip route show

  # Ver tabela ARP (dispositivos na rede local)
  ip neigh show

  # Capturar pacotes (requer root)
  sudo tcpdump -i enp0s3 -n port 80
  sudo tcpdump -i any -w captura.pcap    # salvar para Wireshark

  # Ver estatísticas de rede
  ss -s        # resumo de conexões
  ip -s link   # estatísticas por interface`}
          language="bash"
          title="diagnóstico"
        />

        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> SSH — Acesso Remoto</h2>
        <CodeBlock
          code={`# Instalar servidor SSH
  sudo dnf install openssh-server

  # Habilitar e iniciar
  sudo systemctl enable --now sshd

  # Conectar a um servidor remoto
  ssh usuario@192.168.1.10
  ssh -p 2222 usuario@servidor.com    # porta customizada

  # Copiar arquivos via SSH
  scp arquivo.txt usuario@servidor:/home/usuario/
  scp -r pasta/ usuario@servidor:/home/usuario/

  # rsync via SSH (mais eficiente para muitos arquivos)
  rsync -avz pasta/ usuario@servidor:/destino/

  # Gerar chave SSH (autenticação sem senha)
  ssh-keygen -t ed25519 -C "meu@email.com"
  # Chave privada: ~/.ssh/id_ed25519
  # Chave pública: ~/.ssh/id_ed25519.pub

  # Copiar chave para servidor remoto
  ssh-copy-id usuario@servidor

  # Config SSH para atalhos (~/.ssh/config)
  # Host meu-servidor
  #   HostName 192.168.1.10
  #   User admin
  #   Port 2222
  #   IdentityFile ~/.ssh/id_ed25519
  # Depois: ssh meu-servidor`}
          language="bash"
          title="ssh"
        />

        <h2>Troubleshooting de Rede</h2>
        <table>
          <thead><tr><th>Problema</th><th>Diagnóstico</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>Sem internet</td><td><code>ping 8.8.8.8</code></td><td>Se pinga, é DNS. Se não, verifique gateway e cabo</td></tr>
            <tr><td>DNS não resolve</td><td><code>nslookup google.com</code></td><td>Configure DNS manualmente (1.1.1.1 ou 8.8.8.8)</td></tr>
            <tr><td>Wi-Fi não conecta</td><td><code>nmcli device wifi list</code></td><td>Verifique senha; delete e recrie a conexão</td></tr>
            <tr><td>IP não obtido (DHCP)</td><td><code>journalctl -u NetworkManager</code></td><td>Reinicie NetworkManager: <code>sudo systemctl restart NetworkManager</code></td></tr>
            <tr><td>Velocidade lenta</td><td><code>ethtool enp0s3</code></td><td>Verifique negociação de velocidade; teste com cabo direto</td></tr>
            <tr><td>SSH recusado</td><td><code>ss -tlnp | grep 22</code></td><td>Verifique sshd e firewall: <code>sudo firewall-cmd --add-service=ssh</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  