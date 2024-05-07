import axios from "axios";
import {backendRoutes} from "../../config.js";

export async function load() {
    try {
        const response = await axios.get(backendRoutes.getHistory)

        if (response.data) {

            const mergedData = {
                id: [],
                ts: [],
                temp_sensor: [],
                humidity_sensor: [],
                temp_api: [],
                humidity_api: [],
                pressure: [],
                wind_speed: [],
                cloudiness: [],
                weather: [],
                weather_pred: []
            };

            const rangeLabel = {
                temp: [[10, 15], [16, 20], [21, 25], [26, 30], [31, 35], [36, 40], [41, 45], [46, 50]],
                commonPercent: [[1, 20], [21, 40], [41, 60], [61, 80], [81, 100]],
                pressure: [[1001, 1003], [1004, 1007], [1008, 1011], [1012, 1015]],
                windSpeed: [[0, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]]
            }

            response.data.forEach(entry => {
                Object.keys(mergedData).forEach(key => {
                    mergedData[key].push(entry[key]);
                });
            });

            return {
                weather : response.data,
                mergedData: mergedData,
                rangeLabel: rangeLabel,
            }
        }
    }catch (error) {
        console.log(error)
        return {
            weather: []
        }
    }
}