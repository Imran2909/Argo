import axios, { AxiosError } from "axios";
import type { Dispatch } from "redux"; // ✅ FIXED
import { toast } from "react-toastify";

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  type SignupActionTypes,
  type LoginActionTypes,
} from "./actionTypes";

const API_URL = "http://localhost:3400/api/auth/register";

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const signupUser =
  (userData: SignupPayload) =>
  async (dispatch: Dispatch<SignupActionTypes>) => {
    try {
      dispatch({ type: SIGNUP_REQUEST }); // ✅ FIXED

      const response = await axios.post(API_URL, userData);

      dispatch({
        type: SIGNUP_SUCCESS, // ✅ FIXED
        payload: response.data,
      });
    } catch (error: unknown) {
      const err = error as ApiError;
      dispatch({
        type: SIGNUP_FAILURE, // ✅ FIXED
        payload: err.response?.data?.message || "Signup failed",
      });
    }
  };

export const loginUser =
  (credentials: { email: string; password: string }) =>
  async (dispatch: Dispatch<LoginActionTypes>) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const response = await axios.post(
        "http://localhost:3400/api/auth/login",
        credentials
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      toast.success("Login successful!");
    } catch (error: unknown) {
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          (error as AxiosError<{ message: string }>).response?.data?.message ||
          "Login failed. Please try again.",
      });

      toast.error("Login failed. Please check your credentials.");
    }
  };


  