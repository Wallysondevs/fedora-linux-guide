import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Monitor, Keyboard, Settings, Puzzle, TerminalSquare, AlertTriangle, RefreshCw } from "lucide-react";

export default function GNOME() {
  return (
    <PageContainer
      title="Interface GNOME"
      subtitle="Domine o GNOME — o ambiente desktop padrão do Fedora — com atalhos, extensões e dicas de produtividade."
      difficulty="iniciante"
      timeToRead="40 min"
    >
      <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> O GNOME no Fedora</h2>
      <p>
        O Fedora Workstation usa o <strong>GNOME</strong> como ambiente desktop padrão. O Fedora sempre utiliza a versão mais recente do GNOME — frequentemente sendo a primeira distribuição a lançar uma nova versão. O GNOME segue um design minimalista, focado em produtividade e facilidade de uso.
      </p>

      <h2><Keyboard className="inline-block mr-2 mb-1 w-5 h-5" /> Atalhos de Teclado Essenciais</h2>
      <table>
        <thead><tr><th>Atalho</th><th>Ação</th></tr></thead>
        <tbody>
          <tr><td><code>Super</code></td><td>Abre a visão de Atividades (overview)</td></tr>
          <tr><td><code>Super + A</code></td><td>Abre a grade de aplicativos</td></tr>
          <tr><td><code>Super + D</code></td><td>Mostrar/ocultar área de trabalho</td></tr>
          <tr><td><code>Super + L</code></td><td>Bloquear a tela</td></tr>
          <tr><td><code>Super + ←/→</code></td><td>Encaixar janela (metade da tela)</td></tr>
          <tr><td><code>Super + ↑</code></td><td>Maximizar janela</td></tr>
          <tr><td><code>Super + ↓</code></td><td>Restaurar/minimizar janela</td></tr>
          <tr><td><code>Super + Tab</code></td><td>Alternar entre aplicativos</td></tr>
          <tr><td><code>Super + `</code></td><td>Alternar janelas do mesmo app</td></tr>
          <tr><td><code>Ctrl + Alt + T</code></td><td>Abrir terminal</td></tr>
          <tr><td><code>Alt + F4</code></td><td>Fechar janela</td></tr>
          <tr><td><code>Print Screen</code></td><td>Capturar tela</td></tr>
          <tr><td><code>Ctrl + Alt + →/←</code></td><td>Mudar workspace</td></tr>
        </tbody>
      </table>

      <h2><Puzzle className="inline-block mr-2 mb-1 w-5 h-5" /> Extensões GNOME</h2>
      <p>Extensões adicionam funcionalidades ao GNOME. Instale-as através do site <strong>extensions.gnome.org</strong> ou via terminal.</p>

      <CodeBlock
        code={`# Instalar o gerenciador de extensões
sudo dnf install gnome-extensions-app

# Habilitar suporte a extensões do navegador
flatpak install flathub org.gnome.Extensions

# Instalar extensões populares via dnf
sudo dnf install gnome-shell-extension-dash-to-dock
sudo dnf install gnome-shell-extension-pop-shell
sudo dnf install gnome-shell-extension-appindicator

# Ver extensões instaladas
gnome-extensions list

# Habilitar uma extensão
gnome-extensions enable nome@extensao

# Desabilitar uma extensão
gnome-extensions disable nome@extensao`}
        language="bash"
        title="extensões gnome"
      />

      <h3>Extensões Recomendadas</h3>
      <table>
        <thead><tr><th>Extensão</th><th>Função</th></tr></thead>
        <tbody>
          <tr><td>Dash to Dock</td><td>Dock sempre visível (estilo macOS/Ubuntu)</td></tr>
          <tr><td>Pop Shell</td><td>Gerenciamento de janelas em tiling (System76)</td></tr>
          <tr><td>Blur my Shell</td><td>Efeito blur na barra e no painel</td></tr>
          <tr><td>AppIndicator</td><td>Ícones de bandeja do sistema</td></tr>
          <tr><td>GSConnect</td><td>Integração com Android (tipo KDE Connect)</td></tr>
          <tr><td>Vitals</td><td>Monitor de CPU, RAM e temperatura na barra</td></tr>
          <tr><td>Night Light Slider</td><td>Controle rápido do Night Light</td></tr>
        </tbody>
      </table>

      <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Personalização via GNOME Tweaks</h2>
      <CodeBlock
        code={`# Instalar o GNOME Tweaks
sudo dnf install gnome-tweaks

# Instalar temas adicionais
sudo dnf install gnome-themes-extra

# Instalar ícones (exemplos)
sudo dnf install papirus-icon-theme
sudo dnf install adwaita-icon-theme`}
        language="bash"
        title="personalização"
      />

      <h2>Configurações via gsettings (linha de comando)</h2>
      <CodeBlock
        code={`# Ver configuração atual da interface
gsettings get org.gnome.desktop.interface gtk-theme

# Mudar tema
gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita-dark'

# Mudar tema de ícones
gsettings set org.gnome.desktop.interface icon-theme 'Papirus-Dark'

# Mudar fonte do sistema
gsettings set org.gnome.desktop.interface font-name 'Cantarell 11'

# Habilitar Night Light
gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true

# Desabilitar animações (para hardware mais fraco)
gsettings set org.gnome.desktop.interface enable-animations false`}
        language="bash"
        title="gsettings"
      />

      <AlertBox type="info" title="Wayland por padrão">
        O Fedora usa <strong>Wayland</strong> por padrão desde o Fedora 25. Wayland é mais moderno e seguro que o X11. A maioria dos apps modernos funciona perfeitamente. Para apps que precisam de X11, o XWayland provê compatibilidade automaticamente.
      </AlertBox>

      <h2><TerminalSquare className="inline-block mr-2 mb-1 w-5 h-5" /> TTY — O Terminal de Tela Cheia</h2>
      <p>
        O <strong>TTY</strong> (TeleTYpewriter) é um terminal de texto puro que existe por baixo de qualquer interface gráfica. No Linux, existem 6 TTYs virtuais — são como "telas paralelas" que funcionam independentemente do GNOME. Se o GNOME travar completamente, você ainda pode acessar o sistema por um TTY.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          { key: "Ctrl + Alt + F1", desc: "TTY 1 — normalmente onde o GDM (login gráfico) fica" },
          { key: "Ctrl + Alt + F2", desc: "TTY 2 — terminal de texto puro (login por texto)" },
          { key: "Ctrl + Alt + F3", desc: "TTY 3 — outro terminal de texto disponível" },
          { key: "Ctrl + Alt + F4", desc: "TTY 4 — outro terminal de texto disponível" },
          { key: "Ctrl + Alt + F5", desc: "TTY 5 — outro terminal de texto disponível" },
          { key: "Ctrl + Alt + F6", desc: "TTY 6 — outro terminal de texto disponível" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
            <kbd className="px-2 py-1 text-xs font-mono bg-muted border border-border rounded shrink-0 mt-0.5 whitespace-nowrap">
              {item.key}
            </kbd>
            <span className="text-sm text-muted-foreground">{item.desc}</span>
          </div>
        ))}
      </div>

      <AlertBox type="info" title="Onde fica o GNOME no Wayland?">
        No Wayland (padrão do Fedora), o GNOME fica geralmente no <strong>TTY 2</strong> (ou no TTY onde você fez login). Para voltar ao GNOME a partir de um TTY de texto, use <code>Ctrl + Alt + F2</code> — ou tente de F1 a F7 até aparecer a interface gráfica.
      </AlertBox>

      <h3>Como Acessar o TTY</h3>
      <ol>
        <li>Pressione <code>Ctrl + Alt + F3</code> (ou F2, F4... — qualquer TTY disponível)</li>
        <li>A tela ficará preta com um prompt de texto: <code>fedora login:</code></li>
        <li>Digite seu <strong>nome de usuário</strong> e pressione Enter</li>
        <li>Digite sua <strong>senha</strong> (não aparece nada enquanto digita — é normal) e pressione Enter</li>
        <li>Você estará logado em um terminal de texto completo</li>
        <li>Para <strong>voltar ao GNOME</strong>: pressione <code>Ctrl + Alt + F2</code> (ou F1, F7 — depende do sistema)</li>
      </ol>

      <h2><AlertTriangle className="inline-block mr-2 mb-1 w-5 h-5" /> O GNOME Travou — O que Fazer?</h2>
      <p>
        O GNOME pode travar por extensões com bugs, falta de memória, drivers ou processos com problema. Aqui estão as soluções em ordem — da mais segura para a mais drástica:
      </p>

      <h3>Nível 1 — Reiniciar só o Shell GNOME (mais seguro)</h3>
      <p>Funciona apenas no <strong>X11</strong> (não no Wayland). Tenta reiniciar a interface sem perder o que estava aberto:</p>
      <CodeBlock
        code={`# Pressione Alt + F2 dentro do GNOME
# Uma caixa de diálogo abre — digite apenas a letra:
r
# Pressione Enter — o GNOME Shell reinicia em segundos`}
        language="bash"
        title="reiniciar gnome shell (X11 apenas)"
      />

      <h3>Nível 2 — Matar e reiniciar o GNOME pelo TTY</h3>
      <p>Acesse o TTY com <code>Ctrl + Alt + F3</code>, faça login e execute:</p>
      <CodeBlock
        code={`# Opção A — reiniciar apenas o gnome-shell (tenta preservar sua sessão)
killall -HUP gnome-shell

# Opção B — reiniciar o GDM (gerenciador de login gráfico)
# ATENÇÃO: isso fecha todas as janelas e aplicativos abertos
sudo systemctl restart gdm

# Opção C — matar o processo gnome-shell diretamente
pkill -f gnome-shell

# Após qualquer um desses, volte ao GNOME com:
# Ctrl + Alt + F2  (ou F1, F7)`}
        language="bash"
        title="reiniciar gnome pelo tty"
      />

      <h3>Nível 3 — Verificar o que causou o travamento</h3>
      <CodeBlock
        code={`# Ver logs recentes do GNOME e do GDM
journalctl -b -u gdm --no-pager | tail -50

# Ver erros do gnome-shell
journalctl -b | grep -i "gnome-shell" | grep -i "error\|crash\|fail" | tail -30

# Ver uso de memória — talvez o sistema tenha ficado sem RAM
free -h
top -n 1 | head -20

# Ver se alguma extensão causou o problema
journalctl -b | grep "extension" | tail -20

# Desabilitar todas as extensões pelo TTY para testar
gsettings set org.gnome.shell disable-user-extensions true
# Depois volte ao GNOME e veja se funciona
# Para reabilitar:
gsettings set org.gnome.shell disable-user-extensions false`}
        language="bash"
        title="diagnóstico"
      />

      <h3>Nível 4 — Reinicialização segura pelo terminal</h3>
      <CodeBlock
        code={`# Reiniciar o sistema de forma limpa pelo TTY
sudo systemctl reboot

# Ou desligar completamente
sudo systemctl poweroff

# Reiniciar imediatamente (sem esperar serviços)
sudo reboot -f`}
        language="bash"
        title="reiniciar pelo tty"
      />

      <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> SysRq — Reinício de Emergência (último recurso)</h2>
      <p>
        Se o sistema estiver completamente travado — sem responder ao teclado, sem acessar o TTY — use a combinação de teclas <strong>SysRq</strong> (Magic System Request). É uma funcionalidade do kernel Linux para situações extremas.
      </p>

      <AlertBox type="warning" title="Use o SysRq apenas em casos extremos">
        Essa combinação força o kernel a executar comandos diretos, ignorando o sistema de arquivos e processos. Sempre tente antes os métodos de nível 1 a 4.
      </AlertBox>

      <CodeBlock
        code={`# A combinação mágica para reiniciar com segurança (REISUB):
# Segure: Alt + Print Screen (SysRq)
# E pressione em sequência (aguarde 1-2 segundos entre cada letra):

R  → Retoma controle do teclado do X11/Wayland
E  → Envia SIGTERM para todos os processos (pedido de encerramento)
I  → Envia SIGKILL para todos os processos (força encerramento)
S  → Sincroniza os discos (grava tudo pendente)
U  → Remonta sistemas de arquivos como somente leitura (seguro)
B  → Reinicia o sistema (Boot)

# Memorize como: "Raising Elephants Is So Utterly Boring"
#                  R        E        I  S  U      B

# Apenas desligar (sem reiniciar): use REISUO (O = pOwer off)

# Verificar se o SysRq está habilitado:
cat /proc/sys/kernel/sysrq
# 1 = habilitado, 0 = desabilitado

# Habilitar manualmente se necessário:
sudo sysctl -w kernel.sysrq=1`}
        language="bash"
        title="sysrq — reinício de emergência"
      />

      <AlertBox type="success" title="Resumo rápido: GNOME travou, o que fazer?">
        <ol className="list-decimal pl-4 mt-2 space-y-1">
          <li><strong>X11:</strong> tente <code>Alt + F2</code> → digitar <code>r</code> → Enter</li>
          <li>Acesse o TTY com <code>Ctrl + Alt + F3</code> → faça login → <code>sudo systemctl restart gdm</code></li>
          <li>Se não conseguir o TTY: <code>Ctrl + Alt + Del</code> (pode reiniciar em alguns sistemas)</li>
          <li>Último recurso: <code>Alt + SysRq</code> → R → E → I → S → U → B (aguarde entre cada)</li>
          <li>Se nada funcionar: botão de power físico (segurar 5-10 segundos)</li>
        </ol>
      </AlertBox>
    </PageContainer>
  );
}
