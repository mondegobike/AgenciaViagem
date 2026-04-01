import React, { useState } from 'react';
import { MapPin, CalendarDays, Compass, Phone, Mail, Instagram, Star, Send } from 'lucide-react';

// PALETA DE CORES LATITUDE C:
// Principal: bg-emerald-950 (Verde Floresta Escuro)
// Detalhes: text-amber-400 (Dourado/Areia)
// Fundo: bg-stone-50 (Branco Sujo/Pedra)

function App() {
  // 1. "BASE DE DADOS" LOCAL (Conteúdo que o Admin edita)
  const [siteContent] = useState({
    heroTitle: "Roteiros de Autor e Viagens Exclusivas.",
    heroSubtitle: "Descubra o mundo com a curadoria da Latitude C. Experiências autênticas desenhadas para viajantes exigentes.",
    aboutText: "A Latitude C não é apenas uma agência; é a sua bússola para experiências inesquecíveis. Especializamo-nos em criar roteiros personalizados que combinam conforto, aventura e imersão cultural, inspirados na nossa paixão por explorar o desconhecido.",
    instagramUrl: "https://www.instagram.com/latitudec_viagens/",
    contactPhone: "+351 912 345 678",
    contactEmail: "reservas@latitudec.pt"
  });

  // 2. ESTADO DO FORMULÁRIO (Capturar dados do utilizador)
  const [formData, setFormData] = useState({ nome: '', destino: '', mensagem: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido enviado:", formData);
    alert(`Obrigado, ${formData.nome}! O seu pedido para ${formData.destino} foi registado. Entraremos em contacto para ${siteContent.contactEmail} brevemente.`);
    // Aqui ligarias a uma API de backend real (ex: Supabase, Node.js)
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-emerald-950">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-3xl font-black text-emerald-950 tracking-tighter">
            <Compass className="text-amber-500 h-8 w-8" /> LATITUDE<span className="text-amber-500 font-light">C</span>
          </div>
          <div className="flex items-center gap-6 font-semibold text-sm uppercase tracking-widest text-emerald-900">
            <a href="#sobre" className="hover:text-amber-600 transition">Sobre</a>
            <a href="#destinos" className="hover:text-amber-600 transition">Destinos</a>
            <a href="#contacto" className="bg-emerald-950 text-white px-6 py-2.5 rounded-full shadow hover:bg-emerald-900 transition">Pedir Orçamento</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-emerald-950 text-white py-24 px-6 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2000" alt="Viagem Natureza" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-emerald-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Viagens com Propósito</span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {siteContent.heroTitle}
          </div>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            {siteContent.heroSubtitle}
          </div>
          <div className="flex gap-4 justify-center">
            <a href="#destinos" className="bg-amber-400 text-emerald-950 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-300 transition">Explorar Roteiros</a>
            <a href={siteContent.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Ver no Instagram
            </a>
          </div>
        </div>
      </header>

      {/* --- SOBRE A LATITUDE C --- */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2 block">A Nossa Essência</span>
            <h2 className="text-4xl font-bold text-emerald-950 mb-6 leading-tight">Curadoria de Viagens para Quem Procura o Autêntico</h2>
            <p className="text-lg text-emerald-800 leading-relaxed mb-8">
              {siteContent.aboutText}
            </p>
            <div className="grid grid-cols-2 gap-6 text-emerald-900 font-medium">
              <div className="flex items-center gap-3"><Star className="text-amber-500 h-5 w-5" /> Roteiros Exclusivos</div>
              <div className="flex items-center gap-3"><Star className="text-amber-500 h-5 w-5" /> Guias Locais Especialistas</div>
              <div className="flex items-center gap-3"><Star className="text-amber-500 h-5 w-5" /> Apoio 24/7 na Viagem</div>
              <div className="flex items-center gap-3"><Star className="text-amber-500 h-5 w-5" /> Foco em Sustentabilidade</div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100">
            <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1200" alt="Viagem de Autor" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- DESTINOS EM DESTAQUE (Simulação) --- */}
      <section id="destinos" className="py-24 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-950 mb-4">Próximas Expedições</h2>
            <p className="text-xl text-emerald-800 max-w-2xl mx-auto">Lugares limitados para experiências imersivas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600" alt="Grécia" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 bg-emerald-950 text-amber-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"><CalendarDays className="h-3 w-3"/> MAIO 2026</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-3 flex items-center gap-2"><MapPin className="text-amber-500"/> Santorini, Grécia</h3>
                <p className="text-emerald-800 text-base mb-6 font-light">A magia do Egeu: cultura, gastronomia e pôr-do-sol inesquecível num roteiro exclusivo.</p>
                <div className="flex justify-between items-center border-t border-stone-100 pt-5">
                  <span className="text-3xl font-black text-emerald-950">980€ <span className="text-sm font-light text-emerald-700">/pessoa</span></span>
                  <a href="#contacto" className="text-amber-600 font-bold hover:text-amber-700">Saber Mais →</a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600" alt="México" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 bg-emerald-950 text-amber-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"><CalendarDays className="h-3 w-3"/> SET 2026</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-3 flex items-center gap-2"><MapPin className="text-amber-500"/> Tulum, México</h3>
                <p className="text-emerald-800 text-base mb-6 font-light">Natureza selvagem e ruínas maias. Uma expedição desenhada para os amantes da aventura.</p>
                <div className="flex justify-between items-center border-t border-stone-100 pt-5">
                  <span className="text-3xl font-black text-emerald-950">1.250€ <span className="text-sm font-light text-emerald-700">/pessoa</span></span>
                  <a href="#contacto" className="text-amber-600 font-bold hover:text-amber-700">Saber Mais →</a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1506929113670-b43697e0665c?w=600" alt="Tailândia" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 bg-emerald-950 text-amber-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"><CalendarDays className="h-3 w-3"/> NOV 2026</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-3 flex items-center gap-2"><MapPin className="text-amber-500"/> Krabi, Tailândia</h3>
                <p className="text-emerald-800 text-base mb-6 font-light">Templos sagrados e praias de sonho. A curadoria da Latitude C no coração do Sudeste Asiático.</p>
                <div className="flex justify-between items-center border-t border-stone-100 pt-5">
                  <span className="text-3xl font-black text-emerald-950">1.490€ <span className="text-sm font-light text-emerald-700">/pessoa</span></span>
                  <a href="#contacto" className="text-amber-600 font-bold hover:text-amber-700">Saber Mais →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULÁRIO DE CONTACTO --- */}
      <section id="contacto" className="py-24 px-6 bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          
          {/* Informações de Contacto */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-6">Desenhe o Seu Próximo Capítulo</h2>
            <p className="text-emerald-200 text-lg mb-10 font-light">Diga-nos para onde quer ir e nós tratamos da bússola.</p>
            <div className="space-y-6 text-emerald-100">
              <a href={`tel:${siteContent.contactPhone}`} className="flex items-center gap-4 hover:text-amber-400"><Phone className="h-6 w-6 text-amber-400" /> {siteContent.contactPhone}</a>
              <a href={`mailto:${siteContent.contactEmail}`} className="flex items-center gap-4 hover:text-amber-400"><Mail className="h-6 w-6 text-amber-400" /> {siteContent.contactEmail}</a>
              <a href={siteContent.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-amber-400"><Instagram className="h-6 w-6 text-amber-400" /> @latitudec_viagens</a>
            </div>
          </div>

          {/* O Formulário (Lógica React) */}
          <form onSubmit={handleFormSubmit} className="md:col-span-2 bg-white p-12 rounded-3xl shadow-2xl text-emerald-950 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-emerald-900">Seu Nome Completo</label>
              <input type="text" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full p-4 bg-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-400" placeholder="Ex: João Silva" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-emerald-900">Destino de Interesse</label>
              <input type="text" value={formData.destino} onChange={(e) => setFormData({...formData, destino: e.target.value})} className="w-full p-4 bg-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-400" placeholder="Ex: Grécia ou Tailândia" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-emerald-900">Mês Pretendido</label>
              <input type="text" className="w-full p-4 bg-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-400" placeholder="Ex: Maio ou Setembro" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-emerald-900">Detalhes Adicionais (Opcional)</label>
              <textarea value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} className="w-full p-4 bg-stone-100 rounded-xl outline-none focus:ring-2 ring-amber-400 h-32" placeholder="Diga-nos mais sobre a sua viagem de sonho..."></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-emerald-950 text-white font-bold py-4 rounded-xl hover:bg-black transition uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg">
              <Send className="h-5 w-5" /> Solicitar Orçamento Personalizado
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-stone-50 border-t border-stone-100 text-center text-emerald-800 text-sm">
        <p className="font-bold text-lg mb-2">LATITUDE C</p>
        <p>© 2026 Latitude C - Agência de Viagens (Simulação). Feito com paixão por viajar.</p>
        <p className="mt-1 font-light">Este site é um projeto de demonstração inspirado na Latitude C Viagens.</p>
      </footer>

    </div>
  );
}

export default App;
