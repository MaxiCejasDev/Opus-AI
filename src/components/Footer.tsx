export default function Footer(){
    return(
        <footer className="px-20 bg-black pt-20">
            <div className="grid grid-cols-3 h-fit w-full">
            <div className="">
                <h3 className="text-grey font-light text-base">Navigation</h3>
                <ul className="text-white font-normal text-base">
                    <li>Home</li>
                    <li>About</li>
                    <li>How to use</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex justify-center">
                <div>
                    <h3 className="text-grey font-light text-base">Funcionality</h3>
                    <ul className="text-white font-normal text-base">
                        <li>Login</li>
                        <li>Chat</li>
                    </ul>
                </div>
                
            </div>
            <div className="flex justify-end">
                <div>
                    <h3 className="text-grey font-light text-base">Social media</h3>
                    <ul className="text-white font-normal text-base">
                        <li>Linkedin</li>
                        <li>TikTok</li>
                        <li>Behance</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                
            </div>
            </div>

            <div className="col-span-full flex justify-center items-center py-5">
                <p className="text-neutral-500 font-light text-sm">Page designed and developed by Maximiliano Cejas | maxicejas12354@gmail.com</p>
            </div>
        </footer>
    )
}