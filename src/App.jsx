import React, { useState } from 'react';
import { MapPin, CalendarDays, Compass, Phone, Mail, Instagram, Star, Send, ChevronRight } from 'lucide-react';

function App() {
  const [siteContent] = useState({
    heroTitle: "Roteiros de Autor e Viagens Exclusivas",
    heroSubtitle: "Descubra o mundo através de uma curadoria minuciosa. Experiências desenhadas para quem valoriza o autêntico.",
    aboutText: "A Latitude C nasce da paixão pelo detalhe. Não vendemos apenas destinos; entregamos bússolas para momentos inesquecíveis, com roteiros que equilibram o luxo do conforto e a crueza da aventura.",
    instagramUrl: "https://www.instagram.com/latitudec_viagens/",
    contactPhone: "+351 912 345 678",
    contactEmail: "reservas@latitudec.pt"
  });

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1A2F23]">
      
      {/* NAVBAR */}
      <nav className="bg-[#FDFCF8]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-light tracking-[0.3em] text-[#1A2F23]">LATITUDE</span>
            <div className="flex items-center">
              <span className="text-3xl font-black tracking-tighter text-[#1A2F23]">C</span>
              <span className="ml-2 text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
            <a href="#sobre" className="hover:text-[#1A2F23] transition-colors">Sobre</a>
            <a href="#contacto" className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm hover:bg-black transition-all">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000" className="w-full h-full object-cover brightness-[0.8]" alt="Ocean" />
          <div className="absolute inset-0 bg-[#1A2F23]/20" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light text-[#FDFCF8] mb-8 tracking-tight leading-[1.1]">
            {siteContent.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-[#FDFCF8]/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {siteContent.heroSubtitle}
          </p>
          <a href="#contacto" className="bg-[#FDFCF8] text-[#1A2F23] px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#1A2F23] hover:text-[#FDFCF8] transition-all duration-500 shadow-2xl inline-block">
            Saber Mais
          </a>
        </div>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-light tracking-tight text-[#1A2F23]">A Nossa <span className="font-bold">Filosofia</span></h2>
          <p className="text-xl text-stone-600 leading-relaxed font-light italic italic">"{siteContent.aboutText}"</p>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em]">
            <Instagram className="h-4 w-4" /> @latitudec_viagens
          </div>
        </div>
        <div className="rounded-sm overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200" className="w-full h-full object-cover" alt="Travel" />
        </div>
      </section>

      {/* FOOTER / CONTACTO */}
      <footer id="contacto" className="bg-[#1A2F23] py-20 px-8 text-[#FDFCF8] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xs uppercase tracking-[0.5em] text-stone-400">Entre em contacto</p>
          <h2 className="text-3xl font-light italic">Transformamos destinos em memórias.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 pt-8 border-t border-white/10">
            <p className="flex items-center justify-center gap-3"><Phone className="h-5 w-5" /> {siteContent.contactPhone}</p>
            <p className="flex items-center justify-center gap-3"><Mail className="h-5 w-5" /> {siteContent.contactEmail}</p>
          </div>
          <p className="text-[10px] text-stone-500 pt-10 tracking-[0.2em]">LATITUDE C © 2026</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
