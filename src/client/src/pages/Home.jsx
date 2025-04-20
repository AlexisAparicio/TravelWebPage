import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';

const Reportes = () => <div className="ml-64 mt-16 p-8">📊 Reportes aquí</div>;
const Estadisticas = () => <div className="ml-64 mt-16 p-8">📈 Estadísticas aquí</div>;

const Home = ({ user }) => {
  return (
    <div>
      <Sidebar />
      <Navbar user={user} />
      <Routes>
        <Route path="/home/" element={<Navigate to="dashboard" />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;