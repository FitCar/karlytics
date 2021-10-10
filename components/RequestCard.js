import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

const RequestCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl`}
    >
      <View style={tw`flex-row justify-between`}>
        <Icon style={tw`mt-8`} name="gas-pump" type="font-awesome-5" />
        <View>
          <Text>Request ID: xxxxx</Text>
          <Text>AC, Engine, Suspension...</Text>
          <Text>Pick-up</Text>
          <Text>Date: 30/11/21</Text>
          <Text>Time: 10:00AM</Text>
          <Text>Confirmed</Text>
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
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({});
