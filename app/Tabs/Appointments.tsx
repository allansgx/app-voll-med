import { Button } from '@/components/Button'
import { CardAppointment } from '@/components/CardAppointment'
import { Title } from '@/components/Title'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { Divider, ScrollView, useToast } from 'native-base'
import { useEffect, useState } from 'react'
import { getConsultasPaciente } from '../services/PacienteService'
import { useIsFocused } from '@react-navigation/native'
import { cancelAppointment } from '../services/ConsultaService'

interface Especialista {
    id: string;
    nome: string;
    imagem: string;
    especialidade: string;
}

interface Appointment {
    id: string;
    data: string;
    especialista: Especialista;
}

export default function Appointments({ navigation }: any) {
    const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([])
    const [previousAppointments, setPreviousAppointments] = useState<Appointment[]>([])
    const [recarregar, setRecarregar] = useState(false)
    const toast = useToast()
    const isFocused = useIsFocused()

    async function cancel(consultaId: string) {
        await cancelAppointment(consultaId)
            .then(() => {
                toast.show({
                    title: 'Consulta cancelada com sucesso',
                    backgroundColor: 'green.500'
                })
                setRecarregar(!recarregar)
            })
            .catch(() => {
                toast.show({
                    title: 'Erro ao cancelar consulta',
                    backgroundColor: 'red.500'
                })
            })
    }

    useEffect(() => {
        async function getAppointments() {
            const asyncStorage = useAsyncStorage('pacienteId')
            const pacienteId = await asyncStorage.getItem()
            if (!pacienteId) return

            const allAppointments: Appointment[] = await getConsultasPaciente(pacienteId)
            const now = new Date()

            const next = allAppointments?.filter((appointment) => {
                return new Date(appointment.data) > now
            })
            const previous = allAppointments?.filter((appointment) => {
                return new Date(appointment.data) <= now
            })

            setUpcomingAppointments(next)
            setPreviousAppointments(previous)
        }
        getAppointments()
    }, [isFocused, recarregar])

    return (
        <ScrollView p={5}>
            <Title color='blue.500'>Minhas consultas</Title>
            <Button mt={5} mb={5}>Agendar nova consulta</Button>

            <Title color='blue.500' textAlign='left' fontSize='lg' mb={2}>
                Próximas consultas
            </Title>
            {upcomingAppointments?.map((appointment) => (
                <CardAppointment
                    key={appointment.id}
                    name={appointment?.especialista.nome}
                    specialty={appointment?.especialista?.especialidade}
                    photo={appointment?.especialista?.imagem}
                    date={appointment?.data}
                    wasAgended
                    onPress={() => cancel(appointment.id)}
                />
            ))}

            <Divider mt={5} />

            <Title color='blue.500' textAlign='left' fontSize='lg' mb={2}>
                Consultas passadas
            </Title>
            {previousAppointments?.map((appointment) => (
                <CardAppointment
                    key={appointment.id}
                    name={appointment?.especialista.nome}
                    specialty={appointment?.especialista?.especialidade}
                    photo={appointment?.especialista?.imagem}
                    date={appointment?.data}
                    wasAttended
                    onPress={() => navigation.navigate('Scheduling', {
                        especialistaId: appointment.especialista.id
                    })}
                />
            ))}
        </ScrollView>
    )
}