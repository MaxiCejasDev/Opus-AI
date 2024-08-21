"use client";
import Image from "next/image";
import React, {  useState } from "react";
import Prompt from "./Prompt";
// import GeneratePromptAI from "@/config/config";
import SideBar from "./SideBar";



export default function ChatContent() {
    const [toggleSideBar, setToggleSideBar] = useState(false)
    const [textPrompt, setTextPrompt] = useState('');
    const [textResponse, setTextResponse] = useState();
    const [promptSend, setPromptSend] = useState(false);
    
    // const Attemp = async(prompt:string)=>{
    //     const res = await GeneratePromptAI(prompt)
    //     console.log(res)
    // }
    // const formSend = (e)=>{
    //     e.preventDefault()
    //     Attemp(textPrompt)
    // }
    // onSubmit={formSend}
    const handleToggleSideBar = ()=>{
        setToggleSideBar(!toggleSideBar)
    }
    return (
        <>
        <SideBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
        <div className={`w-full p-[16px] md:p-0 md:pl-[260px] duration-300 h-full ${toggleSideBar?'md:pl-0 ':''}`}>
            <div className="h-[calc(100%-100px)] w-full flex justify-center pt-10 overflow-y-auto">
                <div className="h-full w-4/6">
                    {promptSend && <Prompt textResponse={textResponse} textPrompt={textPrompt} />}
                </div>
            </div>
            <form  className="w-full md:w-[650px] mx-auto h-[60px] mt-[20px] bg-black-primary-light border-[1px] border-black-secondary-light rounded-[12px] flex px-6 py-4 items-center">
                <input
                    name="Prompt"
                    onChange={(e) => setTextPrompt(e.target.value)}
                    value={textPrompt}
                    placeholder="Send a message for Opus AI"
                    className="bg-transparent text-white w-full h-full outline-none border-none"
                    type="text"
                />
                <button type="submit" className="rounded-full h-[40px] w-[40px] bg-black flex justify-center items-center">
                    <Image src={'/chat-arrow.svg'} height={20} width={20} alt="Arrow-icon"/>
                </button>
            </form>
            </div>
        </>
    );
}
