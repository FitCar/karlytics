import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";

const PlansForCar = ({ selectedCar, plans }) => {
    plans
  return (
    <View>
      <Text style={tw`text-xl text-gray-500 font-semibold mb-2`}>Plans for {selectedCar.Make} {selectedCar.Model}</Text>
        {
            plans.filter(plan => plan.carId === selectedCar.key).map((plan, index) => (
                <View key={index} style={tw`flex-row items-center mb-1`}>
                    <Text>-</Text>
                    <Text style={[tw`mr-1 ml-1 text-sm font-semibold`, { color: '#2bced6' }]}> {plan.plan.type} {""} {plan.plan.Name}</Text>
                    <Text style={[tw`text-sm`, { color: '#2bced6' }]}> Plan</Text>
                </View>
            ))
        }

        {
            plans.length < 1 && <Text style={tw`text-sm text-gray-400`}>No plans for this car yet</Text>
        }
    </View>
  )
}

export default PlansForCar

const styles = StyleSheet.create({})