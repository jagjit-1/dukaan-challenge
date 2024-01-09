import { MessageSquareText, ChevronDown } from "lucide-react";

export const Actions = () => {
    return (
        <div className="flex justify-end items-center space-x-3">
            <button className="w-10 h-10 bg-black90 rounded-full flex justify-center items-center">
                <MessageSquareText className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-black90 rounded-full flex justify-center items-center">
                <ChevronDown className="w-5 h-5" />
            </button>
        </div>
    )
}