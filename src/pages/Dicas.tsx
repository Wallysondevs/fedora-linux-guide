import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Lightbulb, Zap, Terminal } from "lucide-react";

export default function Dicas() {
  return (
    <PageContainer
      title="Dicas e Truques"
      subtitle="Atalhos, hacks e dicas avançadas para aumentar sua produtividade no Fedora Linux."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <h2><Lightbulb className="inline-block mr-2 mb-1 w-5 h-5" /> Produtividade no Terminal</h2>

      <h3>Histórico e Navegação</h3>
      <CodeBlock
        code={`# Buscar no histórico (Ctrl+R)
# Pressione Ctrl+R e comece a digitar — navega pelo histórico

# Ver histórico completo
history
history | grep dnf      # filtrar por palavra

# Executar último comando que começa com uma palavra
!dnf                    # execute o último comando que começa com "dnf"
!!                      # repete o último comando
sudo !!                 # repete o último comando com sudo

# Reutilizar argumentos do comando anterior
ls /etc/nginx
cd !$                   # !$ = último argumento do comando anterior

# Substituição rápida em comandos
^velho^novo             # repete o último comando trocando 'velho' por 'novo'`}
        language="bash"
        title="histórico"
      />

      <h3>Processos em Background</h3>
      <CodeBlock
        code={`# Executar comando em background
comando &

# Ver jobs em background
jobs

# Trazer job para foreground
fg %1         # %1 = job número 1

# Enviar job para background
bg %1

# Executar e desacoplar do terminal (persiste após fechar sessão)
nohup comando &
nohup comando > saida.log 2>&1 &

# tmux — múltiplos terminais em uma janela
sudo dnf install tmux
tmux                    # iniciar
tmux new -s minha-sessao
tmux attach -t minha-sessao`}
        language="bash"
        title="processos"
      />

      <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Truques do DNF</h2>
      <CodeBlock
        code={`# Accelerar downloads com mais conexões paralelas
echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

# Ver qual pacote foi instalado como dependência de qual
dnf repoquery --installed --userinstalled    # instalados diretamente
dnf repoquery --installed --deplist firefox  # dependências do Firefox

# Simular instalação (dry-run)
sudo dnf install pacote --assumeno

# Instalar pacote sem dependências fracas
sudo dnf install pacote --setopt=install_weak_deps=False

# Excluir um pacote de atualizações
sudo dnf versionlock add nome-do-pacote    # requer: dnf install dnf-plugin-versionlock`}
        language="bash"
        title="dnf avançado"
      />

      <h2>Dicas de Segurança</h2>
      <CodeBlock
        code={`# Verificar portas abertas
ss -tulpn
sudo nmap -sT localhost

# Verificar processos suspeitos
ps auxf
sudo lsof -i             # conexões de rede por processo

# Verificar últimos logins
last
lastb                    # tentativas de login com falha
sudo journalctl -u sshd | grep Failed

# Verificar integridade do sistema
sudo rpm -Va 2>/dev/null | grep -v "^..........c"   # arquivos modificados (exceto config)

# Ver arquivos SUID/SGID
sudo find / -perm /6000 -type f 2>/dev/null | grep -v proc

# Auditoria básica do SELinux
sudo ausearch -m avc -ts today
sudo audit2why < /var/log/audit/audit.log`}
        language="bash"
        title="segurança"
      />

      <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Dicas do GNOME</h2>
      <CodeBlock
        code={`# Reiniciar o shell GNOME sem sair (Wayland — não funciona)
# No X11: Alt+F2, digite 'r' e Enter

# Ativar gestos do touchpad (GNOME 40+)
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
gsettings set org.gnome.desktop.peripherals.touchpad natural-scroll false

# Habilitar overamplification do volume (acima de 100%)
gsettings set org.gnome.desktop.sound allow-volume-above-100-percent true

# Mudar fonte de monospace para terminais
gsettings set org.gnome.desktop.interface monospace-font-name 'Fira Code 11'

# Mostrar data na barra de status
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-weekday true`}
        language="bash"
        title="gsettings úteis"
      />

      <AlertBox type="success" title="Instale o tldr para ajuda rápida">
        O <strong>tldr</strong> oferece exemplos práticos de comandos, muito mais útil que o man para consultas rápidas. <code>sudo dnf install tldr && tldr dnf</code>
      </AlertBox>

      <h2>Ferramentas Essenciais Para Instalar</h2>
      <CodeBlock
        code={`# Ferramentas que todo usuário Fedora deve ter
sudo dnf install -y \
  vim neovim \       # editores
  htop btop \        # monitoramento de processos
  bat \              # cat melhorado com syntax highlighting
  fd-find \          # find mais rápido e amigável
  ripgrep \          # grep mais rápido
  fzf \              # busca fuzzy interativa
  tldr \             # exemplos de comandos
  tmux \             # multiplexador de terminal
  git-delta \        # diff melhorado para git
  ncdu \             # uso de disco interativo
  duf \              # df melhorado
  jq \               # processador de JSON
  wget curl \        # download de arquivos
  net-tools \        # ifconfig, netstat (legados mas úteis)
  nmap \             # scan de rede
  rsync              # sincronização eficiente de arquivos`}
        language="bash"
        title="ferramentas recomendadas"
      />
    </PageContainer>
  );
}
