import mongoose from 'mongoose';
import Pairing from './models/Pairing.mjs'; 

const seedDatabase = async () => {
  const pairings = [
    { wine: 'Chardonnay', dish: 'Chicken' },
    { wine: 'Cabernet Sauvignon', dish: 'Beef' },
    { wine: 'Pinot Noir', dish: 'Pork' },
    { wine: 'Sauvignon Blanc', dish: 'Cheese' },
    { wine: 'Pinot Grigio', dish: 'Pasta' },
    { wine: 'Albariño', dish: 'Seafood' },
  ];

  try {
    await Pairing.deleteMany({}); 
    await Pairing.insertMany(pairings);  // Insert initial pairings
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};

export { seedDatabase };
