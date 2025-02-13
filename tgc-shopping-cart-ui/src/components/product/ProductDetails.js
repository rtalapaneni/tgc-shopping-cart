import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { API_URL } from "../util/constant";
import ProductTable from "./ProductTable";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchProducts();
  }, [location]);

  const fetchProducts = async () => {
    const GET_PRODUCTS = await fetch(API_URL + "/products");
    setProducts(await GET_PRODUCTS.json());
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ProductTable products={products} />
      <Outlet />
    </div>
  );
};

export default ProductDetails;
