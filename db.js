
// // db.js
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const pool = require('./db');

// const app = express();                  

// app.use(cors());
// app.use(express.json());

// // Главная страница
// app.get('/', (req, res) => {
//   res.send('Добро пожаловать в магазин FLAME.TJ 🔥');
// });

// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false }
// });

// export default pool;

// // Получение всех товаров из базы
// app.get('/products', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Ошибка при получении товаров:', err);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// });

// // Добавление нового товара в базу
// app.post('/products', async (req, res) => {
//   const { name, price } = req.body;

//   if (!name || !price) {
//     return res.status(400).json({ error: 'Укажите название и цену товара' });
//   }

//   try {
//     const result = await pool.query(
//       'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
//       [name, price]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Ошибка при добавлении товара:', err);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// });

// // Запуск сервера
// const port = process.env.PORT || 3005;
// app.listen(port, () => {
//   console.log(`🚀 Сервер работает на http://localhost:${port}`);
// });

// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: Number(process.env.DB_PORT), // порт базы данных
// });

// pool.connect()
//   .then(() => console.log('✅ Подключение к базе успешно'))
//   .catch(err => console.error('❌ Ошибка подключения:', err.stack));

// // 🔥 ВАЖНО: экспортируем client
// module.exports = pool;

const getProducts = async () => {
  try {
    const res = await client.query('SELECT * FROM products');
    console.log('📦 Все товары:');
    console.table(res.rows);
  } catch (err) {
    console.error('❌ Ошибка при запросе товаров:', err.stack);
  } finally {
    client.end();
  }
};



getProducts();



// db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // важно для Render PostgreSQL
  },
});

pool.connect()
  .then(() => console.log('✅ Подключение к базе успешно'))
  .catch((err) => console.error('❌ Ошибка подключения к базе:', err.stack));

module.exports = pool;
