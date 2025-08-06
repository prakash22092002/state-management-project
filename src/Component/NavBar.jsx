import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navRoutes = [
        { name: "Home", route: "/" },
        { name: "Dashboard", route: "/dashboard" },
        { name: "Products", route: "/products" },
        { name: "Orders", route: "/orders" },
        { name: "Customers", route: "/customers" },
        { name: "About", route: "/about" },
    ];

    return (
        <nav className="py-4 px-4 sm:px-8 bg-white bg-white/30 backdrop-blur-md shadow-none">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                {/* Logo or Brand */}
                <div className="text-xl ">
                    Portal <span className=" text-red-500">Dashboard</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap gap-4 sm:gap-8">
                    {navRoutes.map(({ name, route }, idx) => (
                        <NavLink
                            key={idx}
                            to={route}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-200 ${isActive ? "text-red-500" : "text-gray-400 hover:text-red-300"
                                }`
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
