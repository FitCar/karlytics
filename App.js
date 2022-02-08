import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from './navigation/index';
import { LogBox } from "react-native";
import CarCard from "./components/CarCard";
import CarRegisteration from "./screens/CarRegisteration";
import { Picker } from "@react-native-community/picker";
import CarMakes from "./screens/CarMakes";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
       <Routes />
    </Provider>
    // <View >
    //   <CarRegisteration />
    // </View>
    // <View>
    //     <CarMakes />
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
