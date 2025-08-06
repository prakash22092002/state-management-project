const HomeFeatureOverviewSection = () => {
    const sections = [
        {
            title: "Orders",
            description:
                "Track every order placed by your customers. View total orders, order history, and order frequency in a clean tabular format.",
        },
        {
            title: "Customers",
            description:
                "Manage customer details efficiently. See which customer placed how many orders and how frequently they return.",
        },
        {
            title: "Products",
            description:
                "Keep an eye on all the products available in the system. View product info and availability in real time.",
        },
        {
            title: "Dashboard",
            description:
                "Get a unified view of all your key metrics: total orders, customer engagement, and product performance — all in one place.",
        },
    ];

    return (
        <section className="w-[95vw] max-w-6xl mx-auto py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Inside the Dashboard</h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    A closer look at what each section of your platform offers — simplified, centralized, and powerful.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {sections.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-semibold text-red-500 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-base">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeFeatureOverviewSection;
