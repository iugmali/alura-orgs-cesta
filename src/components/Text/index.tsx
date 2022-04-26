import React from "react";
import {Text as ReactNativeText, StyleSheet, TextProps} from 'react-native';

export default function Text({children, style}:TextProps) {
  let defaultStyle = styles.text;
  // @ts-ignore
  if (style?.fontWeight !== undefined && style?.fontWeight === 'bold') {
    defaultStyle = styles.textBold;
  }
  return <ReactNativeText style={[style, defaultStyle]}>{children}</ReactNativeText>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat400",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "Montserrat700",
    fontWeight: "normal",
  }
})