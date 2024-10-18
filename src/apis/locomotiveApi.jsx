import axios from "axios";

const BASE_URL = "http://localhost:8083";

export const getLocomotiveList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getlocomotivelist`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locomotive data:", error);
    throw error;
  }
};

export const getLocomotiveByCode = async (code) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getdetaillocomotive?locomotiveCode=${code}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching locomotive with id ${code}:`, error);
    throw error;
  }
};
