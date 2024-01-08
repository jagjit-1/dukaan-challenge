import { ChevronDown } from "lucide-react";

export const User = () => {
    return (
        <div className="flex items-center justify-between w-48 mx-auto ">

            <img alt="User Image" src="./src/assets/user.png" className="h-10 w-10" />
            <div className="w-[108px]">
                <h2 className="text-base font-medium">Nishyan</h2>
                <p className="text-xs underline">Visit store</p>
            </div>
            <button>
                <ChevronDown className="w-5 h-5" />
            </button>
        </div>
    )
}