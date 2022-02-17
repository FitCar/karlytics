import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { setCurrentCar } from "../slices/carSlice";


const CarCard = ({ car_details }) => {
  const [expanded, setExpanded] = useState(false);
  
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const toggle = () => {
    setExpanded(!expanded);
  };

  const handleSelectCar = () =>{
    dispatch(setCurrentCar(car_details))
    navigation.navigate("Home")
  } 

  return (
    <TouchableOpacity style={tw`bg-white items-center mt-10 rounded-3xl mx-10 py-5 pl-5 shadow-xl`} onPress={toggle}>
      <View style={tw`flex-row`}>
        <View>
          <Image source={require("../assets/icons/garage-car.png")}
          resizeMode = "contain" 
          style={styles.image}/>
        </View>

        <View>
            <Text style={styles.mainInfo}>Make: {car_details.Make}</Text>
            <Text style={styles.mainInfo}>Model: {car_details.Model}</Text>
            <Text style={styles.mainInfo}>Mileaege: xxxx</Text>
        </View>
      </View>

      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-center mr-5`}>Health Report</Text>
        <Image source={require("../assets/Images/healthreport.png")} />
      </View>

      <CollapsibleView
        expanded={expanded}
        style={{ borderWidth: 0 }}
      >
        <View>
          <Text>Next Maintainance (Date): xxxxxx</Text>
          <Text>Next Maintainance (Distance): xxxxxx</Text>
          <Text>Pending Repairs: 3</Text>
          <Text>Papers: OK</Text>
          <Text>Value: 15mNGN</Text>
        </View>

        <Button
         title='Select Car'
         onPress={() => handleSelectCar()}
        />
      </CollapsibleView>
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
