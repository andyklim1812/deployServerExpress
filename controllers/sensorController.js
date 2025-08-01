const { Pool } = require('pg');

const pool = new Pool({
    user: 'datatemp_qtf5_user', // Пользователь базы данных
    host: 'dpg-d06e6lk9c44c73ffgnn0-a.frankfurt-postgres.render.com', // Хост базы данных (обычно localhost)
    database: 'datatemp_qtf5', // Название базы данных, которую мы создали
    password: 'dXHASvxPVvA6M3Q7Ob4aD474aQMPfMa2', // Пароль пользователя postgres
    port: 5432, // Порт PostgreSQL (по умолчанию 5432)
    ssl: true
  });

  exports.getRef1 = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM frost1');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  exports.getRef2 = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM frost2');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };