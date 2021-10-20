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
  { model: "Venza", index: '1' },
  { model: "Highlander", index: '2' },
  { model: "Camry", index: '3' },
  { model: "Prado", index: '4' },
  { model: "Matrix", index: '5' },
];



const CarModels = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`mt-20`}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`bg-gray-100 border-2 h-10 text-center`} onPress={() => navigation.navigate('CarRegisteration')}>
            <Text>{item.model}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

export default CarModels;

const styles = StyleSheet.create({});
