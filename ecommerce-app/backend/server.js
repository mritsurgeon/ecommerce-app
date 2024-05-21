const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

let products = [
  { id: 1, name: 'Laptop', price: '999.99' },
  { id: 2, name: 'Phone', price: '499.99' }
];

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = { id: products.length + 1, name: req.body.name, price: req.body.price };
  products.push(newProduct);
  res.json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
