import { useQuery } from "@tanstack/react-query"
import { fetchingApi } from "../utils/api"
import { useLocation } from "react-router-dom"

const customersQuery = () => {

    const { pathname } = useLocation();

    // fetch all customers
    const {
        data: customersData,
        isLoading: customersDataLoading,
        error: customersDataError,
    } = useQuery({
        queryKey: ['customers'],
        queryFn: () => fetchingApi(`https://6892dc21c49d24bce868893a.mockapi.io/portal/customers`),
    })


    // fetch particularcustomer
    const {
        data: customerData,
        isLoading: customerDataLoading,
        error: customerDataError,
    } = useQuery({
        queryKey: ['customer', pathname],
        queryFn: () => fetchingApi(`https://6892dc21c49d24bce868893a.mockapi.io/portal${pathname}`),
    })



    return {
        customersData,
        customersDataLoading,
        customersDataError,
        customerData,
        customerDataLoading,
        customerDataError
    };

}
export default customersQuery