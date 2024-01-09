import { ChevronDown } from "lucide-react";
import { useSidebar } from "../../../store/use-sidebar";
import { cn } from "../../../lib/util";

export const User = () => {
    const { collapsed } = useSidebar(state => state);
    return (
        <div className={cn("flex items-center justify-between w-48 mx-auto", collapsed && "justify-center w-full")}>

            <img alt="User Image" src="./src/assets/user.png" className="h-10 w-10" />
            <div className={cn("w-[108px]", collapsed && "hidden")}>
                <h2 className="text-base font-medium">Nishyan</h2>
                <p className="text-xs underline">Visit store</p>
            </div>
            <button className={cn(collapsed && "hidden")}>
                <ChevronDown className="w-5 h-5" />
            </button>
        </div>
    )
}