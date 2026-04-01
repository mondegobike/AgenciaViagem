import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({ nome: '', email: '', destino: '', mensagem: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido enviado! Obrigado, ${formData.nome}.`);
    setFormData({ nome: '', email: '', destino: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23]">
      
      {/* NAVBAR FIXA */}
      <nav className="bg-[#FDFCF8]/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => setPage('home')}>
            <span className="text-2xl font-light tracking-[0.3em]">LATITUDE</span>
            <div className="flex items-center">
              <span className="text-3xl font-black tracking-tighter">C</span>
              <span className="ml-2 text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => setPage('home')} className={page === 'home' ? 'border-b border-[#1A2F23]' : 'opacity-60'}>Início</button>
            <button onClick={() => setPage('quem-somos')} className={page === 'quem-somos' ? 'border-b border-[#1A2F23]' : 'opacity-60'}>Quem Somos</button>
            <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm shadow-lg hover:bg-black transition-all">Orçamento</button>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO DINÂMICO */}
      <main>
        {page === 'home' && (
          <>
            <header className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000" className="w-full h-full object-cover brightness-[0.8]" alt="Hero" />
                <div className="absolute inset-0 bg-[#1A2F23]/20" />
              </div>
              <div className="relative z-10 max-w-4xl animate-in fade-in zoom-in duration-1000">
                <h1 className="text-5xl md:text-8xl font-light text-[#FDFCF8] mb-8 tracking-tight leading-[1.1]">Roteiros de Autor</h1>
                <p className="text-lg md:text-xl text-[#FDFCF8]/90 max-w-2xl mx-auto mb-10 font-light">Viagens exclusivas com curadoria minuciosa para quem valoriza o autêntico.</p>
                <button onClick={() => setPage('contacto')} className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:invert transition-all">Solicitar Roteiro</button>
              </div>
            </header>
            
            <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4 p-8 border border-stone-100">
                <Globe className="mx-auto h-8 w-8 text-stone-400" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Curadoria Global</h3>
                <p className="text-stone-500 font-light italic text-sm leading-relaxed">Experiência local em cada destino selecionado.</p>
              </div>
              <div className="space-y-4 p-8 border border-stone-100">
                <Map className="mx-auto h-8 w-8 text-stone-400" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Design à Medida</h3>
                <p className="text-stone-500 font-light italic text-sm leading-relaxed">Roteiros desenhados exclusivamente para o seu perfil.</p>
              </div>
              <div className="space-y-4 p-8 border border-stone-100">
                <Star className="mx-auto h-8 w-8 text-stone-400" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Serviço Premium</h3>
                <p className="text-stone-500 font-light italic text-sm leading-relaxed">Acompanhamento e assistência dedicada 24/7.</p>
              </div>
            </section>
          </>
        )}

        {page === 'quem-somos' && (
          <section className="py-24 px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="rounded-sm shadow-2xl grayscale" alt="Equipa" />
                <div className="absolute -bottom-6 -right-6 bg-[#1A2F23] text-[#FDFCF8] p-8 hidden md:block">
                  <p className="text-3xl font-light">10+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Anos de Curadoria</p>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-5xl font-light tracking-tighter">A Nossa <br /><span className="font-bold italic text-stone-400">Filosofia.</span></h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed">A Latitude C nasceu para elevar a experiência de viajar. Não vendemos pacotes; desenhamos jornadas de descoberta.</p>
                <p className="text-stone-500 leading-relaxed font-light">Acreditamos que o luxo está na autenticidade e no acesso a lugares que não constam nos guias comuns. A nossa equipa de "Travel Designers" garante que cada detalhe reflete a alma do viajante.</p>
              </div>
            </div>
          </section>
        )}

        {page === 'contacto' && (
          <section className="py-24 px-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl font-light tracking-tighter">Peça o seu <span className="font-bold italic text-stone-400">Orçamento</span></h2>
              <p className="text-stone-400 tracking-[0.4em] uppercase text-[10px]">Atendimento Personalizado</p>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A2F23] p-3 rounded-full text-white"><Phone size={18}/></div>
                  <div><p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Contacto Directo</p><p>+351 912 345 678</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1A2F23] p-3 rounded-full text-white"><Mail size={18}/></div>
                  <div><p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Email</p><p>reservas@latitudec.pt</p></div>
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className="md:col-span-2 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#1A2F23] transition-colors" required />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#1A2F23] transition-colors" required />
                </div>
                <input type="text" placeholder="Destino pretendido" value={formData.destino} onChange={(e) => setFormData({...formData, destino: e.target.value})} className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#1A2F23] transition-colors" required />
                <textarea placeholder="Detalhes adicionais (nº pessoas, datas, preferências)..." value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} className="w-full border-b border-stone-300 py-3 bg-transparent outline-none focus:border-[#1A2F23] transition-colors h-32 resize-none"></textarea>
                <button type="submit" className="w-full bg-[#1A2F23] text-[#FDFCF8] py-5 font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3">
                  <Send size={16}/> Enviar Solicitação
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-stone-200 text-center mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400">Latitude C • Agência de Viagens • 2026</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
