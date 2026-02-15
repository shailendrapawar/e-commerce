import { create } from "zustand"

import type { AuthState } from "../auth.types"

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isAdmin: false,

    authLogin: (user, accessToken, refreshToken, loginAsAdmin) => {

        set({
            user,
            accessToken: accessToken,
            refreshToken: refreshToken,
            isAuthenticated: true,
            isAdmin: loginAsAdmin
        })
    },

    authLogout: () => {
        set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isAdmin: false
        })
    }
}))