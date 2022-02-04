import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Diagnostic from "../screens/Diagnostic";
import Inspection from "../screens/Inspection";
import Maintenance from "../screens/Maintenance";
import { useDispatch, useSelector } from "react-redux";
import { setRequestId } from '../slices/carSlice'

const RequestCard = ({ car, requestid, schedule, location, requestType, status }) => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const toggle = () => {
    setExpanded(!expanded);
  };

  let req = requestid

  const openDiagnosis = () => {
    dispatch(setRequestId(req))
    navigation.navigate("Diagnostic")
  }

  console.log(req)

  return (
    <View
      style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl`}
    >
      <View style={tw`flex-row justify-between`}>
        {requestType == "Maintenance" ? (
          <Image
            style={tw`mt-8`}
            source={require("../assets/icons/maintain.png")}
          />
        ) : requestType == "Inspection" ? (
          <Image
            style={tw`mt-8`}
            source={require("../assets/icons/Inspect.png")}
          />
        ) : requestType == "Repairs" ? (
          <Image
            style={tw`mt-8`}
            source={require("../assets/icons/repair.png")}
          />
        ) : (
          <Image
            style={tw`mt-8`}
            source={require("../assets/icons/scan.png")}
          />
        )}

        <View>
          <Text>Request ID: {requestid}</Text>
          <Text>Request Type: {requestType}</Text>
          <Text>Car: {car}</Text>
          {/* <Text>AC, Engine, Suspension...</Text> */}
          <Text>Location: {location}</Text>
          <Text style={tw`w-44`}>Schedule: {schedule}</Text>
          <Text style={tw`w-44`}>Status: {status}</Text>
          
        </View>
        <Icon name="sort-down" type="font-awesome" onPress={toggle} />
      </View>
      <CollapsibleView
        noArrow={true}
        expanded={expanded}
        style={{ borderWidth: 0 }}
      >
        <View>
          <TouchableOpacity
            style={tw`border-0 rounded-3xl self-center w-10/12 p-2 mt-10 mb-10 bg-pry-color-1`}
            onPress={openDiagnosis}
          >
            <Text style={tw`text-center`}>Diagnosis(Ongoing)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`border-0 rounded-3xl self-center w-10/12 p-2 mb-5 bg-pry-color-1`}
          >
            <Text style={tw`text-center`}>Quotation</Text>
          </TouchableOpacity>
        </View>
      </CollapsibleView>
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({});
