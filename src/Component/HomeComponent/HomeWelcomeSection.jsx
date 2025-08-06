import DashboardImage from "../../assets/images/DashboardImage"

const HomeWelcomeSection = () => {
    return (
        <section className="section-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[95vw] max-w-7xl mx-auto py-20">
            {/* Left part */}
            <div className="flex justify-start items-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to Portal <span className="text-red-500">Dashboard</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        A simple and elegant place to explore products, track your orders, and manage everything in one dashboard.
                    </p>
                </div>
            </div>

            {/* Right part (Image/Illustration placeholder) */}
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                    <DashboardImage className="w-full h-auto object-contain" />
                </div>
            </div>
        </section>
    )
};

export default HomeWelcomeSection;
