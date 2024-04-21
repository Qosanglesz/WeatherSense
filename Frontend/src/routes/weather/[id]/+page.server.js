import axios from "axios";
import {backendRoutes} from "../../../config.js";

export async function load({params}) {
    const id = params.id
    try {
        const response = await axios.get(`${backendRoutes.getWeatherById}${id}`)

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