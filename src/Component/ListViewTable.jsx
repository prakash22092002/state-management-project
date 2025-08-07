import { useLocation } from "react-router-dom";

const ListViewTable = ({
    tableData,
    isLoading,
    columnConfig,
}) => {
    const { pathname } = useLocation();
    const currentPageList = pathname === "/" ? "Home" : pathname.slice(1);

    return (
        <section className="sm:px-8 m-auto my-8">
            {/* Table container with horizontal scroll only for table */}
            <div className="overflow-x-auto border rounded-lg shadow-sm">
                <div className="min-w-[1100px]">

                    {/* Header Row */}
                    <div className="flex border-b-2 border-gray-300 px-4 py-4 text-gray-400 font-semibold bg-gray-50 gap-2">
                        {columnConfig?.map((col, idx) => (
                            <p className={col.styling} key={idx}>
                                {col.columnName}
                            </p>
                        ))}
                    </div>

                    {/* loading state */}
                    {isLoading && (
                        <section className="p-4 text-center text-gray-400">
                            <p>{currentPageList} Data Fetching...</p>
                        </section>
                    )}

                    {/* Data Rows */}
                    {tableData?.map((row, idx) => (
                        <div
                            key={idx}
                            className="flex border-b px-4 py-4 text-gray-400 hover:text-red-500 hover:bg-gray-50 transition-colors cursor-pointer gap-2"
                        >
                            {columnConfig?.map((col, idx_row) => {
                                const value = row[col.keyName];
                                return (
                                    <p className={col.styling} key={idx_row}>
                                        {value}
                                    </p>
                                );
                            })}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ListViewTable;
