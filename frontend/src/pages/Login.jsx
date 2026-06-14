import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await login(form);

    console.log(
      "Login Success:",
      response
    );

    // Success Message Here

    navigate("/dashboard");

  } catch (err) {

    console.log(
      "Backend Error:",
      err.response?.data
    );

    // Error Message Here

  }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?

          <Link
            to="/register"
            className="text-green-600 ml-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;