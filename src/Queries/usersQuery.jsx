import { useQuery } from "@tanstack/react-query"
import { fetchingApi } from "../utils/api"

const usersQuery = () => {

    const {
        data: usersData,
        isLoading: usersDataLoading,
        error: usersDataError,
    } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetchingApi(`https://6892dc21c49d24bce868893a.mockapi.io/portal/users`),
    })

    return { usersData, usersDataLoading, usersDataError };

}
export default usersQuery