import { Overview } from "../../components/dashboard/overview";
import { Transactions } from "../../components/dashboard/transactions";

const Dashboard = () => {
    return (
        <div className="pt-16 pl-56 bg-black98">
            <div className="w-[1152px] h-[1354px] py-8 m-auto">
                <Overview />
                <Transactions />
            </div>
        </div>
    );
}

export default Dashboard;