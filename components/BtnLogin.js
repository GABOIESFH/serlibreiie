import { useSession,signIn,signOut } from "next-auth/react";
import { redirect } from "next/navigation";



export default function BtnLogin(){
    const {data: session, status} = useSession()
 
    
    if (status === "loading"){
        return <span>Loading...</span>
    }

    if (session){
        return(
            <div>
            Signed in as {session.user.name} <br/>
            <button className='text-red-600'onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</button>
            </div>
        )
    }

    return(
        
        <div>
        Not Signed in <br/>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 sm:w-auto px-5 py-2.5 my-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'onClick={()=>signIn({callbackUrl:'/dashboard'})}>Sign In</button>
        </div>
    )
}