import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['admin', 'user', 'manager'], default: 'user' }
});

export default mongoose.model('User', userSchema);