import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import BasketCard from '../components/BasketCard';
import DiagnosticCard from '../components/DiagnosticCard';


const Basket = () => {
  return (
    <View >
<View style={tw`flex-row justify-around mt-5`}>
  <View style={tw`mb-8 flex-row`}>
    <View>
    <Text style={tw`font-bold text-lg text-black`}>Basket</Text>
    <Text>View your basket</Text>
    </View>
    <View>
      <Icon
      name="shopping-basket"
      type="font-awesome"
      />
    </View>
  </View>
<View style={tw`content-center flex-row`}>
  <Text style={tw`mr-2`}>Checkout</Text>
  <Icon 
  name="chevron-right"
  type="font-awesome"
  />
</View>
</View>
<BasketCard />
<BasketCard />
<BasketCard />
<BasketCard />
<BasketCard />

</View>
  )
}

export default Basket

const styles = StyleSheet.create({})
