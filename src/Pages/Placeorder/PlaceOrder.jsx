import React, { useContext, useState } from "react";
import Title from "../../components/Title/Title";
import CartTotal from "../../components/CartTotal/CartTotal";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const { navigate, backendUrl, token, cartItems, setCartitems, getCardAmount, delivery_fee } =
    useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    City: "",
    State: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (let productId in cartItems) {
        for (let size in cartItems[productId]) {
          if (cartItems[productId][size]) {
            orderItems.push({
              productId: productId,
              size: size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCardAmount() + delivery_fee,
        paymentMethod: method,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData, {
            headers: { token },
          });
          if (response.data.success) {
            setCartitems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            {
              ...orderData,
              origin: window.location.origin,
            },
            { headers: { token } }
          );

          if (responseStripe.data.success) {
            window.location.replace(responseStripe.data.success_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
      }
    } catch (error) {
      console.error("❌ Order place error:", error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 py-10 bg-gray-50"
    >
      {/* Left side - Delivery Info */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First Name"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email Address"
          className="w-full mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />

        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          type="text"
          placeholder="Street Address"
          className="w-full mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <input
            required
            onChange={onChangeHandler}
            name="City"
            value={formData.City}
            type="text"
            placeholder="City"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
          <input
            required
            onChange={onChangeHandler}
            name="State"
            value={formData.State}
            type="text"
            placeholder="State"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            placeholder="Zip Code"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          placeholder="Phone Number"
          className="w-full mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Right side - Payment */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <CartTotal />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-4 mt-6">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition transform hover:scale-105 ${
                method === "stripe" ? "border-indigo-500 bg-indigo-50" : ""
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  method === "stripe" ? "bg-indigo-500 border-indigo-500" : "border-gray-400"
                }`}
              ></span>
              <img src={assets.stripe_logo} className="h-6" alt="Stripe" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition transform hover:scale-105 ${
                method === "cod" ? "border-indigo-500 bg-indigo-50" : ""
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  method === "cod" ? "bg-indigo-500 border-indigo-500" : "border-gray-400"
                }`}
              ></span>
              <p className="font-medium">Cash on Delivery</p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transform hover:scale-105 transition duration-300"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
