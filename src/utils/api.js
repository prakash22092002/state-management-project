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
        console.error(err)
    }
}
export async function editPartucularCustomer(CUSTOMERID, PAYLOAD) {
    try {
        const response = await fetch(
            `https://6892dc21c49d24bce868893a.mockapi.io/portal/customers/${CUSTOMERID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(PAYLOAD),
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to edit customer: ${response.statusText}`);
        }

        return await response.json(); // Return updated customer data
    } catch (err) {
        console.error("Error editing customer:", err);
        throw err; // Rethrow so the caller can handle it
    }
}


// delete new customers

export async function deleteParticualrCustomer(CUSTOMERID) {
    try {
        await fetch(`https://6892dc21c49d24bce868893a.mockapi.io/portal/customers/${CUSTOMERID}`, {
            method: "DELETE"
        });
    }
    catch (err) {
        console.error(err)
    }
}

