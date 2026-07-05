import { useSyncExternalStore } from "react";

export interface Lesson {
  path: string;
  label: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

// Ordem oficial do curso — espelha a navegação da Sidebar.
// Usada para: navegação "anterior/próxima", progresso e trilha.
export const MODULES: Module[] = [
  {
    title: "Introdução",
    lessons: [
      { path: "/historia", label: "O que é Fedora" },
      { path: "/instalacao", label: "Instalação" },
      { path: "/primeiros-passos", label: "Primeiros Passos" },
      { path: "/hardware", label: "Hardware e Drivers" },
      { path: "/localizacao", label: "Localização e Idioma" },
    ],
  },
  {
    title: "Gerenciamento de Pacotes",
    lessons: [
      { path: "/dnf", label: "DNF — Gerenciador de Pacotes" },
      { path: "/flatpak", label: "Flatpak e Flathub" },
      { path: "/rpm", label: "Formato RPM" },
      { path: "/atualizacao", label: "Atualização do Sistema" },
    ],
  },
  {
    title: "Interface Gráfica",
    lessons: [
      { path: "/gnome", label: "Interface GNOME" },
      { path: "/gnome-extensions", label: "Extensões do GNOME" },
      { path: "/multimedia", label: "Multimídia e Codecs" },
      { path: "/gaming", label: "Gaming no Fedora" },
      { path: "/wine", label: "Wine — Apps Windows" },
    ],
  },
  {
    title: "Terminal e Shell",
    lessons: [
      { path: "/terminal", label: "Terminal e Bash" },
      { path: "/pipes", label: "Pipes e Redirecionamento" },
      { path: "/shell-scripting", label: "Shell Scripting" },
      { path: "/vim", label: "Vim — Editor de Texto" },
      { path: "/zsh", label: "Zsh — Shell Avançado" },
      { path: "/aliases", label: "Aliases — Atalhos" },
      { path: "/variaveis-ambiente", label: "Variáveis de Ambiente" },
      { path: "/man-pages", label: "Man Pages e Ajuda" },
      { path: "/compressao", label: "Compressão de Arquivos" },
    ],
  },
  {
    title: "Sistema de Arquivos",
    lessons: [
      { path: "/navegacao", label: "Navegação no Sistema" },
      { path: "/manipulacao-arquivos", label: "Manipulação de Arquivos" },
      { path: "/visualizacao", label: "Visualização de Arquivos" },
      { path: "/arquivos", label: "Estrutura FHS" },
      { path: "/btrfs", label: "Btrfs — Filesystem Padrão" },
      { path: "/fstab", label: "fstab — Montagem de Discos" },
      { path: "/disco", label: "Gerenciamento de Disco" },
      { path: "/lvm", label: "LVM — Volumes Lógicos" },
    ],
  },
  {
    title: "Administração",
    lessons: [
      { path: "/usuarios", label: "Usuários e Grupos" },
      { path: "/permissoes", label: "Permissões" },
      { path: "/processos", label: "Processos" },
      { path: "/servicos", label: "Systemd e Serviços" },
      { path: "/journalctl", label: "JournalCtl — Logs" },
      { path: "/cron", label: "Agendamento de Tarefas" },
      { path: "/kernel", label: "Kernel Linux" },
      { path: "/boot", label: "Boot e GRUB" },
      { path: "/backup", label: "Backup e Recuperação" },
      { path: "/timeshift", label: "Timeshift — Restauração" },
    ],
  },
  {
    title: "Rede e Segurança",
    lessons: [
      { path: "/rede", label: "Configuração de Rede" },
      { path: "/dns", label: "DNS — Resolução de Nomes" },
      { path: "/vpn", label: "VPN" },
      { path: "/ssh", label: "SSH — Acesso Remoto" },
      { path: "/firewall", label: "Firewall e SELinux" },
      { path: "/seguranca", label: "Segurança do Sistema" },
      { path: "/gpg", label: "GPG — Criptografia" },
      { path: "/luks", label: "LUKS — Criptografia de Disco" },
      { path: "/fail2ban", label: "Fail2Ban — Proteção" },
      { path: "/samba", label: "Samba — Compartilhamento" },
    ],
  },
  {
    title: "Desenvolvimento",
    lessons: [
      { path: "/desenvolvimento", label: "Ambiente de Dev" },
      { path: "/git", label: "Git — Controle de Versão" },
      { path: "/vscode", label: "VS Code — Editor" },
      { path: "/python", label: "Python" },
      { path: "/nodejs", label: "Node.js" },
      { path: "/php", label: "PHP" },
      { path: "/java", label: "Java" },
    ],
  },
  {
    title: "Servidores e DevOps",
    lessons: [
      { path: "/containers", label: "Podman e Containers" },
      { path: "/docker-compose", label: "Podman Compose" },
      { path: "/nginx", label: "Nginx — Servidor Web" },
      { path: "/apache", label: "Apache (httpd)" },
      { path: "/mysql", label: "MySQL/MariaDB" },
      { path: "/postgresql", label: "PostgreSQL" },
      { path: "/kvm", label: "KVM — Virtualização" },
      { path: "/ansible", label: "Ansible — Automação" },
    ],
  },
  {
    title: "Extras",
    lessons: [
      { path: "/troubleshooting", label: "Troubleshooting" },
      { path: "/flags", label: "Flags, Parâmetros e --help" },
      { path: "/dicas", label: "Dicas e Truques" },
      { path: "/referencias", label: "Referências" },
    ],
  },
];

// Lista achatada, na ordem do curso.
export const COURSE: (Lesson & { module: string; index: number })[] = MODULES.flatMap(
  (m) => m.lessons.map((l) => ({ ...l, module: m.title })),
).map((l, index) => ({ ...l, index }));

export const TOTAL_LESSONS = COURSE.length;

export function lessonAt(path: string) {
  const i = COURSE.findIndex((l) => l.path === path);
  if (i === -1) return null;
  return {
    current: COURSE[i],
    prev: i > 0 ? COURSE[i - 1] : null,
    next: i < COURSE.length - 1 ? COURSE[i + 1] : null,
    position: i + 1,
  };
}

// ---------- Progresso (localStorage, reativo) ----------

const KEY = "fedora-curso-progresso";
const listeners = new Set<() => void>();

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(paths: string[]) {
  localStorage.setItem(KEY, JSON.stringify(paths));
  listeners.forEach((fn) => fn());
}

export function toggleDone(path: string) {
  const cur = read();
  write(cur.includes(path) ? cur.filter((p) => p !== path) : [...cur, path]);
}

export function isDone(path: string) {
  return read().includes(path);
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  window.addEventListener("storage", fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", fn);
  };
}

// Snapshot estável para evitar loop no useSyncExternalStore.
let cache: string[] = [];
let cacheRaw = "";
function snapshot(): string[] {
  const raw = localStorage.getItem(KEY) || "[]";
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      cache = JSON.parse(raw);
    } catch {
      cache = [];
    }
  }
  return cache;
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, snapshot, () => cache);
  return {
    done,
    count: done.length,
    percent: TOTAL_LESSONS ? Math.round((done.length / TOTAL_LESSONS) * 100) : 0,
    has: (path: string) => done.includes(path),
    toggle: toggleDone,
  };
}
