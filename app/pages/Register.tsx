import { Image, Box, Checkbox, ScrollView, Text, useToast } from 'native-base'
import Logo from '../../assets/images/Logo.png'
import { Title } from '@/components/Title';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { useState } from 'react';
import { sections } from '../utils/RegisterInputText';
import { registerPaciente } from '../services/PacienteService';

export default function Register({ navigation }: any) {
  const [numSection, setNumSection] = useState(0)
  const [data, setData] = useState({} as any)
  const [plans, setPlans] = useState([] as number[])
  const toast = useToast()

  function nextSection() {
    if (numSection < sections.length-1) {
      setNumSection(numSection + 1)
      return
    }

    register()
  }

  function backSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1)
    }
  }

  function updateData(id: string, value: string) {
    setData({...data, [id]: value})
  }

  async function register() {
    await registerPaciente({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        estado: data.estado,
        complemento: data.complemento,
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: plans.length > 0,
      planosSaude: plans,
      imagem: data.imagem
    })
      .then(() => {
        toast.show({
          title: 'Cadastro realizado com sucesso',
          description: 'Você já pode fazer login',
          backgroundColor: 'green.500'
        })
        navigation.replace('Login')
      })
      .catch(() => {
        toast.show({
          title: 'Erro ao cadastrar',
          description: 'Verifique os dados e tente novamente',
          backgroundColor: 'red.500'
        })
      })
  }

  return (
    <ScrollView
      flex={1}
      p={5}
    >
      <Image source={Logo} alt='Logo Voll' alignSelf='center' />

      <Title>
        { sections[numSection].title }
      </Title>

      <Box>
        {
          sections[numSection].inputs.map((item) => {
            return (
              <InputText
                key={item.id}
                label={item.label}
                placeholder={item.placeholder}
                secureTextEntry={item?.secureTextEntry}
                value={data[item.name]}
                onChangeText={(text) => updateData(item.name, text)}
              />
            )
          })
        }
      </Box>

      <Box>
        {
          numSection === 2 && (
            <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>
              Selecione os planos:
            </Text>
          )
        }
        {
          sections[numSection]?.checkbox && sections[numSection].checkbox.map((item) => {
            return (
              <Checkbox
                key={item.id}
                value={item.value}
                onChange={() => {
                  setPlans((prevPlans) => {
                    if (prevPlans.includes(item.id)) {
                      return prevPlans.filter((id) => id !== item.id)
                    }

                    return [...prevPlans, item.id]
                  })
                }}
                isChecked={plans.includes(item.id)}
              >
                {item.value}
              </Checkbox>
            )
          })
        }
      </Box>

      { numSection > 0 && (
        <Button onPress={() => backSection()} bgColor='gray.400'>
          Voltar
        </Button>
      )}
      <Button onPress={() => nextSection()} mt={4} mb={20}>
        {numSection === 2 ? 'Finalizar' : 'Avançar'}
      </Button>
    </ScrollView>
  );
}