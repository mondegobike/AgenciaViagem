import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight, Users, ExternalLink, ShieldCheck, Camera, Quote } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({ nome: '', email: '', destino: '', mensagem: '' });
  
  const instagramUrl = "https://www.instagram.com/latitudec_viagens/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem recebida! Analisaremos o seu roteiro em breve.`);
  };

  // --- COMPONENTE NAVBAR ---
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
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
          <button onClick={() => setPage('home')} className={page === 'home' ? 'text-[#1A2F23] border-b border-[#1A2F23]' : 'hover:text-[#1A2F23]'}>Início</button>
          <button onClick={() => setPage('quem-somos')} className={page === 'quem-somos' ? 'text-[#1A2F23] border-b border-[#1A2F23]' : 'hover:text-[#1A2F23]'}>O Nosso Conceito</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm hover:scale-105 transition-all duration-300 shadow-xl">Pedir Orçamento</button>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23] selection:bg-[#1A2F23] selection:text-white">
      <Navbar />

      {/* --- PÁGINA HOME --- */}
      {page === 'home' && (
        <div className="animate-in fade-in duration-1000">
          {/* HERO */}
          <header className="relative h-[90vh] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000" className="w-full h-full object-cover brightness-[0.75]" alt="Nature" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent opacity-40" />
            </div>
            <div className="relative z-10 max-w-5xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FDFCF8] mb-6 block">Premium Travel Experience</span>
              <h1 className="text-6xl md:text-9xl font-light text-[#FDFCF8] mb-8 tracking-tighter leading-none">Descubra o <br /><span className="font-bold italic">Inexplorado.</span></h1>
              <button onClick={() => setPage('contacto')} className="bg-[#FDFCF8] text-[#1A2F23] px-16 py-6 rounded-sm font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#1A2F23] hover:text-[#FDFCF8] transition-all duration-500 shadow-2xl">Explorar Roteiros</button>
            </div>
          </header>

          {/* SECÇÃO DESTINOS DESTAQUE */}
          <section className="py-32 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <h2 className="text-4xl font-light tracking-tighter leading-none">Destinos com <br /><span className="font-bold italic text-stone-400">Curadoria Latitude C.</span></h2>
              <p className="max-w-xs text-stone-500 text-sm font-light leading-relaxed">Seleccionamos lugares onde a alma do destino se mantém intacta.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Islândia', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800', desc: 'Fogo e Gelo' },
                { name: 'Namíbia', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800', desc: 'Deserto Infinito' },
                { name: 'Butão', img: 'https://images.unsplash.com/photo-1524491991490-a30953e1c7c5?q=80&w=800', desc: 'O Reino da Felicidade' }
              ].map((dest, i) => (
                <div key={i} className="group relative h-[500px] overflow-hidden cursor-pointer">
                  <img src={dest.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={dest.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F23]/80 to-transparent flex flex-col justify-end p-8 text-[#FDFCF8]">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 mb-2">{dest.desc}</span>
                    <h4 className="text-3xl font-bold tracking-tighter">{dest.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTEMUNHOS ESTILO MAGAZINE */}
          <section className="bg-stone-100 py-32 px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <Quote className="mx-auto h-12 w-12 text-[#1A2F23]/10" />
              <p className="text-3xl md:text-5xl font-light italic text-stone-600 leading-tight">
                "Uma viagem que mudou a nossa perspetiva sobre o mundo. O detalhe do roteiro foi simplesmente impecável."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-stone-400 mb-4" />
                <span className="text-xs font-bold uppercase tracking-[0.4em]">Família Martins, Exp. Namíbia</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* --- PÁGINA QUEM SOMOS --- */}
      {page === 'quem-somos' && (
        <section className="py-24 px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-6xl font-light tracking-tighter leading-none">Mais que uma Agência, <br /><span className="font-bold italic">Uma Bússola.</span></h2>
              <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
                <p>A Latitude C nasceu da necessidade de viajantes que, como nós, já não se satisfazem com pacotes turísticos de catálogo.</p>
                <p>O nosso trabalho é a <strong>Travel Curatorship</strong>: filtramos o mundo para lhe entregar apenas o que é autêntico, seguro e memorável.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-10">
                <div className="flex flex-col gap-2">
                  <ShieldCheck className="h-6 w-6 text-stone-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">Segurança Total</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Camera className="h-6 w-6 text-stone-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">Momentos Únicos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1530789253516-608148c03d15?q=80&w=1200" className="rounded-sm shadow-2xl" alt="Travel design" />
              <div className="absolute -top-10 -left-10 bg-[#1A2F23] p-12 text-[#FDFCF8] hidden lg:block">
                <p className="text-4xl font-bold tracking-tighter">0%</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Turismo de Massa</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- PÁGINA CONTACTO/ORÇAMENTO --- */}
      {page === 'contacto' && (
        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-6xl font-light tracking-tighter leading-none">O Seu Próximo <br /><span className="font-bold italic text-stone-300 text-7xl">Capítulo.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-12">
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Fale Connosco</p>
                <p className="text-xl">+351 912 345 678</p>
                <p className="text-stone-500">reservas@latitudec.pt</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Siga a Inspiração</p>
                <a href={instagramUrl} target="_blank" className="flex items-center gap-3 text-lg hover:text-stone-400 transition-all">
                  <Instagram size={20}/> @latitudec_viagens <ExternalLink size={14} className="opacity-30" />
                </a>
              </div>
            </div>
            
            <form onSubmit={handleFormSubmit} className="md:col-span-2 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <input type="text" placeholder="Como se chama?" className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#1A2F23] transition-all" required />
                <input type="email" placeholder="O seu melhor email" className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#1A2F23] transition-all" required />
              </div>
              <input type="text" placeholder="Que parte do mundo quer explorar?" className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#1A2F23] transition-all" required />
              <textarea placeholder="Conte-nos os seus desejos para esta viagem..." className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#1A2F23] h-32 resize-none transition-all"></textarea>
              <button type="submit" className="w-full bg-[#1A2F23] text-[#FDFCF8] py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-black transition-all flex items-center justify-center gap-4">
                <Send size={16}/> Enviar Pedido de Orçamento
              </button>
            </form>
          </div>
        </section>
      )}

      {/* FOOTER PREMIUM */}
      <footer className="pt-32 pb-16 px-8 border-t border-stone-200 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-light tracking-[0.4em]">LATITUDE</span>
            <span className="text-4xl font-black tracking-tighter">C</span>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            <a href="#" className="hover:opacity-100 transition">Condições Gerais</a>
            <a href="#" className="hover:opacity-100 transition">Política de Privacidade</a>
            <a href="#" className="hover:opacity-100 transition">Livro de Reclamações</a>
          </div>
          <div className="w-full h-[1px] bg-stone-100" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400">© 2026 Latitude C • Curadoria de Viagens de Autor</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
