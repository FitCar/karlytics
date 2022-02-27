import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Firebase from "../config/firebase";
import tw from "tailwind-react-native-classnames";
import { IconButton } from "../components";
import { useNavigation } from "@react-navigation/native";

const auth = Firebase.auth();

const Options = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation()

  return (
    <View style={tw`mt-16 px-3`}>
      <Text style={tw`mb-3 font-semibold p-3 bg-white`}>Profile</Text>
      <Text style={tw`mb-3 font-semibold p-3 bg-white`}>Help and Support</Text>
      <Text style={tw`mb-3 font-semibold p-3 bg-white`} onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy policy</Text>

      <TouchableOpacity style={[tw`flex-row px-3 py-2 items-center rounded-lg w-32 bg-red-400`]}>
          <IconButton
            name="logout"
            size={24}
            color="white"
            onPress={handleSignOut}
          />
          <Text style={tw`ml-5 text-white`}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
