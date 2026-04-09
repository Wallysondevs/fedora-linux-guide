import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Puzzle, Settings, Download, Monitor, Palette, Zap } from "lucide-react";

  export default function GNOMEExtensions() {
    return (
      <PageContainer
        title="Extensões do GNOME"
        subtitle="Personalize o GNOME no Fedora com extensões: instalação, gerenciamento, extensões populares e criação de extensões."
        difficulty="iniciante"
        timeToRead="20 min"
      >
        <h2><Puzzle className="inline-block mr-2 mb-1 w-5 h-5" /> Extensões do GNOME</h2>
        <p>
          O GNOME é altamente extensível através de <strong>extensões</strong>. Elas podem adicionar
          funcionalidades como dock, bandeja do sistema, controle de clima, gerenciamento de janelas
          e muito mais. O Fedora é a distro ideal para extensões GNOME, com a versão mais recente.
        </p>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Instalação</h2>
        <CodeBlock
          code={`# Instalar gerenciador de extensões
  sudo dnf install gnome-extensions-app

  # Instalar suporte a extensões pelo navegador (opcional)
  sudo dnf install gnome-browser-connector

  # Ou instalar extensões via CLI:
  sudo dnf install gnome-shell-extension-appindicator  # bandeja do sistema
  sudo dnf install gnome-shell-extension-dash-to-dock  # dock tipo macOS

  # Gerenciar extensões pela linha de comando
  gnome-extensions list                      # listar instaladas
  gnome-extensions enable nome@autor        # habilitar
  gnome-extensions disable nome@autor       # desabilitar
  gnome-extensions info nome@autor          # informações`}
          language="bash"
          title="instalação"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Extensões Populares</h2>
        <table>
          <thead><tr><th>Extensão</th><th>Função</th><th>Instalação</th></tr></thead>
          <tbody>
            <tr><td><strong>Dash to Dock</strong></td><td>Dock fixo (estilo macOS)</td><td>DNF ou extensions.gnome.org</td></tr>
            <tr><td><strong>AppIndicator</strong></td><td>Bandeja do sistema (ícones)</td><td><code>dnf install gnome-shell-extension-appindicator</code></td></tr>
            <tr><td><strong>GSConnect</strong></td><td>Integração com celular Android</td><td>extensions.gnome.org</td></tr>
            <tr><td><strong>Blur my Shell</strong></td><td>Efeito blur no fundo</td><td>extensions.gnome.org</td></tr>
            <tr><td><strong>Just Perfection</strong></td><td>Personalizar cada detalhe do GNOME</td><td>extensions.gnome.org</td></tr>
            <tr><td><strong>Clipboard Indicator</strong></td><td>Histórico da área de transferência</td><td>extensions.gnome.org</td></tr>
            <tr><td><strong>Caffeine</strong></td><td>Impedir suspensão automática</td><td>extensions.gnome.org</td></tr>
            <tr><td><strong>Night Theme Switcher</strong></td><td>Alternar tema claro/escuro</td><td>extensions.gnome.org</td></tr>
          </tbody>
        </table>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> GNOME Tweaks</h2>
        <CodeBlock
          code={`# Instalar GNOME Tweaks (personalização extra)
  sudo dnf install gnome-tweaks

  # Tweaks permite configurar:
  # - Fontes e tamanho
  # - Temas GTK e ícones
  # - Barra de título (botões)
  # - Comportamento do touchpad
  # - Extensões
  # - Aplicativos de inicialização

  # Temas populares (Flatpak):
  flatpak install flathub org.gtk.Gtk3theme.adw-gtk3
  flatpak install flathub org.gtk.Gtk3theme.adw-gtk3-dark

  # Ícones populares
  sudo dnf install papirus-icon-theme`}
          language="bash"
          title="GNOME Tweaks"
        />

        <AlertBox type="warning" title="Extensões e atualizações do GNOME">
          Quando o GNOME atualiza para uma nova versão (ex: 45 → 46), algumas extensões podem
          parar de funcionar temporariamente. Desabilite extensões problemáticas ou aguarde atualização
          dos autores. Use <code>gnome-extensions disable EXTENSÃO</code> se causar problemas.
        </AlertBox>
      </PageContainer>
    );
  }
  