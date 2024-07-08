import 'react-native-reanimated';
import { THEMES } from '@/styles/themes';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Routes from './services/Routes';
import { useEffect } from 'react';
import api from './services/api';

export default function App() {

  useEffect(() => {
      async function fetchData() {
        const response = await api.get('/paciente')
        console.log(response.data);
        console.log('ok');
        
      }
      fetchData()
  }, [])

  return (
      <NativeBaseProvider theme={THEMES}>
        <StatusBar backgroundColor={THEMES.colors.blue[800]} />
        <Routes />
      </NativeBaseProvider>
  );
}
