import axios from "axios";

export async function load() {
    try {
        const response = await axios.get("http://localhost:3000/history")

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