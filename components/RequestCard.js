import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';


const RequestCard = () => {
  return (
    <TouchableOpacity style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl`}>
      <View style={tw`flex-row justify-between`}>
      <Icon
      style={tw`mt-8`}
      name="gas-pump"
      type="font-awesome-5"
      />
      <View>
      <Text>Request ID: xxxxx</Text>
      <Text>AC, Engine, Suspension...</Text>
      <Text>Pick-up</Text>
      <Text>Date: 30/11/21</Text>
      <Text>Time: 10:00AM</Text>
      <Text>Confirmed</Text>
      </View>
      <Icon
      name="sort-down"
      type="font-awesome"
      />
      </View>
    </TouchableOpacity>
  )
}

export default RequestCard

const styles = StyleSheet.create({})
