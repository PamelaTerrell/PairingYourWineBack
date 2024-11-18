import express from 'express';
import Pairing from '../models/Pairing.mjs';


const router = express.Router();

// Get all pairings
router.get('/', async (req, res) => {
  try {
    const pairings = await Pairing.find();
    res.status(200).json(pairings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch pairings' });
  }
});

// Add a new pairing
router.post('/', async (req, res) => {
  console.log(req.body, "backend")
  const { wine, dish } = req.body;
  try {
    const newPairing = new Pairing({ wine, dish });
    await newPairing.save();
    res.status(201).json(newPairing);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add pairing' });
  }
});

export default router;
