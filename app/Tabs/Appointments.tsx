import { Button } from '@/components/Button'
import { CardAppointment } from '@/components/CardAppointment'
import { Title } from '@/components/Title'
import { Divider, ScrollView } from 'native-base'

export default function Appointments() {
    return (
        <ScrollView p={5}>
            <Title color='blue.500'>Minhas consultas</Title>
            <Button mt={5} mb={5}>Agendar nova consulta</Button>

            <Title color='blue.500' textAlign='left' fontSize='lg' mb={2}>
                Próximas consultas
            </Title>
            <CardAppointment
                name='Dr. André'
                specialty='Cardiologista'
                photo='https://github.com/allansgx.png'
                date='06/07/2024'
                wasAgended
            />

            <Divider mt={5} />

            <Title color='blue.500' textAlign='left' fontSize='lg' mb={2}>
                Consultas passadas
            </Title>
            <CardAppointment
                name='Dr. André'
                specialty='Cardiologista'
                photo='https://github.com/allansgx.png'
                date='06/07/2024'
                wasAttended
            />
            <CardAppointment
                name='Dr. André'
                specialty='Cardiologista'
                photo='https://github.com/allansgx.png'
                date='06/07/2024'
                wasAttended
            />
            <CardAppointment
                name='Dr. André'
                specialty='Cardiologista'
                photo='https://github.com/allansgx.png'
                date='06/07/2024'
                wasAttended
            />
        </ScrollView>
    )
}