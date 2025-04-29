const { Pool } = require('pg');


const pool = new Pool({
    user: 'datatemp_qtf5_user', // Пользователь базы данных
    host: 'dpg-d06e6lk9c44c73ffgnn0-a.frankfurt-postgres.render.com', // Хост базы данных (обычно localhost)
    database: 'datatemp_qtf5', // Название базы данных, которую мы создали
    password: 'dXHASvxPVvA6M3Q7Ob4aD474aQMPfMa2', // Пароль пользователя postgres
    port: 5432, // Порт PostgreSQL (по умолчанию 5432)
    ssl: true
  });

// exports.createData = async (req, res) => {
//     const { temp1, temp2,temp3,temp_out,hum1,hum2,hum3,hum_out,on_off1,on_off2,on_off3,press_h1,press_h2,press_h3,press_l1,press_l2,press_l3 } = req.body;
//     try {
//       const result = await pool.query('INSERT INTO data (temp1, temp2,temp3,temp_out,hum1,hum2,hum3,hum_out,on_off1,on_off2,on_off3,press_h1,press_h2,press_h3,press_l1,press_l2,press_l3) VALUES ($1, $2, $3, $4) RETURNING *',
//          [temp1, temp2,temp3,temp_out,hum1,hum2,hum3,hum_out,on_off1,on_off2,on_off3,press_h1,press_h2,press_h3,press_l1,press_l2,press_l3]);
//       res.status(201).json(result.rows[0]);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  exports.getData = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM data');
      res.status(200).json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };