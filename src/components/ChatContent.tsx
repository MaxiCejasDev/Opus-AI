"use client";
import Image from "next/image";
import React, {  useState } from "react";

import GeneratePromptAI from "@/config/config";
import SideBar from "./SideBar";
import PromptContent from "./PromptContent";

interface Prompt {
    id: number;
    userMessage: string;
    promptResponse: string;
}
type PromptMessages = Prompt[];

export default function ChatContent() {
    const [toggleSideBar, setToggleSideBar] = useState(false)
    const [textInput, setTextInput] = useState('');
    const [promptMessages, setPromptMessages] = useState<PromptMessages>([])
    const [disabled, setDisabled] = useState(false)
    
    const Attemp = async(text:string)=>{
        const res = await GeneratePromptAI(text)
        if(res){
            setPromptMessages((prev)=>[
                        ...prev,{
                            id: promptMessages.length + 1,
                            userMessage:  text,
                            promptResponse: res.content,
                        }
                    ])
        }
    }
    const HandleForm = (e)=>{
        e.preventDefault()
        Attemp(textInput)
        setTextInput('') 
    }
    const handleToggleSideBar = ()=>{
        setToggleSideBar(!toggleSideBar)

    }
    

    return (
        <>
        <SideBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
        <div className={`w-full p-[16px] md:p-0 md:pl-[260px] duration-300 h-full ${toggleSideBar?'md:pl-0 ':''}`}>
            <div className="h-[calc(100%-100px)] w-full flex justify-center pt-10 overflow-y-auto">
                <div className="h-full w-4/6">
                    {promptMessages.length >= 1 && promptMessages.map(({id,userMessage,promptResponse})=>(
        <PromptContent key={id} textPrompt={userMessage} textResponse={promptResponse}/>
    ))}
                </div>
            </div>
            <form  onSubmit={HandleForm}  className="w-full md:w-[650px] mx-auto h-[60px] mt-[20px] bg-black-primary-light border-[1px] border-black-secondary-light rounded-[12px] flex px-6 py-4 items-center">
                <input
                    name="Prompt"
                    onChange={(e) => setTextInput(e.target.value)}
                    value={textInput}
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
