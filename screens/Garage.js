import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import AddCar from "../components/AddCar";
import CarCard from "../components/CarCard";
import { useSelector } from "react-redux";

const Garage = () => {
  const { cars } = useSelector(state => state.car)

  return (
    <ScrollView style={tw`flex-grow mt-10 mb-5 pb-10`}>
      <View>
        <View style={tw`ml-5 mb-5`}>
          <View style={tw`mb-5`}>
            <Text style={tw`font-bold text-lg text-black`}>Garage</Text>
            <Text>Select a car</Text>
          </View>
        </View>
        <AddCar />
      </View>
      
      {
        cars.map(item => {
          return (
          <View key={item.key}>
            <CarCard car_details={item} />
          </View>
          )
        })
      }
    </ScrollView>
  );
};

export default Garage;

const styles = StyleSheet.create({});
