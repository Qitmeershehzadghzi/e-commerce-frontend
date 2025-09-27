import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title/Title";
import axios from "axios";

function Orders() {
  const { backendUrl, products, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/order/userOrders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItems = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            const productInfo = products.find((p) => p._id === item.productId);

            allOrdersItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
              name: productInfo?.name || "",
              images: productInfo?.images || [],
              price: productInfo?.price || 0,
            });
          });
        });

        setOrderData(allOrdersItems.reverse());
      }
    } catch (error) {
      console.error("❌ loadOrderData error:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token, products]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orderData.length > 0 ? (
          orderData.map((itm, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left: Product Info */}
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-3/4">
                <img
                  src={itm.images[0] || ""}
                  className="w-28 h-28 object-cover rounded-lg shadow-md"
                  alt={itm.name}
                />
                <div className="flex flex-col justify-center space-y-2">
                  <p className="text-lg font-semibold text-gray-900">{itm.name}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <p>
                      Price:{" "}
                      <span className="font-semibold text-gray-800">
                        {currency}{itm.price}
                      </span>
                    </p>
                    <p>Quantity: {itm.quantity}</p>
                    <p>Size: {itm.size}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Date:{" "}
                    <span className="font-medium text-gray-700">
                      {new Date(itm.date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Payment:{" "}
                    <span className="font-medium text-gray-700">
                      {itm.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: Status + Action */}
              <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-1/4">
                <p
                  className={`px-4 py-1 text-sm font-semibold rounded-full ${
                    itm.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : itm.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {itm.status}
                </p>
                <button
                  onClick={loadOrderData}
                  className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-500 transition-all duration-300"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
