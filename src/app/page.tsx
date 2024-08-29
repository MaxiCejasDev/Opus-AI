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
        
        
        <Image className="size-[90%] left-[5%] opacity-30 opus-image md:size-[450px] md:left-[calc(50%-225px)] lg:size-[500px] lg:left-[calc(50%-250px)] xl:size-[550px] xl:left-[calc(50%-275px)] 2xl:size-[1024px] 2xl:left-[calc(50%-512px)]  absolute z-10 bottom-0 object-contain" src={'/ai.svg'} height={16} width={16} alt="AI image"/>
        <div className="relative z-20 h-full flex justify-start items-center gap-y-10 flex-col pt-20">
          <h1 className="header-title text-7xl font-semibold ">Opus AI</h1>
          <Link className="bg-white py-3 px-8 flex justify-center items-center gap-x-[5px] text-black-primary-bold font-medium text-base rounded-[30px]" href={'/login'}>
          Get started
          <Image src={'/arrow-incline.svg'} height={12} width={12} alt="Arrow icon"/>
          </Link>
        </div>
        <p className="text-xs text-white absolute font-extralight bottom-5 left-4 md:left-20">Explore Intelligent Conversations with Our<br/> Advanced AI Chat</p>
     </header>
     <About/>
     <HowUse/>
     <GetStarted/>
     <Footer/>
     </>
   
  ) 
}