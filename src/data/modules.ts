import { Module } from "@/types/module";

export const modules: Module[] = [
  // ═══════════════════════════════════════════════════════
  // PARTE 1 — FUNDAMENTOS TEÓRICOS
  // ═══════════════════════════════════════════════════════
  {
    id: "linux-gnu",
    title: "O que é Linux e GNU",
    icon: "🐧",
    category: "Fundamentos Teóricos",
    description: "A história do Linux, o projeto GNU e o conceito de software livre",
    content: [
      "O Linux não é um sistema operacional completo — é um kernel (núcleo). O kernel é o componente que faz a ponte entre o hardware (processador, memória, disco) e os programas que você usa. Ele gerencia processos, memória, dispositivos e chamadas de sistema.",
      "O kernel Linux foi criado por Linus Torvalds em 1991, como um projeto pessoal inspirado no MINIX. Ele foi publicado com uma licença livre (GPL), permitindo que qualquer pessoa estudasse, modificasse e redistribuísse o código-fonte.",
      "O projeto GNU (GNU's Not Unix) foi iniciado por Richard Stallman em 1983 com o objetivo de criar um sistema operacional completamente livre. O GNU desenvolveu ferramentas essenciais: o compilador GCC, o editor Emacs, o shell Bash, as coreutils (ls, cp, mv, rm, cat, etc.) e as bibliotecas C (glibc).",
      "Quando o kernel Linux se uniu às ferramentas GNU, nasceu o sistema GNU/Linux — um sistema operacional completo e livre. É por isso que muitos puristas chamam de 'GNU/Linux' e não apenas 'Linux'. Na prática, a maioria das pessoas diz simplesmente 'Linux'.",
      "Software livre não significa gratuito. Significa liberdade: liberdade de usar, estudar, modificar e distribuir. A licença GPL garante essas 4 liberdades fundamentais. Isso é diferente de 'open source', que foca no aspecto prático do código aberto.",
      "Uma distribuição Linux (distro) é uma combinação do kernel Linux + ferramentas GNU + gerenciador de pacotes + ambiente gráfico + configurações específicas. Exemplos: Fedora, Ubuntu, Debian, Arch Linux, openSUSE, CentOS Stream e muitas outras.",
    ],
    commands: [
      {
        command: "uname -r",
        description: "Exibe a versão do kernel Linux em uso",
        example: "uname -r",
        output: "6.5.0-200.fc39.x86_64",
      },
      {
        command: "uname -a",
        description: "Exibe todas as informações do sistema: kernel, hostname, arquitetura, data de compilação",
        example: "uname -a",
        output: "Linux fedora 6.5.0-200.fc39.x86_64 #1 SMP x86_64 GNU/Linux",
      },
      {
        command: "cat /proc/version",
        description: "Mostra detalhes sobre o kernel, compilador usado e versão do sistema",
        example: "cat /proc/version",
        output: "Linux version 6.5.0-200.fc39.x86_64 (gcc 13.2.1) #1 SMP",
      },
      {
        command: "lsb_release -a",
        description: "Exibe informações sobre a distribuição (pode precisar instalar: dnf install redhat-lsb-core)",
        example: "lsb_release -a",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a diferença entre Linux e GNU/Linux?", answer: "Linux é apenas o kernel. GNU/Linux é o sistema completo: kernel Linux + ferramentas GNU (bash, gcc, coreutils, etc.)", hint: "Pense no que cada projeto contribui" },
      { id: 2, question: "Quem criou o kernel Linux e em que ano?", answer: "Linus Torvalds, em 1991" },
      { id: 3, question: "Quais são as 4 liberdades do software livre?", answer: "Usar, estudar, modificar e distribuir" },
      { id: 4, question: "Qual comando mostra a versão do kernel em uso?", answer: "uname -r" },
    ],
  },
  {
    id: "projeto-fedora",
    title: "O Projeto Fedora",
    icon: "🎩",
    category: "Fundamentos Teóricos",
    description: "Conheça o Fedora, sua filosofia e relação com a Red Hat",
    content: [
      "O Fedora é uma distribuição Linux comunitária patrocinada pela Red Hat (subsidiária da IBM). Ele serve como laboratório de inovação: tecnologias testadas no Fedora frequentemente são adotadas pelo Red Hat Enterprise Linux (RHEL).",
      "O Fedora segue 4 pilares: Freedom (liberdade — software livre), Friends (comunidade), Features (inovação) e First (ser pioneiro). Sempre usa as versões mais recentes dos softwares.",
      "O ciclo de lançamento é de aproximadamente 6 meses. Cada versão tem suporte por ~13 meses. Isso garante software sempre atualizado, mas exige atualizações de versão periódicas.",
      "O Fedora usa RPM (.rpm) como formato de pacote e DNF como gerenciador de pacotes. O sistema de inicialização é o systemd. O filesystem padrão é o Btrfs (desde o Fedora 33).",
      "A comunidade Fedora é organizada em SIGs (Special Interest Groups) e governada pelo FESCo (Fedora Engineering Steering Committee) e pelo Fedora Council.",
    ],
    commands: [
      {
        command: "cat /etc/fedora-release",
        description: "Mostra a versão do Fedora instalada",
        example: "cat /etc/fedora-release",
        output: "Fedora release 39 (Thirty Nine)",
      },
      {
        command: "cat /etc/os-release",
        description: "Informações detalhadas da distribuição (nome, versão, URLs, variante)",
        example: "cat /etc/os-release",
        output: "NAME=\"Fedora Linux\"\nVERSION=\"39 (Workstation Edition)\"\nVARIANT=\"Workstation\"",
      },
      {
        command: "hostnamectl",
        description: "Exibe informações do host, kernel, arquitetura e sistema operacional",
        example: "hostnamectl",
      },
      {
        command: "rpm -qa | wc -l",
        description: "Conta quantos pacotes RPM estão instalados no sistema",
        example: "rpm -qa | wc -l",
        output: "2847",
      },
    ],
    exercises: [
      { id: 1, question: "Quais são os 4 pilares do projeto Fedora?", answer: "Freedom, Friends, Features, First" },
      { id: 2, question: "Qual a relação do Fedora com o Red Hat Enterprise Linux (RHEL)?", answer: "O Fedora serve como laboratório de inovação. Tecnologias testadas no Fedora são adotadas pelo RHEL." },
      { id: 3, question: "Qual é o filesystem padrão do Fedora desde a versão 33?", answer: "Btrfs" },
      { id: 4, question: "Qual comando mostra informações detalhadas da distribuição?", answer: "cat /etc/os-release" },
    ],
  },
  {
    id: "edicoes-fedora",
    title: "Edições do Fedora",
    icon: "💿",
    category: "Fundamentos Teóricos",
    description: "Todas as edições oficiais e seus usos: Workstation, Server, IoT, CoreOS e Spins",
    content: [
      "O Fedora possui diversas edições oficiais, cada uma otimizada para um uso específico. Conhecer cada uma é fundamental para escolher a ferramenta certa para cada cenário.",
      "**Fedora Workstation** — Edição principal para desktops e laptops. Usa GNOME como ambiente gráfico. Ideal para desenvolvedores, estudantes e uso diário. Inclui LibreOffice, Firefox, terminal GNOME e ferramentas de desenvolvimento.",
      "**Fedora Server** — Projetada para servidores. Não inclui ambiente gráfico por padrão (usa apenas terminal). Vem com Cockpit (painel web de administração na porta 9090), FreeIPA para gerenciamento de identidade, e é otimizada para serviços como web servers, bancos de dados e DNS.",
      "**Fedora IoT** — Para dispositivos de Internet das Coisas (Internet of Things). Baseada em OSTree (sistema imutável), ideal para dispositivos embarcados como Raspberry Pi, sensores e gateways industriais.",
      "**Fedora CoreOS** — Sistema operacional minimalista e imutável, projetado para rodar containers. Atualiza automaticamente. Ideal para clusters Kubernetes e infraestrutura cloud-native. É o sucessor do CoreOS Container Linux.",
      "**Fedora Silverblue** — Versão imutável do Workstation com GNOME. O sistema raiz é somente-leitura (OSTree). Aplicativos são instalados via Flatpak ou toolbox. Ideal para quem quer um desktop ultra-estável que nunca quebra.",
      "**Fedora Kinoite** — Igual ao Silverblue, mas usa KDE Plasma ao invés de GNOME.",
      "**Fedora Spins** — Variantes com diferentes ambientes gráficos: KDE Plasma, XFCE (leve), LXQt (ultra-leve), MATE, Cinnamon, i3 (tiling window manager), Budgie, Sway (Wayland tiling). Cada spin é otimizada para diferentes perfis de hardware e preferências.",
      "**Fedora Labs** — Imagens especializadas: Astronomy (astronomia), Design Suite (design gráfico), Games (jogos), Jam (produção musical), Robotics (robótica), Security Lab (segurança/pentest), Python Classroom (ensino de Python), Comp Neuro (neurociência computacional).",
      "**Resumo para a prova:** Workstation = desktop com GNOME. Server = servidores sem GUI. CoreOS = containers. Silverblue = desktop imutável. IoT = dispositivos embarcados. Spins = outros ambientes gráficos. Labs = uso especializado.",
    ],
    commands: [
      {
        command: "cat /etc/os-release | grep VARIANT",
        description: "Verifica qual edição/variante do Fedora está instalada",
        example: "cat /etc/os-release | grep VARIANT",
        output: "VARIANT=\"Workstation Edition\"\nVARIANT_ID=workstation",
      },
      {
        command: "rpm-ostree status",
        description: "Verifica o status do sistema em edições imutáveis (Silverblue, CoreOS, IoT)",
        example: "rpm-ostree status",
      },
      {
        command: "gnome-shell --version",
        description: "Verifica a versão do GNOME instalada (apenas no Workstation/Silverblue)",
        example: "gnome-shell --version",
        output: "GNOME Shell 45.2",
      },
    ],
    exercises: [
      { id: 1, question: "Qual edição do Fedora é voltada para desktops e usa GNOME?", answer: "Fedora Workstation" },
      { id: 2, question: "Qual edição é otimizada para rodar containers em clusters?", answer: "Fedora CoreOS" },
      { id: 3, question: "Qual a diferença entre Silverblue e Workstation?", answer: "Silverblue tem sistema raiz imutável (somente-leitura com OSTree), apps via Flatpak. Workstation é o desktop tradicional mutável." },
      { id: 4, question: "Para que serve o Fedora Server?", answer: "Para servidores. Não tem interface gráfica por padrão, usa terminal e Cockpit (painel web)." },
      { id: 5, question: "O que são Fedora Spins?", answer: "Variantes do Fedora com diferentes ambientes gráficos como KDE, XFCE, LXQt, MATE, Cinnamon, i3, etc." },
      { id: 6, question: "Qual edição você usaria em um Raspberry Pi?", answer: "Fedora IoT" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 2 — INSTALAÇÃO E AMBIENTE GRÁFICO
  // ═══════════════════════════════════════════════════════
  {
    id: "instalacao",
    title: "Instalando o Fedora",
    icon: "💻",
    category: "Instalação e Ambiente",
    description: "Passo a passo completo para download, criação de USB e instalação do Fedora Workstation",
    content: [
      "**Passo 1 — Download da ISO:** Acesse https://fedoraproject.org e baixe a ISO do Fedora Workstation. O arquivo tem ~2GB. Verifique o checksum (SHA256) para garantir que o download não está corrompido.",
      "**Passo 2 — Criar pendrive bootável:** Use o Fedora Media Writer (disponível para Windows, Mac e Linux) ou o comando 'dd' no terminal para gravar a ISO em um pendrive USB de pelo menos 4GB. ATENÇÃO: isso apaga tudo no pendrive!",
      "**Passo 3 — Configurar o BIOS/UEFI:** Reinicie o computador e entre no BIOS (geralmente F2, F12, Del ou Esc). Desative o Secure Boot se necessário. Configure a ordem de boot para iniciar pelo USB.",
      "**Passo 4 — Boot pelo USB:** O Fedora carrega um ambiente Live (você pode testar sem instalar). Clique em 'Install to Hard Drive' para iniciar o Anaconda (instalador gráfico).",
      "**Passo 5 — Anaconda (Instalador):** Configure: idioma → teclado → fuso horário → destino da instalação (particionamento). O particionamento automático usa Btrfs. Para avançado, configure manualmente: /boot (1GB, ext4), / (raiz, Btrfs), /home (Btrfs) e swap.",
      "**Passo 6 — Particionamento:** Esquema recomendado: /boot/efi (600MB, FAT32, para UEFI), /boot (1GB, ext4), / (pelo menos 20GB, Btrfs), /home (restante do disco, Btrfs), swap (igual à RAM para hibernação ou 2-4GB).",
      "**Passo 7 — Criar usuário:** Defina nome completo, nome de usuário (login) e senha. Marque 'Make this user administrator' para ter acesso sudo.",
      "**Passo 8 — Finalização:** A instalação leva de 5 a 15 minutos. Após concluir, remova o pendrive e reinicie. Na primeira inicialização, o GNOME apresenta um assistente de boas-vindas.",
      "**Pós-instalação essencial:** Atualize o sistema com 'sudo dnf update', instale codecs multimídia (RPM Fusion), configure o hostname e personalize o GNOME com Extensões e Tweaks.",
    ],
    commands: [
      {
        command: "sha256sum Fedora-Workstation-Live-x86_64-39.iso",
        description: "Verifica o checksum SHA256 do arquivo ISO baixado (compare com o site oficial)",
        example: "sha256sum Fedora-Workstation-Live-x86_64-39.iso",
      },
      {
        command: "sudo dd if=Fedora.iso of=/dev/sdX bs=4M status=progress",
        description: "Grava a ISO no pendrive via terminal (substitua /dev/sdX pelo seu pendrive — CUIDADO!)",
        example: "sudo dd if=Fedora-Workstation-Live-x86_64-39.iso of=/dev/sdb bs=4M status=progress",
      },
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco (discos, partições, pendrives) para identificar o pendrive",
        example: "lsblk",
        output: "sda    8:0  0  500G  0 disk\n├─sda1 8:1  0  600M  0 part /boot/efi\n├─sda2 8:2  0    1G  0 part /boot\n└─sda3 8:3  0  498G  0 part /\nsdb    8:16 1   16G  0 disk  ← pendrive",
      },
      {
        command: "fdisk -l",
        description: "Lista partições detalhadas de todos os discos",
        example: "sudo fdisk -l",
      },
      {
        command: "sudo dnf update -y",
        description: "Primeira coisa a fazer após instalar: atualiza todos os pacotes do sistema",
        example: "sudo dnf update -y",
      },
    ],
    exercises: [
      { id: 1, question: "Qual ferramenta gráfica oficial é recomendada para criar o pendrive bootável do Fedora?", answer: "Fedora Media Writer" },
      { id: 2, question: "Qual é o instalador gráfico do Fedora?", answer: "Anaconda" },
      { id: 3, question: "Qual filesystem é usado por padrão no particionamento automático do Fedora?", answer: "Btrfs" },
      { id: 4, question: "Qual comando lista os discos e partições do sistema?", answer: "lsblk" },
      { id: 5, question: "Qual deve ser o primeiro comando após instalar o Fedora?", answer: "sudo dnf update -y" },
    ],
  },
  {
    id: "gnome",
    title: "O Ambiente GNOME",
    icon: "🖥️",
    category: "Instalação e Ambiente",
    description: "Conheça o GNOME, o ambiente gráfico padrão do Fedora Workstation",
    content: [
      "O GNOME (GNU Network Object Model Environment) é o ambiente gráfico padrão do Fedora Workstation. Ele fornece a interface visual: barra superior, área de trabalho, gerenciador de arquivos (Nautilus), menu de aplicativos e notificações.",
      "O GNOME usa o protocolo de exibição Wayland por padrão (substituto do X11/Xorg). Wayland é mais moderno, seguro e performático. Se algum aplicativo não funcionar em Wayland, você pode escolher GNOME com Xorg na tela de login.",
      "**Atalhos essenciais do GNOME:** Super (tecla Windows) = abre Activities/visão geral. Super+A = abre a grade de aplicativos. Alt+Tab = alterna entre janelas. Super+setas = organiza janelas lado a lado (tiling). Ctrl+Alt+T = abre o terminal.",
      "**Nautilus (Files):** Gerenciador de arquivos gráfico. Suporta abas, favoritos, acesso a servidores remotos (sftp://), lixeira e busca integrada. Ctrl+L mostra a barra de localização para digitar caminhos.",
      "**GNOME Software:** Loja de aplicativos para instalar programas graficamente. Suporta pacotes RPM (DNF) e Flatpak. Também gerencia atualizações do sistema.",
      "**GNOME Settings:** Painel de configurações para Wi-Fi, Bluetooth, teclado, monitor, usuários, data/hora, energia, privacidade e acessibilidade.",
      "**GNOME Tweaks:** Ferramenta extra (instale com 'sudo dnf install gnome-tweaks') para configurações avançadas: fontes, temas, barra de título, extensões de startup e comportamento de janelas.",
      "**Extensões GNOME:** Plugins que adicionam funcionalidades. Instale via https://extensions.gnome.org ou GNOME Extensions app. Populares: Dash to Dock, AppIndicator, Clipboard Indicator, Caffeine.",
      "**Alternativas ao GNOME:** Se o GNOME for pesado para seu hardware, considere usar um Fedora Spin com XFCE (leve), LXQt (ultra-leve) ou i3 (minimalista). Instalar outro ambiente: sudo dnf install @xfce-desktop-environment.",
    ],
    commands: [
      {
        command: "gnome-shell --version",
        description: "Mostra a versão do GNOME Shell instalada",
        example: "gnome-shell --version",
        output: "GNOME Shell 45.2",
      },
      {
        command: "echo $XDG_SESSION_TYPE",
        description: "Verifica se está usando Wayland ou X11",
        example: "echo $XDG_SESSION_TYPE",
        output: "wayland",
      },
      {
        command: "sudo dnf install gnome-tweaks",
        description: "Instala o GNOME Tweaks para configurações avançadas",
        example: "sudo dnf install gnome-tweaks",
      },
      {
        command: "sudo dnf install gnome-extensions-app",
        description: "Instala o gerenciador de extensões do GNOME",
        example: "sudo dnf install gnome-extensions-app",
      },
      {
        command: "gsettings list-schemas",
        description: "Lista todos os schemas de configuração do GNOME (via terminal)",
        example: "gsettings list-schemas | grep desktop",
      },
      {
        command: "gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'",
        description: "Ativa o tema escuro do GNOME via terminal",
        example: "gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'",
      },
    ],
    exercises: [
      { id: 1, question: "Qual protocolo de exibição o GNOME usa por padrão no Fedora?", answer: "Wayland" },
      { id: 2, question: "Qual atalho abre a visão geral de atividades no GNOME?", answer: "Super (tecla Windows)" },
      { id: 3, question: "Como verificar se você está usando Wayland ou X11?", answer: "echo $XDG_SESSION_TYPE" },
      { id: 4, question: "Qual é o nome do gerenciador de arquivos do GNOME?", answer: "Nautilus (Files)" },
      { id: 5, question: "Como instalar o GNOME Tweaks?", answer: "sudo dnf install gnome-tweaks" },
    ],
  },
  {
    id: "terminal-basico",
    title: "Primeiros Passos no Terminal",
    icon: "⌨️",
    category: "Instalação e Ambiente",
    description: "O terminal, o shell Bash e os comandos mais fundamentais",
    content: [
      "O terminal (emulador de terminal) é o aplicativo gráfico que dá acesso ao shell. No Fedora, o terminal padrão é o GNOME Terminal. Abra com Ctrl+Alt+T ou buscando 'Terminal' no menu.",
      "O shell é o interpretador de comandos — o programa que lê o que você digita e executa. O shell padrão do Fedora é o Bash (Bourne Again Shell). Outros shells populares: Zsh, Fish.",
      "**Entendendo o prompt:** Quando você abre o terminal, aparece algo como: [estudante@fedora ~]$ — Isso significa: 'estudante' é o seu nome de usuário, 'fedora' é o nome do computador (hostname), '~' é o diretório onde você está (~ = pasta home) e '$' indica que você é um usuário comum. Se aparecer '#' em vez de '$', você está como root (administrador).",
      "**Root vs Usuário Comum:** O root é o superusuário — tem poder TOTAL sobre o sistema (pode apagar tudo, inclusive o próprio sistema!). O usuário comum tem restrições que o protegem de fazer besteira. Nunca use o root para tarefas do dia a dia. Use 'sudo' antes de comandos que precisam de permissão especial.",
      "**CUIDADO com o root!** Em muitas distribuições (incluindo o Fedora), o root vem SEM SENHA por padrão. Se um aluno digitar 'su' ou 'su -' para virar root, pode ficar preso sem saber a senha. Para definir uma senha no root: 'sudo passwd root'. Para sair do root: digite 'exit' ou pressione Ctrl+D. NUNCA fique logado como root — use apenas para tarefas administrativas específicas.",
      "Conceitos fundamentais: comandos seguem o formato 'comando [opções] [argumentos]'. Opções curtas usam um traço (-l), opções longas usam dois (--list). Argumentos são os alvos do comando (arquivos, diretórios).",
      "Dica: Use Tab para autocompletar comandos e caminhos. Seta ↑ e ↓ navegam pelo histórico. Ctrl+R faz busca reversa no histórico. Ctrl+C cancela o comando atual. Ctrl+L limpa a tela.",
    ],
    commands: [
      {
        command: "whoami",
        description: "Exibe o nome do usuário atual logado no sistema",
        example: "whoami",
        output: "estudante",
      },
      {
        command: "hostname",
        description: "Mostra o nome do computador na rede",
        example: "hostname",
        output: "fedora-workstation",
      },
      {
        command: "date",
        description: "Exibe a data e hora atual do sistema",
        example: "date",
        output: "Seg Fev 10 14:30:25 -03 2026",
      },
      {
        command: "uptime",
        description: "Mostra há quanto tempo o sistema está ligado, número de usuários e carga média",
        example: "uptime",
        output: " 14:30:25 up 2:15, 1 user, load average: 0.52, 0.48, 0.39",
      },
      {
        command: "echo",
        description: "Imprime texto ou variáveis no terminal",
        example: "echo 'Olá, Fedora!'\necho $HOME\necho $SHELL",
        output: "Olá, Fedora!",
      },
      {
        command: "clear",
        description: "Limpa a tela do terminal (atalho: Ctrl+L)",
        example: "clear",
      },
      {
        command: "exit",
        description: "Fecha a sessão do terminal",
        example: "exit",
      },
      {
        command: "man",
        description: "Abre o manual completo de qualquer comando. Use q para sair.",
        example: "man ls\nman chmod",
      },
      {
        command: "which / type",
        description: "Mostra onde um comando está localizado no sistema",
        example: "which bash\ntype ls",
        output: "/usr/bin/bash",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é o shell padrão do Fedora?", answer: "Bash (Bourne Again Shell)" },
      { id: 2, question: "O que o símbolo '$' no prompt indica?", answer: "Que o usuário é um usuário normal (não root)" },
      { id: 3, question: "Qual atalho autocompleta comandos e caminhos no terminal?", answer: "Tab" },
      { id: 4, question: "Como cancelar um comando em execução?", answer: "Ctrl+C" },
      { id: 5, question: "Qual comando abre o manual de um comando?", answer: "man" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 3 — COMANDOS ESSENCIAIS
  // ═══════════════════════════════════════════════════════
  {
    id: "navegacao",
    title: "Navegação no Sistema de Arquivos",
    icon: "📂",
    category: "Comandos Essenciais",
    description: "Estrutura de diretórios do Linux e comandos para navegar",
    content: [
      "No Linux, tudo é organizado em uma árvore de diretórios que começa na raiz '/'. Diferente do Windows, não existem letras de unidade (C:, D:). Tudo — incluindo discos externos, pendrives e partições — é montado dentro de '/'.",
      "**Diretórios principais:** / (raiz), /home (arquivos dos usuários), /etc (configurações do sistema), /var (dados variáveis e logs), /tmp (arquivos temporários), /usr (programas e bibliotecas), /bin e /sbin (comandos essenciais), /boot (arquivos de inicialização), /dev (dispositivos), /proc (informações de processos/kernel), /mnt e /media (pontos de montagem).",
      "O diretório home do seu usuário é representado por '~' (til). Caminhos absolutos começam com / (ex: /home/estudante/docs). Caminhos relativos começam do diretório atual (ex: ./docs ou ../outro).",
      "O '.' representa o diretório atual. O '..' representa o diretório pai (um nível acima). Arquivos que começam com '.' são ocultos (ex: .bashrc, .config).",
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — mostra o caminho completo do diretório onde você está",
        example: "pwd",
        output: "/home/estudante",
      },
      {
        command: "ls",
        description: "Lista os arquivos e diretórios no diretório atual",
        example: "ls",
        output: "Desktop  Documents  Downloads  Music  Pictures  Videos",
        flags: [
          { flag: "-l", description: "Lista detalhada com permissões, dono, tamanho e data" },
          { flag: "-a", description: "Mostra arquivos ocultos (começam com ponto)" },
          { flag: "-la", description: "Combinação: lista detalhada incluindo ocultos" },
          { flag: "-lh", description: "Lista detalhada com tamanhos legíveis (KB, MB, GB)" },
          { flag: "-R", description: "Lista recursivamente (subdiretórios incluídos)" },
          { flag: "-t", description: "Ordena por data de modificação (mais recente primeiro)" },
          { flag: "-S", description: "Ordena por tamanho (maior primeiro)" },
        ],
      },
      {
        command: "cd",
        description: "Change Directory — muda para outro diretório",
        example: "cd /home/estudante/Documents",
        flags: [
          { flag: "cd ~", description: "Vai para o diretório home do usuário" },
          { flag: "cd ..", description: "Sobe um nível na árvore de diretórios" },
          { flag: "cd -", description: "Volta para o diretório anterior" },
          { flag: "cd /", description: "Vai para o diretório raiz" },
        ],
      },
      {
        command: "tree",
        description: "Exibe a estrutura de diretórios em forma de árvore visual (instale: sudo dnf install tree)",
        example: "tree -L 2",
        output: ".\n├── Desktop\n├── Documents\n│   ├── projeto1\n│   └── notas.txt\n└── Downloads",
        flags: [
          { flag: "-L N", description: "Limita a profundidade a N níveis" },
          { flag: "-d", description: "Mostra apenas diretórios" },
        ],
      },
      {
        command: "find",
        description: "Busca arquivos e diretórios por nome, tipo, tamanho e outros critérios",
        example: "find /home -name '*.txt'",
        flags: [
          { flag: "-name", description: "Busca por nome (aceita wildcards como *)" },
          { flag: "-type f", description: "Busca apenas arquivos" },
          { flag: "-type d", description: "Busca apenas diretórios" },
          { flag: "-size +10M", description: "Busca arquivos maiores que 10MB" },
          { flag: "-mtime -7", description: "Modificados nos últimos 7 dias" },
          { flag: "-exec", description: "Executa um comando em cada resultado" },
        ],
      },
      {
        command: "locate",
        description: "Busca rápida usando banco de dados indexado (instale: sudo dnf install mlocate && sudo updatedb)",
        example: "locate firefox",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os arquivos (incluindo ocultos) com detalhes em tamanhos legíveis?", answer: "ls -lah" },
      { id: 2, question: "Qual comando leva você de volta para sua pasta home?", answer: "cd ~", hint: "Use cd com um caractere especial" },
      { id: 3, question: "Como encontrar todos os arquivos .pdf dentro de /home?", answer: "find /home -name '*.pdf'" },
      { id: 4, question: "Qual comando mostra o diretório atual?", answer: "pwd" },
      { id: 5, question: "O que representa o '..' em um caminho?", answer: "O diretório pai (um nível acima)" },
      { id: 6, question: "Qual diretório armazena as configurações do sistema?", answer: "/etc" },
    ],
  },
  {
    id: "arquivos",
    title: "Manipulação de Arquivos",
    icon: "📄",
    category: "Comandos Essenciais",
    description: "Crie, copie, mova, renomeie e remova arquivos e diretórios",
    content: [
      "No Linux, manipular arquivos pelo terminal é extremamente eficiente. Você pode criar, copiar, mover, renomear e remover arquivos e diretórios com poucos comandos.",
      "ATENÇÃO: O Linux não tem lixeira no terminal! Quando você remove um arquivo com 'rm', ele é apagado permanentemente. Sempre tenha cuidado, especialmente com 'rm -rf'.",
      "Dica: Use o comando 'man' seguido do nome de qualquer comando para ver seu manual completo. Por exemplo: man cp",
    ],
    commands: [
      {
        command: "touch",
        description: "Cria um arquivo vazio ou atualiza a data de modificação de um existente",
        example: "touch meu_arquivo.txt",
      },
      {
        command: "mkdir",
        description: "Cria um ou mais diretórios",
        example: "mkdir meu_projeto",
        flags: [
          { flag: "-p", description: "Cria diretórios intermediários se necessário (ex: mkdir -p a/b/c)" },
        ],
      },
      {
        command: "cp",
        description: "Copia arquivos ou diretórios de um lugar para outro",
        example: "cp arquivo.txt /home/estudante/backup/",
        flags: [
          { flag: "-r", description: "Copia diretórios recursivamente (obrigatório para pastas)" },
          { flag: "-i", description: "Pede confirmação antes de sobrescrever" },
          { flag: "-v", description: "Modo verboso — mostra o que está sendo copiado" },
          { flag: "-a", description: "Modo archive — preserva permissões, dono, timestamps" },
        ],
      },
      {
        command: "mv",
        description: "Move ou renomeia arquivos e diretórios",
        example: "mv antigo.txt novo.txt",
        flags: [
          { flag: "-i", description: "Pede confirmação antes de sobrescrever" },
          { flag: "-v", description: "Modo verboso — mostra a operação" },
        ],
      },
      {
        command: "rm",
        description: "Remove (apaga permanentemente) arquivos e diretórios",
        example: "rm arquivo_inutil.txt",
        flags: [
          { flag: "-r", description: "Remove diretórios recursivamente" },
          { flag: "-f", description: "Força a remoção sem pedir confirmação" },
          { flag: "-i", description: "Pede confirmação para cada arquivo (mais seguro)" },
          { flag: "-rf", description: "⚠️ PERIGOSO: Remove tudo sem perguntar" },
        ],
      },
      {
        command: "cat",
        description: "Exibe o conteúdo de um arquivo no terminal",
        example: "cat /etc/hostname",
        output: "fedora-workstation",
      },
      {
        command: "less / more",
        description: "Exibe o conteúdo de arquivos grandes com paginação (less permite voltar, more só avança)",
        example: "less /var/log/messages",
      },
      {
        command: "head / tail",
        description: "Exibe as primeiras (head) ou últimas (tail) linhas de um arquivo",
        example: "head -n 20 arquivo.log\ntail -f /var/log/messages",
        flags: [
          { flag: "-n X", description: "Mostra X linhas" },
          { flag: "-f (tail)", description: "Acompanha o arquivo em tempo real (ideal para logs)" },
        ],
      },
      {
        command: "nano / vim",
        description: "Editores de texto no terminal. Nano é mais simples, Vim é mais poderoso",
        example: "nano arquivo.txt\nvim arquivo.txt",
      },
      {
        command: "diff",
        description: "Compara dois arquivos e mostra as diferenças linha a linha",
        example: "diff arquivo1.txt arquivo2.txt",
      },
      {
        command: "ln",
        description: "Cria links simbólicos (atalhos) ou hard links",
        example: "ln -s /usr/bin/python3 ~/python",
        flags: [
          { flag: "-s", description: "Cria link simbólico (atalho)" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Crie uma pasta chamada 'projeto' com subpastas 'src' e 'docs' em um único comando", answer: "mkdir -p projeto/src projeto/docs" },
      { id: 2, question: "Como copiar uma pasta inteira 'fotos' para 'backup_fotos'?", answer: "cp -r fotos backup_fotos" },
      { id: 3, question: "Renomeie o arquivo 'relatorio.txt' para 'relatorio_final.txt'", answer: "mv relatorio.txt relatorio_final.txt" },
      { id: 4, question: "Como ver as últimas linhas de um log em tempo real?", answer: "tail -f arquivo.log", hint: "Use tail com a flag que acompanha mudanças" },
      { id: 5, question: "Qual a diferença entre cat e less?", answer: "cat exibe todo o conteúdo de uma vez. less permite navegar página por página (ideal para arquivos grandes)." },
    ],
  },
  {
    id: "permissoes",
    title: "Permissões e Usuários",
    icon: "🔐",
    category: "Comandos Essenciais",
    description: "Sistema de permissões, usuários, grupos e sudo",
    content: [
      "O Linux é um sistema multiusuário com um robusto sistema de permissões. Cada arquivo tem um dono (user), um grupo (group) e permissões para outros (others).",
      "As permissões são: r (read/leitura=4), w (write/escrita=2), x (execute/execução=1). Ao usar 'ls -l', você vê algo como '-rwxr-xr--': dono pode tudo (rwx=7), grupo pode ler e executar (r-x=5), outros só podem ler (r--=4). Resultado: 754.",
      "O comando 'sudo' (Super User DO) permite executar comandos como administrador (root). O root tem poder total sobre o sistema. Use com responsabilidade!",
      "Usuários são armazenados em /etc/passwd. Senhas (criptografadas) ficam em /etc/shadow. Grupos ficam em /etc/group. O grupo 'wheel' no Fedora dá permissão de usar sudo.",
      "**Criando e removendo usuários — passo a passo:** Quando você cria um usuário com 'useradd', NÃO esqueça de: 1) usar a flag -m para criar a pasta home, 2) definir uma senha com 'passwd', e 3) adicionar ao grupo 'wheel' se ele precisar de sudo. Sem a flag -m, o usuário não terá diretório home e terá problemas. Sem senha, ele não consegue logar.",
      "**Removendo usuários com segurança:** O 'userdel' remove o usuário, mas NÃO apaga a pasta home dele. Use 'userdel -r' para remover tudo (home + emails). ATENÇÃO: isso é irreversível! Sempre faça backup antes. Verifique se o usuário está logado antes de remover com 'who' ou 'w'.",
      "**Definindo senha no root:** Em muitas instalações do Fedora, o root NÃO tem senha configurada — isso significa que você não consegue logar diretamente como root. Para definir uma senha: 'sudo passwd root'. Depois disso, 'su -' vai funcionar. Para sair do root, digite 'exit'. DICA: se você ficou preso no root sem saber o que fazer, simplesmente digite 'exit' e tecle Enter.",
    ],
    commands: [
      {
        command: "chmod",
        description: "Altera as permissões de arquivos e diretórios",
        example: "chmod 755 script.sh\nchmod u+x script.sh",
        flags: [
          { flag: "755", description: "Dono: rwx, Grupo: r-x, Outros: r-x" },
          { flag: "644", description: "Dono: rw-, Grupo: r--, Outros: r--" },
          { flag: "700", description: "Dono: rwx, Grupo: ---, Outros: ---" },
          { flag: "u+x", description: "Adiciona execução para o dono" },
          { flag: "g+w", description: "Adiciona escrita para o grupo" },
          { flag: "o-r", description: "Remove leitura para outros" },
          { flag: "-R", description: "Aplica recursivamente em diretórios" },
        ],
      },
      {
        command: "chown",
        description: "Altera o dono e/ou grupo de um arquivo",
        example: "sudo chown estudante:estudante arquivo.txt",
        flags: [
          { flag: "-R", description: "Altera recursivamente" },
          { flag: "user:group", description: "Define dono e grupo simultaneamente" },
        ],
      },
      {
        command: "sudo",
        description: "Executa um comando com privilégios de administrador (root)",
        example: "sudo dnf update",
      },
      {
        command: "su",
        description: "Troca para outro usuário (su - carrega o ambiente completo do usuário)",
        example: "su - root",
      },
      {
        command: "useradd",
        description: "Cria um novo usuário no sistema. SEMPRE use -m para criar a pasta home!",
        example: "sudo useradd -m joao\nsudo passwd joao\nsudo useradd -m -G wheel -s /bin/bash maria",
        output: "# Passo 1: cria o usuário 'joao' com pasta home /home/joao\n# Passo 2: define a senha do joao (OBRIGATÓRIO, senão ele não loga!)\n# Passo 3: cria 'maria' com home, grupo wheel (sudo) e shell bash",
        flags: [
          { flag: "-m", description: "Cria o diretório home (/home/usuario) — SEM ISSO o usuário fica sem pasta!" },
          { flag: "-G wheel", description: "Adiciona ao grupo wheel (permite usar sudo)" },
          { flag: "-s /bin/bash", description: "Define o shell do usuário (bash é o mais comum)" },
          { flag: "-d /caminho", description: "Define um diretório home personalizado" },
          { flag: "-c 'Nome Completo'", description: "Adiciona um comentário (geralmente o nome completo)" },
        ],
      },
      {
        command: "userdel",
        description: "Remove um usuário do sistema. Use -r para remover a pasta home junto!",
        example: "sudo userdel joao\nsudo userdel -r joao",
        output: "# Sem -r: remove o usuário mas a pasta /home/joao continua existindo\n# Com -r: remove o usuário E apaga /home/joao (IRREVERSÍVEL!)",
        flags: [
          { flag: "-r", description: "Remove o diretório home e emails do usuário (cuidado: irreversível!)" },
          { flag: "-f", description: "Força a remoção mesmo se o usuário estiver logado" },
        ],
      },
      {
        command: "usermod",
        description: "Modifica um usuário existente (mudar grupo, shell, home, etc.)",
        example: "sudo usermod -aG wheel estudante",
        flags: [
          { flag: "-aG", description: "Adiciona a um grupo sem remover dos outros" },
          { flag: "-s", description: "Altera o shell" },
          { flag: "-l", description: "Renomeia o login" },
        ],
      },
      {
        command: "passwd",
        description: "Altera a senha de um usuário. Essencial após criar um usuário novo!",
        example: "passwd\nsudo passwd joao\nsudo passwd root",
        output: "# passwd sozinho: muda SUA própria senha\n# sudo passwd joao: muda a senha do 'joao' (precisa ser root/sudo)\n# sudo passwd root: define/muda a senha do root (IMPORTANTE se root não tem senha!)",
      },
      {
        command: "su / su -",
        description: "Troca para outro usuário. 'su -' carrega o ambiente completo (recomendado)",
        example: "su - root\nsu - joao\nexit",
        output: "# su - root: vira root (pede a senha do root)\n# su - joao: vira o usuário joao (pede a senha do joao)\n# exit: volta para seu usuário original\n# DICA: se ficou preso no root, digite 'exit' para sair!",
      },
      {
        command: "groups / id",
        description: "groups mostra os grupos do usuário. id mostra UID, GID e todos os grupos",
        example: "groups estudante\nid estudante",
        output: "uid=1000(estudante) gid=1000(estudante) groups=1000(estudante),10(wheel)",
      },
    ],
    exercises: [
      { id: 1, question: "Dê permissão de execução a um script 'deploy.sh' apenas para o dono", answer: "chmod u+x deploy.sh" },
      { id: 7, question: "Crie um usuário chamado 'aluno' com pasta home, grupo wheel e shell bash", answer: "sudo useradd -m -G wheel -s /bin/bash aluno && sudo passwd aluno", hint: "Não esqueça de definir a senha!" },
      { id: 8, question: "Remova o usuário 'aluno' e sua pasta home", answer: "sudo userdel -r aluno" },
      { id: 9, question: "Como definir uma senha para o root?", answer: "sudo passwd root" },
      { id: 10, question: "Você digitou 'su -' e agora está como root. Como voltar ao seu usuário?", answer: "exit (ou Ctrl+D)" },
      { id: 2, question: "Qual permissão numérica corresponde a: dono lê/escreve, grupo lê, outros lê?", answer: "644" },
      { id: 3, question: "Como criar um novo usuário 'aluno01' com diretório home e acesso sudo?", answer: "sudo useradd -m -G wheel aluno01" },
      { id: 4, question: "Como adicionar o usuário 'aluno01' ao grupo 'wheel' sem remover outros grupos?", answer: "sudo usermod -aG wheel aluno01" },
      { id: 5, question: "Qual arquivo armazena as informações dos usuários do sistema?", answer: "/etc/passwd" },
    ],
  },
  {
    id: "executando-programas",
    title: "Instalando e Executando Programas",
    icon: "🚀",
    category: "Comandos Essenciais",
    description: "Como instalar, dar permissão e executar programas .AppImage, .run, .sh e outros",
    content: [
      "No Linux, existem VÁRIAS formas de instalar e executar programas. Diferente do Windows, onde você baixa um .exe e clica duas vezes, no Linux muitas vezes você precisa dar permissão de execução antes de rodar.",
      "**Por que './meu_programa' não funciona?** Quando você baixa um arquivo .AppImage, .run ou .sh e tenta executar com './nome_do_arquivo', provavelmente vai ver o erro 'Permission denied' (Permissão negada). Isso acontece porque, por segurança, o Linux NÃO permite executar arquivos baixados por padrão. Você precisa dar permissão de execução primeiro com: chmod +x nome_do_arquivo",
      "**Passo a passo para rodar qualquer programa baixado:** 1) Baixe o arquivo (pelo navegador ou com wget/curl). 2) Abra o terminal na pasta onde está o arquivo (geralmente ~/Downloads). 3) Dê permissão: chmod +x nome_do_arquivo. 4) Execute: ./nome_do_arquivo",
      "**Arquivos .AppImage:** São programas portáteis que não precisam de instalação. Baixou, deu chmod +x, roda com ./nome.AppImage. Funcionam em qualquer distro Linux. Exemplos: Obsidian, Balena Etcher, LibreOffice portable. Para 'instalar' de verdade, mova para /usr/local/bin ou ~/bin e crie um atalho no menu.",
      "**Arquivos .run:** São instaladores auto-extraíveis. Geralmente usados por drivers (NVIDIA) e softwares proprietários. Dê chmod +x e execute com ./nome.run. Alguns precisam de sudo (permissão de root) para instalar no sistema.",
      "**Arquivos .sh:** São scripts de shell (texto com comandos). Podem ser desde instaladores até scripts personalizados. Dê chmod +x e execute com ./nome.sh. CUIDADO: sempre leia o script antes de executar (use 'cat nome.sh' ou 'less nome.sh') — pode conter comandos perigosos!",
      "**Arquivos .deb e .rpm:** São pacotes de instalação. O Fedora usa .rpm (instale com: sudo dnf install ./pacote.rpm). Arquivos .deb são do Debian/Ubuntu e NÃO funcionam no Fedora!",
      "**Arquivos .bin:** Antigos instaladores binários (Java, etc.). Mesmo procedimento: chmod +x e ./nome.bin.",
      "**Instalando pelo DNF (forma recomendada):** A forma mais segura e fácil de instalar programas no Fedora é pelo gerenciador de pacotes: sudo dnf install nome_do_programa. Ele baixa, instala, resolve dependências e mantém tudo atualizado automaticamente.",
      "**Instalando pelo Flatpak:** Para programas que não estão no DNF, use Flatpak: flatpak install flathub nome.do.App. Flatpaks são isolados (sandbox) e funcionam em qualquer distro.",
    ],
    commands: [
      {
        command: "chmod +x arquivo",
        description: "Dá permissão de execução a um arquivo. OBRIGATÓRIO antes de executar .AppImage, .run, .sh etc.",
        example: "chmod +x Obsidian.AppImage\nchmod +x driver-nvidia.run\nchmod +x instalar.sh",
        output: "# Sem saída = funcionou! Agora pode executar com ./nome_do_arquivo",
      },
      {
        command: "./arquivo",
        description: "Executa um arquivo no diretório atual. O './' diz ao sistema: 'execute o arquivo DESTE diretório'",
        example: "cd ~/Downloads\nchmod +x MeuApp.AppImage\n./MeuApp.AppImage",
        output: "# Passo 1: entra na pasta Downloads\n# Passo 2: dá permissão de execução\n# Passo 3: executa o programa",
      },
      {
        command: "sudo dnf install ./pacote.rpm",
        description: "Instala um pacote .rpm baixado manualmente",
        example: "cd ~/Downloads\nsudo dnf install ./google-chrome-stable.rpm",
        output: "# O dnf resolve as dependências automaticamente",
      },
      {
        command: "file nome_do_arquivo",
        description: "Mostra o tipo real do arquivo (útil para saber o que ele é antes de executar)",
        example: "file programa.AppImage\nfile script.sh\nfile pacote.rpm",
        output: "programa.AppImage: ELF 64-bit LSB executable\nscript.sh: Bash script, ASCII text",
      },
      {
        command: "which / whereis",
        description: "Descobre onde um programa está instalado no sistema",
        example: "which firefox\nwhereis python3",
        output: "/usr/bin/firefox",
      },
    ],
    exercises: [
      { id: 1, question: "Você baixou 'MeuApp.AppImage' na pasta Downloads. Quais os passos para executá-lo?", answer: "cd ~/Downloads && chmod +x MeuApp.AppImage && ./MeuApp.AppImage", hint: "Precisa entrar na pasta, dar permissão e executar" },
      { id: 2, question: "Ao tentar executar './programa.run' aparece 'Permission denied'. O que fazer?", answer: "chmod +x programa.run", hint: "Precisa dar permissão de execução" },
      { id: 3, question: "Qual a diferença entre .AppImage e .rpm?", answer: ".AppImage é portátil (não instala, roda direto). .rpm é um pacote que instala no sistema via dnf." },
      { id: 4, question: "Como verificar se um arquivo .sh é seguro antes de executá-lo?", answer: "cat nome.sh ou less nome.sh — leia o conteúdo para ver quais comandos ele vai executar" },
      { id: 5, question: "Qual a forma mais segura de instalar programas no Fedora?", answer: "sudo dnf install nome_do_programa (pelo gerenciador de pacotes oficial)" },
      { id: 6, question: "Você baixou google-chrome.rpm. Como instalar?", answer: "sudo dnf install ./google-chrome.rpm" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 4 — ADMINISTRAÇÃO DO SISTEMA
  // ═══════════════════════════════════════════════════════
  {
    id: "pacotes",
    title: "Gerenciamento de Pacotes (DNF)",
    icon: "📦",
    category: "Administração do Sistema",
    description: "Instale, atualize, remova e gerencie programas com DNF e RPM",
    content: [
      "O DNF (Dandified YUM) é o gerenciador de pacotes do Fedora. Com ele você instala, atualiza e remove programas de forma segura a partir dos repositórios oficiais.",
      "Pacotes RPM são o formato nativo do Fedora/Red Hat. O DNF resolve dependências automaticamente — se um programa precisa de bibliotecas, o DNF instala tudo junto.",
      "Repositórios são servidores online com pacotes. O Fedora tem repositórios oficiais (fedora e updates). RPM Fusion adiciona pacotes extras (codecs, drivers proprietários).",
      "Sempre mantenha seu sistema atualizado! Atualizações trazem correções de segurança e bugs importantes.",
    ],
    commands: [
      {
        command: "sudo dnf update",
        description: "Atualiza todos os pacotes instalados para suas versões mais recentes",
        example: "sudo dnf update -y",
      },
      {
        command: "sudo dnf install",
        description: "Instala um ou mais pacotes a partir dos repositórios",
        example: "sudo dnf install vim htop neofetch",
      },
      {
        command: "sudo dnf remove",
        description: "Remove um pacote do sistema",
        example: "sudo dnf remove pacote_antigo",
      },
      {
        command: "dnf search",
        description: "Busca pacotes por nome ou descrição nos repositórios",
        example: "dnf search editor",
      },
      {
        command: "dnf info",
        description: "Exibe informações detalhadas sobre um pacote (versão, tamanho, descrição)",
        example: "dnf info firefox",
      },
      {
        command: "dnf list installed",
        description: "Lista todos os pacotes atualmente instalados no sistema",
        example: "dnf list installed | grep python",
      },
      {
        command: "dnf provides",
        description: "Descobre qual pacote fornece um arquivo ou comando específico",
        example: "dnf provides /usr/bin/wget",
      },
      {
        command: "dnf history",
        description: "Mostra o histórico de transações do DNF (instalações, remoções, atualizações)",
        example: "dnf history\ndnf history undo 15",
      },
      {
        command: "sudo dnf autoremove",
        description: "Remove pacotes órfãos (dependências que não são mais necessárias)",
        example: "sudo dnf autoremove",
      },
      {
        command: "sudo dnf clean all",
        description: "Limpa o cache do DNF (útil para liberar espaço ou resolver problemas)",
        example: "sudo dnf clean all",
      },
      {
        command: "rpm -qa / rpm -qi",
        description: "Consulta direta a pacotes RPM. -qa lista todos, -qi mostra informações de um pacote",
        example: "rpm -qa | grep kernel\nrpm -qi firefox",
      },
      {
        command: "dnf group list / install",
        description: "Lista e instala grupos de pacotes (ex: ferramentas de desenvolvimento completas)",
        example: "dnf group list\nsudo dnf group install 'Development Tools'",
      },
    ],
    exercises: [
      { id: 1, question: "Como instalar vim e htop juntos?", answer: "sudo dnf install vim htop" },
      { id: 2, question: "Como descobrir qual pacote fornece o comando 'wget'?", answer: "dnf provides /usr/bin/wget" },
      { id: 3, question: "Qual comando remove dependências que não são mais necessárias?", answer: "sudo dnf autoremove" },
      { id: 4, question: "Como desfazer a última transação do DNF?", answer: "sudo dnf history undo last" },
      { id: 5, question: "Como instalar o grupo de pacotes 'Development Tools'?", answer: "sudo dnf group install 'Development Tools'" },
    ],
  },
  {
    id: "flatpak-rpm-fusion",
    title: "Flatpak e RPM Fusion",
    icon: "🏪",
    category: "Administração do Sistema",
    description: "Instale aplicativos Flatpak e habilite repositórios extras com RPM Fusion",
    content: [
      "O Flatpak é um sistema de distribuição de aplicativos que roda programas em sandbox (isolados do sistema). Os apps Flatpak funcionam em qualquer distribuição Linux e são atualizados independentemente.",
      "O Flathub (https://flathub.org) é o maior repositório de Flatpaks. Lá você encontra Spotify, Discord, Steam, OBS Studio, VS Code, GIMP, Blender e milhares de outros.",
      "O RPM Fusion é um repositório extra para o Fedora que contém pacotes que não podem estar nos repos oficiais por questões de licença: codecs multimídia (H.264, H.265, MP3, AAC), drivers NVIDIA proprietários, VLC, etc.",
      "Para habilitar RPM Fusion, instale os repositórios free e nonfree. Depois instale codecs com o grupo 'Multimedia'.",
    ],
    commands: [
      {
        command: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
        description: "Adiciona o repositório Flathub (se ainda não estiver configurado)",
        example: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
      },
      {
        command: "flatpak install flathub",
        description: "Instala um aplicativo Flatpak do Flathub",
        example: "flatpak install flathub com.spotify.Client\nflatpak install flathub com.discordapp.Discord",
      },
      {
        command: "flatpak list",
        description: "Lista todos os Flatpaks instalados",
        example: "flatpak list",
      },
      {
        command: "flatpak update",
        description: "Atualiza todos os Flatpaks instalados",
        example: "flatpak update",
      },
      {
        command: "flatpak uninstall",
        description: "Remove um Flatpak instalado",
        example: "flatpak uninstall com.spotify.Client",
      },
      {
        command: "sudo dnf install https://...rpmfusion-free...",
        description: "Habilita o RPM Fusion (free e nonfree) no Fedora",
        example: "sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm",
      },
      {
        command: "sudo dnf install @multimedia",
        description: "Instala codecs multimídia após habilitar RPM Fusion",
        example: "sudo dnf install @multimedia --setopt='install_weak_deps=False' --exclude=PackageKit-gstreamer-plugin",
      },
    ],
    exercises: [
      { id: 1, question: "Como adicionar o repositório Flathub?", answer: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo" },
      { id: 2, question: "Como listar todos os Flatpaks instalados?", answer: "flatpak list" },
      { id: 3, question: "Para que serve o RPM Fusion?", answer: "Fornece pacotes que não podem estar nos repos oficiais do Fedora por questões de licença, como codecs multimídia e drivers proprietários." },
      { id: 4, question: "Como atualizar todos os Flatpaks?", answer: "flatpak update" },
    ],
  },
  {
    id: "processos",
    title: "Processos e Monitoramento",
    icon: "⚙️",
    category: "Administração do Sistema",
    description: "Gerencie processos, monitore recursos do sistema (CPU, RAM, disco)",
    content: [
      "Todo programa em execução no Linux é um processo com um PID (Process ID) único. Processos podem rodar em foreground (primeiro plano) ou background (segundo plano).",
      "Use '&' no final do comando para rodar em background. Ctrl+Z pausa um processo em foreground. 'bg' retoma em background e 'fg' traz para foreground.",
      "Sinais são mensagens enviadas a processos. SIGTERM (15) pede encerramento educado. SIGKILL (9) força o encerramento. SIGHUP (1) reinicia o processo.",
    ],
    commands: [
      {
        command: "ps aux",
        description: "Lista todos os processos de todos os usuários com detalhes",
        example: "ps aux",
        flags: [
          { flag: "a", description: "Todos os usuários" },
          { flag: "u", description: "Formato detalhado com dono" },
          { flag: "x", description: "Inclui processos sem terminal" },
        ],
      },
      {
        command: "top / htop",
        description: "Monitor de processos em tempo real (htop é mais visual — instale com dnf install htop)",
        example: "htop",
      },
      {
        command: "kill / killall",
        description: "kill envia sinal por PID; killall envia por nome do processo",
        example: "kill 1234\nkill -9 1234\nkillall firefox",
        flags: [
          { flag: "-9", description: "SIGKILL — força encerramento imediato" },
          { flag: "-15", description: "SIGTERM — encerramento educado (padrão)" },
        ],
      },
      {
        command: "bg / fg / jobs",
        description: "bg retoma em background; fg traz para foreground; jobs lista processos do shell",
        example: "bg %1\nfg %1\njobs",
      },
      {
        command: "pgrep / pkill",
        description: "pgrep busca PIDs por nome; pkill envia sinais por nome",
        example: "pgrep firefox\npkill -9 firefox",
      },
      {
        command: "df -h",
        description: "Mostra o uso de espaço em disco das partições montadas (human-readable)",
        example: "df -h",
        output: "Filesystem  Size  Used Avail Use% Mounted on\n/dev/sda1   50G   22G   26G  46% /",
      },
      {
        command: "du -sh",
        description: "Mostra o tamanho de um diretório específico",
        example: "du -sh ~/Documents",
        flags: [
          { flag: "-s", description: "Mostra apenas o total" },
          { flag: "-h", description: "Tamanhos legíveis" },
        ],
      },
      {
        command: "free -h",
        description: "Exibe uso de memória RAM e swap em formato legível",
        example: "free -h",
      },
      {
        command: "lscpu",
        description: "Mostra informações detalhadas do processador",
        example: "lscpu",
      },
      {
        command: "lsblk",
        description: "Lista dispositivos de bloco (discos, partições, pendrives)",
        example: "lsblk",
      },
      {
        command: "uptime",
        description: "Mostra tempo de atividade, usuários logados e carga média do sistema",
        example: "uptime",
      },
      {
        command: "neofetch",
        description: "Exibe informações do sistema de forma visual e bonita (instale: dnf install neofetch)",
        example: "neofetch",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os processos do sistema com detalhes?", answer: "ps aux" },
      { id: 2, question: "Como forçar o encerramento de um processo com PID 5678?", answer: "kill -9 5678" },
      { id: 3, question: "Qual comando mostra o uso de disco em formato legível?", answer: "df -h" },
      { id: 4, question: "Como verificar o uso de memória RAM?", answer: "free -h" },
      { id: 5, question: "Como encontrar o PID de um processo pelo nome?", answer: "pgrep nome_do_processo" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 5 — REDE E SEGURANÇA
  // ═══════════════════════════════════════════════════════
  {
    id: "rede",
    title: "Rede e Conectividade",
    icon: "🌐",
    category: "Rede e Segurança",
    description: "Configure redes, diagnostique problemas e use o NetworkManager",
    content: [
      "O Fedora usa o NetworkManager para gerenciar conexões de rede. Você pode usar tanto a interface gráfica (GNOME Settings) quanto o terminal (nmcli) para configurar redes.",
      "Conceitos importantes: IP (endereço do dispositivo na rede), máscara de sub-rede (define o tamanho da rede), gateway (roteador que conecta a redes externas), DNS (traduz nomes como google.com para IPs).",
      "O arquivo /etc/resolv.conf contém os servidores DNS. O arquivo /etc/hosts permite mapear nomes para IPs manualmente (útil para testes).",
    ],
    commands: [
      {
        command: "ip addr",
        description: "Exibe as interfaces de rede e seus endereços IP",
        example: "ip addr show",
      },
      {
        command: "ip route",
        description: "Mostra a tabela de rotas (gateway padrão)",
        example: "ip route show",
        output: "default via 192.168.1.1 dev wlp3s0",
      },
      {
        command: "ping",
        description: "Testa a conectividade com outro host enviando pacotes ICMP",
        example: "ping -c 4 google.com",
        flags: [
          { flag: "-c N", description: "Envia apenas N pacotes" },
          { flag: "-i N", description: "Intervalo de N segundos entre pacotes" },
        ],
      },
      {
        command: "traceroute / tracepath",
        description: "Mostra o caminho (saltos) que os pacotes fazem até o destino",
        example: "tracepath google.com",
      },
      {
        command: "nslookup / dig",
        description: "Consulta DNS — resolve nomes para IPs e vice-versa",
        example: "nslookup google.com\ndig google.com",
      },
      {
        command: "curl",
        description: "Transfere dados de/para URLs. Útil para testar APIs e baixar arquivos",
        example: "curl -I https://fedoraproject.org",
        flags: [
          { flag: "-I", description: "Mostra apenas os headers HTTP" },
          { flag: "-o arquivo", description: "Salva a saída em um arquivo" },
          { flag: "-O", description: "Salva com o nome original" },
        ],
      },
      {
        command: "wget",
        description: "Baixa arquivos da internet",
        example: "wget https://exemplo.com/arquivo.tar.gz",
      },
      {
        command: "ss -tulnp",
        description: "Mostra portas e conexões de rede ativas",
        example: "ss -tulnp",
        flags: [
          { flag: "-t", description: "TCP" },
          { flag: "-u", description: "UDP" },
          { flag: "-l", description: "Apenas listening" },
          { flag: "-n", description: "Numérico" },
          { flag: "-p", description: "Mostra o processo" },
        ],
      },
      {
        command: "nmcli",
        description: "Interface de linha de comando do NetworkManager",
        example: "nmcli device status\nnmcli connection show\nnmcli device wifi list",
        flags: [
          { flag: "device status", description: "Status das interfaces de rede" },
          { flag: "connection show", description: "Conexões configuradas" },
          { flag: "device wifi list", description: "Lista redes Wi-Fi disponíveis" },
          { flag: "device wifi connect SSID password SENHA", description: "Conecta a uma rede Wi-Fi" },
        ],
      },
      {
        command: "cat /etc/resolv.conf",
        description: "Mostra os servidores DNS configurados",
        example: "cat /etc/resolv.conf",
      },
    ],
    exercises: [
      { id: 1, question: "Como testar conectividade com o Google enviando 3 pacotes?", answer: "ping -c 3 google.com" },
      { id: 2, question: "Qual comando mostra o endereço IP das interfaces de rede?", answer: "ip addr" },
      { id: 3, question: "Como ver quais portas estão em escuta no sistema?", answer: "ss -tulnp" },
      { id: 4, question: "Como listar redes Wi-Fi disponíveis pelo terminal?", answer: "nmcli device wifi list" },
      { id: 5, question: "Qual comando mostra o gateway padrão?", answer: "ip route" },
    ],
  },
  {
    id: "firewall-seguranca",
    title: "Firewall e Segurança",
    icon: "🛡️",
    category: "Rede e Segurança",
    description: "Firewalld, SELinux e boas práticas de segurança no Fedora",
    content: [
      "O Fedora vem com firewalld (firewall dinâmico) e SELinux (Security-Enhanced Linux) habilitados por padrão. Juntos, eles formam uma robusta camada de segurança.",
      "O firewalld usa o conceito de 'zones' (zonas). A zona padrão é 'FedoraWorkstation'. Cada zona define quais serviços e portas são permitidos. Você pode adicionar/remover serviços e portas por zona.",
      "O SELinux é um módulo de segurança do kernel que controla o acesso de processos a arquivos, portas e outros recursos. Ele opera em 3 modos: Enforcing (ativo e bloqueia), Permissive (apenas alerta sem bloquear), Disabled (desativado — NÃO recomendado).",
      "Dica: Se algo parar de funcionar misteriosamente, verifique se o SELinux está bloqueando com 'ausearch -m avc -ts recent'. Nunca desative o SELinux — use Permissive temporariamente para diagnosticar.",
    ],
    commands: [
      {
        command: "sudo firewall-cmd --state",
        description: "Verifica se o firewall está ativo",
        example: "sudo firewall-cmd --state",
        output: "running",
      },
      {
        command: "sudo firewall-cmd --list-all",
        description: "Lista todas as regras da zona ativa (serviços, portas, protocolos)",
        example: "sudo firewall-cmd --list-all",
      },
      {
        command: "sudo firewall-cmd --add-service=http --permanent",
        description: "Permite o serviço HTTP (porta 80) permanentemente",
        example: "sudo firewall-cmd --add-service=http --permanent\nsudo firewall-cmd --reload",
      },
      {
        command: "sudo firewall-cmd --add-port=8080/tcp --permanent",
        description: "Abre uma porta específica permanentemente",
        example: "sudo firewall-cmd --add-port=8080/tcp --permanent\nsudo firewall-cmd --reload",
      },
      {
        command: "sudo firewall-cmd --reload",
        description: "Recarrega as regras do firewall (necessário após alterações permanentes)",
        example: "sudo firewall-cmd --reload",
      },
      {
        command: "getenforce / sestatus",
        description: "Verifica o modo atual do SELinux",
        example: "getenforce\nsestatus",
        output: "Enforcing",
      },
      {
        command: "sudo setenforce 0",
        description: "Muda temporariamente o SELinux para modo Permissive (volta ao reiniciar)",
        example: "sudo setenforce 0",
      },
      {
        command: "sudo ausearch -m avc -ts recent",
        description: "Busca bloqueios recentes do SELinux nos logs de auditoria",
        example: "sudo ausearch -m avc -ts recent",
      },
    ],
    exercises: [
      { id: 1, question: "Como verificar se o firewall está ativo?", answer: "sudo firewall-cmd --state" },
      { id: 2, question: "Como permitir o serviço SSH permanentemente no firewall?", answer: "sudo firewall-cmd --add-service=ssh --permanent && sudo firewall-cmd --reload" },
      { id: 3, question: "Qual comando verifica o modo atual do SELinux?", answer: "getenforce" },
      { id: 4, question: "Quais são os 3 modos do SELinux?", answer: "Enforcing (bloqueia), Permissive (alerta sem bloquear) e Disabled (desativado)" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 6 — SYSTEMD E SERVIÇOS
  // ═══════════════════════════════════════════════════════
  {
    id: "systemd",
    title: "Systemd e Serviços",
    icon: "🔧",
    category: "Systemd e Serviços",
    description: "Gerencie serviços, targets e o processo de boot com systemd",
    content: [
      "O systemd é o sistema de inicialização (init system) do Fedora. Ele é o primeiro processo (PID 1) a ser executado após o kernel carregar. Gerencia serviços, montagem de filesystems, rede, logs e muito mais.",
      "Serviços (units) são controlados pelo comando 'systemctl'. Você pode iniciar, parar, reiniciar, habilitar (no boot) e verificar o status de qualquer serviço.",
      "Targets do systemd substituem os runlevels do SysVinit. Os principais: multi-user.target (modo texto, sem GUI), graphical.target (com GUI — padrão no Workstation), rescue.target (modo de recuperação), emergency.target (mínimo para reparo).",
      "O journalctl é o sistema de logs do systemd. Todos os logs do sistema ficam centralizados e podem ser filtrados por serviço, tempo, prioridade e mais.",
    ],
    commands: [
      {
        command: "systemctl status",
        description: "Mostra o status de um serviço (ativo, inativo, logs recentes)",
        example: "systemctl status sshd\nsystemctl status NetworkManager",
      },
      {
        command: "sudo systemctl start/stop/restart",
        description: "Inicia, para ou reinicia um serviço imediatamente",
        example: "sudo systemctl start sshd\nsudo systemctl stop firewalld\nsudo systemctl restart httpd",
      },
      {
        command: "sudo systemctl enable/disable",
        description: "Habilita ou desabilita um serviço para iniciar automaticamente no boot",
        example: "sudo systemctl enable sshd\nsudo systemctl disable bluetooth",
      },
      {
        command: "systemctl list-units --type=service",
        description: "Lista todos os serviços carregados e seus estados",
        example: "systemctl list-units --type=service --state=running",
      },
      {
        command: "systemctl get-default",
        description: "Mostra o target padrão (graphical.target ou multi-user.target)",
        example: "systemctl get-default",
        output: "graphical.target",
      },
      {
        command: "sudo systemctl set-default",
        description: "Altera o target padrão de inicialização",
        example: "sudo systemctl set-default multi-user.target",
      },
      {
        command: "journalctl",
        description: "Visualiza os logs do sistema (centralizados pelo systemd-journald)",
        example: "journalctl -xe",
        flags: [
          { flag: "-u sshd", description: "Logs de um serviço específico" },
          { flag: "-f", description: "Acompanha em tempo real (como tail -f)" },
          { flag: "-b", description: "Logs desde o último boot" },
          { flag: "-p err", description: "Filtra por prioridade (emerg, alert, crit, err, warning, info, debug)" },
          { flag: "--since '1 hour ago'", description: "Logs da última hora" },
          { flag: "-xe", description: "Logs recentes com explicações" },
        ],
      },
      {
        command: "systemctl is-enabled / is-active",
        description: "Verifica se um serviço está habilitado no boot ou se está ativo agora",
        example: "systemctl is-enabled sshd\nsystemctl is-active firewalld",
      },
    ],
    exercises: [
      { id: 1, question: "Como verificar o status do serviço SSH?", answer: "systemctl status sshd" },
      { id: 2, question: "Como habilitar o SSH para iniciar automaticamente no boot?", answer: "sudo systemctl enable sshd" },
      { id: 3, question: "Como ver os logs do serviço httpd em tempo real?", answer: "journalctl -u httpd -f" },
      { id: 4, question: "Qual target equivale ao modo texto (sem interface gráfica)?", answer: "multi-user.target" },
      { id: 5, question: "Como ver logs de erro desde o último boot?", answer: "journalctl -b -p err" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 7 — PRODUTIVIDADE E SHELL
  // ═══════════════════════════════════════════════════════
  {
    id: "pipes-redirecionamento",
    title: "Pipes e Redirecionamento",
    icon: "🔗",
    category: "Produtividade e Shell",
    description: "Combine comandos com pipes, redirecione saídas e filtre dados",
    content: [
      "O verdadeiro poder do terminal Linux está em combinar comandos. Pipes (|) enviam a saída de um comando como entrada de outro, criando pipelines poderosos.",
      "Redirecionamento: > envia saída para arquivo (sobrescreve), >> adiciona ao final (append), < lê entrada de arquivo, 2> redireciona erros, &> redireciona tudo.",
      "Filosofia Unix: cada comando faz uma coisa bem feita. Combinados via pipes, resolvem problemas complexos com elegância.",
    ],
    commands: [
      {
        command: "| (pipe)",
        description: "Envia a saída de um comando como entrada do próximo",
        example: "ls -la | grep '.txt'\nps aux | grep firefox\ncat log.txt | sort | uniq -c | sort -rn",
      },
      {
        command: "> e >>",
        description: "> sobrescreve arquivo, >> adiciona ao final",
        example: "echo 'Hello' > arquivo.txt\necho 'World' >> arquivo.txt\nls -la > listagem.txt",
      },
      {
        command: "2> e &>",
        description: "2> redireciona erros (stderr), &> redireciona tudo (stdout + stderr)",
        example: "find / -name '*.conf' 2>/dev/null\ncomando &> log_completo.txt",
      },
      {
        command: "grep",
        description: "Filtra linhas que contêm um padrão (texto ou regex)",
        example: "grep -i 'erro' /var/log/messages",
        flags: [
          { flag: "-i", description: "Ignora maiúsculas/minúsculas" },
          { flag: "-r", description: "Busca recursivamente em diretórios" },
          { flag: "-n", description: "Mostra o número da linha" },
          { flag: "-c", description: "Conta ocorrências" },
          { flag: "-v", description: "Mostra linhas que NÃO contêm o padrão" },
          { flag: "-E", description: "Usa regex estendida (egrep)" },
        ],
      },
      {
        command: "wc",
        description: "Conta linhas, palavras e caracteres",
        example: "wc -l arquivo.txt",
        flags: [
          { flag: "-l", description: "Conta linhas" },
          { flag: "-w", description: "Conta palavras" },
          { flag: "-c", description: "Conta bytes" },
        ],
      },
      {
        command: "sort",
        description: "Ordena linhas de um arquivo ou stream",
        example: "sort nomes.txt",
        flags: [
          { flag: "-r", description: "Ordena invertido (decrescente)" },
          { flag: "-n", description: "Ordena numericamente" },
          { flag: "-k 2", description: "Ordena pela 2ª coluna" },
        ],
      },
      {
        command: "uniq",
        description: "Remove linhas duplicadas consecutivas (use após sort)",
        example: "sort dados.txt | uniq -c",
        flags: [
          { flag: "-c", description: "Conta repetições" },
          { flag: "-d", description: "Mostra apenas duplicadas" },
        ],
      },
      {
        command: "cut",
        description: "Extrai colunas/campos de texto",
        example: "cut -d':' -f1 /etc/passwd",
        flags: [
          { flag: "-d", description: "Define o delimitador" },
          { flag: "-f", description: "Seleciona os campos" },
        ],
      },
      {
        command: "awk",
        description: "Linguagem de processamento de texto — extrai e manipula dados por colunas",
        example: "awk '{print $1, $3}' arquivo.txt\ndf -h | awk '{print $1, $5}'",
      },
      {
        command: "sed",
        description: "Editor de stream — substitui texto via regex",
        example: "sed 's/antigo/novo/g' arquivo.txt\nsed -i 's/erro/corrigido/g' arquivo.txt",
      },
      {
        command: "tee",
        description: "Lê da entrada padrão e escreve tanto na tela quanto em arquivo",
        example: "ls -la | tee listagem.txt",
      },
      {
        command: "xargs",
        description: "Constrói e executa comandos a partir da entrada padrão",
        example: "find . -name '*.log' | xargs rm\ncat urls.txt | xargs wget",
      },
    ],
    exercises: [
      { id: 1, question: "Como contar quantos arquivos .txt existem no diretório atual?", answer: "ls *.txt | wc -l" },
      { id: 2, question: "Salve a lista de processos em 'processos.txt'", answer: "ps aux > processos.txt" },
      { id: 3, question: "Busque 'error' (ignorando maiúsculas) recursivamente em /var/log/", answer: "grep -ri 'error' /var/log/" },
      { id: 4, question: "Como listar apenas os nomes de usuários do sistema (primeiro campo de /etc/passwd)?", answer: "cut -d':' -f1 /etc/passwd" },
      { id: 5, question: "Substitua todas as ocorrências de 'http' por 'https' em um arquivo", answer: "sed -i 's/http/https/g' arquivo.txt" },
    ],
  },
  {
    id: "atalhos-produtividade",
    title: "Atalhos e Produtividade",
    icon: "⚡",
    category: "Produtividade e Shell",
    description: "History, alias, variáveis de ambiente e atalhos do Bash",
    content: [
      "Dominar atalhos e truques do Bash transforma sua eficiência no terminal. Histórico, alias e variáveis de ambiente são fundamentais.",
      "O arquivo ~/.bashrc é executado toda vez que um terminal é aberto. Use-o para definir alias, variáveis e configurações persistentes. Após editar, execute 'source ~/.bashrc' para aplicar sem fechar o terminal.",
      "Variáveis de ambiente são valores acessíveis por todos os processos. As mais importantes: $HOME (diretório home), $PATH (onde o sistema busca comandos), $USER (usuário atual), $SHELL (shell em uso).",
    ],
    commands: [
      {
        command: "history",
        description: "Mostra o histórico de comandos. !N repete o comando N. !! repete o último",
        example: "history | tail -20\n!55\n!!",
      },
      {
        command: "alias",
        description: "Cria atalhos para comandos longos (adicione ao ~/.bashrc para persistir)",
        example: "alias ll='ls -lah'\nalias update='sudo dnf update -y'\nalias cls='clear'",
      },
      {
        command: "export",
        description: "Define variáveis de ambiente (adicione ao ~/.bashrc para persistir)",
        example: "export EDITOR=vim\nexport PATH=$PATH:/usr/local/bin",
      },
      {
        command: "env / printenv",
        description: "Lista todas as variáveis de ambiente",
        example: "env\nprintenv HOME",
      },
      {
        command: "source / .",
        description: "Recarrega um arquivo de configuração (aplica mudanças do .bashrc sem fechar o terminal)",
        example: "source ~/.bashrc",
      },
      {
        command: "tar",
        description: "Empacota e desempacota arquivos. O tar NÃO compacta sozinho — ele agrupa arquivos. A compactação vem das flags -z (gzip), -j (bzip2), -J (xz)",
        example: "tar -czf backup.tar.gz pasta/\ntar -xzf backup.tar.gz\ntar -cjf backup.tar.bz2 pasta/\ntar -xjf backup.tar.bz2\ntar -cJf backup.tar.xz pasta/\ntar -xJf backup.tar.xz\ntar -tf arquivo.tar.gz",
        output: "# -czf = Cria + gzip + nome do arquivo → gera .tar.gz\n# -xzf = eXtrai + gzip + arquivo → descompacta .tar.gz\n# -cjf = Cria + bzip2 → gera .tar.bz2\n# -xjf = eXtrai + bzip2 → descompacta .tar.bz2\n# -cJf = Cria + xz → gera .tar.xz (melhor compactação!)\n# -xJf = eXtrai + xz → descompacta .tar.xz\n# -tf = lista conteúdo sem extrair (para ver o que tem dentro)",
        flags: [
          { flag: "-c", description: "Cria (Create) um novo arquivo tar" },
          { flag: "-x", description: "Extrai (eXtract) um arquivo tar" },
          { flag: "-z", description: "Usa gzip (.tar.gz ou .tgz)" },
          { flag: "-j", description: "Usa bzip2 (.tar.bz2)" },
          { flag: "-J", description: "Usa xz (.tar.xz) — melhor taxa de compactação" },
          { flag: "-f", description: "Especifica o nome do arquivo (SEMPRE por último!)" },
          { flag: "-v", description: "Modo verboso — mostra os arquivos sendo processados" },
          { flag: "-t", description: "Lista o conteúdo sem extrair (para espiar o que tem dentro)" },
          { flag: "-C /destino", description: "Extrai para um diretório específico" },
        ],
      },
      {
        command: "zip / unzip",
        description: "Compacta e descompacta arquivos .zip (formato compatível com Windows)",
        example: "zip -r fotos.zip pasta_fotos/\nunzip fotos.zip\nunzip fotos.zip -d /tmp/destino\nunzip -l fotos.zip",
        output: "# zip -r = compacta pasta inteira (recursivo)\n# unzip = descompacta no diretório atual\n# -d = descompacta em outro lugar\n# -l = lista conteúdo sem extrair",
      },
      {
        command: "gzip / gunzip",
        description: "Compacta/descompacta arquivos individuais em .gz (substitui o original!)",
        example: "gzip arquivo.txt\ngunzip arquivo.txt.gz\ngzip -k arquivo.txt",
        output: "# gzip arquivo.txt → cria arquivo.txt.gz e APAGA o original!\n# gunzip → descompacta e apaga o .gz\n# gzip -k → mantém (-k = keep) o arquivo original",
      },
      {
        command: "bzip2 / bunzip2",
        description: "Similar ao gzip, mas com melhor compactação (.bz2)",
        example: "bzip2 arquivo.txt\nbunzip2 arquivo.txt.bz2",
      },
      {
        command: "xz / unxz",
        description: "Melhor compactação disponível (.xz), mas mais lento",
        example: "xz arquivo.txt\nunxz arquivo.txt.xz\nxz -k arquivo.txt",
      },
      {
        command: "7z (p7zip)",
        description: "Compacta/descompacta .7z e outros formatos. Instale: sudo dnf install p7zip p7zip-plugins",
        example: "7z a backup.7z pasta/\n7z x backup.7z\n7z l backup.7z",
        output: "# a = adicionar (compactar)\n# x = extrair (com diretórios)\n# l = listar conteúdo",
      },
      {
        command: "ssh",
        description: "Conecta remotamente a outro computador via SSH (Secure Shell)",
        example: "ssh usuario@192.168.1.100\nssh -p 2222 usuario@servidor.com",
      },
      {
        command: "scp",
        description: "Copia arquivos entre computadores via SSH",
        example: "scp arquivo.txt usuario@servidor:/home/usuario/\nscp usuario@servidor:/tmp/log.txt .",
      },
      {
        command: "rsync",
        description: "Sincroniza arquivos/diretórios (local ou remoto). Só copia o que mudou!",
        example: "rsync -avz pasta/ usuario@servidor:/backup/",
        flags: [
          { flag: "-a", description: "Modo archive (preserva tudo)" },
          { flag: "-v", description: "Verboso" },
          { flag: "-z", description: "Comprime dados durante transferência" },
          { flag: "--delete", description: "Remove no destino o que não existe na origem" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Crie um alias chamado 'atualizar' para 'sudo dnf update -y'", answer: "alias atualizar='sudo dnf update -y'" },
      { id: 2, question: "Como compactar a pasta 'projeto' em 'projeto.tar.gz'?", answer: "tar -czf projeto.tar.gz projeto/" },
      { id: 3, question: "Como conectar via SSH ao servidor 192.168.1.50 com o usuário 'admin'?", answer: "ssh admin@192.168.1.50" },
      { id: 4, question: "Como aplicar mudanças do .bashrc sem fechar o terminal?", answer: "source ~/.bashrc" },
      { id: 5, question: "Qual variável de ambiente contém os diretórios onde o sistema busca comandos?", answer: "$PATH" },
      { id: 6, question: "Como descompactar um arquivo .tar.xz?", answer: "tar -xJf arquivo.tar.xz" },
      { id: 7, question: "Como ver o conteúdo de um .tar.gz sem extrair?", answer: "tar -tf arquivo.tar.gz" },
      { id: 8, question: "Como descompactar um .7z?", answer: "7z x arquivo.7z (precisa instalar p7zip: sudo dnf install p7zip)" },
      { id: 9, question: "Qual a diferença entre .tar.gz, .tar.bz2 e .tar.xz?", answer: ".tar.gz (gzip): mais rápido, compactação razoável. .tar.bz2 (bzip2): mais lento, melhor compactação. .tar.xz: mais lento ainda, melhor compactação de todos." },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 8 — SHELL SCRIPTING
  // ═══════════════════════════════════════════════════════
  {
    id: "shell-scripting",
    title: "Shell Scripting Básico",
    icon: "📜",
    category: "Shell Scripting",
    description: "Automatize tarefas com scripts Bash: variáveis, condicionais, loops e funções",
    content: [
      "Shell scripts são arquivos de texto com sequências de comandos que o Bash executa automaticamente. Permitem automatizar tarefas repetitivas, criar ferramentas personalizadas e administrar sistemas.",
      "Todo script começa com o shebang: #!/bin/bash — isso indica ao sistema qual interpretador usar. Salve com extensão .sh e dê permissão de execução: chmod +x script.sh. Execute com: ./script.sh",
      "Variáveis: nome=valor (sem espaços!). Acesse com $nome ou ${nome}. $1, $2, etc. são argumentos passados ao script. $# é o número de argumentos. $? é o código de retorno do último comando (0 = sucesso).",
      "Estruturas de controle: if/elif/else/fi para condicionais. for/while/until para loops. case/esac para múltiplas opções. Funções: function nome() { comandos; }",
      "Condições de teste: [ -f arquivo ] testa se arquivo existe. [ -d dir ] testa se diretório existe. [ -z string ] testa se string é vazia. [ $a -eq $b ] compara números.",
    ],
    commands: [
      {
        command: "#!/bin/bash",
        description: "Shebang — primeira linha de todo script, indica o interpretador",
        example: "#!/bin/bash\necho 'Meu primeiro script!'",
      },
      {
        command: "chmod +x script.sh && ./script.sh",
        description: "Dá permissão de execução e roda o script",
        example: "chmod +x meu_script.sh\n./meu_script.sh",
      },
      {
        command: "read",
        description: "Lê entrada do usuário e armazena em variável",
        example: "echo 'Qual seu nome?'\nread nome\necho \"Olá, $nome!\"",
      },
      {
        command: "if [ condição ]; then ... fi",
        description: "Estrutura condicional (if/elif/else)",
        example: "if [ -f /etc/fedora-release ]; then\n  echo 'É Fedora!'\nelse\n  echo 'Não é Fedora'\nfi",
      },
      {
        command: "for ... in ... ; do ... done",
        description: "Loop for — itera sobre uma lista",
        example: "for i in 1 2 3 4 5; do\n  echo \"Número: $i\"\ndone",
      },
      {
        command: "while [ condição ]; do ... done",
        description: "Loop while — repete enquanto condição for verdadeira",
        example: "count=1\nwhile [ $count -le 5 ]; do\n  echo \"Contagem: $count\"\n  ((count++))\ndone",
      },
      {
        command: "case $var in ... esac",
        description: "Seleção múltipla (switch/case)",
        example: "case $1 in\n  start) echo 'Iniciando...' ;;\n  stop) echo 'Parando...' ;;\n  *) echo 'Uso: script {start|stop}' ;;\nesac",
      },
      {
        command: "function nome() { ... }",
        description: "Define uma função reutilizável no script",
        example: "function saudacao() {\n  echo \"Olá, $1!\"\n}\nsaudacao 'Estudante'",
      },
      {
        command: "test / [ ]",
        description: "Avalia condições. Flags: -f (arquivo existe), -d (diretório), -eq (igual), -gt (maior)",
        example: "[ -f /etc/passwd ] && echo 'Existe'",
      },
      {
        command: "crontab -e",
        description: "Edita tarefas agendadas (cron jobs) — executa scripts automaticamente em horários definidos",
        example: "crontab -e\n# Formato: minuto hora dia_mes mes dia_semana comando\n# Backup diário às 2h da manhã:\n0 2 * * * /home/estudante/backup.sh",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a primeira linha de todo script Bash?", answer: "#!/bin/bash" },
      { id: 2, question: "Como dar permissão de execução a um script?", answer: "chmod +x script.sh" },
      { id: 3, question: "Como acessar o primeiro argumento passado a um script?", answer: "$1" },
      { id: 4, question: "Escreva um for que imprima os números de 1 a 5", answer: "for i in 1 2 3 4 5; do echo $i; done" },
      { id: 5, question: "Como testar se um arquivo existe em um script Bash?", answer: "if [ -f arquivo ]; then echo 'existe'; fi", hint: "Use a flag -f dentro de colchetes" },
      { id: 6, question: "O que faz o crontab?", answer: "Agenda tarefas para execução automática em horários/datas definidos" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 9 — ARMAZENAMENTO
  // ═══════════════════════════════════════════════════════
  {
    id: "armazenamento",
    title: "Armazenamento e Partições",
    icon: "💾",
    category: "Armazenamento",
    description: "Discos, partições, filesystems, montagem e LVM",
    content: [
      "No Linux, dispositivos de armazenamento aparecem em /dev. Discos são nomeados como /dev/sda, /dev/sdb (SATA/USB) ou /dev/nvme0n1 (NVMe). Partições são /dev/sda1, /dev/sda2, etc.",
      "Filesystems (sistemas de arquivos) organizam como os dados são armazenados no disco. O Fedora usa Btrfs por padrão. Outros comuns: ext4 (clássico e confiável), XFS (servidores), FAT32/NTFS (compatibilidade com Windows), swap (memória virtual).",
      "Montar um filesystem significa torná-lo acessível no sistema de diretórios. O fstab (/etc/fstab) define montagens automáticas no boot. O systemd também gerencia montagens.",
      "LVM (Logical Volume Manager) permite criar volumes lógicos flexíveis que podem ser redimensionados sem desligar o sistema. O Fedora usa LVM por padrão no particionamento automático com Btrfs.",
    ],
    commands: [
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco com suas partições e pontos de montagem",
        example: "lsblk",
      },
      {
        command: "fdisk -l",
        description: "Lista partições detalhadas de todos os discos",
        example: "sudo fdisk -l",
      },
      {
        command: "blkid",
        description: "Mostra UUID e tipo de filesystem de cada partição",
        example: "sudo blkid",
      },
      {
        command: "mount / umount",
        description: "Monta e desmonta filesystems",
        example: "sudo mount /dev/sdb1 /mnt/pendrive\nsudo umount /mnt/pendrive",
      },
      {
        command: "cat /etc/fstab",
        description: "Mostra as montagens automáticas configuradas para o boot",
        example: "cat /etc/fstab",
      },
      {
        command: "mkfs",
        description: "Formata uma partição com um filesystem específico",
        example: "sudo mkfs.ext4 /dev/sdb1\nsudo mkfs.btrfs /dev/sdb1",
      },
      {
        command: "df -h / df -T",
        description: "Mostra uso de disco. -T mostra o tipo de filesystem",
        example: "df -hT",
      },
      {
        command: "btrfs filesystem show",
        description: "Mostra informações do filesystem Btrfs",
        example: "sudo btrfs filesystem show",
      },
      {
        command: "btrfs subvolume list /",
        description: "Lista subvolumes Btrfs (snapshots, home, etc.)",
        example: "sudo btrfs subvolume list /",
      },
    ],
    exercises: [
      { id: 1, question: "Qual comando lista todos os dispositivos de bloco?", answer: "lsblk" },
      { id: 2, question: "Como montar um pendrive /dev/sdb1 em /mnt/usb?", answer: "sudo mount /dev/sdb1 /mnt/usb" },
      { id: 3, question: "Qual arquivo define as montagens automáticas no boot?", answer: "/etc/fstab" },
      { id: 4, question: "Qual filesystem o Fedora usa por padrão?", answer: "Btrfs" },
      { id: 5, question: "Como ver o tipo de filesystem de cada partição montada?", answer: "df -T" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 10 — PREPARAÇÃO PARA A PROVA
  // ═══════════════════════════════════════════════════════
  {
    id: "revisao-prova",
    title: "Revisão para a Prova",
    icon: "📝",
    category: "Preparação para a Prova",
    description: "Resumo dos comandos mais cobrados e simulado de exercícios",
    content: [
      "Esta seção reúne os comandos e conceitos mais importantes para a prova. Revise cada um e pratique no terminal!",
      "**Teoria essencial:** Linux é o kernel, GNU são as ferramentas. Fedora é uma distribuição com DNF, systemd, Btrfs e GNOME. Workstation = desktop, Server = servidor sem GUI, CoreOS = containers, Silverblue = imutável.",
      "**Permissões:** rwx = 421. chmod 755 = dono faz tudo, outros leem e executam. chmod 644 = dono lê e escreve, outros só leem. sudo = executar como root.",
      "**Gerenciamento:** dnf install/remove/update para pacotes. systemctl start/stop/enable/status para serviços. firewall-cmd para firewall. SELinux: getenforce para verificar modo.",
      "**Navegação:** pwd, ls, cd, find, grep. Pipes (|) combinam comandos. > redireciona saída. >> adiciona ao arquivo.",
      "**Processos:** ps aux, kill -9 PID, top/htop. df -h para disco, free -h para RAM.",
      "Dica final: pratique todos os comandos no terminal. A prova cobra execução prática!",
    ],
    commands: [
      {
        command: "Resumo: Informações do Sistema",
        description: "uname -a | cat /etc/fedora-release | hostnamectl | whoami | hostname | uptime | date",
        example: "uname -a\ncat /etc/fedora-release\nhostnamectl\nwhoami\nuptime",
      },
      {
        command: "Resumo: Navegação",
        description: "pwd | ls -la | cd | find | locate | tree",
        example: "pwd\nls -lah\ncd ~/Documents\nfind /home -name '*.txt'",
      },
      {
        command: "Resumo: Arquivos",
        description: "touch | mkdir -p | cp -r | mv | rm -rf | cat | less | head | tail -f | nano | vim",
        example: "mkdir -p projeto/src\ncp -r pasta backup\nrm -rf lixo/",
      },
      {
        command: "Resumo: Permissões",
        description: "chmod 755 | chown user:group | sudo | useradd -m | passwd | groups | id",
        example: "chmod 755 script.sh\nsudo chown user:user arquivo\nsudo useradd -m -G wheel aluno",
      },
      {
        command: "Resumo: Pacotes",
        description: "dnf install | dnf remove | dnf update | dnf search | dnf info | dnf autoremove",
        example: "sudo dnf install vim\nsudo dnf update -y\ndnf search editor",
      },
      {
        command: "Resumo: Processos e Recursos",
        description: "ps aux | kill -9 | htop | df -h | free -h | du -sh | lsblk",
        example: "ps aux | grep firefox\nkill -9 1234\ndf -h\nfree -h",
      },
      {
        command: "Resumo: Rede",
        description: "ip addr | ping -c 4 | ss -tulnp | nmcli | curl | wget",
        example: "ip addr\nping -c 4 google.com\nss -tulnp\nnmcli device wifi list",
      },
      {
        command: "Resumo: Serviços",
        description: "systemctl status/start/stop/enable/disable | journalctl -u | systemctl get-default",
        example: "systemctl status sshd\nsudo systemctl enable sshd\njournalctl -u sshd -f",
      },
    ],
    exercises: [
      { id: 1, question: "Qual a diferença entre Linux e GNU/Linux?", answer: "Linux é o kernel. GNU/Linux é o sistema completo (kernel + ferramentas GNU)." },
      { id: 2, question: "Liste as 4 edições principais do Fedora e para que servem", answer: "Workstation (desktop/GNOME), Server (servidores), CoreOS (containers), IoT (dispositivos embarcados)" },
      { id: 3, question: "Como listar todos os arquivos (incluindo ocultos) com permissões e tamanhos legíveis?", answer: "ls -lah" },
      { id: 4, question: "Qual comando instala o pacote 'vim' no Fedora?", answer: "sudo dnf install vim" },
      { id: 5, question: "Como verificar o IP do computador?", answer: "ip addr" },
      { id: 6, question: "Qual permissão numérica é: dono lê/escreve/executa, grupo lê/executa, outros lê/executa?", answer: "755" },
      { id: 7, question: "Como ver os processos em execução?", answer: "ps aux" },
      { id: 8, question: "Como forçar o encerramento do processo PID 1234?", answer: "kill -9 1234" },
      { id: 9, question: "Qual comando atualiza todo o sistema?", answer: "sudo dnf update" },
      { id: 10, question: "Como habilitar o SSH para iniciar no boot?", answer: "sudo systemctl enable sshd" },
      { id: 11, question: "Qual filesystem o Fedora usa por padrão?", answer: "Btrfs" },
      { id: 12, question: "O que é o SELinux e quais seus 3 modos?", answer: "Módulo de segurança do kernel. Modos: Enforcing (bloqueia), Permissive (alerta), Disabled (desativado)." },
      { id: 13, question: "Como testar a conexão com google.com enviando 5 pacotes?", answer: "ping -c 5 google.com" },
      { id: 14, question: "Como buscar a palavra 'error' em todos os arquivos de /var/log/ ignorando maiúsculas?", answer: "grep -ri 'error' /var/log/" },
      { id: 15, question: "Como compactar a pasta 'trabalho' em 'trabalho.tar.gz'?", answer: "tar -czf trabalho.tar.gz trabalho/" },
    ],
  },
];
