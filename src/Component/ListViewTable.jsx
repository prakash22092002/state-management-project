import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ListViewTable = ({ tableData, isLoading, columnConfig, onEdit, onDelete }) => {
    const { pathname } = useLocation();
    const currentPageList = pathname === "/" ? "Home" : pathname.slice(1);

    const navigateTo = useNavigate();
    const [menuOpenId, setMenuOpenId] = useState(null);

    // Single event handler for all clicks inside table
    function handleTableClick(e) {
        const actionBtn = e.target.closest("[data-action]");
        const rowDiv = e.target.closest("[data-id]");

        if (!rowDiv) return; // Clicked outside a row

        const rowId = rowDiv.dataset.id;
        const rowData = tableData.find((r) => String(r.id) === String(rowId));

        if (!actionBtn) {
            // Normal row click → navigate
            navigateTo(`${rowId}`);
            return;
        }

        const action = actionBtn.dataset.action;
        if (action === "menu") {
            setMenuOpenId(menuOpenId === rowId ? null : rowId);
        } else if (action === "edit") {
            setMenuOpenId(null);
            onEdit && onEdit(rowData);
        } else if (action === "delete") {
            setMenuOpenId(null);
            onDelete && onDelete(rowData);
        }
    }

    return (
        <section className="text-sm sm:px-8 m-auto my-8">
            <div className="overflow-x-auto border rounded-lg shadow-sm">
                <div className="min-w-[1100px]">
                    {/* Header Row */}
                    <div className="flex border-b-2 border-gray-300 px-4 py-4 text-gray-400 font-semibold bg-gray-50 gap-2">
                        {columnConfig?.map((col, idx) => (
                            <p className={col.styling} key={idx}>
                                {col.columnName}
                            </p>
                        ))}
                        <p className="w-[50px] text-center">Actions</p>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <section className="p-4 text-center text-gray-400">
                            <p>{currentPageList} Data Fetching...</p>
                        </section>
                    )}

                    {/* Data Rows */}
                    <div onClick={handleTableClick}>
                        {tableData?.map((row, idx) => (
                            <div
                                key={idx}
                                className="flex border-b px-4 py-4 text-gray-400 hover:bg-gray-50 transition-colors gap-2 relative"
                                data-id={row.id}
                            >
                                {columnConfig?.map((col, idx_row) => {
                                    const value = row[col.keyName];
                                    return (
                                        <p className={col.styling} key={idx_row}>
                                            {value}
                                        </p>
                                    );
                                })}

                                {/* Actions column */}
                                <div className="w-[50px] flex justify-center relative">
                                    <button
                                        data-action="menu"
                                        className="p-1 rounded-full hover:bg-gray-200"
                                    >
                                        <HiOutlineDotsVertical size={20} />
                                    </button>

                                    {menuOpenId === row.id && (
                                        <div className="absolute right-0 top-8 bg-white border rounded-md shadow-lg w-28 z-50">
                                            <button
                                                data-action="edit"
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                data-action="delete"
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListViewTable;
