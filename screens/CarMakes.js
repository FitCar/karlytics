import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { addMake, selectMake } from "../slices/carSlice";
import { cars } from "../cardata";

const CarMakes = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleNext = (item) => {
    navigation.navigate("CarModel");
    dispatch(addMake(item.model));
  };

  return (
    <ScrollView style={[tw`bg-gray-200 flex-grow pt-10`]}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 60,
        }}
      >
        {cars.map((car) => (
          <TouchableOpacity
            key={car.index}
            style={tw`bg-white py-4 px-3 m-3 shadow-md items-center rounded-md`}
            onPress={() => handleNext(car)}
          >
            <Image
              source={car.img}
              style={{ height: 70, width: 130, resizeMode: "contain" }}
            />
            <Text style={{ fontFamily: "SatushiBold" }}>{car.model}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CarMakes;

const styles = StyleSheet.create({});
