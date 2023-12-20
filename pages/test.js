import Image from "next/image"
import {inter} from 'next/font/google'
import Link from "next/link"


export default function Test(){
    return(
        <>
        <main>
            <h1 className="text-4 text-center">Hola Gabo</h1>
            <Link href='/test2'>Link a test2 </Link>
        </main>
        </>
    )
}