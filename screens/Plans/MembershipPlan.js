import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { MembershipPlanData } from '../../cardata'

function MembershipPlan() {
  const addCommaToValue = (num) =>{
    let to_string = `${num}`

    return to_string.substring(0, 2) + ',' + to_string.substring(2, to_string.length);
  }

  return (
    <View style={tw`mt-10 px-5`}>
      <Text style={tw`text-xl font-semibold`}>Membership Plan</Text>
      
      <View style={tw`flex-row mb-6 mt-5 items-center`}>
        <View
          style={tw` w-1/4 h-20 rounded-xl bg-white justify-center items-center`}
        >
          <Image source={require("../../assets/icons/membership.png")} />
          <Text style={tw`text-center`}>Membership Plan</Text>
        </View>

        <View style={tw`mr-28 ml-5`}>
          <Text style={tw`text-gray-500`}>
            "Get exclusive benefits like discounts on all requests and plans, priority response and much more."
          </Text>
        </View>
      </View>

      <View style={tw`items-center`}>
          {/* Gold plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>Gold <Text style={tw`text-xl`}>{addCommaToValue(MembershipPlanData.Gold.price)}</Text></Text>

            {
              MembershipPlanData.Gold.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => navigation.navigate('Basket')}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(MembershipPlanData.Gold.price)}</Text></Text>
            </TouchableOpacity>
          </View>
        
          {/* Silver plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>Silver <Text style={tw`text-xl`}>{addCommaToValue(MembershipPlanData.Silver.price)}</Text></Text>

            {
              MembershipPlanData.Silver.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => navigation.navigate('Basket')}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(MembershipPlanData.Silver.price)}</Text></Text>
            </TouchableOpacity>
          </View>
        </View>

    </View>
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

export default MembershipPlan
