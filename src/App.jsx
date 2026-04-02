import React, { useState, useEffect } from 'react';
import { 
  Instagram, LogIn, LogOut, Users, 
  Briefcase, LayoutDashboard, ShieldCheck, RefreshCw 
} from 'lucide-react';

function App() {
  const [user, setUser] = useState({ name: "Tiago", role: "admin" }); // Simulação de user logado
  const [apiInfo, setApiInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // O TEU URL DO RENDER
  const API_URL = "https://latitudec-api.onrender.com"; 

  const azulMar = "#103D3B";

  // EFEITO PARA LIGAR À TUA API C#
  useEffect(() => {
    const getApiStatus = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Erro ao ligar à API:", error);
      } finally {
        setLoading(false);
      }
    };
    getApiStatus();
  }, []);

  const setApiData = (data) => {
    setApiInfo(data);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex font-sans text-[#1A2F23]">
      
      {/* SIDEBAR (Estilo da última versão) */}
      <aside className="w-64 bg-[#103D3B] text-white flex flex-col p-8 hidden md:flex border-r border-white/10">
        <div className="mb-12">
          <span className="text-xl font-light tracking-[0.3em] block">LATITUDE</span>
          <span className="text-2xl font-black">C</span>
        </div>
        <nav className="flex-1 space-y-4 opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm bg-white/10"><LayoutDashboard size={18}/> Dashboard</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"><Briefcase size={18}/> Reservas</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"><Users size={18}/> Consultores</div>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-widest text-white/40">Ligado a:</p>
          <p className="text-[10px] font-bold text-white/80 break-all">{API_URL}</p>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="bg-white border-b border-stone-100 p-8 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: azulMar }}>Painel de Controlo</h1>
            <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Estado do Sistema em Tempo Real</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-stone-100 flex items-center justify-center text-[#103D3B] font-bold">T</div>
          </div>
        </header>

        {/* CONTEÚDO NO MEIO DO ECRÃ (O QUE RECEBEMOS DA API) */}
        <div className="flex-1 flex items-center justify-center p-8">
          
          <div className="max-w-md w-full">
            {loading ? (
              <div className="flex flex-col items-center gap-4 animate-pulse">
                <RefreshCw className="animate-spin text-stone-300" size={32} />
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">A contactar servidor...</p>
              </div>
            ) : (
              <div className="bg-white rounded-[2rem] shadow-2xl p-12 border border-stone-50 relative overflow-hidden group">
                {/* Detalhe Decorativo Azul Mar */}
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: azulMar }}></div>
                
                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="inline-flex p-4 bg-stone-50 rounded-2xl text-[#103D3B]">
                    <ShieldCheck size={40} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-light italic" style={{ color: azulMar }}>
                      {apiInfo?.mensagem || "Sem resposta"}
                    </h2>
                    <div className="h-px w-12 bg-stone-200 mx-auto my-4"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-stone-50 p-4 rounded-2xl">
                      <p className="text-[9px] font-bold uppercase text-stone-400 tracking-widest mb-1">RNAVT Oficial</p>
                      <p className="text-lg font-black" style={{ color: azulMar }}>{apiInfo?.rnavt}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-2xl">
                      <p className="text-[9px] font-bold uppercase text-stone-400 tracking-widest mb-1">Autorizado por</p>
                      <p className="text-lg font-black text-stone-600">{apiInfo?.autor}</p>
                    </div>
                  </div>

                  <p className="text-[10px] text-stone-300 uppercase tracking-[0.2em] font-medium pt-4">
                    Ligação encriptada via Render Cloud
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* FOOTER INTERNO */}
        <footer className="p-8 text-center border-t border-stone-50">
          <p className="text-[9px] text-stone-400 uppercase tracking-widest">
            © 2026 Latitude C - Sistema de Gestão de Viagens
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
