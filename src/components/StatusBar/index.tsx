import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar as ReactNativeStatusBar,
  SafeAreaView, StatusBarProps
} from 'react-native';

export default function StatusBar({backgroundColor, ...props}:StatusBarProps) {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <ReactNativeStatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}

const STATUSBAR_HEIGHT = ReactNativeStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});