import axios from "axios";

export const createUser = async (user) => {
  console.log('createUser called with user:', user); // Log when the function is called
  try {
    console.log('Sending POST request to:', import.meta.env.VITE_API_CREATEUSER); // Log the URL
    let res = await axios.post(import.meta.env.VITE_API_CREATEUSER, user);
    console.log('POST request response:', res); // Log the response
    let data = res.data;
    return data;
  } catch (err) {
    console.log('Error:', err); // Log any error
  }
};