import mongoose from 'mongoose';

const PairingSchema = new mongoose.Schema({
  wine: { type: String, required: true },
  dish: { type: String, required: true },
});

const Pairing = mongoose.model('Pairing', PairingSchema);

export default Pairing;
