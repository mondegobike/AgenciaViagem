import { Link } from 'react-router-dom';
import { LayoutDashboard, Briefcase } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#103D3B] text-white flex flex-col p-8 fixed h-full border-r border-white/10">
      <div className="mb-12">
        <span className="text-xl font-light tracking-[0.3em] block italic">LATITUDE</span>
        <span className="text-2xl font-black">C</span>
      </div>
      <nav className="flex-1 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition-all">
          <LayoutDashboard size={18}/> Dashboard
        </Link>
        <Link to="/reservas" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition-all">
          <Briefcase size={18}/> Reservas
        </Link>
      </nav>
      <div className="mt-auto pt-6 border-t border-white/10 opacity-30 text-[9px] uppercase tracking-widest text-center">
        RNAVT 13143
      </div>
    </aside>
  );
}
