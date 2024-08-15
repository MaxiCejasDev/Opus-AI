import Image from "next/image";

export default function Login(){
    return(
        <div className="text-white h-screen w-full bg-black flex flex-col items-center pt-16">
            <h2 className="font-semibold text-xl">Welcome to Opus AI</h2>
            <form className="flex flex-col gap-y-[20px] mt-16" action="">
                <input className="border-[1px] border-black-border rounded-[12px] bg-transparent text-white w-[450px] h-[60px] pl-5" type="text" placeholder="Email"/>
                <input className="border-[1px] border-black-border rounded-[12px] bg-transparent text-white w-[450px] h-[60px] pl-5" type="text" placeholder="Password"/>
                <button className="w-[450px] h-[60px] font-regular text-lg bg-black-secondary-light hover:bg-black-primary-light  rounded-[12px]" type="submit">Sign in</button>
            </form>
            <div className="relative w-[450px] flex justify-center items-center mt-[40px]">
                <hr className="bg-white opacity-50 w-full absolute"/>
                <p className="bg-black z-10 px-2">Or</p>
                
            </div>
            <div className="mt-5">
                <button className="w-[450px] bg-blue-800 hover:bg-blue-700 rounded-[12px] flex justify-center items-center gap-x-4 h-[60px] font-regular text-base">
                    <Image src={'/google.svg'} height={32} width={32} alt="Google icon"/>
                    Continue with Google
                </button>
            </div>
        </div>
    )
}