import { getServerSession } from "next-auth"
import { getSession, useSession } from "next-auth/react"

export default async  function Globals() {
    const session = getServerSession()
    if (session) {
        console.log(session)  
        return (
            <h3>Globals</h3>
        )
    }
}