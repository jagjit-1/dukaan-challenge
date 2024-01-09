import { useEffect } from "react";
import { Overview } from "../../components/dashboard/overview";
import { Transactions } from "../../components/dashboard/transactions";
import { useMediaQuery } from 'react-responsive';
import { useSidebar } from "../../../store/use-sidebar";
import { cn } from "../../../lib/util";

const Dashboard = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const { collapsed, onExpand, onCollapse } = useSidebar(state => state);
    useEffect(() => {
        if (isTabletOrMobile) onCollapse();
        else onExpand();
    }, [isTabletOrMobile, onExpand, onCollapse])
    return (
        <div className={cn("pt-16 pl-56 bg-black98", collapsed && "pl-20")}>
            <div className="p-8 space-y-6">
                <Overview />
                <Transactions />
            </div>
        </div>
    );
}

export default Dashboard;