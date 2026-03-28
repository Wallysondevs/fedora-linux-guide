import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";
import { BookMarked, Globe, Users, Cpu } from "lucide-react";

export default function Referencias() {
  const refs = [
    {
      category: "Documentação Oficial",
      icon: <BookMarked className="w-5 h-5 text-blue-400" />,
      items: [
        { title: "Documentação do Fedora", url: "https://docs.fedoraproject.org", desc: "Documentação oficial do Projeto Fedora — guias de instalação, administração e desenvolvimento." },
        { title: "Fedora Quick Docs", url: "https://docs.fedoraproject.org/en-US/quick-docs/", desc: "Guias rápidos e tutoriais práticos para tarefas comuns no Fedora." },
        { title: "DNF Documentation", url: "https://dnf.readthedocs.io", desc: "Documentação completa do gerenciador de pacotes DNF." },
        { title: "Systemd Documentation", url: "https://systemd.io", desc: "Documentação oficial do systemd — sistema de init e gerenciador de serviços." },
      ],
    },
    {
      category: "Comunidade",
      icon: <Users className="w-5 h-5 text-green-400" />,
      items: [
        { title: "Ask Fedora", url: "https://ask.fedoraproject.org", desc: "Fórum Q&A oficial da comunidade Fedora em vários idiomas." },
        { title: "Fedora Discussion", url: "https://discussion.fedoraproject.org", desc: "Fórum de discussão da comunidade Fedora." },
        { title: "Reddit r/Fedora", url: "https://reddit.com/r/Fedora", desc: "Comunidade Fedora no Reddit com dicas, novidades e suporte." },
        { title: "Fedora Magazine", url: "https://fedoramagazine.org", desc: "Artigos, tutoriais e novidades sobre o Fedora e o ecossistema Linux." },
      ],
    },
    {
      category: "Recursos Linux",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      items: [
        { title: "The Linux Command Line (livro gratuito)", url: "https://linuxcommand.org/tlcl.php", desc: "Livro completo sobre linha de comando Linux, disponível gratuitamente." },
        { title: "Arch Wiki", url: "https://wiki.archlinux.org", desc: "A melhor wiki de Linux — a maioria dos artigos é aplicável ao Fedora também." },
        { title: "Linux Journey", url: "https://linuxjourney.com", desc: "Curso interativo e gratuito de Linux para iniciantes." },
        { title: "DistroWatch — Fedora", url: "https://distrowatch.com/fedora", desc: "Notícias, reviews e informações sobre lançamentos do Fedora." },
      ],
    },
    {
      category: "Ferramentas Online",
      icon: <Cpu className="w-5 h-5 text-yellow-400" />,
      items: [
        { title: "Flathub", url: "https://flathub.org", desc: "Repositório oficial de aplicativos Flatpak — mais de 2000 apps." },
        { title: "GNOME Extensions", url: "https://extensions.gnome.org", desc: "Repositório de extensões para o ambiente desktop GNOME." },
        { title: "RPM Fusion", url: "https://rpmfusion.org", desc: "Repositórios extras com pacotes que não estão no Fedora oficial." },
        { title: "Fedora Status", url: "https://status.fedoraproject.org", desc: "Status dos serviços do Projeto Fedora em tempo real." },
      ],
    },
  ];

  return (
    <PageContainer
      title="Referências"
      subtitle="Links essenciais, documentação oficial e recursos da comunidade para continuar aprendendo Fedora Linux."
      difficulty="iniciante"
      timeToRead="5 min"
    >
      <AlertBox type="info" title="Continue aprendendo">
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

      <AlertBox type="success" title="Parabéns! Você completou o Guia Completo do Fedora">
        Você passou por instalação, gerenciamento de pacotes, terminal, sistema de arquivos, usuários, permissões, serviços, rede, firewall, SELinux, Btrfs, desenvolvimento e containers. Continue praticando e explorando — o Linux recompensa quem experimenta!
      </AlertBox>
    </PageContainer>
  );
}
