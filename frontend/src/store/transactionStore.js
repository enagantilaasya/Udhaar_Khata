import { create } from "zustand";
import axios from "axios";
const API ="https://udhaar-khata-qedh.onrender.com";

export const useTransactionStore =create((set) => ({

    transactions: [],

    getTransactions:async () => {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            `${API}/transactions/all-transactions`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        set({
          transactions:
            response.data.payload,
        });
      },

    addTransaction:async (data) => {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${API}/transactions/add-transaction`,
          data,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );
      },
      deleteTransaction: async (id) => {
  const token =
    localStorage.getItem("token");

  await axios.delete(
    `https://udhaar-khata-qedh.onrender.com/transactions/delete-transaction/${id}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
},
  }));