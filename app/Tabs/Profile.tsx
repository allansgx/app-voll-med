import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Title } from '@/components/Title'
import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { getDataPaciente } from '../services/PacienteService'
import { Paciente } from '../interfaces/Paciente'
import { Button } from '@/components/Button'

export default function Profile({ navigation }: any) {
    const [paciente, setPaciente] = useState({} as Paciente)
    const asyncStoragePacienteId = useAsyncStorage('pacienteId')
    const asyncStorageToken = useAsyncStorage('token')

    function deslogar() {
        asyncStoragePacienteId.removeItem()
        asyncStorageToken.removeItem()
        navigation.replace('Login')
    }

    useEffect(() => {
        async function fetchDadosPaciente() {
            const pacienteId = await asyncStoragePacienteId.getItem()
            if (!pacienteId) return null

            await getDataPaciente(pacienteId)
                .then((data) => setPaciente(data))
        }
        fetchDadosPaciente()
    }, [])

    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Title color='blue.500'>Meu Perfil</Title>

                <Avatar
                    size='xl'
                    source={{ uri: paciente?.imagem }}
                    mt={5}
                />

                <Title color='blue.500'>Informações pessoais</Title>
                <Title fontSize='lg' mb={1}>{paciente?.nome}</Title>
                <Text>{paciente?.email}</Text>
                <Text>{paciente?.endereco?.estado}</Text>

                <Divider mt={5} />

                <Title color='blue.500' mb={1}>Planos de saúde</Title>
                {
                    paciente?.planosSaude?.map((plano, index) => (
                        <Text key={index}>{plano}</Text>
                    ))
                }

                <Button onPress={deslogar}>
                    Logout
                </Button>
            </VStack>
        </ScrollView>
    )
}