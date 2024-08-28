"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavBar(){
    const [toggleNav, setToggleNav] = useState(false)
    const handleToggleNav = ()=>{
        setToggleNav(!toggleNav)
    }
    return(
        <nav className="h-[80px] w-full p-4 relative z-30 flex text-white md:grid md:grid-cols-3 md:px-[80px]">
            <div className="flex items-center z-40">
                <Image src={'/logo.svg'} height={25.05} width={30} alt="Logo"/>
            </div>
            <div className="hidden md:flex items-center justify-center">
                <ul className="font-regular text-sm flex justify-center items-center gap-x-6">
                    <Link href={'#about'}>About</Link>
                    <Link href={'#how-use'}>How to use</Link>
                    <Link href={'/'}>Contact</Link>
                </ul>
            </div>
            <div className="hidden md:flex items-center justify-end">
                <Link href={'/login'} className="text-base flex items-center justify-center font-medium py-2 px-6 rounded-[30px] border-[1px] bg-[#F9F9F9] text-black-primary-bold">Sign in</Link>
            </div>
            <div className="w-full h-full flex items-end justify-center flex-col z-40 md:hidden">
                <div onClick={handleToggleNav} className="flex cursor-pointer flex-col gap-y-1 relative">
                    <span className={`h-[2px] w-[30px] bg-white duration-500 ${toggleNav?'menu-bar-1':''}`}></span>
                    <span className={`h-[2px] w-[30px] bg-white ${toggleNav?'menu-bar-2':''}`}>
                    </span>
                    <span className={`h-[2px] w-[30px] bg-white duration-500 ${toggleNav?'menu-bar-3':''}`}></span>
                    <span className={`absolute h-[2px] w-[30px] left-0 top-[6px] bg-white ${toggleNav?' menu-bar-close':''}`}></span>
                </div>

            </div>
            <div className={`h-full w-full bg-black-primary-light top-0 z-30 left-[-100%] fixed flex flex-col items-start justify-start pt-[120px] pl-[16px] duration-700 ${toggleNav?'translate-x-full':''}`}>
                <ul className="flex flex-col gap-y-8">
                    <li className="font-normal text-grey text-lg">About</li>
                    <li className="font-normal text-grey text-lg">How to use</li>
                    <li className="font-normal text-grey text-lg">Contact</li>
                </ul>
            </div>
        </nav>
    )
}