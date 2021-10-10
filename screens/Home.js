import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Home = () => {
  return (
    <View style={tw`bg-white`}>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Welcome</Text>
          <Text>How's your car feeling today</Text>
        </View>
      </View>
      <View style={tw`mb-7`}>
        <Image
          style={tw`ml-20 mt-10`}
          source={require("../assets/icons/garage-car.png")}
        />
        <Text style={tw`ml-20 mt-5`}>Add your car(s) to get started</Text>
        <TouchableOpacity
          style={tw`border-0 rounded-3xl self-center w-10/12 p-2 mt-5 bg-pry-color-1`}
        >
          <Text style={tw`text-center`}>Add Car</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`bg-gray-100 h-1/2 rounded-t-3xl`}>
        <Text style={tw`ml-7 mt-5`}>Make a request</Text>
        <TouchableOpacity style={tw`bg-white flex-row ml-5 mr-5 rounded-xl py-10`}>
          <Image
          style={tw`ml-7`}
          source={require("../assets/icons/scan.png")}
          />
          <Text style={tw`ml-7 mt-2`}>Request a scan to view health report</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
