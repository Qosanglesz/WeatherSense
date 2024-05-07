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

            response.data.forEach(entry => {
                Object.keys(mergedData).forEach(key => {
                    mergedData[key].push(entry[key]);
                });
            });

            return {
                weather : response.data,
                mergedData: mergedData,
            }
        }
    }catch (error) {
        console.log(error)
        return {
            weather: []
        }
    }
}