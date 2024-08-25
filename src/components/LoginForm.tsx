"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession} from "next-auth/react"
import Image from "next/image";
import { useEffect } from "react";

export default function LoginForm(){
    const {data : session} = useSession()
    const router = useRouter()
    const handleUserSession = async()=>{
       await signIn("google",{redirect: true})  
        
    }
useEffect(()=>{
    if(session){
        router.push('/chat')
    }
},[session,router])
    return(
      <>
      <form className="flex flex-col gap-y-[20px] mt-16" action="">
                <input className="border-0 border-none focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-grey text-grey focus:ring-2 focus:ring-black-border focus:border-[1px] bg-black-secondary-light rounded-lg w-[300px] h-[45px] pl-5 text-sm font-normal" type="text" placeholder="Email"/>
                <input className="border-0 border-none focus:outline-none placeholder:text-sm placeholder:font-light placeholder:text-grey text-grey focus:ring-2 focus:ring-black-border focus:border-[1px] bg-black-secondary-light rounded-lg w-[300px] h-[45px] pl-5 text-sm font-normal" type="text" placeholder="Password"/>
                <button className="w-[300px] h-[45px] font-normal text-lg text-grey hover:bg-[#181818] bg-black-secondary-bold  rounded-lg" type="submit">Sign in</button>
            </form>
            <div className="relative w-[300px] flex justify-center items-center mt-[40px]">
                <hr className="bg-white opacity-50 w-full absolute"/>
                <p className="bg-black z-10 px-2 text-sm text-grey font-normal">Or</p>
                
            </div>
            <div className="mt-5">
                <button onClick={handleUserSession} className="w-[300px] bg-blue-700 hover:bg-blue-800  rounded-[12px] flex justify-center items-center gap-x-4 h-[45px] font-normal text-sm">
                    <Image src={'/google.svg'} height={24} width={24} alt="Google icon"/>
                    Continue with Google
                </button>
            </div>
      
      
      
      </>
    )
}