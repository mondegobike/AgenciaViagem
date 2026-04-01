import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users2, Banknote, Calendar, Menu, X, ExternalLink } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ESTADO PARA O MENU MOBILE
  const [formData, setFormData] = useState({
    nome: '', email: '', destino: '', 
    inicio: '', fim: '', flexivel: false,
    adultos: '2', criancas: '0',
    budget: 'Sob Consulta', mensagem: ''
  });

  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";

  // Fecha o menu sempre que mudas de página ou redimensionas
  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Orçamento: ${formData.destino} - ${formData.nome}`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\nDestino: ${formData.destino}\nDatas: ${formData.inicio} a ${formData.fim}\nViajantes: ${formData.adultos} Ad / ${formData.criancas} Cri\nBudget: ${formData.budget}\nNotas: ${formData.mensagem}`);
    window.location.href = `mailto:reservas@latitudec.pt?subject=${subject}&body=${body}`;
  };

  // --- COMPONENTE NAVBAR COM MENU MOBILE ---
  const Navbar = () => (
    <nav className="bg-[#FDFCF8]/95 backdrop-blur-md sticky top-0 z-[100] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex flex-col cursor-pointer" onClick={() => setPage('home')}>
          <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-[#1A2F23]">LATITUDE</span>
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1A2F23]">C</span>
            <span className="ml-2 text-[8px] md:text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
          </div>
        </div>

        {/* BOTÃO HAMBÚRGUER (Apenas Mobile) */}
        <button 
          className="md:hidden text-[#1A2F23] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
          <button onClick={() => setPage('home')} className={page === 'home' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : 'hover:text-[#1A2F23]'}>Início</button>
          <button onClick={() => setPage('destinos')} className={page === 'destinos' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : 'hover:text-[#1A2F23]'}>Destinos</button>
          <button onClick={() => setPage('quem-somos')} className={page === 'quem-somos' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : 'hover:text-[#1A2F23]'}>Sobre</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-6 py-3 rounded-sm hover:bg-black transition-all">Orçamento</button>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFCF8] border-b border-stone-200 shadow-xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-8 gap-6 text-sm font-bold uppercase tracking-widest text-[#1A2F23]">
            <button onClick={() => setPage('home')} className="text-left py-2 border-b border-stone-100">Início</button>
            <button onClick={() => setPage('destinos')} className="text-left py-2 border-b border-stone-100">Destinos</button>
            <button onClick={() => setPage('quem-somos')} className="text-left py-2 border-b border-stone-100">Sobre</button>
            <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-6 py-4 rounded-sm text-center mt-4">Pedir Orçamento</button>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23] overflow-x-hidden">
      <Navbar />

      {/* PÁGINA HOME */}
      {page === 'home' && (
        <header className="relative h-[80vh] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000" className="w-full h-full object-cover brightness-[0.7]" alt="Hero" />
          </div>
          <div className="relative z-10 max-w-4xl animate-in fade-in duration-1000">
            <h1 className="text-4xl md:text-8xl font-light text-[#FDFCF8] mb-6 tracking-tight leading-tight">Onde a alma <br /><span className="font-bold italic">se encontra.</span></h1>
            <button onClick={() => setPage('destinos')} className="bg-[#FDFCF8] text-[#1A2F23] px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-[#1A2F23] hover:text-[#FDFCF8] transition-all">Explorar Destinos</button>
          </div>
        </header>
      )}

      {/* PÁGINA DESTINOS */}
      {page === 'destinos' && (
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tighter text-center">Roteiros de <span className="font-bold italic text-stone-400">Autor</span></h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: 'Safari Privado Namíbia', price: 'Desde 4.500€', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000' },
              { title: 'Expedição Ártica Islândia', price: 'Desde 3.200€', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000' }
            ].map((d, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="relative h-64 md:h-96 overflow-hidden rounded-sm">
                  <img src={d.img} className="w-full h-full object-cover" alt={d.title} />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">{d.price}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter">{d.title}</h3>
                <button onClick={() => setPage('contacto')} className="text-[10px] font-bold uppercase tracking-widest border-b border-[#1A2F23] pb-1">Ver Detalhes</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PÁGINA QUEM SOMOS */}
      {page === 'quem-somos' && (
        <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center space-y-10 animate-in fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">A sua <span className="font-bold italic">Bússola Personalizada.</span></h2>
          <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
            <p>Na Latitude C, acreditamos que o luxo não é o preço, mas a exclusividade da experiência. Desenhamos viagens para quem quer fugir do óbvio.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="rounded-sm shadow-xl grayscale" alt="Team" />
        </section>
      )}

      {/* PÁGINA ORÇAMENTO (MOBILE OPTIMIZED) */}
      {page === 'contacto' && (
        <section className="py-12 md:py-20 px-6 max-w-5xl mx-auto animate-in slide-in-from-bottom-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">Pedir <span className="font-bold italic text-stone-400">Orçamento</span></h2>
          </div>

          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 md:p-12 shadow-2xl border border-stone-100">
            <div className="space-y-4 md:col-span-2 border-b border-stone-100 pb-6">
                <input type="text" placeholder="Nome Completo" className="w-full border-b border-stone-200 py-3 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
                <input type="email" placeholder="Email" className="w-full border-b border-stone-200 py-3 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>

            <div className="space-y-6">
              <input type="text" placeholder="Destino de Sonho" className="w-full border-b border-stone-200 py-3 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, destino: e.target.value})} required />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col"><label className="text-[8px] uppercase font-bold text-stone-400">Ida</label><input type="date" className="border-b py-2 text-xs outline-none" onChange={(e) => setFormData({...formData, inicio: e.target.value})} /></div>
                <div className="flex flex-col"><label className="text-[8px] uppercase font-bold text-stone-400">Volta</label><input type="date" className="border-b py-2 text-xs outline-none" onChange={(e) => setFormData({...formData, fim: e.target.value})} /></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <select className="border-b py-3 text-xs outline-none bg-transparent" onChange={(e) => setFormData({...formData, adultos: e.target.value})}><option>Adultos</option><option>1</option><option>2</option><option>3+</option></select>
                <select className="border-b py-3 text-xs outline-none bg-transparent" onChange={(e) => setFormData({...formData, criancas: e.target.value})}><option>Crianças</option><option>0</option><option>1</option><option>2+</option></select>
              </div>
              <select className="w-full border-b py-3 text-xs outline-none bg-transparent font-bold" onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                <option>Orçamento por pessoa</option>
                <option>1.500€ - 3.000€</option>
                <option>3.000€ - 5.000€</option>
                <option>+ 5.000€</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <textarea placeholder="Mensagem e pedidos especiais..." className="w-full border border-stone-100 p-4 h-32 outline-none focus:border-[#1A2F23] text-sm" onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
              <button type="submit" className="w-full bg-[#1A2F23] text-[#FDFCF8] py-5 mt-6 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-4">
                <Send size={14}/> Enviar Briefing
              </button>
            </div>
          </form>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-16 border-t border-stone-200 mt-20 text-center space-y-6 bg-stone-50/50">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-2 text-[#1A2F23]">
          <Instagram size={24} />
          <span className="text-[8px] font-bold uppercase tracking-[0.3em]">Instagram @latitudec_viagens</span>
        </a>
        <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400">© 2026 Latitude C • Agência de Viagens</p>
      </footer>
    </div>
  );
}

export default App;
