import React, { useState } from "react"
import type { LoginPayload } from "../auth.types"
import AuthService from "../auth.api"

const useLoginHook = (credentials: LoginPayload) => {

    const [user, setUser] = useState(null)
    const [isLoading, setloading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const result = AuthService.login(credentials)
    console.log(result)


    return {
        user, isLoading, error
    }
}
export default useLoginHook