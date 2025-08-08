import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { fetchingApi } from "../utils/api";
import customersQuery from "../Queries/customersQuery";

const CustomerDetails = () => {

    const { customerData } = customersQuery();


    useEffect(() => {
        console.log(customerData, "customerData")
    }, [customerData])


    return (
        <section>
            <p>
                customer details page
            </p>
        </section>
    )
};

export default CustomerDetails;
