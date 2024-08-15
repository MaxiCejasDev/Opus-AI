import Link from "next/link";

export function NavBar(){
    return(
        <nav className="h-[80px] w-full relative z-30 text-white grid grid-cols-3 px-[80px]">
            <div></div>
            <div className="flex items-center justify-center">
                <ul className="font-regular text-sm flex justify-center items-center gap-x-6">
                    <li>About</li>
                    <li>How to use</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex items-center justify-end">
                <Link href={'/login'} className="w-[120px] text-base flex items-center justify-center font-medium h-[40px] rounded-[12px] border-[1px] border-black-border bg-gradient-to-r from-black-primary-bold via-black-secondary-bold to-black-primary-bold">Sign in</Link>
                
            </div>
        </nav>
    )
}