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
import Pipes from "@/pages/Pipes";
import ShellScripting from "@/pages/ShellScripting";
import Seguranca from "@/pages/Seguranca";
import Troubleshooting from "@/pages/Troubleshooting";
import Flags from "@/pages/Flags";
import Dicas from "@/pages/Dicas";
import Referencias from "@/pages/Referencias";
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
        <Route path="/terminal" component={Terminal} />
        <Route path="/arquivos" component={Arquivos} />
        <Route path="/navegacao" component={Navegacao} />
        <Route path="/manipulacao-arquivos" component={ManipulacaoArquivos} />
        <Route path="/visualizacao" component={Visualizacao} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/permissoes" component={Permissoes} />
        <Route path="/processos" component={Processos} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/rede" component={Rede} />
        <Route path="/ssh" component={SSH} />
        <Route path="/firewall" component={Firewall} />
        <Route path="/btrfs" component={Btrfs} />
        <Route path="/rpm" component={RPM} />
        <Route path="/atualizacao" component={Atualizacao} />
        <Route path="/desenvolvimento" component={Desenvolvimento} />
        <Route path="/containers" component={Containers} />
        <Route path="/pipes" component={Pipes} />
        <Route path="/shell-scripting" component={ShellScripting} />
        <Route path="/seguranca" component={Seguranca} />
        <Route path="/troubleshooting" component={Troubleshooting} />
        <Route path="/flags" component={Flags} />
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
