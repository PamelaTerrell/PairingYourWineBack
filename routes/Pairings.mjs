import express from 'express';
import Pairing from '../models/Pairing.mjs'; // Ensure the correct path to your model

const router = express.Router();

// Get all pairings (Read)
router.get('/', async (req, res) => {
  try {
    const pairings = await Pairing.find();
    res.status(200).json(pairings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch pairings' });
  }
});

// Add a new pairing (Create)
router.post('/', async (req, res) => {
  const { wine, dish } = req.body;
  try {
    const newPairing = new Pairing({ wine, dish });
    await newPairing.save();
    res.status(201).json(newPairing);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add pairing' });
  }
});

// Update a pairing (Update)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { wine, dish } = req.body;
  try {
    const updatedPairing = await Pairing.findByIdAndUpdate(id, { wine, dish }, { new: true });
    if (!updatedPairing) {
      return res.status(404).json({ message: 'Pairing not found' });
    }
    res.status(200).json(updatedPairing);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update pairing' });
  }
});

// Delete a pairing (Delete)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPairing = await Pairing.findByIdAndDelete(id);
    if (!deletedPairing) {
      return res.status(404).json({ message: 'Pairing not found' });
    }
    res.status(200).json({ message: 'Pairing deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete pairing' });
  }
});

export default router;
