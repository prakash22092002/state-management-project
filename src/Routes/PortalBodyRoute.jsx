import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseFallbackCompo from "../Pages/SuspenseFallbackCompo";

// lazy loading
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Cart = lazy(() => import("../Pages/Cart"));
const Products = lazy(() => import("../Pages/Products"));

const PortalBodyRoute = () => {

    // for the suspence loading state
    const { pathname } = useLocation();
    const routeLocation = pathname === "/" ? "Home" : pathname.slice(1);

    return (
        <Suspense fallback={<SuspenseFallbackCompo routeLocation={routeLocation} />}>
            <Routes>
                {/* for the top level routes */}
                <Route path="">
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </Suspense>

    )
};

export default PortalBodyRoute;