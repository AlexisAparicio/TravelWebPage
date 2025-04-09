import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/api/auth/register', form);
        alert('Usuario creado correctamente');
        navigate('/login');
      } catch (err) {
        console.error(err); // 🔍 ver más detalles
        alert('Error al registrarse');
      }}

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="username" placeholder="Usuario" onChange={handleChange} className="border p-2" required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="border p-2" required />
        <select name="role" onChange={handleChange} className="border p-2">
          <option value="user">Usuario</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;