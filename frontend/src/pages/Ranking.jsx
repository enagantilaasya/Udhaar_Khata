import {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import toast from "react-hot-toast";

import {
  useCustomerStore,
} from "../store/customerStore";

function Ranking() {

  const [customers, setCustomers] =
    useState([]);

  const {
    giveDiscount,
  } = useCustomerStore();

  useEffect(() => {

    fetchCustomers();

  }, []);

  const fetchCustomers =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            "http://localhost:4000/customers/all-customers",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        const sortedCustomers =
          response.data.payload.sort(
            (a, b) =>
              Math.abs(b.balance) -
              Math.abs(a.balance)
          );

        setCustomers(
          sortedCustomers
        );

      } catch (err) {

        console.log(err);

        toast.error(
          "Failed To Load Rankings"
        );

      }
    };

  const handleDiscount =
    async (
      customer,
      rank
    ) => {

      let percentage = 0;

      if (rank === 0)
        percentage = 10;

      if (rank === 1)
        percentage = 7;

      if (rank === 2)
        percentage = 5;

      try {

        const response =
          await giveDiscount(
            customer._id,
            percentage
          );

        toast.success(
          response.message
        );

        fetchCustomers();

      } catch (err) {

        toast.error(
          err.response?.data
            ?.message ||
          "Discount Failed"
        );

      }
    };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-cyan-50
      to-emerald-50
      p-6"
    >

      {/* Header */}

      <div
        className="
        bg-gradient-to-r
        from-purple-600
        via-pink-500
        to-orange-500
        text-white
        rounded-3xl
        p-8
        mb-8
        shadow-lg"
      >

        <h1
          className="
          text-4xl
          font-bold"
        >
          Customer Rankings
        </h1>

        <p className="mt-2">
          Top Customers & Loyalty Rewards
        </p>

      </div>

      {/* Ranking Table */}

      <div
        className="
        bg-white
        rounded-3xl
        shadow-sm
        overflow-hidden"
      >

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-4 text-left">
                Rank
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Balance
              </th>

              <th className="p-4 text-left">
                Reward
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {customers.map(
              (
                customer,
                index
              ) => (

                <tr
                  key={
                    customer._id
                  }
                  className="
                  border-b
                  hover:bg-slate-50"
                >

                  <td className="p-4 font-bold">

                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : `#${index + 1}`}

                  </td>

                  <td className="p-4 font-semibold">
                    {customer.name}
                  </td>

                  <td className="p-4">
                    {customer.phone}
                  </td>

                  <td
                    className={`p-4 font-bold ${
                      customer.balance > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    ₹{customer.balance}
                  </td>

                  <td className="p-4">

                    {index === 0 &&
                      "10% Discount"}

                    {index === 1 &&
                      "7% Discount"}

                    {index === 2 &&
                      "5% Discount"}

                    {index > 2 &&
                      "-"}

                  </td>

                  <td className="p-4">

                    {index < 3 &&
                      customer.balance < 0 && (

                        <button
                          onClick={() =>
                            handleDiscount(
                              customer,
                              index
                            )
                          }
                          className="
                          bg-green-500
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          hover:bg-green-600
                          transition-all"
                        >
                          Give Discount
                        </button>

                    )}

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* Reward Rules */}

      <div
        className="
        mt-8
        bg-white
        rounded-3xl
        p-6
        shadow-sm"
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-4"
        >
          Loyalty Reward Rules
        </h2>

        <div className="space-y-3">

          <p>
            🥇 Rank #1 → 10% Discount
          </p>

          <p>
            🥈 Rank #2 → 7% Discount
          </p>

          <p>
            🥉 Rank #3 → 5% Discount
          </p>

        </div>

      </div>

    </div>
  );
}

export default Ranking;