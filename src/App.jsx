import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Instagram, Star, Send, Globe, Map, ChevronRight } from 'lucide-react';

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({ nome: '', email: '', destino: '', mensagem: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! O seu pedido foi registado.`);
    setFormData({ nome: '', email: '', destino: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23]">
      
      {/* NAVBAR */}
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
            <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm">Orçamento</button>
          </div>
        </div>
      </nav>

      {/* PÁGINA: HOME */}
      {page === 'home' && (
        <>
          <header className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000" className="w-full h-full object-cover brightness-[0.8]" alt="Natureza" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-5xl md:text-8xl font-light text-[#FDFCF8] mb-8 tracking-tight leading-[1.1]">Roteiros de Autor</h1>
              <p className="text-lg md:text-xl text-[#FDFCF8]/90 max-w-2xl mx-auto mb-10 font-light">Experiências exclusivas desenhadas para viajantes exigentes.</p>
              <button onClick={() => setPage('contacto')} className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest shadow-2xl">Começar Viagem</button>
            </div>
          </header>
          <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Globe className="mx-auto h-8 w-8 text-stone-400" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Curadoria Global</h3>
              <p className="text-stone-500 font-light italic">"Destinos selecionados a dedo pela nossa equipa."</p>
            </div>
            <div className="space-y-4">
              <Map className="mx-auto h-8 w-8 text-stone-400" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Exclusividade</h3>
              <p className="text-stone-500 font-light italic">"Roteiros fora das rotas turísticas convencionais."</p>
            </div>
            <div className="space-y-4">
              <Star className="mx-auto h-8 w-8 text-stone-400" />
              <h3 className="text-xl font-bold uppercase tracking-tighter">Apoio 24/7</h3>
              <p className="text-stone-500 font-light italic">"Assistência personalizada em qualquer parte do mundo."</p>
            </div>
          </section>
        </>
      )}

      {/* PÁGINA: QUEM SOMOS */}
      {page === 'quem-somos' && (
        <section className="py-24 px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Sobre Nós" />
            <div className="space-y-8">
              <h2 className="text-5xl font-light tracking-tighter">Paixão pelo <br /><span className="font-bold italic text-stone-400">Extraordinário.</span></h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed">A Latitude C nasceu para transformar o conceito de agência de viagens. Não entregamos apenas passagens; entregamos bússolas para histórias inesquecíveis.</p>
              <p className="text-stone-500 leading-relaxed font-light italic">"Acreditamos que viajar é a única coisa que compramos e que nos torna mais ricos. A nossa missão é garantir que cada quilómetro conta."</p>
            </div>
          </div>
        </section>
      )}

      {/* PÁGINA: CONTACTO / ORÇAMENTO */}
      {page === 'contacto' && (
        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-light tracking-tighter">Solicitar <span className="font-bold italic text-stone-400">Orçamento</span></h2>
            <p className="text-stone-400 tracking-[0.3em] uppercase text-[10px]">Entraremos em contacto em menos de 24 horas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#1A2F23] p-3 rounded-full text-white"><Phone size={18}/></div>
                <div><p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Telefone</p><p>+351 912 345 678</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1A2F23] p-3 rounded-full text-white"><Mail size={18}/></div>
                <div><p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Email</p><p>reservas@latitudec.pt</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1A2F23] p-3 rounded-full text-white"><Instagram size={18}/></div>
                <div><p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Social</p><p>@latitudec_viagens</p></div>
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="md:col-span-2 space-y-6 bg-white p-10 shadow-2xl border border-stone-100">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full border-b border-stone-300 py-3 outline-none focus:border-[#1A2F23] transition-colors" required />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border-b border-stone-300 py-3 outline-none focus:border-[#1A2F23] transition-colors" required />
              </div>
              <input type="text" placeholder="Destino de interesse" value={formData.destino} onChange={(e) => setFormData({...formData, destino: e.target.value})} className="w-full border-b border-stone-300 py-3 outline-none focus:border-[#1A2F23] transition-colors" required />
              <textarea placeholder="F
