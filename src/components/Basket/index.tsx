import React from 'react';
import {Image, StyleSheet, Dimensions, View} from "react-native";
import Text from "../Text";
import logo from "../../assets/logo.png";
import BasketTop from "./BasketTop";


export default function Basket() {
  return (
    <>
      <BasketTop />
      <View style={styles.basket}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={logo} style={styles.farmImage} />
          <Text style={styles.farmTitle}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para a sua cozinha</Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32
  },
  farmTitle: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
});