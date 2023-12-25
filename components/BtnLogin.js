import { useSession,signIn,signOut } from "next-auth/react";
import { redirect } from "next/navigation";

//aparte de call back se puede utilizar use router
 // const {usuario: session, status}=useSession();
  // const router= useRouter();

  // if(status === loading){
  //   return(
  //     <h1>loading page...</h1>
  //   )
  // }

  // if(status === 'authenticated'){
  //   router.push('/dashboard')
  // }

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
        <button className='text-red-600 w-8 h-8'onClick={()=>signIn({callbackUrl:'/dashboard'})}>Sign In</button>
        </div>
    )
}