import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, ORDER_TABLE_COLUMNS } from "../util/constant";
import { Table } from "antd";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async() => {
    const GetOrders = await axios.get(API_URL + "/orders")
    setOrders(await GetOrders.data);
  }

  return (
    <div className="order">
      <h1>Orders</h1>
      <Table dataSource={orders} columns={ORDER_TABLE_COLUMNS} rowKey="id" />
    </div>
  );
}

export default OrderDetails;