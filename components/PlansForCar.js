import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";

const PlansForCar = ({ selectedCar, plans }) => {
    plans
  return (
    <View>
      <Text style={tw`text-lg font-bold mb-3`}>Plans for {selectedCar.Make} {selectedCar.Model}</Text>
        {
            plans.filter(plan => plan.carId === selectedCar.key).map((plan, index) => (
                <View key={index} style={tw`flex-row items-center mb-1`}>
                    <Text>-</Text>
                    <Text style={tw`mr-1 ml-1`}>{plan.plan.Name}</Text>
                    <Text>{plan.plan.type} Plan</Text>
                </View>
            ))
        }

        {
            plans.length < 1 && <Text>No plans for this car yet</Text>
        }
    </View>
  )
}

export default PlansForCar

const styles = StyleSheet.create({})