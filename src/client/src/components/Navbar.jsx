import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="fixed top-0 right-0 bg-gray-100 p-4 shadow-md h-full w-64 flex flex-col items-start">
      <h2 className="font-semibold mb-4">👤 {user.username}</h2>
      <p className="mb-4">Rol: {user.role}</p>
      <button onClick={handleLogout} className="mt-auto bg-red-500 text-white px-4 py-2 rounded">Cerrar sesión</button>
    </div>
  );
};

export default Navbar;