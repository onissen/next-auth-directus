"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Cookies from "js-cookie";

function handleLogout() {
    signOut()
    Cookies.remove('directus-token')
}

export default function AuthButton() {
    const {data: session} = useSession()

    if (session) {
        return (
            <div>
                <button onClick={() => handleLogout()}>Sign Out</button>
            </div>
        )
    } 
    return (
        <Link href="/login">Login</Link>
    )
}