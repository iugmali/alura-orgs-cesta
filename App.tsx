import {StatusBar, SafeAreaView, Text, View} from 'react-native';
import CestaScreen from "./src/screens/BasketScreen";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import BasketScreen from "./src/screens/BasketScreen";

export default function App() {
  const [loadedFont] = useFonts({
    "Montserrat400": Montserrat_400Regular,
    "Montserrat700": Montserrat_700Bold,
  });
  if (!loadedFont) {
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <BasketScreen />
    </SafeAreaView>
  );
}
