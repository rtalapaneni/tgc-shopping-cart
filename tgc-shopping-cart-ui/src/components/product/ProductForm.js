import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../util/constant";
import { Button, Form } from "antd";

const ProductForm = () => {
  const { action, id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    product_ID: "",
    product_type: "",
    product_name: "",
    size: "",
    colour: "",
    price: "",
    quantity: "",
    description: "",
  });
  const navigate = useNavigate();

  const isReadOnly = !(action === "add" || action === "edit");
  const isDisplayButton = action === "add" || action === "edit" || action === "delete";


  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  },[id]);

  const fetchProduct = async () => {
    const GetProduct = await axios.get(`${API_URL}/products/${id}`);
    setProduct(await GetProduct.data);
    console.log("product", product);
  };

  const addProduct = (product) => {
    axios
      .post(`${API_URL}/products`, product)
      .then(() => navigate("/products"));
  };

  const updateProduct = (product) => {
    axios
      .put(`${API_URL}/products/${product.id}`, product)
      .then(() => navigate("/products"));
  };

  const deleteProduct = (product) => {
    axios
      .delete(`${API_URL}/products/${product.id}`)
      .then(() => navigate("/products"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const onFinish = () => {
    
    if (action === "add") {
      addProduct(product);
    } else if (action === "edit") {
      updateProduct(product);
    } else if (action === "delete") {
      deleteProduct(product);
    }
  };

  return (
    <div className="product">
      <h1>Product Form</h1>
      <br />
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={product}
          onFinish={onFinish}
        >
          <Form.Item label="Id">
            <input
              name="id"
              value={product?.id?? ""}
              onChange={handleInputChange}
              disabled={true}
            />
          </Form.Item>
          <Form.Item label="Product ID">
            <input
              name="product_ID"
              value={product?.product_ID?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Type">
            <input
              name="product_type"
              value={product?.product_type?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Name">
            <input
              name="product_name"
              value={product?.product_name?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Size">
            <input
              name="size"
              value={product?.size?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Color">
            <input
              name="colour"
              value={product?.colour?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Price">
            <input
              name="price"
              value={product?.price?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Quantity">
            <input
              name="quantity"
              value={product?.quantity?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Description">
            <input
              name="description"
              value={product?.description?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
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
    </div>
  );
};

export default ProductForm;
