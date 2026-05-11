import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products, CATEGORIES, INGREDIENTS } from './src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {
  products: products,
  categories: CATEGORIES.map((name, index) => ({ id: index + 1, name })),
  ingredients: INGREDIENTS.map((name, index) => ({ id: index + 1, name }))
};

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2));
console.log('db.json generated successfully!');
