import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Network, Wifi, Globe } from "lucide-react";

export default function Rede() {
  return (
    <PageContainer
      title="Configuração de Rede"
      subtitle="Configure interfaces de rede, IP estático, DNS e diagnostique problemas de conectividade no Fedora."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> NetworkManager no Fedora</h2>
      <p>
        O Fedora usa o <strong>NetworkManager</strong> para gerenciar conexões de rede. Você pode configurá-lo via interface gráfica (GNOME Settings), linha de comando (<code>nmcli</code>) ou arquivo de configuração.
      </p>

      <h2>nmcli — NetworkManager na Linha de Comando</h2>
      <CodeBlock
        code={`# Ver status das conexões
nmcli
nmcli device status
nmcli connection show

# Ver informações de uma interface
nmcli device show eth0
nmcli device show wlan0

# Listar redes Wi-Fi disponíveis
nmcli device wifi list

# Conectar a uma rede Wi-Fi
nmcli device wifi connect "Nome_da_Rede" password "senha123"

# Desconectar de uma rede
nmcli device disconnect wlan0

# Habilitar/desabilitar interfaces
nmcli device disconnect eth0
nmcli device connect eth0

# Ligar/desligar Wi-Fi
nmcli radio wifi off
nmcli radio wifi on`}
        language="bash"
        title="nmcli básico"
      />

      <h2>Configurando IP Estático</h2>
      <CodeBlock
        code={`# Ver conexões atuais
nmcli connection show

# Configurar IP estático (substitua os valores)
nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses 192.168.1.100/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns "8.8.8.8,1.1.1.1"

# Aplicar as alterações
nmcli connection up "Wired connection 1"

# Voltar para DHCP
nmcli connection modify "Wired connection 1" ipv4.method auto
nmcli connection up "Wired connection 1"`}
        language="bash"
        title="ip estático"
      />

      <h2>Diagnóstico de Rede</h2>
      <CodeBlock
        code={`# Ver endereços IP
ip addr show
ip addr show eth0      # interface específica
hostname -I            # IPs do sistema

# Ver tabela de roteamento
ip route show
ip route get 8.8.8.8   # rota para um destino

# Testar conectividade
ping 8.8.8.8           # testar internet
ping -c 4 google.com   # 4 pings apenas

# Testar resolução DNS
nslookup google.com
dig google.com
host google.com

# Ver conexões ativas
ss -tulpn              # portas TCP/UDP abertas
ss -s                  # estatísticas de sockets

# Verificar rota e saltos
traceroute google.com
tracepath google.com   # versão sem precisar de root

# Verificar conectividade HTTP
curl -I https://fedoraproject.org
wget --spider https://fedoraproject.org`}
        language="bash"
        title="diagnóstico"
      />

      <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Configurando DNS</h2>
      <CodeBlock
        code={`# Ver DNS configurado
cat /etc/resolv.conf
nmcli connection show "Wired connection 1" | grep dns

# Configurar DNS via nmcli
nmcli connection modify "Wired connection 1" ipv4.dns "1.1.1.1 8.8.8.8"

# Usar o systemd-resolved para caching DNS
systemctl status systemd-resolved
sudo systemctl enable --now systemd-resolved

# Ver servidores DNS em uso pelo resolved
resolvectl status
resolvectl dns`}
        language="bash"
        title="configuração dns"
      />

      <h2>SSH — Acesso Remoto</h2>
      <CodeBlock
        code={`# Instalar servidor SSH
sudo dnf install openssh-server

# Habilitar e iniciar o SSH
sudo systemctl enable --now sshd

# Conectar a um servidor remoto
ssh usuario@192.168.1.100
ssh usuario@servidor.exemplo.com

# Conexão com chave SSH
ssh -i ~/.ssh/id_rsa usuario@servidor

# Gerar par de chaves SSH
ssh-keygen -t ed25519 -C "meu@email.com"

# Copiar chave pública para servidor
ssh-copy-id usuario@servidor

# Configurar o cliente SSH (~/.ssh/config)
# Host meuservidor
#     HostName 192.168.1.100
#     User joao
#     IdentityFile ~/.ssh/id_ed25519`}
        language="bash"
        title="ssh"
      />

      <AlertBox type="info" title="Firewall e SSH">
        Se o SSH não estiver acessível, verifique o firewall: <code>sudo firewall-cmd --add-service=ssh --permanent && sudo firewall-cmd --reload</code>
      </AlertBox>
    </PageContainer>
  );
}
