import { FC, ReactNode } from "react";

interface TextareaProps {
    icon?: ReactNode,
    placeholder: string,
}

const Textarea: FC<TextareaProps> = ({ icon, placeholder}) => {
    return <>
        <div className="relative w-full py-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                {icon}
            </div>
        <textarea  placeholder={placeholder} className="bg-primary-background w-full text-primary-foreground rounded-lg text-sm ps-10 px-2.5 pt-8 pb-4 focus:outline-none" />
        </div>

    </>
}

export default Textarea;