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

const cars = [
  { model: "Toyota", index: '1' },
  { model: "Honda", index: '2' },
  { model: "Mercedes", index: '3' },
  { model: "Range Rover", index: '4' },
  { model: "Hyundai", index: '5' },
];



const CarMakes = () => {

  const navigation = useNavigation()
  
  return (
    <View style={tw`mt-20`}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`bg-gray-100 border-2 h-10 text-center`} onPress={() => navigation.navigate('CarModel')} >
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
