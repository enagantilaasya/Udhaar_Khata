import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

import FlipCard from "../components/FilpCard";

function Dashboard() {

  const navigate =
    useNavigate();

  const [stats, setStats] =
    useState({
      totalCustomers: 0,
      totalPendingAmount: 0,
      totalTransactions: 0,
      totalCredit: 0,
      totalDebit: 0,
    });

  const [
    recentTransactions,
    setRecentTransactions,
  ] = useState([]);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const dashboardResponse =
          await axios.get(
            "http://localhost:4000/analytics/dashboard",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setStats(
          dashboardResponse.data
            .payload
        );

        const transactionResponse =
          await axios.get(
            "http://localhost:4000/transactions/all-transactions",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setRecentTransactions(
          transactionResponse.data.payload.slice(
            0,
            5
          )
        );

      } catch (err) {

        console.log(err);

      }
    };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-cyan-50
      to-emerald-50"
    >

      <div className="p-6">

        {/* Hero Section */}

        <div
          className="
          bg-gradient-to-r
          from-emerald-600
          via-green-500
          to-cyan-500
          text-white
          rounded-3xl
          p-8
          shadow-lg
          mb-8"
        >

          <h1
            className="
            text-4xl
            font-bold"
          >
            Dashboard
          </h1>

          <p
            className="
            mt-2
            text-white/90"
          >
            Manage Customers,
            Payments,
            Transactions and
            Reminders.
          </p>

        </div>

        {/* Stats */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-6"
        >

          <FlipCard
            title="Customers"
            value={
              stats.totalCustomers
            }
          />

          <FlipCard
            title="Pending Amount"
            value={`₹${stats.totalPendingAmount}`}
          />

          <FlipCard
            title="Transactions"
            value={
              stats.totalTransactions
            }
          />

          <FlipCard
            title="Total Credit"
            value={`₹${stats.totalCredit}`}
          />

          <FlipCard
            title="Total Debit"
            value={`₹${stats.totalDebit}`}
          />

        </div>

        {/* Quick Actions */}

        <div
          className="
          mt-10
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
            Quick Actions
          </h2>

          <div
            className="
            grid
            md:grid-cols-4
            gap-4"
          >

            <button
              onClick={() =>
                navigate(
                  "/dashboard/customers"
                )
              }
              className="
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              text-white
              p-5
              rounded-2xl
              hover:scale-105
              transition-all"
            >
              Add Customer
            </button>

            <button
              onClick={() =>
                navigate(
                  "/dashboard/transactions"
                )
              }
              className="
              bg-gradient-to-r
              from-green-500
              to-emerald-500
              text-white
              p-5
              rounded-2xl
              hover:scale-105
              transition-all"
            >
              Add Transaction
            </button>

            <button
              onClick={() =>
                navigate(
                  "/dashboard/reminder"
                )
              }
              className="
              bg-gradient-to-r
              from-orange-500
              to-red-500
              text-white
              p-5
              rounded-2xl
              hover:scale-105
              transition-all"
            >
              Send Reminder
            </button>

          </div>

        </div>

        {/* Recent Activity */}

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
            Recent Activity
          </h2>

          {recentTransactions.length ===
          0 ? (

            <div
              className="
              p-4
              bg-slate-50
              rounded-xl"
            >
              No Recent Activity
            </div>

          ) : (

            <div
              className="
              space-y-3"
            >

              {recentTransactions.map(
                (
                  transaction
                ) => (

                  <div
                    key={
                      transaction._id
                    }
                    className="
                    p-4
                    bg-slate-50
                    rounded-xl
                    flex
                    justify-between
                    items-center"
                  >

                    <div>

                      <p
                        className="
                        font-semibold"
                      >
                        {
                          transaction
                            .customerId
                            ?.name
                        }
                      </p>

                      <p
                        className="
                        text-sm
                        text-gray-500"
                      >
                        {
                          transaction.note ||
                          "No Note"
                        }
                      </p>

                    </div>

                    <div
                      className={
                        transaction.type ===
                        "credit"
                          ? "text-green-600 font-bold text-lg"
                          : "text-red-500 font-bold text-lg"
                      }
                    >
                      ₹
                      {
                        transaction.amount
                      }
                    </div>

                  </div>
                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;