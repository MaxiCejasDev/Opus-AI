import Link from "next/link";

export default function Footer(){
    return(
        <footer className="px-4 md:px-20 bg-black pt-20">
            <div className="grid grid-cols-3 h-fit w-full">
            <div className="">
                <h3 className="text-grey font-light text-sm sm:text-base">Navigation</h3>
                <ul className="text-white font-normal text-sm sm:text-base">
                    <Link href={'/'}>Home</Link>
                    <Link href={'#about'}>About</Link>
                    <Link href={'#how-use'}>How to use</Link>
                    <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'}>Contact</Link>
                </ul>
            </div>
            <div className="flex justify-center">
                <div>
                    <h3 className="text-grey font-light text-sm sm:text-base">Funcionality</h3>
                    <ul className="text-white font-normal text-sm sm:text-base">
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/login'}>Chat</Link>
                    </ul>
                </div>
                
            </div>
            <div className="flex justify-end">
                <div>
                    <h3 className="text-grey font-light text-sm sm:text-base">Social media</h3>
                    <ul className="text-white font-normal text-sm sm:text-base">
                        <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'}>Linkedin</Link>
                        <Link href={'/'}>TikTok</Link>
                        <Link href={'https://www.behance.net/maxicejas2'}>Behance</Link>
                        <Link href={''}>Instagram</Link>
                    </ul>
                </div>
                
            </div>
            </div>

            <div className="col-span-full flex justify-center items-center py-5">
                <p className="text-neutral-500 font-light text-[8px] sm:text-sm">Page designed and developed by Maximiliano Cejas | maxicejas12354@gmail.com</p>
            </div>
        </footer>
    )
}