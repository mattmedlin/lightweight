import axios from "axios";

const API_URL = "http://localhost:8000";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
