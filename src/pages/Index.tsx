import { useState, useEffect } from "react";
import SidebarNav from "@/components/SidebarNav";
import ModuleContent from "@/components/ModuleContent";
import { modules } from "@/data/modules";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const currentModuleIndex = modules.findIndex((m) => m.id === activeModule);
  const currentModule = modules[currentModuleIndex];

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? currentModuleIndex - 1 : currentModuleIndex + 1;
    if (newIndex >= 0 && newIndex < modules.length) {
      setActiveModule(modules[newIndex].id);
      window.scrollTo(0, 0);
    }
  };

  const handleSelectModule = (id: string) => {
    setActiveModule(id);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-foreground"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 h-screen z-40 transition-transform duration-200 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        <SidebarNav
          modules={modules}
          activeModule={activeModule}
          onSelectModule={handleSelectModule}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <ModuleContent
        module={currentModule}
        moduleIndex={currentModuleIndex}
        totalModules={modules.length}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Index;
