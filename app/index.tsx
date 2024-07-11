import 'react-native-reanimated';
import { THEMES } from '@/styles/themes';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Routes from './services/Routes';

export default function App() {
  return (
      <NativeBaseProvider theme={THEMES}>
        <StatusBar backgroundColor={THEMES.colors.blue[800]} />
        <Routes />
      </NativeBaseProvider>
  );
}
