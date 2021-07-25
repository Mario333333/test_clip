import axios from "./intance";

export const postCreditCard = async (data = {}) => {
  try {
    const res = await axios.post("addCreditCard", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
