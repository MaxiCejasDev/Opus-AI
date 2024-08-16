import ChatContent from "@/components/ChatContent";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Chat(){
    return(
        <section className="bg-black h-screen w-full flex">
            <SideBar/>
            <div className="w-[calc(100%-260px)] h-full">
                <ChatContent/>
    
            </div>
        </section>
    )
}