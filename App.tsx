import { StatusBar, SafeAreaView, Text } from 'react-native';
import CestaScreen from "./src/screens/CestaScreen";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <CestaScreen />
    </SafeAreaView>
  );
}
