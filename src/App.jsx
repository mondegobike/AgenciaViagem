import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Reservas from './pages/Reservas';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDFCFB] flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reservas" element={<Reservas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
