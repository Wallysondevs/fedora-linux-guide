import { useState, useEffect } from "react";
  import { Switch, Route, Router as WouterRouter } from "wouter";
  import { useHashLocation } from "wouter/use-hash-location";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { ThemeProvider } from "next-themes";

  import { Sidebar } from "@/components/layout/Sidebar";
  import { Header } from "@/components/layout/Header";

  import Home from "@/pages/Home";
  import Historia from "@/pages/Historia";
  import Instalacao from "@/pages/Instalacao";
  import PrimeirosPassos from "@/pages/PrimeirosPassos";
  import DNF from "@/pages/DNF";
  import Flatpak from "@/pages/Flatpak";
  import GNOME from "@/pages/GNOME";
  import GNOMEExtensions from "@/pages/GNOMEExtensions";
  import Terminal from "@/pages/Terminal";
  import Arquivos from "@/pages/Arquivos";
  import Navegacao from "@/pages/Navegacao";
  import ManipulacaoArquivos from "@/pages/ManipulacaoArquivos";
  import Visualizacao from "@/pages/Visualizacao";
  import Usuarios from "@/pages/Usuarios";
  import Permissoes from "@/pages/Permissoes";
  import Processos from "@/pages/Processos";
  import Servicos from "@/pages/Servicos";
  import Rede from "@/pages/Rede";
  import SSH from "@/pages/SSH";
  import Firewall from "@/pages/Firewall";
  import Btrfs from "@/pages/Btrfs";
  import RPM from "@/pages/RPM";
  import Atualizacao from "@/pages/Atualizacao";
  import Desenvolvimento from "@/pages/Desenvolvimento";
  import Containers from "@/pages/Containers";
  import DockerCompose from "@/pages/DockerCompose";
  import Pipes from "@/pages/Pipes";
  import ShellScripting from "@/pages/ShellScripting";
  import Seguranca from "@/pages/Seguranca";
  import Troubleshooting from "@/pages/Troubleshooting";
  import Flags from "@/pages/Flags";
  import Dicas from "@/pages/Dicas";
  import Referencias from "@/pages/Referencias";
  import Vim from "@/pages/Vim";
  import Nginx from "@/pages/Nginx";
  import Apache from "@/pages/Apache";
  import KVM from "@/pages/KVM";
  import Ansible from "@/pages/Ansible";
  import Gaming from "@/pages/Gaming";
  import Backup from "@/pages/Backup";
  import Timeshift from "@/pages/Timeshift";
  import Cron from "@/pages/Cron";
  import MySQL from "@/pages/MySQL";
  import PostgreSQL from "@/pages/PostgreSQL";
  import Zsh from "@/pages/Zsh";
  import VariaveisAmbiente from "@/pages/VariaveisAmbiente";
  import Aliases from "@/pages/Aliases";
  import WinePage from "@/pages/Wine";
  import VSCode from "@/pages/VSCode";
  import GPG from "@/pages/GPG";
  import Fail2Ban from "@/pages/Fail2Ban";
  import LUKS from "@/pages/LUKS";
  import LVM from "@/pages/LVM";
  import Samba from "@/pages/Samba";
  import Git from "@/pages/Git";
  import Python from "@/pages/Python";
  import NodeJS from "@/pages/NodeJS";
  import PHP from "@/pages/PHP";
  import Java from "@/pages/Java";
  import DNS from "@/pages/DNS";
  import Multimedia from "@/pages/Multimedia";
  import Kernel from "@/pages/Kernel";
  import Compressao from "@/pages/Compressao";
  import Fstab from "@/pages/Fstab";
  import JournalCtl from "@/pages/JournalCtl";
  import VPN from "@/pages/VPN";
  import Localizacao from "@/pages/Localizacao";
  import ManPages from "@/pages/ManPages";
  import Hardware from "@/pages/Hardware";
  import Boot from "@/pages/Boot";
  import Disco from "@/pages/Disco";
  import NotFound from "@/pages/not-found";

  const queryClient = new QueryClient();

  function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [location] = useHashLocation();

    useEffect(() => {
      setIsSidebarOpen(false);
      window.scrollTo(0, 0);
    }, [location]);

    return (
      <div className="min-h-screen bg-background text-foreground flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    );
  }

  function Router() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/historia" component={Historia} />
          <Route path="/instalacao" component={Instalacao} />
          <Route path="/primeiros-passos" component={PrimeirosPassos} />
          <Route path="/dnf" component={DNF} />
          <Route path="/flatpak" component={Flatpak} />
          <Route path="/gnome" component={GNOME} />
          <Route path="/gnome-extensions" component={GNOMEExtensions} />
          <Route path="/terminal" component={Terminal} />
          <Route path="/arquivos" component={Arquivos} />
          <Route path="/navegacao" component={Navegacao} />
          <Route path="/manipulacao-arquivos" component={ManipulacaoArquivos} />
          <Route path="/visualizacao" component={Visualizacao} />
          <Route path="/compressao" component={Compressao} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/permissoes" component={Permissoes} />
          <Route path="/processos" component={Processos} />
          <Route path="/servicos" component={Servicos} />
          <Route path="/journalctl" component={JournalCtl} />
          <Route path="/rede" component={Rede} />
          <Route path="/dns" component={DNS} />
          <Route path="/vpn" component={VPN} />
          <Route path="/ssh" component={SSH} />
          <Route path="/firewall" component={Firewall} />
          <Route path="/btrfs" component={Btrfs} />
          <Route path="/fstab" component={Fstab} />
          <Route path="/disco" component={Disco} />
          <Route path="/lvm" component={LVM} />
          <Route path="/rpm" component={RPM} />
          <Route path="/atualizacao" component={Atualizacao} />
          <Route path="/kernel" component={Kernel} />
          <Route path="/boot" component={Boot} />
          <Route path="/desenvolvimento" component={Desenvolvimento} />
          <Route path="/containers" component={Containers} />
          <Route path="/docker-compose" component={DockerCompose} />
          <Route path="/pipes" component={Pipes} />
          <Route path="/shell-scripting" component={ShellScripting} />
          <Route path="/vim" component={Vim} />
          <Route path="/zsh" component={Zsh} />
          <Route path="/aliases" component={Aliases} />
          <Route path="/variaveis-ambiente" component={VariaveisAmbiente} />
          <Route path="/man-pages" component={ManPages} />
          <Route path="/git" component={Git} />
          <Route path="/python" component={Python} />
          <Route path="/nodejs" component={NodeJS} />
          <Route path="/php" component={PHP} />
          <Route path="/java" component={Java} />
          <Route path="/nginx" component={Nginx} />
          <Route path="/apache" component={Apache} />
          <Route path="/mysql" component={MySQL} />
          <Route path="/postgresql" component={PostgreSQL} />
          <Route path="/kvm" component={KVM} />
          <Route path="/ansible" component={Ansible} />
          <Route path="/seguranca" component={Seguranca} />
          <Route path="/gpg" component={GPG} />
          <Route path="/luks" component={LUKS} />
          <Route path="/fail2ban" component={Fail2Ban} />
          <Route path="/samba" component={Samba} />
          <Route path="/backup" component={Backup} />
          <Route path="/timeshift" component={Timeshift} />
          <Route path="/cron" component={Cron} />
          <Route path="/hardware" component={Hardware} />
          <Route path="/localizacao" component={Localizacao} />
          <Route path="/multimedia" component={Multimedia} />
          <Route path="/gaming" component={Gaming} />
          <Route path="/wine" component={WinePage} />
          <Route path="/vscode" component={VSCode} />
          <Route path="/flags" component={Flags} />
          <Route path="/troubleshooting" component={Troubleshooting} />
          <Route path="/dicas" component={Dicas} />
          <Route path="/referencias" component={Referencias} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }

  function App() {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <QueryClientProvider client={queryClient}>
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
        </QueryClientProvider>
      </ThemeProvider>
    );
  }

  export default App;
  