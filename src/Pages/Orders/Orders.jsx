// import React, { useContext, useState, useEffect } from 'react'
// import { ShopContext } from '../../context/ShopContext'
// import Title from '../../components/Title/Title'
// import './Order.css';
// import axios from 'axios';

// function Orders() {
//   const { backendUrl,products, token, currency } = useContext(ShopContext)
//   const [orderData, setorderData] = useState([])

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }

//       const response = await axios.post(
//         backendUrl + "/order/userOrders",
//         {},
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         let allOrdersItems = [];
//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             item["images"] = order.images;
//             item["name"] = order.name;
//             item["price"] = order.amount;
//             allOrdersItems.push(item);
//           });
//         });
//         setorderData(allOrdersItems.reverse());
//       }
//     } catch (error) {
//       console.error("❌ loadOrderData error:", error);
//     }
//   };
//   console.log(orderData);
  

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='div-1'>
//       <div className='div-2'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>
//       <div className='div-3'>
//         {orderData && orderData.length > 0 ? (
//           orderData.map((itm, index) => {
//             return (
//               <div key={index} className='div-4'>
//                 <div className='div-5'>
//                   <img
//                     src={
//                       itm.images
//                         ? itm.images[1]
//                         : ""
//                     }
//                     className='iimg'
//                     alt={itm.name}
//                   />
//                   <div className='div-6'>
//                     <p className='p-1'>{itm.name}</p>
//                     <div className='div-7'>
//                       <p className='p-2'>{currency}{itm.price}</p>
//                       <p className='p-3'>Quantity: {itm.quantity}</p>
//                       <p className='p-4'>Size: {itm.size}</p>
//                     </div>
//                     <p className='p-5'>Date:<span className='span-1'> {new Date(itm.date).toLocaleDateString()}</span></p>
//                     <p className='p-5'>Payment:<span className='span-1'> {itm.paymentMethod}</span></p>
//                   </div>
//                 </div>
//                 <div className='div-8'>
//                   <div>
//                     <p className='p-6'></p>
//                     <p className='p-7'>{itm.status}</p>
//                   </div>
//                   <button className='buuttt'>Track order</button>
//                 </div>
//               </div>
//             )
//           })
//         ) : (
//           <p>No orders found</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Orders





import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title/Title";
import "./Order.css";
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
            // productId ke zarye product details nikal liye
            const productInfo = products.find((p) => p._id === item.productId);

            // productInfo mila to usse name, images, price liye
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
console.log(orderData);

  useEffect(() => {
    loadOrderData();
  }, [token, products]); // jab token ya products change honge tab reload

  return (
    <div className="div-1">
      <div className="div-2">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="div-3">
        {orderData.length > 0 ? (
          orderData.map((itm, index) => (
            <div key={index} className="div-4">
              <div className="div-5">
                <img
                  src={itm.images[0] || ""}
                  className="iimg"
                  alt={itm.name}
                />
                <div className="div-6">
                  <p className="p-1">{itm.name}</p>
                  <div className="div-7">
                    <p className="p-2">
                      {currency}
                      {itm.price}
                    </p>
                    <p className="p-3">Quantity: {itm.quantity}</p>
                    <p className="p-4">Size: {itm.size}</p>
                  </div>
                  <p className="p-5">
                    Date:
                    <span className="span-1">
                      {" "}
                      {new Date(itm.date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="p-5">
                    Payment:
                    <span className="span-1"> {itm.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="div-8">
                <div>
                  <p className="p-6"></p>
                  <p className="p-7">{itm.status}</p>
                </div>
                <button className="buuttt">Track order</button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
