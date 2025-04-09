import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);

      const profile = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUser(profile.data);
      navigate('/dashboard');
    } catch (err) {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} className="border p-2" required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="border p-2" required />
        <button className="bg-green-600 text-white p-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;