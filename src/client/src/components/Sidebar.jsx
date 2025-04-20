import { Link, useLocation } from 'react-router-dom';

    const Sidebar = () => {
    const location = useLocation();

    const navItem = (path, label) => (
        <Link
        to={path}
        className={`block px-4 py-2 rounded hover:bg-gray-200 ${
            location.pathname === path ? 'bg-gray-300 font-bold' : ''
        }`}
        >
        {label}
        </Link>
    );

    return (
        <aside className="w-64 min-h-screen bg-white border-r p-4 fixed top-16 left-0">
        <h2 className="text-xl font-semibold mb-6">Menú</h2>
        <nav className="flex flex-col gap-2">
            {navItem('/home/reportes', 'Reportes')}
            {navItem('/home/estadisticas', 'Estadísticas')}
            {navItem('/home/dashboard', 'Dashboard')}
        </nav>
        </aside>
    );
};

export default Sidebar;