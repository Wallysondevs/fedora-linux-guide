import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Archive, Search, Info } from "lucide-react";

export default function RPM() {
  return (
    <PageContainer
      title="Formato RPM"
      subtitle="Entenda o formato de pacotes RPM — o formato nativo do Fedora, RHEL e derivados — e como usá-lo diretamente."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <h2><Archive className="inline-block mr-2 mb-1 w-5 h-5" /> O que é RPM?</h2>
      <p>
        O <strong>RPM</strong> (Red Hat Package Manager) é o formato de pacotes do Fedora, RHEL, CentOS, openSUSE e derivados. Um arquivo <code>.rpm</code> contém o software compilado, metadados (nome, versão, dependências) e scripts de instalação.
      </p>
      <p>
        Enquanto o <strong>DNF</strong> resolve dependências automaticamente, o comando <code>rpm</code> opera diretamente nos pacotes sem resolução automática de dependências. Use DNF para instalações normais e rpm para consultas e operações específicas.
      </p>

      <h2>Consultando Pacotes Instalados</h2>
      <CodeBlock
        code={`# Listar todos os pacotes instalados
rpm -qa

# Buscar pacote instalado por nome
rpm -qa | grep firefox
rpm -q firefox

# Informações detalhadas de um pacote instalado
rpm -qi firefox

# Listar arquivos de um pacote instalado
rpm -ql firefox

# Qual pacote fornece um arquivo
rpm -qf /usr/bin/firefox

# Ver scripts de instalação de um pacote
rpm -q --scripts firefox

# Ver changelog de um pacote
rpm -q --changelog firefox | head -30`}
        language="bash"
        title="consultando pacotes"
      />

      <h2><Search className="inline-block mr-2 mb-1 w-5 h-5" /> Trabalhando com Arquivos .rpm</h2>
      <CodeBlock
        code={`# Instalar um pacote .rpm local (melhor usar dnf para resolver dependências)
sudo rpm -ivh pacote.rpm          # -i instalar, -v verbose, -h progresso
sudo dnf install pacote.rpm       # preferível — resolve dependências

# Atualizar pacote via arquivo .rpm
sudo rpm -Uvh novo-pacote.rpm
sudo dnf upgrade pacote.rpm       # preferível

# Remover um pacote
sudo rpm -e nome-do-pacote
sudo dnf remove nome-do-pacote    # preferível

# Verificar integridade de um .rpm antes de instalar
rpm -K pacote.rpm                 # verifica assinatura e checksum

# Consultar metadados de um .rpm sem instalar
rpm -qip pacote.rpm               # informações
rpm -qlp pacote.rpm               # arquivos que seriam instalados
rpm -qRp pacote.rpm               # dependências`}
        language="bash"
        title="arquivos rpm"
      />

      <h2>Verificação e Integridade</h2>
      <CodeBlock
        code={`# Verificar integridade de todos os pacotes instalados
rpm -Va

# Verificar um pacote específico
rpm -V firefox

# Resultado da verificação:
# S = tamanho do arquivo mudou
# M = permissões ou tipo de arquivo mudou
# 5 = checksum MD5 mudou
# L = symlink mudou
# U = usuário (dono) mudou
# G = grupo mudou
# T = data de modificação mudou

# Importar chave GPG do Fedora (para verificar assinaturas)
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-*

# Listar chaves GPG importadas
rpm -qa gpg-pubkey*
rpm -qi gpg-pubkey-xxxxx`}
        language="bash"
        title="verificação"
      />

      <h2>Extraindo Conteúdo de um RPM</h2>
      <CodeBlock
        code={`# Instalar ferramenta para extrair RPMs
sudo dnf install rpm2cpio cpio

# Extrair conteúdo de um .rpm sem instalar
rpm2cpio pacote.rpm | cpio -idmv

# Ver conteúdo sem extrair
rpm2cpio pacote.rpm | cpio -t`}
        language="bash"
        title="extraindo rpm"
      />

      <AlertBox type="info" title="DNF vs RPM direto">
        Para instalação e remoção do dia a dia, use sempre <strong>DNF</strong> — ele resolve dependências, gerencia repositórios e mantém o banco de dados consistente. Use o comando <code>rpm</code> diretamente para consultas e verificações de integridade.
      </AlertBox>

      <h2>Tabela de Comandos RPM Essenciais</h2>
      <table>
        <thead><tr><th>Comando</th><th>Ação</th></tr></thead>
        <tbody>
          <tr><td><code>rpm -qa</code></td><td>Listar todos os instalados</td></tr>
          <tr><td><code>rpm -q pkg</code></td><td>Verificar se pacote está instalado</td></tr>
          <tr><td><code>rpm -qi pkg</code></td><td>Informações do pacote instalado</td></tr>
          <tr><td><code>rpm -ql pkg</code></td><td>Arquivos do pacote instalado</td></tr>
          <tr><td><code>rpm -qf /path</code></td><td>Qual pacote instalou o arquivo</td></tr>
          <tr><td><code>rpm -qip pkg.rpm</code></td><td>Informações de um .rpm sem instalar</td></tr>
          <tr><td><code>rpm -Va</code></td><td>Verificar integridade de todos</td></tr>
          <tr><td><code>rpm -K pkg.rpm</code></td><td>Verificar assinatura de um .rpm</td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
