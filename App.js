import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Diagnostic from "./screens/Diagnostic";
import tw from 'tailwind-react-native-classnames';
import Quotation from "./screens/Quotation";
import Basket from "./screens/Basket";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Basket />
    </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#EEEEEE'
  },
});
