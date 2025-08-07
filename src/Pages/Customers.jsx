import usersQuery from "../Queries/usersQuery"
import ListViewTable from "../Component/ListViewTable";

const Customers = () => {
    const { usersData, usersDataLoading } = usersQuery();

    const customerListViewTableData = [
        {
            columnName: "ID",
            keyName: "id",
            styling: "flex-[0.5] truncate", // ~5%
        },
        {
            columnName: "First Name",
            keyName: "first_name",
            styling: "flex-[1.5] truncate", // ~10%
        },
        {
            columnName: "Last Name",
            keyName: "last_name",
            styling: "flex-[1.5] truncate", // ~10%
        },
        {
            columnName: "Email",
            keyName: "email",
            styling: "flex-[3] truncate", // ~30%
        },
        {
            columnName: "Phone",
            keyName: "phone",
            styling: "flex-[1.5] truncate", // ~15%
        },
        {
            columnName: "Location",
            keyName: "location",
            styling: "flex-[2] truncate", // ~20%
        },
        {
            columnName: "Created At",
            keyName: "created_at",
            styling: "flex-[1] truncate", // ~10%
        },
    ]


    return (
        <section className="users-section">
            {/* this is the list table component dynamic */}
            <ListViewTable
                tableData={usersData}
                isLoading={usersDataLoading}
                columnConfig={customerListViewTableData}
            />
        </section>
    )
}

export default Customers