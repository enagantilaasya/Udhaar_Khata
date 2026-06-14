import { Link } from "react-router-dom";

function CustomerCard({
  customer,
  onDelete,
}) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${
        customer.balance >= 0
          ? "border-green-500"
          : "border-red-500"
      }`}
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
        text-slate-500
        mt-2"
      >
        {customer.phone}
      </p>

      <p
        className="
        text-slate-500"
      >
        {customer.address || "No Address"}
      </p>

      <div className="mt-5">

        <p
          className="
          text-sm
          text-slate-500"
        >
          Outstanding Balance
        </p>

        <h3
          className={`text-3xl font-bold ${
            customer.balance >= 0
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          ₹{customer.balance}
        </h3>

      </div>

      <div
        className="
        flex
        gap-3
        mt-6"
      >

        <Link
          to={`/dashboard/customer/${customer._id}`}
          className="
          flex-1
          text-center
          bg-gradient-to-r
          from-emerald-600
          to-cyan-500
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:scale-105
          transition-all"
        >
          Details
        </Link>

        <button
          onClick={() =>
            onDelete(customer._id)
          }
          className="
          flex-1
          bg-red-500
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-red-600
          transition-all"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default CustomerCard;