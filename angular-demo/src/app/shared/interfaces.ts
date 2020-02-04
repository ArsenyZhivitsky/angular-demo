export interface User {
    email: string
    password: string
}

export interface AuthrResponse {
    access_token: string
    token_type: string
    expires_in: number
}