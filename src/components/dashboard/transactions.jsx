import DataTable from "../table"

export const Transactions = () => {
    return (
        <div className="space-y-4">
            <div className="font-medium text-xl">
                Transactions | This Month
            </div>
            <div className="py-3 px-3 bg-white">
                <DataTable />
            </div>
        </div>
    )
}