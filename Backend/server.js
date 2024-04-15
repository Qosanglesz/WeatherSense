// import library and config files.
const express = require("express");
const mysql = require("mysql");
const axios = require("axios");
const moment = require("moment-timezone");
const config = require("./config");

// Init express app.
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
    const query = "SELECT *\n" +
        "FROM weathersense_gather\n" +
        "WHERE ts NOT IN (SELECT ts FROM weathersense_hist);\n";
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
        if (results && results.length > 0) {
            // Sent data to ModelAPI-server
            axios.post(config.modelPath.predictPath, results)
                .then((response) => {
                    // Format the datetime strings
                    const formattedResults = response.data.map(entry => {
                        // Parse the datetime string
                        const ts = new Date(entry.ts);
                        // Format the datetime string as 'YYYY-MM-DD HH:MM:SS'
                        const formattedTs = ts.toISOString().slice(0, 19).replace('T', ' ');
                        return { ...entry, ts: formattedTs };
                    });
                    // Insert the data into the weathersense_hist table
                    const insertQuery = "INSERT INTO weathersense_hist (ts, temp_sensor, humidity_sensor, temp_api, humidity_api, pressure, wind_speed, cloudiness, weather, weather_pred) VALUES ?";
                    const dataValues = response.data.map(entry => [
                        moment(entry.ts).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss'), // Convert to Thai time (GMT+7)
                        entry.temp_sensor,
                        entry.humidity_sensor,
                        entry.temp_api,
                        entry.humidity_api,
                        entry.pressure,
                        entry.wind_speed,
                        entry.cloudiness,
                        entry.weather,
                        entry.weather_pred
                    ]);

                    connection.query(insertQuery, [dataValues], (insertError, insertResults) => {
                        if (insertError) {
                            console.error("Error inserting data into weathersense_hist:", insertError);
                            return;
                        }
                        console.log("Data inserted into weathersense_hist:", insertResults);
                    });
                })
                .catch((error) => {
                    // Handle error
                    console.error('Error:', error);
                });
        }
    });
}

// Route or Path.
app.get('/latest', (req, res) => {
    // Update table weathersense_hist table.
    predictAndSaveData();

    const query = "SELECT * FROM weathersense_hist ORDER BY ts DESC LIMIT 1";
    connection.query(query, (error, results, fields) => {

        if (error) {
            console.log("Error executing query:", error);
            res.status(500).json({ error: "Error executing query" });
            return null;
        }

        res.json(results);
    });
});

app.get('/history', (req, res) => {
    // Update table weathersense_hist table.
    predictAndSaveData();

    const query = "SELECT * FROM weathersense_hist ORDER BY ts DESC";
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
