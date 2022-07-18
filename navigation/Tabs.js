import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Requests from "../screens/Requests";
import Garage from "../screens/Garage";
import Options from "../screens/Options";
import { Icon } from "react-native-elements"

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: { paddingBottom: 8 }}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" type="material" color={focused ? "#2bced6" : "lightgrey"} />
          ),
          tabBarActiveTintColor: "#2bced6"
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="sync-alt" type="material" color={focused ? "#2bced6" : "lightgrey"} />
          ),
          tabBarActiveTintColor: "#2bced6"
        }}
      />
      <Tab.Screen
        name="Garage"
        component={Garage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="directions-car" type="material" color={focused ? "#2bced6" : "lightgrey"} />
          ),
          tabBarActiveTintColor: "#2bced6"
        }}
      />
      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="settings" type="material" color={focused ? "#2bced6" : "lightgrey"} />
          ),
          tabBarActiveTintColor: "#2bced6"
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
