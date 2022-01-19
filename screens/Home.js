import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
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
import ServiceInfo from "../components/ServiceInfo";
import { useSelector } from "react-redux";
import { selectLastServiceDate } from "../slices/carSlice";
import { formatDistanceToNow } from "date-fns";

const auth = Firebase.auth();
const firestore = Firebase.firestore();

const Home = () => {
  const [garage, setGarage] = useState([]); // Initial empty array of users
  const [selectedCar, setSelectedCar] = useState("");
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const lastServiceDate = useSelector(selectLastServiceDate);

  const navigation = useNavigation();
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subscriber = firestore
      .collection("Garage")
      .doc(user.uid)
      .collection("Garage")
      .where("garageId", "==", user.uid)
      .onSnapshot((querySnapshot) => {
        const garage = [];

        querySnapshot.forEach((documentSnapshot) => {
          garage.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        console.log(garage);
        setGarage(garage);
        setLoading(false);
      });
  }, []);

  const dt = garage.length !== 0 ? new Date(garage[3].nextServiceDate): new Date()
  const lstDt = garage.length !== 0 ? new Date(garage[3].lastServiceDate) : new Date()
  console.log(dt)
  const duration = formatDistanceToNow(dt);
  console.log(duration)

  const now = new Date()
  const one_day = 1000 * 60 * 60 * 24
  const totalDays = (Math.round(dt.getTime() - lstDt.getTime()) / one_day).toFixed(0);
  console.log(totalDays)
  const leftDays = (Math.round(dt.getTime() - new Date().getTime()) / one_day).toFixed(0);
  console.log(leftDays)

  const progressLeft = (leftDays/totalDays)
  console.log(progressLeft)

  return (
    <View style={tw`bg-white`}>
      <View style={styles.header}>
        <View style={tw`mt-10 ml-5 flex-row`}>
          <Image
            source={require("../assets/Images/karlyticsLogo.png")}
            style={tw`h-10 w-10`}
          />
          <Text style={tw`text-2xl text-pry-1`}>Karlytics</Text>
        </View>
      </View>
      <ScrollView>
        <View style={tw`bg-white`}>
          {/* <View style={tw`flex-row mt-10`}>
          <IconButton
            name="logout"
            size={24}
            color="#2bced6"
            onPress={handleSignOut}
          />
          <Text style={tw`ml-5`}>Logout</Text>
        </View> */}

          <View style={tw`ml-5 mt-5`}>
            <View>
            <View style={tw`mb-8`}>
              <Text style={tw`font-bold text-lg text-black`}>
                Welcome {user.email}{" "}
              </Text>
              <Text>How's your car feeling today</Text>
            </View>
            <View>
            <Image
                  style={tw`ml-7`}
                  source={require("../assets/icons/scan.png")}
                />
            </View>
            </View>
          </View>

          {garage.length !== 0 ? <ServiceInfo serviceDate={garage[3].nextServiceDate} duration={duration} progressLeft={progressLeft} /> : <AddCar />}
          {/* <AddCar /> */}

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
              <View>
                <HealthCard />
              </View>
              <Text style={tw`ml-7 mt-5 text-center font-bold mb-5 text-lg`}>
                Make a request
              </Text>
              <TouchableOpacity
                style={tw`bg-white flex-row ml-5 mr-5 rounded-xl py-10`}
                onPress={() => navigation.navigate("Scan")}
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
            <View style={tw`flex-row mb-24 flex-wrap`}>
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
              <ServiceButton
                title="Plans"
                image={require("../assets/icons/wpf_renew-subscription.png")}
                onPress={() => navigation.navigate("Plans")}
              />
            </View>
          </View>
          {/* <View style={tw``}></View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // header: {
  //   position: "absolute",
  //   top: 0
  // },
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
});
