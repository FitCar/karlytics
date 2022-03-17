import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { setCurrentCar } from "../slices/carSlice";


const CarCard = ({ car_details }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleSelectCar = () =>{
    dispatch(setCurrentCar(car_details))
    navigation.navigate("Home")
  } 


  return (
    <TouchableOpacity key={car_details.key} style={tw`bg-white items-center mb-8 rounded-3xl mx-10 py-5 pl-5 shadow-xl`} onPress={() => handleSelectCar()}>
      <View style={tw`flex-row`}>
        <View>
          <Image source={require("../assets/icons/garage-car.png")}
          resizeMode = "contain" 
          style={styles.image}/>
        </View>

        <View>
            <Text style={styles.mainInfo}>Make: {car_details.Make}</Text>
            <Text style={styles.mainInfo}>Model: {car_details.Model}</Text>
        </View>
      </View>

      <Text>Next Maintainance (Date): <Text style={tw`font-semibold`}>{car_details.nextServiceDate}</Text></Text>
      
    </TouchableOpacity>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 100,
    marginRight: 20
  },

  mainInfo: {
    fontWeight: "700",
    fontSize: 16
  }
});
