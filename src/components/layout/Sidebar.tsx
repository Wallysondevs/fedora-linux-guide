import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  BookOpen, Terminal, Package, Layers, Monitor, FolderOpen,
  Users, Shield, Server, Network, Flame, HardDrive, Archive,
  RefreshCw, Code, Box, Lightbulb, BookMarked, Download,
  History, X, ChevronRight, Cpu, HelpCircle, Activity,
  Navigation, Eye, Copy, GitMerge, ScrollText, Lock,
  ShieldCheck, Wrench, Wifi,
} from "lucide-react";

const NAVIGATION = [
  {
    title: "Introdução",
    items: [
      { path: "/", label: "Início", icon: BookOpen },
      { path: "/historia", label: "O que é Fedora", icon: History },
      { path: "/instalacao", label: "Instalação", icon: Download },
      { path: "/primeiros-passos", label: "Primeiros Passos", icon: Terminal },
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
    title: "Interface e Terminal",
    items: [
      { path: "/gnome", label: "Interface GNOME", icon: Monitor },
      { path: "/terminal", label: "Terminal e Bash", icon: Terminal },
      { path: "/pipes", label: "Pipes e Redirecionamento", icon: GitMerge },
      { path: "/shell-scripting", label: "Shell Scripting", icon: ScrollText },
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
    ],
  },
  {
    title: "Administração",
    items: [
      { path: "/usuarios", label: "Usuários e Grupos", icon: Users },
      { path: "/permissoes", label: "Permissões", icon: Shield },
      { path: "/processos", label: "Processos e Gerenciamento", icon: Activity },
      { path: "/servicos", label: "Systemd e Serviços", icon: Server },
      { path: "/rede", label: "Configuração de Rede", icon: Network },
      { path: "/ssh", label: "SSH — Acesso Remoto", icon: Lock },
      { path: "/firewall", label: "Firewall e SELinux", icon: Flame },
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      { path: "/desenvolvimento", label: "Ambiente de Desenvolvimento", icon: Code },
      { path: "/containers", label: "Podman e Containers", icon: Box },
    ],
  },
  {
    title: "Extras",
    items: [
      { path: "/seguranca", label: "Segurança do Sistema", icon: ShieldCheck },
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
