import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users2, Banknote, Calendar, Menu, X, ExternalLink, Heart, ShieldCheck, Award } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', email: '', destino: '', 
    inicio: '', fim: '', flexivel: false,
    adultos: '2', criancas: '0',
    budget: 'Sob Consulta', mensagem: ''
  });

  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";
  const RNAVT = "13143";

  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pedido Latitude C: ${formData.destino}`);
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\nDestino: ${formData.destino}\nDatas: ${formData.inicio} a ${formData.fim}\nViajantes: ${formData.adultos} Ad / ${formData.criancas} Cri\nBudget: ${formData.budget}\nNotas: ${formData.mensagem}`);
    window.location.href = `mailto:reservas@latitudec.pt?subject=${subject}&body=${body}`;
  };

  const Navbar = () => (
    <nav className="bg-[#FDFCF8]/95 backdrop-blur-md sticky top-0 z-[100] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => setPage('home')}>
          <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-[#1A2F23]">LATITUDE</span>
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#1A2F23]">C</span>
            <span className="ml-2 text-[8px] md:text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
          </div>
        </div>

        <button className="md:hidden text-[#1A2F23]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
          <button onClick={() => setPage('home')} className={page === 'home' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Início</button>
          <button onClick={() => setPage('destinos')} className={page === 'destinos' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Destinos</button>
          <button onClick={() => setPage('sobre')} className={page === 'sobre' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Sobre Nós</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-6 py-3 rounded-sm hover:bg-black transition-all">Orçamento</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFCF8] border-b border-stone-200 shadow-2xl p-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest animate-in slide-in-from-top-5">
          <button onClick={() => setPage('home')}>Início</button>
          <button onClick={() => setPage('destinos')}>Destinos</button>
          <button onClick={() => setPage('sobre')}>Sobre Nós</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] py-4 rounded-sm text-center">Pedir Orçamento</button>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23] selection:bg-[#1A2F23] selection:text-white">
      <Navbar />

      {/* PÁGINA: HOME */}
      {page === 'home' && (
        <header className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000" className="w-full h-full object-cover brightness-75 scale-105" alt="Hero" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-[10px] text-white uppercase tracking-[0.6em] font-bold">Descubra o mundo à sua medida</span>
            <h1 className="text-5xl md:text-8xl font-light text-[#FDFCF8] tracking-tight leading-tight italic">Viagens com <span className="font-bold">Propósito.</span></h1>
            <button onClick={() => setPage('contacto')} className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-widest hover:invert transition-all shadow-2xl">Começar Roteiro</button>
          </div>
        </header>
      )}

      {/* PÁGINA: SOBRE NÓS (NOVA) */}
      {page === 'sobre' && (
        <div className="animate-in fade-in duration-700">
          <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-stone-100 p-2 rounded-full"><Heart className="text-stone-400" size={20}/></div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-none">Nasceu de uma <br /><span className="font-bold italic text-stone-400">Paixão Infinita.</span></h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed">
                A Latitude C não é apenas uma agência; é o reflexo de décadas a explorar os cantos mais remotos do planeta. Nasceu de um desejo profundo de partilhar o mundo tal como ele é: cru, belo e autêntico.
              </p>
              <div className="space-y-4 border-l-2 border-stone-100 pl-6 italic text-stone-500">
                <p>"Travel Curatorship - Viagens de Autor."</p>
                <p>"Desenhamos a sua viagem de sonho."</p>
                <p>"Experiências únicas e personalizadas."</p>
              </div>
            </div>
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200" className="rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Sobre" />
              <div className="absolute -bottom-10 -right-10 bg-[#1A2F23] text-white p-10 hidden md:block">
                <Award size={32} className="mb-4 opacity-50" />
                <p className="text-xs uppercase tracking-widest font-bold">Curadoria Especializada</p>
              </div>
            </div>
          </section>

          <section className="bg-stone-50 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h3 className="text-3xl font-light tracking-tighter">O Nosso Compromisso</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-3">
                  <ShieldCheck className="mx-auto text-stone-400" />
                  <h4 className="font-bold uppercase text-[10px] tracking-widest">Segurança</h4>
                  <p className="text-xs text-stone-500 font-light">Acompanhamento constante e parceiros certificados.</p>
                </div>
                <div className="space-y-3">
                  <Globe className="mx-auto text-stone-400" />
                  <h4 className="font-bold uppercase text-[10px] tracking-widest">Autenticidade</h4>
                  <p className="text-xs text-stone-500 font-light">Fugimos do óbvio para encontrar a alma de cada destino.</p>
                </div>
                <div className="space-y-3">
                  <Compass className="mx-auto text-stone-400" />
                  <h4 className="font-bold uppercase text-[10px] tracking-widest">Detalhe</h4>
                  <p className="text-xs text-stone-500 font-light">Cada minuto do seu roteiro é pensado ao pormenor.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PÁGINA: DESTINOS */}
      {page === 'destinos' && (
        <section className="py-24 px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
             <h2 className="text-5xl font-light tracking-tighter leading-none">Portfólio de <br /><span className="font-bold italic text-stone-400 text-6xl">Destinos.</span></h2>
             <p className="text-stone-400 text-sm font-light italic max-w-xs uppercase tracking-widest text-[10px]">Apenas o extraordinário.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Namíbia: O Silêncio do Deserto', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000' },
              { title: 'Islândia: A Dança das Luzes', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000' }
            ].map((d, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-[500px] overflow-hidden mb-6 relative">
                   <img src={d.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" alt={d.title} />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-4">{d.title}</h3>
                <button onClick={() => setPage('contacto')} className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-[#1A2F23] pb-2">Explorar Roteiro</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PÁGINA: ORÇAMENTO (BRIEFING) */}
      {page === 'contacto' && (
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tighter">O Início da sua <span className="font-bold italic text-stone-300">História.</span></h2>
          </div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 md:p-16 shadow-2xl">
            <input type="text" placeholder="Nome" className="border-b py-4 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
            <input type="email" placeholder="Email" className="border-b py-4 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <input type="text" placeholder="Destino" className="md:col-span-2 border-b py-4 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, destino: e.target.value})} required />
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase font-bold text-stone-300 tracking-widest">Partida</label>
                <input type="date" className="border-b py-2 text-xs" onChange={(e) => setFormData({...formData, inicio: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase font-bold text-stone-300 tracking-widest">Regresso</label>
                <input type="date" className="border-b py-2 text-xs" onChange={(e) => setFormData({...formData, fim: e.target.value})} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <select className="border-b py-4 text-xs bg-transparent" onChange={(e) => setFormData({...formData, adultos: e.target.value})}>
                 <option>Adultos</option><option>1</option><option>2</option><option>3+</option>
               </select>
               <select className="border-b py-4 text-xs bg-transparent" onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                 <option>Orçamento/Pessoa</option><option>1.500-3.000€</option><option>3.000-5.000€</option><option>+5.000€</option>
               </select>
            </div>

            <div className="md:col-span-2 space-y-6">
              <textarea placeholder="Notas, interesses, flexibilidade..." className="w-full border-b border-stone-200 py-4 h-32 outline-none focus:border-[#1A2F23] text-sm resize-none" onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
              <button type="submit" className="w-full bg-[#1A2F23] text-white py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-black transition-all">Solicitar Briefing Personalizado</button>
            </div>
          </form>
        </section>
      )}

      {/* FOOTER: COM RNAVT OBRIGATÓRIO */}
      <footer className="py-24 border-t border-stone-200 mt-20 text-center space-y-10 bg-stone-50/50 px-6">
        <div className="flex flex-col items-center gap-4">
          <Instagram size={28} className="text-[#1A2F23]" />
          <a href={instagramUrl} target="_blank" className="text-[10px] font-bold uppercase tracking-[0.5em] hover:text-stone-400 transition-all">Instagram @latitudec_viagens</a>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 italic">Latitude C • Curadoria de Viagens de Autor</p>
          {/* RNAVT OBRIGATÓRIO AQUI */}
          <p className="text-[8px] uppercase tracking-widest text-stone-300 font-bold border border-stone-200 inline-block px-4 py-2">RNAVT Nº {RNAVT}</p>
        </div>

        <div className="pt-10 flex flex-wrap justify-center gap-8 text-[8px] font-bold uppercase tracking-widest text-stone-400">
           <a href="#" className="hover:text-[#1A2F23]">Política de Privacidade</a>
           <a href="#" className="hover:text-[#1A2F23]">Livro de Reclamações</a>
           <a href="#" className="hover:text-[#1A2F23]">Resolução de Conflitos</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
