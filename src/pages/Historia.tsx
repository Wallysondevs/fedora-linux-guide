import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Cpu, Globe, Users, Zap, Calendar, GitBranch, Shield } from "lucide-react";

  export default function Historia() {
    return (
      <PageContainer
        title="O que é Fedora"
        subtitle="Conheça a distribuição que impulsiona a inovação no mundo Linux — sua história, filosofia, edições e relação com a Red Hat."
        difficulty="iniciante"
        timeToRead="25 min"
      >
        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> O Projeto Fedora</h2>
        <p>
          O Fedora é uma distribuição Linux comunitária patrocinada pela <strong>Red Hat</strong> (subsidiária da IBM). Lançado em 2003, o Fedora nasceu como continuação do Red Hat Linux após a empresa dividir seu produto em duas linhas: o Fedora (gratuito, experimental) e o Red Hat Enterprise Linux — RHEL (comercial, estável).
        </p>
        <p>
          O Fedora serve como <strong>laboratório de inovação</strong>: tecnologias que são testadas e amadurecidas no Fedora frequentemente são incorporadas ao RHEL e, por consequência, ao <strong>CentOS Stream</strong> e ao <strong>AlmaLinux</strong>. Isso significa que usar Fedora é estar na vanguarda do ecossistema Linux enterprise.
        </p>
        <p>
          O nome "Fedora" vem do chapéu fedora presente no logo histórico da Red Hat. O projeto é governado pelo <strong>Fedora Council</strong> e pelo <strong>FESCo</strong> (Fedora Engineering Steering Committee), que tomam decisões técnicas e de direcionamento da distribuição.
        </p>

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Os 4 Pilares do Fedora</h2>
        <p>O Projeto Fedora é guiado por quatro valores fundamentais, conhecidos como os <strong>Four Foundations</strong>:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { icon: <Globe className="w-5 h-5 text-blue-400" />, title: "Freedom (Liberdade)", desc: "Software 100% livre. O Fedora não inclui drivers proprietários por padrão — tudo é open source. Pacotes proprietários ficam em repositórios separados como o RPM Fusion." },
            { icon: <Users className="w-5 h-5 text-green-400" />, title: "Friends (Amigos)", desc: "Comunidade global ativa com SIGs (Special Interest Groups) para cada área de interesse — desde KDE até robótica, passando por segurança e containers." },
            { icon: <Zap className="w-5 h-5 text-yellow-400" />, title: "Features (Funcionalidades)", desc: "Sempre na vanguarda: últimas versões do kernel, GNOME, Wayland, Pipewire e muito mais. Muitas tecnologias estreiam no Fedora antes de qualquer outra distro." },
            { icon: <Cpu className="w-5 h-5 text-purple-400" />, title: "First (Primeiro)", desc: "Pioneiro em adotar novas tecnologias: foi a primeira distro major a usar systemd, Wayland por padrão, PipeWire, Btrfs como filesystem padrão e muito mais." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h4 className="font-bold mt-0 mb-0 border-0">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2><Calendar className="inline-block mr-2 mb-1 w-5 h-5" /> Linha do Tempo — Marcos Importantes</h2>
        <p>O Fedora tem uma longa história de inovação. Veja os momentos mais marcantes:</p>
        <table>
          <thead>
            <tr><th>Ano</th><th>Versão</th><th>Marco</th></tr>
          </thead>
          <tbody>
            <tr><td>2003</td><td>Fedora Core 1</td><td>Primeira versão, baseada no Red Hat Linux 9</td></tr>
            <tr><td>2006</td><td>Fedora 6</td><td>Unificação de Fedora Core com Fedora Extras</td></tr>
            <tr><td>2011</td><td>Fedora 15</td><td>Adoção do GNOME 3 e systemd</td></tr>
            <tr><td>2016</td><td>Fedora 25</td><td>Wayland como servidor gráfico padrão no GNOME</td></tr>
            <tr><td>2020</td><td>Fedora 33</td><td>Btrfs como filesystem padrão (substituindo ext4)</td></tr>
            <tr><td>2021</td><td>Fedora 34</td><td>PipeWire como servidor de áudio padrão</td></tr>
            <tr><td>2023</td><td>Fedora 39</td><td>Fedora Onyx (desktop imutável com KDE Plasma)</td></tr>
            <tr><td>2024</td><td>Fedora 40</td><td>DNF5 como gerenciador de pacotes padrão</td></tr>
            <tr><td>2024</td><td>Fedora 41</td><td>GNOME 47, kernel 6.11</td></tr>
          </tbody>
        </table>

        <h2>Versões e Ciclo de Lançamento</h2>
        <p>O Fedora lança uma nova versão a cada aproximadamente <strong>6 meses</strong> (geralmente abril e outubro). Cada versão recebe suporte por cerca de <strong>13 meses</strong>.</p>

        <AlertBox type="info" title="Política de suporte">
          Quando o Fedora N+2 é lançado, a versão N deixa de receber atualizações de segurança. Por exemplo, quando o Fedora 42 sai, o Fedora 40 perde o suporte. Sempre atualize para a versão mais recente ou a anterior.
        </AlertBox>

        <h2><GitBranch className="inline-block mr-2 mb-1 w-5 h-5" /> Edições do Fedora</h2>

        <h3>Edições Principais</h3>
        <table>
          <thead>
            <tr><th>Edição</th><th>Foco</th><th>Público</th><th>Ambiente</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Fedora Workstation</strong></td><td>Desktop</td><td>Usuários e desenvolvedores</td><td>GNOME</td></tr>
            <tr><td><strong>Fedora Server</strong></td><td>Servidores</td><td>Sysadmins</td><td>Cockpit (web)</td></tr>
            <tr><td><strong>Fedora IoT</strong></td><td>Internet das Coisas</td><td>Dispositivos embarcados</td><td>Sem GUI</td></tr>
            <tr><td><strong>Fedora Cloud</strong></td><td>Nuvem</td><td>DevOps</td><td>Sem GUI</td></tr>
            <tr><td><strong>Fedora CoreOS</strong></td><td>Containers em escala</td><td>Kubernetes</td><td>Imutável</td></tr>
          </tbody>
        </table>

        <h3>Edições Imutáveis (Atomic Desktops)</h3>
        <p>Usam <strong>rpm-ostree</strong> para gerenciar o sistema como imagem atômica. Atualizações são transações completas — ou tudo funciona ou volta ao estado anterior:</p>
        <table>
          <thead>
            <tr><th>Edição</th><th>Ambiente</th><th>Diferencial</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Silverblue</strong></td><td>GNOME</td><td>Desktop imutável mais popular</td></tr>
            <tr><td><strong>Kinoite</strong></td><td>KDE Plasma</td><td>Desktop imutável com KDE</td></tr>
            <tr><td><strong>Sway Atomic</strong></td><td>Sway (tiling)</td><td>Gerenciador tiling em Wayland</td></tr>
            <tr><td><strong>Budgie Atomic</strong></td><td>Budgie</td><td>Desktop moderno e leve</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Imutável vs Tradicional">
          Nas edições imutáveis, o sistema base é somente leitura. Apps são instalados via Flatpak (GUI) ou <code>rpm-ostree</code>. Isso garante estabilidade total — ideal para quem quer "nunca quebrar" o sistema. A versão tradicional (Workstation) é mais flexível.
        </AlertBox>

        <h3>Fedora Spins</h3>
        <p>Versões com ambientes desktop alternativos:</p>
        <table>
          <thead>
            <tr><th>Spin</th><th>Ambiente</th><th>Ideal para</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>KDE Plasma</strong></td><td>KDE</td><td>Customização extrema</td></tr>
            <tr><td><strong>Xfce</strong></td><td>Xfce</td><td>Hardware modesto</td></tr>
            <tr><td><strong>LXQt</strong></td><td>LXQt</td><td>Hardware muito antigo</td></tr>
            <tr><td><strong>Cinnamon</strong></td><td>Cinnamon</td><td>Quem vem do Windows</td></tr>
            <tr><td><strong>MATE</strong></td><td>MATE</td><td>Interface clássica GNOME 2</td></tr>
            <tr><td><strong>i3 / Sway</strong></td><td>Tiling WM</td><td>Teclado e produtividade</td></tr>
          </tbody>
        </table>

        <h3>Fedora Labs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            { title: "Astronomy", desc: "Stellarium, KStars e ferramentas de astronomia" },
            { title: "Design Suite", desc: "GIMP, Inkscape, Blender para design gráfico" },
            { title: "Jam", desc: "Produção musical com Ardour, LMMS e JACK" },
            { title: "Security Lab", desc: "Pen testing: Wireshark, Nmap, Metasploit" },
            { title: "Comp Neuro", desc: "Neurociência computacional" },
            { title: "Robotics Suite", desc: "ROS, OpenCV e simuladores" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card">
              <h4 className="font-bold mt-0 mb-1 border-0 text-sm">Fedora {item.title}</h4>
              <p className="text-xs text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Relação Fedora → RHEL → CentOS</h2>
        <div className="my-6 p-5 rounded-xl border border-border bg-card">
          <p className="text-sm text-muted-foreground mb-3">O fluxo de desenvolvimento upstream:</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold">Fedora (inovação)</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 font-semibold">CentOS Stream (preview)</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 font-semibold">RHEL (produção)</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3 mb-0">
            Tecnologias são testadas no Fedora, estabilizadas no CentOS Stream e lançadas no RHEL para uso empresarial.
          </p>
        </div>

        <h2>Fedora vs. Outras Distribuições</h2>
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Fedora</th><th>Ubuntu</th><th>Arch</th><th>RHEL</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Base</strong></td><td>Independente</td><td>Debian</td><td>Independente</td><td>Fedora</td></tr>
            <tr><td><strong>Pacotes</strong></td><td>RPM / DNF</td><td>DEB / APT</td><td>Pacman</td><td>RPM / DNF</td></tr>
            <tr><td><strong>Ciclo</strong></td><td>~6 meses</td><td>6m / LTS</td><td>Rolling</td><td>~10 anos</td></tr>
            <tr><td><strong>Desktop</strong></td><td>GNOME puro</td><td>GNOME custom</td><td>Sem padrão</td><td>GNOME</td></tr>
            <tr><td><strong>Segurança</strong></td><td>SELinux</td><td>AppArmor</td><td>Opcional</td><td>SELinux</td></tr>
            <tr><td><strong>Filesystem</strong></td><td>Btrfs</td><td>ext4</td><td>Escolha</td><td>XFS</td></tr>
            <tr><td><strong>Ideal para</strong></td><td>Devs</td><td>Iniciantes</td><td>Power users</td><td>Empresas</td></tr>
          </tbody>
        </table>

        <AlertBox type="info" title="Por que escolher Fedora?">
          Fedora é ideal para quem quer software atualizado, aprende tecnologias enterprise (RHEL/CentOS) e valoriza software livre. É a escolha preferida de desenvolvedores e engenheiros da Red Hat/IBM.
        </AlertBox>

        <h2>Governança e Comunidade</h2>
        <ul>
          <li><strong>Fedora Council</strong> — direção estratégica e valores do projeto</li>
          <li><strong>FESCo</strong> — decisões técnicas sobre funcionalidades</li>
          <li><strong>SIGs</strong> — grupos temáticos (KDE SIG, Security SIG, etc.)</li>
          <li><strong>Ambassadors</strong> — representantes em eventos e comunidades</li>
        </ul>
        <p>Qualquer pessoa pode contribuir — código, documentação, tradução, empacotamento ou teste de versões beta.</p>

        <h2>Verificar a versão instalada</h2>
        <CodeBlock
          code={`# Ver versão do Fedora
  cat /etc/fedora-release
  # Saída: Fedora release 41 (Forty One)

  # Informações completas do sistema
  cat /etc/os-release
  # NAME="Fedora Linux"
  # VERSION="41 (Workstation Edition)"
  # ID=fedora
  # VERSION_ID=41

  # Versão do kernel
  uname -r
  # Saída: 6.11.4-301.fc41.x86_64

  # Arquitetura
  uname -m
  # Saída: x86_64

  # Informações completas do host
  hostnamectl

  # Tempo ligado
  uptime`}
          language="bash"
          title="informações do sistema"
        />

        <h2>Requisitos de Hardware</h2>
        <table>
          <thead>
            <tr><th>Componente</th><th>Mínimo</th><th>Recomendado</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>CPU</strong></td><td>2 GHz dual-core</td><td>4 cores ou mais</td></tr>
            <tr><td><strong>RAM</strong></td><td>2 GB</td><td>4 GB ou mais</td></tr>
            <tr><td><strong>Disco</strong></td><td>15 GB</td><td>40 GB+ (SSD recomendado)</td></tr>
            <tr><td><strong>Vídeo</strong></td><td>OpenGL</td><td>Vulkan</td></tr>
            <tr><td><strong>Boot</strong></td><td>BIOS ou UEFI</td><td>UEFI com Secure Boot</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Hardware modesto?">
          Se seu computador tem menos de 4 GB de RAM, use uma Spin mais leve como Xfce ou LXQt em vez do GNOME. Elas consomem significativamente menos memória.
        </AlertBox>
      </PageContainer>
    );
  }
  