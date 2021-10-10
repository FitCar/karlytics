import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import DiagnosticCard from '../components/DiagnosticCard';


const Diagnostic = () => {
  return (
    <View >
<View style={tw`flex-row justify-around mt-5`}>
  <View style={tw`mb-8`}>
    <Text>Request ID:xxxxx</Text>
    <Text style={tw`font-bold text-lg text-black`}>Diagnosis</Text>
    <Text>View your car diagnosis below</Text>
  </View>
<View style={tw`content-center`}>
  <Text>Quotation</Text>
</View>
</View>
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
<DiagnosticCard />
</View>
  )
}

export default Diagnostic

const styles = StyleSheet.create({})
