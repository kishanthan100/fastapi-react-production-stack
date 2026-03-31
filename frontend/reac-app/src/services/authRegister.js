import axios from "axios";
import API_BASE_URL from "../config/api";


export const registerUser = async (name,email, password) => {
  const response = await axios.post(
    `${API_BASE_URL}/register`,
    {
      name: name,
      email: email,
      password: password,
    },
    {
      withCredentials: true, // safe even if not using cookies yet
    }
  );

  return response.data;
};