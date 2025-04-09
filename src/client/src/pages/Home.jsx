import Navbar from '../components/Navbar';

const Home = ({ user, setUser }) => {
  return (
    <div className="p-8">
      <Navbar user={user} setUser={setUser} />
      <h1 className="text-2xl font-bold">Bienvenido al sistema, {user.username}</h1>
      <p className="mt-2">Aquí va el contenido de tu página principal.</p>
    </div>
  );
};

export default Home;