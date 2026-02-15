import API from "@/shared/api/axios"
import type { LoginPayload } from "./auth.types"


export default {

    login: async (credentials: LoginPayload) => {

        let result = await API.post("/auth/login", credentials, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        // console.log(result)
        const { data } = result
        return data
    }

}
