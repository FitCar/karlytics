import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';


const BasketCard = () => {
  return (
    <View style={tw`bg-white mx-4 rounded-xl mb-8 p-5 shadow-2xl`}>
      <View style={tw`flex-row justify-start h-12`}>
      <Icon
      style={tw`flex-1 mr-10`}
      name="gas-pump"
      type="font-awesome-5"
      />
      <View>
      <Text>fuel system</Text>
      <Text>NGN 20,000</Text>
      </View>

      </View>
    </View>
  )
}

export default BasketCard

const styles = StyleSheet.create({})
