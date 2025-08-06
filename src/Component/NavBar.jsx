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
        <nav className="py-4 px-8 flex justify-between bg-white shadow">
            <div className="logo"></div>
            <div className="flex gap-10">
                {navRoutes.map(({ name, route }, idx) => (
                    <NavLink
                        key={idx}
                        to={route}
                        className={({ isActive }) =>
                            ` ${isActive ? "text-red-500" : "text-gray-500"}`
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
