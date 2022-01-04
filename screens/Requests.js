import React, { useContext, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RequestCard from "../components/RequestCard";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Firebase from "../config/firebase";
import { useState } from "react";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const firestore = Firebase.firestore();

const Requests = () => {

  const { user } = useContext(AuthenticatedUserContext);

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [requests, setRequests] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("Requests").doc(user.uid).collection('Requests').where('requestId', '==', user.uid)
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
    <View style={tw`mb-24`}>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Requests</Text>
          <Text>View your requests</Text>
        </View>
      </View>
        <FlatList 
          data={requests}
          renderItem={({ item }) => (
            <RequestCard car={item.Car} schedule={item.Schedule} location={item.Location} requestid={item.key} requestType={item.requestType} icon={item.requestIcon} status={item.status} />
          )}
          keyExtractor={(item) => item.key}
        
        />
      
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({});
