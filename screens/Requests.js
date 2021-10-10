import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const Requests = () => {
  return (
    <View>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Requests</Text>
          <Text>View your requests</Text>
        </View>
      </View>
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({});
