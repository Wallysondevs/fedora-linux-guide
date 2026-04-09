import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Package, Shield, Search, RefreshCw, Trash, Settings, Download } from "lucide-react";

  export default function Flatpak() {
    return (
      <PageContainer
        title="Flatpak — Aplicativos Universais"
        subtitle="Aprenda a instalar, gerenciar e configurar aplicativos Flatpak no Fedora, incluindo permissões com Flatseal e comparação com outros formatos."
        difficulty="iniciante"
        timeToRead="30 min"
      >
        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Flatpak?</h2>
        <p>
          <strong>Flatpak</strong> é um sistema de distribuição de aplicativos para Linux que funciona em qualquer distribuição. Diferente de pacotes RPM ou DEB, os Flatpaks são <strong>sandboxed</strong> (executam em um ambiente isolado) e trazem suas próprias dependências, eliminando conflitos de versão.
        </p>
        <p>
          O Fedora foi uma das primeiras distribuições a adotar o Flatpak como formato padrão. Muitos aplicativos no GNOME Software já são Flatpaks. O principal repositório de Flatpaks é o <strong>Flathub</strong>, com milhares de aplicativos disponíveis.
        </p>

        <h3>Vantagens do Flatpak</h3>
        <ul>
          <li><strong>Isolamento (sandbox)</strong> — Cada app roda em seu próprio ambiente, sem interferir no sistema</li>
          <li><strong>Independência</strong> — Funciona em qualquer distro Linux</li>
          <li><strong>Múltiplas versões</strong> — Você pode ter versões diferentes do mesmo app</li>
          <li><strong>Atualizações independentes</strong> — Não depende da distribuição para atualizar</li>
          <li><strong>Segurança</strong> — Permissões granulares (acesso a arquivos, rede, câmera, etc.)</li>
        </ul>

        <h3>Desvantagens</h3>
        <ul>
          <li><strong>Tamanho</strong> — Flatpaks podem ser maiores pois incluem dependências</li>
          <li><strong>Uso de disco</strong> — Runtimes compartilhados ocupam espaço</li>
          <li><strong>Integração</strong> — Alguns apps podem ter integração imperfeita com o tema do sistema</li>
          <li><strong>Performance</strong> — Pode ser levemente mais lento em primeira execução</li>
        </ul>

        <h2><Download className="inline-block mr-2 mb-1 w-5 h-5" /> Configuração Inicial</h2>
        <CodeBlock
          code={`# O Flatpak já vem instalado no Fedora
  # Verifique a versão:
  flatpak --version

  # Adicionar o Flathub (repositório principal com milhares de apps)
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # O Fedora também tem seu próprio repositório:
  flatpak remotes
  # Name    Options
  # fedora  system,oci
  # flathub system

  # Atualizar metadados
  flatpak update --appstream`}
          language="bash"
          title="configuração"
        />

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Buscar e Instalar</h2>
        <CodeBlock
          code={`# Buscar aplicativos
  flatpak search firefox
  flatpak search "media player"

  # Instalar do Flathub
  flatpak install flathub org.mozilla.firefox
  flatpak install flathub com.spotify.Client
  flatpak install flathub com.discordapp.Discord

  # Instalar sem confirmação
  flatpak install -y flathub com.google.Chrome

  # Instalar uma versão específica de um branch
  flatpak install flathub org.gimp.GIMP//stable

  # Executar um aplicativo Flatpak
  flatpak run org.mozilla.firefox

  # Listar aplicativos instalados
  flatpak list
  flatpak list --app          # apenas apps (sem runtimes)
  flatpak list --runtime      # apenas runtimes

  # Informações detalhadas de um app
  flatpak info org.mozilla.firefox`}
          language="bash"
          title="buscar e instalar"
        />

        <h2>Aplicativos Populares no Flathub</h2>
        <table>
          <thead><tr><th>App</th><th>ID</th><th>Categoria</th></tr></thead>
          <tbody>
            <tr><td>Firefox</td><td><code>org.mozilla.firefox</code></td><td>Navegador</td></tr>
            <tr><td>Chrome</td><td><code>com.google.Chrome</code></td><td>Navegador</td></tr>
            <tr><td>VS Code</td><td><code>com.visualstudio.code</code></td><td>Editor</td></tr>
            <tr><td>Spotify</td><td><code>com.spotify.Client</code></td><td>Música</td></tr>
            <tr><td>Discord</td><td><code>com.discordapp.Discord</code></td><td>Comunicação</td></tr>
            <tr><td>Telegram</td><td><code>org.telegram.desktop</code></td><td>Comunicação</td></tr>
            <tr><td>OBS Studio</td><td><code>com.obsproject.Studio</code></td><td>Streaming</td></tr>
            <tr><td>GIMP</td><td><code>org.gimp.GIMP</code></td><td>Imagem</td></tr>
            <tr><td>VLC</td><td><code>org.videolan.VLC</code></td><td>Vídeo</td></tr>
            <tr><td>Steam</td><td><code>com.valvesoftware.Steam</code></td><td>Jogos</td></tr>
            <tr><td>Bottles</td><td><code>com.usebottles.bottles</code></td><td>Windows apps</td></tr>
            <tr><td>Flatseal</td><td><code>com.github.tchx84.Flatseal</code></td><td>Permissões</td></tr>
          </tbody>
        </table>

        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Atualizar e Remover</h2>
        <CodeBlock
          code={`# Atualizar todos os Flatpaks
  flatpak update

  # Atualizar um app específico
  flatpak update org.mozilla.firefox

  # Remover um aplicativo
  flatpak uninstall org.mozilla.firefox

  # Remover com dados do usuário
  flatpak uninstall --delete-data org.mozilla.firefox

  # Remover runtimes e extensões não utilizados
  flatpak uninstall --unused

  # Limpar cache de instalação
  sudo rm -rf /var/tmp/flatpak-cache-*`}
          language="bash"
          title="atualizar e remover"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Permissões com Flatseal</h2>
        <p>
          O <strong>Flatseal</strong> é uma ferramenta gráfica essencial para gerenciar permissões de Flatpaks. Cada aplicativo tem permissões que controlam o que ele pode acessar no sistema.
        </p>
        <CodeBlock
          code={`# Instalar Flatseal
  flatpak install flathub com.github.tchx84.Flatseal

  # Ver permissões de um app pela linha de comando
  flatpak info --show-permissions org.mozilla.firefox

  # Sobrescrever permissões manualmente
  # Dar acesso a uma pasta:
  flatpak override --user --filesystem=/mnt/dados org.mozilla.firefox

  # Remover acesso à rede:
  flatpak override --user --no-talk-name=org.freedesktop.NetworkManager com.example.App

  # Resetar permissões para o padrão
  flatpak override --user --reset org.mozilla.firefox

  # Listar todas as sobrescritas
  flatpak override --user --show org.mozilla.firefox`}
          language="bash"
          title="permissões"
        />

        <h3>Permissões Comuns</h3>
        <table>
          <thead><tr><th>Permissão</th><th>O que controla</th><th>Quando permitir</th></tr></thead>
          <tbody>
            <tr><td><strong>filesystem=host</strong></td><td>Acesso a todos os arquivos</td><td>Editores de texto, terminais</td></tr>
            <tr><td><strong>filesystem=home</strong></td><td>Acesso ao diretório home</td><td>A maioria dos apps</td></tr>
            <tr><td><strong>device=all</strong></td><td>Acesso a dispositivos (USB, GPU)</td><td>Jogos, ferramentas de mídia</td></tr>
            <tr><td><strong>share=network</strong></td><td>Acesso à rede/internet</td><td>Navegadores, streaming</td></tr>
            <tr><td><strong>socket=pulseaudio</strong></td><td>Acesso ao áudio</td><td>Players, comunicação</td></tr>
            <tr><td><strong>socket=wayland</strong></td><td>Interface gráfica Wayland</td><td>Todos os apps gráficos</td></tr>
            <tr><td><strong>socket=x11</strong></td><td>Interface gráfica X11</td><td>Apps que não suportam Wayland</td></tr>
          </tbody>
        </table>

        <AlertBox type="warning" title="Segurança de permissões">
          Revise regularmente as permissões dos seus Flatpaks com o Flatseal. Um app que não precisa de rede não deveria ter <code>share=network</code>. Menos permissões = mais segurança.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Comandos Avançados</h2>
        <CodeBlock
          code={`# Ver localização dos dados de cada app
  # Apps: ~/.var/app/
  ls ~/.var/app/

  # Ver o tamanho de cada Flatpak instalado
  flatpak list --app --columns=name,size

  # Entrar no sandbox de um app (para debug)
  flatpak run --command=bash org.mozilla.firefox

  # Verificar se há problemas
  flatpak repair

  # Fazer downgrade de um app
  flatpak update --commit=HASH org.mozilla.firefox
  # Para ver os commits disponíveis:
  flatpak remote-info --log flathub org.mozilla.firefox

  # Histórico de atualizações
  flatpak history`}
          language="bash"
          title="comandos avançados"
        />

        <h2>Flatpak vs DNF vs Snap</h2>
        <table>
          <thead><tr><th>Característica</th><th>Flatpak</th><th>DNF (RPM)</th><th>Snap</th></tr></thead>
          <tbody>
            <tr><td><strong>Isolamento</strong></td><td>Sandbox com permissões</td><td>Sem isolamento</td><td>Sandbox (AppArmor)</td></tr>
            <tr><td><strong>Tamanho</strong></td><td>Maior (inclui deps)</td><td>Menor</td><td>Maior</td></tr>
            <tr><td><strong>Velocidade de início</strong></td><td>Normal</td><td>Mais rápido</td><td>Mais lento (primeira vez)</td></tr>
            <tr><td><strong>Atualização</strong></td><td>Independente</td><td>Via DNF update</td><td>Automática</td></tr>
            <tr><td><strong>Loja</strong></td><td>Flathub</td><td>Repositórios Fedora</td><td>Snap Store</td></tr>
            <tr><td><strong>Disponibilidade</strong></td><td>Muitos apps desktop</td><td>Tudo no Fedora</td><td>Muitos, foco Ubuntu</td></tr>
            <tr><td><strong>Código aberto</strong></td><td>100% aberto</td><td>100% aberto</td><td>Store proprietária</td></tr>
            <tr><td><strong>Uso no Fedora</strong></td><td>Padrão e recomendado</td><td>Padrão</td><td>Não incluído</td></tr>
          </tbody>
        </table>

        <h2><Trash className="inline-block mr-2 mb-1 w-5 h-5" /> Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>App não aparece no menu</td><td>Execute <code>flatpak update --appstream</code> e faça logout/login</td></tr>
            <tr><td>Tema do sistema não aplica</td><td>Instale <code>org.gtk.Gtk3theme.Adwaita-dark</code> ou use Flatseal para dar acesso ao tema</td></tr>
            <tr><td>App não acessa arquivos</td><td>Use Flatseal para dar permissão <code>filesystem=home</code></td></tr>
            <tr><td>Erro de portal/XDG</td><td><code>sudo dnf install xdg-desktop-portal-gnome</code></td></tr>
            <tr><td>App usa muito espaço</td><td><code>flatpak uninstall --unused</code> para remover runtimes desnecessários</td></tr>
            <tr><td>Ícones não aparecem</td><td>Instale o tema de ícones via Flatpak: <code>flatpak install flathub org.freedesktop.Platform.Icontheme.Adwaita</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Dica">
          Para a melhor experiência, instale apps desktop populares via Flatpak (Chrome, Spotify, Discord) e ferramentas de sistema via DNF (vim, git, htop). Isso combina o isolamento do Flatpak com a integração nativa do DNF.
        </AlertBox>
      </PageContainer>
    );
  }
  