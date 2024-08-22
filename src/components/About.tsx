import Image from "next/image";

export default function About(){
    return(
        <section className="about relative h-screen w-full bg-black overflow-hidden">
            <div className="h-full w-full flex justify-center items-center">
                <div className="z-30 max-w-[28rem]">
                    <h2 className="about-title">About</h2> 
                    <p className="text-white font-normal text-2xl z-30">Opus AI <span className="text-grey">is a chat with built-in</span> artificial intelligence, <span className="text-grey">where you can solve all your doubts.</span></p>
                </div>
                
            </div>
            <div className="h-full w-full absolute top-0 left-0 about-noise z-10"></div>
            <Image className="absolute top-48 left-0  object-cover" src={'/diamond-1.svg'} height={350} width={700} alt="Diamond Gradient"/>
            <Image className="absolute top-40 right-0 object-cover" src={'/diamond-2.svg'} height={350} width={700} alt="Diamond Gradient"/>
            <Image className="absolute top-[calc(50%-300px)] left-[calc(50%-513px)]" src={'/two-circles.svg'} height={600} width={1026} alt="Two Circles"/>
        </section>
    )
}