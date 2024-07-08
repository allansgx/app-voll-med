import { Image, VStack, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/Logo.png'
import { Title } from '@/components/Title';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<ParamListBase>
}

export default function Login({ navigation }: LoginProps) {
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
        />
        <InputText
          label='Senha'
          placeholder='Insira sua senha'
        />
      </Box>

      <Button onPress={() => navigation.navigate('Tabs')}>
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