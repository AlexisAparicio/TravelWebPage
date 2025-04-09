import Navbar from '../components/Navbar';

const Home = ({ user, setUser }) => {
  return (
    <div>
      <div className="bg-indigo-700 text-red p-4 rounded">
        Tailwind funcionando con @tailwindcss/postcss 🎉
      </div>
      <Navbar user={user} setUser={setUser} />
      <h1 className="text-2xl font-bold">Bienvenido al sistema, {user.username}</h1>
      <p className="mt-2">Aquí va el contenido de tu página principal.</p>
    </div>
  );
};

export default Home;