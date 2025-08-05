import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy loading
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Cart = lazy(() => import("../Pages/Cart"));
const Products = lazy(() => import("../Pages/Products"));

const PortalBodyRoute = () => {
    return (
        <Routes>
            {/* for the top level routes */}
            <Route path="">
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    )
};

export default PortalBodyRoute;