import axios from "axios";
import { API } from "../enums/enums";

const readManufacturer = async (id) => {
    const response = await axios(`${API}/products?manufacturer.id=${id}`)
    return response.data
}

const readCategories = async (id) => {
    const response = await axios(`${API}/products?categories.id=${id}`)
    return response.data
}


const apiProducts = {readManufacturer, readCategories};

export default apiProducts;