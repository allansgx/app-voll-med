import { Button } from '@/components/Button'
import { CardAppointment } from '@/components/CardAppointment'
import { InputText } from '@/components/InputText'
import { Title } from '@/components/Title'
import { ScrollView, Divider, VStack } from 'native-base'
import { useState } from 'react'
import { getEspecialistaByEstado } from '../services/EspecialistaService'

interface Especialista {
    nome: string;
    imagem: string;
    especialidade: string;
    id: string;
}

export default function Explore({ navigation }: any) {
    const [estado, setEstado] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [responseSearch, setResponseSearch] = useState([])

    async function fetchEspecialistas() {
        await getEspecialistaByEstado(estado, especialidade)
            .then((data) => setResponseSearch(data))
    }

    return (
        <ScrollView p={5}>
            <VStack shadow={2} p={5} bgColor='white' borderRadius={5}>
                <InputText
                    placeholder='Digite sua especialidade'
                    value={especialidade}
                    onChangeText={setEspecialidade}
                />
                <InputText
                    placeholder='Digite sua localização'
                    value={estado}
                    onChangeText={setEstado}
                />
                <Button mt={5} onPress={fetchEspecialistas}>
                    Buscar
                </Button>
            </VStack>

            <Divider mt={5} />

            <Title color='blue.500' mb={5}>Resultados da busca</Title>
            {
                responseSearch?.map((especialista: Especialista, index) => (
                    <CardAppointment
                        key={index}
                        name={especialista.nome}
                        specialty={especialista.especialidade}
                        photo={especialista.imagem}
                        onPress={() => navigation.navigate('Scheduling', {
                            especialistaId: especialista.id
                        })}
                    />
                ))
            }
        </ScrollView>
    )
}