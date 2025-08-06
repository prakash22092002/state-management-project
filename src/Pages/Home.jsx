import HomeFeatureFlow from "../Component/HomeComponent/HomeFeatureFlow";
import HomeWelcomeSection from "../Component/HomeComponent/HomeWelcomeSection";
import HomeFeatureOverviewSection from "../Component/HomeComponent/HomeFeatureOverviewSection";

const Home = () => {
    return (
        <main className="home-page min-h-screen bg-white">

            {/* Welcome section */}
            <HomeWelcomeSection />

            {/* section for short intro */}
            <section className="section-2 py-16 flex items-center justify-center">
                <p className="text-center text-xl text-gray-400 font-medium max-w-3xl px-4">
                    See the story <span className="text-red-500">behind your sales.</span>
                </p>
            </section>

            {/* section 3 */}
            <HomeFeatureFlow />

            {/* section 4 */}
            <HomeFeatureOverviewSection />

        </main>
    );
};

export default Home;