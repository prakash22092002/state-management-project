import { useState } from "react";
import { createNewCustomer } from "../../utils/api";
import { currentDate } from "../../utils/helper";
import customersQuery from "../../Queries/customersQuery";
import { editPartucularCustomer } from "../../utils/api";

const CreateCustomerModal = ({ setDisplayCreateCustomerModal, refetchCustomersData, editCustomer }) => {

    const [formData, setFormData] = useState({
        first_name: editCustomer?.first_name ?? "",
        last_name: editCustomer?.last_name ?? "",
        email: editCustomer?.email ?? "",
        city: editCustomer?.location?.split(', ')[0] ?? "",
        stateCode: editCustomer?.location?.split(', ')[1] ?? "",
        phone: editCustomer?.phone ?? "",
        created_at: editCustomer?.created_at ?? "",
        total_orders: editCustomer?.total_orders ?? []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { city, stateCode, ...updatedData } = formData

        const payload = {
            ...updatedData,
            location: `${city.charAt(0).toUpperCase() + city.slice(1)}, ${stateCode.toUpperCase()}`,
            created_at: currentDate(),
            total_orders: [],
        }

        // Call parent handler or API

        // here we are checking conditionally if the data for the edit customer present then edit else create
        if (editCustomer?.id === undefined) {
            await createNewCustomer(payload)
        }
        else {
            await editPartucularCustomer(editCustomer?.id, payload)
        }
        await refetchCustomersData()

        // Close modal after create
        setDisplayCreateCustomerModal(false);
    };

    return (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 animate-fadeIn">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {editCustomer?.id ? "Edit Customer" : "Create New Customer"}
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name */}
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        autoComplete="given-name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    {/* Last Name */}
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        autoComplete="family-name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autoComplete="email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    {/* Location */}
                    <div className="flex gap-3">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Location City"
                            className="flex-[9] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />

                        <input
                            type="text"
                            name="stateCode"
                            value={formData.stateCode}
                            onChange={handleChange}
                            placeholder="State Code ('TN','MH')"
                            maxLength={2}
                            className="flex-[1] border border-gray-300 rounded-md px-3 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        autoComplete="tel"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            type="button"
                            onClick={() => setDisplayCreateCustomerModal(false)}
                            className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700"
                        >
                            {editCustomer?.id ? "Edit" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomerModal;
