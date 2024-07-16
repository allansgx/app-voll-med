import api from "./api";

export async function getEspecialistaByEstado(estado: string, especialidade: string) {
    try {
        const response = await api.get('/especialista/busca', {
            params: {
                estado,
                especialidade
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}