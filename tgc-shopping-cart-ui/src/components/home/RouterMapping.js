import { Route, Routes } from "react-router";
import Product from "../product/Product";
import Order from "../order/Order";
import Sale from "../sale/Sale";
import CustomerDetails from "../customer/CustomerDetails";
import Home from "./Home";
import NotFound from "./NotFound";
import Protected from "../security/Protected";
import ProductList from "../product/ProductList";
import CustomerForm from "../customer/CustomerForm";

const RouterMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} >
                <Route path=":productId/:productName" element={<Product />} />
            </Route>
            <Route path="/orders" element={<Order />} />
            <Route path="/sales" element={<Protected><Sale /></Protected>} />
            <Route path="/customers" element={<Protected><CustomerDetails /></Protected>} />
            <Route path="/customers/:action/:id?" element={<CustomerForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterMapping;