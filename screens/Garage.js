import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import AddCar from "../components/AddCar";
import CarCard from "../components/CarCard";
import { useSelector } from "react-redux";

const Garage = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  
  const { cars } = useSelector(state => state.car)

  return (
    <ScrollView style={tw`mb-8`}>
      <View>
        <View style={tw`ml-5 mt-5 mb-5`}>
          <View style={tw`mb-8`}>
            <Text style={tw`font-bold text-lg text-black`}>Garage</Text>
            <Text>Select a car</Text>
          </View>
        </View>
        <AddCar />
      </View>
      
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarCard car_details={item} />
        )}
        keyExtractor={(item) => item.key}
      />
      
    </ScrollView>
  );
};

export default Garage;

const styles = StyleSheet.create({});
