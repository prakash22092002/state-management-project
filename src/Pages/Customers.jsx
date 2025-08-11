import customersQuery from "../Queries/customersQuery";
import ListViewTable from "../Component/ListViewTable";
import useCustomerStore from "../Store/useCustomerStore";
import CreateCustomerModal from "../Component/CustomerComponent/createCustomerModal";
import { useEffect, useRef, useState } from "react";
import { deleteParticualrCustomer } from "../utils/api";

const Customers = () => {
    const { customersData, customersDataLoading, refetchCustomersData } = customersQuery();
    const customerNameSearchRef = useRef("");
    const [editCustomer, setEditCustomer] = useState("")

    const [deleteCustomer, setDeleteCustomer] = useState("")

    const {
        customers,
        setCustomersData,
        showCustomerFilterDropDown,
        setDisplayCustomerFilterDropDown,
        addLocationFilters,
        customerLocationActiveFilter,
        customerLocationFilterOptions,
        removeSingleActiveUser,
        clearAllActiveUserFilter,
        updateOriginalCustomerData,
        setFilterCustomerFirstName,
        displayCreateCustomerModal,
        setDisplayCreateCustomerModal
    } = useCustomerStore();

    useEffect(() => {
        updateOriginalCustomerData(customersData || [])
        setCustomersData(customersData || []);
    }, [customersData, setCustomersData]);

    // if the edit customer button trigers
    useEffect(() => {
        if (editCustomer) {
            setDisplayCreateCustomerModal(true); // explicitly open
        }
    }, [editCustomer]);

    useEffect(() => {
        if (!deleteCustomer) return;
        deleteParticualrCustomer(deleteCustomer.id)
            .then(() => refetchCustomersData())
            .catch((err) => console.log(err))
    }, [deleteCustomer]);

    // if the delete customer button triggers

    const customerListViewTableData = [
        { columnName: "ID", keyName: "id", styling: "flex-[0.5] truncate" },
        { columnName: "First Name", keyName: "first_name", styling: "flex-[1.5] truncate" },
        { columnName: "Last Name", keyName: "last_name", styling: "flex-[1.5] truncate" },
        { columnName: "Email", keyName: "email", styling: "flex-[3] truncate" },
        { columnName: "Phone", keyName: "phone", styling: "flex-[1.5] truncate" },
        { columnName: "Location", keyName: "location", styling: "flex-[2] truncate" },
        { columnName: "Created At", keyName: "created_at", styling: "flex-[1] truncate" },
    ];

    const handleFilterToggle = () => {
        setDisplayCustomerFilterDropDown(showCustomerFilterDropDown);
    };

    function filterEventClick(e) {
        addLocationFilters(e.target.dataset.id);
    }

    return (
        <section
            className="customers-section"
            onClick={() => {
                if (showCustomerFilterDropDown) {
                    setDisplayCustomerFilterDropDown(showCustomerFilterDropDown);
                }
            }}
        >

            {/* Create Customer Modal */}
            {
                displayCreateCustomerModal && (
                    <CreateCustomerModal
                        setDisplayCreateCustomerModal={setDisplayCreateCustomerModal}
                        refetchCustomersData={refetchCustomersData}
                        editCustomer={editCustomer}
                    />
                )
            }

            {/* Header */}
            <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-600">Customers</h2>

                <div className=" flex gap-8">
                    <div className="flex items-center px-2">
                        <input
                            type="text"
                            className={`
                                text-sm h-0 px-2 py-4  rounded-md border 
                                ${customers.length > 0
                                    ? "text-gray-400 border-gray-400 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:text-gray-600"
                                    : "text-red-400 border-red-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 focus:text-red-600 "
                                }
                              
                            `}
                            placeholder="Search By Name"
                            onChange={(e) => setFilterCustomerFirstName(e.target.value)}
                        />

                    </div>

                    <button
                        onClick={() => {
                            setEditCustomer("");
                            setDisplayCreateCustomerModal(true); // explicitly open
                        }}
                        className="bg-gray-900 text-gray-200 py-2 px-4 rounded-md hover:bg-gray-800 transition text-sm"
                    >
                        + Create Customer
                    </button>
                </div>
            </div>

            {/* Filter */}
            <section className="relative py-3 px-8 border-y-2 border-y-gray-100 flex justify-between items-center">
                {/* Left Side: Filter Button + Active Filters */}
                <div className="flex items-center">
                    <p
                        className="relative  bg-gray-400 text-gray-50 inline-block px-4 py-1 text-sm rounded-md cursor-pointer"
                        onClick={handleFilterToggle}
                    >
                        Add Filter
                        {
                            customerLocationActiveFilter.length > 0 && (
                                <span className="absolute text-[8px] bg-gray-500 w-[20px] h-[20px] text-center rounded-full -top-2 -right-2">{customerLocationActiveFilter.length}</span>
                            )
                        }
                    </p>

                    {/* Filter Options Dropdown */}
                    {showCustomerFilterDropDown && (
                        <div
                            className="absolute z-[100] top-12 mt-1 w-[200px] max-h-[250px] bg-gray-50 rounded-lg border border-gray-300 overflow-auto"
                            onClick={(e) => filterEventClick(e)}
                        >
                            {customerLocationFilterOptions.map((el, idx) => (
                                <button
                                    key={idx}
                                    className={`
                                        block w-full text-start px-3 py-2 text-sm hover:text-gray-900 hover:bg-gray-100
                                        ${customerLocationActiveFilter.includes(el) ? "text-gray-900 bg-gray-200 cursor-not-allowed hover:bg-gray-200" : "text-gray-500"}
                                    `}
                                    data-id={el}
                                    disabled={customerLocationActiveFilter.includes(el)}
                                >
                                    {el}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Active Filters lists [] [] [] */}
                    <div
                        className="ml-5 flex gap-4 justify-center items-center"
                        onClick={(e) => removeSingleActiveUser(e.target.dataset.name)}
                    >
                        {customerLocationActiveFilter.map((el, idx) => (
                            <button
                                className="text-sm text-gray-100 bg-gray-800 pl-3 pr-5 py-1 rounded-md hover:bg-red-500 cursor-pointer transition-colors duration-300 ease-in-out"
                                key={idx}
                                data-name={el}
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Clear Button */}
                {customerLocationActiveFilter.length !== 0 && (
                    <button
                        className="text-sm bg-red-500 text-green-50 px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out"
                        onClick={(e) => clearAllActiveUserFilter(customersData)}
                    >
                        Clear
                    </button>
                )}
            </section>

            {/* Table */}
            <ListViewTable
                onEdit={setEditCustomer}
                onDelete={setDeleteCustomer}
                tableData={customers}
                isLoading={customersDataLoading}
                columnConfig={customerListViewTableData}
            />
        </section>
    );
};

export default Customers;
