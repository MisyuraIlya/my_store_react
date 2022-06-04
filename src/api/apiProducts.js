import axios from "axios";
import { API } from "../enums/enums";

const readManufacturer = async (id) => {
    const response = await axios(`${API}/products?manufacturer.id=${id}`)
    return response.data
}


const apiProducts = {readManufacturer};

export default apiProducts;