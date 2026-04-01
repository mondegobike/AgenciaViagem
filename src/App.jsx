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
      
      {/* NAVBAR ESTILO PREMIUM */}
      <nav className="bg-[#FDFCF8]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          
          {/* LOGO INSPIRADO NO INSTAGRAM */}
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-light tracking-[0.3em] text-[#1A2F23]">LATITUDE</span>
            <div className="flex items-center">
              <span className="text-3xl font-black tracking-tighter text-[#1A2F23]">C</span>
              <span className="ml-2 text-[10px] tracking-[0.4em] font-bold text-stone-400 uppercase">Viagens de Autor</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A2F23]/70">
            <a href="#sobre" className="hover:text-[#1A2F23] transition-colors">Sobre</a>
            <a href="#destinos" className="hover:text-[#1A2F23] transition-colors">Expedições</a>
            <a href="#contacto" className="bg-[#1A2F23] text-[#FDFCF8] px-8 py-3 rounded-sm hover:bg-black transition-all">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - O "LOOK" DO PRIMEIRO MODELO */}
      <header className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="
