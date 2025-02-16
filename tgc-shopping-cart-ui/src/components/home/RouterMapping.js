import { Route, Routes } from "react-router";
import ProductForm from "../product/ProductForm";
import OrderDetails from "../order/OrderDetails";
import Sale from "../sale/Sale";
import CustomerDetails from "../customer/CustomerDetails";
import Home from "./Home";
import NotFound from "./NotFound";
import Protected from "../security/Protected";
import CustomerForm from "../customer/CustomerForm";
import ProductHome from "../product/ProductHome";

const RouterMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductHome />} />
            <Route path="/products/:action/:id?" element={<ProductForm />} />
            <Route path="/orders" element={<OrderDetails />} />
            <Route path="/sales" element={<Protected><Sale /></Protected>} />
            <Route path="/customers" element={<Protected><CustomerDetails /></Protected>} />
            <Route path="/customers/:action/:id?" element={<CustomerForm />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterMapping;