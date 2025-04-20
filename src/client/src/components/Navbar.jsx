import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    if (typeof setUser === 'function') {
      setUser(null);
    }

    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow z-10">
      <span className="font-semibold text-lg">Global Mind-Solutions</span>
      <div className="flex items-center gap-4">
        <span>👤 {user?.username}</span>
        <button
          onClick={handleLogout}
          className="cursor-pointer bg-red-500 hover:bg-red-900 text-white  px-3 py-1 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;