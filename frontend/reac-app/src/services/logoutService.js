import axios from "axios";
import API_BASE_URL from "../config/api";

export const logoutUser = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout`);
  } catch (error) {
    console.error("Logout API error:", error);
  }

  // if using localStorage
  localStorage.removeItem("access_token");
};