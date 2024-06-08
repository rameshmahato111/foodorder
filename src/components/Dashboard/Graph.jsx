// OrderDashboard.js
import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from "recharts";
import "./OrderDashboard.css";

// Sample data for orders
const orders = [
  { id: 1, customer: "John Doe", product: "MOMO", quantity: 3, price: 30, status: "Delivered" },
  { id: 2, customer: "Jane Smith", product: "Chowmin", quantity: 1, price: 15, status: "Pending" },
  { id: 3, customer: "Sam Brown", product: "Burger", quantity: 4, price: 20, status: "Delivered" },
  { id: 4, customer: "Anna Johnson", product: "Pizza", quantity: 2, price: 50, status: "Cancelled" },
  { id: 5, customer: "Mike Wilson", product: "Salad", quantity: 1, price: 80, status: "Delivered" },
];

// Sample data for charts
const orderData = [
  { name: "Delivered", value: 3 },
  { name: "Pending", value: 1 },
  { name: "Cancelled", value: 1 },
];

const revenueData = [
  { name: "MOMO", revenue: 90 },
  { name: "Chowmin", revenue: 15 },
  { name: "Burger", revenue: 80 },
  { name: "Pizza", revenue: 100 },
  { name: "Salad", revenue: 80 },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const OrderDashboard = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      (filter === "" || order.status === filter) &&
      (search === "" || order.id.toString().includes(search) || order.customer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="order-dashboard">
      <h1>Order Dashboard</h1>
      <div className="filter-search">
        <select onChange={handleFilterChange}>
          <option value="">All Statuses</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Search by Order ID or Customer"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <OrderList orders={filteredOrders} />
      <OrderSummary />
    </div>
  );
};

const OrderList = ({ orders }) => {
  return (
    <table className="order-list">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>${order.price}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="charts">
        <div className="chart">
          <h3>Order Counts by Status</h3>
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              data={orderData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {orderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="chart">
          <h3>Revenue by Product</h3>
          <BarChart width={600} height={300} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#82ca9d">
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
