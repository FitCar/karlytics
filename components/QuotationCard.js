import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const QuotationCard = () => {
  return (
    <View
      style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl h-28`}
    >
      <View style={tw`flex-row justify-between h-12`}>
        <Icon name="car-battery" type="font-awesome-5" />
        <View>
          <Text>Fuel Pump</Text>
          <Text>NGN 20,000</Text>
        </View>
        <View style={tw`-mt-4`}>
          <TouchableOpacity style={tw` border-2 mb-1 border-gray-50 py-2 rounded-xl`}>
            <Text>Add to Basket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`border-2 mb-1 border-gray-50 py-2 rounded-xl`}>
            <Text>Save for Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuotationCard;

const styles = StyleSheet.create({});
