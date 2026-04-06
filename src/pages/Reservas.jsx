import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // URL da tua API no Render
  const API_URL = "https://latitudec-api.onrender.com/api/reservas";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setReservas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar reservas:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#103D3B' }}>
        Gestão de Reservas
      </h1>

      <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50/50 border-b border-stone-100">
            <tr>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400 tracking-widest">Cliente</th>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400 tracking-widest">Destino</th>
              <th className="p-6 text-[10px] uppercase font-bold text-stone-400 tracking-widest">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {loading ? (
              <tr>
                <td colSpan="3" className="p-10 text-center text-stone-400 animate-pulse text-xs uppercase tracking-widest">
                  A ligar ao servidor Render...
                </td>
              </tr>
            ) : reservas.length > 0 ? (
              reservas.map((res) => (
                <tr key={res.id} className="hover:bg-stone-50/30 transition-colors">
                  <td className="p-6 text-sm font-bold text-[#103D3B]">{res.clienteNome}</td>
                  <td className="p-6 text-sm text-stone-600">{res.destino}</td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 w-fit ${
                      res.estado === 'Confirmado' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {res.estado === 'Confirmado' ? <CheckCircle size={12}/> : <Clock size={12}/>}
                      {res.estado}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-10 text-center text-stone-400 italic text-sm">
                  Nenhuma reserva encontrada na base de dados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
