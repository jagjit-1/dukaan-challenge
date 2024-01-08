import { Wallet } from "lucide-react";

export const Credits = () => {
    return (
        <div className=" py-2 px-3 h-16 flex items-center space-x-2 rounded bg-[#353C53]">
            <div className="bg-white/10 p-[6px]">

                <Wallet className="h-6 w-6 " />
            </div>
            <div>
                <h2 className="text-xs">Available credits</h2>
                <h1 className="text-base font-medium">222.10</h1>
            </div>
        </div>
    )
}