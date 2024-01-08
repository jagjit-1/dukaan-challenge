import { Credits } from "./credits";
import { MenuOptions } from "./menu-options";
import { User } from "./user";

export const Sidebar = () => {

    return (
        <div className="fixed h-full left-0 w-56 py-4 px-[10px] bg-secondary  text-white">
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