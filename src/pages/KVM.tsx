import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Monitor, Settings, HardDrive, Network, Shield, Cpu } from "lucide-react";

  export default function KVM() {
    return (
      <PageContainer
        title="KVM — Virtualização no Fedora"
        subtitle="Crie e gerencie máquinas virtuais com KVM, QEMU e libvirt usando virt-manager e virsh no Fedora."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> O que é KVM?</h2>
        <p>
          O <strong>KVM</strong> (Kernel-based Virtual Machine) é a tecnologia de virtualização nativa do Linux,
          integrada diretamente no kernel. No Fedora, o KVM trabalha junto com o <strong>QEMU</strong> (emulador)
          e o <strong>libvirt</strong> (API de gerenciamento) para criar e gerenciar máquinas virtuais com
          performance próxima do hardware nativo.
        </p>
        <p>
          Com KVM você pode rodar Windows, outras distros Linux, ou qualquer sistema operacional
          dentro do Fedora, com aceleração de hardware.
        </p>

        <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> Verificar Suporte a Virtualização</h2>
        <CodeBlock
          code={`# Verificar se o processador suporta virtualização
  # Intel: vmx | AMD: svm
  grep -E '(vmx|svm)' /proc/cpuinfo

  # Ou use este comando mais simples:
  lscpu | grep Virtualization
  # Virtualization: VT-x     (Intel)
  # Virtualization: AMD-V    (AMD)

  # Se não aparecer nada, habilite VT-x/AMD-V na BIOS`}
          language="bash"
          title="verificar suporte"
        />

        <AlertBox type="warning" title="BIOS/UEFI">
          Se o comando acima não retornar resultado, entre na BIOS/UEFI e habilite "Intel VT-x"
          ou "AMD-V" / "SVM Mode". Sem isso, o KVM não funciona.
        </AlertBox>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar grupo de virtualização completo
  sudo dnf install @virtualization

  # Ou instalar pacotes individualmente:
  sudo dnf install qemu-kvm libvirt virt-manager virt-install virt-viewer

  # Habilitar e iniciar o libvirtd
  sudo systemctl enable --now libvirtd

  # Adicionar seu usuário ao grupo libvirt (para usar sem sudo)
  sudo usermod -aG libvirt $(whoami)
  # Faça logout e login para o grupo fazer efeito

  # Verificar se tudo está funcionando
  sudo virt-host-validate
  # QEMU: Checking for hardware virtualization : PASS
  # QEMU: Checking if device /dev/kvm exists   : PASS
  # QEMU: Checking if device /dev/kvm is accessible : PASS`}
          language="bash"
          title="instalação"
        />

        <h2><Monitor className="inline-block mr-2 mb-1 w-5 h-5" /> Criar VM com virt-manager (Interface Gráfica)</h2>
        <p>
          O <strong>virt-manager</strong> é a interface gráfica para gerenciar VMs. É o jeito mais fácil:
        </p>
        <ul>
          <li>Abra o "Virtual Machine Manager" no menu de aplicativos</li>
          <li>Clique em "Create a new virtual machine"</li>
          <li>Selecione a ISO de instalação do sistema operacional</li>
          <li>Configure RAM e CPUs (recomendado: 2+ CPUs, 2+ GB RAM)</li>
          <li>Configure o disco virtual (recomendado: 20+ GB)</li>
          <li>Revise e clique em "Finish" para iniciar a instalação</li>
        </ul>

        <h2>Criar VM pela Linha de Comando</h2>
        <CodeBlock
          code={`# Criar uma VM com virt-install
  sudo virt-install \
    --name fedora-vm \
    --ram 4096 \
    --vcpus 2 \
    --disk size=40 \
    --os-variant fedora-unknown \
    --cdrom /caminho/para/Fedora-Workstation.iso \
    --network bridge=virbr0 \
    --graphics spice

  # Criar VM com Windows
  sudo virt-install \
    --name windows11 \
    --ram 8192 \
    --vcpus 4 \
    --disk size=80 \
    --os-variant win11 \
    --cdrom /caminho/para/Windows11.iso \
    --network bridge=virbr0 \
    --graphics spice \
    --features smm.state=on \
    --boot uefi

  # Listar variantes de SO disponíveis
  virt-install --osinfo list | grep -i fedora
  virt-install --osinfo list | grep -i win`}
          language="bash"
          title="criar VM via CLI"
        />

        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> Gerenciar VMs com virsh</h2>
        <CodeBlock
          code={`# Listar VMs
  virsh list --all
  # Id  Name        State
  # 1   fedora-vm   running
  # -   windows11   shut off

  # Iniciar uma VM
  virsh start fedora-vm

  # Desligar graciosamente
  virsh shutdown fedora-vm

  # Forçar desligamento
  virsh destroy fedora-vm

  # Pausar/resumir
  virsh suspend fedora-vm
  virsh resume fedora-vm

  # Reiniciar
  virsh reboot fedora-vm

  # Remover VM (apenas a definição, não o disco)
  virsh undefine fedora-vm

  # Remover VM e o disco
  virsh undefine fedora-vm --remove-all-storage

  # Informações da VM
  virsh dominfo fedora-vm

  # Editar configuração XML
  virsh edit fedora-vm

  # Acessar console da VM
  virt-viewer fedora-vm

  # Auto-iniciar VM no boot
  virsh autostart fedora-vm
  virsh autostart --disable fedora-vm`}
          language="bash"
          title="gerenciar VMs"
        />

        <h2><HardDrive className="inline-block mr-2 mb-1 w-5 h-5" /> Snapshots</h2>
        <CodeBlock
          code={`# Criar snapshot
  virsh snapshot-create-as fedora-vm --name "antes-update" --description "Antes da atualização"

  # Listar snapshots
  virsh snapshot-list fedora-vm

  # Restaurar snapshot
  virsh snapshot-revert fedora-vm "antes-update"

  # Deletar snapshot
  virsh snapshot-delete fedora-vm "antes-update"

  # Clonar uma VM
  virt-clone --original fedora-vm --name fedora-clone --auto-clone`}
          language="bash"
          title="snapshots"
        />

        <h2><Network className="inline-block mr-2 mb-1 w-5 h-5" /> Rede</h2>
        <CodeBlock
          code={`# Ver redes virtuais
  virsh net-list --all

  # A rede padrão (virbr0) usa NAT — VMs acessam internet pelo host
  # Para VMs acessíveis na rede local, use bridge:

  # Listar interfaces de rede
  virsh net-info default

  # Ver IPs atribuídos às VMs
  virsh net-dhcp-leases default`}
          language="bash"
          title="rede"
        />

        <h2>Referência Rápida</h2>
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>virsh list --all</code></td><td>Listar todas as VMs</td></tr>
            <tr><td><code>virsh start VM</code></td><td>Iniciar VM</td></tr>
            <tr><td><code>virsh shutdown VM</code></td><td>Desligar VM</td></tr>
            <tr><td><code>virsh destroy VM</code></td><td>Forçar desligamento</td></tr>
            <tr><td><code>virsh snapshot-create-as</code></td><td>Criar snapshot</td></tr>
            <tr><td><code>virsh snapshot-revert</code></td><td>Restaurar snapshot</td></tr>
            <tr><td><code>virt-manager</code></td><td>Interface gráfica</td></tr>
            <tr><td><code>virt-install</code></td><td>Criar VM pela CLI</td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Performance">
          VMs KVM no Fedora rodam com performance próxima de 95-98% do hardware nativo, graças à
          aceleração VT-x/AMD-V. Para melhor performance em jogos ou gráficos, pesquise sobre
          <strong> GPU passthrough</strong> (passar a GPU diretamente para a VM).
        </AlertBox>
      </PageContainer>
    );
  }
  