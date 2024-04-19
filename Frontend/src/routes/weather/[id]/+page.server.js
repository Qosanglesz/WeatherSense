import axios from "axios";

export async function load({params}) {
    const id = params.id
    try {
        const response = await axios.get(`http://localhost:3000/weather/${id}`)

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