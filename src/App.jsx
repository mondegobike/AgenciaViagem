import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users, ExternalLink, ShieldCheck, Camera, Quote, Calendar, Users2, Banknote, CheckCircle2 } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({
    nome: '', email: '', destino: '', 
    inicio: '', fim: '', flexivel: false,
    adultos: '2', criancas: '0',
    budget: 'Sob Consulta', mensagem: ''
  });

  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica de Backend: Construir o corpo do email
    const subject = encodeURIComponent(`Novo Pedido de Orçamento: ${formData.destino} - ${formData.nome}`);
    const body = encodeURIComponent(`
Nome: ${formData.nome}
Email: ${formData.email}
Destino: ${formData.destino}
Datas: ${formData.inicio} a ${formData.fim} (Flexível: ${formData.flexivel ? 'Sim' : 'Não'})
Viajantes: ${formData.adultos} Adultos, ${formData.criancas} Crianças
Budget Estimado: ${formData.budget}
Mensagem: ${formData.mensagem}
    `);
    
    window.location.href = `mailto:reservas@latitudec.pt?subject=${subject}&body=${body}`;
  };

  const Navbar = () => (
    <nav className="bg-[#FDFCF8]/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => setPage('home')}>
          <span className="text-2xl font-light tracking-[0.3em] text-[#1A2F23]">LATITUDE</span>
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tighter text-[#1A2F23]">C</span>
            <span className="ml-2 text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
          <button onClick={() => setPage('home')} className={page === 'home' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Início</button>
          <button onClick={() => setPage('destinos')} className={page === 'destinos' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Destinos</button>
          <button onClick={() => setPage('quem-somos')} className={page === 'quem-somos' ? 'text-[#1A2F23] border-b-2 border-[#1A2F23]' : ''}>Sobre</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm hover:bg-black transition-all">Pedir Orçamento</button>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23]">
      <Navbar />

      {/* PÁGINA HOME */}
      {page === 'home' && (
        <div className="animate-in fade-in duration-700">
          <header className="relative h-[85vh] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000" className="w-full h-full object-cover brightness-[0.7]" alt="Hero" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-5xl md:text-8xl font-light text-[#FDFCF8] mb-6 tracking-tight">Onde a alma <br /><span className="font-bold italic">se encontra.</span></h1>
              <button onClick={() => setPage('destinos')} className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#1A2F23] hover:text-[#FDFCF8] transition-all">Descobrir Roteiros</button>
            </div>
          </header>
        </div>
      )}

      {/* PÁGINA DESTINOS */}
      {page === 'destinos' && (
        <section className="py-24 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom-4">
          <h2 className="text-5xl font-light mb-16 tracking-tighter text-center">Roteiros de <span className="font-bold italic text-stone-400">Autor</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Safari Privado Namíbia', price: 'Desde 4.500€', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000' },
              { title: 'Expedição Ártica Islândia', price: 'Desde 3.200€', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000' }
            ].map((d, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-96 overflow-hidden mb-6">
                  <img src={d.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={d.title} />
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest">{d.price}</div>
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-2">{d.title}</h3>
                <button onClick={() => setPage('contacto')} className="text-xs font-bold uppercase tracking-widest border-b border-[#1A2F23] pb-1">Solicitar Detalhes</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PÁGINA QUEM SOMOS */}
      {page === 'quem-somos' && (
        <section className="py-24 px-8 max-w-4xl mx-auto text-center space-y-12 animate-in fade-in">
          <h2 className="text-5xl font-light tracking-tighter">A Latitude C é a sua <br /><span className="font-bold italic">Curadoria de Confiança.</span></h2>
          <div className="space-y-6 text-xl text-stone-600 font-light leading-relaxed">
            <p>Não somos uma agência de massas. Somos arquitectos de momentos. Cada hotel, cada guia e cada transporte é testado pela nossa equipa.</p>
            <p>O nosso foco é a exclusividade e a segurança, permitindo que se foque apenas em viver o destino.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="rounded-sm shadow-2xl grayscale" alt="Team" />
        </section>
      )}

      {/* PÁGINA CONTACTO / ORÇAMENTO PRO */}
      {page === 'contacto' && (
        <section className="py-20 px-8 max-w-5xl mx-auto animate-in slide-in-from-bottom-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tighter mb-4">Desenhe a sua <span className="font-bold italic text-stone-400">Jornada</span></h2>
            <p className="text-stone-400 text-[10px] uppercase tracking-[0.4em]">Preencha o briefing detalhado abaixo</p>
          </div>

          <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-12 bg-white p-12 shadow-2xl border border-stone-100">
            {/* Dados Pessoais */}
            <div className="space-y-6 md:col-span-2 border-b border-stone-100 pb-8">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-stone-400">Nome Completo</label>
                    <input type="text" className="w-full border-b border-stone-300 py-2 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, nome: e.target.value})} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-stone-400">Email de Contacto</label>
                    <input type="email" className="w-full border-b border-stone-300 py-2 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
               </div>
            </div>

            {/* Detalhes da Viagem */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Map size={12}/> Destino Pretendido</label>
                <input type="text" className="w-full border-b border-stone-300 py-2 outline-none focus:border-[#1A2F23]" onChange={(e) => setFormData({...formData, destino: e.target.value})} required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Calendar size={12}/> Ida</label>
                  <input type="date" className="w-full border-b border-stone-300 py-2 outline-none text-xs" onChange={(e) => setFormData({...formData, inicio: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Calendar size={12}/> Volta</label>
                  <input type="date" className="w-full border-b border-stone-300 py-2 outline-none text-xs" onChange={(e) => setFormData({...formData, fim: e.target.value})} required />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="flex" onChange={(e) => setFormData({...formData, flexivel: e.target.checked})} className="accent-[#1A2F23]" />
                <label htmlFor="flex" className="text-xs text-stone-500 italic">Tenho datas flexíveis (+/- 3 dias)</label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Users2 size={12}/> Adultos</label>
                  <select className="w-full border-b border-stone-300 py-2 outline-none text-sm" onChange={(e) => setFormData({...formData, adultos: e.target.value})}>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    <option value="7+">7+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Users2 size={12}/> Crianças</label>
                  <select className="w-full border-b border-stone-300 py-2 outline-none text-sm" onChange={(e) => setFormData({...formData, criancas: e.target.value})}>
                    {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-2"><Banknote size={12}/> Orçamento Estimado (por pessoa)</label>
                <select className="w-full border-b border-stone-300 py-2 outline-none text-sm font-semibold" onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                  <option>Sob Consulta</option>
                  <option>1.500€ - 3.000€</option>
                  <option>3.000€ - 5.000€</option>
                  <option>+ 5.000€</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <label className="text-[10px] uppercase font-bold text-stone-400">Mensagem e Preferências de Alojamento</label>
              <textarea className="w-full border border-stone-200 p-4 h-32 outline-none focus:border-[#1A2F23] resize-none text-sm" placeholder="Ex: Preferência por hotéis boutique, interesse em gastronomia local..." onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
              <button type="submit" className="w-full bg-[#1A2F23] text-[#FDFCF8] py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-black transition-all flex items-center justify-center gap-4">
                <Send size={14}/> Gerar Pedido de Orçamento
              </button>
            </div>
          </form>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-20 border-t border-stone-200 mt-20 text-center space-y-8">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[#1A2F23] hover:opacity-50 transition-all">
          <Instagram size={30} />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Instagram @latitudec_viagens</span>
        </a>
        <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400">Latitude C • Agência de Viagens de Autor • 2026</p>
      </footer>
    </div>
  );
}

export default App;
