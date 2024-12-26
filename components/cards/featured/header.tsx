import { FC } from "react"

interface HeaderProps {
    title: string,
    tag: string,
    // active?:boolean
}

const Header: FC<HeaderProps> = ({ title, tag }) => {
    return <>
        <div className="bg-secondary-background   flex flex-wrap flex-none relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl">
            <div>
                <p className="text-lg font-medium leading-3 text-primary-foreground">{title}</p>
            </div>
            <div>
                <p className="text-lg font-medium leading-3 font-pixel text-secondary-foreground">{tag}</p>
            </div>
        </div>
    </>
}

export default Header;  