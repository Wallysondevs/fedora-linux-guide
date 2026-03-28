import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4 border-0">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
        <Link href="/">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
            <Home className="w-4 h-4" /> Voltar ao início
          </button>
        </Link>
      </div>
    </div>
  );
}
