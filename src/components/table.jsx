import { cn } from "../../lib/util";
import { SearchIcon, ArrowDownUp, Download } from "lucide-react";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'Order ID', width: 246, },
        { field: 'date', headerName: 'Order date', width: 246 },
        { field: 'amount', headerName: 'Order amount', width: 246 },
        {
            field: 'fees',
            headerName: 'Transaction fees',
            width: 246,
        },
    ];

    const rows = [
        { id: "#281209", date: "7 July, 2023", amount: "1,23.23", fees: 841 },
        { id: "#281210", date: "7 July, 2023", amount: "1,234.23", fees: 841 },
        { id: "#2812021", date: "7 July, 2023", amount: "1,234.23", fees: 841 },
        { id: "#2812319", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
        { id: "#281319", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
        { id: "#281139", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
        { id: "#281309", date: "7 July, 2023", amount: "1,234.23", fees: 23 },
        { id: "#2814109", date: "7 July, 2023", amount: "1,234.23", fees: 121 },
        { id: "#281419", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
        { id: "#281449", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
        { id: "#281469", date: "7 July, 2023", amount: "1,234.23", fees: 848 },
    ]
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="w-[248px] h-[40px] flex font-normal items-center px-[16px] py-[10px] overflow-hidden rounded border border-black85  space-x-2">
                    <SearchIcon className="w-3.5 h-3.5" />
                    <input className="bg-transparent w-full h-full text-sm focus:outline-none" placeholder="Seach by order ID..." />
                </div>
                <div className="flex items-center space-x-3 text-black30">
                    <button className="flex items-center py-[6px] px-3 justify-center  space-x-1 rounded border border-black85">
                        <div className="text-base ">Sort</div>
                        <ArrowDownUp className="h-4 w-4" />
                    </button>
                    <button className="flex border h-9 w-9 items-center justify-center rounded border-black85">
                        <Download className="h-[18px] w-[18px]" />
                    </button>
                </div>
            </div>
            <DataGrid
                sx={{ border: "none" }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
            />
        </div>

    );
}