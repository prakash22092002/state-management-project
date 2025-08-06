const HomeFeatureFlow = () => {
    const features = [
        "Track Orders",
        "Manage Customers",
        "Analyze Product Demand",
        "Get Dashboard Insights",
    ];

    return (
        <section className="w-[95vw] max-w-6xl mx-auto py-20 relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2 z-0" />

            <div className="flex flex-col gap-20 relative z-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Spacer for alignment */}
                        <div className="hidden md:block md:w-1/2" />

                        {/* Connector circle */}
                        <div className="w-6 h-6 bg-white border-4 border-red-400 rounded-full z-20 mx-4 md:mx-0" />

                        {/* Feature Box */}
                        <div className="bg-white shadow-xl rounded-lg p-6 md:w-1/2 w-[90%] text-center md:text-left">
                            <p className="text-xl font-semibold text-gray-800">{feature}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeFeatureFlow;
