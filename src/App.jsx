import React, { useState, useEffect } from 'react';
import { Compass, Instagram, Send, Menu, X, CheckCircle2, ArrowLeft, ChevronRight } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [selectedDestino, setSelectedDestino] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', email: '', destino: '', 
    inicio: '', fim: '', adultos: '2', 
    budget: 'Sob Consulta', mensagem: ''
  });

  const RNAVT = "13143"; // Altera para o teu número real
  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";

  // CORES AZUL MAR PREMIUM
  const azulMar = "#005D6E"; 

  const destinosData = [
    {
      id: 'namibia',
      title: 'Namíbia: O Silêncio do Deserto',
      price: 'Desde 4.500€',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
      tagline: 'Uma jornada pelas dunas mais altas do mundo.',
      detalhes: ['Safari privado 4x4', 'Lodges de Luxo', 'Dunas de Sossusvlei']
    },
    {
      id: 'islandia',
      title: 'Islândia: Fogo e Gelo',
      price: 'Desde 3.200€',
      img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200',
      tagline: 'A magia da Aurora Boreal e glaciares infinitos.',
      detalhes: ['Caça à Aurora Boreal', 'Grutas de Gelo', 'Blue Lagoon VIP']
    }
  ];

  useEffect(() => { window.scrollTo(0, 0); setIsMenuOpen(false); }, [page, selectedDestino]);

  const irParaOrcamento = (nomeDestino) => {
    setFormData({ ...formData, destino: nomeDestino });
    setPage('contacto');
    setSelectedDestino(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A2F23]">
      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => {setPage('home'); setSelectedDestino(null);}}>
            <span className="text-xl font-light tracking-[0.3em]" style={{ color: azulMar }}>LATITUDE</span>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tighter" style={{ color: azulMar }}>C</span>
              <span className="ml-2 text-[8px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="md:hidden">
              <Instagram size={24} style={{ color: azulMar }} />
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => {setPage('home'); setSelectedDestino(null);}}>Início</button>
            <button onClick={() => {setPage('destinos'); setSelectedDestino(null);}}>Destinos</button>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70"><Instagram size={18} style={{ color: azulMar }} /></a>
            <button onClick={() => setPage('contacto')} className="px-6 py-2 text-white rounded-sm transition-all" style={{ backgroundColor: azulMar }}>Orçamento</button>
          </div>
        </div>
      </nav>

      {/* PÁGINA: LISTA DESTINOS */}
      {page === 'destinos' && !selectedDestino && (
        <section className="py-16 px-6 max-w-7xl mx-auto animate-in fade-in">
          <h2 className="text-4xl font-light text-center mb-16 italic">Roteiros de <span className="font-bold">Autor</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            {destinosData.map((d) => (
              <div key={d.id} className="cursor-pointer group" onClick={() => setSelectedDestino(d)}>
                <div className="h-[400px] overflow-hidden rounded-lg shadow-lg mb-4">
                  <img src={d.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={d.title} />
                </div>
                <h3 className="text-2xl font-bold">{d.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{d.tagline}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest border-b-2 pb-1" style={{ borderColor: azulMar, color: azulMar }}>Ver Detalhes</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PÁGINA: DETALHE DESTINO */}
      {selectedDestino && (
        <div className="animate-in fade-in duration-500">
          <div className="h-[50vh] relative">
            <img src={selectedDestino.img} className="w-full h-full object-cover" alt={selectedDestino.title} />
            <button onClick={() => setSelectedDestino(null)} className="absolute top-6 left-6 bg-white/80 p-2 rounded-full shadow-lg">
              <ArrowLeft size={20} style={{ color: azulMar }} />
            </button>
          </div>
          <div className="max-w-4xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: azulMar }}>{selectedDestino.title}</h2>
              <p className="text-stone-600 mb-8 italic">{selectedDestino.tagline}</p>
              <ul className="space-y-4">
                {selectedDestino.detalhes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} style={{ color: azulMar }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl border-t-4 flex flex-col items-center text-center justify-center space-y-6" style={{ borderTopColor: azulMar }}>
              <h4 className="font-bold uppercase text-xs tracking-widest" style={{ color: azulMar }}>Fale Connosco</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Personalize esta viagem de acordo com as suas preferências.</p>
              <button 
                onClick={() => irParaOrcamento(selectedDestino.title)}
                className="w-full py-4 text-white font-bold uppercase tracking-widest text-[10px] rounded-md transition-all hover:brightness-110 flex items-center justify-center gap-2"
                style={{ backgroundColor: azulMar }}
              >
                Quero mais informações <ChevronRight size={14}/>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PÁGINA: CONTACTO */}
      {page === 'contacto' && (
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Pedir <span className="font-bold italic">Orçamento</span></h2>
          <form className="bg-white p-8 shadow-xl rounded-lg space-y-6">
            <label className="block text-[10px] font-bold uppercase text-stone-400">Destino selecionado</label>
            <input type="text" value={formData.destino} className="w-full border-b py-3 outline-none font-bold bg-stone-50 px-2" style={{ color: azulMar, borderBottomColor: azulMar }} readOnly />
            <input type="text" placeholder="Seu Nome" className="w-full border-b py-3 outline-none focus:border-cyan-700" required />
            <input type="email" placeholder="Seu Email" className="w-full border-b py-3 outline-none focus:border-cyan-700" required />
            <textarea placeholder="Mais detalhes (ex: datas, nº de pessoas)" className="w-full border p-4 h-32 rounded-md outline-none focus:border-cyan-700"></textarea>
            <button className="w-full py-4 text-white font-bold uppercase tracking-widest text-xs rounded-md shadow-lg" style={{ backgroundColor: azulMar }}>Enviar Solicitação</button>
          </form>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-16 bg-white border-t text-center space-y-6">
        <div className="flex flex-col items-center gap-2">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
            <Instagram size={28} style={{ color: azulMar }} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.2em]" style={{ color: azulMar }}>@latitudec_viagens</span>
          </a>
        </div>
        <p className="text-[10px] tracking-widest text-stone-400">RNAVT Nº {RNAVT} • LATITUDE C • VIAGENS DE AUTOR</p>
      </footer>
    </div>
  );
}

export default App;
