import {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import toast from "react-hot-toast";

import {
  useCustomerStore,
} from "../store/customerStore";

function Reminder() {

  const {
    customers,
    getCustomers,
  } = useCustomerStore();

  const [sendingId, setSendingId] =
    useState(null);

  const [sentCustomers, setSentCustomers] =
    useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const token =
    localStorage.getItem(
      "token"
    );

  // Only customers who owe money
  const pendingCustomers =
    customers.filter(
      (customer) =>
        customer.balance < 0
    );

  const sendReminder =
    async (customer) => {

      try {

        setSendingId(
          customer._id
        );

        const response =
          await axios.post(
            "https://udhaar-khata-qedh.onrender.com/reminder/send",
            {
              phone:
                customer.phone,
              name:
                customer.name,
              balance:
                Math.abs(
                  customer.balance
                ),
            },
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        toast.success(
          response.data.message ||
          "Reminder Sent Successfully"
        );

        setSentCustomers(
          (prev) => [
            ...prev,
            customer._id,
          ]
        );

      } catch (err) {

        toast.error(
          err.response?.data
            ?.message ||
          "Failed To Send Reminder"
        );

      } finally {

        setSendingId(null);

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

      <div
        className="
        bg-gradient-to-r
        from-red-600
        via-orange-500
        to-yellow-500
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
          Payment Reminders
        </h1>

        <p
          className="
          mt-2
          text-white/90"
        >
          Customers with pending dues
        </p>

        <div className="mt-4">

          <span
            className="
            bg-white/20
            px-4
            py-2
            rounded-xl
            font-medium"
          >
            {pendingCustomers.length}
            {" "}
            Pending Customers
          </span>

        </div>

      </div>

      {pendingCustomers.length ===
      0 ? (

        <div
          className="
          bg-white
          p-10
          rounded-3xl
          text-center
          shadow-sm"
        >

          <h2
            className="
            text-3xl
            font-bold
            text-green-600"
          >
            🎉 No Pending Dues
          </h2>

          <p
            className="
            text-gray-500
            mt-3"
          >
            All customers have cleared
            their payments.
          </p>

        </div>

      ) : (

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6"
        >

          {pendingCustomers.map(
            (customer) => (

              <div
                key={
                  customer._id
                }
                className="
                bg-white
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-xl
                transition-all"
              >

                <h2
                  className="
                  text-2xl
                  font-bold
                  text-slate-800"
                >
                  {customer.name}
                </h2>

                <p
                  className="
                  mt-3
                  text-slate-500"
                >
                  {customer.phone}
                </p>

                <p
                  className="
                  text-slate-500"
                >
                  {customer.address}
                </p>

                <div
                  className="
                  mt-4"
                >

                  <p
                    className="
                    text-sm
                    text-slate-500"
                  >
                    Amount To Collect
                  </p>

                  <h3
                    className="
                    text-3xl
                    font-bold
                    text-red-500"
                  >
                    ₹
                    {Math.abs(
                      customer.balance
                    )}
                  </h3>

                </div>

                <button
                  onClick={() =>
                    sendReminder(
                      customer
                    )
                  }
                  disabled={
                    sendingId ===
                    customer._id
                  }
                  className="
                  mt-6
                  w-full
                  bg-gradient-to-r
                  from-red-500
                  to-orange-500
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all
                  disabled:opacity-50"
                >

                  {sendingId ===
                  customer._id
                    ? "Sending..."
                    : sentCustomers.includes(
                        customer._id
                      )
                    ? "✓ Sent Successfully"
                    : "Send Reminder"}

                </button>

              </div>
            )
          )}

        </div>

      )}

    </div>
  );
}

export default Reminder;