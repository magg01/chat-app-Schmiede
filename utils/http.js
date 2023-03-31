import axios from "axios";

const BACKEND_URL =
  "https://gorest.co.in/public/v2";

export const fetchUsers = async () => {
  const response = await axios.get(
    BACKEND_URL + '/users'
  );
  console.log(response.data);
  
  const users = response.data;

  return users;
};
