import Image from "next/image";


export default function HowUse(){
    return(
        <section className="bg-black h-fit w-full px-4 py-20 md:p-20" id="how-use">
            <div className="grid grid-cols-2 h-screen overflow-hidden">
                <div className="pt-36">
                    <h3 className="text-white text-2xl font-semibold">Sign in with your Gmail account.</h3>
                    <p className="text-white text-base font-normal">Choose your Gmail account that you normally use and log in.</p>
                    <div className="h-[300px] mt-10 flex">
                        <div className="w-[24px] flex flex-col items-center  pb-20 pt-4">
                            <div className="rounded-full size-6 min-h-6 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#251A68]">
                                <div className="bg-[#654EEA] rounded-full size-4 flex items-center justify-center">
                                    <Image src={'/go.svg'} height={8} width={8} alt="Go icon"/>
                                </div>
                            </div>
                            <div className="w-[1px] h-full bg-[#251A68]"></div>
                            <div className="rounded-full size-6 min-h-6 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#251A68]">
                                <div className="bg-[#654EEA] rounded-full size-4 flex items-center justify-center">
                                    <Image src={'/sign-in.svg'} height={8} width={8} alt="Sign in icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between pb-16 pl-2">
                            <div className="py-4 px-8 shadow-[0px_0px_6px_#9747FF] rounded-xl text-center">
                                <p className="text-base font-normal text-grey">Go to the chat section.</p>
                            </div>
                            <div className="py-4 px-8 shadow-[0px_0px_6px_#9747FF] rounded-xl text-center">
                            <p className="text-base font-normal text-grey">Press the sign in with google button.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Image src={'/login.svg'} height={465} width={620} alt="Opus login"/>
                </div>
            </div>
            <div className="grid grid-cols-2 h-screen overflow-hidden">
                <div className="pt-36">
                    <h3 className="text-white text-2xl font-semibold">Write your question or query to Opus AI</h3>
                    <p className="text-white text-base font-normal">Tell Opus AI your question and send it.</p>
                    <div className="h-[300px] mt-10 flex">
                    <div className="w-[24px] flex flex-col items-center  pb-20 pt-4">
                            <div className="rounded-full size-6 min-h-6 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#002F32]">
                                <div className="bg-[#005B6A] rounded-full size-4 flex items-center justify-center">
                                    <Image src={'/write.svg'} height={8} width={8} alt="Go icon"/>
                                </div>
                            </div>
                            <div className="w-[1px] h-full bg-[#002F32]"></div>
                            <div className="rounded-full size-6 min-h-6 overflow-hidden flex items-center justify-center bg-transparent border-[1px] border-[#002F32]">
                                <div className="bg-[#005B6A] rounded-full size-4 flex items-center justify-center">
                                    <Image src={'/send.svg'} height={8} width={8} alt="Sign in icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between pb-16 pl-2">
                            <div className="py-4 px-8 shadow-[0px_0px_6px_#005B6A] rounded-xl text-center">
                                <p className="text-base font-normal text-grey">Write your question in the text entry.</p>
                            </div>
                            <div className="py-4 px-8 shadow-[0px_0px_6px_#005B6A] rounded-xl text-center">
                            <p className="text-base font-normal text-grey">Send your question and Opus AI will do the rest.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Image src={'/chat.svg'} height={465} width={620} alt="Opus chat"/>
                </div>
            </div>

        </section>
    )
}