// import library and config files.
const express = require("express");
const mysql = require("mysql");
const config = require("./config");

const app = express();

// MySQL connection.
const connection = mysql.createConnection(config.database);
connection.connect((error) => {
    if (error) {
        console.log("Error connection to database server:", error)
        return null;
    }
    console.log("Connection to database server successfully.")
});

// Route or Path.
app.get('/', (req, res) => {
    const query = "SELECT * FROM weathersense_gather";
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log("Error executing query:", error);
            res.status(500).json({ error: "Error executing query" });
            return null;
        }
        res.json(results);
    });
});

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});
