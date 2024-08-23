import Image from "next/image";
import React, { useEffect, useState, useRef} from "react";

interface Props {
    textResponse : string | undefined;
    textPrompt : string | undefined;
}

export default function PromptContent({textResponse,textPrompt} : Props) {
    const [promptAnimation, setPromptAnimation] = useState(true);
    
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if(!textResponse)return
        const step = textResponse
        const textElement = textRef.current;
        if (!textElement) return
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < step.length) {
                textElement.textContent += step[index];
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 5); 

        setTimeout(() => {
            setPromptAnimation(false);
        }, step.length * 20 + 1000); 

        return () => clearInterval(typingInterval);
    }, [textResponse]);

    return (
        <>
            <div className="w-full h-fit flex justify-end">
                <p className="py-2 px-6 w-fit h-fit font-light text-sm bg-black-secondary-light rounded-full text-neutral-100">
                    {textPrompt}
                </p>
            </div>
            <div className="w-full h-fit flex items-start gap-x-5 pt-8">
                <Image src={'/circle-icon.svg'} height={40} width={40} alt="Circle icon" />
                <div className="typing-container">
                    <p 
                        ref={textRef}
                        className="text-base typing-text font-extralight text-neutral-300"
                    >
                    
                    </p>
                </div>
            </div>
        </>
    );
}
