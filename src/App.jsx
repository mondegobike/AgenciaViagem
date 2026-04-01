import React, { useState } from 'react';
import { MapPin, CalendarDays, Compass, Phone, Mail, Instagram, Star, Send } from 'lucide-react';

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
    <div className="min-h-screen bg-stone-50 font-sans text-emerald-950">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-3xl font-black text-emerald-950 tracking-tighter">
            <Compass className="text-amber-500 h-8 w-8" /> LATITUDE<span className="text-amber-500 font-light">C</span>
          </div>
          <div className="flex items-center gap-6 font-semibold text-sm uppercase tracking-widest text-emerald-900">
            <a href="#sobre" className="hover:text-amber-600 transition">Sobre</a>
            <a href="#destinos" className="hover:text-amber-600 transition">Destinos</a>
            <a href="#contacto" className="bg-emerald-950 text-white px-6 py-2.5 rounded-full shadow hover:bg-emerald-900 transition">Pedido</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-emerald-950 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2000" alt="Natureza" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-emerald-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Viagens com Propósito</span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {siteContent.heroTitle}
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            {siteContent.heroSubtitle}
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#destinos" className="bg-amber-400 text-emerald-950 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-300 transition">Explorar Roteiros</a>
            <a href={siteContent.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic">A Nossa Essência</h2>
            <p className="text-lg text-emerald-800 leading-relaxed mb-8">{siteContent.aboutText}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><Star className="text-amber-500" /> Roteiros de Autor</div>
              <div className="flex items-center gap-2"><Star className="text-amber-500" /> Curadoria Local</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1200" className="w-full h-full object-cover" alt="Viagem" />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-6 bg-emerald-950 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Peça o seu Orçamento</h2>
        <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="Seu Nome" 
            className="w-full p-4 rounded-xl text-emerald-950 outline-none"
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="Destino" 
            className="w-full p-4 rounded-xl text-emerald-950 outline-none"
            onChange={(e) => setFormData({...formData, destino: e.target.value})}
            required
          />
          <button className="w-full bg-amber-400 text-emerald-950 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-300 transition">
            Enviar Pedido
          </button>
        </form>
      </section>
      
    </div>
  );
}

export default App;
