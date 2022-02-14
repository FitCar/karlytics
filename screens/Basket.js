import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import BasketCard from "../components/BasketCard";
import DiagnosticCard from "../components/DiagnosticCard";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../slices/carSlice";
import { useNavigation } from "@react-navigation/native";
import { setGrandTotal } from "../slices/carSlice";

const Basket = () => {
  const basket = useSelector(selectBasket);
  const navigation = useNavigation()
  console.log(basket);
  const dispatch = useDispatch()
  
 
  let y = []

 basket.map((item) => {
    y.push(Number(item.total))
  })

  const sum = y.reduce((partial_sum, a) => partial_sum + a, 0);

  console.log(y)
  console.log(sum)
  const labour = sum * 0.2
  const vat = (sum + labour) * 0.075
  const grandTotal = sum + labour + vat
  return (
    <View style={tw`pt-10 pb-5`}>
      <View style={tw`flex-row justify-around mb-8`}>
        
        <View style={tw`flex-row`}>
          <View>
            <Text style={tw`font-bold text-lg text-black`}>Basket</Text>
            <Text>View your basket</Text>
          </View>
          <View>
            <Icon name="shopping-basket" type="font-awesome" />
          </View>
        </View>
        
        <TouchableOpacity
          style={tw`items-center flex-row bg-green-400 px-3 rounded-lg`}
          onPress={() => {
            dispatch(setGrandTotal(grandTotal))
            navigation.navigate('Checkout')
          }}
        > 
          <Text style={tw`mr-2 text-white font-semibold`}>Checkout</Text>
          <Icon name="chevron-right" color={'white'} type="font-awesome" />
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`mb-44`}>
        {basket.map((item) => {
          if(item.plan) return (
            <BasketCard
              details={item}
            />
          )
          
          return (
            <BasketCard
              description={item.description}
              qty={item.qty}
              unitPrice={item.unitPrice}
              total={item.total}
            />
          );
        })}

        <Text>Sub-total: {sum} </Text>
        <Text>Labour: {labour}</Text>
        <Text>7.5% VAT: {vat}</Text>
        <Text>Grand Total: {grandTotal} </Text>
      </ScrollView>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});
