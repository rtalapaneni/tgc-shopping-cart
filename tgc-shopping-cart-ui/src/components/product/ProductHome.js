import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API_URL } from "../util/constant";
import {Tabs} from "antd"
import ProductTable from "./ProductTable";
import ProductCards from "./ProductCards";


const ProductHome = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
      fetchProducts();
    }, [location]);
  
    const fetchProducts = async () => {
      const GET_PRODUCTS = await fetch(API_URL + "/products/all");
      setProducts(await GET_PRODUCTS.json());
    };

    const productTabs = [
        {
            key: '1',
            label: "Cards",
            children: <ProductCards products={products}/>
        },
        {
            key: '2',
            label: "Table",
            children: <ProductTable products={products}/>
        }
    ];
  
    return (
        <Tabs defaultActiveKey="1" items={productTabs} />
    );

}

export default ProductHome;