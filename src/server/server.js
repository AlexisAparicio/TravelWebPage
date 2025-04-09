import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

// CORS configurado específicamente para Vite frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.use('/api/auth', authRoutes);

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🟢 Conectado a MongoDB Atlas');
    app.listen(5000, () => console.log('🚀 Servidor corriendo en http://localhost:5000'));
  })
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));