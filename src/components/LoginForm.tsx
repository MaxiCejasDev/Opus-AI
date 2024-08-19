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
    if(session)return router.push('/chat')
})
    return(
      <>
      <form className="flex flex-col gap-y-[20px] mt-16" action="">
                <input className="border-[1px] border-black-border rounded-[12px] bg-transparent text-white w-[450px] h-[60px] pl-5" type="text" placeholder="Email"/>
                <input className="border-[1px] border-black-border rounded-[12px] bg-transparent text-white w-[450px] h-[60px] pl-5" type="text" placeholder="Password"/>
                <button className="w-[450px] h-[60px] font-regular text-lg bg-black-secondary-light hover:bg-black-primary-light  rounded-[12px]" type="submit">Sign in</button>
            </form>
            <div className="relative w-[450px] flex justify-center items-center mt-[40px]">
                <hr className="bg-white opacity-50 w-full absolute"/>
                <p className="bg-black z-10 px-2">Or</p>
                
            </div>
            <div className="mt-5">
                <button onClick={handleUserSession} className="w-[450px] bg-blue-700 hover:bg-blue-800  rounded-[12px] flex justify-center items-center gap-x-4 h-[60px] font-regular text-base">
                    <Image src={'/google.svg'} height={32} width={32} alt="Google icon"/>
                    Continue with Google
                </button>
            </div>
      
      
      
      </>
    )
}