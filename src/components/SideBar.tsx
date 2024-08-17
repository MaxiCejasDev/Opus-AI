import Image from "next/image";
import Link from "next/link";

export default function SideBar(){
    return(
        <nav className="w-[260px] h-full flex flex-col p-5 bg-black-primary-light">
            <div className="w-full flex justify-between h-[50px] items-start">
                <Link href={'/'} className="flex gap-x-[10px]">
                    <Image src={'/logo.svg'} height={30} width={27.03} alt="Logo"/>
                    <p className="font-semibold text-white text-base">Opus AI</p>
                </Link>
                <Image src={'/sidebar.svg'} height={22.5} width={25} alt="Sidebar icon"/>
            </div>
            <div className="w-full h-full"></div>
            <div className="w-full h-[50px] flex gap-x-[10px]">
                <div className="border-[1px] border-grey h-[50px] w-[50px] rounded-full overflow-hidden flex justify-center items-center pt-[5px]">
                    <Image src={'/ai.svg'} height={45} width={45} alt="AI image"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-base font-semibold text-white">Admin</h2>
                    <p className="font-regular text-xs text-grey">maxicejas12354@gmail.com</p>
                </div>
            </div>
        </nav>
    )
}