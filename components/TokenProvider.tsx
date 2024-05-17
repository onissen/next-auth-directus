"use client"
import { useSession } from "next-auth/react"


export const TokenProvider = () => {
    const {data: session} = useSession()
    const token = session?.user?.accessToken
    return token
}


