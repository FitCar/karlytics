import React, { useEffect, useState } from "react";
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
import Firebase from "../config/firebase";

const firestore = Firebase.firestore();

const Garage = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [garage, setGarage] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("make")
      .onSnapshot((querySnapshot) => {
        const garage = [];

        querySnapshot.forEach((documentSnapshot) => {
          garage.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        // console.log(garage);
        setGarage(garage);
        setLoading(false);
      });
  },[]);

  return (
    <View>
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
        data={garage}
        renderItem={({ item }) => (
          <CarCard make={item.Make} model={item.Model} />
        )}
        keyExtractor={(item) => item.key}
      />
      
    </View>
  );
};

export default Garage;

const styles = StyleSheet.create({});
