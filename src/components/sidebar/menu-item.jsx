import { cn } from "../../../lib/util"

export const MenuItem = ({ icon: Icon, label, isActive }) => {
    return (
        <div className=" group transition duration-300">
            <button className={cn(
                "flex w-full items-center gap-x-3 h-9 py-2 px-4",
                !!isActive && "bg-white/10"
            )}>
                <Icon classname="h-5 w-5" />
                <p className="font-medium text-sm">{label}</p>

            </button>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
    )
}