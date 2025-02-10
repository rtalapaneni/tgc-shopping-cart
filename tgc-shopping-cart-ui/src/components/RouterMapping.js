import { Route, Routes } from "react-router";
import Product from "./Product";
import Order from "./Order";
import Sale from "./Sale";
import Customer from "./Customer";
import Home from "./Home";
import NotFound from "./NotFound";
import Protected from "./Protected";
import ProductList from "./ProductList";

const RouterMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} >
                <Route path=":productId/:productName" element={<Product />} />
            </Route>
            <Route path="/orders" element={<Order />} />
            <Route path="/sales" element={<Protected><Sale /></Protected>} />
            <Route path="/customers" element={<Protected><Customer /></Protected>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterMapping;