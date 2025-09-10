import React, { useContext, useEffect, useState } from "react";
import "./register.css";
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
        navigate("/login");   // ✅ direct login page pe bhej do
      } else {
        toast.error(response.data.msg || "User already exists");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-1">
      <div className="div-1">
        <p className="p-1">Sign Up</p>
        <hr />
      </div>

      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
        className="input-1"
        required
      />

      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        className="input-2"
        required
      />

      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="Password"
        placeholder="Password"
        className="input-3"
        required
      />

      <button className="bt-3" type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
