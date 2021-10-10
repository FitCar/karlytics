import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import DiagnosticCard from "../components/DiagnosticCard";
import QuotationCard from "../components/QuotationCard";

const Quotation = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={tw`flex-row justify-around mt-5`}>
        <View style={tw`mb-8`}>
          <Text>Request ID:xxxxx</Text>
          <Text style={tw`font-bold text-lg text-black`}>Quotation</Text>
          <Text>View your quotation below</Text>
        </View>
        <TouchableOpacity style={tw`content-center flex-row`}>
          <Icon name="shopping-basket" type="font-awesome" />
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="chevron-right"
            type="font-awesome"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
      </ScrollView>
    </View>
  );
};

export default Quotation;

const styles = StyleSheet.create({});
