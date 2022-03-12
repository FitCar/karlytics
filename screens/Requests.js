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
        setRequests(request);
        setLoading(false);
      });
  },[]);

  
  return (
    
    <View style={tw`flex-grow pb-36`}>
        <View style={tw`mb-8 pt-10 px-3`}>
          <Text style={tw`font-bold text-lg text-black`}>Requests</Text>
          <Text>View your requests</Text>
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
