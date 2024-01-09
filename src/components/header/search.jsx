import { SearchIcon } from "lucide-react";

export const Search = () => {
    return (
        <div className="hidden w-[400px] h-10 lg:flex font-normal items-center rounded-md px-[16px] py-[9px] overflow-hidden bg-black95 space-x-2">
            <SearchIcon className="w-4 h-4" />
            <input className="bg-transparent w-full h-full focus:outline-none" placeholder="Search features, tutorials, etc." />
        </div>
    )
}