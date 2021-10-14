import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const CarRegisteration = () => {
  return (
    <View>
      <View style={tw`flex-row mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Car registeration</Text>
          <Text>Register your car</Text>
        </View>
      </View>
    </View>
  );
};

export default CarRegisteration;

const styles = StyleSheet.create({});
