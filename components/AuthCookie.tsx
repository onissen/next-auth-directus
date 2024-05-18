"use client"
import { useSession } from "next-auth/react";
import  Cookies  from "js-cookie";

export default function AuthCookie({children,}: {children: React.ReactNode}) {
    const {data: session} = useSession()
    if (session && session?.user) {        
        Cookies.set('directus-token', session?.user?.accessToken)
    }
    return (
        <div>
            {children}
        </div>
    )
}