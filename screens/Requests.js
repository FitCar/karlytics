import React, { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Firebase from "../config/firebase";
import { useState } from "react";

const firestore = Firebase.firestore();

const Requests = () => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [requests, setRequests] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("Requests")
      .onSnapshot((querySnapshot) => {
        const request = [];

        querySnapshot.forEach((documentSnapshot) => {
          request.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        // console.log(requests);
        setRequests(request);
        setLoading(false);
      });
  },[]);

  console.log(requests)

  return (
    <View>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Requests</Text>
          <Text>View your requests</Text>
        </View>
      </View>
        <FlatList 
          data={requests}
          renderItem={({ item }) => (
            <RequestCard car={item.Car} schedule={item.Schedule} location={item.Location} requestid={item.key} requestType={item.requestType} icon={item.requestIcon} />
          )}
          keyExtractor={(item) => item.key}
        
        />
      
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({});
