import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authRegister";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await registerUser(formData.name, formData.email, formData.password);

    // Success → redirect immediately
    navigate("/");

  } catch (err) {
    if (err.response && err.response.data.detail) {
      setError(err.response.data.detail);
    } else {
      setError("Registration failed.");
    }
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-mist-900">
      <div className="w-full max-w-md p-8 bg-mist-800 rounded-2xl shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-zinc-100">
          Register
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 text-sm text-green-600 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-100">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition duration-200 text-zinc-100"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-100">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition duration-200 text-zinc-100"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-100">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition duration-200 text-zinc-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-zinc-100">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-emerald-900 cursor-pointer hover:text-emerald-400 underline "
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;