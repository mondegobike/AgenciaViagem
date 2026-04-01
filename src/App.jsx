import React, { useState } from 'react';
// IMPORTANTE: Adicionei o ícone "Latitude" para imitar o log
import { Compass, Phone, Mail, Instagram, Star, Send, Layers3 } from 'lucide-react';

function App() {
  const [siteContent] = useState({
    heroTitle: "Roteiros de Autor e Viagens Exclusivas.",
    heroSubtitle: "Descubra o mundo com a curadoria da Latitude C. Experiências autênticas desenhadas para viajantes exigentes.",
    aboutText: "A Latitude C não é apenas uma agência; é a sua bússola para experiências inesquecíveis. Especializamo-nos em criar roteiros personalizados que combinam conforto, aventura e imersão cultural.",
    instagramUrl: "https://www.instagram.com/latitudec_viagens/",
    contactPhone: "+351 912 345 678",
    contactEmail: "reservas@latitudec.pt"
  });

  const [formData, setFormData] = useState({ nome: '', destino: '', mensagem: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! O seu pedido foi registado.`);
  };

  return (
    // ATUALIZAÇÃO DE CORES: Fundo Verde Azeitona (bg-emerald-950 ou similar)
    <div className="min-h-screen bg-stone-50 font-sans text-emerald-950">
      
      {/* NAVBAR: Branco Creme / Marfim (bg-amber-50 ou similar) */}
      <nav className="bg-amber-50 shadow-sm sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO LATITUDE C: Imitação do original (Verde Azeitona Escuro) */}
          <div className="flex items-center gap-2 text-3xl font-black text-emerald-950 tracking-tighter">
            {/* Ícone Layers3 para imitar o log de "camadas" */}
            <Layers3 className="text-emerald-950 h-8 w-8" />
            <span className="font-extrabold text-3xl text-emerald-950 tracking-tighter">LATITUDE<span className="font-light text-emerald-950 text-2xl">C</span></span>
            <span className="text-sm font-light text-emerald-800 tracking-wider"> - VIAGENS</span>
          </div>
          
          <div className="flex items-center gap-6 font-semibold text-sm uppercase tracking-widest text-emerald-900">
            <a href="#sobre" className="hover:text-amber-700 transition">Sobre</a>
            <a href="#destinos" className="hover:text-amber-700 transition">Destinos</a>
            {/* Botão com cor de Verde Azeitona (bg-emerald-900) */}
            <a href="#contacto" className="bg-emerald-900 text-amber-50 px-6 py-2.5 rounded-full shadow hover:bg-emerald-800 transition">Pedido</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Fundo Verde Azeitona Escuro (bg-emerald-950) com texto Creme (text-amber-50) */}
      <header className="relative bg-emerald-950 text-amber-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2000" alt="Natureza" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge em Creme/Azeitona */}
          <span className="inline-block bg-amber-50 text-emerald-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Viagens com Propósito</span>
          
          {/* h1 em Creme (text-amber-50) */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-amber-50">
            {siteContent.heroTitle}
          </h1>
          
          {/* p em Creme Claro (text-amber-100) */}
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            {siteContent.heroSubtitle}
          </p>
          
          <div className="flex gap-4 justify-center">
            {/* Botão em Creme (bg-amber-50) */}
            <a href="#destinos" className="bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-100 transition">Explorar Roteiros</a>
            {/* Botão em Creme Transparente (bg-white/10 ou bg-amber-50/10) */}
            <a href={siteContent.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-50/10 text-amber-50 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50/20 transition flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
      </header>

      {/* RESTO DO CÓDIGO (SOBRE, DESTINOS, CONTACTO) CONTINUA IGUAL */}
      {/* ... copia o resto do teu App.jsx original para aqui ... */}
      
    </div>
  );
}

export default App;
