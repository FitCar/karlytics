import React from 'react'
import { ScrollView, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { HealthPlan } from '../../cardata'

function VehicleHealthPlan() {
  
  const addCommaToValue = (num) =>{
    let to_string = `${num}`

    return to_string.substring(0, 2) + ',' + to_string.substring(2, to_string.length);
  }

  return (
    <ScrollView style={tw`mt-10 mb-10 px-5`}>
      <Text style={tw`text-xl font-semibold`}>Vehicle Plan</Text>
      
      <View style={tw`flex-row mb-6 mt-5 items-center`}>
        <View
          style={tw` w-1/4 h-20 rounded-xl bg-white justify-center items-center`}
        >
          <Image source={require("../../assets/icons/healthplan.png")} />
          <Text style={tw`text-center`}>Vehicle Health Plan</Text>
        </View>

        <View style={tw`mr-28 ml-5`}>
          <Text style={tw`text-gray-500`}>
            "Get exclusive benefits like discounts on all requests and plans, priority response and much more."
          </Text>
        </View>
      </View>

      <View style={tw`items-center`}>
        {/* Basic plan */}
        <View style={[styles.plan, tw`shadow-lg`]}>
          <Text style={styles.planHeader}>Basic <Text style={tw`text-xl`}>{addCommaToValue(HealthPlan.Basic.price)}</Text></Text>

          {
            HealthPlan.Basic.features.map((feature, index) => (
              <Text key={index+1}>- {feature}</Text>
            ))
          }

          <TouchableOpacity
            style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
            onPress={() => navigation.navigate('Basket')}
          >
            <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(HealthPlan.Basic.price)}</Text></Text>
          </TouchableOpacity>
        </View>

        {/* comprehensive plan */}
        <View style={[styles.plan, tw`shadow-lg`]}>
          <Text style={styles.planHeader}>Comprehensive <Text style={tw`text-xl`}>{addCommaToValue(HealthPlan.Comprehensive.price)}</Text></Text>
          
          {
            HealthPlan.Comprehensive.features.map((feature, index) => (
              <Text key={index+1}>- {feature}</Text>
            )
          )}

          <TouchableOpacity style={[tw`border-0 text-white text-center rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}>
            <Text style={tw`text-white text-center`}>Select and Pay {addCommaToValue(HealthPlan.Comprehensive.price)}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  plan: {
    backgroundColor: '#e5e5ea',
    width: "90%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 15
  },

  planHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10
  },

  pryColor: {
    backgroundColor: "#2bced6"
  }
})

export default VehicleHealthPlan
