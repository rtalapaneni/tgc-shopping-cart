import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../util/constant";
import { Button, Form } from "antd";

const ProductForm = () => {
  const { action, id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    model: "",
    description: "",
    price: "",
    imageUrl: "",
    isActive: ""
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
    const GetProduct = await axios.get(`${API_URL}/products?productId=${id}`);
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
      .put(`${API_URL}/products`, product)
      .then(() => navigate("/products"));
  };

  const deleteProduct = (product) => {
    axios
      .delete(`${API_URL}/products?productId=${product.id}`)
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
          <Form.Item label="Name">
            <input
              name="name"
              value={product?.name?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Brand">
            <input
              name="brand"
              value={product?.brand?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Model">
            <input
              name="model"
              value={product?.model?? ""}
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
          <Form.Item label="Price">
            <input
              name="price"
              value={product?.price?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Image URL">
            <input
              name="imageUrl"
              value={product?.imageUrl?? ""}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
          </Form.Item>
          <Form.Item label="Is Active?">
            <input
              name="isActive"
              value={product?.isActive?? ""}
              onChange={handleInputChange}
              disabled={true}
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
