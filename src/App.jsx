import React, { useState } from 'react';
import { Plane, MapPin, Phone, Send, Menu, X, Instagram, Facebook, Clock } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock Data - No futuro, estes dados virão do teu Admin/Base de Dados
  const agencyInfo = {
    name: "Latitude C | Agência de Viagens",
    tagline: "O mundo espera por si.",
    description: "Experiências personalizadas e destinos inesquecíveis desenhados à sua medida por especialistas com mais de 10 anos de mercado.",
    phone: "+351 912 345 678",
    email: "reservas@viajarmis.pt"
  };

  const destinations = [
    { id: 1, title: 'Maldivas', price: '1.250€', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800' },
    { id: 2, title: 'Tóquio', price: '980€', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' },
    { id: 3, title: 'Roma', price: '290€', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Plane className="text-blue-600" size={28} />
              <span className="text-xl font-black tracking-tighter text-blue-900">VIAJAR+</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
              <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
              <a href="#destinos" className="hover:text-blue-600 transition">Destinos</a>
              <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
              <a href="#contacto" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">Pedir Orçamento</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Viagem" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {agencyInfo.tagline}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-100 opacity-90">
              Tratamos de todos os detalhes para que a sua única preocupação seja aproveitar a viagem.
            </p>
            <div className="flex gap-4">
              <a href="#destinos" className="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-blue-50 transition">
                Ver Destinos
              </a>
              <a href="#contacto" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- DESTINOS --- */}
      <section id="destinos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Destinos em Destaque</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={dest.img} alt={dest.title} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-blue-600 shadow-sm text-sm">
                  {dest.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                <p className="text-slate-500 text-sm mb-4 italic">Pacote completo com voo e alojamento 5*</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Saber mais <Send size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SOBRE NÓS --- */}
      <section id="sobre" className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-2xl shadow-2xl" 
              alt="Equipa" 
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Porquê escolher a {agencyInfo.name}?</h2>
            <p className="text-slate-600 leading-relaxed">{agencyInfo.description}</p>
            <ul className="space-y-4">
              {[
                { icon: <Clock size={20} />, text: "Atendimento 24/7 durante a sua viagem" },
                { icon: <MapPin size={20} />, text: "Acesso a destinos exclusivos e guias locais" },
                { icon: <Phone size={20} />, text: "Especialistas em luas de mel e viagens de grupo" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                  <span className="text-blue-600">{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- FORMULÁRIO --- */}
      <section id="contacto" className="py-24 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Peça um orçamento gratuito</h2>
            <p className="text-blue-200 mb-8">
              Diga-nos o que procura e nós tratamos de encontrar a melhor oferta no mercado.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-800 p-3 rounded-full"><Phone size={20} /></div>
                <span>{agencyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-800 p-3 rounded-full"><Instagram size={20} /></div>
                <span>@viajarmais_agencia</span>
              </div>
            </div>
          </div>

          <form className="bg-white p-8 rounded-xl text-slate-900 space-y-4 shadow-2xl">
            <input type="text" placeholder="Seu Nome" className="w-full p-3 border border-slate-200 rounded focus:border-blue-600 outline-none" />
            <input type="email" placeholder="Seu Email" className="w-full p-3 border border-slate-200 rounded focus:border-blue-600 outline-none" />
            <select className="w-full p-3 border border-slate-200 rounded focus:border-blue-600 outline-none bg-white">
              <option>Destino de interesse</option>
              <option>Europa</option>
              <option>Ásia</option>
              <option>Caraíbas</option>
            </select>
            <textarea placeholder="Mais detalhes (ex: datas, nº de pessoas)" rows="4" className="w-full p-3 border border-slate-200 rounded focus:border-blue-600 outline-none"></textarea>
            <button className="w-full bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 transition">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <div className="flex justify-center gap-6 mb-6 text-slate-400">
          <Instagram className="hover:text-blue-600 cursor-pointer transition" />
          <Facebook className="hover:text-blue-600 cursor-pointer transition" />
        </div>
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">© 2026 {agencyInfo.name.toUpperCase()}</p>
      </footer>
    </div>
  );
};

export default App;
