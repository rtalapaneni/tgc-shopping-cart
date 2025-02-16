import { Link } from "react-router";

export const PRODUCT_TABLE_COLUMNS = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <Link to={`/products/view/${record.id}`}>View</Link>
      ),
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <Link to={`/products/edit/${record.id}`}>Edit</Link>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <Link to={`/products/delete/${record.id}`}>Delete</Link>
      ),
    },
  ];