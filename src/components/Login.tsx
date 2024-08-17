// "use client";
// import { signIn, useSession } from "next-auth/react"
// import Image from "next/image";

// export default function Login(){
//     const { data : session } = useSession()
//    console.log(session)
//     return(
//         <header>
//       <button className="bg-red-500 text-white py-4 px-8" onClick={()=> signIn()}>Iniciar session</button>
//       {
//         session?.user?(
//             <div>
//                 <Image src={session.user.image} height={40} width={40} alt="User image"/>
//             </div>
//         ):<div>Inicia sesion por favor</div>
//       }
//     </header>
//     )
// }