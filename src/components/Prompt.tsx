import Image from "next/image";
import React, { useEffect, useState, useRef} from "react";

export default function Prompt() {
    const [promptAnimation, setPromptAnimation] = useState(true);
    const step = 'Parece que necesitas liberar un poco de energía. ¡A veces es bueno dejar salir todo eso! Si quieres charlar sobre algo o simplemente seguir desahogándote, estoy aquí para escucharte.';
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
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
    }, []);

    return (
        <>
            <div className="w-full h-fit flex justify-end">
                <p className="py-2 px-6 w-fit h-fit font-light text-sm bg-black-secondary-light rounded-full text-neutral-100">
                    Hola
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
