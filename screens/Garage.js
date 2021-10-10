import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const Garage = () => {
  return (
    <View>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Garage</Text>
          <Text>Select a car</Text>
        </View>
      </View>
      <View>
        <Image 
        style={tw`ml-20 mt-10`}
        source={require("../assets/icons/garage-car.png")}
        />
        <Text style={tw`ml-20 mt-5`}>Add your car(s) to get started</Text>
        <TouchableOpacity style={tw`border-2 rounded-3xl self-center w-10/12 p-2 mt-5 bg-green-400`} ><Text style={tw`text-center`}>Add Car</Text></TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Garage;

const styles = StyleSheet.create({});
