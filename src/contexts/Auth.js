import { useEffect, createContext, useReducer } from "react";
import axios from "axios";
import { api_URL, LOCAL_STORAGE_TOKEN, SET_AUTH } from "../constants/auth";
import React from "react";
import setToken from "../utils/setToken";
import { authReducer } from "../reducers/authReducer";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  //AuthState
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthorization: false,
    user: null,
  });

  //Set Authorization
  const LoadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN]) {
      setToken(localStorage[LOCAL_STORAGE_TOKEN]);
    }
    try {
      const response = await axios.get(`${api_URL}/auth`);
      if (response.data.success) {
        dispatch({
          type: SET_AUTH,
          payload: { isAuthorization: true, user: response.data.user },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthorization: false,
          user: null,
        },
      });
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
      setToken(null);
      console.log(error.message);
    }
  };

  useEffect(() => LoadUser(), []);

  //Login user
  const LoginUser = async (userForm) => {
    
    try {
      const response = await axios.post(`${api_URL}/auth/login`, userForm);
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.accessToken);
      }
      await LoadUser();
      return response.data;
    } catch (error) {
     
     
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message };
    }
  };
  //Register user
  const Register = async (registerForm) => {
    try {
      const response = await axios.post(
        `${api_URL}/auth/register`,
        registerForm
      );
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.accessToken);
      }
      await LoadUser();
      return response.data;
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
      console.log(error);
    }
  };
  //Context data
  const LoginData = { LoginUser, authState,Register };
  //Provider
  return (
    <LoginContext.Provider value={LoginData}>{children}</LoginContext.Provider>
  );
}
