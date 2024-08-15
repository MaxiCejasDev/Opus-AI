import Image from "next/image";

export default function Chat(){
    return(
        <section className="bg-black h-screen w-full flex">
            <div className="w-[260px] bg-red-500 h-full"></div>
            <div className="w-[calc(100%-260px)] h-full">
                <div className="h-[calc(100%-80px)] bg-yellow-300 w-full"></div>
                <div className="w-5/6 h-[80px] bg-black-primary-light border-[1px] border-black-secondary-light rounded-[12px] flex px-6 py-4 items-center">
                <input className="bg-blue-500 w-full h-full" type="text"/>
                    <button className="rounded-full h-[50px] w-[50px] bg-black flex justify-center items-center">
                        <Image src={'/chat-arrow.svg'} height={30} width={30} alt="Arrow-icon"/>
                    </button>
                </div>
            </div>
        </section>
    )
}