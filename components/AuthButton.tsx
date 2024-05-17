"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
    const {data: session} = useSession()

    if (session) {
        return (
            <div>
                <p>{session?.user?.accessToken}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } 
    return (
        <Link href="/login">Login</Link>
    )
}