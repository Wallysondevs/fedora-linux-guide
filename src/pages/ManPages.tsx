import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { BookOpen, Search, FileText, HelpCircle, Terminal } from "lucide-react";

  export default function ManPages() {
    return (
      <PageContainer
        title="Man Pages — Manuais do Linux"
        subtitle="Aprenda a usar a documentação embutida do Linux: man pages, info, help, tldr e como encontrar ajuda para qualquer comando."
        difficulty="iniciante"
        timeToRead="15 min"
      >
        <h2><BookOpen className="inline-block mr-2 mb-1 w-5 h-5" /> Man Pages</h2>
        <p>
          As <strong>man pages</strong> (manual pages) são a documentação oficial de cada comando do Linux.
          Praticamente todo comando tem uma man page com descrição completa, opções e exemplos.
        </p>

        <CodeBlock
          code={`# Ler manual de um comando
  man ls
  man grep
  man dnf

  # Navegação dentro do man:
  # Espaço    = próxima página
  # b         = página anterior
  # /texto    = buscar "texto"
  # n         = próxima ocorrência
  # q         = sair

  # Buscar por assunto
  man -k "copy files"
  apropos "copy files"

  # Man page de uma seção específica
  man 5 passwd          # formato do arquivo /etc/passwd
  man 1 passwd          # comando passwd`}
          language="bash"
          title="man pages"
        />

        <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Seções das Man Pages</h2>
        <table>
          <thead><tr><th>Seção</th><th>Conteúdo</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Comandos do usuário</td><td><code>man 1 ls</code></td></tr>
            <tr><td>2</td><td>System calls</td><td><code>man 2 open</code></td></tr>
            <tr><td>3</td><td>Funções de biblioteca C</td><td><code>man 3 printf</code></td></tr>
            <tr><td>4</td><td>Dispositivos especiais</td><td><code>man 4 tty</code></td></tr>
            <tr><td>5</td><td>Formatos de arquivo</td><td><code>man 5 fstab</code></td></tr>
            <tr><td>7</td><td>Miscelânea</td><td><code>man 7 ip</code></td></tr>
            <tr><td>8</td><td>Comandos de admin</td><td><code>man 8 mount</code></td></tr>
          </tbody>
        </table>

        <h2><HelpCircle className="inline-block mr-2 mb-1 w-5 h-5" /> Outras Formas de Ajuda</h2>
        <CodeBlock
          code={`# --help (ajuda rápida)
  ls --help
  dnf --help

  # info (documentação mais detalhada, estilo GNU)
  info coreutils

  # tldr (exemplos práticos e resumidos)
  sudo dnf install tldr
  tldr tar
  tldr rsync
  tldr dnf

  # whatis (descrição de uma linha)
  whatis ls
  whatis grep

  # type (o que é esse comando?)
  type ls        # ls is aliased to 'ls --color=auto'
  type cd        # cd is a shell builtin
  type python3   # python3 is /usr/bin/python3`}
          language="bash"
          title="outras formas de ajuda"
        />

        <AlertBox type="success" title="tldr é seu melhor amigo">
          Se as man pages são longas demais, instale <code>tldr</code>. Ele mostra os exemplos mais comuns
          de cada comando, direto ao ponto. Ex: <code>tldr tar</code> mostra como comprimir e extrair
          em segundos.
        </AlertBox>
      </PageContainer>
    );
  }
  