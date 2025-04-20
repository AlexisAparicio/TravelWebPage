import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, form);
      alert('Usuario registrado correctamente');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Error al registrar: ' + (err.response?.data?.message || ''));
    }
  };

  return (
    
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <input name="departamento" placeholder="Departamento" onChange={handleChange} required />
        <input name="cliente" placeholder="Cliente" onChange={handleChange} required />
        <input name="rango" placeholder="Rango" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="user">Usuario</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;