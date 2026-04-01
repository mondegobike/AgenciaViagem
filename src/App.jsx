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
            <img src="https://images.unsplash.
