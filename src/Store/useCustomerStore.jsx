import { create } from "zustand";
import { fetchingApi } from "../utils/api";


const useCustomerStore = create((set) => {

    // for the debouncing search for the customer name
    let interval = "";

    return {
        // UI state for filter dropdown visibility
        showCustomerFilterDropDown: false,

        // Toggle dropdown visibility
        setDisplayCustomerFilterDropDown: (value) =>
            set(() => ({
                showCustomerFilterDropDown: !value,
            })),

        originalCustomerData: [],
        updateOriginalCustomerData: (value) => {
            set((state) => {
                return { originalCustomerData: [...value] }
            })
        },

        // Customer data
        customers: [],
        customersFilter: [],
        customerLocationActiveFilter: [],
        customerLocationFilterOptions: [],

        // Set customer data and extract location filter options
        setCustomersData: (data) => {
            set({ customers: [...data] });

            const locationOptions = data.map((el) => {
                const fullLocation = el.location;
                const fullLocationSplit = fullLocation.split(",");
                return fullLocationSplit[1]?.trim() || ""; // get the state/city part
            });

            const uniqueLocation = []
            const map = new Map();
            locationOptions.map((el, idx) => {
                if (map.get(el) === undefined) {
                    map.set(el, 1)
                    uniqueLocation.push(el)
                }
                else {
                    map.set(el, map.get(el) + 1)
                }
            })
            set({ customerLocationFilterOptions: [...uniqueLocation] });
        },

        // for addin the filter based on the location
        addLocationFilters: (value) => {
            set((state) => {
                const updated_active_filter_location = [...state.customerLocationActiveFilter, value];

                const filtered_data = state.originalCustomerData.filter((el, idx) => {
                    const filter_by_location = el.location.split(",").map(s => s.trim());
                    return updated_active_filter_location.includes(filter_by_location[1])
                })

                return {

                    customerLocationActiveFilter: [...updated_active_filter_location],
                    customers: [...filtered_data]
                }

            })
        },

        // removing the added filter one by one
        removeSingleActiveUser: (value) => {
            set((state) => {

                const afterFiltered = state.customerLocationActiveFilter.filter((el) => {
                    return el !== value
                })

                const filtered_data = state.originalCustomerData.filter((el, idx) => {
                    const filter_by_location = el.location.split(",").map(s => s.trim());
                    return afterFiltered.includes(filter_by_location[1])
                })

                return {
                    customerLocationActiveFilter: [...afterFiltered],
                    customers: filtered_data.length > 0 ? [...filtered_data] : [...state.originalCustomerData]
                }
            })
        },

        // for clearing all the selected filter at one go
        clearAllActiveUserFilter: (value) => {
            set((state) => {
                return { customerLocationActiveFilter: [] }
            })

            set((state) => {
                return { customers: [...value] }
            })
        },


        // filtering of the data by first name search
        filterCustomerFirstNameData: "",
        setFilterCustomerFirstName: (value) => {

            function debounceSearch(e) {
                clearTimeout(interval)
                interval = setTimeout(() => {

                    fetchingApi(`https://6892dc21c49d24bce868893a.mockapi.io/portal/customers?first_name=${e}`)
                        .then((data) => {

                            set((state) => {
                                return { customers: data === "Not found" ? [] : data }
                            })

                        })
                        .catch((err) => {
                            set((state) => {
                                return { customers: [] }
                            })
                        })

                }, 1000)
            };

            debounceSearch(value)


        },


        // create cutomer modal section
        displayCreateCustomerModal: false,

        setDisplayCreateCustomerModal: (value) => {
            set((state) => {
                return { displayCreateCustomerModal: value }
            })
        }

    }
}
);

export default useCustomerStore;
