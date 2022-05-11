import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from './navigation/index';
import { LogBox } from "react-native";
import * as Notifications from 'expo-notifications'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
       <Routes />
    </Provider>
  );
}

