import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Reservas from './pages/Reservas';

// Uma página de Dashboard rápida só para exemplo
const Dashboard = () => (
  <div className="text-center py-20">
    <h2 className="text-4xl font-light italic text-[#103D3B]">Bem-vindo à Latitude C</h2>
  </div>
);

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
