"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface Props{
    handleUserModal : ()=> void;
    userModal : Boolean;
    handleToggleSideBar: ()=> void;
    toggleSideBar: Boolean;
}


export default function SideBarMobile({handleUserModal,userModal,handleToggleSideBar,toggleSideBar}:Props){
    const {data : session} = useSession()
    const handleSignOut = async()=>{
        await signOut({
            callbackUrl: '/login'
        })
    }
    return(
        <>
        <nav className={`w-2/4 md:w-3/6 lg:hidden fixed top-0 left-[-100%] h-full z-10 p-[16px] duration-300 flex items-end bg-black-secondary-bold ${toggleSideBar?'translate-x-[200%]':''}`}>
        <div className="w-full h-[50px] cursor-pointer flex gap-x-[10px] items-center relative">
                <div onClick={handleUserModal} className="border-[1px] border-grey h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full overflow-hidden flex justify-center items-center">
                   {session?.user?.image? (
                    <Image className="h-[24px] w-[24px] md:h-[40px] md:w-[40px] object-contain" src={session?.user.image || '/ai.svg'} height={55} width={55} alt="User Image"/>
                   ):(<Image src={'/ai.svg'} height={45} width={45} alt="AI image"/>)
                   }
                    
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-sm font-medium text-white">{session?.user?.name?session.user.name:'Admin'}</h2>
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
        <button onClick={handleToggleSideBar} className="fixed overflow-hidden lg:hidden w-[30px] h-[30px] flex items-start justify-start top-[16px] left-[16px] z-20">
            <div className="h-[6px] w-full flex flex-col gap-y-[2px] relative">
                <span className={`h-[2px] w-[30px] absolute top-0 left-0 duration-300 bg-white ${toggleSideBar?'translate-x-[-15px]':''}`}></span>
                <span className={`h-[2px] absolute top-[4px] left-0 duration-300 bg-white ${toggleSideBar?'w-full':'w-[15px]'}`}></span>
            </div>
        <Link href={'/'} className="fixed top-[16px] right-[16px] lg:hidden">
            <Image src={'/logo.svg'} height={30} width={30} alt="Opus AI Logo"/>
        </Link>
        </button>
        </>
    )
}