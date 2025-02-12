import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../util/constant";

const CustomerForm = () => {
  const { action, id } = useParams();

  const [customer, setCustomer] = useState({
    customer_id: "",
    customer_name: "",
    gender: "",
    age: "",
    home_address: "",
    zip_code: "",
  });

  const navigate = useNavigate();

  const addCuustomer = (customer) => {
    fetch(API_URL + "/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(() => navigate("/customers"));
  };

  const fetchCustomer = () => {
    fetch(API_URL + "/customers/" + id)
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  };

  const updateCustomer = (customer) => {
    fetch(API_URL + "/customers/" + customer.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(() => navigate("/customers"));
  };

  const deleteCustomer = (customer) => {
    fetch(API_URL + "/customers/" + customer.id, {
      method: "DELETE",
    }).then(() => navigate("/customers"));
  };

  useEffect(() => {
    if (id) {
      fetchCustomer();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const isReadOnly = !(action === "add" || action === "edit");
  const isDisplayButton = action === "add" || action === "edit" || action === "delete";

  const onFinish = () => {
    if (action === "add") {
      addCuustomer(customer);
    } else if (action === "edit") {
      console.log("edit values", customer);
      updateCustomer(customer);
    } else if (action === "delete") {
      deleteCustomer(customer);
    }
  };

  return (
    <div style={{ alignContent: "center" }}>
      <h1>Customer Form</h1>

      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={customer}
        onFinish={onFinish}
      >
        <Form.Item label="Id">
          <Input
            name="id"
            placeholder="Id"
            value={customer?.id ?? ""}
            disabled={true}
          />
        </Form.Item>
        <Form.Item label="Customer Id">
          <Input
            name="customer_id"
            placeholder="Customer Id"
            value={customer?.customer_id ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Customer Name">
          <Input
            name="customer_name"
            placeholder="Customer Name"
            value={customer?.customer_name ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Input
            name="gender"
            placeholder="Gender"
            value={customer?.gender ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Age">
          <Input
            name="age"
            placeholder="Age"
            value={customer?.age ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Home Address">
          <Input
            name="home_address"
            placeholder="Home Address"
            value={customer?.home_address ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Zip Code">
          <Input
            name="zip_code"
            placeholder="Zip Code"
            value={customer?.zip_code ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input
            name="city"
            placeholder="City"
            value={customer?.city ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="State">
          <Input
            name="state"
            placeholder="State"
            value={customer?.state ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            name="country"
            placeholder="Country"
            value={customer?.country ?? ""}
            disabled={isReadOnly}
            onChange={handleInputChange}
          />
        </Form.Item>
        {isDisplayButton && (
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              {action === "add" ? "Add" : action === "edit" ? "Update" : action === "delete" ? "Delete" : "Submit"}
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default CustomerForm;
