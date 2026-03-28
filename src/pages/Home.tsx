import { PageContainer } from "@/components/layout/PageContainer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Package, Monitor, Terminal, Users, Shield, Network,
  Code, Box, Lightbulb, ChevronRight, Download, Cpu, RefreshCw, HardDrive,
} from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Fundamentos",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      description: "Entenda o Fedora, sua filosofia e como começar do zero.",
      links: [
        { name: "O que é Fedora", href: "/historia" },
        { name: "Instalação", href: "/instalacao" },
        { name: "Primeiros Passos", href: "/primeiros-passos" },
      ],
    },
    {
      title: "Gerenciamento de Pacotes",
      icon: <Package className="w-6 h-6 text-green-400" />,
      description: "Instale, atualize e remova software com DNF, Flatpak e RPM.",
      links: [
        { name: "DNF — Gerenciador de Pacotes", href: "/dnf" },
        { name: "Flatpak e Flathub", href: "/flatpak" },
        { name: "Formato RPM", href: "/rpm" },
        { name: "Atualização do Sistema", href: "/atualizacao" },
      ],
    },
    {
      title: "Interface e Terminal",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      description: "Domine o GNOME e o terminal Bash para produtividade máxima.",
      links: [
        { name: "Interface GNOME", href: "/gnome" },
        { name: "Terminal e Bash", href: "/terminal" },
      ],
    },
    {
      title: "Sistema de Arquivos",
      icon: <HardDrive className="w-6 h-6 text-yellow-400" />,
      description: "Navegue, organize arquivos e domine o Btrfs.",
      links: [
        { name: "Sistema de Arquivos", href: "/arquivos" },
        { name: "Btrfs — Filesystem Padrão", href: "/btrfs" },
      ],
    },
    {
      title: "Administração",
      icon: <Shield className="w-6 h-6 text-red-400" />,
      description: "Usuários, permissões, serviços, rede e segurança.",
      links: [
        { name: "Usuários e Grupos", href: "/usuarios" },
        { name: "Permissões", href: "/permissoes" },
        { name: "Processos e Gerenciamento", href: "/processos" },
        { name: "Systemd e Serviços", href: "/servicos" },
        { name: "Configuração de Rede", href: "/rede" },
        { name: "Firewall e SELinux", href: "/firewall" },
      ],
    },
    {
      title: "Desenvolvimento",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      description: "Configure seu ambiente dev e use containers com Podman.",
      links: [
        { name: "Ambiente de Desenvolvimento", href: "/desenvolvimento" },
        { name: "Podman e Containers", href: "/containers" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6 border-0">
            Guia Completo do <span className="text-primary">Fedora</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Do zero ao avançado — aprenda a usar, administrar e desenvolver no Fedora Linux em Português Brasileiro.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/historia">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                Começar agora <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/instalacao">
              <button className="px-6 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Instalação
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Package className="w-5 h-5" />, label: "DNF & Flatpak", color: "text-green-400" },
            { icon: <Monitor className="w-5 h-5" />, label: "GNOME 4x", color: "text-purple-400" },
            { icon: <Shield className="w-5 h-5" />, label: "SELinux & Firewall", color: "text-red-400" },
            { icon: <HardDrive className="w-5 h-5" />, label: "Btrfs nativo", color: "text-yellow-400" },
            { icon: <Box className="w-5 h-5" />, label: "Podman & Containers", color: "text-cyan-400" },
            { icon: <RefreshCw className="w-5 h-5" />, label: "Atualizações fáceis", color: "text-blue-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className={item.color}>{item.icon}</div>
              <span className="font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 mt-0 border-0">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-primary/50" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
