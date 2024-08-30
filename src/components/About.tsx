import Image from "next/image";

export default function About(){
    return(
        <section className="about relative h-fit w-full flex flex-col items-center bg-black overflow-hidden py-20 pt-40 px-4 md:px-[160px]" id="about">
            <div className="flex flex-col items-start w-full">
                <h2 className="gradient-title">About</h2> 
                <p className="text-white font-normal text-lg md:text-2xl z-30">Opus AI is a chat with built-inartificial intelligence, 
                        where you can solve all your doubts.
                </p>
            </div>
            <div className="bg-black-secondary-light w-full h-72 md:h-[400px] mt-5 rounded-[30px] grid grid-cols-2 grid-rows-1">
                <div className="text-white text-4xl md:text-7xl flex justify-center items-center font-normal">
                    Solve all <br/>your<br/> doubts
                </div>
                <div>

                </div>
            </div>
                
           
        </section>
    )
}