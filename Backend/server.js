const express = require("express");
const mysql = require("mysql")

const app = express();

// MySQL connection
const connection = mysql.createConnection( {
    host: '',
    user: '',
    password: '',
    database: '',
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});