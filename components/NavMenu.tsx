"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
    const {data: session} = useSession()

    if (session) {
        console.log(session)
        return (
            <div>
                <p>Username</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } 
    return (
        <Link href="/login">Login</Link>
    )
}