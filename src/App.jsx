import React, { useState, useEffect } from 'react';
import { MapPin, Compass, Phone, Mail, Instagram, Star, Send, ChevronRight, Users, Globe, Map } from 'lucide-react';

function App() {
  // GESTÃO DE NAVEGAÇÃO (HOME, QUEM_SOMOS, CONTACTO)
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({ nome: '', email: '', destino: '', mensagem: '' });

  // Scroll para o topo quando muda de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! O seu pedido de orçamento para ${formData.destino} foi enviado com sucesso.`);
    setFormData({ nome: '', email: '', destino: '', mensagem: '' });
  };

  // --- COMPONENTE: NAVBAR ---
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
          <button onClick={() => setPage('home')} className={`hover:text-[#1A2F23] ${page === 'home' ? 'text-[#1A2F23] border-b border-[#1A2F23]' : ''}`}>Início</button>
          <button onClick={() => setPage('quem-somos')} className={`hover:text-[#1A2F23] ${page === 'quem-somos' ? 'text-[#1A2F23] border-b border-[#1A2F23]' : ''}`}>Quem Somos</button>
          <button onClick={() => setPage('contacto')} className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm hover:bg-black transition-all">Orçamento</button>
        </div>
      </div>
    </nav>
  );

  // --- PÁGINA: HOME ---
  const HomePage = () => (
    <>
      <header className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000" className="w-full h-full object-cover brightness-[0.7]" alt="Nature" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-light text-[#FDFCF8] mb-8 tracking-tight leading-[1.1]">Roteiros de Autor</h1>
          <p className="text-lg md:text-xl text-[#FDFCF8]/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">Viagens exclusivas desenhadas para quem procura o extraordinário.</p>
          <button onClick={() => setPage('contacto')} className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:invert transition-all shadow-2xl">Começar Experiência</button>
        </div>
      </header>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <Globe className="mx-auto h-8 w-8 text-stone-400" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">Curadoria Global</h3>
            <p className="text-stone-500 font-light">Destinos selecionados a dedo pela nossa equipa de especialistas.</p>
          </div>
          <div className="space-y-4">
            <Map className="mx-auto h-8 w-8 text-stone-400" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">Roteiros à Medida</h3>
            <p className="text-stone-500 font-light">Cada detalhe é planeado segundo o seu perfil de viajante.</p>
          </div>
          <div className="space-y-4">
            <Star className="mx-auto h-8 w-8 text-stone-400" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">Apoio 24/7</h3>
            <p className="text-stone-500 font-light">Assistência total durante toda a sua jornada pelo mundo.</p>
          </div>
        </div>
      </section>
    </>
  );

  // --- PÁGINA: QUEM SOMOS ---
  const QuemSomosPage = () => (
    <section className="py-24 px-8 max-w-6xl mx-auto animate-in fade-in duration-700">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="rounded-sm grayscale hover:grayscale-0
