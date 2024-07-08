import { Image, VStack, Box, Checkbox, ScrollView, Text } from 'native-base'
import Logo from '../../assets/images/Logo.png'
import { Title } from '@/components/Title';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { useState } from 'react';
import { sections } from '../utils/RegisterInputText';

export default function Register() {
  const [numSection, setNumSection] = useState(0)

  function nextSection() {
    if (numSection < sections.length-1) {
      setNumSection(numSection + 1)
    }
  }

  function backSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1)
    }
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
              />
            )
          })
        }
      </Box>

      <Box>
        <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>
          Selecione os planos:
        </Text>
        {
          sections[numSection]?.checkbox && sections[numSection].checkbox.map((item) => {
            return (
              <Checkbox
                key={item.id}
                value={item.value}
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
        Avançar
      </Button>
    </ScrollView>
  );
}