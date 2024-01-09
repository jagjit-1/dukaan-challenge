import { HelpCircle } from "lucide-react";
import Tooltip from '@mui/material/Tooltip';


export const Headline = () => {
    return (
        <div className="flex items-center w-[360px] h-[22px] space-x-4">

            <p className="text-base">Payments</p>
            <div className="flex items-center h-full space-x-[6px] w-[94px]">
                <Tooltip title="explaination">
                    <HelpCircle className="w-[14px] h-[14px]" />
                </Tooltip>
                <p className="text-xs">How it works</p>
            </div>

        </div>
    )
}

