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
                <span className="text-xs font-bold uppercase tracking-[0.4
