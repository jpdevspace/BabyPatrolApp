import firebase from "../config/firebaseConfig";
import axios from 'axios';
import { url } from '../config/firebaseKey';


export const loginUser = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(`Error at SingIn \n Error Code: ${err.code} \n Msg: ${err.message}`)
  }
  const authData = { email, password, returnSecureToken: true }
  return axios
    .post(url.login, authData)
    .then((res) => {
      console.log("Login Res >>>", res);
    })
    .catch((err) => console.error("Login Error >>>", err.response))
}