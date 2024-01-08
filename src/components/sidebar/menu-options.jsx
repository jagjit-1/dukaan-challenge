import {
    Home,
    ClipboardList,
    LayoutGrid,
    Truck,
    BarChartBig,
    BookCopy,
    Navigation,
    BadgePercent,
    UsersRound,
    Palette,
    Activity
} from "lucide-react";
import { MenuItem } from "./menu-item";

export const MenuOptions = () => {
    const options = [
        { icon: Home, label: "Home" },
        { icon: ClipboardList, label: "Orders" },
        { icon: LayoutGrid, label: "Products" },
        { icon: Truck, label: "Delivery" },
        { icon: Home, label: "Marketing" },
        { icon: BarChartBig, label: "Analytics" },
        { icon: BookCopy, label: "Payments", isActive: true },
        { icon: Navigation, label: "Tools" },
        { icon: BadgePercent, label: "Discounts" },
        { icon: UsersRound, label: "Audience" },
        { icon: Palette, label: "Appearance" },
        { icon: Activity, label: "Plugins" },
    ]
    return (
        <div>
            {options.map(({ icon, label, isActive }) => (
                <MenuItem icon={icon} label={label} isActive={isActive} />
            ))}
        </div>
    )
}