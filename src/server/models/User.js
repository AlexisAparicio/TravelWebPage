import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'manager', 'user'], default: 'user' },
  departamento: { type: String, required: true },
  rango: { type: String, required: true },
  cliente: { type: String, required: true } // nuevo campo
});

export default mongoose.model('User', userSchema);