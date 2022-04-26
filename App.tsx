import {View, Platform, StyleSheet} from 'react-native';
import StatusBar from "./src/components/StatusBar";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import BasketScreen from "./src/screens/BasketScreen";
import React from "react";

export default function App() {
  const [loadedFont] = useFonts({
    "Montserrat400": Montserrat_400Regular,
    "Montserrat700": Montserrat_700Bold,
  });
  if (!loadedFont) {
    return <View />
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      {/*<View style={styles.appBar} />*/}
      <BasketScreen />
    </View>
  );
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
});