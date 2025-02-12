import { Button, Form, Table } from "antd";
import { use, useEffect, useState } from "react";

import { API_URL, CUSTOMER_TABLE_COLUMNS } from "../util/constant";
import CustomerTable from "./CustomerTable";
import CustomerForm from "./CustomerForm";
import { Outlet } from "react-router";

const CustomerDetails = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch(API_URL + "/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  };

  return (
    <div className="customer-list">
      <h2>Customers</h2>
      <CustomerTable customers={customers} />
      <Outlet />
    </div>
  );
};

export default CustomerDetails;
