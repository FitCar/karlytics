import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const ServiceButton = () => {
  return (
    <TouchableOpacity
      style={tw` w-1/4 h-20 ml-5 rounded-xl bg-white justify-center items-center mb-5`}
    >
      <Image source={require("../assets/icons/Inspect.png")} />
      <Text style={tw`text-center`}>Repair</Text>
    </TouchableOpacity>
  );
};

export default ServiceButton;

const styles = StyleSheet.create({});
