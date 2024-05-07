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

            function groupByDayOfWeekWithMean(dateStrings, tempSensors) {
                // Create an object to store temp_sensor values for each day of the week
                const dayOfWeekTemp = {};
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                // Map each date string to its corresponding day of the week
                const daysOfWeekArray = dateStrings.map(dateString => {
                    const date = new Date(dateString);
                    return daysOfWeek[date.getUTCDay()];
                });

                // Merge day of the week with temp_sensor values
                for (let i = 0; i < daysOfWeekArray.length; i++) {
                    const dayOfWeek = daysOfWeekArray[i];
                    const tempSensor = tempSensors[i];
                    if (!dayOfWeekTemp[dayOfWeek]) {
                        dayOfWeekTemp[dayOfWeek] = [];
                    }
                    dayOfWeekTemp[dayOfWeek].push(tempSensor);
                }

                // Calculate the mean temp_sensor for each day of the week
                const meanTempByDay = {};

                for (const dayOfWeek in dayOfWeekTemp) {
                    const tempArray = dayOfWeekTemp[dayOfWeek];
                    const meanTemp = tempArray.reduce((sum, temp) => sum + temp, 0) / tempArray.length;
                    meanTempByDay[dayOfWeek] = meanTemp;
                }

                return meanTempByDay;
            }

            function mergeArrays(arr1, arr2) {
                // Check if both arrays have the same length
                if (arr1.length !== arr2.length) {
                    throw new Error('Arrays must have the same length');
                }

                // Merge the arrays into an array of objects
                const result = arr1.map((x, index) => ({ x, y: arr2[index] }));

                return result;
            }

            const temperatureSensorVsAPI = mergeArrays(mergedData.temp_sensor, mergedData.temp_api);
            const humiditySensorVsAPI = mergeArrays(mergedData.humidity_sensor, mergedData.humidity_api);
            const temperatureVsHumidity = mergeArrays(mergedData.temp_api, mergedData.humidity_api);

            const dayOfWeekAverageTempSensor = groupByDayOfWeekWithMean(mergedData.ts, mergedData.temp_sensor);
            const dayOfWeekAverageTempAPI = groupByDayOfWeekWithMean(mergedData.ts, mergedData.temp_api);
            const dayOfWeekAverageHumiditySensor = groupByDayOfWeekWithMean(mergedData.ts, mergedData.humidity_sensor);
            const dayOfWeekAverageHumidityAPI = groupByDayOfWeekWithMean(mergedData.ts, mergedData.humidity_api);

            return {
                weather : response.data,
                mergedData: mergedData,
                rangeLabel: rangeLabel,
                dayOfWeekAverageTempSensor: dayOfWeekAverageTempSensor,
                dayOfWeekAverageTempAPI: dayOfWeekAverageTempAPI,
                dayOfWeekAverageHumiditySensor: dayOfWeekAverageHumiditySensor,
                dayOfWeekAverageHumidityAPI: dayOfWeekAverageHumidityAPI,
                temperatureSensorVsAPI: temperatureSensorVsAPI,
                humiditySensorVsAPI: humiditySensorVsAPI,
                temperatureVsHumidity: temperatureVsHumidity,
            }
        }
    }catch (error) {
        console.log(error)
        return {
            weather: []
        }
    }
}