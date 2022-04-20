import React, { useContext, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import  { Paystack }  from 'react-native-paystack-webview';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetBasket, selectGrandTotal } from "../slices/carSlice";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import Firebase from '../config/firebase';

const firestore = Firebase.firestore()

const Checkout = () => {
  const navigation = useNavigation()
  const grandTotal = useSelector(selectGrandTotal)
  const { basket } = useSelector(state => state.car)

  const { user } = useContext(AuthenticatedUserContext);
  const dispatch = useDispatch()

  const handleSuccess = () =>{
    const plansRef = firestore.collection("Plans")
              .doc(user.uid)
              .collection("Plans")

    const plans_in_basket = basket.filter(item => "plan" in item || "Name" in item)
  
    plans_in_basket.forEach(async (plan) => {
      if(plan?.Name) {
        await plansRef.doc().set({...plan, createdAt: firebase.firestore.FieldValue.serverTimestamp()})
      }else {
        await plansRef.doc().set({ carId: plan.key,  plan: plan.plan, garage_id: plan.garageId, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
      }
      
    })

    dispatch(resetBasket())

    firestore.collection("Basket")
      .doc(user.uid)
      .collection("Basket")
      .get().then(querySnapshot =>{
        querySnapshot.forEach(doc => {
          doc.ref.delete();
        });
    });

    return navigation.push('Tabs', { alert: `Payment was successful` })
  }
   

  return (
    <View>
      <Paystack  
        paystackKey="pk_live_26c8107f9df96b58fcb07716ae7916b5393bf3b4"
        amount={grandTotal}
        billingEmail={user.email}
        activityIndicatorColor="green"
        onCancel={() => navigation.push('Basket')}
        onSuccess={() => handleSuccess()}
        autoStart={true}
      />  
    </View>
  )
}

export default Checkout