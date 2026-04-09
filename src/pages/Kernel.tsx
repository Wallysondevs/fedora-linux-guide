import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Cpu, Settings, Shield, Terminal, HardDrive, Zap } from "lucide-react";

  export default function Kernel() {
    return (
      <PageContainer
        title="Kernel Linux no Fedora"
        subtitle="Entenda o kernel do Fedora: verificar versão, módulos, parâmetros de boot, atualização e compilação personalizada."
        difficulty="avancado"
        timeToRead="25 min"
      >
        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> O Kernel no Fedora</h2>
        <p>
          O <strong>kernel</strong> é o coração do Linux — ele gerencia hardware, memória, processos e
          comunicação entre software e hardware. O Fedora é conhecido por usar kernels muito recentes,
          frequentemente entre os primeiros a adotar novas versões.
        </p>

        <h2>Informações do Kernel</h2>
        <CodeBlock
          code={`# Ver versão atual
  uname -r
  # 6.7.4-200.fc39.x86_64

  # Informações detalhadas
  uname -a

  # Ver todos os kernels instalados
  rpm -qa kernel

  # Informações do sistema
  hostnamectl
  cat /etc/fedora-release

  # Parâmetros de boot do kernel atual
  cat /proc/cmdline

  # Informações de hardware
  lscpu          # CPU
  lsmem          # memória
  lspci          # dispositivos PCI
  lsusb          # dispositivos USB
  lsblk          # discos`}
          language="bash"
          title="informações"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Módulos do Kernel</h2>
        <CodeBlock
          code={`# Listar módulos carregados
  lsmod

  # Informações de um módulo
  modinfo nome_modulo

  # Carregar módulo
  sudo modprobe nome_modulo

  # Remover módulo
  sudo modprobe -r nome_modulo

  # Listar módulos com filtro
  lsmod | grep nvidia
  lsmod | grep bluetooth

  # Carregar módulo no boot
  echo "nome_modulo" | sudo tee /etc/modules-load.d/meumodulo.conf

  # Blacklist (impedir carregamento)
  echo "blacklist nouveau" | sudo tee /etc/modprobe.d/blacklist-nouveau.conf`}
          language="bash"
          title="módulos"
        />

        <h2><Shield className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciar Kernels</h2>
        <CodeBlock
          code={`# Atualizar kernel
  sudo dnf update kernel

  # Ver kernels disponíveis
  dnf list kernel

  # O Fedora mantém 3 kernels por padrão (para fallback)
  # Configurar quantos manter:
  sudo vim /etc/dnf/dnf.conf
  # installonly_limit=3

  # Remover kernel antigo específico
  sudo dnf remove kernel-6.5.0-100.fc38

  # Se o novo kernel causar problemas:
  # 1. Reinicie
  # 2. No GRUB, selecione o kernel anterior
  # 3. Ou: sudo grubby --set-default /boot/vmlinuz-VERSAO_ANTIGA`}
          language="bash"
          title="gerenciar kernels"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Parâmetros do Kernel (sysctl)</h2>
        <CodeBlock
          code={`# Ver todos os parâmetros
  sysctl -a

  # Ver um parâmetro específico
  sysctl vm.swappiness
  # vm.swappiness = 60

  # Alterar temporariamente
  sudo sysctl vm.swappiness=10

  # Alterar permanentemente
  echo "vm.swappiness=10" | sudo tee /etc/sysctl.d/99-custom.conf
  sudo sysctl --system

  # Parâmetros úteis
  # vm.swappiness=10               # menos uso de swap
  # net.core.somaxconn=65535        # mais conexões simultâneas
  # fs.file-max=2097152             # mais arquivos abertos`}
          language="bash"
          title="sysctl"
        />

        <AlertBox type="warning" title="Kernels de fallback">
          Nunca remova todos os kernels antigos! Se o kernel novo causar problemas, você precisa
          de um anterior para iniciar. O Fedora mantém 3 por padrão — é uma boa configuração.
        </AlertBox>
      </PageContainer>
    );
  }
  