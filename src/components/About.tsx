import Image from "next/image";

export default function About(){
    return(
        <section className="about relative h-fit w-full grid grid-cols-2 bg-black overflow-hidden py-20 pt-40" id="about">
            <div className="pl-20 pt-16">
                <p className="gradient-title text-base font-semibold">About</p>
                <h2 className="text-white font-semibold text-4xl">
                Opus AI is a chat with built-in artificial intelligence
                </h2>
                <p className="text-white font-light text-lg mt-1">
                You will be able to resolve all your doubts instantly, Opus AI is made up of Gemini AI, Google artificial intelligence.
                </p>
            </div>
            <div className="">
                <Image className="drop-shadow-[0px_0px_7px_#151515]" src={'/opus-screen.png'} height={720} width={960} alt="Opus Screen"/>
            </div>
           <div className="flex gap-x-2 left-20 bottom-0 absolute">
                <Image src={'/mouse.svg'} height={20} width={20} alt="Mouse icon"/>
                <p className="text-lg text-white font-light">Scroll</p>
           </div>
        </section>
    )
}