import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import PdfButton from "../components/PdfButton";

function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      fetchCustomer();
      fetchTransactions();
    }
  }, [id]);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/customers/customer/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCustomer(response.data.payload);
    } catch (err) {
      console.log("Customer Error:", err);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/transactions/customer-transactions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTransactions(response.data.payload || []);
    } catch (err) {
      console.log("Transaction Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-xl">
        Loading Customer...
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Customer Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Customer Info Card */}
      <div
        className="
        bg-gradient-to-r
        from-emerald-600
        via-green-500
        to-cyan-500
        text-white
        rounded-3xl
        p-8
        shadow-lg"
      >
        <h1 className="text-4xl font-bold">
          {customer.name}
        </h1>

        <p className="mt-3">
          Phone: {customer.phone}
        </p>

        <p>
          Address: {customer.address || "Not Provided"}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">
            Outstanding Balance
          </h2>

          <p className="text-4xl font-bold mt-2">
            ₹{customer.balance}
          </p>
        </div>
      </div>

      {/* PDF Button */}
      <div className="mt-6">
        <PdfButton
          customer={customer}
          transactions={transactions}
        />
      </div>

      {/* Transactions */}
      <div
        className="
        mt-8
        bg-white
        rounded-3xl
        shadow-sm
        p-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          Transaction History
        </h2>

        {transactions.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No Transactions Found
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">

                  <th className="text-left py-4">
                    Date
                  </th>

                  <th className="text-left py-4">
                    Type
                  </th>

                  <th className="text-left py-4">
                    Amount
                  </th>

                  <th className="text-left py-4">
                    Method
                  </th>

                  <th className="text-left py-4">
                    Note
                  </th>

                </tr>
              </thead>

              <tbody>

                {transactions.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="py-4">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="py-4">
                  <span
                    className={`font-semibold px-3 py-1 rounded-full ${
                    item.type === "credit"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.type}
                  </span>
                  </td>
                  <td
                      className={`py-4 font-bold ${
                      item.type === "credit"
                        ? "text-green-600"
                          : "text-red-500"
                          }`}
                          >
                          ₹{item.amount}
                    </td>

                    <td className="py-4">
                      {item.paymentMethod}
                    </td>

                    <td className="py-4">
                      {item.note || "-"}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}
      </div>

    </div>
  );
}

export default CustomerDetails;