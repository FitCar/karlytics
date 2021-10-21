import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { addMake, selectMake } from '../slices/carSlice'

const cars = [
  { model: "Toyota", index: '1' },
  { model: "honda", index: '2' },
  { model: "Mercedes-Benz", index: '3' },
  { model: "Range Rover", index: '4' },
  { model: "Hyundai", index: '5' },
  { model: "Kia", index: '6' },
  { model: "BMW", index: '7' },
  { model: "Lexus", index: '8' },
];



//select car make and dispatch to redux
//pull the make from redux into model screen and filter our models and asign to target array
//render items from array into a list


const CarMakes = () => {

  const dispatch = useDispatch()

  const navigation = useNavigation()
  
  return (
    <View style={tw`mt-20`}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`bg-gray-100 border-2 h-10 text-center`} onPress={() => {
            navigation.navigate('CarModel')
            dispatch(addMake(item.model))
            }} >
            <Text>{item.model}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

export default CarMakes;

const styles = StyleSheet.create({});
