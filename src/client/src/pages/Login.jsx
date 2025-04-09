import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, form);
      const token = res.data.token;
      localStorage.setItem('token', token);

      const profile = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUser(profile.data);
      navigate('/home');
    } catch (err) {
      console.error(err);
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;