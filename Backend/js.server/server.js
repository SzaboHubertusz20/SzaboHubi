const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const port = 3000;  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    port:3307,
    password:"",
    database:"fogado"
}); 

app.get('/', (req, res) => {
    res.send('Fut a backend!')
});
app.get('/szobak', (req, res) => {
    const sql = 'SELECT sznev,agy FROM szobak;';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    }
    );
});