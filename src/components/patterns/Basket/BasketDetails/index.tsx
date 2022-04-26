import React from "react";
import Text from "../../../Text";
import {TouchableOpacity, Image, StyleSheet, View} from "react-native";
import {BasketDetailsProps} from "../../../../types/basket";

export default function BasketDetails({name, farmLogo, farmTitle, description, price, button}:BasketDetailsProps) {
  return <>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.farm}>
      <Image source={farmLogo} style={styles.farmImage} />
      <Text style={styles.farmTitle}>{farmTitle}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>{price}</Text>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>{button}</Text></TouchableOpacity>
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
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
});