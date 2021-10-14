import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Diagnostic from "./screens/Diagnostic";
import tw from "tailwind-react-native-classnames";
import Quotation from "./screens/Quotation";
import Basket from "./screens/Basket";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/Tabs";
import Requests from "./screens/Requests";
import Garage from "./screens/Garage";
import Maintenance from "./screens/Maintenance";
import Inspection from "./screens/Inspection";
import Repairs from "./screens/Repairs";
import HealthCard from "./components/HealthCard";
import CarRegisteration from "./screens/CarRegisteration";
import CarCard from "./components/CarCard";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
// import * as firebase from 'firebase'
import { initializeApp } from 'firebase/app';


// initializeApp(firebaseConfig);

// if(firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig)
// }



export default function App() {

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Diagnostic" component={Diagnostic} />
            <Stack.Screen name="Quotation" component={Quotation} />
            <Stack.Screen name="Basket" component={Basket} />
            <Stack.Screen name="Maintenance" component={Maintenance} />
            <Stack.Screen name="Inspection" component={Inspection} />
            <Stack.Screen name="Repairs" component={Repairs} />
            <Stack.Screen name="CarRegisteration" component={CarRegisteration} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <CarCard />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#EEEEEE",
  },
});
