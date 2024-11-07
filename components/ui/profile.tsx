import Image from "next/image";
import MyImage from "../../public/assets/175000515_927224731375438_5663635251307370372_n.jpg"
export default function Profile() {
    return <>

        <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
{/* photo */}
<div className="relative w-[100px] h-[100px] rounded-full justify-center flex items-center bg-gradient-to-r from-blue-joust to-green-benzol">
    <Image src={MyImage} alt="Mahmoud Hesham's photo" className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"/>
{/* online */}
<div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
{/* name */}
</div>
<div className="text-3xl font-medium">Mahmoud Hesham</div>
        </div>
    </>

}
