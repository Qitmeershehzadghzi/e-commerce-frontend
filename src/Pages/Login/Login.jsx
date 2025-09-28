import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { navigate, token, settoken, backendUrl } = useContext(ShopContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });

      if (response.data.success) {
        const receivedToken = response.data.token || response.data.Token;
        settoken(receivedToken);
        localStorage.setItem("token", receivedToken);
      } else {
        toast.error(response.data.message || response.data.msg);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
            Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details.
          </p>
          <hr className="mt-4 border-gray-200" />
        </div>

        {/* Email Input */}
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          required
        />

        {/* Password Input */}
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          required
        />

        {/* Forgot Password + Signup */}
        <div className="flex justify-between items-center text-sm text-indigo-600 mb-6">
          <p className="cursor-pointer hover:underline">Forgot your password?</p>
          <p
            onClick={() => navigate("/signup")}
            className="cursor-pointer hover:underline"
          >
            Create new account
          </p>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-500 font-semibold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
