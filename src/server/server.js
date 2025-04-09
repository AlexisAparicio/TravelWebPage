import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// CORS configurado para Vite frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware de Express 5
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/test', (req, res) => {
  res.json({ message: 'Todo OK con Express 5 🚀' });
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    app.listen(5002, () => console.log('🚀 Servidor Express 5 corriendo en http://localhost:5002'));
  })
  .catch(err => {
    console.error('❌ Error al conectar con MongoDB:', err.message);
  });