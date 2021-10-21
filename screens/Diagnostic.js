import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import DiagnosticCard from '../components/DiagnosticCard';


const Diagnostic = () => {
  const navigation = useNavigation()
  return (
    <View >
<View style={tw`flex-row justify-around mt-5`}>
  <View style={tw`mb-8`}>
    <Text>Request ID:xxxxx</Text>
    <Text style={tw`font-bold text-lg text-black`}>Diagnosis</Text>
    <Text>View your car diagnosis below</Text>
  </View>
<View style={tw`content-center flex-row`}>
  <Text>Quotation</Text>
  <Icon
  onPress={()=>navigation.navigate("Quotation")}
  style={tw`ml-2`}
  name="chevron-right"
  type="font-awesome"
  />
</View>
</View>
<ScrollView style={tw`mb-5`}>
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
</ScrollView>
<View style={tw`mt-5`}></View>
</View>
  )
}

export default Diagnostic

const styles = StyleSheet.create({})
