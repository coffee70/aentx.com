import { ChevronsUpIcon } from "lucide-react";
import { Jost } from "next/font/google"
import { cn } from "@/lib/utils";

const jost = Jost({
    subsets: ["latin"],
    weight: ["700"],
})

export function Logo() {
    return (
        <div className='flex items-center space-x-2 sm:space-x-3'>
            <div className='p-1 sm:p-1.5 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-md'>
                <ChevronsUpIcon strokeWidth={2.5} size={22} className="sm:w-6 sm:h-6" />
            </div>
            <span className={cn(jost.className, 'text-2xl sm:text-4xl')}>Aentx.</span>
        </div>
    )
}
