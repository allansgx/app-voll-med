import api from "./api";

export async function scheduleAppointment(
    data: Date,
    especialistaId: string,
    pacienteId: string
) {
    try {
        const response = await api.post('/consulta', {
            especialista: especialistaId,
            paciente: pacienteId,
            data: data,
            desejaLembrete: false,
            lembretes: []
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export async function cancelAppointment(consultaId: string) {
    try {
        const response = await api.delete(`/consulta/${consultaId}`)
        return response.data
    } catch (error) {
        throw error
    }
}
