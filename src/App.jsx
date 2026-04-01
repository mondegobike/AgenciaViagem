import React, { useState, useEffect } from 'react';
import { Instagram, Send, Menu, X, CheckCircle2, ArrowLeft, ChevronRight, MapPin, ShieldCheck, Users, Calendar, Banknote } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [selectedDestino, setSelectedDestino] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', email: '', destino: '', 
    inicio: '', fim: '', flexivel: false,
    adultos: '2', criancas: '0',
    budget: 'Sob Consulta', mensagem: ''
  });

  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";
  const RNAVT = "13143"; 
  const azulMar = "#103D3B";

  const destinosData = [
    {
      id: 'namibia',
      title: 'Namíbia: O Silêncio do Deserto',
      price: 'Desde 4.500€',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
      tagline: 'Uma jornada visual e espiritual pelas dunas mais altas do mundo.',
      detalhes: ['Safari privado em 4x4', 'Alojamento de Luxo', 'Dunas de Sossusvlei', 'Cultura Himba']
    },
    {
      id: 'islandia',
      title: 'Islândia: A Dança das Luzes',
      price: 'Desde 3.200€',
      img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200',
      tagline: 'Explore a terra do fogo e do gelo sob a Aurora Boreal.',
      detalhes: ['Caça à Aurora Boreal', 'Exploração de grutas de gelo', 'Blue Lagoon VIP', 'Ring Road']
    }
  ];

  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
  }, [page, selectedDestino]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pedido de Orçamento: ${formData.destino}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Email: ${formData.email}\n` +
      `Destino: ${formData.destino}\n` +
      `Datas: ${formData.inicio} a ${formData.fim} (Flexível: ${formData.flexivel ? 'Sim' : 'Não'})\n` +
      `Viajantes: ${formData.adultos} Adultos / ${formData.criancas} Crianças\n` +
      `Budget: ${formData.budget}\n` +
      `Mensagem: ${formData.mensagem}`
    );
    window.location.href = `mailto:reservas@latitudec.pt?subject=${subject}&body=${body}`;
  };

  const Navbar = () => (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => {setPage('home'); setSelectedDestino(null);}}>
          <span className="text-xl font-light tracking-[0.3em]" style={{ color: azulMar }}>LATITUDE</span>
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter" style={{ color: azulMar }}>C</span>
            <span className="ml-2 text-[8px] tracking-[0.4em] font-bold text-stone-400 uppercase">Agência de Viagens</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#103D3B] hover:opacity-70"><Instagram size={20} /></a>
          <button className="md:hidden text-[#103D3B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => {setPage('home'); setSelectedDestino(null);}}>Início</button>
            <button onClick={() => {setPage('destinos'); setSelectedDestino(null);}}>Destinos</button>
            <button onClick={() => setPage('contacto')} className="px-6 py-2 text-white rounded-sm transition-all shadow-md" style={{ backgroundColor: azulMar }}>Orçamento</button>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#F7F6F1] font-sans text-[#1A2F23]">
      <Navbar />

      {page === 'home' && (
        <header className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover brightness-[0.75]" alt="Hero" />
          <div className="relative z-10 space-y-6">
            <h1 className="text-5xl md:text-8xl font-light text-white tracking-tight italic uppercase">O Mundo à sua <span className="font-bold">Medida.</span></h1>
            <button onClick={() => setPage('destinos')} className="bg-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#103D3B] hover:text-white transition-all shadow-2xl">Ver Catálogo</button>
          </div>
        </header>
      )}

      {page === 'destinos' && !selectedDestino && (
        <section className="py-20 px-6 max-w-7xl mx-auto animate-in fade-in">
          <h2 className="text-4xl font-light text-center mb-16 italic" style={{ color: azulMar }}>Nossos <span className="font-bold uppercase not-italic">Destinos</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            {destinosData.map((d) => (
              <div key={d.id} className="cursor-pointer group" onClick={() => setSelectedDestino(d)}>
                <div className="h-[450px] overflow-hidden rounded-sm shadow-xl mb-6"><img src={d.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={d.title} /></div>
                <h3 className="text-2xl font-bold" style={{ color: azulMar }}>{d.title}</h3>
                <p className="text-stone-500 text-sm mt-2 mb-4">{d.tagline}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest border-b-2 pb-1" style={{ borderColor: azulMar, color: azulMar }}>Saber Mais</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedDestino && (
        <div className="animate-in fade-in">
          <div className="h-[50vh] relative">
            <img src={selectedDestino.img} className="w-full h-full object-cover" alt={selectedDestino.title} />
            <button onClick={() => setSelectedDestino(null)} className="absolute top-6 left-6 bg-white/80 p-2 rounded-full shadow-lg"><ArrowLeft size={20} style={{ color: azulMar }} /></button>
          </div>
          <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-4xl font-bold" style={{ color: azulMar }}>{selectedDestino.title}</h2>
              <div className="space-y-4 pt-6 border-t border-stone-200">
                {selectedDestino.detalhes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><CheckCircle2 size={18} style={{ color: azulMar }} /><span className="text-stone-700">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-2xl border-t-4 flex flex-col justify-center text-center space-y-6" style={{ borderTopColor: azulMar }}>
              <h4 className="font-bold uppercase text-xs tracking-widest" style={{ color: azulMar }}>Planeie esta Viagem</h4>
              <button onClick={() => {setFormData({...formData, destino: selectedDestino.title}); setPage('contacto'); setSelectedDestino(null);}} className="w-full py-5 text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:brightness-110 flex items-center justify-center gap-2" style={{ backgroundColor: azulMar }}>Solicitar Orçamento <ChevronRight size={14}/></button>
            </div>
          </div>
        </div>
      )}

      {page === 'contacto' && (
        <section className="py-16 px-6 max-w-4xl mx-auto animate-in slide-in-from-bottom-4">
          <h2 className="text-3xl font-light italic text-center mb-12" style={{ color: azulMar }}>Briefing de <span className="font-bold not-italic uppercase">Viagem</span></h2>
          <form onSubmit={handleFormSubmit} className="bg-white p-8 md:p-12 shadow-2xl rounded-sm space-y-8">
            
            {/* DESTINO */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-stone-400">Destino</label>
              <input type="text" value={formData.destino} className="w-full border-b py-3 outline-none font-bold bg-stone-50 px-3" style={{ borderBottomColor: azulMar, color: azulMar }} onChange={(e) => setFormData({...formData, destino: e.target.value})} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="Nome Completo" className="border-b py-3 outline-none focus:border-[#103D3B]" required onChange={(e) => setFormData({...formData, nome: e.target.value})} />
              <input type="email" placeholder="Email" className="border-b py-3 outline-none focus:border-[#103D3B]" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            {/* DATAS E FLEXIBILIDADE */}
            <div className="grid md:grid-cols-3 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-2"><Calendar size={12}/> Data Início</label>
                <input type="date" className="border-b py-2 outline-none text-sm" onChange={(e) => setFormData({...formData, inicio: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-2"><Calendar size={12}/> Data Fim</label>
                <input type="date" className="border-b py-2 outline-none text-sm" onChange={(e) => setFormData({...formData, fim: e.target.value})} />
              </div>
              <div className="flex items-center gap-3 pb-2 cursor-pointer">
                <input type="checkbox" id="flexivel" className="w-4 h-4 accent-[#103D3B]" onChange={(e) => setFormData({...formData, flexivel: e.target.checked})} />
                <label htmlFor="flexivel" className="text-xs uppercase font-bold text-stone-500 cursor-pointer">Datas Flexíveis</label>
              </div>
            </div>

            {/* PESSOAS E ORÇAMENTO */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-2"><Users size={12}/> Adultos</label>
                <select className="border-b py-2 outline-none text-sm bg-transparent" onChange={(e) => setFormData({...formData, adultos: e.target.value})}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                  <option value="7+">7+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-2"><Users size={12}/> Crianças</label>
                <select className="border-b py-2 outline-none text-sm bg-transparent" onChange={(e) => setFormData({...formData, criancas: e.target.value})}>
                  {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 flex items-center gap-2"><Banknote size={12}/> Orçamento Total</label>
                <select className="border-b py-2 outline-none text-sm bg-transparent font-bold" style={{ color: azulMar }} onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                  <option>Sob Consulta</option>
                  <option>Até 3.000€</option>
                  <option>3.000€ - 6.000€</option>
                  <option>6.000€ - 10.000€</option>
                  <option>Mais de 10.000€</option>
                </select>
              </div>
            </div>

            <textarea placeholder="Observações adicionais (preferências de hotéis, ritmo da viagem, etc...)" className="w-full border p-4 h-32 outline-none focus:border-[#103D3B] text-sm resize-none bg-stone-50" onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
            
            <button type="submit" className="w-full py-5 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg" style={{ backgroundColor: azulMar }}>
              <Send size={16}/> Enviar Pedido de Orçamento
            </button>
          </form>
        </section>
      )}

      <footer className="py-20 bg-white border-t border-stone-200 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
             <div className="flex flex-col"><span className="text-lg font-light tracking-[0.3em]" style={{ color: azulMar }}>LATITUDE C</span><span className="text-[10px] font-bold text-stone-400 uppercase">Agência de Viagens</span></div>
             <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-block"><Instagram size={24} style={{ color: azulMar }} /></a>
          </div>
          <div className="space-y-2 text-[10px] text-stone-500 uppercase tracking-widest font-bold">
            <div className="flex items-center justify-center md:justify-start gap-2"><ShieldCheck size={14} style={{ color: azulMar }} /><span>RNAVT Nº {RNAVT}</span></div>
          </div>
          <div className="space-y-2 text-[9px] text-stone-400 uppercase leading-relaxed">
            <p>© 2026 LATITUDE C. Agência de Viagens.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
