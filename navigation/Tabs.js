import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
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
        component={Home}
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
        component={Home}
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
        name="More"
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
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
