export const SIGNUP_REQUEST = "SIGNUP_REQUEST" as const;
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS" as const;
export const SIGNUP_FAILURE = "SIGNUP_FAILURE" as const;

export interface SignupSuccessPayload {
  id: string;
  email: string;
  role: string;
  token: string;
}

export type SignupActionTypes =
  | { type: typeof SIGNUP_REQUEST }
  | { type: typeof SIGNUP_SUCCESS; payload: SignupSuccessPayload }
  | { type: typeof SIGNUP_FAILURE; payload: string };


export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "LOGIN_FAILURE" as const;

export interface LoginSuccessPayload {
  id: string;
  email: string;
  role: string;
  token: string;
}

export type LoginActionTypes =
  | { type: typeof LOGIN_REQUEST }
  | { type: typeof LOGIN_SUCCESS; payload: LoginSuccessPayload }
  | { type: typeof LOGIN_FAILURE; payload: string };
