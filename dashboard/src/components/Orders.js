import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://quantedge-trading-platform.onrender.com/orders"
      );

      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="orders">

      <h2 style={{ marginBottom: "20px" }}>
        Order History
      </h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
<table className="orders-table">
  <thead>
    <tr>
      <th>Stock</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    {orders.map((order, index) => (
      <tr key={index}>
        <td>{order.name}</td>
        <td>{order.qty}</td>
        <td>₹{order.price}</td>
        <td
          style={{
            color:
              order.mode === "BUY"
                ? "green"
                : "red",
            fontWeight: "bold",
          }}
        >
          {order.mode}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      )}

    </div>
  );
};

export default Orders;