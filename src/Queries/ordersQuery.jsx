import { useQuery } from "@tanstack/react-query";
import { fetchingApi } from "../utils/api";

const ordersQuery = () => {

    const {
        data: ordersData,
        isLoading: ordersDataLoading,
        error: ordersDataError,
    } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetchingApi(`https://6892dc21c49d24bce868893a.mockapi.io/portal/orders`)
    })

    return { ordersData, ordersDataLoading, ordersDataError }
};

export default ordersQuery;