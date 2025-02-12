import { Table } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { API_URL, PRODUCT_TABLE_COLUMNS } from "../util/constant";

const ProductList = () => {
  const [products, setProducts] = useState([]);

    

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch(API_URL + "/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }

    return (
        <div className="product-list">
            <h2>Products</h2>
            <button onClick={fetchProducts}>Fetch Products</button>
            <Table dataSource={products} columns={PRODUCT_TABLE_COLUMNS} rowKey="product_ID" />
        </div>
    );
};

export default ProductList;