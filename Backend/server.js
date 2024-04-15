// import library and config files.
const express = require("express");
const mysql = require("mysql");
const config = require("./config");
const axios = require("axios");

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

// Function.
function loadUnPredictData(callback) {
    const query = "SELECT * FROM weathersense_gather";
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log("Error executing query:", error);
            callback(error, null);
            return null;
        }
        callback(null, results);
    });
}
function predictAndSaveData() {
    loadUnPredictData((error, results) => {
        if (error) {
            // Handle error
            console.error("Error loading unpredicted data:", error);
            return null;
        }
        // Handle results
        // Sent data to ModelAPI-server
        axios.post(config.modelPath.predictPath, results)
            .then((response) => {
                // Handle successful response
                console.log('Predicted response:', response.data);
                // Add this line to print the JSON result from the ModelAPI
                console.log('ModelAPI JSON result:', response.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Error:', error);
            });

    });
}

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
