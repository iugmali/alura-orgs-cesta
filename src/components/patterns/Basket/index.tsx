import React from 'react';
import { StyleSheet, View} from "react-native";
import BasketTop from "./BasketTop";
import BasketDetails from "./BasketDetails";

export default function Basket() {
  return (
    <>
      <BasketTop />
      <View style={styles.basket}>
        <BasketDetails />
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