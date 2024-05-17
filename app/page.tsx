// import directus from "@/lib/directus"
// import { readItems, withToken } from "@directus/sdk"
import AuthButton from "@/components/AuthButton";
import { TokenProvider } from "@/components/TokenProvider";
import Globals from "@/components/globals";





export default async function HomePage() {
    const token = TokenProvider()
    return (
        <>
            <Globals />
            <AuthButton />
        </>
    )
}