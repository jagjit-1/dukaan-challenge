import { Dropdown } from "../dropdown"
import { Card } from "./card"

export const Overview = () => {
    return (
        <div className="space-y-5">
            <div className="h-9 w-full flex justify-between items-center">
                <h1 className="text-xl font-medium">Overview</h1>
                <Dropdown classname="rounded h-full w-[137px]" />
            </div>
            <div className="flex flex-wrap md:space-x-4">
                <Card className="flex-grow p-5" heading="Online order" value="231" />
                <Card className="flex-grow p-5" heading="Amount received" value="23,92,312.19" />
            </div>
        </div>
    )
}