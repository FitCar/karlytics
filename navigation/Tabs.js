import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Requests from "../screens/Requests";
import Garage from "../screens/Garage";
import Options from "../screens/Options";
import tw from "tailwind-react-native-classnames";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/home.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/requests.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Garage"
        component={Garage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/garage.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/more.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
