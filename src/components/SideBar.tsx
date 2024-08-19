"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideBar(){
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
        <nav className="w-[260px] h-full flex flex-col p-5 bg-black-primary-light">
            <div className="w-full flex justify-between h-[50px] items-start">
                <Link href={'/'} className="flex gap-x-[10px]">
                    <Image src={'/logo.svg'} height={30} width={27.03} alt="Logo"/>
                    <p className="font-semibold text-white text-base">Opus AI</p>
                </Link>
                <Image src={'/sidebar.svg'} height={22.5} width={25} alt="Sidebar icon"/>
            </div>
            <div className="w-full h-full"></div>
            <div className="w-full h-[50px] cursor-pointer flex gap-x-[10px] relative">
                <div onClick={handleUserModal} className="border-[1px] border-grey h-[50px] w-[50px] rounded-full overflow-hidden flex justify-center items-center">
                   {session?(
                    <Image className="h-[65px] w-[65px] object-contain" src={session?.user.image} height={55} width={55} alt="User Image"/>
                   ):(
                    <Image src={'/ai.svg'} height={45} width={45} alt="AI image"/>
                   )
                   }
                    
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-base font-medium text-white">{session?session.user.name:'Admin'}</h2>
                    <p className="font-regular text-[10px] text-grey">{session?session.user.email:'maxicejas12354@gmail.com'}</p>
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
    )
}