import { create } from "zustand";
import axios from "axios";

const API ="http://localhost:4000";

export const useCustomerStore = create((set) => ({
    customers: [],

    getCustomers:
      async () => {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            `${API}/customers/all-customers`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        set({
          customers:
            response.data.payload,
        });
      },
    addCustomer:
      async (customer) => {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${API}/customers/add-customer`,
          customer,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );
      },
    deleteCustomer: async (id) => {

  const token =
    localStorage.getItem(
      "token"
    );

  await axios.delete(
    `${API}/customers/delete-customer/${id}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
},
    giveDiscount:
async (
  customerId,
  discountPercentage
) => {

  const token =
    localStorage.getItem(
      "token"
    );

  const response =
    await axios.put(
      `http://localhost:4000/customers/give-discount/${customerId}`,
      {
        discountPercentage,
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
},
  }));