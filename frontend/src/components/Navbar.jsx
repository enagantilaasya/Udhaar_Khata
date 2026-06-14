import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-emerald-600
          to-cyan-500
          bg-clip-text
          text-transparent"
        >
          Udhaar Khata
        </h1>

        <div className="flex gap-6 items-center">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/dashboard/customers">
            Customers
          </Link>

          <Link to="/dashboard/transactions">
            Transactions
          </Link>

          <Link to="/dashboard/reminder">
            Reminder
          </Link>

          <Link to="/dashboard/ranking">
            Ranking
          </Link>

          <Link to="/dashboard/profile">
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;