import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Archive, FolderOpen, FileText, Zap, Settings } from "lucide-react";

  export default function Compressao() {
    return (
      <PageContainer
        title="Compressão e Descompressão"
        subtitle="Domine tar, gzip, bzip2, xz, zip e 7z no Fedora: comprimir, extrair e gerenciar arquivos compactados."
        difficulty="iniciante"
        timeToRead="20 min"
      >
        <h2><Archive className="inline-block mr-2 mb-1 w-5 h-5" /> Compressão no Linux</h2>
        <p>
          O Linux separa dois conceitos: <strong>empacotamento</strong> (juntar vários arquivos em um — tar)
          e <strong>compressão</strong> (reduzir tamanho — gzip, bzip2, xz). O <code>tar</code> faz ambos
          quando combinado com um compressor.
        </p>

        <h2>tar — A Ferramenta Universal</h2>
        <CodeBlock
          code={`# Criar arquivo tar (sem compressão)
  tar -cf arquivo.tar pasta/
  # -c = create (criar)
  # -f = file (nome do arquivo)

  # Criar com compressão gzip (.tar.gz ou .tgz)
  tar -czf arquivo.tar.gz pasta/
  # -z = gzip

  # Criar com bzip2 (.tar.bz2) — melhor compressão, mais lento
  tar -cjf arquivo.tar.bz2 pasta/
  # -j = bzip2

  # Criar com xz (.tar.xz) — melhor compressão, mais lento
  tar -cJf arquivo.tar.xz pasta/
  # -J = xz

  # Extrair (auto-detecta compressão)
  tar -xf arquivo.tar.gz
  tar -xf arquivo.tar.bz2
  tar -xf arquivo.tar.xz

  # Extrair para diretório específico
  tar -xf arquivo.tar.gz -C /destino/

  # Listar conteúdo sem extrair
  tar -tf arquivo.tar.gz

  # Verbose (mostrar progresso)
  tar -xvf arquivo.tar.gz
  # -v = verbose`}
          language="bash"
          title="tar"
        />

        <h2>zip e unzip</h2>
        <CodeBlock
          code={`# Instalar zip/unzip
  sudo dnf install zip unzip

  # Comprimir
  zip arquivo.zip file1.txt file2.txt
  zip -r pasta.zip pasta/          # recursivo (diretório)

  # Descomprimir
  unzip arquivo.zip
  unzip arquivo.zip -d /destino/    # para diretório específico

  # Listar conteúdo
  unzip -l arquivo.zip

  # Comprimir com senha
  zip -e secreto.zip arquivo.txt`}
          language="bash"
          title="zip"
        />

        <h2>Outros Formatos</h2>
        <CodeBlock
          code={`# 7-Zip (7z) — alta compressão
  sudo dnf install p7zip p7zip-plugins
  7z a arquivo.7z pasta/           # comprimir
  7z x arquivo.7z                  # extrair

  # gzip / gunzip (arquivo individual)
  gzip arquivo.txt                 # gera arquivo.txt.gz (remove original)
  gunzip arquivo.txt.gz            # descomprime

  # xz / unxz
  xz arquivo.txt                   # gera arquivo.txt.xz
  unxz arquivo.txt.xz

  # RAR
  sudo dnf install unrar
  unrar x arquivo.rar`}
          language="bash"
          title="outros formatos"
        />

        <h2>Comparação de Formatos</h2>
        <table>
          <thead><tr><th>Formato</th><th>Velocidade</th><th>Compressão</th><th>Compatibilidade</th></tr></thead>
          <tbody>
            <tr><td><code>.tar.gz</code></td><td>Rápido</td><td>Boa</td><td>Universal Linux</td></tr>
            <tr><td><code>.tar.xz</code></td><td>Lento</td><td>Excelente</td><td>Linux moderno</td></tr>
            <tr><td><code>.tar.bz2</code></td><td>Médio</td><td>Muito boa</td><td>Linux</td></tr>
            <tr><td><code>.zip</code></td><td>Rápido</td><td>Boa</td><td>Windows + Linux</td></tr>
            <tr><td><code>.7z</code></td><td>Lento</td><td>Excelente</td><td>Multi-plataforma</td></tr>
            <tr><td><code>.zst</code></td><td>Muito rápido</td><td>Muito boa</td><td>Linux moderno</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Quando usar cada formato">
          Para <strong>compartilhar com Windows</strong>: use <code>.zip</code>. Para <strong>backup no Linux</strong>: use
          <code>.tar.gz</code> (rápido) ou <code>.tar.xz</code> (menor tamanho). Para <strong>máxima compressão</strong>: use <code>.7z</code>.
        </AlertBox>
      </PageContainer>
    );
  }
  