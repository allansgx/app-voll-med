import { Input, VStack, useToast } from 'native-base'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '@/components/Button'
import { scheduleAppointment } from '../services/ConsultaService'
import { convertStringToData } from '../utils/conversions'

export default function Scheduling({ route, navigation }: any) {
  const [data, setData] = useState('')
  const toast = useToast()

  async function agendar() {
    const pacienteId = await AsyncStorage.getItem('pacienteId')
    const { especialistaId } = route.params
    if (!pacienteId || !especialistaId || !data) return

    const dataFormatada = convertStringToData(data)
    const resultado = await scheduleAppointment(dataFormatada, especialistaId, pacienteId)
    if (resultado) {
      toast.show({
        title: 'Consulta agendada com sucesso',
        backgroundColor: 'green.500',
      })
      return navigation.goBack()
    }
    toast.show({
      title: 'Erro ao agendar consulta',
      description: 'Horário indisponível',
      backgroundColor: 'red.500',
    })
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Input
        placeholder="Digite a data"
        onChangeText={setData}
      />

      <Button onPress={agendar}>
        Agendar
      </Button>
    </VStack>
  )
}