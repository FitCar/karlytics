import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaintenancePlanData } from '../../cardata'

function MaintenancePlan() {

  const navigation = useNavigation()

  const addCommaToValue = (num) =>{
    let to_string = `${num}`

    return to_string.substring(0, 2) + ',' + to_string.substring(2, to_string.length);
  }

  return (
    <ScrollView style={tw`mt-10 px-5 mb-5`}>
      <Text style={tw`text-xl font-semibold`}>Maintenance Plan</Text>
      
      <View style={tw`flex-row mb-6 mt-5 items-center`}>
        <View
          style={tw` w-1/4 h-20 rounded-xl bg-white justify-center items-center`}
        >
          <Image source={require("../../assets/icons/maintain.png")} />
          <Text style={tw`text-center`}>Maintenance Plan</Text>
        </View>

        <View style={tw`mr-28 ml-5`}>
          <Text style={tw`text-gray-500`}>
            "Sign up and get your car in tip top shape while making savings."
          </Text>
        </View>
      </View>

      <View style={tw`items-center`}>
        <View style={[styles.plan, tw`shadow-lg`]}>
          <Text style={styles.planHeader}>Basic <Text style={tw`text-xl`}>{addCommaToValue(MaintenancePlanData.Basic.price)}</Text></Text>

          {
            MaintenancePlanData.Basic.features.map((feature, index) => (
              <Text key={index+1}>- {feature}</Text>
            ))
          }

          <TouchableOpacity
            style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
            onPress={() => navigation.navigate('Basket')}
          >
            <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(MaintenancePlanData.Basic.price)}</Text></Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.plan, tw`shadow-lg`]}>
          <Text style={styles.planHeader}>Standard <Text>{addCommaToValue(MaintenancePlanData.Standard.price)}</Text></Text>
          {
            MaintenancePlanData.Standard.features.map((feature, index) => (
              <Text key={index+1}>- {feature}</Text>
            ))
          }

          <TouchableOpacity style={[tw`border-0 text-white text-center rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}>
            <Text style={tw`text-white text-center`}>Select and Pay {addCommaToValue(MaintenancePlanData.Standard.price)}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.plan, tw`shadow-lg`]}>
          <Text style={styles.planHeader}>Comprehensive <Text style={tw`text-xl`}>{addCommaToValue(MaintenancePlanData.Comprehensive.price)}</Text></Text>
          
          {
            MaintenancePlanData.Comprehensive.features.map((feature, index) => (
              <Text key={index+1}>- {feature}</Text>
            )
          )}

          <TouchableOpacity style={[tw`border-0 text-white text-center rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}>
            <Text style={tw`text-white text-center`}>Select and Pay {addCommaToValue(MaintenancePlanData.Comprehensive.price)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default MaintenancePlan;

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