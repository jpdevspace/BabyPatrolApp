import axios from 'axios';
import { url } from '../config/firebaseKey';

export const registerUser = (email, password) => {
  const authData = { email, password, returnSecureToken: true };
  axios
    .post(url.register, authData)
    .then((res) => console.log("Google Res >>>", res))
    .catch((err) => console.error("Error >>>", err.response))
}

export const loginUser = (email, password) => {
  const authData = { email, password, returnSecureToken: true }
  return axios.post(url.login, authData)
}