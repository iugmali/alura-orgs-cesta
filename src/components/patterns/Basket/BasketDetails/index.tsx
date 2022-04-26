import React from "react";
import Text from "../../Text";
import {Image, StyleSheet, View} from "react-native";
import basket from "../../../mocks/basket";

export default function BasketDetails() {
  return <>
    <Text style={styles.name}>{basket.basketDetails.name}</Text>
    <View style={styles.farm}>
      <Image source={basket.basketDetails.farmLogo} style={styles.farmImage} />
      <Text style={styles.farmTitle}>{basket.basketDetails.farmTitle}</Text>
    </View>
    <Text style={styles.description}>{basket.basketDetails.description}</Text>
    <Text style={styles.price}>{basket.basketDetails.price}</Text>
  </>
}

const styles = StyleSheet.create({
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