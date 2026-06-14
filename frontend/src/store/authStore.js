import { create } from "zustand";
import axios from "axios";

const API ="https://udhaar-khata-qedh.onrender.com";

export const useAuthStore =
  create((set) => ({
    token:localStorage.getItem("token"),
    user: null,
    register: async (userData) => {
      const response =
        await axios.post(
          `${API}/auth/register`,
          userData
        );
      return response.data;
    },
    login: async (loginData) => {

  const response =
    await axios.post(
      `${API}/auth/login`,
      loginData
    );

  localStorage.setItem(
    "token",
    response.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(
      response.data.payload
    )
  );

  set({
    token:
      response.data.token,
    user:
      response.data.payload,
  });

  return response.data;
},
    logout: () => {
      localStorage.removeItem(
        "token"
      );
      set({
        token: null,
        user: null,
      });
    },
  }));