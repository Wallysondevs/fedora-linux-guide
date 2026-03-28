import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Cpu, Globe, Users, Zap } from "lucide-react";

export default function Historia() {
  return (
    <PageContainer
      title="O que é Fedora"
      subtitle="Conheça a distribuição que impulsiona a inovação no mundo Linux — sua história, filosofia e relação com a Red Hat."
      difficulty="iniciante"
      timeToRead="20 min"
    >
      <h2><Cpu className="inline-block mr-2 mb-1 w-5 h-5" /> O Projeto Fedora</h2>
      <p>
        O Fedora é uma distribuição Linux comunitária patrocinada pela <strong>Red Hat</strong> (subsidiária da IBM). Lançado em 2003, o Fedora nasceu como continuação do Red Hat Linux após a empresa dividir seu produto em duas linhas: o Fedora (gratuito, experimental) e o Red Hat Enterprise Linux — RHEL (comercial, estável).
      </p>
      <p>
        O Fedora serve como <strong>laboratório de inovação</strong>: tecnologias que são testadas e amadurecidas no Fedora frequentemente são incorporadas ao RHEL e, por consequência, ao <strong>CentOS Stream</strong> e ao <strong>AlmaLinux</strong>. Isso significa que usar Fedora é estar na vanguarda do ecossistema Linux enterprise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          { icon: <Globe className="w-5 h-5 text-blue-400" />, title: "Freedom", desc: "Software 100% livre. O Fedora não inclui drivers proprietários por padrão — tudo é open source." },
          { icon: <Users className="w-5 h-5 text-green-400" />, title: "Friends", desc: "Comunidade global ativa com SIGs (Special Interest Groups) para cada área de interesse." },
          { icon: <Zap className="w-5 h-5 text-yellow-400" />, title: "Features", desc: "Sempre na vanguarda: últimas versões do kernel, GNOME, Wayland, Pipewire e muito mais." },
          { icon: <Cpu className="w-5 h-5 text-purple-400" />, title: "First", desc: "Pioneiro em adotar novas tecnologias antes de qualquer outra distro mainstream." },
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h4 className="font-bold mt-0 mb-0 border-0">{item.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Versões e Ciclo de Lançamento</h2>
      <p>O Fedora lança uma nova versão a cada aproximadamente <strong>6 meses</strong>. Cada versão recebe suporte por cerca de <strong>13 meses</strong> (até a versão seguinte + 1 mês). Isso exige atualizações periódicas de versão para permanecer suportado.</p>
      <table>
        <thead>
          <tr><th>Edição</th><th>Foco</th><th>Público</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Fedora Workstation</strong></td><td>Desktop com GNOME</td><td>Usuários e desenvolvedores</td></tr>
          <tr><td><strong>Fedora Server</strong></td><td>Servidores e infraestrutura</td><td>Administradores</td></tr>
          <tr><td><strong>Fedora IoT</strong></td><td>Internet das Coisas</td><td>Dispositivos embarcados</td></tr>
          <tr><td><strong>Fedora Cloud</strong></td><td>Imagens para nuvem</td><td>DevOps e cloud</td></tr>
          <tr><td><strong>Fedora CoreOS</strong></td><td>Containers e imutabilidade</td><td>Kubernetes e containers</td></tr>
          <tr><td><strong>Fedora Silverblue</strong></td><td>Desktop imutável</td><td>Usuários que querem estabilidade máxima</td></tr>
          <tr><td><strong>Fedora Spins</strong></td><td>Outros ambientes gráficos</td><td>KDE, XFCE, LXQt, Cinnamon...</td></tr>
        </tbody>
      </table>

      <h2>Fedora vs. outras distribuições</h2>
      <table>
        <thead>
          <tr><th>Distro</th><th>Base</th><th>Pacotes</th><th>Ciclo</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Fedora</strong></td><td>Independente</td><td>RPM / DNF</td><td>~6 meses</td></tr>
          <tr><td>Ubuntu</td><td>Debian</td><td>DEB / APT</td><td>6 meses / LTS</td></tr>
          <tr><td>Arch Linux</td><td>Independente</td><td>Pacman</td><td>Rolling Release</td></tr>
          <tr><td>RHEL</td><td>Fedora</td><td>RPM / DNF</td><td>10 anos</td></tr>
          <tr><td>openSUSE</td><td>Independente</td><td>RPM / Zypper</td><td>Variado</td></tr>
        </tbody>
      </table>

      <AlertBox type="info" title="Por que escolher Fedora?">
        Fedora é ideal para quem quer software atualizado, aprende tecnologias que chegam ao ambiente enterprise (RHEL/CentOS) e valoriza o software livre. É a escolha preferida de muitos desenvolvedores e usuários avançados de Linux.
      </AlertBox>

      <h2>Verificar a versão instalada</h2>
      <CodeBlock
        code={`# Ver versão do Fedora
cat /etc/fedora-release

# Informações completas do sistema
cat /etc/os-release

# Versão do kernel
uname -r

# Arquitetura
uname -m`}
        language="bash"
        title="informações do sistema"
      />
    </PageContainer>
  );
}
