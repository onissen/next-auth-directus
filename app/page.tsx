import directus from "@/lib/directus"
import { readItems, readMe } from "@directus/sdk"
import { getServerSession } from "next-auth"
import  SessionProvider  from "@/components/SessionProvider";
import AuthButton from "@/components/NavMenu";

async function getData() {
    return await directus.request(readMe())
}

export default async function HomePage() {
    const session = await getServerSession();
    const data = await getData()
    console.log(session)
    return (
        <SessionProvider session={session}>
            <AuthButton />
            <h1>Dashboard</h1>
        </SessionProvider>
    )
}