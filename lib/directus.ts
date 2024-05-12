import { authentication, createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(process.env.BACKEND_URL)
    .with(
        authentication(
            "cookie", 
            {credentials: 'include', autoRefresh: true}
        ))
    .with(rest())

export default directus;