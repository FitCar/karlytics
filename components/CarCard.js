import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";


const CarCard = () => {
  return (
    <TouchableOpacity style={tw`bg-white rounded-3xl mx-10 py-5 pl-5 mb-10 shadow-xl`}>
      <View style={tw`flex-row`}>
      <View>
        <Image source={require("../assets/icons/garage-car.png")}
        resizeMode = "contain" 
        style={{height: 100,
          marginRight: 20
        }}/>
      </View>
      <View>
        <Text>Licence: xxxxx</Text>
        <Text>Body type: xxxx</Text>
        <Text>Mileaege: xxxx</Text>
      </View>
      </View>
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-center mr-5`}>Health Report</Text>
        <Image source={require("../assets/Images/healthreport.png")} />
      </View>
    </TouchableOpacity>
  );
};

export default CarCard;

const styles = StyleSheet.create({});
