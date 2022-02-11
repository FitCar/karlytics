import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { InsurancePlanData } from '../../cardata.js'

function InsurancePlan() {
  const addCommaToValue = (num) =>{
    let to_string = `${num}`

    return to_string.substring(0, 2) + ',' + to_string.substring(2, to_string.length);
  }

  return (
    <ScrollView style={tw`mt-10 px-5`}>
      <Text style={tw`text-xl font-semibold`}>Insurance Plan</Text>
        
        <View style={tw`flex-row mb-6 mt-5 items-center`}>
          <View
            style={tw` w-1/4 h-20 rounded-xl bg-white justify-center items-center`}
          >
            <Image source={require("../../assets/icons/insurance.png")} />
            <Text style={tw`text-center`}>Insurance Plan</Text>
          </View>

          <View style={tw`mr-28 ml-5`}>
            <Text style={tw`text-gray-500`}>
              "Insure your vehicle today and pay either weekly, monthly, or yearly"
            </Text>
          </View>
        </View>

        <View style={tw`items-center`}>
          {/* 3rd party plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>3rd Party <Text style={tw`text-xl`}>{addCommaToValue(InsurancePlanData.ThirdParty.price)}</Text></Text>

            {
              InsurancePlanData.ThirdParty.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => navigation.navigate('Basket')}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(InsurancePlanData.ThirdParty.price)}</Text></Text>
            </TouchableOpacity>
          </View>
        
          {/* comprehensive plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>Comprehensive <Text style={tw`text-xl`}>{addCommaToValue(InsurancePlanData.Comprehensive.price)}</Text></Text>

            {
              InsurancePlanData.Comprehensive.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => navigation.navigate('Basket')}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(InsurancePlanData.Comprehensive.price)}</Text></Text>
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

export default InsurancePlan
