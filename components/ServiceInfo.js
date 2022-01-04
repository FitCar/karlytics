import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ProgressBar, Colors } from "react-native-paper";



const ServiceInfo = () => {

  // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  let days;
  let hours;
  let minutes;
  let seconds;
  let countDownDate = new Date(2021, 11, 19)
  let now = new Date().getTime()
  let info = now.toString()
  let info2 = countDownDate.toString()
  
  

  var x = setInterval(function () {
    // Get today's date and time
    

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


  return (
    <View>
      
      <Text style={tw`ml-10 font-bold`}>Car Servicing (Coming soon)</Text>
  <Text style={tw`ml-10 font-bold`}>Due by {info2}</Text>
      <View style={tw`mx-10 my-2`}>
        <ProgressBar progress={0.5} color="#2bced6"/>
      </View>
      <Text style={tw`ml-10 font-bold`}>Due by 120,000km</Text>
      {/* <View style={tw`mx-10 my-2`}>
        <ProgressBar progress={0.5} color="#2bced6"/>
      </View> */}
      <Text style={tw`ml-72 font-bold mb-5`}>Set Reminder</Text>
    </View>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({});
