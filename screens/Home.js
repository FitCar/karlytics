import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
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
import { useSelector, useDispatch } from "react-redux";
import { selectLastServiceDate } from "../slices/carSlice";
import { formatDistanceToNow } from "date-fns";
import CarCard from "../components/CarCard";
import { getCars } from '../slices/carSlice'

const firestore = Firebase.firestore();

const Home = () => {
  const [garage, setGarage] = useState([]); // Initial empty array of users
  const [selectedCar, setSelectedCar] = useState("");
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [isVisible, setIsVisible] = useState(false)
  const lastServiceDate = useSelector(selectLastServiceDate);
  const [usersFullname, setusersFullname] = useState(null);

  const navigation = useNavigation();
  const { user } = useContext(AuthenticatedUserContext);
  const dispatch = useDispatch()
  
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
        dispatch(getCars(garage))
        setLoading(false);
      });
  }, []);

    useEffect(() => {
      const fetchuserData = async () => {
        await firestore.collection("users").doc(user.uid).get()
              .then(doc => setusersFullname(doc.data().name))
              .catch(error => console.log(error))
      }
      
      fetchuserData()
    }, [user])
  

  const dt =
    garage.length !== 0 ? new Date(garage[0].nextServiceDate) : new Date();
  const lstDt =
    garage.length !== 0 ? new Date(garage[0].lastServiceDate) : new Date();
  // console.log(dt);
  const duration = formatDistanceToNow(dt);
  // console.log(duration);

  const now = new Date();
  const one_day = 1000 * 60 * 60 * 24;
  const totalDays = (Math.round(dt.getTime() - lstDt.getTime()) / one_day).toFixed(0);
  
  console.log(totalDays);
  
  const leftDays = (Math.round(dt.getTime() - new Date().getTime()) / one_day).toFixed(0);
  console.log(leftDays);

  const progressLeft = leftDays / totalDays;
  console.log(progressLeft);

 const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  return (
    <View style={tw`bg-white`}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isVisible}
      >
        
        <FlatList
        data={garage}
        renderItem={({ item }) => (
          <CarCard make={item.Make} model={item.Model} onSelect={closeModal} />
        )}
        keyExtractor={(item) => item.key}
      />
      </Modal>

      {/* section 1: navbar */}
      <View style={styles.header}>
        <View style={tw`mt-10 ml-5 flex-row`}>
          <Image
            source={require("../assets/Images/karlyticsLogo.png")}
            style={tw`h-10 w-10`}
          />
          <Text style={tw`text-2xl text-pry-1`}>Karlytics</Text>
        </View>
      </View>

       {/* scroll section with cards */}
      <ScrollView>

        <View style={tw`bg-white mt-5`}>
            <View style={tw`flex-row justify-between px-3`}>
              <View>
                <Text style={tw`font-bold text-lg text-black`}>
                  Welcome {usersFullname}{" "}
                </Text>
                <Text>How's your car feeling today</Text>
              </View>

             {garage.length > 0 ? 
              <TouchableOpacity>
                <Text>Select car</Text>
                <Icon name="sort-down" type="font-awesome" onPress={openModal} />
              </TouchableOpacity>
              :

              <View>
                <Text style={tw`font-semibold`}>No car(s) yet</Text>
              </View>
              }
          </View>

          {garage.length !== 0 ? (
            <ServiceInfo
              serviceDate={garage[0].nextServiceDate}
              duration={duration}
              progressLeft={progressLeft}
            />
          ) : (
            <AddCar />
          )}

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
