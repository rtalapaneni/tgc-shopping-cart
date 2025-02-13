import { Route, Routes } from "react-router";
import ProductForm from "../product/ProductForm";
import OrderDetails from "../order/OrderDetails";
import Sale from "../sale/Sale";
import CustomerDetails from "../customer/CustomerDetails";
import Home from "./Home";
import NotFound from "./NotFound";
import Protected from "../security/Protected";
import ProductDetails from "../product/ProductDetails";
import CustomerForm from "../customer/CustomerForm";

const RouterMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductDetails />} >
                <Route path=":action/:id?" element={<ProductForm />} />
            </Route>
            <Route path="/orders" element={<OrderDetails />} />
            <Route path="/sales" element={<Protected><Sale /></Protected>} />
            <Route path="/customers" element={<Protected><CustomerDetails /></Protected>} />
            <Route path="/customers/:action/:id?" element={<CustomerForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterMapping;