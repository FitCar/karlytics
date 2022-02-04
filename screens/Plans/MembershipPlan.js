import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";

function MembershipPlan() {
  return (
    <View style={tw`mt-10`}>
      <Text>Membership Plan</Text>
      <View style={tw`flex-row mb-6 mt-5`}>
        <View
          style={tw` w-1/4 h-20 ml-5 rounded-xl bg-white justify-center items-center mb-5`}
        >
          <Image source={require("../../assets/icons/membership.png")} />
          <Text style={tw`text-center`}>Prime wheels membership</Text>
        </View>
        <View style={tw`mr-32 ml-5`}>
          <Text>
            "Get exclusive benefits like discounts on all requests and plans, priority response and much more."
          </Text>
        </View>
      </View>
      <View style={tw`self-center`}>
        <View>
          <Text>Gold</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
          >
            <Text>Select and Pay</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Silver</Text>
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

export default MembershipPlan
