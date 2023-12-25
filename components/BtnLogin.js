import { useSession,signIn,signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function BtnLogin(){
    const {data: session, status} = useSession()
    const router = useRouter()
    
    if (status === "loading"){
        return <span>Loading...</span>
    }

    if (status !== 'loading' && status=== 'authenticated'){
        //router.push('/dashboard')
        return(
            <div>
            Signed in as {session.user.email} <br/>
            <button className='text-red-600'onClick={()=>signOut()}>Sign Out</button>
            
            </div>
        )
    }

    return(
        
        <div>
        Not Signed in <br/>
        <button className='text-red-600 w-8 h-8'onClick={()=>signIn()}>Sign In</button>
        </div>
    )
}