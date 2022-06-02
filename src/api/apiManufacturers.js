import axios from "axios";
import { API } from "../enums/enums";


const read = async () => {
    const response = await axios(`${API}/manufacturers`);
    return response.data
}


const apiManufacturer = {read};

export default apiManufacturer;