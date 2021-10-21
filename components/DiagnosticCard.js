import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { useNavigation } from "@react-navigation/native";

const DiagnosticCard = () => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <View
      style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl`}
    >
      <View style={tw`flex-row justify-between h-12`}>
        <Icon name="gas-pump" type="font-awesome-5" />
        <Text>fuel system</Text>
        <Text>2</Text>
        <Icon name="sort-down" type="font-awesome" onPress={toggle}/>
      </View>
      <CollapsibleView  noArrow={true}
        expanded={expanded}
        style={{ borderWidth: 0 }}>
      <View style={tw`border-0 rounded-3xl self-center w-10/12 mb-10 `}>
        <Text style={tw`text-center`}>Fuel Pump</Text>
        <Text style={tw`text-center`}>Fuel Filter</Text>
        <Text style={tw`text-center`}>Injector</Text>
      </View>
      </CollapsibleView>
    </View>
  );
};

export default DiagnosticCard;

const styles = StyleSheet.create({});
