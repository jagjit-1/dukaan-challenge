import { Wallet } from "lucide-react";
import { useSidebar } from "../../../store/use-sidebar";
import { cn } from "../../../lib/util";

export const Credits = () => {
    const {collapsed} = useSidebar(state => state);
    return (
        <div className=" py-2 px-3 h-16 flex items-center space-x-2 rounded bg-[#353C53]">
            <div className="bg-white/10 p-[6px]">

                <Wallet className="h-6 w-6 " />
            </div>
            <div className={cn(collapsed && "hidden")}>
                <h2 className="text-xs">Available credits</h2>
                <h1 className="text-base font-medium">222.10</h1>
            </div>
        </div>
    )
}