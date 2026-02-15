export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    id: string,
    email: string
}
export type AccessToken = string
export type RefreshToken = string


export interface AuthState {
    user: User | null
    accessToken: AccessToken | null
    refreshToken: RefreshToken | null,
    isAuthenticated: boolean,
    isAdmin: boolean

    authLogin: (user: { id: string, email: string },
        accessToken: AccessToken,
        refreshToken: RefreshToken,
        loginAsAdmin: boolean) => void
    authLogout: () => void
}