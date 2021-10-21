import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import AddCar from "../components/AddCar";
import HealthCard from "../components/HealthCard";
import ServiceButton from "../components/ServiceButton";
import { IconButton } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

const Home = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={tw`bg-white`}>
        <View style={tw`flex-row mt-10`}>
          <IconButton
            name="logout"
            size={24}
            color="#2bced6"
            onPress={handleSignOut}
          />
          <Text style={tw`ml-5`}>Logout</Text>
        </View>

        <View style={tw`ml-5 mt-5`}>
          <View style={tw`mb-8`}>
            <Text style={tw`font-bold text-lg text-black`}>
              Welcome {user.email}{" "}
            </Text>
            <Text>How's your car feeling today</Text>
          </View>
        </View>
        <AddCar />

        <View
        // style={styles.container}
        >
          {/* <StatusBar style="dark-content" /> */}
          <View
          // style={styles.row}
          >
            {/* <Text 
              // style={styles.title}
              >Welcome {user.email}!</Text> */}
          </View>
          {/* <Text 
            // style={styles.text}
            >Your UID is: {user.uid} </Text> */}
        </View>

        <View style={tw`bg-gray-100  rounded-t-3xl`}>
          <View style={tw`mb-5`}>
            <Text style={tw`ml-7 mt-5`}>Make a request</Text>
            <TouchableOpacity
              style={tw`bg-white flex-row ml-5 mr-5 rounded-xl py-10`}
            >
              <Image
                style={tw`ml-7`}
                source={require("../assets/icons/scan.png")}
              />
              <Text style={tw`ml-7 mt-2`}>
                Request a scan to view health report
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row`}>
            <ServiceButton
              title="Repair"
              image={require("../assets/icons/repair.png")}
              onPress={() => navigation.navigate("Repairs")}
            />
            <ServiceButton
              title="Maintenance"
              image={require("../assets/icons/maintain.png")}
              onPress={() => navigation.navigate("Maintenance")}
            />
            <ServiceButton
              title="Inspection"
              image={require("../assets/icons/Inspect.png")}
              onPress={() => navigation.navigate("Inspection")}
            />
          </View>
          <View>
            <HealthCard />
          </View>
        </View>
        <View style={tw``}></View>
      </View>
    </ScrollView>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e93b81",
//     paddingTop: 50,
//     paddingHorizontal: 12,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: "#fff",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "normal",
//     color: "#fff",
//   },
// });
