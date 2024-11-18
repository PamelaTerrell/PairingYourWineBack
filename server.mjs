import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import pairingRoutes from './routes/Pairings.mjs';
import { seedDatabase } from './seed.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    if (process.env.NODE_ENV === 'development') {
      seedDatabase();  // Optionally seed the database in development mode
    }
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/pairings', pairingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
