import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionTypes";

import type { AnyAction } from "redux";

export interface UserState {
  loading: boolean;
  user: {
    id?: string;
    email?: string;
    role?: string;
    token?: string;
  } | null;
  isAuthenticated: boolean; // ✅ added
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  isAuthenticated: false, // ✅ added
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: AnyAction
): UserState => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true, // ✅ set auth true
      };

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false, // ✅ ensure false
      };

    default:
      return state;
  }
};
