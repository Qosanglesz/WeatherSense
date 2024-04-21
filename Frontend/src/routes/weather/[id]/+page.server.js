import axios from "axios";
import { backendRoutes } from "../../../config.js";

export async function load({ params }) {
    const id = params.id;

    try {
        // Check if ID is valid
        if (id <= 0) {
            throw new Error("Invalid ID");
        }

        const response = await axios.get(`${backendRoutes.getWeatherById}${id}`);

        // Check if response data exists
        if (response.data) {
            return {
                weather: response.data
            };
        }
    } catch (error) {
        // Log error to console
        console.error(error);

        // Throw error to be propagated to client
        throw new Error("Failed to fetch weather data");
    }

    // If no data is returned, return an empty weather array
    return {
        weather: []
    };
}