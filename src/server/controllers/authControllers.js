import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed, role });
  await user.save();
  res.status(201).json({ message: 'User created' });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
};

export const getUserProfile = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  res.json({ username: user.username, role: user.role });
};