const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Serve static images under /api/images
app.use('/api/images', express.static(path.join(__dirname, 'public')));

// GET /api/categories
app.get('/api/categories', (req, res) => {
  const filePath = path.join(__dirname, 'data/category.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Internal Server Error');
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).send('Internal Server Error');
    }
  });
});

// GET /api/top-restaurant-chains
app.get('/api/top-restaurant-chains', (req, res) => {
  const filePath = path.join(__dirname, 'data/restaurantChains.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Internal Server Error');
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).send('Internal Server Error');
    }
  });
});

// ✅ Export app (important for Vercel)
module.exports = app;
