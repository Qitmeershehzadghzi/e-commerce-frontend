import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const { navigate, backendUrl } = useContext(ShopContext);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/user/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Signup successful! Please login.");
        navigate("/login");
      } else {
        toast.error(response.data.msg || "User already exists");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 
                   transition-transform transform hover:scale-[1.01]"
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide animate-fadeIn">
            Sign Up
          </h2>
          <p className="text-gray-500 text-sm mt-2">Create your account</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Name */}
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none
                     transition-all duration-300 placeholder-gray-400"
          required
        />

        {/* Email */}
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none
                     transition-all duration-300 placeholder-gray-400"
          required
        />

        {/* Password */}
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-xl 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none
                     transition-all duration-300 placeholder-gray-400"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl 
                     font-semibold text-lg shadow-md hover:bg-indigo-700 
                     hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p
          onClick={() => navigate("/login")}
          className="text-center text-sm text-indigo-600 mt-6 cursor-pointer hover:underline transition-all duration-200"
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default Signup;
