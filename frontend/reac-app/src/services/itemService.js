import axios from "../config/axios";
import API_BASE_URL from "../config/api";

export const fetchAllItems = async () => {
  const response = await axios.post(`${API_BASE_URL}/all_items`);
  return response.data; // Array of items
};