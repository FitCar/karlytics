import React, { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from './navigation/index';
import { StyleSheet } from "react-native";




export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
       <Routes />
    </Provider>
    // <View style={styles.container}>
    //   <CarCard />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     backgroundColor: "#EEEEEE",
//   },
// });
