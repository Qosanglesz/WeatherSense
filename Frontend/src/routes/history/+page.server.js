import axios from "axios";
import {backendRoutes} from "../../config.js";

export async function load() {
    try {
        const response = await axios.get(backendRoutes.getHistory)

        if (response.data) {
            return {
                weather : response.data
            }
        }
    }catch (error) {
        console.log(error)
        return {
            weather: []
        }
    }
}