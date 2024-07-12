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