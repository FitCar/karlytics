import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const ChooseImageForPlan = ({ name }) =>{
  
  if(name === 'Membership') return <Image source={require("../assets/icons/membership.png")} style={{ resizeMode: "contain", height: 40 }} />
  
  if(name === 'Insurnce') return <Image source={require("../assets/icons/insurance.png")} style={{ resizeMode: "contain", height: 40 }} />
 
  if(name === 'Maintenance') return <Image source={require("../assets/icons/maintain.png")} style={{ resizeMode: "contain", height: 40 }} />
  
  return <Image source={require("../assets/icons/healthplan.png")} style={{ resizeMode: "contain", height: 40 }} />
} 

const BasketCard = ({ description, qty, total, unitPrice, details }) => {
  if(details) return (
    <View style={tw`bg-white mx-4 rounded-xl mb-5 p-4 shadow-xl`}>
      <View style={tw`flex-row justify-start h-max items-center`}>
        <ChooseImageForPlan name={details.plan.Name} />
        
        <View style={tw`ml-5`}>
          <Text style={tw`mb-2`}><Text style={tw`font-semibold`}>{details.plan.type}</Text> package for <Text style={tw`font-semibold`}>{details.plan.Name}</Text> plan</Text>
          <Text>Make - {details.Make}</Text>
          <Text>Model - {details.Model}</Text>
          <Text style={tw`font-semibold mt-2`}>Cost: {details.plan.price}</Text>  
        </View>
      </View>
    </View>
  )
  return (
    <View style={tw`bg-white mx-4 rounded-xl mb-5 p-4 shadow-xl`}>
      <View style={tw`flex-row h-12 items-center`}>
        <Icon style={tw`flex-1 mr-10`} name="gas-pump" type="font-awesome-5" />
        
        <View>
          <Text>{description}</Text>
          <Text>Quantity: {qty}</Text>
          <Text>Unit Price: {unitPrice}</Text>
          <Text>Total: {total}</Text>  
        </View>
      </View>
    </View>
  )
};

export default BasketCard;

const styles = StyleSheet.create({});
