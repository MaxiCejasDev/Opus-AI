"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Prompt from "./Prompt";



export default function ChatContent() {
    const [textPrompt, setTextPrompt] = useState('');
    const [textResponse, setTextResponse] = useState('');
    const [promptSend, setPromptSend] = useState(false);
    // const handleFetch = async ()=>{
    //   const text = 'Hola'
    //   try{
    //     await fetch('/api/generatePrompt',{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({text})
    //     })
    //   }catch(error){
    //     console.log(error)
    //   }
     
    // }
    //   handleFetch()
    
    return (
        <>
            <div className="h-[calc(100%-100px)] w-full flex justify-center pt-10 overflow-y-auto">
                <div className="h-full w-4/6">
                    {promptSend && <Prompt textResponse={textResponse} textPrompt={textPrompt} />}
                </div>
            </div>
            <form className="w-4/6 mx-auto h-[60px] mt-[20px] bg-black-primary-light border-[1px] border-black-secondary-light rounded-[12px] flex px-6 py-4 items-center">
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
        </>
    );
}
