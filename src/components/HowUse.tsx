import Image from "next/image";


export default function HowUse(){
    return(
        <section className="bg-black h-fit w-full px-4 md:p-20 pb-20" id="how-use">
            <div className="flex flex-col md:grid md:grid-cols-2 h-fit 2xl:h-screen">
                <div className="pt-36">
                    <h3 className="text-white text-base md:text-2xl 2xl:text-6xl font-semibold">Sign in with your Gmail account.</h3>
                    <p className="text-white text-sm mt-2 2xl:mt-5 font-light md:text-base 2xl:text-2xl md:font-normal">Choose your Gmail account that you normally use and log in.</p>
                    <div className="h-[250px] md:h-[300px] mt-10 flex">
                        <div className="w-[24px] 2xl:w-10 flex flex-col items-center  pb-20 pt-4">
                            <div className="rounded-full size-6 min-h-6 2xl:size-12 2xl:min-h-12 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#251A68]">
                                <div className="bg-[#654EEA] rounded-full size-4 2xl:size-10 flex items-center justify-center">
                                    <Image className="2xl:size-4" src={'/go.svg'} height={8} width={8} alt="Go icon"/>
                                </div>
                            </div>
                            <div className="w-[1px] h-full bg-[#251A68]"></div>
                            <div className="rounded-full size-6 min-h-6 2xl:size-12 2xl:min-h-12 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#251A68]">
                                <div className="bg-[#654EEA] rounded-full size-4 2xl:size-10 flex items-center justify-center">
                                    <Image className="2xl:size-4" src={'/sign-in.svg'} height={8} width={8} alt="Sign in icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between pb-16 pl-2 2xl:pl-5">
                            <div className="py-4 2xl:py-6 px-5 2xl:px-7 shadow-[0px_0px_6px_#9747FF] rounded-xl text-center">
                                <p className="text-xs md:text-base 2xl:text-2xl font-normal text-grey">Go to the chat section.</p>
                            </div>
                            <div className="py-4 2xl:py-6 px-5 2xl:px-7 shadow-[0px_0px_6px_#9747FF] rounded-xl text-center">
                            <p className="text-xs md:text-base 2xl:text-2xl  font-normal text-grey">Press the sign in with google button.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <Image className="size-full object-cover 2xl:min-h-[515px] 2xl:min-w-[670px] 2xl:max-h-[665px] 2xl:max-w-[820] 2xl:object-cover md:size-fit" src={'/login.svg'} height={465} width={620} alt="Opus login"/>
                </div>
            </div>
            <div className="flex flex-col mt-20 md:grid md:grid-cols-2 h-fit 2xl:h-screen">
                <div className="pt-36">
                    <h3 className="text-white text-base md:text-2xl 2xl:text-6xl font-semibold">Write your question or query to Opus AI</h3>
                    <p className="text-white text-sm mt-2 2xl:mt-5 font-light md:text-base 2xl:text-2xl md:font-normal">Tell Opus AI your question and send it.</p>
                    <div className="h-[250px] md:h-[300px] mt-10 flex">
                    <div className="w-[24px] 2xl:w-10 flex flex-col items-center  pb-20 pt-4">
                            <div className="rounded-full size-6 min-h-6 2xl:size-12 2xl:min-h-12 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#002F32]">
                                <div className="bg-[#005B6A] rounded-full size-4 2xl:size-10 flex items-center justify-center">
                                    <Image className="2xl:size-4" src={'/write.svg'} height={8} width={8} alt="Go icon"/>
                                </div>
                            </div>
                            <div className="w-[1px] h-full bg-[#002F32]"></div>
                            <div className="rounded-full size-6 min-h-6 2xl:size-12 2xl:min-h-12 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#002F32]">
                                <div className="bg-[#005B6A] rounded-full size-4 2xl:size-10 flex items-center justify-center">
                                    <Image className="2xl:size-4" src={'/send.svg'} height={8} width={8} alt="Sign in icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between pb-16 pl-2 2xl:pl-5">
                            <div className="py-4 2xl:py-6 px-5 2xl:px-7 shadow-[0px_0px_6px_#005B6A] rounded-xl text-center">
                                <p className="text-xs md:text-base 2xl:text-2xl font-normal text-grey">Write your question in the text entry.</p>
                            </div>
                            <div className="py-4 2xl:py-6 px-5 2xl:px-7 shadow-[0px_0px_6px_#005B6A] rounded-xl text-center">
                            <p className="text-xs md:text-base 2xl:text-2xl font-normal text-grey">Send your question and Opus AI will do the rest.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <Image className="size-full object-cover 2xl:min-h-[515px] 2xl:min-w-[670px] 2xl:max-h-[665px] 2xl:max-w-[820] 2xl:object-cover md:size-fit" src={'/chat.svg'} height={465} width={620} alt="Opus chat"/>
                </div>
            </div>

        </section>
    )
}