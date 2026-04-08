import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { BookMarked, Globe, Users, Cpu, Terminal, GraduationCap, Newspaper } from "lucide-react";

  export default function Referencias() {
    const refs = [
      {
        category: "Documentação Oficial",
        icon: <BookMarked className="w-5 h-5 text-blue-400" />,
        items: [
          { title: "Documentação do Fedora", url: "https://docs.fedoraproject.org", desc: "Documentação oficial do Projeto Fedora — guias de instalação, administração e desenvolvimento." },
          { title: "Fedora Quick Docs", url: "https://docs.fedoraproject.org/en-US/quick-docs/", desc: "Guias rápidos e tutoriais práticos para tarefas comuns no Fedora." },
          { title: "Fedora Release Notes", url: "https://docs.fedoraproject.org/en-US/fedora/latest/release-notes/", desc: "Notas de lançamento com todas as novidades de cada versão." },
          { title: "DNF Documentation", url: "https://dnf.readthedocs.io", desc: "Documentação completa do gerenciador de pacotes DNF." },
          { title: "Systemd Documentation", url: "https://systemd.io", desc: "Documentação oficial do systemd — sistema de init e gerenciador de serviços." },
          { title: "Btrfs Wiki", url: "https://btrfs.readthedocs.io", desc: "Documentação oficial do filesystem Btrfs — snapshots, subvolumes, compressão." },
          { title: "SELinux Project", url: "https://selinuxproject.org", desc: "Documentação e recursos sobre Security-Enhanced Linux." },
        ],
      },
      {
        category: "Comunidade",
        icon: <Users className="w-5 h-5 text-green-400" />,
        items: [
          { title: "Ask Fedora", url: "https://ask.fedoraproject.org", desc: "Fórum Q&A oficial da comunidade Fedora em vários idiomas." },
          { title: "Fedora Discussion", url: "https://discussion.fedoraproject.org", desc: "Fórum de discussão da comunidade Fedora — propostas, anúncios e suporte." },
          { title: "Reddit r/Fedora", url: "https://reddit.com/r/Fedora", desc: "Comunidade Fedora no Reddit com dicas, novidades e suporte." },
          { title: "Fedora Magazine", url: "https://fedoramagazine.org", desc: "Artigos, tutoriais e novidades sobre o Fedora e o ecossistema Linux." },
          { title: "Fedora no Matrix", url: "https://chat.fedoraproject.org", desc: "Chat da comunidade Fedora no Matrix — suporte em tempo real." },
          { title: "Planet Fedora", url: "https://planet.fedoraproject.org", desc: "Agregador de blogs de contribuidores do Fedora." },
        ],
      },
      {
        category: "Recursos Linux",
        icon: <Globe className="w-5 h-5 text-purple-400" />,
        items: [
          { title: "The Linux Command Line (livro)", url: "https://linuxcommand.org/tlcl.php", desc: "Livro completo e gratuito sobre linha de comando Linux." },
          { title: "Arch Wiki", url: "https://wiki.archlinux.org", desc: "A melhor wiki de Linux — a maioria dos artigos é aplicável ao Fedora." },
          { title: "Linux Journey", url: "https://linuxjourney.com", desc: "Curso interativo e gratuito de Linux para iniciantes." },
          { title: "TLDR Pages", url: "https://tldr.sh", desc: "Exemplos práticos de comandos Linux — alternativa simplificada ao man." },
          { title: "Explainshell", url: "https://explainshell.com", desc: "Cole um comando e veja explicação de cada parte." },
          { title: "Linux Handbook", url: "https://linuxhandbook.com", desc: "Tutoriais práticos de Linux para iniciantes e intermediários." },
        ],
      },
      {
        category: "Ferramentas e Repositórios",
        icon: <Cpu className="w-5 h-5 text-yellow-400" />,
        items: [
          { title: "Flathub", url: "https://flathub.org", desc: "Repositório oficial de aplicativos Flatpak — mais de 2000 apps." },
          { title: "GNOME Extensions", url: "https://extensions.gnome.org", desc: "Repositório de extensões para o ambiente desktop GNOME." },
          { title: "RPM Fusion", url: "https://rpmfusion.org", desc: "Repositórios extras com pacotes que não estão no Fedora oficial." },
          { title: "Fedora COPR", url: "https://copr.fedorainfracloud.org", desc: "Repositórios criados pela comunidade (semelhante a PPAs do Ubuntu)." },
          { title: "Fedora Status", url: "https://status.fedoraproject.org", desc: "Status dos serviços do Projeto Fedora em tempo real." },
          { title: "Koji (build system)", url: "https://koji.fedoraproject.org", desc: "Sistema de build do Fedora — veja pacotes sendo construídos." },
        ],
      },
      {
        category: "Aprendizado e Certificações",
        icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
        items: [
          { title: "Red Hat System Administration I", url: "https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i", desc: "Curso oficial de administração Linux — base para certificação RHCSA." },
          { title: "Linux Foundation Training", url: "https://training.linuxfoundation.org", desc: "Cursos oficiais da Linux Foundation, incluindo certificações." },
          { title: "OverTheWire: Bandit", url: "https://overthewire.org/wargames/bandit/", desc: "Jogo para aprender Linux na prática via desafios no terminal." },
          { title: "Linux Upskill Challenge", url: "https://linuxupskillchallenge.org", desc: "Desafio de 20 dias para aprender administração Linux." },
        ],
      },
      {
        category: "Canais e Podcasts",
        icon: <Newspaper className="w-5 h-5 text-orange-400" />,
        items: [
          { title: "Diolinux (YouTube)", url: "https://youtube.com/@Diolinux", desc: "Maior canal de Linux em português — tutoriais, reviews e notícias." },
          { title: "Linux Tips (YouTube)", url: "https://youtube.com/@LinuxTips", desc: "Conteúdo técnico de Linux, DevOps e containers em português." },
          { title: "Fedora Podcast", url: "https://fedoraproject.org/podcast", desc: "Podcast oficial do Projeto Fedora com novidades e entrevistas." },
          { title: "DistroWatch", url: "https://distrowatch.com/fedora", desc: "Notícias, reviews e informações sobre lançamentos do Fedora." },
        ],
      },
    ];

    return (
      <PageContainer
        title="Referências"
        subtitle="Links essenciais, documentação oficial, cursos e recursos da comunidade para continuar aprendendo Fedora Linux."
        difficulty="iniciante"
        timeToRead="10 min"
      >
        <AlertBox type="info" title="Continue aprendendo!">
          O Fedora tem uma das melhores comunidades do mundo Linux. Use esses recursos para tirar dúvidas, encontrar tutoriais e se manter atualizado sobre as novidades do ecossistema.
        </AlertBox>

        {refs.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="flex items-center gap-2">
              {section.icon} {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, j) => (
                <a
                  key={j}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <h4 className="font-semibold text-primary mb-1 mt-0 border-0 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mb-0">{item.desc}</p>
                  <span className="text-xs text-muted-foreground/60 font-mono">{item.url}</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <h2><Terminal className="w-5 h-5 inline-block mr-2 mb-1" /> Comandos de Ajuda no Terminal</h2>
        <CodeBlock
          code={`# Manual completo de um comando
  man ls
  man dnf

  # Ajuda rápida
  ls --help
  dnf --help

  # Exemplos práticos (instale primeiro: sudo dnf install tldr)
  tldr dnf
  tldr systemctl
  tldr tar

  # Buscar qual comando faz algo
  apropos "copy files"
  man -k "network"

  # Tipo de comando (builtin, alias, binário)
  type ls
  type cd
  which python3

  # Informações do sistema
  uname -a
  hostnamectl
  cat /etc/fedora-release`}
          language="bash"
          title="ajuda no terminal"
        />

        <AlertBox type="success" title="Parabéns! Você completou o Guia Completo do Fedora">
          Você passou por instalação, primeiros passos, gerenciamento de pacotes, terminal, sistema de arquivos, Btrfs, usuários, permissões, serviços, rede, firewall, SELinux, desenvolvimento, containers e dicas avançadas. Continue praticando e explorando — o Linux recompensa quem experimenta!
        </AlertBox>
      </PageContainer>
    );
  }
  