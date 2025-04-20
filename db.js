const { Client } = require(`pg`);
const client = require('./db');

const client = new Client({
    user: `postgres`,
    host: `localhost`,
    database: `flame_db`,
    password: `yourpassword`,
    port: 5432,
})


const insertProduct = async (name, price) => {
    const query = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
    const values = [name, price];

    try {
        const res = await client.query(query, values);
        console.log('Добавлен товар:', res.rows[0]);
    } catch (err) {
        console.error('Ошибка при вставке товара', err.stack);
    }
};
insertProduct('Огнетушитель ОП-10', 1500);

client.connect()
    .then(() => console.log(`Успешное подключение к базе данных`))
    .catch(() => console.log(`Ошибка при подключении к базе данных`, err.stack))

module.exports = client   