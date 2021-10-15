import React, { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from './navigation/index';
import { StyleSheet, View } from "react-native";
import CarCard from "./components/CarCard";
import CarRegisteration from "./screens/CarRegisteration";




export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    // <Provider store={store}>
    //    <Routes />
    // </Provider>
    <View >
      <CarRegisteration />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     backgroundColor: "#EEEEEE",
//   },
// });
