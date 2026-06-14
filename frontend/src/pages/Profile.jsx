import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function Profile() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            "https://udhaar-khata-qedh.onrender.com/analytics/dashboard",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setData(
          response.data.payload
        );

      } catch (err) {

        console.log(err);

      }
    };

  if (!data) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

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
        from-emerald-600
        via-green-500
        to-cyan-500
        rounded-3xl
        p-10
        text-white
        shadow-lg"
      >

        <h1
          className="
          text-4xl
          font-bold"
        >
          Profile
        </h1>

        <p className="mt-2">
          Shop Owner Information
        </p>

      </div>

      <div
        className="
        mt-8
        grid
        md:grid-cols-2
        gap-6"
      >

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500">
            Shop Name
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {data.user.shopName}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500">
            Owner Name
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {data.user.ownerName}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500">
            Email
          </p>

          <h2 className="text-xl font-semibold mt-2">
            {data.user.email}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-gray-500">
            Phone
          </p>

          <h2 className="text-xl font-semibold mt-2">
            {data.user.phone}
          </h2>
        </div>

      </div>

      <div
        className="
        mt-8
        bg-white
        rounded-3xl
        p-8
        shadow-sm"
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6"
        >
          Account Summary
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6"
        >

          <div
            className="
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            text-white
            p-5
            rounded-2xl"
          >
            <p>Total Customers</p>

            <h3 className="text-4xl font-bold mt-2">
              {data.totalCustomers}
            </h3>
          </div>

          <div
            className="
            bg-gradient-to-r
            from-green-500
            to-emerald-500
            text-white
            p-5
            rounded-2xl"
          >
            <p>Total Transactions</p>

            <h3 className="text-4xl font-bold mt-2">
              {data.totalTransactions}
            </h3>
          </div>

          <div
            className="
            bg-gradient-to-r
            from-red-500
            to-orange-500
            text-white
            p-5
            rounded-2xl"
          >
            <p>Pending Amount</p>

            <h3 className="text-4xl font-bold mt-2">
              ₹{data.totalPendingAmount}
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;