import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { BookOpen, Users, Calendar, Award, Globe, Layers } from "lucide-react";

  export default function Historia() {
    return (
      <PageContainer
        title="História do Fedora Linux"
        subtitle="Conheça a trajetória de uma das distribuições mais influentes do mundo Linux, desde suas origens até os dias atuais."
        difficulty="iniciante"
        timeToRead="25 min"
      >
        <h2><BookOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Origens do Projeto</h2>
        <p>
          O Fedora nasceu em 2003, quando a Red Hat decidiu separar sua distribuição em dois projetos distintos: o <strong>Red Hat Enterprise Linux (RHEL)</strong>, voltado para empresas, e o <strong>Fedora</strong>, uma distribuição comunitária e de código aberto. Antes disso, existia o <strong>Red Hat Linux</strong>, que atendia tanto o público doméstico quanto corporativo.
        </p>
        <p>
          A ideia era simples: o Fedora serviria como campo de testes para tecnologias que eventualmente seriam incorporadas ao RHEL. Isso significa que o Fedora sempre está na vanguarda — recebe primeiro as novidades do kernel, GNOME, systemd, Wayland, Pipewire e outras tecnologias antes de qualquer outra distribuição enterprise.
        </p>
        <p>
          O nome "Fedora" vem do chapéu fedora presente no logo da Red Hat. A primeira versão, o <strong>Fedora Core 1</strong> (codinome "Yarrow"), foi lançada em novembro de 2003.
        </p>

        <AlertBox type="info" title="Curiosidade">
          O Fedora foi a distribuição que Linus Torvalds (criador do Linux) usou durante muitos anos como sistema principal.
        </AlertBox>

        <h2><Globe className="inline-block mr-2 mb-1 w-5 h-5" /> Filosofia e Princípios</h2>
        <p>
          O Fedora é guiado por quatro princípios fundamentais que definem sua identidade:
        </p>
        <ul>
          <li><strong>Freedom (Liberdade)</strong> — O Fedora é comprometido com software livre e de código aberto. Ao contrário de distros como Ubuntu e Linux Mint, o Fedora não inclui drivers proprietários ou codecs fechados por padrão. Você pode instalá-los manualmente, mas o sistema vem "limpo" de fábrica.</li>
          <li><strong>Friends (Amigos)</strong> — A comunidade é o coração do projeto. Qualquer pessoa pode contribuir: empacotando software, traduzindo, testando, documentando ou desenvolvendo ferramentas.</li>
          <li><strong>Features (Funcionalidades)</strong> — O Fedora prioriza inovação. É geralmente a primeira distribuição a adotar novas tecnologias como GNOME mais recente, kernel mais novo, Wayland, Pipewire, Btrfs como filesystem padrão, etc.</li>
          <li><strong>First (Primeiro)</strong> — O Fedora busca ser o primeiro a implementar avanços tecnológicos no ecossistema Linux, servindo como referência para outras distribuições.</li>
        </ul>

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Edições do Fedora</h2>
        <p>
          O Fedora não é uma única distribuição — ele possui várias edições oficiais, cada uma projetada para um público diferente:
        </p>

        <h3>Edições Oficiais</h3>
        <table>
          <thead><tr><th>Edição</th><th>Desktop/Ambiente</th><th>Público-alvo</th><th>Destaque</th></tr></thead>
          <tbody>
            <tr><td><strong>Workstation</strong></td><td>GNOME</td><td>Desenvolvedores e uso geral</td><td>Edição principal e mais popular</td></tr>
            <tr><td><strong>Server</strong></td><td>Sem interface gráfica</td><td>Administradores de servidores</td><td>Cockpit para gerenciamento web</td></tr>
            <tr><td><strong>IoT</strong></td><td>Mínimo</td><td>Dispositivos embarcados</td><td>Fedora para Internet das Coisas</td></tr>
            <tr><td><strong>CoreOS</strong></td><td>Mínimo</td><td>Infraestrutura de containers</td><td>Imutável, focado em Kubernetes</td></tr>
            <tr><td><strong>Cloud</strong></td><td>Sem interface gráfica</td><td>Computação em nuvem</td><td>Imagens para AWS, Azure, GCP</td></tr>
          </tbody>
        </table>

        <h3>Spins — Ambientes Desktop Alternativos</h3>
        <p>
          Se você não gosta do GNOME, o Fedora oferece "Spins" com outros ambientes de desktop pré-configurados:
        </p>
        <table>
          <thead><tr><th>Spin</th><th>Ambiente</th><th>Descrição</th><th>RAM Mínima</th></tr></thead>
          <tbody>
            <tr><td><strong>KDE Plasma</strong></td><td>KDE Plasma 6</td><td>Moderno e altamente customizável, ideal para quem quer controle total</td><td>2 GB</td></tr>
            <tr><td><strong>Xfce</strong></td><td>Xfce 4</td><td>Leve e rápido, perfeito para hardware mais antigo</td><td>1 GB</td></tr>
            <tr><td><strong>MATE</strong></td><td>MATE</td><td>Continuação do GNOME 2, interface clássica e familiar</td><td>1 GB</td></tr>
            <tr><td><strong>Cinnamon</strong></td><td>Cinnamon</td><td>Moderno com layout clássico (similar ao Windows)</td><td>2 GB</td></tr>
            <tr><td><strong>LXQt</strong></td><td>LXQt</td><td>Ultra-leve, baseado em Qt, para hardware muito limitado</td><td>512 MB</td></tr>
            <tr><td><strong>i3</strong></td><td>i3wm</td><td>Tiling window manager para uso intenso de teclado</td><td>512 MB</td></tr>
            <tr><td><strong>Sway</strong></td><td>Sway</td><td>Tiling WM nativo Wayland, alternativa ao i3</td><td>512 MB</td></tr>
            <tr><td><strong>Budgie</strong></td><td>Budgie</td><td>Elegante e minimalista, focado em simplicidade</td><td>2 GB</td></tr>
          </tbody>
        </table>

        <h3>Labs — Edições Especializadas</h3>
        <p>
          Os Fedora Labs são configurações especiais para áreas profissionais:
        </p>
        <ul>
          <li><strong>Astronomy</strong> — Software para astronomia e observação do céu</li>
          <li><strong>Comp Neuro</strong> — Ferramentas de neurociência computacional</li>
          <li><strong>Design Suite</strong> — GIMP, Inkscape, Blender e mais para design gráfico</li>
          <li><strong>Games</strong> — Coleção de jogos open source pré-instalados</li>
          <li><strong>Jam</strong> — Produção musical com Ardour, LMMS, Audacity</li>
          <li><strong>Python Classroom</strong> — Ambiente educacional para Python</li>
          <li><strong>Security Lab</strong> — Ferramentas de segurança e pentesting</li>
          <li><strong>Robotics Suite</strong> — ROS e ferramentas de robótica</li>
        </ul>

        <h2><Calendar className="inline-block mr-2 mb-1 w-5 h-5" /> Linha do Tempo</h2>
        <p>Marcos importantes da história do Fedora:</p>
        <table>
          <thead><tr><th>Ano</th><th>Versão</th><th>Novidade Principal</th></tr></thead>
          <tbody>
            <tr><td>2003</td><td>Fedora Core 1</td><td>Primeira versão, baseada no Red Hat Linux 9</td></tr>
            <tr><td>2004</td><td>Fedora Core 2</td><td>Primeiro com SELinux habilitado por padrão</td></tr>
            <tr><td>2007</td><td>Fedora 7</td><td>Remoção do "Core" do nome, merge com Extras</td></tr>
            <tr><td>2008</td><td>Fedora 9</td><td>Live USB pela primeira vez</td></tr>
            <tr><td>2011</td><td>Fedora 15</td><td>Adoção do systemd e GNOME 3</td></tr>
            <tr><td>2014</td><td>Fedora 21</td><td>Divisão em Workstation, Server e Cloud</td></tr>
            <tr><td>2016</td><td>Fedora 25</td><td>Wayland como padrão no GNOME</td></tr>
            <tr><td>2019</td><td>Fedora 31</td><td>Remoção do suporte a 32-bit</td></tr>
            <tr><td>2020</td><td>Fedora 33</td><td>Btrfs como filesystem padrão</td></tr>
            <tr><td>2021</td><td>Fedora 34</td><td>PipeWire substitui PulseAudio</td></tr>
            <tr><td>2022</td><td>Fedora 37</td><td>Raspberry Pi como plataforma oficial</td></tr>
            <tr><td>2023</td><td>Fedora 39</td><td>GNOME 45, melhorias de performance</td></tr>
            <tr><td>2024</td><td>Fedora 40-41</td><td>DNF5, GNOME 46-47, Anaconda modernizado</td></tr>
          </tbody>
        </table>

        <h2><Award className="inline-block mr-2 mb-1 w-5 h-5" /> Fedora vs Outras Distribuições</h2>
        <p>
          Comparação detalhada entre o Fedora e outras distribuições populares:
        </p>
        <table>
          <thead><tr><th>Característica</th><th>Fedora</th><th>Ubuntu</th><th>Arch Linux</th><th>Debian</th></tr></thead>
          <tbody>
            <tr><td><strong>Modelo</strong></td><td>Release fixo (~6 meses)</td><td>Release fixo (6 meses + LTS)</td><td>Rolling release</td><td>Release fixo (lento)</td></tr>
            <tr><td><strong>Gerenciador de pacotes</strong></td><td>DNF (RPM)</td><td>APT (DEB)</td><td>pacman</td><td>APT (DEB)</td></tr>
            <tr><td><strong>Kernel</strong></td><td>Muito recente</td><td>Recente (LTS usa mais antigo)</td><td>Mais recente possível</td><td>Estável (mais antigo)</td></tr>
            <tr><td><strong>Software proprietário</strong></td><td>Não incluído por padrão</td><td>Incluído (drivers, codecs)</td><td>Não incluído</td><td>Não incluído</td></tr>
            <tr><td><strong>Segurança</strong></td><td>SELinux por padrão</td><td>AppArmor</td><td>Manual</td><td>AppArmor opcional</td></tr>
            <tr><td><strong>Filesystem padrão</strong></td><td>Btrfs</td><td>ext4</td><td>ext4</td><td>ext4</td></tr>
            <tr><td><strong>Áudio</strong></td><td>PipeWire</td><td>PipeWire (desde 22.10)</td><td>PipeWire</td><td>PulseAudio</td></tr>
            <tr><td><strong>Init system</strong></td><td>systemd (criado aqui!)</td><td>systemd</td><td>systemd</td><td>systemd</td></tr>
            <tr><td><strong>Base para</strong></td><td>RHEL, CentOS Stream</td><td>Linux Mint, Pop!_OS</td><td>Manjaro, EndeavourOS</td><td>Ubuntu, Kali, Raspbian</td></tr>
            <tr><td><strong>Suporte</strong></td><td>~13 meses por versão</td><td>9 meses (5 anos LTS)</td><td>Contínuo</td><td>~3 anos + LTS</td></tr>
            <tr><td><strong>Ideal para</strong></td><td>Desenvolvedores, entusiastas</td><td>Iniciantes, empresas</td><td>Avançados, customização</td><td>Servidores, estabilidade</td></tr>
          </tbody>
        </table>

        <h2><Users className="inline-block mr-2 mb-1 w-5 h-5" /> Quem Usa Fedora?</h2>
        <p>
          O Fedora é a escolha de profissionais e organizações de referência no mundo da tecnologia:
        </p>
        <ul>
          <li><strong>Linus Torvalds</strong> — Criador do Linux, usou Fedora durante anos como sistema principal</li>
          <li><strong>Red Hat / IBM</strong> — A Red Hat usa Fedora como base para testar tecnologias do RHEL</li>
          <li><strong>Desenvolvedores de kernel</strong> — Muitos desenvolvedores do kernel Linux usam Fedora</li>
          <li><strong>Engenheiros de software</strong> — Empresas de tecnologia adotam Fedora em estações de trabalho</li>
          <li><strong>Universidades</strong> — Usado em laboratórios de pesquisa e ensino de computação</li>
          <li><strong>NASA e CERN</strong> — Derivados do Fedora/RHEL são usados em pesquisa científica</li>
        </ul>

        <h2>Ciclo de Releases</h2>
        <p>
          O Fedora lança uma nova versão aproximadamente a cada <strong>6 meses</strong>, geralmente em abril/maio e outubro/novembro. Cada versão recebe atualizações de segurança e correções por aproximadamente <strong>13 meses</strong> (até um mês após o lançamento da versão N+2).
        </p>
        <p>
          Isso significa que você deve atualizar pelo menos uma vez por ano para continuar recebendo suporte. O processo de upgrade é simples e pode ser feito sem reinstalar o sistema.
        </p>

        <AlertBox type="info" title="Contribua com o Fedora">
          O Fedora é 100% comunitário. Você pode contribuir traduzindo para português, reportando bugs, empacotando software, escrevendo documentação ou testando versões beta. Acesse <strong>docs.fedoraproject.org</strong> para começar.
        </AlertBox>

        <h2>Tecnologias Pioneiras do Fedora</h2>
        <p>
          O Fedora foi pioneiro em adotar várias tecnologias que depois se tornaram padrão em todo o ecossistema Linux:
        </p>
        <table>
          <thead><tr><th>Tecnologia</th><th>Introduzida no Fedora</th><th>O que faz</th></tr></thead>
          <tbody>
            <tr><td><strong>systemd</strong></td><td>Fedora 15 (2011)</td><td>Sistema de init moderno — gerencia serviços, logs, timers</td></tr>
            <tr><td><strong>Wayland</strong></td><td>Fedora 25 (2016)</td><td>Protocolo gráfico moderno — substitui o X11</td></tr>
            <tr><td><strong>PipeWire</strong></td><td>Fedora 34 (2021)</td><td>Servidor de áudio/vídeo — substitui PulseAudio e JACK</td></tr>
            <tr><td><strong>Btrfs</strong></td><td>Fedora 33 (2020)</td><td>Filesystem com snapshots, compressão, RAID</td></tr>
            <tr><td><strong>SELinux</strong></td><td>Fedora Core 2 (2004)</td><td>Segurança obrigatória no nível do kernel</td></tr>
            <tr><td><strong>DNF5</strong></td><td>Fedora 40+ (2024)</td><td>Gerenciador de pacotes em C++ — muito mais rápido</td></tr>
            <tr><td><strong>Flatpak</strong></td><td>Fedora 25 (2016)</td><td>Formato universal de aplicativos sandboxed</td></tr>
            <tr><td><strong>Fedora Silverblue</strong></td><td>Fedora 29 (2018)</td><td>Desktop imutável com OSTree e containers</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Por que escolher Fedora?">
          Se você quer um sistema que seja sempre atual, seguro por padrão, comprometido com software livre e que sirva como porta de entrada para o mundo RHEL/CentOS, o Fedora é a escolha ideal.
        </AlertBox>
      </PageContainer>
    );
  }
  