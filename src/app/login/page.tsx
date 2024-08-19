import LoginForm from "@/components/LoginForm";


export default function Login(){
   
    return(
        <div className="text-white h-screen w-full bg-black flex flex-col items-center pt-16">
            <h2 className="font-semibold text-xl">Welcome to Opus AI</h2>
            <LoginForm/>
            
        </div>
    )
}