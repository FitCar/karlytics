import React from 'react'
import { View, Text, Button } from 'react-native'
import  { Paystack }  from 'react-native-paystack-webview';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectGrandTotal } from "../slices/carSlice";

const Checkout = () => {

  const navigation = useNavigation()
  const grandTotal = useSelector(selectGrandTotal)

  return (
    <View style={{flex: 1}}>
      <Paystack  
        paystackKey="pk_test_0adc58258fd0cb5fc19574e4e371ab721109d35d"
        amount={grandTotal}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res)
          navigation.navigate('Home')
        }}
        autoStart={true}
      />
      
    </View>
  )
}

export default Checkout
