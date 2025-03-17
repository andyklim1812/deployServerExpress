const { Pool } = require('pg');


const pool = new Pool({
    user: 'sensor_xult_user', // Пользователь базы данных
    host: 'dpg-cvat775svqrc73c21h30-a.frankfurt-postgres.render.com', // Хост базы данных (обычно localhost)
    database: 'sensor_xult', // Название базы данных, которую мы создали
    password: '6RbCqMWVvddntu89hgSnQBTQBY8tDshX', // Пароль пользователя postgres
    port: 5432, // Порт PostgreSQL (по умолчанию 5432)
    ssl: true
  });

exports.createData = async (req, res) => {
    const { temp1, temp2, tempout, on_off } = req.body;
    try {
      const result = await pool.query('INSERT INTO data (temp1, temp2, tempout, on_off) VALUES ($1, $2, $3, $4) RETURNING *', [temp1, temp2, tempout, on_off]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  exports.getData = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM data');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };