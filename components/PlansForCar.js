import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";

const ChooseImageForPlan = ({ name }) => {
  if (name === "Membership")
    return (
      <Image
        source={require("../assets/icons/membership.png")}
        style={{ resizeMode: "contain", height: 50 }}
      />
    );

  if (name === "Insurnce")
    return (
      <Image
        source={require("../assets/icons/insurance.png")}
        style={{ resizeMode: "contain", height: 50 }}
      />
    );

  if (name === "Maintenance")
    return (
      <Image
        source={require("../assets/icons/maintain.png")}
        style={{ resizeMode: "contain", height: 50 }}
      />
    );

  return (
      <Image
        source={require("../assets/icons/healthplan.png")}
        style={{ resizeMode: "contain", height: 50 }}
      />
  );

};

const PlansForCar = ({ selectedCar, plans }) => {

  return (
    <View>
      <Text style={tw`text-xl text-gray-500 font-semibold mb-2`}>Plans for {selectedCar.Make} {selectedCar.Model}</Text>
        <View style={[tw`flex-row items-center`, { flexWrap: "wrap" }]}>
        {
            plans.filter(plan => plan.carId === selectedCar.key).map((plan, index) => (
                <View key={index} style={tw`w-20 h-20 bg-white items-center shadow-lg m-2 rounded-lg`}>
                    <ChooseImageForPlan name={plan.plan.Name} />
                    <Text style={[tw`mr-1 ml-1 text-xs font-semibold text-center`, { color: '#2bced6' }]}>{plan.plan.Name} plan</Text>
                </View>
            ))
        }
        </View>

        {
            plans.length < 1 && <Text style={tw`text-sm text-gray-400`}>No plans for this car yet</Text>
        }
    </View>
  )
}

export default PlansForCar

const styles = StyleSheet.create({})