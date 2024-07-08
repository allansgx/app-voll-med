import { Button } from '@/components/Button'
import { CardAppointment } from '@/components/CardAppointment'
import { InputText } from '@/components/InputText'
import { Title } from '@/components/Title'
import { ScrollView, Divider, VStack } from 'native-base'
import { appointments } from '../utils/mock'

export default function Explore() {
    return (
        <ScrollView p={5}>
            <VStack shadow={2} p={5} bgColor='white' borderRadius={5}>
                <InputText placeholder='Digite sua especialidade' />
                <InputText placeholder='Digite sua localização' />
                <Button mt={5}>Buscar</Button>
            </VStack>

            <Divider mt={5} />

            <Title color='blue.500' mb={5}>Resultados da busca</Title>
            {
                appointments.map(appointment => (
                    <CardAppointment
                        key={appointment.id}
                        name={appointment.name}
                        specialty={appointment.specialty}
                        photo={appointment.photo}
                        date={appointment.date}
                    />
                ))
            }
        </ScrollView>
    )
}