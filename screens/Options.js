import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import tw from "tailwind-react-native-classnames";
import { IconButton } from "../components";

const auth = Firebase.auth();
const firestore = Firebase.firestore();

const Options = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={tw`mt-20`}>
      <Text style={tw`mb-5`}>Profile</Text>
      <Text style={tw`mb-5`}>Help and Support</Text>
      <Text style={tw`mb-5`}>Privacy policy</Text>
      <View style={tw`flex-row mb-5`}>
          <IconButton
            name="logout"
            size={24}
            color="#2bced6"
            onPress={handleSignOut}
          />
          <Text style={tw`ml-5`}>Logout</Text>
        </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
