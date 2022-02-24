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
    <View style={tw`mt-20 ml-5 mr-5`}>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Profile</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Payment</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Change password</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Contact us</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Help and Support</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Terms and Conditions</Text>
      <Text style={tw`mb-5 font-bold border-b-gray-50 border-b`}>Privacy policy</Text>
      <View style={tw`flex-row mb-5 border-b-gray-50 border-b`}>
          <IconButton
            name="logout"
            size={24}
            color="#2bced6"
            onPress={handleSignOut}
          />
          <Text style={tw`ml-5 font-bold`}>Logout</Text>
        </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
