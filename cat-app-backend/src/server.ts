import express from 'express';
import mongoose from 'mongoose';
import catRouter from './controllers/cat.controller';
import imageRouter from './controllers/image.controller';
import userRouter from './controllers/user.controller';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api', catRouter);
app.use('/api', imageRouter);
app.use('/api', userRouter);

// Conexión a Mongo
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
