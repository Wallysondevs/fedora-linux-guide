import { Link, useLocation } from "wouter";
  import { cn } from "@/lib/utils";
  import {
    BookOpen, Terminal, Package, Layers, Monitor, FolderOpen,
    Users, Shield, Server, Network, Flame, HardDrive, Archive,
    RefreshCw, Code, Box, Lightbulb, BookMarked, Download,
    History, X, ChevronRight, Cpu, HelpCircle, Activity,
    Navigation, Eye, Copy, GitMerge, ScrollText, Lock,
    ShieldCheck, Wrench, Wifi, Puzzle, Settings, Key,
    Database, Globe, Music, Clock, Gamepad2, Wine,
    FileText, Keyboard, GitBranch, Power, Search,
    Languages, Layers as LayersIcon,
  } from "lucide-react";

  const NAVIGATION = [
    {
      title: "Introdução",
      items: [
        { path: "/", label: "Início", icon: BookOpen },
        { path: "/historia", label: "O que é Fedora", icon: History },
        { path: "/instalacao", label: "Instalação", icon: Download },
        { path: "/primeiros-passos", label: "Primeiros Passos", icon: Terminal },
        { path: "/hardware", label: "Hardware e Drivers", icon: Cpu },
        { path: "/localizacao", label: "Localização e Idioma", icon: Languages },
      ],
    },
    {
      title: "Gerenciamento de Pacotes",
      items: [
        { path: "/dnf", label: "DNF — Gerenciador de Pacotes", icon: Package },
        { path: "/flatpak", label: "Flatpak e Flathub", icon: Layers },
        { path: "/rpm", label: "Formato RPM", icon: Archive },
        { path: "/atualizacao", label: "Atualização do Sistema", icon: RefreshCw },
      ],
    },
    {
      title: "Interface Gráfica",
      items: [
        { path: "/gnome", label: "Interface GNOME", icon: Monitor },
        { path: "/gnome-extensions", label: "Extensões do GNOME", icon: Puzzle },
        { path: "/multimedia", label: "Multimídia e Codecs", icon: Music },
        { path: "/gaming", label: "Gaming no Fedora", icon: Gamepad2 },
        { path: "/wine", label: "Wine — Apps Windows", icon: Wine },
      ],
    },
    {
      title: "Terminal e Shell",
      items: [
        { path: "/terminal", label: "Terminal e Bash", icon: Terminal },
        { path: "/pipes", label: "Pipes e Redirecionamento", icon: GitMerge },
        { path: "/shell-scripting", label: "Shell Scripting", icon: ScrollText },
        { path: "/vim", label: "Vim — Editor de Texto", icon: FileText },
        { path: "/zsh", label: "Zsh — Shell Avançado", icon: Keyboard },
        { path: "/aliases", label: "Aliases — Atalhos", icon: Lightbulb },
        { path: "/variaveis-ambiente", label: "Variáveis de Ambiente", icon: Settings },
        { path: "/man-pages", label: "Man Pages e Ajuda", icon: HelpCircle },
        { path: "/compressao", label: "Compressão de Arquivos", icon: Archive },
      ],
    },
    {
      title: "Sistema de Arquivos",
      items: [
        { path: "/navegacao", label: "Navegação no Sistema", icon: Navigation },
        { path: "/manipulacao-arquivos", label: "Manipulação de Arquivos", icon: Copy },
        { path: "/visualizacao", label: "Visualização de Arquivos", icon: Eye },
        { path: "/arquivos", label: "Estrutura FHS", icon: FolderOpen },
        { path: "/btrfs", label: "Btrfs — Filesystem Padrão", icon: HardDrive },
        { path: "/fstab", label: "fstab — Montagem de Discos", icon: HardDrive },
        { path: "/disco", label: "Gerenciamento de Disco", icon: HardDrive },
        { path: "/lvm", label: "LVM — Volumes Lógicos", icon: LayersIcon },
      ],
    },
    {
      title: "Administração",
      items: [
        { path: "/usuarios", label: "Usuários e Grupos", icon: Users },
        { path: "/permissoes", label: "Permissões", icon: Shield },
        { path: "/processos", label: "Processos", icon: Activity },
        { path: "/servicos", label: "Systemd e Serviços", icon: Server },
        { path: "/journalctl", label: "JournalCtl — Logs", icon: Search },
        { path: "/cron", label: "Agendamento de Tarefas", icon: Clock },
        { path: "/kernel", label: "Kernel Linux", icon: Cpu },
        { path: "/boot", label: "Boot e GRUB", icon: Power },
        { path: "/backup", label: "Backup e Recuperação", icon: HardDrive },
        { path: "/timeshift", label: "Timeshift — Restauração", icon: Clock },
      ],
    },
    {
      title: "Rede e Segurança",
      items: [
        { path: "/rede", label: "Configuração de Rede", icon: Network },
        { path: "/dns", label: "DNS — Resolução de Nomes", icon: Globe },
        { path: "/vpn", label: "VPN", icon: Lock },
        { path: "/ssh", label: "SSH — Acesso Remoto", icon: Lock },
        { path: "/firewall", label: "Firewall e SELinux", icon: Flame },
        { path: "/seguranca", label: "Segurança do Sistema", icon: ShieldCheck },
        { path: "/gpg", label: "GPG — Criptografia", icon: Key },
        { path: "/luks", label: "LUKS — Criptografia de Disco", icon: Lock },
        { path: "/fail2ban", label: "Fail2Ban — Proteção", icon: Shield },
        { path: "/samba", label: "Samba — Compartilhamento", icon: Network },
      ],
    },
    {
      title: "Desenvolvimento",
      items: [
        { path: "/desenvolvimento", label: "Ambiente de Dev", icon: Code },
        { path: "/git", label: "Git — Controle de Versão", icon: GitBranch },
        { path: "/vscode", label: "VS Code — Editor", icon: Code },
        { path: "/python", label: "Python", icon: Code },
        { path: "/nodejs", label: "Node.js", icon: Code },
        { path: "/php", label: "PHP", icon: Code },
        { path: "/java", label: "Java", icon: Code },
      ],
    },
    {
      title: "Servidores e DevOps",
      items: [
        { path: "/containers", label: "Podman e Containers", icon: Box },
        { path: "/docker-compose", label: "Podman Compose", icon: LayersIcon },
        { path: "/nginx", label: "Nginx — Servidor Web", icon: Server },
        { path: "/apache", label: "Apache (httpd)", icon: Server },
        { path: "/mysql", label: "MySQL/MariaDB", icon: Database },
        { path: "/postgresql", label: "PostgreSQL", icon: Database },
        { path: "/kvm", label: "KVM — Virtualização", icon: Monitor },
        { path: "/ansible", label: "Ansible — Automação", icon: Settings },
      ],
    },
    {
      title: "Extras",
      items: [
        { path: "/troubleshooting", label: "Troubleshooting", icon: Wrench },
        { path: "/flags", label: "Flags, Parâmetros e --help", icon: HelpCircle },
        { path: "/dicas", label: "Dicas e Truques", icon: Lightbulb },
        { path: "/referencias", label: "Referências", icon: BookMarked },
      ],
    },
  ];

  interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
  }

  export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const [location] = useLocation();

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
        <aside
          className={cn(
            "fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between lg:justify-center mb-8">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mt-0 mb-0 pb-0 border-0 leading-tight">Fedora</h2>
                  <p className="text-xs text-muted-foreground">Guia Completo</p>
                </div>
              </Link>
              <button
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-8">
              {NAVIGATION.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3 mt-0 border-0 pb-0">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item, i) => {
                      const isActive = location === item.path;
                      const Icon = item.icon;
                      return (
                        <li key={i}>
                          <Link
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                              isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-primary" : "opacity-70")} />
                            <span className="truncate">{item.label}</span>
                            {isActive && <ChevronRight className="w-3 h-3 ml-auto text-primary shrink-0" />}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </>
    );
  }
  