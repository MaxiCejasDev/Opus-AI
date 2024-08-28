import About from "@/components/About";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HowUse from "@/components/HowUse";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";


// 

export default function Home(){
 
  return(
     <>
     <header className="w-full h-screen relative bg-black overflow-hidden">
        <NavBar/>
        
        
        <Image className="h-[550px] opacity-30 opus-image w-[550px] max-h-[750px] absolute z-10 left-[calc(50%-275px)] bottom-0 max-w-[750px] object-contain" src={'/ai.svg'} height={16} width={16} alt="AI image"/>
        <div className="relative z-20 h-full flex justify-start items-center gap-y-10 flex-col pt-20">
          <h1 className="header-title text-7xl font-semibold ">Opus AI</h1>
          <Link className="bg-white py-3 px-8 flex justify-center items-center gap-x-[5px] text-black-secondary-bold font-medium text-base rounded-[30px]" href={'/login'}>
          Get started
          <Image src={'/arrow-incline.svg'} height={12} width={12} alt="Arrow icon"/>
          </Link>
        </div>
        <p className="text-xs text-white absolute font-extralight bottom-5 left-[80px] z-30">Explore Intelligent Conversations with Our<br/> Advanced AI Chat</p>
     </header>
     <About/>
     <HowUse/>
     <GetStarted/>
     <Footer/>
     </>
   
  ) 
}