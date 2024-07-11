import api from "./api";

export async function doLogin(email: string, senha: string) {
    try {
        const response = await api.post('/auth/login', {
            email,
            senha
        })
        return response.data
    } catch (error) {
        throw error
    }
}