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