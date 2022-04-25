import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ProgressBar } from 'react-native-paper'
import { formatDistanceToNow } from "date-fns";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ServiceInfo = ({ current_car }) => {

  const dt = current_car && new Date(current_car.nextServiceDate)
  const lstDt = current_car && new Date(current_car.lastServiceDate)
  
  const duration = current_car && formatDistanceToNow(dt, lstDt);

  const one_day = 1000 * 60 * 60 * 24;
  const four_months = new Date(one_day*30*4)

  const next_day = dt.getTime()
  let now = new Date().getTime();
  const left = next_day - now

  const progressLeft = 1 - (left/four_months.getTime())

  let days;
  let minutes;
  let seconds;
  let countDownDate = new Date();

  var x = setInterval(function () {
    
    var distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

   
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  const navigation = useNavigation()

  const makeSchedule = () => {
    navigation.navigate("Schedule", { current_car })
  }

  return (
    <View>
      <Text style={tw`font-semibold text-gray-500 text-lg mb-1`}>Car Servicing</Text>

      {
        progressLeft <= 1  ?

        <View style={tw`flex-row justify-between`}>
          <Text style={tw`font-semibold text-gray-600`}>Due by {current_car?.nextServiceDate}</Text>
          <Text style={tw`font-semibold text-gray-600`}>{duration} left</Text>
        </View>
        
        : 

        <Text style={tw`font-medium text-red-500 text-sm mb-2`}>Due For Servicing</Text>
      }
     
      
      <View style={tw`my-1`}>
        <ProgressBar progress={progressLeft} color={progressLeft > 1 ? "red" : "#2bced6"} />
      </View>
      
      <TouchableOpacity style={tw`p-3 flex-row justify-center shadow-md bg-gray-200 rounded-lg mx-auto my-3`} onPress={() => makeSchedule()}>
        <Text style={tw`font-bold text-gray-500 text-xs`}>Set Reminder</Text>
        <Icon name="bell" size={12} color="#737f8a" type="font-awesome" />
      </TouchableOpacity>
    </View>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({});
