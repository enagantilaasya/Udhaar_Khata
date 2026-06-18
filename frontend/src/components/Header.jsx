import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-emerald-600
          to-cyan-500
          bg-clip-text
          text-transparent"
        >
          Udhaar Khata
        </Link>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="
            px-5
            py-2
            rounded-xl
            text-white
            bg-gradient-to-r
            from-emerald-600
            to-cyan-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
            px-5
            py-2
            rounded-xl
            text-white
            bg-gradient-to-r
            from-emerald-600
            to-cyan-500"
          >
            Register
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;