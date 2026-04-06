import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const API_URL = "https://latitudec-api.onrender.com/api/reservas";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setReservas(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-[#103D3B] mb-8">Gestão de Reservas</h1>
      <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50/50 border-b border-stone-100">
            <tr>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400">Cliente</th>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400">Destino</th>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {reservas.map(res => (
              <tr key={res.id} className="hover:bg-stone-50/20">
                <td className="p-6 text-sm font-bold text-[#103D3B]">{res.clienteNome}</td>
                <td className="p-6 text-sm text-stone-600">{res.destino}</td>
                <td className="p-6">
                   <span className="text-[10px] font-bold uppercase flex items-center gap-1">
                     {res.estado === 'Confirmado' ? <CheckCircle size={12} className="text-green-500"/> : <Clock size={12} className="text-amber-500"/>}
                     {res.estado}
                   </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
