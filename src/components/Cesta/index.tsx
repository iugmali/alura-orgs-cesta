import React from 'react';
import {Image, Text, StyleSheet, Dimensions, View} from "react-native";
// @ts-ignore
import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.top} />
      <Text style={styles.title}>Detalhes da Cesta</Text>
      <View style={styles.basket}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <Text style={styles.farmTitle}>Jenny Jack Farm</Text>
        <Text style={styles.description}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para a sua cozinha</Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize:16,
    lineHeight: 26,
    color: "white",
    fontWeight: "700",
    padding: 16
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "700",
  },
  farmTitle: {
    fontSize: 16,
    lineHeight: 26
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: "#2A9F85",
    fontWeight: "700",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
});