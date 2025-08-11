// fetching apis
export async function fetchingApi(ENDPOINT) {
    try {
        const fetchingData = await fetch(ENDPOINT);
        const response = await fetchingData.json();
        return response;
    }
    catch (err) {
        console.error(err, "while fetching the data")
        return
    }
}



// create new customer

export async function createNewCustomer(payload) {
    try {
        const creatingData = await fetch(`https://6892dc21c49d24bce868893a.mockapi.io/portal/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
    }
    catch (err) {
        console.log(err)
    }
}