import React from "react";
import { useLocation } from "react-router-dom"; // endpoint path
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import customersQuery from "@/Queries/customersQuery";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

const salesData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 50 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 60 },
];

// Example pie chart data - order status distribution
const pieData = [
    { name: "Completed", value: 40 },
    { name: "Pending", value: 15 },
    { name: "Cancelled", value: 10 },
    { name: "Returned", value: 5 },
];

const COLORS = ["#4f46e5", "#3b82f6", "#10b981", "#ef4444"];

const CustomerDetails = () => {
    const { pathname } = useLocation();
    const splitPathName = pathname.split("/");
    const customerId = splitPathName[2];

    // Assuming customersQuery internally uses customerId or fetches data accordingly
    // If your customersQuery needs customerId as param, modify accordingly
    const { customerData, isLoading } = customersQuery(customerId);

    if (isLoading) {
        return <div className="text-center p-4 text-gray-400">Loading customer data...</div>;
    }

    if (!customerData) {
        return <div className="text-center p-4 text-gray-400 mt-5">No customer data found.</div>;
    }

    return (
        <section className="max-w-3xl mx-auto p-4 space-y-6">

            {/* first section */}
            <section className="mt-10">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {customerData.first_name} {customerData.last_name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-1 text-gray-700">
                            <li>
                                <strong>Email:</strong> {customerData.email}
                            </li>
                            <li>
                                <strong>Location:</strong> {customerData.location}
                            </li>
                            <li>
                                <strong>Phone:</strong> {customerData.phone}
                            </li>
                            <li>
                                <strong>Member Since:</strong>{" "}
                                {customerData.created_at
                                    ? new Date(customerData.created_at).toLocaleDateString()
                                    : ""}
                            </li>
                            <li>
                                <strong>Total Orders:</strong>{" "}
                                {(customerData.total_orders ?? []).length} orders
                            </li>
                        </ul>
                        {/* Orders List */}
                        <div className="mt-4">
                            <strong>Orders:</strong>
                            <ul className="list-disc list-inside">
                                {(customerData.total_orders ?? []).map((order, idx) => (
                                    <li key={idx}>Order #{order}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* second */}
            <section>

            </section>


            {/* Sales Chart Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Sales Over Time</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#4f46e5"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Pie Chart Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Order Status Distribution</CardTitle>
                </CardHeader>
                <CardContent className="h-[20em]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={16} />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </section>
    );
};

export default CustomerDetails;
