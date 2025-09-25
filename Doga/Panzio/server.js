// Express keretrendszer betöltése
const express = require('express'); 
// Express alkalmazás létrehozása
const app = express(); 
// CORS engedélyezése (különböző domainek közötti kérések)
const cors = require('cors'); 
// MySQL modul betöltése
const mysql = require('mysql'); 
// CORS  használata
app.use(cors()); 
// Express JSON kezelés engedélyezése
app.use(express.json()); // 
// A szerver ezen a porton fog futni
const port = 3000; 

// Adatbázis kapcsolat beállítása
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3307,
    password: "",
    database: "fogado"
});

// Teszt útvonal – ellenőrizheted, hogy fut-e a backend
app.get('/', (req, res) => {
    res.send('Fut a backend!');
});

// Minden szoba nevének és ágyainak lekérdezése
app.get("/szobak/", (req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak;";
    db.query(sql, (err, result) => {
        if (err) return res.json("Hiba");
        return res.json(result);
    });
});

// Egy adott szoba adatainak lekérdezése név alapján
app.get("/szobak/:szoba", (req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak WHERE szobak.sznev = ?;";
    db.query(sql, [req.params.szoba], (err, result) => {
        if (err) return res.json("Hiba");
        return res.json(result);
    });
});

// Vendégek száma és foglalt éjszakák szobánként
app.get("/vendeg", (req, res) => {
    const sql = `
        SELECT szobak.sznev, 
               Count(foglalasok.vendeg) AS 'vendegek szama', 
               SUM(foglalasok.tav - foglalasok.erk) AS 'foglalt éjszakák száma' 
        FROM fogado.foglalasok 
        JOIN szobak ON szobak.szazon = foglalasok.szoba 
        GROUP BY szobak.sznev 
        ORDER BY Count(foglalasok.vendeg) ASC;
    `;
    db.query(sql, (err, result) => {
        if (err) return res.json("Hiba");
        return res.json(result);
    });
});

// Egy adott szobához tartozó foglalások és vendégek listája
app.get("/foglalt/:szoba", (req, res) => {
    const sql = `
        SELECT vendegek.vnev, foglalasok.erk, foglalasok.tav 
        FROM fogado.foglalasok 
        JOIN vendegek ON vendegek.vsorsz = foglalasok.vendeg 
        JOIN szobak ON szobak.szazon = foglalasok.szoba 
        WHERE szobak.sznev = ? 
        ORDER BY vnev ASC;
    `;
    db.query(sql, [req.params.szoba], (err, result) => {
        if (err) return res.json("Hiba");
        return res.json(result);
    });
});

// A szerver elindítása
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

