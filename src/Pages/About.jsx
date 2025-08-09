export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow px-8 py-8 space-y-12">

                {/* Heading */}
                <div>
                    <h1 className="text-xl font-bold text-red-500 mb-2">
                        About Our Portal Dashboard
                    </h1>
                    <p className="text-sm text-gray-500">
                        A professional, intuitive dashboard for managing customers, orders, and products — offering clarity, insight, and efficiency in one streamlined interface.
                    </p>
                </div>

                {/* Project Overview */}
                <section className="bg-white rounded-lg shadow p-6 space-y-3">
                    <h2 className="text-lg font-semibold text-gray-700">Project Overview</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Designed as a central command center for your business, the Portal Dashboard empowers you to monitor customer engagement, manage orders effectively, and oversee product data at scale. Dynamic graphs, including customer-order ratio insights, allow you to make data-driven decisions with clarity and precision.
                    </p>
                </section>

                {/* Features */}
                <section className="space-y-5">
                    <h2 className="text-lg font-semibold text-gray-700">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { title: "Customer Management", desc: "Manage client profiles with ease, all in one central location." },
                            { title: "Order Tracking", desc: "Track orders in real time, filtered and linked to customers." },
                            { title: "Product Overview", desc: "View and edit your product catalog with rich detail." },
                            { title: "Data Insights", desc: "Visualize customer-to-order trends via interactive graphs." }
                        ].map(({ title, desc }) => (
                            <div key={title} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                                <h3 className="text-base font-medium text-gray-700 mb-1">{title}</h3>
                                <p className="text-sm text-gray-500">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-red-50 rounded-lg shadow p-6 space-y-3">
                    <h2 className="text-lg font-semibold text-red-500">Our Vision</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        We believe every organization deserves easy access to meaningful insights. The Portal Dashboard is crafted to deliver that visibility — helping businesses focus on growth, improvement, and customer satisfaction with clarity and confidence.
                    </p>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-200">
                <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Quick Links</h4>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li><a href="/" className="hover:text-red-500">Home</a></li>
                            <li><a href="/about" className="hover:text-red-500">About</a></li>
                            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                            <li><a href="/faq" className="hover:text-red-500">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Help & Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Help & Support</h4>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li>Email: <a href="mailto:support@portal.com" className="text-red-500 hover:underline">support@portal.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="text-red-500 hover:underline">+1 (234) 567-890</a></li>
                            <li>WhatsApp: <a href="https://wa.me/1234567890" className="text-red-500 hover:underline">Chat Us</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/prakash-paudel-226501251/" className="text-red-500 hover:underline">Our Profile</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Legal</h4>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li><a href="/terms" className="hover:text-red-500">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:text-red-500">Privacy Policy</a></li>
                            <li><a href="/cookies" className="hover:text-red-500">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 py-4">
                    <p className="text-center text-xs text-gray-400">
                        © {new Date().getFullYear()} Portal Dashboard. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
