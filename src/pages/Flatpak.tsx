import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Layers, Search, Trash, Shield, Settings, RefreshCw } from "lucide-react";

  export default function Flatpak() {
    return (
      <PageContainer
        title="Flatpak e Flathub"
        subtitle="Instale aplicativos modernos e isolados com Flatpak — o sistema de distribuição de apps universal do Linux."
        difficulty="iniciante"
        timeToRead="25 min"
      >
        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Flatpak?</h2>
        <p>
          O <strong>Flatpak</strong> é um sistema de distribuição de aplicativos para Linux que empacota o app com todas as suas dependências em um sandbox isolado. Isso garante que o mesmo pacote funcione em qualquer distribuição Linux — Fedora, Ubuntu, Arch, etc.
        </p>
        <p>
          O <strong>Flathub</strong> (flathub.org) é o principal repositório de Flatpaks, com mais de 2000 aplicativos — incluindo Spotify, Discord, Steam, VSCode, Chrome, Telegram e muito mais.
        </p>

        <h3>Como o Flatpak funciona?</h3>
        <p>O Flatpak usa três conceitos principais:</p>
        <ul>
          <li><strong>Runtimes</strong> — bibliotecas base compartilhadas (GNOME, KDE, FreeDesktop). Múltiplos apps compartilham o mesmo runtime, economizando espaço.</li>
          <li><strong>Sandboxing</strong> — cada app roda isolado do sistema, com acesso controlado a arquivos, rede, dispositivos e recursos do sistema.</li>
          <li><strong>Portais (Portals)</strong> — APIs seguras que permitem ao app acessar recursos do sistema com permissão do usuário (abrir arquivo, notificações, etc.).</li>
        </ul>

        <AlertBox type="success" title="Flatpak já vem instalado no Fedora">
          O Fedora Workstation inclui o Flatpak por padrão. Você só precisa habilitar o repositório Flathub para ter acesso a todos os aplicativos.
        </AlertBox>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Habilitando o Flathub</h2>
        <CodeBlock
          code={`# Adicionar o repositório Flathub
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

  # Verificar repositórios configurados
  flatpak remotes
  # Saída esperada:
  # Name    Options
  # fedora  system,oci
  # flathub system

  # Ver detalhes de um repositório
  flatpak remote-info --log flathub org.mozilla.firefox`}
          language="bash"
          title="configurar flathub"
        />

        <AlertBox type="info" title="Fedora Flatpak vs Flathub">
          O Fedora tem seu próprio repositório Flatpak (<code>fedora</code>) com versões filtradas. O <strong>Flathub</strong> tem mais apps e versões mais recentes. Muitos usuários preferem usar apenas o Flathub.
        </AlertBox>

        <h2>Instalando Aplicativos</h2>
        <CodeBlock
          code={`# Instalar um aplicativo do Flathub
  flatpak install flathub com.spotify.Client
  flatpak install flathub com.discordapp.Discord
  flatpak install flathub org.videolan.VLC

  # Instalar sem confirmação
  flatpak install -y flathub com.spotify.Client

  # Instalar a partir de um link .flatpakref
  flatpak install https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref

  # Instalar uma versão específica (branch)
  flatpak install flathub org.mozilla.firefox//stable

  # Instalar múltiplos de uma vez
  flatpak install -y flathub com.spotify.Client com.discordapp.Discord org.telegram.desktop`}
          language="bash"
          title="instalação"
        />

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Buscando Aplicativos</h2>
        <CodeBlock
          code={`# Buscar aplicativos no Flathub
  flatpak search spotify
  # Saída:
  # Name       Description                        Application ID          Version
  # Spotify    Music streaming                    com.spotify.Client      1.2.x

  flatpak search "media player"

  # Listar todos os aplicativos instalados
  flatpak list
  # Mostra nome, ID, versão, branch e origem

  # Apenas aplicativos (sem runtimes)
  flatpak list --app

  # Apenas runtimes instalados
  flatpak list --runtime

  # Informações detalhadas de um app
  flatpak info com.spotify.Client
  # Mostra ID, versão, branch, runtime usado, permissões, etc.

  # Ver tamanho em disco de cada app
  flatpak list --columns=name,size`}
          language="bash"
          title="busca e listagem"
        />

        <h2>Executando e Gerenciando</h2>
        <CodeBlock
          code={`# Executar um aplicativo Flatpak via terminal
  flatpak run com.spotify.Client

  # Executar com variáveis de ambiente
  flatpak run --env=GTK_THEME=Adwaita:dark com.spotify.Client

  # Atualizar todos os Flatpaks
  flatpak update

  # Atualizar um app específico
  flatpak update com.spotify.Client

  # Ver histórico de atualizações
  flatpak history`}
          language="bash"
          title="execução e atualização"
        />

        <h2><Trash className="inline-block mr-2 mb-1 w-5 h-5" /> Removendo Aplicativos</h2>
        <CodeBlock
          code={`# Remover um Flatpak
  flatpak uninstall com.spotify.Client

  # Remover e apagar dados/configurações do app
  flatpak uninstall --delete-data com.spotify.Client

  # Limpar runtimes não utilizados (libera bastante espaço)
  flatpak uninstall --unused
  # Saída: lista de runtimes órfãos que serão removidos

  # Remover TODOS os Flatpaks (cuidado!)
  flatpak uninstall --all

  # Ver quanto espaço os Flatpaks estão usando
  du -sh ~/.local/share/flatpak
  du -sh /var/lib/flatpak`}
          language="bash"
          title="remoção e limpeza"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Permissões e Segurança</h2>
        <p>Uma das maiores vantagens do Flatpak é o <strong>sandboxing</strong>. Cada app roda isolado com acesso controlado. Você pode gerenciar permissões de duas formas:</p>

        <h3>Flatseal (interface gráfica)</h3>
        <CodeBlock
          code={`# Instalar o Flatseal — gerenciador de permissões gráfico
  flatpak install flathub com.github.tchx84.Flatseal

  # Abrir o Flatseal
  flatpak run com.github.tchx84.Flatseal
  # Na interface, selecione o app e ajuste as permissões visualmente`}
          language="bash"
          title="flatseal"
        />

        <h3>Linha de comando</h3>
        <CodeBlock
          code={`# Ver permissões de um app
  flatpak info --show-permissions com.spotify.Client

  # Saída mostra seções como:
  # [Context]
  # shared=network;ipc;
  # sockets=pulseaudio;x11;
  # filesystems=xdg-music:ro;~/.local/share/spotify:create;

  # Revogar acesso ao diretório home
  flatpak override --user --nofilesystem=home com.spotify.Client

  # Conceder acesso a um diretório específico
  flatpak override --user --filesystem=/mnt/dados:ro com.spotify.Client

  # Revogar acesso à rede
  flatpak override --user --unshare=network com.spotify.Client

  # Restaurar permissões padrão
  flatpak override --user --reset com.spotify.Client

  # Ver overrides aplicados
  flatpak override --user --show com.spotify.Client`}
          language="bash"
          title="gerenciamento de permissões"
        />

        <h3>Permissões comuns explicadas</h3>
        <table>
          <thead><tr><th>Permissão</th><th>Significado</th><th>Risco</th></tr></thead>
          <tbody>
            <tr><td><code>filesystem=home</code></td><td>Acesso total ao diretório home</td><td>Alto — pode ler/escrever todos os seus arquivos</td></tr>
            <tr><td><code>filesystem=host</code></td><td>Acesso a todo o filesystem</td><td>Muito alto — equivale a não ter sandbox</td></tr>
            <tr><td><code>shared=network</code></td><td>Acesso à rede</td><td>Normal para a maioria dos apps</td></tr>
            <tr><td><code>sockets=x11</code></td><td>Acesso ao servidor gráfico X11</td><td>Médio — X11 permite keylogging entre apps</td></tr>
            <tr><td><code>sockets=wayland</code></td><td>Acesso ao Wayland</td><td>Baixo — Wayland é isolado por design</td></tr>
            <tr><td><code>devices=all</code></td><td>Acesso a todos os dispositivos</td><td>Alto — câmera, microfone, USB, etc.</td></tr>
            <tr><td><code>talk-name=org.freedesktop.Notifications</code></td><td>Pode enviar notificações</td><td>Baixo</td></tr>
          </tbody>
        </table>

        <h2><RefreshCw className="inline-block mr-2 mb-1 w-5 h-5" /> Flatpak vs DNF vs Snap</h2>
        <table>
          <thead><tr><th>Aspecto</th><th>Flatpak</th><th>DNF (RPM)</th><th>Snap</th></tr></thead>
          <tbody>
            <tr><td><strong>Sandboxing</strong></td><td>Sim (bubblewrap)</td><td>Não</td><td>Sim (AppArmor)</td></tr>
            <tr><td><strong>Multiplataforma</strong></td><td>Sim</td><td>Apenas RPM</td><td>Sim</td></tr>
            <tr><td><strong>Atualizações</strong></td><td>Independentes do sistema</td><td>Com o sistema</td><td>Auto-update</td></tr>
            <tr><td><strong>Tamanho</strong></td><td>Maior (inclui dependências)</td><td>Menor</td><td>Maior</td></tr>
            <tr><td><strong>Performance</strong></td><td>Quase nativa</td><td>Nativa</td><td>Mais lenta (squashfs)</td></tr>
            <tr><td><strong>Loja</strong></td><td>Flathub (aberta)</td><td>Repos da distro</td><td>Snap Store (Canonical)</td></tr>
            <tr><td><strong>Ideal para</strong></td><td>Apps desktop</td><td>Sistema e libs</td><td>Serviços e CLI</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Quando usar cada um?">
          Use <strong>DNF</strong> para ferramentas de sistema, bibliotecas e pacotes nativos. Use <strong>Flatpak</strong> para aplicativos de desktop (editores, players, navegadores, jogos) — eles recebem atualizações mais rápido e são isolados do sistema.
        </AlertBox>

        <h2>Aplicativos Populares no Flathub</h2>
        <table>
          <thead><tr><th>Aplicativo</th><th>ID</th><th>Categoria</th></tr></thead>
          <tbody>
            <tr><td>Spotify</td><td><code>com.spotify.Client</code></td><td>Música</td></tr>
            <tr><td>Discord</td><td><code>com.discordapp.Discord</code></td><td>Comunicação</td></tr>
            <tr><td>VS Code</td><td><code>com.visualstudio.code</code></td><td>Desenvolvimento</td></tr>
            <tr><td>Steam</td><td><code>com.valvesoftware.Steam</code></td><td>Jogos</td></tr>
            <tr><td>VLC</td><td><code>org.videolan.VLC</code></td><td>Vídeo</td></tr>
            <tr><td>GIMP</td><td><code>org.gimp.GIMP</code></td><td>Imagem</td></tr>
            <tr><td>OBS Studio</td><td><code>com.obsproject.Studio</code></td><td>Gravação</td></tr>
            <tr><td>Telegram</td><td><code>org.telegram.desktop</code></td><td>Comunicação</td></tr>
            <tr><td>LibreOffice</td><td><code>org.libreoffice.LibreOffice</code></td><td>Office</td></tr>
            <tr><td>Blender</td><td><code>org.blender.Blender</code></td><td>3D</td></tr>
            <tr><td>Firefox</td><td><code>org.mozilla.firefox</code></td><td>Navegador</td></tr>
            <tr><td>Bottles</td><td><code>com.usebottles.bottles</code></td><td>Windows apps</td></tr>
          </tbody>
        </table>

        <h2>Troubleshooting</h2>
        <table>
          <thead><tr><th>Problema</th><th>Solução</th></tr></thead>
          <tbody>
            <tr><td>App não aparece no menu</td><td>Faça logout/login ou execute <code>flatpak --user update</code></td></tr>
            <tr><td>Tema GTK não aplica</td><td>Instale o runtime de temas: <code>flatpak install flathub org.gtk.Gtk3theme.Adwaita-dark</code></td></tr>
            <tr><td>App sem acesso a arquivo</td><td>Use Flatseal para conceder <code>filesystem</code> ao diretório necessário</td></tr>
            <tr><td>Erro "No remote refs found"</td><td><code>flatpak update --appstream</code> para atualizar metadados</td></tr>
            <tr><td>Espaço em disco alto</td><td><code>flatpak uninstall --unused</code> para remover runtimes órfãos</td></tr>
            <tr><td>App crashando</td><td>Execute pelo terminal para ver erros: <code>flatpak run --verbose com.app.Id</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  