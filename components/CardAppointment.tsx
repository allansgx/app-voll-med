import { Text, Avatar, VStack } from 'native-base'
import { Button } from './Button'

interface CardAppointmentProps {
    name: string;
    photo: string;
    specialty: string;
    date?: string;
    wasAttended?: boolean;
    wasAgended?: boolean;
}

export function CardAppointment({
    name,
    photo,
    specialty,
    date,
    wasAgended,
    wasAttended
}: CardAppointmentProps){
    return (
        <VStack
            w='100%'
            bg={wasAttended ? 'blue.100' : 'white'}
            p={5}
            borderRadius='lg'
            shadow={2}
            mb={5}
        >
            <VStack flexDir='row'>
                <Avatar
                    size='lg'
                    source={{ uri: photo }}
                />

                <VStack pl={4}>
                    <Text fontSize='md' fontWeight='bold'>{name}</Text>
                    <Text>{specialty}</Text>
                    <Text>{date}</Text>
                </VStack>
            </VStack>

            <Button mt={4}>
                { wasAgended ? 'Cancelar' : 'Agendar consulta' }
            </Button>
        </VStack>
    )
}