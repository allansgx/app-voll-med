import { Paciente } from "../interfaces/Paciente";
import api from "./api";

export async function registerPaciente(paciente: Paciente) {
    try {
        const response = await api.post('/paciente', paciente)
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function getDataPaciente(id: string) {
    try {
        const response = await api.get(`/paciente/${id}`)
        return response.data
    } catch (error) {
        throw error;
    }
}