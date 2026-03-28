import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Cpu, Zap, List, Signal } from "lucide-react";

export default function Processos() {
  return (
    <PageContainer
      title="Processos e Gerenciamento"
      subtitle="Entenda, monitore e controle processos no Linux — liste, mate, pause, priorize e gerencie qualquer programa em execução."
      difficulty="intermediario"
      timeToRead="35 min"
    >
      <h2><List className="inline-block mr-2 mb-1 w-5 h-5" /> O que é um Processo?</h2>
      <p>
        Todo programa em execução no Linux é um <strong>processo</strong>. Cada processo tem um identificador único chamado <strong>PID</strong> (Process ID). O processo pai que iniciou o sistema é o <strong>systemd</strong> (PID 1) — todos os demais processos são filhos ou descendentes dele.
      </p>
      <p>
        Cada processo tem um <strong>estado</strong>:
      </p>
      <table>
        <thead><tr><th>Estado</th><th>Letra</th><th>Significado</th></tr></thead>
        <tbody>
          <tr><td>Running</td><td><code>R</code></td><td>Em execução ou pronto para executar</td></tr>
          <tr><td>Sleeping</td><td><code>S</code></td><td>Dormindo — aguardando evento (estado normal)</td></tr>
          <tr><td>Disk Sleep</td><td><code>D</code></td><td>Aguardando I/O de disco (não pode ser interrompido)</td></tr>
          <tr><td>Stopped</td><td><code>T</code></td><td>Pausado (ex: Ctrl+Z)</td></tr>
          <tr><td>Zombie</td><td><code>Z</code></td><td>Finalizado mas pai ainda não leu o status</td></tr>
        </tbody>
      </table>

      <h2>Listando Processos</h2>

      <h3>ps — Snapshot dos processos</h3>
      <CodeBlock
        code={`# Listar processos do usuário atual
ps

# Listar TODOS os processos do sistema (formato BSD)
ps aux

# Listar todos com formato longo (mostra PPID, SID...)
ps -ef

# Listar em formato de árvore (quem iniciou quem)
ps auxf
ps -ejH

# Filtrar por nome
ps aux | grep firefox
ps -C firefox         # forma direta

# Filtrar por usuário
ps -u joao

# Mostrar apenas PIDs de um programa
ps -C nginx -o pid=
pgrep nginx           # forma mais simples`}
        language="bash"
        title="ps — listar processos"
      />

      <h3>Entendendo a saída do ps aux</h3>
      <CodeBlock
        code={`# Colunas do ps aux:
USER       PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1   0.0  0.1 170152 12288 ?        Ss   Jan01   0:02 /usr/lib/systemd/systemd
joao      2547   2.1  4.8 2105432 389556 ?      Sl   10:21   1:45 /usr/lib/firefox/firefox

# USER   = usuário dono do processo
# PID    = identificador único do processo
# %CPU   = porcentagem de CPU usada
# %MEM   = porcentagem de RAM usada
# VSZ    = memória virtual total (pode incluir partes não carregadas)
# RSS    = memória RAM real usada (mais confiável)
# TTY    = terminal vinculado (? = sem terminal, processo de sistema)
# STAT   = estado do processo (S=sleeping, R=running, Z=zombie...)
# START  = quando o processo iniciou
# TIME   = tempo total de CPU consumido
# COMMAND = comando que iniciou o processo`}
        language="bash"
        title="lendo ps aux"
      />

      <h3>pgrep e pidof — Encontrar PIDs</h3>
      <CodeBlock
        code={`# Encontrar PID de um processo pelo nome
pgrep firefox
pgrep -l firefox          # mostra nome + PID
pgrep -a firefox          # mostra comando completo

# Encontrar todos os PIDs de processos com o nome exato
pidof firefox

# Encontrar PID com expressão regular
pgrep "fire.*"

# Encontrar processos de um usuário específico
pgrep -u joao

# Encontrar processo mais recente com esse nome
pgrep -n firefox          # -n = newest (mais recente)
pgrep -o firefox          # -o = oldest (mais antigo)`}
        language="bash"
        title="pgrep e pidof"
      />

      <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> Monitoramento em Tempo Real</h2>

      <h3>top — Monitor básico</h3>
      <CodeBlock
        code={`# Abrir o top
top

# Comandos DENTRO do top:
# q         = sair
# k         = matar processo (pede o PID)
# r         = mudar prioridade (renice)
# M         = ordenar por uso de memória
# P         = ordenar por uso de CPU (padrão)
# T         = ordenar por tempo de CPU
# u         = filtrar por usuário
# 1         = mostrar cada núcleo de CPU separadamente
# h         = ajuda

# Executar top e sair automaticamente após 1 ciclo
top -b -n 1 | head -20`}
        language="bash"
        title="top"
      />

      <h3>htop — Monitor avançado (recomendado)</h3>
      <CodeBlock
        code={`# Instalar o htop (pode já vir instalado)
sudo dnf install htop

# Abrir o htop
htop

# Comandos DENTRO do htop:
# F1 / ?    = ajuda
# F2        = configurações (personalizar colunas, cores)
# F3 / /    = buscar processo por nome
# F4        = filtrar (mostrar apenas processos filtrados)
# F5        = modo árvore (ver hierarquia pai/filho)
# F6        = ordenar por coluna
# F7        = diminuir prioridade (nice +)
# F8        = aumentar prioridade (nice -)
# F9        = matar processo (escolhe o sinal)
# F10 / q   = sair
# Espaço    = marcar processo (para operações em lote)
# Setas     = navegar na lista`}
        language="bash"
        title="htop"
      />

      <h3>btop — Monitor moderno e visual</h3>
      <CodeBlock
        code={`# Instalar o btop
sudo dnf install btop

# Abre uma interface gráfica moderna no terminal
# com gráficos de CPU, memória, rede e disco em tempo real
btop`}
        language="bash"
        title="btop"
      />

      <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Matando Processos</h2>
      <p>
        Para encerrar um processo, você envia um <strong>sinal</strong> a ele. O sinal mais comum é o <code>SIGTERM</code> (15) — um pedido educado para encerrar. Se o processo não responder, use <code>SIGKILL</code> (9) — que o kernel encerra imediatamente, sem dar chance ao processo de reagir.
      </p>

      <h3>kill — Matar pelo PID</h3>
      <CodeBlock
        code={`# Enviar SIGTERM (pedido de encerramento — o processo pode ignorar)
kill 1234              # kill PID

# Enviar SIGKILL (encerramento forçado — impossível ignorar)
kill -9 1234
kill -KILL 1234        # equivalente

# Enviar SIGHUP (recarregar configurações — útil para serviços)
kill -HUP 1234
kill -1 1234

# Enviar SIGSTOP (pausar o processo, como Ctrl+Z)
kill -STOP 1234

# Enviar SIGCONT (continuar processo pausado)
kill -CONT 1234

# Matar múltiplos PIDs de uma vez
kill 1234 5678 9012`}
        language="bash"
        title="kill"
      />

      <h3>killall — Matar pelo nome</h3>
      <CodeBlock
        code={`# Matar todos os processos com esse nome (SIGTERM)
killall firefox

# Forçar encerramento (SIGKILL)
killall -9 firefox
killall -KILL firefox

# Matar apenas do usuário atual
killall -u joao firefox

# Pedir confirmação antes de matar
killall -i firefox

# Matar e aguardar o processo encerrar
killall -w firefox

# Ver quais processos seriam mortos (sem matar)
killall --list firefox   # não existe, use pgrep antes`}
        language="bash"
        title="killall"
      />

      <h3>pkill — Matar com padrão de busca</h3>
      <CodeBlock
        code={`# Matar processos cujo nome corresponde ao padrão
pkill firefox
pkill "fire.*"          # expressão regular

# Forçar encerramento
pkill -9 firefox
pkill -KILL firefox

# Matar processos de um usuário específico
pkill -u joao firefox

# Matar processos em um terminal específico
pkill -t pts/1          # mata tudo no terminal pts/1

# Matar processo pai e filhos (grupo de processo)
pkill -g PID`}
        language="bash"
        title="pkill"
      />

      <h3>xkill — Matar clicando na janela</h3>
      <CodeBlock
        code={`# Instalar xkill (se não tiver)
sudo dnf install xorg-x11-apps

# Executar xkill — o cursor vira uma caveira
# Clique na janela que você quer fechar
xkill

# Dica: crie um atalho de teclado no GNOME para xkill
# Configurações → Teclado → Atalhos → Personalizado → xkill`}
        language="bash"
        title="xkill — clique para matar"
      />

      <AlertBox type="warning" title="Ordem recomendada para matar processos">
        <ol className="list-decimal pl-4 mt-2 space-y-1 text-sm">
          <li><strong>Primeiro:</strong> tente fechar normalmente pelo próprio aplicativo</li>
          <li><strong>Segundo:</strong> use <code>kill PID</code> ou <code>killall nome</code> (SIGTERM — educado)</li>
          <li><strong>Terceiro:</strong> use <code>kill -9 PID</code> (SIGKILL — força bruta)</li>
          <li><strong>Nunca</strong> mate o PID 1 (systemd) — derruba o sistema</li>
        </ol>
      </AlertBox>

      <h2><Signal className="inline-block mr-2 mb-1 w-5 h-5" /> Sinais Linux — Tabela Completa</h2>
      <CodeBlock
        code={`# Ver todos os sinais disponíveis
kill -l

# Sinais mais importantes:
# Num  Nome      O que faz
#  1   SIGHUP    Recarregar configurações (hangup)
#  2   SIGINT    Interrupção (equivale ao Ctrl+C)
#  3   SIGQUIT   Encerrar com dump (Ctrl+\\)
#  9   SIGKILL   Matar imediatamente (NÃO pode ser ignorado)
# 15   SIGTERM   Pedido de encerramento (pode ser ignorado)
# 17   SIGCHLD   Filho terminou (usado pelo processo pai)
# 18   SIGCONT   Continuar processo pausado
# 19   SIGSTOP   Pausar processo (NÃO pode ser ignorado)
# 20   SIGTSTP   Suspender (Ctrl+Z — pode ser ignorado)`}
        language="bash"
        title="sinais"
      />

      <h2>Prioridade de Processos (nice)</h2>
      <p>
        O valor de <strong>nice</strong> define a prioridade de um processo: vai de <code>-20</code> (máxima prioridade) a <code>19</code> (mínima prioridade). O padrão é <code>0</code>. Valores mais baixos significam mais CPU.
      </p>
      <CodeBlock
        code={`# Iniciar um processo com prioridade baixa (não atrapalha o sistema)
nice -n 15 comando

# Iniciar com prioridade alta (requer sudo)
sudo nice -n -10 comando

# Mudar a prioridade de um processo já em execução
renice -n 10 -p 1234        # diminui prioridade do PID 1234
sudo renice -n -5 -p 1234   # aumenta prioridade (requer sudo)
renice -n 10 -u joao        # muda prioridade de todos os processos do usuário

# Ver prioridade atual dos processos
ps -eo pid,ni,comm          # PID, nice, nome
top                          # coluna NI`}
        language="bash"
        title="nice e renice"
      />

      <h2>Processos em Background e Foreground</h2>
      <CodeBlock
        code={`# Iniciar processo em background (não trava o terminal)
comando &
sleep 60 &

# Ver processos em background
jobs
jobs -l    # com PIDs

# Trazer processo para foreground (frente)
fg         # o mais recente
fg %1      # job número 1
fg %nome   # pelo nome

# Enviar para background (precisa pausar primeiro)
Ctrl + Z   # pausa o processo atual
bg         # retoma em background
bg %1      # job específico

# Ver status de um job
jobs -l

# Desacoplar processo do terminal (persiste após fechar o terminal)
nohup comando &
nohup comando > saida.log 2>&1 &

# Desacoplar processo já em execução
# 1. Ctrl+Z (pausa)
# 2. bg (coloca em background)
# 3. disown (desacopla do terminal)
disown %1`}
        language="bash"
        title="background e foreground"
      />

      <h2>Informações Detalhadas de um Processo</h2>
      <CodeBlock
        code={`# Ver informações completas de um processo (pasta virtual /proc)
ls /proc/1234/             # tudo sobre o PID 1234

# Arquivos e descritores abertos
lsof -p 1234

# Qual programa abriu um arquivo específico
lsof /var/log/nginx/access.log
fuser /var/log/nginx/access.log

# Conexões de rede de um processo
ss -tulpn | grep PID
lsof -p 1234 -i

# Árvore de processos
pstree                    # todos os processos
pstree -p                 # com PIDs
pstree -u joao            # processos do usuário joao
pstree -p 1234            # subárvore a partir do PID 1234`}
        language="bash"
        title="informações detalhadas"
      />
    </PageContainer>
  );
}
