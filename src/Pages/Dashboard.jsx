import DashboardPageImage from "../assets/images/DashboardPageImage";

const Dashboard = () => {
    return (
        <section className="section-product py-12 px-4">
            <div className="flex justify-center items-center flex-col space-y-6">
                {/* Responsive Image */}
                <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
                    <DashboardPageImage className="w-full h-auto object-contain" />
                </div>

                {/* Coming Soon Message */}
                <h2 className="text-xl md:text-2xl font-semibold text-gray-400 text-center">
                    Dashboard Section Coming Soon!
                </h2>
            </div>
        </section>
    );
};

export default Dashboard;
