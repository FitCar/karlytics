import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const ServiceButton = ({ title, onPress, image }) => {
  return (
    <TouchableOpacity
      style={tw`w-1/4 h-20 rounded-lg shadow-lg bg-white justify-center items-center m-3`}
      onPress={onPress}
    >
      <Image source={image} />
      <Text style={[tw`text-center mt-3`, { fontFamily: "SatushiMedium" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceButton;

const styles = StyleSheet.create({});
