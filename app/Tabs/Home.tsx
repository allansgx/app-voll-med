import { Button } from '@/components/Button'
import { InputText } from '@/components/InputText'
import { Title } from '@/components/Title'
import { VStack, Text, ScrollView, Divider, Image, Box } from 'native-base'
import Logo from '../../assets/images/Logo.png'
import { depositions } from '../utils/mock'

export default function Home() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} p={5}>
                <Image source={Logo} alt='Logo Voll' />

                <Title color='blue.500' textAlign='left' mb={5}>
                    Boas-vindas!
                </Title>

                <VStack shadow={2} p={5} bgColor='white' borderRadius={5}>
                    <InputText placeholder='Digite sua especialidade' />
                    <InputText placeholder='Digite sua localização' />
                    <Button mt={5}>Buscar</Button>
                </VStack>

                <Title color='blue.800' mb={5}>
                    Depoimentos
                </Title>
                {
                    depositions.map((deposition) => (
                        <Box key={deposition.id}>
                            <Text color='gray.500' mb={5}>
                                {deposition.description}
                            </Text>
                            <Text color='gray.800' textAlign='center' fontWeight='bold'>
                                {deposition.responsible}
                            </Text>
                            <Divider mt={3} mb={8} />
                        </Box>
                    ))
                }
            </VStack>
        </ScrollView>
    )
}