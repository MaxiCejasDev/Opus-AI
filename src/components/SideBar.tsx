"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBarMobile from "./SideBarMobile";


interface Props{
    handleToggleSideBar : ()=> void;
    toggleSideBar:Boolean;
}



export default function SideBar({handleToggleSideBar,toggleSideBar}:Props){
    const {data : session} = useSession()

    const [userModal, setUserModal] = useState(false)
    const handleSignOut = async()=>{
        await signOut({
            callbackUrl: '/login'
        })
    }
    const handleUserModal = ()=>{
        setUserModal(!userModal)
    }

    return(
        <>
        <div className="relative">
            <div className="hidden md:block">
            <nav className={`absolute top-0 left-0 w-[260px] h-full flex flex-col p-5 duration-300 bg-black-primary-light ${toggleSideBar?'translate-x-[-100%] invisible':''}`}>
            <div className="w-full flex justify-start h-[50px] items-start">
                <Link href={'/'} className="flex gap-x-[10px]">
                    <Image src={'/logo.svg'} height={30} width={27.03} alt="Logo"/>
                    <p className="font-semibold text-white text-base">Opus AI</p>
                </Link>
                
                
            </div>
            <div className="w-full h-full"></div>
            <div className="w-full h-[50px] cursor-pointer flex gap-x-[10px] relative">
                <div onClick={handleUserModal} className="border-[1px] border-grey h-[50px] w-[50px] rounded-full overflow-hidden flex justify-center items-center">
                   {session?.user?.image?(
                    <Image className="h-[65px] w-[65px] object-contain" src={session?.user.image || '/ai.svg'} height={55} width={55} alt="User Image"/>
                   ):(
                    <Image src={'/ai.svg'} height={45} width={45} alt="AI image"/>
                   )
                   }
                    
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-base font-medium text-white">{session?.user?.name?session.user.name:'Admin'}</h2>
                    <p className="font-regular text-[10px] text-grey">{session?.user?.email?session.user.email:'maxicejas12354@gmail.com'}</p>
                </div>
                {userModal && 
                <div className="absolute bottom-[50px] left-[25px] w-fit h-fit py-4 px-8 bg-black-primary-bold rounded-[12px] flex items-center justify-center">
                    <button onClick={handleSignOut} className="text-grey text-sm font-normal flex items-center gap-x-2">
                    <Image src={'/sign-out.svg'} height={24} width={24} alt="Sign out icon"/>
                        Sign out
                    </button>
                </div>}
            </div>
        </nav>
            </div>

        <button onClick={handleToggleSideBar} className={`hidden md:block fixed top-5 left-[215px] duration-300 ${toggleSideBar?'translate-x-[-195px] z-20':''}`}>
                    <Image src={'/sidebar.svg'} height={22.5} width={25} alt="Sidebar icon"/>
        </button>
        <SideBarMobile handleUserModal={handleUserModal} userModal={userModal} handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/> 
        </div>
          
        </>
    )
}