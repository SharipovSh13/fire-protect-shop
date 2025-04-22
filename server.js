const client = require('./db'); // Для CommonJS/ Импортируем как default export
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();                  

app.use(cors());
app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
  res.send('Добро пожаловать в магазин FLAME.TJ 🔥');
});

// Получение всех товаров из базы
app.get('/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка при получении товаров:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Добавление нового товара в базу
app.post('/products', async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Укажите название и цену товара' });
  }

  try {
    const result = await client.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
      [name, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Ошибка при добавлении товара:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Запуск сервера
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`🚀 Сервер работает на http://localhost:${port}`);
});
