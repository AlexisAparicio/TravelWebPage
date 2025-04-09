// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración básica
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/test', (req, res) => {
  res.json({ message: 'Todo OK desde Express limpio 🚀' });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});