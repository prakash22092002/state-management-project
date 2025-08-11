

export const currentDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}