import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, CheckCircle2, Terminal as TerminalIcon, BookOpen,
  Package, HardDrive, Settings, Shield, Server, Code2, Monitor,
  Sparkles, GraduationCap,
} from "lucide-react";
import { FedoraLogo } from "@/components/ui/FedoraLogo";
import { Terminal } from "@/components/ui/Terminal";
import { MODULES, COURSE, TOTAL_LESSONS, useProgress } from "@/lib/course";

const MODULE_ICON: Record<string, typeof BookOpen> = {
  "Introdução": BookOpen,
  "Gerenciamento de Pacotes": Package,
  "Interface Gráfica": Monitor,
  "Terminal e Shell": TerminalIcon,
  "Sistema de Arquivos": HardDrive,
  "Administração": Settings,
  "Rede e Segurança": Shield,
  "Desenvolvimento": Code2,
  "Servidores e DevOps": Server,
  "Extras": Sparkles,
};

const NOVIDADES = [
  { t: "DNF5 por padrão", d: "O gerenciador reescrito em C++ é o dnf padrão desde o Fedora 41 — resolução de dependências muito mais rápida." },
  { t: "GNOME 48 · Wayland puro", d: "Ambiente moderno e fluido; a sessão X11 do GNOME foi aposentada, com XWayland só para apps legados." },
  { t: "Kernel Linux 6.16+", d: "Base recente com suporte a hardware novo e melhorias de desempenho." },
  { t: "Btrfs + zram", d: "Sistema de arquivos padrão com snapshots, compressão transparente e swap em memória." },
  { t: "Podman 5", d: "Containers sem daemon e rootless por padrão — mais seguro que o modelo tradicional." },
  { t: "PipeWire", d: "Servidor de áudio e vídeo moderno, com baixa latência, no lugar do PulseAudio." },
];

const DEMO_LINES = [
  { type: "cmd" as const, text: "sudo dnf install -y neovim" },
  { type: "out" as const, text: "Dependencies resolved. Transaction Summary: Install 3 Packages" },
  { type: "out" as const, text: "Downloading Packages... Running transaction..." },
  { type: "ok" as const, text: "Instalado: neovim-0.11.2 e 2 dependências. ✓" },
  { type: "comment" as const, text: "# e quando algo falha, o curso mostra o erro DE VERDADE:" },
  { type: "cmd" as const, text: "sudo systemctl start httpd" },
  { type: "err" as const, text: "Job for httpd.service failed because the control process exited with error code." },
  { type: "err" as const, text: 'See "systemctl status httpd.service" and "journalctl -xeu httpd.service".' },
  { type: "warn" as const, text: "→ porta 80 ocupada ou bloqueio do SELinux. Você vai aprender a diagnosticar e corrigir." },
];

function ModuleCard({ title, index }: { title: string; index: number }) {
  const mod = MODULES.find((m) => m.title === title)!;
  const { done } = useProgress();
  const doneCount = mod.lessons.filter((l) => done.includes(l.path)).length;
  const pct = Math.round((doneCount / mod.lessons.length) * 100);
  const Icon = MODULE_ICON[title] ?? BookOpen;
  const first = mod.lessons[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
    >
      <Link href={first.path}>
        <div className="group relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer overflow-hidden">
          <div className="absolute -top-3 -right-2 text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="relative flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Módulo {index + 1}
            </div>
          </div>
          <h3 className="relative text-lg font-bold text-foreground mb-2 mt-0 border-0 pb-0">{title}</h3>
          <p className="relative text-sm text-muted-foreground mb-5">
            {mod.lessons.length} {mod.lessons.length === 1 ? "lição" : "lições"}
            {doneCount > 0 && ` · ${doneCount} concluída${doneCount > 1 ? "s" : ""}`}
          </p>
          <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const { count, percent, has } = useProgress();
  const continueLesson = COURSE.find((l) => !has(l.path)) ?? COURSE[0];
  const started = count > 0;

  return (
    <div className="min-h-screen">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4">
        <div className="aurora" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="orb w-72 h-72 bg-primary/30 top-10 -left-10" />
        <div className="orb w-80 h-80 bg-secondary/25 top-20 right-0" style={{ animationDelay: "3s" }} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <FedoraLogo size={88} className="drop-shadow-[0_8px_24px_rgba(60,110,180,0.5)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Fedora 44 · Curso em Português · atualizado 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Curso de <span className="text-gradient-fedora">Fedora</span>
              <br className="hidden sm:block" /> do zero ao domínio
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Um curso prático, na mão na massa: você executa os comandos, vê as saídas
              reais, os erros e as falhas — e aprende a resolver cada um deles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={started ? continueLesson.path : "/historia"}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 shine"
              >
                <Play className="w-5 h-5" />
                {started ? "Continuar o curso" : "Começar o curso"}
              </Link>
              <a
                href="#trilha"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Ver a trilha completa
              </a>
            </div>
          </motion.div>

          {started && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto mt-10 p-4 rounded-2xl bg-card/70 border border-border backdrop-blur"
            >
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-foreground">Seu progresso</span>
                <span className="text-primary font-bold">{percent}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${percent}%` }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {count} de {TOTAL_LESSONS} lições concluídas
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-2xl mx-auto mt-14 text-left"
          >
            <Terminal lines={DEMO_LINES} title="voce@fedora: ~ — bash" />
          </motion.div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-y border-border bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: `${TOTAL_LESSONS}`, l: "Lições práticas" },
              { n: `${MODULES.length}`, l: "Módulos" },
              { n: "500+", l: "Comandos com saída real" },
              { n: "44", l: "Fedora atualizado" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-foreground mb-1">{s.n}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TRILHA / MÓDULOS ---------------- */}
      <section id="trilha" className="py-24 px-4 max-w-6xl mx-auto relative z-10 scroll-mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-0">A trilha do curso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {MODULES.length} módulos em ordem, do primeiro boot à administração de servidores.
            Marque cada lição como concluída e acompanhe seu progresso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((m, i) => (
            <ModuleCard key={m.title} title={m.title} index={i} />
          ))}
        </div>
      </section>

      {/* ---------------- NOVIDADES ---------------- */}
      <section className="py-20 px-4 relative z-10 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Novidades desta versão
            </div>
            <h2 className="text-3xl md:text-4xl font-bold border-0 mb-3">O que há de novo no Fedora 44</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma base moderna: DNF5, GNOME 48 e Wayland puro por padrão.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NOVIDADES.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-base font-bold mb-1 mt-0 border-0 pb-0">{n.t}</h3>
                <p className="text-sm text-muted-foreground">{n.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA FINAL ---------------- */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="orb w-64 h-64 bg-primary/20 left-1/2 -translate-x-1/2 top-0" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold border-0 mb-4">Pronto para começar?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Não precisa instalar nada para começar a ler. Abra o terminal, acompanhe os
              comandos e vá dominando o Fedora na prática.
            </p>
            <Link
              href="/historia"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 transition-all"
            >
              Iniciar pela primeira lição <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-1">
            Curso focado em <strong className="text-foreground">Fedora Linux 44</strong> ·
            DNF5 · systemd · GNOME 48 · Btrfs · SELinux
          </p>
          <p className="text-xs opacity-70">
            "Fedora" e o logo são marcas do Fedora Project / Red Hat. Material educativo, não oficial.
          </p>
        </div>
      </footer>
    </div>
  );
}
