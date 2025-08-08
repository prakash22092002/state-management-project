import ordersQuery from "../Queries/ordersQuery"
import ListViewTable from "../Component/ListViewTable";

const Orders = () => {
    const { ordersData, ordersDataLoading } = ordersQuery();

    const orderListViewTableData = [
        {
            columnName: "Order ID",
            keyName: "id",
            styling: "flex-[0.5] truncate",
        },
        {
            columnName: "Product",
            keyName: "product_name",
            styling: "flex-[2] truncate",
        },
        {
            columnName: "Category",
            keyName: "category",
            styling: "flex-[1.5] truncate",
        },
        {
            columnName: "Quantity",
            keyName: "quantity",
            styling: "flex-[1] truncate",
        },
        {
            columnName: "Price",
            keyName: "price",
            styling: "flex-[1.5] truncate after:content-['_USD']",
        },
        {
            columnName: "User ID",
            keyName: "user_id",
            styling: "flex-[1] truncate",
        },
        {
            columnName: "Status",
            keyName: "status",
            styling: "flex-[1.2] truncate capitalize",
        },
        {
            columnName: "Order Date",
            keyName: "order_date",
            styling: "flex-[1.5] truncate",
        },
    ];


    return (
        <section className="orders-section ">
            {/* this is dynamic list component */}
            <ListViewTable
                tableData={ordersData}
                isLoading={ordersDataLoading}
                columnConfig={orderListViewTableData}
            />

        </section>
    )
}

export default Orders