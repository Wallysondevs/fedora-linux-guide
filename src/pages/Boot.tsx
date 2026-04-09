import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Power, Settings, Shield, Clock, Terminal, Cpu } from "lucide-react";

  export default function Boot() {
    return (
      <PageContainer
        title="Boot e GRUB"
        subtitle="Entenda o processo de boot do Fedora: GRUB, kernel, systemd targets, dual boot e recuperação."
        difficulty="avancado"
        timeToRead="20 min"
      >
        <h2><Power className="inline-block mr-2 mb-1 w-5 h-5" /> Processo de Boot</h2>
        <p>
          Quando você liga o computador com Fedora, acontece esta sequência:
        </p>
        <ul>
          <li><strong>UEFI/BIOS</strong> → inicializa hardware, busca bootloader</li>
          <li><strong>GRUB</strong> → menu de seleção de kernel/sistema</li>
          <li><strong>Kernel</strong> → carrega drivers, monta root filesystem</li>
          <li><strong>systemd</strong> → inicia serviços na ordem correta</li>
          <li><strong>GDM</strong> → tela de login (GNOME Display Manager)</li>
        </ul>

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> GRUB</h2>
        <CodeBlock
          code={`# Ver configuração do GRUB
  cat /etc/default/grub

  # Editar (com cuidado!)
  sudo vim /etc/default/grub

  # Opções úteis:
  # GRUB_TIMEOUT=5              # tempo do menu (segundos)
  # GRUB_DEFAULT=saved           # lembrar última escolha
  # GRUB_SAVEDEFAULT=true

  # Aplicar mudanças
  sudo grub2-mkconfig -o /boot/grub2/grub.cfg

  # Selecionar kernel padrão
  sudo grubby --set-default /boot/vmlinuz-$(uname -r)
  sudo grubby --default-kernel       # ver atual

  # Listar kernels disponíveis
  sudo grubby --info=ALL`}
          language="bash"
          title="GRUB"
        />

        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> Systemd Targets</h2>
        <CodeBlock
          code={`# Ver target atual
  systemctl get-default

  # Targets comuns:
  # graphical.target  = interface gráfica (padrão)
  # multi-user.target = apenas terminal (sem GUI)
  # rescue.target     = modo de recuperação
  # emergency.target  = emergência (mínimo)

  # Mudar target padrão
  sudo systemctl set-default multi-user.target  # sem GUI
  sudo systemctl set-default graphical.target    # com GUI

  # Mudar temporariamente (sem reiniciar)
  sudo systemctl isolate multi-user.target`}
          language="bash"
          title="targets"
        />

        <h2><Clock className="inline-block mr-2 mb-1 w-5 h-5" /> Tempo de Boot</h2>
        <CodeBlock
          code={`# Ver tempo de boot
  systemd-analyze

  # Ver tempo de cada serviço
  systemd-analyze blame

  # Gráfico SVG do boot
  systemd-analyze plot > boot.svg`}
          language="bash"
          title="tempo de boot"
        />

        <AlertBox type="warning" title="Recuperação">
          Se o Fedora não iniciar, selecione um kernel anterior no menu GRUB. Se nenhum funcionar,
          entre no modo de recuperação: no GRUB, edite a entrada (tecla <code>e</code>) e adicione
          <code>single</code> ou <code>systemd.unit=rescue.target</code> ao final da linha do kernel.
        </AlertBox>
      </PageContainer>
    );
  }
  