import React from 'react';
import { StyleSheet, View } from "react-native";
import BasketTop from "./BasketTop";
import BasketDetails from "./BasketDetails";
import { BasketProps } from "../../../types/basket";

export default function Basket({basketTop, basketDetails}:BasketProps) {
  return (
    <>
      <BasketTop {...basketTop} />
      <View style={styles.basket}>
        <BasketDetails {...basketDetails} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});