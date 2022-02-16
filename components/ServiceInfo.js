import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ProgressBar } from 'react-native-paper'
import { formatDistanceToNow } from "date-fns";

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
  let countDownDate = new Date(2021, 11, 19);

  var x = setInterval(function () {
    // Get today's date and time

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <View>
      <Text style={tw`font-bold`}>Car Servicing</Text>

      <View style={tw`flex-row justify-between`}>
        <Text style={tw`font-bold`}>Due by {current_car?.nextServiceDate}</Text>
        <Text style={tw`font-bold`}>{duration} left</Text>
      </View>
      
      <View style={tw`my-2`}>
        <ProgressBar progress={progressLeft} color="#2bced6" />
      </View>
      <Text style={tw`font-bold`}>Due by 120,000km</Text>
      {/* <View style={tw`mx-10 my-2`}>
        <ProgressBar progress={0.5} color="#2bced6"/>
      </View> */}
      <Text style={tw`ml-72 font-bold mb-5`}>Set Reminder</Text>
    </View>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({});
