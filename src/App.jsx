import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users2, Banknote, Calendar, Menu, X, Heart, ShieldCheck, Award, CheckCircle2, ArrowLeft } from 'lucide-react';

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

  // PALETA DE CORES AZUL MAR:
  // Fundo Principal: bg-[#F7F6F1] (Creme Pedra Suave)
  // Cor de Destaque (Botões, Ícones, Rodapé): bg-[#103D3B] (Azul Mar Profundo)
  // Texto Principal: text-[#103D3B] (Azul Mar Profundo)
  // Texto Secundário: text-[#577777] (Azul Ardósia Suave)

  const destinosData = [
    {
      id: 'namibia',
      title: 'Namíbia: O Silêncio do Deserto',
      price: 'Desde 4.500€',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
      tagline: 'Uma jornada visual e espiritual pelas dunas mais altas do mundo.',
      detalhes: [
        'Safari privado em 4x4 com guia especializado',
        'Alojamento em Lodges de Luxo eco-sustentáveis',
        'Visita às dunas de Sossusvlei ao nascer do sol',
        'Encontro cultural com as tribos Himba'
      ]
    },
    {
      id: 'islandia',
      title: 'Islândia: A Dança das Luzes',
      price: 'Desde 3.200€',
      img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200',
      tagline: 'Explore a terra do fogo e do gelo sob a Aurora Boreal.',
      detalhes: [
        'Caça à Aurora Boreal com guia certificado',
        'Exploração de grutas de gelo azuis',
        'Banhos termais na Blue Lagoon (acesso VIP)',
        'Roteiro pela mítica Ring Road'
      ]
    }
  ];

  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
  }, [page, selectedDestino]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pedido Latitude C: ${formData.destino}`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\nDestino: ${formData.destino}\nDatas: ${formData.inicio} a ${formData.fim}\nViajantes: ${formData.adultos} Ad / ${formData.criancas} Cri\nBudget: ${formData.budget}\nNotas: ${formData.mensagem}`);
    window.location.href = `mailto:reservas@latitudec.pt?subject=${subject}&body=${body}`;
  };

  const irParaOrcamento = (nomeDestino) => {
    setFormData({ ...formData, destino: nomeDestino });
    setPage('contacto');
  };

  const Navbar = () => (
    <nav className="bg-[#F7F6F1]/95 backdrop-blur-md sticky top-0 z-[100] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => {setPage('home'); setSelectedDestino(null);}}>
          <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-[#103D3B]">LATITUDE</span>
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#103D3B]">C</span>
            <span className="ml-2 text-[8px] md:text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
          </div>
        </div>

        <button className="md:hidden text-[#103D3B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103D3B]/70">
          <button onClick={() => {setPage('home'); setSelectedDestino(null);}} className={page === 'home' ? 'text-[#103D3B] border-b-2 border-[#103D3B]' : 'hover:text-[#103D3B]'}>Início</button>
          <button onClick={() => {setPage('destinos'); setSelectedDestino(null);}} className={page === 'destinos' ? 'text-[#103D3B] border-b-2 border-[#103D3B]' : 'hover:text-[#103D3B]'}>Destinos</button>
          <button onClick={() => setPage('sobre')} className={page === 'sobre' ? 'text-[#103D3B] border-b-2 border-[#103D3B]' : 'hover:text-[#103D3B]'}>Sobre Nós</button>
          <button onClick={() => setPage('contacto')} className="bg-[#103D3B] text-[#F7F6F1] px-6 py-3 rounded-sm hover:scale-105 transition-all duration-300 shadow-xl">Orçamento</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F7F6F1] border-b border-stone-200 shadow-2xl p-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-[#103D3B]">
          <button onClick={() => {setPage('home'); setSelectedDestino(null);}}>Início</button>
          <button onClick={() => {setPage('destinos'); setSelectedDestino(null);}}>Destinos</button>
          <button onClick={() => setPage('sobre')}>Sobre Nós</button>
          <button onClick={() => setPage('contacto')} className="bg-[#103D3B] text-[#F7F6F1] py-4 rounded-sm text-center">Pedir Orçamento</button>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#F7F6F1] font-sans text-[#103D3B]">
      <Navbar />

      {/* --- PÁGINA: HOME --- */}
      {page === 'home' && (
        <div className="animate-in fade-in duration-1000">
          <header className="relative h-[85vh] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000" className="w-full h-full object-cover brightness-[0.7]" alt="Hero" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F7F6F1]/50 to-transparent" />
            </div>
            <div className="relative z-10 max-w-5xl space-y-6">
              <span className="text-[10px] text-white uppercase tracking-[0.6em] font-bold">Descubra o Inexplorado</span>
              <h1 className="text-5xl md:text-9xl font-light text-[#FDFCF8] tracking-tight leading-none italic uppercase">Viagens com <span className="font-bold">Alma.</span></h1>
              <button onClick={() => setPage('destinos')} className="bg-[#FDFCF8] text-[#103D3B] px-16 py-6 rounded-sm font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#103D3B] hover:text-[#FDFCF8] transition-all duration-500 shadow-2xl">Explorar Roteiros</button>
            </div>
          </header>
        </div>
      )}

      {/* --- PÁGINA: LISTA DE DESTINOS --- */}
      {page === 'destinos' && !selectedDestino && (
        <section className="py-24 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom-4">
          <h2 className="text-5xl font-light tracking-tighter mb-20 text-center italic uppercase">Roteiros de <span className="font-bold">Autor</span></h2>
          <div className="grid md:grid-cols-2 gap-16">
            {destinosData.map((d) => (
              <div key={d.id} className="group cursor-pointer space-y-6" onClick={() => setSelectedDestino(d)}>
                <div className="h-[500px] overflow-hidden rounded-sm relative shadow-xl">
                   {/* IMAGEM A CORES POR DEFEITO */}
                   <img src={d.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={d.title} />
                   <div className="absolute bottom-6 left-6 bg-white/90 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#103D3B]">{d.price}</div>
                </div>
                <h3 className="text-3xl font-bold tracking-tighter text-[#103D3B]">{d.title}</h3>
                <p className="text-[#577777] font-light text-sm leading-relaxed">{d.tagline}</p>
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-[#103D3B] pb-2 text-[#103D3B]">Explorar Detalhes</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- PÁGINA: DETALHE DO DESTINO --- */}
      {selectedDestino && (
        <div className="animate-in fade-in duration-500">
          <div className="h-[60vh] relative">
            {/* IMAGEM A CORES */}
            <img src={selectedDestino.img} className="w-full h-full object-cover brightness-[0.8]" alt={selectedDestino.title} />
            <button onClick={() => setSelectedDestino(null)} className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all">
              <ArrowLeft size={24} />
            </button>
          </div>
          
          <section className="py-20 px-6 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-stone-400">Roteiro Sugerido</span>
              <h2 className="text-5xl font-light tracking-tighter italic text-[#103D3B]">{selectedDestino.title}</h2>
              <p className="text-xl text-[#577777] font-light italic">{selectedDestino.tagline}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-10 border-t border-stone-100">
              <div className="space-y-6">
                <h4 className="font-bold uppercase text-xs tracking-widest text-[#103D3B]">O que esperar</h4>
                <div className="space-y-5">
                  {selectedDestino.detalhes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {/* ÍCONE AZUL MAR */}
                      <CheckCircle2 size={18} className="text-[#103D3B] mt-1 shrink-0" />
                      <p className="text-stone-700 font-light text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-10 space-y-6 shadow-xl border border-stone-100">
                <h4 className="font-bold uppercase text-xs tracking-widest text-center text-[#103D3B]">Fale Connosco</h4>
                <p className="text-xs text-stone-500 text-center leading-relaxed font-light">Cada roteiro Latitude C é único. Clique abaixo para personalizar esta viagem de acordo com as suas preferências e orçamento.</p>
                {/* BOTÃO AZUL MAR */}
                <button 
                  onClick={() => irParaOrcamento(selectedDestino.title)}
                  className="w-full bg-[#103D3B] text-[#F7F6F1] py-5 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Quero mais informações <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PÁGINA SOBRE NÓS */}
      {page === 'sobre' && (
        <section className="py-24 px-6 max-w-5xl mx-auto space-y-16 animate-in fade-in">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-5xl font-light tracking-tighter italic uppercase text-[#103D3B]">Viagens de <span className="font-bold text-stone-300">Autor.</span></h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed italic border-l-2 border-stone-100 pl-6">
                "Nasceu de uma paixão infinita por explorar. A Latitude C é a nossa forma de partilhar o mundo com curadoria, propósito e exclusividade."
              </p>
            </div>
            {/* IMAGEM A CORES */}
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200" className="rounded-sm shadow-2xl" alt="Sobre" />
          </div>
        </section>
      )}

      {/* --- PÁGINA CONTACTO / ORÇAMENTO --- */}
      {page === 'contacto' && (
        <section className="py-20 px-6 max-w-5xl mx-auto animate-in slide-in-from-bottom-8">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-5xl font-light tracking-tighter italic uppercase text-[#103D3B]">Briefing de <span className="font-bold text-stone-300">Viagem</span></h2>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest">Personalize cada detalhe da sua jornada</p>
          </div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 md:p-16 shadow-2xl border border-stone-100 selection:bg-[#103D3B] selection:text-white">
            <input type="text" placeholder="Nome Completo" className="border-b border-stone-200 py-4 outline-none focus:border-[#103D3B] text-sm" onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
            <input type="email" placeholder="Email" className="border-b border-stone-200 py-4 outline-none focus:border-[#103D3B] text-sm" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <input type="text" placeholder="Destino" value={formData.destino} className="md:col-span-2 border-b border-stone-200 py-4 outline-none font-bold bg-[#F7F6F1] px-4" onChange={(e) => setFormData({...formData, destino: e.target.value})} required />
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col"><label className="text-[9px] uppercase font-bold text-stone-300">Ida</label><input type="date" className="border-b py-2 text-xs outline-none" onChange={(e) => setFormData({...formData, inicio: e.target.value})} /></div>
              <div className="flex flex-col"><label className="text-[9px] uppercase font-bold text-stone-300">Regresso</label><input type="date" className="border-b py-2 text-xs outline-none" onChange={(e) => setFormData({...formData, fim: e.target.value})} /></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <select className="border-b border-stone-200 py-4 text-xs bg-transparent outline-none focus:border-[#103D3B]" onChange={(e) => setFormData({...formData, adultos: e.target.value})}>
                 <option>Adultos</option><option>1</option><option>2</option><option>3+</option>
               </select>
               <select className="border-b border-stone-200 py-4 text-xs bg-transparent outline-none focus:border-[#103D3B]" onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                 <option>Budget/Pessoa</option><option>1.500-3.000€</option><option>3.000-5.000€</option><option>+5.000€</option>
               </select>
            </div>

            <div className="md:col-span-2 space-y-8">
              <textarea placeholder="Preferências, hotéis boutique, flexibilidade, datas aproximadas..." className="w-full border-b border-stone-200 py-4 h-32 outline-none text-sm resize-none focus:border-[#103D3B]" onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
              {/* BOTÃO AZUL MAR */}
              <button type="submit" className="w-full bg-[#103D3B] text-[#F7F6F1] py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-black transition-all flex items-center justify-center gap-3">
                <Send size={16}/> Solicitar Proposta Exclusiva
              </button>
            </div>
          </form>
        </section>
      )}

      {/* FOOTER PREMIUM EM AZUL MAR */}
      <footer className="py-24 border-t border-stone-200 mt-20 text-center space-y-12 bg-white px-6">
        <div className="flex flex-col items-center gap-4">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            {/* ÍCONE AZUL MAR */}
            <Instagram size={30} className="text-[#103D3B] hover:scale-110 transition-transform" />
          </a>
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#103D3B]">Instagram @latitudec_viagens</span>
        </div>
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400">Latitude C • Curadoria de Viagens de Autor • 2026</p>
          <p className="text-[8px] uppercase tracking-widest text-stone-300 font-bold border border-stone-200 inline-block px-4 py-2">RNAVT Nº {RNAVT}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
