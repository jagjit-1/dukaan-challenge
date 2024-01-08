import { cn } from "../../../lib/util"

export const Card = ({ heading, value, className }) => {
    return (
        <div className={cn("p-5 bg-white", className)}>
            <div className="h-full flex flex-col justify-between">
                <div className="text-black30 font-normal text-base">{heading}</div>
                <div className="text-3xl font-medium">₹{value}</div>
            </div>
        </div>
    )
}