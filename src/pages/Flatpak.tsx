import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Layers, Search, Trash } from "lucide-react";

export default function Flatpak() {
  return (
    <PageContainer
      title="Flatpak e Flathub"
      subtitle="Instale aplicativos modernos e isolados com Flatpak — o sistema de distribuição de apps universal do Linux."
      difficulty="iniciante"
      timeToRead="20 min"
    >
      <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Flatpak?</h2>
      <p>
        O <strong>Flatpak</strong> é um sistema de distribuição de aplicativos para Linux que empacota o app com todas as suas dependências. Isso garante que o mesmo pacote funcione em qualquer distribuição Linux — Fedora, Ubuntu, Arch, etc.
      </p>
      <p>
        O <strong>Flathub</strong> (flathub.org) é o principal repositório de Flatpaks, com mais de 2000 aplicativos — incluindo Spotify, Discord, Steam, VSCode, Chrome, Telegram e muito mais.
      </p>

      <AlertBox type="success" title="Flatpak já vem instalado no Fedora">
        O Fedora Workstation inclui o Flatpak por padrão. Você só precisa habilitar o repositório Flathub.
      </AlertBox>

      <h2>Habilitando o Flathub</h2>
      <CodeBlock
        code={`# Adicionar o repositório Flathub
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# Verificar repositórios configurados
flatpak remotes`}
        language="bash"
        title="configurar flathub"
      />

      <h2>Instalando Aplicativos</h2>
      <CodeBlock
        code={`# Instalar um aplicativo do Flathub
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord
flatpak install flathub org.videolan.VLC
flatpak install flathub com.valvesoftware.Steam
flatpak install flathub com.visualstudio.code
flatpak install flathub org.telegram.desktop
flatpak install flathub com.google.Chrome

# Instalar sem confirmação
flatpak install -y flathub nome.do.app`}
        language="bash"
        title="instalação"
      />

      <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Buscando Aplicativos</h2>
      <CodeBlock
        code={`# Buscar aplicativos no Flathub
flatpak search spotify
flatpak search "media player"

# Listar aplicativos instalados
flatpak list

# Informações de um app instalado
flatpak info com.spotify.Client`}
        language="bash"
        title="busca"
      />

      <h2>Executando e Gerenciando</h2>
      <CodeBlock
        code={`# Executar um aplicativo Flatpak via terminal
flatpak run com.spotify.Client

# Atualizar todos os Flatpaks
flatpak update

# Atualizar um Flatpak específico
flatpak update com.spotify.Client

# Remover um Flatpak
flatpak uninstall com.spotify.Client

# Remover dados e configurações também
flatpak uninstall --delete-data com.spotify.Client

# Limpar runtimes não utilizados
flatpak uninstall --unused`}
        language="bash"
        title="gerenciamento"
      />

      <h2>Permissões e Segurança</h2>
      <p>Uma das vantagens do Flatpak é o <strong>sandboxing</strong> — cada app roda isolado, com acesso controlado ao sistema.</p>
      <CodeBlock
        code={`# Ver permissões de um app
flatpak info --show-permissions com.spotify.Client

# Instalar o Flatseal (gerenciador de permissões gráfico)
flatpak install flathub com.github.tchx84.Flatseal

# Substituir permissão de um app via linha de comando
flatpak override --user --nofilesystem=home com.spotify.Client`}
        language="bash"
        title="permissões"
      />

      <AlertBox type="info" title="Flatpak vs DNF">
        Use <strong>DNF</strong> para ferramentas de sistema, bibliotecas e pacotes nativos do Fedora. Use <strong>Flatpak</strong> para aplicativos de desktop (editores gráficos, players, navegadores, jogos) — eles recebem atualizações mais rápido e são isolados do sistema.
      </AlertBox>

      <h2>Aplicativos Populares no Flathub</h2>
      <table>
        <thead><tr><th>Aplicativo</th><th>ID</th><th>Categoria</th></tr></thead>
        <tbody>
          <tr><td>Spotify</td><td>com.spotify.Client</td><td>Música</td></tr>
          <tr><td>Discord</td><td>com.discordapp.Discord</td><td>Comunicação</td></tr>
          <tr><td>VSCode</td><td>com.visualstudio.code</td><td>Desenvolvimento</td></tr>
          <tr><td>Steam</td><td>com.valvesoftware.Steam</td><td>Jogos</td></tr>
          <tr><td>VLC</td><td>org.videolan.VLC</td><td>Vídeo</td></tr>
          <tr><td>GIMP</td><td>org.gimp.GIMP</td><td>Imagem</td></tr>
          <tr><td>OBS Studio</td><td>com.obsproject.Studio</td><td>Gravação</td></tr>
          <tr><td>Telegram</td><td>org.telegram.desktop</td><td>Comunicação</td></tr>
          <tr><td>LibreOffice</td><td>org.libreoffice.LibreOffice</td><td>Office</td></tr>
          <tr><td>Blender</td><td>org.blender.Blender</td><td>3D</td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
