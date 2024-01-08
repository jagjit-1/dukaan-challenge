import { cn } from "../../lib/util";
import { ChevronDown } from "lucide-react";

export const Dropdown = ({ classname }) => {
    return (

        <button className={cn("border text-black30 border-black85 bg-white", classname)}>
            <div className="flex items-center space-x-1 justify-center">
                <div className="text-base">
                    Last Month
                </div>
                <ChevronDown className="w-4 h-4 text-black30" />
            </div>
        </button>

    )
}