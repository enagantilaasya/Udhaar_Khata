import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Register() {
  const navigate = useNavigate();

  const { register } = useAuthStore();

  const [form, setForm] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(form);

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Shop Name"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                shopName: e.target.value,
              })
            }
          />

          <input
            placeholder="Owner Name"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                ownerName: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button
            className="w-full bg-green-600 text-white p-3 rounded-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-green-600 ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;