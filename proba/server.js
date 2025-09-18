const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); 

app.get('/', (req, res) => {
    res.send('Fut a backend!')
});
app.get('/km', (req, res) => {
    const sql = "SELECT * FROM kozutak.megyek";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/kh', (req, res) => {
    const sql = "SELECT * FROM kozutak.kozutak_hossza";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/kr', (req, res) => {
    const sql = "SELECT * FROM kozutak.regiok";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}); 


app.delete('/torles/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM kozutak.megyek WHERE id = ?";  
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Sikeres törlés");
        }
    });
});