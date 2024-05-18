import directus from "@/lib/directus"
import { readItems, withToken } from "@directus/sdk"
import AuthButton from "@/components/AuthButton";
import Cookies from "js-cookie";

async function getData() {
    const barertoken = Cookies.get('directus-token')
    return await directus.request(withToken(barertoken,readItems('global')))
}

export default async function HomePage() {
    const data = await getData()
    if (data) {
        return (
            <>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <AuthButton />
            </>
        )
    }
}