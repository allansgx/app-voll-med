import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Title } from '@/components/Title'

export default function Profile() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Title color='blue.500'>Meu Perfil</Title>

                <Avatar
                    size='xl'
                    source={{ uri: "https://github.com/allansgx.png" }}
                    mt={5}
                />

                <Title color='blue.500'>Informações pessoais</Title>
                <Title fontSize='lg' mb={1}>Allan Gomes</Title>
                <Text>26/12</Text>
                <Text>Santa Catarina, Brasil</Text>

                <Divider mt={5} />

                <Title color='blue.500' mb={1}>Histórico médico</Title>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}