import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { ScrollText, Play, RotateCcw } from "lucide-react";

export default function ShellScripting() {
  return (
    <PageContainer
      title="Shell Scripting"
      subtitle="Automatize tarefas repetitivas com scripts Bash — variáveis, condicionais, loops, funções e boas práticas."
      difficulty="intermediario"
      timeToRead="45 min"
    >
      <h2><ScrollText className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Shell Scripting?</h2>
      <p>
        Scripts shell são arquivos de texto com sequências de comandos executados pelo Bash. Em vez de digitar os mesmos comandos sempre, você escreve uma vez e executa quantas vezes quiser. Isso é a base da automação no Linux.
      </p>

      <h2><Play className="inline-block mr-2 mb-1 w-5 h-5" /> Seu Primeiro Script</h2>
      <CodeBlock
        code={`#!/bin/bash
# ↑ Shebang: diz ao sistema que este arquivo é um script Bash
# Linhas que começam com # são comentários

echo "Olá, Fedora!"
echo "Data atual: $(date)"
echo "Usuário: $USER"
echo "Diretório atual: $PWD"`}
        language="bash"
        title="primeiro-script.sh"
      />

      <CodeBlock
        code={`# 1. Crie o arquivo
nano meu-script.sh

# 2. Dê permissão de execução
chmod +x meu-script.sh

# 3. Execute
./meu-script.sh

# Alternativa: executar diretamente com bash (sem precisar de chmod)
bash meu-script.sh`}
        language="bash"
        title="como executar"
      />

      <h2>Variáveis</h2>
      <CodeBlock
        code={`#!/bin/bash

# Definir variável (sem espaço no =)
NOME="Fedora"
VERSAO=41
CAMINHO="/home/usuario"

# Acessar variável com $
echo "Bem-vindo ao $NOME $VERSAO"
echo "Pasta: $CAMINHO"

# Variáveis especiais automáticas
echo "Nome do script: $0"
echo "Primeiro argumento: $1"
echo "Segundo argumento: $2"
echo "Todos os argumentos: $@"
echo "Número de argumentos: $#"
echo "PID do script: $$"
echo "Exit code do último comando: $?"

# Exemplo de uso de argumentos
# ./instalar.sh nginx 80
PACOTE=$1
PORTA=$2
echo "Instalando $PACOTE na porta $PORTA"

# Substituição de comando (guarda saída em variável)
DATA=$(date +%Y-%m-%d)
USUARIO=$(whoami)
IP=$(hostname -I | awk '{print $1}')
echo "Backup iniciado em $DATA pelo usuário $USUARIO ($IP)"`}
        language="bash"
        title="variáveis"
      />

      <h2>Lendo Entrada do Usuário</h2>
      <CodeBlock
        code={`#!/bin/bash

# Ler input do usuário
read -p "Qual é o seu nome? " NOME
echo "Olá, $NOME!"

# Ler com timeout
read -t 10 -p "Você quer continuar? (s/n): " RESPOSTA

# Ler senha (sem mostrar na tela)
read -s -p "Digite a senha: " SENHA
echo ""   # pular linha após a senha

# Ler linha de um arquivo
while read linha; do
  echo "Linha: $linha"
done < /etc/hosts`}
        language="bash"
        title="entrada do usuário"
      />

      <h2>Condicionais (if / elif / else)</h2>
      <CodeBlock
        code={`#!/bin/bash

NUMERO=42

# Comparações numéricas: -eq, -ne, -gt, -lt, -ge, -le
if [ $NUMERO -gt 50 ]; then
  echo "Maior que 50"
elif [ $NUMERO -eq 42 ]; then
  echo "É exatamente 42!"
else
  echo "Menor que 50"
fi

# Comparações de string: = ou ==, !=, -z (vazia), -n (não vazia)
NOME="fedora"
if [ "$NOME" = "fedora" ]; then
  echo "É Fedora!"
fi

if [ -z "$NOME" ]; then
  echo "Nome vazio"
fi

# Verificar arquivos/diretórios
if [ -f "/etc/dnf/dnf.conf" ]; then
  echo "Arquivo existe"
fi

if [ -d "/home" ]; then
  echo "Diretório /home existe"
fi

if [ -r "/etc/passwd" ]; then
  echo "Arquivo é legível"
fi

# Operadores lógicos
if [ $NUMERO -gt 10 ] && [ $NUMERO -lt 100 ]; then
  echo "Entre 10 e 100"
fi

if [ "$NOME" = "arch" ] || [ "$NOME" = "fedora" ]; then
  echo "É Arch ou Fedora"
fi

# Versão moderna com [[ ]] (mais recursos, menos bugs)
if [[ $NOME == "fed"* ]]; then    # glob pattern
  echo "Começa com fed"
fi`}
        language="bash"
        title="condicionais"
      />

      <h2>Loops</h2>
      <CodeBlock
        code={`#!/bin/bash

# === FOR — lista de itens ===
for DISTRO in Fedora Ubuntu Arch Debian; do
  echo "Distro: $DISTRO"
done

# FOR — faixa numérica
for i in {1..10}; do
  echo "Número: $i"
done

# FOR — com passo (de 0 a 100 de 10 em 10)
for i in {0..100..10}; do
  echo "$i"
done

# FOR — estilo C
for ((i=0; i<5; i++)); do
  echo "i = $i"
done

# FOR — iterar arquivos
for ARQUIVO in /etc/*.conf; do
  echo "Configuração: $ARQUIVO"
done

# === WHILE — enquanto condição for verdadeira ===
CONTADOR=1
while [ $CONTADOR -le 5 ]; do
  echo "Tentativa $CONTADOR"
  CONTADOR=$((CONTADOR + 1))
done

# WHILE — ler arquivo linha por linha
while read linha; do
  echo "Processando: $linha"
done < lista-pacotes.txt

# === UNTIL — até condição ser verdadeira ===
N=1
until [ $N -gt 5 ]; do
  echo "N = $N"
  N=$((N + 1))
done

# === BREAK e CONTINUE ===
for i in {1..10}; do
  if [ $i -eq 5 ]; then
    continue    # pula o 5
  fi
  if [ $i -eq 8 ]; then
    break       # para no 8
  fi
  echo $i
done`}
        language="bash"
        title="loops"
      />

      <h2>Case (switch)</h2>
      <CodeBlock
        code={`#!/bin/bash

read -p "O que você quer fazer? (instalar/remover/atualizar): " ACAO

case $ACAO in
  instalar|install|i)
    echo "Instalando pacote..."
    sudo dnf install "$2"
    ;;
  remover|remove|r)
    echo "Removendo pacote..."
    sudo dnf remove "$2"
    ;;
  atualizar|update|u)
    echo "Atualizando sistema..."
    sudo dnf upgrade
    ;;
  sair|exit|q)
    echo "Saindo..."
    exit 0
    ;;
  *)
    echo "Opção inválida: $ACAO"
    exit 1
    ;;
esac`}
        language="bash"
        title="case"
      />

      <h2>Funções</h2>
      <CodeBlock
        code={`#!/bin/bash

# Definir uma função
saudacao() {
  echo "Olá, $1! Bem-vindo ao Fedora."
}

# Chamar a função com argumento
saudacao "João"
saudacao "Maria"

# Função com retorno de valor via echo
somar() {
  local A=$1
  local B=$2
  echo $((A + B))
}

RESULTADO=$(somar 10 25)
echo "10 + 25 = $RESULTADO"

# Função com exit code (return)
usuario_existe() {
  if id "$1" &>/dev/null; then
    return 0    # sucesso (true)
  else
    return 1    # falha (false)
  fi
}

if usuario_existe "root"; then
  echo "Usuário root existe"
fi

# Variáveis locais (não vazam para fora da função)
calcular() {
  local TEMP=100        # local só existe dentro da função
  echo $((TEMP * $1))
}

# Boas práticas: funções para organizar o script
instalar_dependencias() {
  echo "[1/4] Instalando dependências..."
  sudo dnf install -y curl wget git
}

configurar_firewall() {
  echo "[2/4] Configurando firewall..."
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --reload
}

main() {
  instalar_dependencias
  configurar_firewall
  echo "Concluído!"
}

main`}
        language="bash"
        title="funções"
      />

      <h2>Tratamento de Erros</h2>
      <CodeBlock
        code={`#!/bin/bash

# set -e: aborta o script ao primeiro erro
set -e

# set -u: erro se variável indefinida for usada
set -u

# set -o pipefail: pipe falha se qualquer comando falhar
set -o pipefail

# Combinação recomendada para scripts robustos:
set -euo pipefail

# Verificar exit code manualmente
if ! sudo dnf install nginx; then
  echo "ERRO: Falha ao instalar nginx" >&2
  exit 1
fi

# Trap — executar ação quando o script terminar/falhar
trap "echo 'Script interrompido!'; rm -f /tmp/lock" EXIT
trap "echo 'Erro na linha $LINENO'; exit 1" ERR

# Verificar se é root
if [ "$EUID" -ne 0 ]; then
  echo "Este script precisa ser executado como root"
  echo "Use: sudo $0"
  exit 1
fi

# Verificar dependências antes de executar
for cmd in curl wget git; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Dependência não encontrada: $cmd"
    echo "Instale com: sudo dnf install $cmd"
    exit 1
  fi
done`}
        language="bash"
        title="tratamento de erros"
      />

      <h2><RotateCcw className="inline-block mr-2 mb-1 w-5 h-5" /> Script Completo de Exemplo</h2>
      <CodeBlock
        code={`#!/bin/bash
# ============================================
# Script: backup-home.sh
# Descrição: Faz backup da pasta home com data
# Uso: ./backup-home.sh [destino]
# ============================================

set -euo pipefail

USUARIO=$(whoami)
DATA=$(date +%Y%m%d_%H%M%S)
ORIGEM="/home/$USUARIO"
DESTINO="\${1:-/tmp}"
ARQUIVO="backup-\${USUARIO}-\${DATA}.tar.gz"

# Função de log
log() {
  echo "[$(date +%H:%M:%S)] $1"
}

# Verificar se destino existe
if [ ! -d "$DESTINO" ]; then
  echo "Diretório de destino não existe: $DESTINO"
  exit 1
fi

log "Iniciando backup de $ORIGEM"
log "Destino: $DESTINO/$ARQUIVO"

# Criar backup
tar -czf "$DESTINO/$ARQUIVO" "$ORIGEM" 2>/dev/null

# Verificar se foi criado
if [ -f "$DESTINO/$ARQUIVO" ]; then
  TAMANHO=$(du -sh "$DESTINO/$ARQUIVO" | cut -f1)
  log "Backup concluído! Tamanho: $TAMANHO"
  log "Arquivo: $DESTINO/$ARQUIVO"
else
  log "ERRO: Backup falhou!"
  exit 1
fi`}
        language="bash"
        title="script-completo.sh"
      />

      <AlertBox type="warning" title="Boas práticas">
        <ul className="list-disc pl-4 mt-1 space-y-1 text-sm">
          <li>Sempre comece com <code>#!/bin/bash</code></li>
          <li>Use <code>set -euo pipefail</code> para scripts robustos</li>
          <li>Aspas nas variáveis: <code>"$VARIAVEL"</code> em vez de <code>$VARIAVEL</code></li>
          <li>Use <code>local</code> dentro de funções para variáveis locais</li>
          <li>Teste com <code>bash -n script.sh</code> (syntax check) antes de executar</li>
          <li>Use <code>shellcheck</code> para analisar erros: <code>sudo dnf install ShellCheck</code></li>
        </ul>
      </AlertBox>
    </PageContainer>
  );
}
