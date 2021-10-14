import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import AddCar from "../components/AddCar";
import CarCard from "../components/CarCard";

const Garage = () => {
  return (
    <ScrollView>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Garage</Text>
          <Text>Select a car</Text>
        </View>
      </View>
      <AddCar />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      
      
    </ScrollView>
  );
};

export default Garage;

const styles = StyleSheet.create({});
