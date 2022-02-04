import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";

const AddCar = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`mb-5`}>
        <Image
          style={tw`ml-28 mt-10`}
          source={require("../assets/icons/garage-car.png")}
        />
        <Text style={tw`ml-20 mt-5`}>Add your car(s) to get started</Text>
        <TouchableOpacity
          style={tw`border-0 rounded-3xl self-center w-10/12 p-2 mt-5 bg-pry-color-1`}
          onPress={() => navigation.navigate('CarMake')}
        >
          <Text style={tw`text-center`}>Add Car</Text>
        </TouchableOpacity>
      </View>
  )
}

export default AddCar

const styles = StyleSheet.create({})
