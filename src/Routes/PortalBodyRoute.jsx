import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseFallbackCompo from "../Pages/SuspenseFallbackCompo";

// lazy loading
const Home = lazy(() => import("../Pages/Home"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Products = lazy(() => import("../Pages/Products"));
const Orders = lazy(() => import("../Pages/Orders"));
const Customers = lazy(() => import("../Pages/Customers"));
const About = lazy(() => import("../Pages/About"));

// lazy loading sub routes
const ProductDetails = lazy(() => import("../Pages/ProductDetail"));
const OrderDetails = lazy(() => import("../Pages/OrderDetails"))
const CustomerDetails = lazy(() => import("../Pages/CustomerDetails"))

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

                    {/* products route */}
                    <Route path="/products">
                        <Route index element={<Products />} />
                        <Route path=":id" element={<ProductDetails />} />
                    </Route>

                    {/* orders route */}
                    <Route path="/orders">
                        <Route index element={<Orders />} />
                        <Route path=":id" element={<OrderDetails />} />
                    </Route>

                    {/* customers route */}
                    <Route path="/customers">
                        <Route index element={<Customers />} />
                        <Route path=":id" element={<CustomerDetails />} />
                    </Route>

                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Suspense>

    )
};

export default PortalBodyRoute;