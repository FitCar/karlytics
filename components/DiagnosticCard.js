import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';


const DiagnosticCard = () => {
  return (
    <TouchableOpacity style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl`}>
      <View style={tw`flex-row justify-between h-12`}>
      <Icon
      name="gas-pump"
      type="font-awesome-5"
      />
      <Text>fuel system</Text>
      <Text>2</Text>
      <Icon
      name="sort-down"
      type="font-awesome"
      />
      </View>
    </TouchableOpacity>
  )
}

export default DiagnosticCard

const styles = StyleSheet.create({})
