import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import PlanCard from "../../components/PlanCard";

function MaintenancePlan() {

  const navigation = useNavigation()

  return (
    <ScrollView style={tw`mt-10`}>
      <Text>Maintenance Plan</Text>
      <View style={tw`flex-row mb-6 mt-5`}>
        <View
          style={tw` w-1/4 h-20 ml-5 rounded-xl bg-white justify-center items-center mb-5`}
        >
          <Image source={require("../../assets/icons/maintain.png")} />
          <Text style={tw`text-center`}>Maintenance Plan</Text>
        </View>
        <View style={tw`mr-32 ml-5`}>
          <Text>
            "Sign up and get your car in tip top shape while making savings."
          </Text>
        </View>
      </View>
      <View style={tw`self-center`}>
        <View>
          <Text style={tw`font-bold`}>Basic <Text style={tw`text-xl`}>15,000</Text></Text>
          <Text>*Engine oil replacement</Text>
          <Text>*Oil filter replacement</Text>
          <Text>*Air filter cleaning </Text>
          <Text>*Coolant top up</Text>
          <Text>*Wiper fluid replacement</Text>
          <Text>*Battery water top up</Text>
          <Text>*Heater spark plugs checking</Text>
          <Text>*Car wash</Text>
          <Text>*Interior vacuuming (Carpets & Seats)</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
            onPress={() => navigation.navigate('Basket')}
          >
            <Text>Select and Pay <Text>15,000</Text></Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={tw`font-bold`}>Standard</Text>
          <Text>*Engine oil replacement</Text>
          <Text>*Oil filter replacement</Text>
          <Text>*Air filter cleaning </Text>
          <Text>*Coolant top up</Text>
          <Text>*Wiper fluid replacement</Text>
          <Text>*Battery water top up</Text>
          <Text>*Heater spark plugs checking</Text>
          <Text>*Car wash</Text>
          <Text>*Interior vacuuming (Carpets & Seats)</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
          >
            <Text>Select and Pay</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={tw`font-bold`}>Comprehensive</Text>
          <Text>*Engine oil replacement</Text>
          <Text>*Oil filter replacement</Text>
          <Text>*Air filter cleaning </Text>
          <Text>*Coolant top up</Text>
          <Text>*Wiper fluid replacement</Text>
          <Text>*Battery water top up</Text>
          <Text>*Heater spark plugs checking</Text>
          <Text>*Car wash</Text>
          <Text>*Interior vacuuming (Carpets & Seats)</Text>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5 bg-pry-color-1`}
          >
            <Text>Select and Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default MaintenancePlan;
