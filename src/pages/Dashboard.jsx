import React from 'react';
import { LayoutDashboard, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const azulMar = "#103D3B";

  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-10">
        <h1 className="text-3xl font-bold" style={{ color: azulMar }}>Painel Geral</h1>
        <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">Bem-vindo à Gestão Latitude C</p>
      </header>

      {/* CARDS DE RESUMO RÁPIDO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-stone-50 rounded-xl text-[#103D3B]"><Briefcase size={20}/></div>
            <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12%</span>
          </div>
          <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Reservas Ativas</p>
          <p className="text-3xl font-black mt-1" style={{ color: azulMar }}>24</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-stone-50 rounded-xl text-[#103D3B]"><Users size={20}/></div>
          </div>
          <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Consultores</p>
          <p className="text-3xl font-black mt-1" style={{ color: azulMar }}>8</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-stone-50 rounded-xl text-[#103D3B]"><TrendingUp size={20}/></div>
          </div>
          <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Meta Mensal</p>
          <p className="text-3xl font-black mt-1" style={{ color: azulMar }}>85%</p>
        </div>
      </div>

      {/* MENSAGEM CENTRAL */}
      <div className="p-12 rounded-[3rem] text-white overflow-hidden relative shadow-2xl shadow-[#103D3B]/20" style={{ backgroundColor: azulMar }}>
        <div className="relative z-10">
          <h2 className="text-4xl font-light italic mb-2">O teu sistema está online.</h2>
          <p className="opacity-60 text-sm tracking-wide">Todos os serviços da API no Render e Base de Dados Supabase estão operacionais.</p>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
