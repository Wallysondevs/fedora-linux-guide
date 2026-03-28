import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Flame, Shield, Lock } from "lucide-react";

export default function Firewall() {
  return (
    <PageContainer
      title="Firewall e SELinux"
      subtitle="Proteja seu Fedora com o firewalld e entenda o SELinux — a camada de segurança mandatória que define o Fedora como um sistema robusto."
      difficulty="avancado"
      timeToRead="35 min"
    >
      <h2><Flame className="inline-block mr-2 mb-1 w-5 h-5" /> firewalld — O Firewall do Fedora</h2>
      <p>
        O Fedora usa o <strong>firewalld</strong> — um gerenciador de firewall dinâmico que usa zonas para definir o nível de confiança de cada interface de rede. Ele gerencia regras do <code>iptables</code> (ou <code>nftables</code>) de forma mais amigável.
      </p>

      <h2>Operações Básicas do firewall-cmd</h2>
      <CodeBlock
        code={`# Ver status do firewall
sudo firewall-cmd --state
systemctl status firewalld

# Ver zona padrão e zonas ativas
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --get-active-zones

# Ver todas as regras da zona padrão
sudo firewall-cmd --list-all

# Ver todas as regras de todas as zonas
sudo firewall-cmd --list-all-zones`}
        language="bash"
        title="status"
      />

      <h2>Gerenciando Serviços e Portas</h2>
      <CodeBlock
        code={`# Listar serviços disponíveis
sudo firewall-cmd --get-services

# Listar serviços habilitados na zona padrão
sudo firewall-cmd --list-services

# Permitir um serviço (temporário — até reiniciar)
sudo firewall-cmd --add-service=http
sudo firewall-cmd --add-service=https
sudo firewall-cmd --add-service=ssh

# Permitir um serviço permanentemente
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload    # aplicar mudanças permanentes

# Bloquear um serviço
sudo firewall-cmd --remove-service=http --permanent

# Permitir uma porta específica
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --add-port=3000-3010/tcp --permanent

# Remover uma porta
sudo firewall-cmd --remove-port=8080/tcp --permanent

# Recarregar as regras permanentes
sudo firewall-cmd --reload`}
        language="bash"
        title="serviços e portas"
      />

      <h2>Zonas do Firewalld</h2>
      <table>
        <thead><tr><th>Zona</th><th>Nível de Confiança</th><th>Uso Típico</th></tr></thead>
        <tbody>
          <tr><td><code>drop</code></td><td>Mínimo</td><td>Todo tráfego de entrada é descartado</td></tr>
          <tr><td><code>block</code></td><td>Baixo</td><td>Conexões rejeitadas com mensagem</td></tr>
          <tr><td><code>public</code></td><td>Médio</td><td>Redes públicas (padrão)</td></tr>
          <tr><td><code>external</code></td><td>Médio</td><td>Redes externas com NAT</td></tr>
          <tr><td><code>internal</code></td><td>Alto</td><td>Redes internas confiáveis</td></tr>
          <tr><td><code>dmz</code></td><td>Alto</td><td>Zona desmilitarizada (servidores públicos)</td></tr>
          <tr><td><code>work</code></td><td>Alto</td><td>Redes de trabalho</td></tr>
          <tr><td><code>home</code></td><td>Muito alto</td><td>Rede doméstica</td></tr>
          <tr><td><code>trusted</code></td><td>Total</td><td>Todo tráfego permitido</td></tr>
        </tbody>
      </table>

      <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> SELinux — Security-Enhanced Linux</h2>
      <p>
        O <strong>SELinux</strong> é um sistema de controle de acesso mandatório (MAC — Mandatory Access Control) desenvolvido pela NSA e integrado ao kernel Linux. No Fedora, o SELinux está ativo por padrão em modo <strong>Enforcing</strong>, aplicando políticas de segurança rigorosas.
      </p>

      <AlertBox type="info" title="SELinux não é inimigo!">
        Muitas pessoas desabilitam o SELinux quando algo não funciona — isso é um erro grave. Aprenda a diagnosticar e corrigir os problemas sem desabilitá-lo, pois o SELinux é uma das melhores proteções contra exploração de vulnerabilidades.
      </AlertBox>

      <CodeBlock
        code={`# Ver status do SELinux
sestatus
getenforce           # retorna: Enforcing, Permissive ou Disabled

# Modos do SELinux:
# Enforcing  — bloqueia e registra violações (modo de produção)
# Permissive — registra mas NÃO bloqueia (útil para debug)
# Disabled   — completamente desabilitado (NÃO recomendado)

# Mudar para Permissive temporariamente (até reiniciar)
sudo setenforce 0

# Mudar para Enforcing temporariamente
sudo setenforce 1

# Para mudanças permanentes, edite /etc/selinux/config
sudo nano /etc/selinux/config
# SELINUX=enforcing  (ou permissive, ou disabled)`}
        language="bash"
        title="selinux status"
      />

      <h2>Diagnóstico e Correção de Problemas SELinux</h2>
      <CodeBlock
        code={`# Instalar ferramentas de diagnóstico
sudo dnf install setroubleshoot-server

# Ver alertas do SELinux
sudo sealert -a /var/log/audit/audit.log

# Ver negações recentes
sudo ausearch -m avc -ts recent
journalctl -t setroubleshoot

# Gerar um módulo de política para permitir uma ação negada
# (a ferramenta sugere o comando automaticamente nos alertas)
sudo ausearch -m avc -ts recent | audit2allow -M meu-modulo
sudo semodule -i meu-modulo.pp

# Verificar e restaurar contexto SELinux de um arquivo
ls -Z arquivo.txt
sudo restorecon -v arquivo.txt
sudo restorecon -Rv /pasta/   # recursivo`}
        language="bash"
        title="diagnóstico selinux"
      />

      <CodeBlock
        code={`# Exemplos comuns de ajuste de contexto SELinux

# Apache/Nginx servindo arquivos de diretório personalizado
sudo chcon -Rt httpd_sys_content_t /var/www/meusite/

# Permitir Apache/Nginx conectar à rede (ex: proxy reverso)
sudo setsebool -P httpd_can_network_connect 1

# Permitir SSH em porta não padrão (ex: 2222)
sudo semanage port -a -t ssh_port_t -p tcp 2222

# Listar todas as booleanas do SELinux relacionadas a httpd
sudo getsebool -a | grep httpd`}
        language="bash"
        title="ajustes comuns selinux"
      />
    </PageContainer>
  );
}
