import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { addModel, selectMake } from "../slices/carSlice";
import models from "./models";

const CarModels = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const make = useSelector(selectMake);

  let target = [];

  models
    .filter((mod) => {
      return mod.model_make_id === make;
    })
    .map((mod) => {
      target.push(mod.model_name);
    });

  const handleNext = (item) => {
    navigation.navigate("CarRegisteration");
    dispatch(addModel(item));
  };

  return (
    <View style={tw`mt-10 pb-20 bg-gray-100 flex-1`}>
      <View style={tw`flex-row justify-center mb-4`}>
        <Text style={[tw`font-bold text-2xl`, { fontFamily: "SatushiBold" }]}>
          {make}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={tw`flex flex-row flex-wrap justify-center`}
      >
        {target.length ? (
          target.map((car, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-white m-4 w-32 text-lg h-16 py-1 justify-center rounded-lg shadow-lg`}
              onPress={() => handleNext(car)}
            >
              <Text style={[tw`text-center`, { fontFamily: "SatushiMedium" }]}>
                {car}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text style={tw`text-gray-400 text-lg`}>
              No Models available yet
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CarModels;

const styles = StyleSheet.create({});
