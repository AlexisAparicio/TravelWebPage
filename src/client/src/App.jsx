import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Dashboard = ({ user }) => (
  <div className="p-4">Bienvenido, {user.username} - Rol: {user.role}</div>
);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => setUser(res.data)).catch(() => setUser(null));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;