import { cn } from "@/libs/utilites";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    className?: string,
    isIcon?: boolean,
    link?: string
}

const Button: FC<ButtonProps> = ({ children, className, link, isIcon }) => {
    return <>
        {link ? <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
            <ButtonBody className={className} isIcon={isIcon}>
                {children}
            </ButtonBody>

        </Link>
            : <ButtonBody className={className} isIcon={isIcon}>
                {children}
            </ButtonBody>
        }
    </>
}

interface ButtonBodyProps {
    children: ReactNode,
    className?: string,
    isIcon?: boolean,
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, className, isIcon }) => {
    return <>
        <div className="cursor-pointer flex-none w-auto h-full">
            <div className={cn('flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[.1] transition-colors duration-100'
                ,className , isIcon ? 'h-10 w-10' : 'h-full w-max px-3 py-2')}>
            {children}
            </div>
        </div>
    </>
}
export default Button;