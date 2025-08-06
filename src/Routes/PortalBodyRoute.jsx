import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseFallbackCompo from "../Pages/SuspenseFallbackCompo";

// lazy loading
const Home = lazy(() => import("../Pages/Home"));
const Dashboard = lazy(() => import("../Pages/Dashboard"))
const Products = lazy(() => import("../Pages/Products"));
const Orders = lazy(() => import("../Pages/Orders"))
const Customers = lazy(() => import("../Pages/Customers"))
const About = lazy(() => import("../Pages/About"));

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
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Suspense>

    )
};

export default PortalBodyRoute;