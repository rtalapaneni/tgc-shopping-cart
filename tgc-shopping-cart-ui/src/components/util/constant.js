import { Link } from "react-router";

export const API_URL = "http://localhost:8080";

export const CUSTOMER_TABLE_COLUMNS = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "customer_id",
    dataIndex: "customer_id",
    key: "customer_id",
  },
  {
    title: "Naae",
    dataIndex: "customer_name",
    key: "customer_name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "home_address",
    key: "home_address",
  },
  {
    title: "Zip",
    dataIndex: "zip_code",
    key: "zip_code",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "View",
    key: "view",
    render: (text, record) => (
      <Link to={`/customers/view/${record.id}`}>View</Link>
    ),
  },
  {
    title: "Edit",
    key: "edit",
    render: (text, record) => (
      <Link to={`/customers/edit/${record.id}`}>Edit</Link>
    ),
  },
  {
    title: "Delete",
    key: "delete",
    render: (text, record) => (
      <Link to={`/customers/delete/${record.id}`}>Delete</Link>
    ),
  },
];



export const ORDER_TABLE_COLUMNS = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Order Id",
    dataIndex: "order_id",
    key: "order_id",
  },
  {
    title: "Customer Id",
    dataIndex: "customer_id",
    key: "customer_id",
  },
  {
    title: "Payment",
    dataIndex: "payment",
    key: "payment",
  },
  {
    title: "Order Date",
    dataIndex: "order_date",
    key: "order_date",
  },
  {
    title: "Delivery Date",
    dataIndex: "delivery_date",
    key: "delivery_date",
  },
  {
    title: "View",
    key: "view",
    render: (text, record) => (
      <Link to={`/orders/view/${record.id}`}>View</Link>
    ),
  },
  {
    title: "Edit",
    key: "edit",
    render: (text, record) => (
      <Link to={`/orders/edit/${record.id}`}>Edit</Link>
    ),
  },
  {
    title: "Delete",
    key: "delete",
    render: (text, record) => (
      <Link to={`/orders/delete/${record.id}`}>Delete</Link>
    ),
  },
];
