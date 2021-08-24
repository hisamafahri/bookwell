const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookwell'
})

app.use(cors())
app.use(express.json())


app.get('/events', (req, res) => {
  const sqlSelect = "SELECT * FROM bookwell.event;"
  db.query(sqlSelect, (err, results, fields) => {
    if(err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})