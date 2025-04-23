
// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // порт базы данных
});

pool.connect()
  .then(() => console.log('✅ Подключение к базе успешно'))
  .catch(err => console.error('❌ Ошибка подключения:', err.stack));

// 🔥 ВАЖНО: экспортируем client
module.exports = pool;

// const getProducts = async () => {
//   try {
//     const res = await client.query('SELECT * FROM products');
//     console.log('📦 Все товары:');
//     console.table(res.rows);
//   } catch (err) {
//     console.error('❌ Ошибка при запросе товаров:', err.stack);
//   } finally {
//     client.end();
//   }
// };



// getProducts();
