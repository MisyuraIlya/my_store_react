import axios from "axios";
import { API } from "../enums/enums";

const readManufacturer = async (id,page) => {
    const response = await axios(`${API}/products?manufacturer.id=${id}&page=${page}`)
    return response.data
}

const readCategories = async (id,page) => {
    const response = await axios(`${API}/products?categories.id=${id}&page=${page}`)
    return response.data
}


const apiProducts = {readManufacturer, readCategories};

export default apiProducts;