import { Image, VStack, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/Logo.png'
import { Title } from '@/components/Title';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { doLogin } from '../services/AuthService';
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'

interface LoginProps {
  navigation: NavigationProp<ParamListBase>
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()
  const asyncStorage = useAsyncStorage('token')

  async function login() {
    await doLogin(email, senha)
      .then((response) => {
        const { token } = response
        asyncStorage.setItem(token)

        const tokenDecoded = jwtDecode(token) as any
        const patientId = tokenDecoded.id
        asyncStorage.setItem(patientId)
        navigation.navigate('Tabs')
      })
      .catch((error) => {
        toast.show({
          title: 'Erro no login',
          description: 'O e-mail ou senha não conferem',
          backgroundColor: 'red.500'
        })
      })
  }

  useEffect(() => {
    async function checkLogin() {
      const token = await asyncStorage.getItem()

      if (token) {
        navigation.navigate('Tabs')
      }

      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
    checkLogin()
  }, [])

  if (loading) {
    return null
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent='center'
      p={5}
    >
      <Image source={Logo} alt='Logo Voll'/>

      <Title>
        Faça login em sua conta
      </Title>

      <Box>
        <InputText
          label='E-mail'
          placeholder='Insira seu endereço de e-mail'
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label='Senha'
          placeholder='Insira sua senha'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>

      <Button onPress={login}>
        Entrar
      </Button>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box
        w='100%'
        flexDirection='row'
        justifyContent='center'
        mt={8}
      >
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color='blue.500'>
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}