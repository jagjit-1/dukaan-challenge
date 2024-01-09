import { cn } from "../../../lib/util";
import { useSidebar } from "../../../store/use-sidebar";
import { Actions } from "./actions";
import { Headline } from "./headline";
import { Search } from "./search";

export const Header = () => {
    const { collapsed } = useSidebar(state => state);
    return (
        <div className={cn(
            "fixed top-0 w-[calc(100vw-80px)] ml-20 flex items-center justify-between h-16 border-b border-b-black85 bg-white px-8 z-50 py-3",
            !collapsed && "w-[calc(100vw-224px)] ml-56"
        )}>
            <Headline />
            <Search />
            <Actions />
        </div>
    );
}

export default Header;