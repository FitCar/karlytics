import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import AddCar from "../components/AddCar";
import CarCard from "../components/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { setCurrentCar } from "../slices/carSlice";

const Garage = () => {
  const { cars } = useSelector((state) => state.car);

  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleChoosePlan = () => {
    dispatch(setCurrentCar(route.params?.bannerCar));

    navigation.navigate("Plans");
  };

  return (
    <ScrollView style={tw`flex-grow mt-10 mb-5 pb-10`}>
      <View>
        <View style={tw`ml-5`}>
          <View style={tw`mb-5`}>
            <Text
              style={[
                tw`font-bold text-xl text-black`,
                { fontFamily: "SatushiBold" },
              ]}
            >
              Garage
            </Text>

            <Text style={{ color: "grey", fontFamily: "SatushiMedium" }}>
              Select a car
            </Text>
          </View>
        </View>

        {route.params?.bannerCar && (
          <View
            style={[
              tw`rounded-lg p-3 mx-auto border-2 border-blue-600 bg-blue-400`,
              { width: "90%" },
            ]}
          >
            <Text style={styles.bannerText}>
              Select a plan for your {route.params?.bannerCar.Make}{" "}
              {route.params?.bannerCar.Model}{" "}
            </Text>

            <TouchableOpacity
              onPress={() => handleChoosePlan()}
              style={tw`px-4 py-2 bg-gray-200 w-32 rounded-md`}
            >
              <Text
                style={[
                  { fontWeight: "SatushiMedium" },
                  tw`text-center text-gray-600`,
                ]}
              >
                Choose Plan
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <AddCar />
      </View>

      {cars.length === 0 ? (
        <View style={tw`flex-grow justify-center items-center`}>
          <Text
            style={[tw`text-lg font-semibold`, { fontFamily: "SatushiBold" }]}
          >
            You have no cars in your garage yet
          </Text>
        </View>
      ) : (
        cars.map((item) => {
          return (
            <View key={item.key}>
              <CarCard car_details={item} />
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

export default Garage;

const styles = StyleSheet.create({
  bannerText: {
    fontFamily: "SatushiBold",
    marginRight: 15,
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});
