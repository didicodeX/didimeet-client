// src/shared/services/auth.service.ts
import axios from "axios";
import API_URL from "../../shared/config/config";
import {
  LoginFormValues,
  AuthResponse,
  signUpFormValues,
} from "./auth.interface";

export const login = async (
  payload: LoginFormValues
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>(
    `${API_URL}/auth/login`,
    payload,
    {
      withCredentials: true,
    }
  );
  console.log(data);
  return data;
};

export const signup = async (
  payload: signUpFormValues
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>(
    `${API_URL}/auth/register`,
    payload,
    {
      withCredentials: true,
    }
  );
  console.log(data);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post<AuthResponse>(
    `${API_URL}/auth/logout`,
    null, // rien à envoyer dans le corps
    { withCredentials: true } // ✅ dans les options
  );
  console.log(data);
  return data;
};

export const fetchMe = async() => {
  const res = await axios.get<AuthResponse>(`${API_URL}/auth/me`, {
    withCredentials: true,
  });
  return res.data.user;
}
