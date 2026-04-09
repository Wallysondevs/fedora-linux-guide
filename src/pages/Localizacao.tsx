import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Globe, Clock, Languages, Settings, Map, Keyboard } from "lucide-react";

  export default function Localizacao() {
    return (
      <PageContainer
        title="Localização e Idioma"
        subtitle="Configure idioma, fuso horário, teclado e formatos regionais no Fedora para português brasileiro."
        difficulty="iniciante"
        timeToRead="15 min"
      >
        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Idioma do Sistema</h2>
        <CodeBlock
          code={`# Ver idioma atual
  localectl status

  # Ver idiomas disponíveis
  localectl list-locales | grep pt_BR

  # Definir idioma para português brasileiro
  sudo localectl set-locale LANG=pt_BR.UTF-8

  # Instalar pacotes de idioma
  sudo dnf install langpacks-pt_BR
  sudo dnf install glibc-langpack-pt

  # Verificar
  echo $LANG`}
          language="bash"
          title="idioma"
        />

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Fuso Horário</h2>
        <CodeBlock
          code={`# Ver fuso atual
  timedatectl

  # Listar fusos disponíveis
  timedatectl list-timezones | grep Sao_Paulo

  # Definir fuso horário
  sudo timedatectl set-timezone America/Sao_Paulo

  # Habilitar sincronização automática (NTP)
  sudo timedatectl set-ntp true

  # Verificar
  date`}
          language="bash"
          title="fuso horário"
        />

        <h2><Keyboard className="inline-block mr-2 mb-1 w-5 h-5" /> Layout do Teclado</h2>
        <CodeBlock
          code={`# Ver layout atual
  localectl status

  # Listar layouts disponíveis
  localectl list-keymaps | grep br

  # Definir layout ABNT2 (teclado brasileiro)
  sudo localectl set-keymap br-abnt2
  sudo localectl set-x11-keymap br abnt2

  # No GNOME: Settings > Keyboard > Input Sources
  # Adicionar "Portuguese (Brazil)"`}
          language="bash"
          title="teclado"
        />

        <h2>Formatos Regionais</h2>
        <table>
          <thead><tr><th>Variável</th><th>O que Controla</th><th>Valor BR</th></tr></thead>
          <tbody>
            <tr><td><code>LANG</code></td><td>Idioma geral</td><td><code>pt_BR.UTF-8</code></td></tr>
            <tr><td><code>LC_TIME</code></td><td>Formato de data/hora</td><td><code>pt_BR.UTF-8</code></td></tr>
            <tr><td><code>LC_MONETARY</code></td><td>Moeda</td><td><code>pt_BR.UTF-8</code></td></tr>
            <tr><td><code>LC_NUMERIC</code></td><td>Números (vírgula/ponto)</td><td><code>pt_BR.UTF-8</code></td></tr>
          </tbody>
        </table>
      </PageContainer>
    );
  }
  