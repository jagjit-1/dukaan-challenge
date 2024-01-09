import { Credits } from "./credits";
import { MenuOptions } from "./menu-options";
import { User } from "./user";
import { useSidebar } from "../../../store/use-sidebar";
import { cn } from "../../../lib/util";

export const Sidebar = () => {
    const { collapsed } = useSidebar((state) => state);

    return (
        <div className={cn("fixed h-full left-0 w-56 py-4 px-[10px] z-50 bg-secondary text-white", collapsed && "w-20")}>
            <div className="h-full flex flex-col justify-between">
                <div className="space-y-6">
                    <User />
                    <MenuOptions />
                </div>
                <div>
                    <Credits />
                </div>
            </div>


        </div>
    );
}

export default Sidebar;