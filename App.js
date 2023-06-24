import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Routes from "./navigation/index";
import { ActivityIndicator, LogBox } from "react-native";
import * as Notifications from "expo-notifications";
import { useFonts } from "expo-font";
import { View } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [loaded] = useFonts({
    SatushiBlack: require("./assets/fonts/Satoshi-Black.ttf"),
    SatushiBold: require("./assets/fonts/Satoshi-Bold.ttf"),
    SatushiMedium: require("./assets/fonts/Satoshi-Medium.ttf"),
    SatushiRegular: require("./assets/fonts/Satoshi-Regular.ttf"),
    SatushiBoldI: require("./assets/fonts/Satoshi-BoldItalic.ttf"),
    SatushiMediumI: require("./assets/fonts/Satoshi-MediumItalic.ttf"),
    SatushiVariable: require("./assets/fonts/Satoshi-Variable.ttf"),
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"#2bced6"} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
