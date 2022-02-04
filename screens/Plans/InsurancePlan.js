import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";

function InsurancePlan() {
  return (
    <View style={tw`mt-10`}>
      <Text>Insurance Plan</Text>
      <View style={tw`flex-row mb-6 mt-5`}>
        <View
          style={tw` w-1/4 h-20 ml-5 rounded-xl bg-white justify-center items-center mb-5`}
        >
          <Image source={require("../../assets/icons/insurance.png")} />
          <Text style={tw`text-center`}>Insurance Plan</Text>
        </View>
        <View style={tw`mr-32 ml-5`}>
          <Text>
          "Insure your vehicle today and pay either weekly, monthly or yearly."
          </Text>
        </View>
      </View>
      <View style={tw`self-center`}>
        <View>
          <Text>3rd Party</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
          >
            <Text>Select and Pay</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Comprehensive</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
          >
            <Text>Select and Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default InsurancePlan
