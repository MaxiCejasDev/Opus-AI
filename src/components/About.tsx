import Image from "next/image";

export default function About(){
    return(
        <section className="about relative h-fit w-full flex flex-col  md:grid md:grid-cols-2 bg-black overflow-hidden py-20 pt-40" id="about">
            <div className="md:pl-20 pt-16 px-4">
                <p className="gradient-title text-xs md:text-base font-semibold">About</p>
                <h2 className="text-white font-semibold text-base md:text-4xl 2xl:text-6xl">
                Opus AI is a chat with built-in artificial intelligence
                </h2>
                <p className="text-white font-light text-base md:text-lg 2xl:text-2xl mt-2 2xl:mt-5">
                You will be able to resolve all your doubts instantly, Opus AI is made up of Gemini AI, Google artificial intelligence.
                </p>
            </div>
            <div className="pl-4 ">
                <Image className="size-full md:size- 2xl:size-full drop-shadow-[0px_0px_7px_#101010]" src={'/opus-screen.png'} height={720} width={960} alt="Opus Screen"/>
            </div>
           <div className="flex gap-x-2 w-20 left-[calc(50%-40px)] md:left-20 bottom-0 absolute">
                <Image src={'/mouse.svg'} height={20} width={20} alt="Mouse icon"/>
                <p className="text-lg text-white font-light">Scroll</p>
           </div>
        </section>
    )
}