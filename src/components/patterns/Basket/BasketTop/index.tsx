import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";
import top from "../../../../assets/topo.png";
import Text from "../../../Text";
import {BasketTopProps} from "../../../../types/basket";

const width = Dimensions.get('screen').width;

export default function BasketTop({title}: BasketTopProps) {
  return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>{title}</Text>
  </>
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
    fontWeight: "bold",
    padding: 32
  },
});