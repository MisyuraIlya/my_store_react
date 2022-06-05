import axios from "axios";
import { API } from "../enums/enums";

const readCategories = async () => {
    const response = await axios(`${API}/categories`);
    return response.data
}

const apiCategory = {readCategories};
export default apiCategory;