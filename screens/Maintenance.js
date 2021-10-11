import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { Icon } from 'react-native-elements';

const Maintenance = () => {
  const [expanded, setExpanded] = useState(false);
  

  const toggle = () => {
    setExpanded(!expanded);
  };
  
  return (
    <View style={tw`bg-white`}>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Request Maintenance</Text>
          <Text>Select a car</Text>
        </View>
      </View>
      <View>
      <CollapsibleView  style={tw`mb-8`} title="select a car">
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      </CollapsibleView>
      <View style={tw`mb-8 flex-row justify-around h-20 items-center shadow-md border-0`}>
        <TouchableOpacity>
        <Image
        source={require("../assets/icons/tire.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={require("../assets/icons/engine.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={require("../assets/icons/ac.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={require("../assets/icons/battery.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={require("../assets/icons/brake.png")}
        />
        </TouchableOpacity>
      </View>
      <CollapsibleView style={tw`mb-8`} title="select location">
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      </CollapsibleView>
      <CollapsibleView style={tw`mb-8`} title="select date">
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      </CollapsibleView>
      <CollapsibleView style={tw`mb-8`} title="select time">
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Option2</Text></TouchableOpacity>
      </CollapsibleView>
      <Button title="submit" />
      </View>
      
    </View>
  )
}

export default Maintenance

const styles = StyleSheet.create({})
