import { cn } from "../../../lib/util";
import { Actions } from "./actions";
import { Headline } from "./headline";
import { Search } from "./search";

export const Header = () => {
    return (
        <div className={cn(
            "fixed top-0 w-full flex items-center justify-between h-[64px] border-b border-b-black85 bg-white px-[32px] py-[12px]",
            true && "w-[calc(100vw-224px)] ml-[224px]"
        )}>
            <Headline />
            
            <Search />
            <Actions />
        </div>
    );
}

export default Header;