import { useNavigation } from "@react-navigation/native";
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
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const lastServiceDate = useSelector(selectLastServiceDate);
  const [usersFullname, setusersFullname] = useState(null);
  const [disableReq, setdisableReq] = useState(false)

  const navigation = useNavigation();
  const { user } = useContext(AuthenticatedUserContext);
  
  const { current_car, cars } = useSelector(state => state.car)
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
        dispatch(getCars(garage))
        setLoading(false);
      });

      if(current_car){
        setdisableReq(false)
      }else{
        setdisableReq(true)
      }
  }, []);

    useEffect(() => {
      const fetchuserData = async () => {
        await firestore.collection("users").doc(user.uid).get()
              .then(doc => setusersFullname(doc.data().name))
              .catch(error => console.log(error))
      }
      
      fetchuserData()
    }, [user])
  

  const handleServiceButton = (route) => {
    if(disableReq) return alert("Select a car to access these services")
    
    return navigation.navigate(route)
  }

  const dt =
    cars.length !== 0 ? new Date(cars[0].nextServiceDate) : new Date();
  const lstDt =
    cars.length !== 0 ? new Date(cars[0].lastServiceDate) : new Date();
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
  
  return (
    <View style={tw`bg-white pt-10`}>
       {/* scroll section with cards */}
      <ScrollView>

        <View style={tw`bg-white`}>
          <View style={tw`flex-row justify-between px-3`}>
            <View>
              <Text style={tw`font-bold text-lg text-black`}>
                Welcome {usersFullname}{" "}
              </Text>
              <Text>How's your car feeling today</Text>
            </View>

            {cars.length > 0 ? 
            <TouchableOpacity style={styles.selectCar} onPress={() => navigation.navigate('Garage')}>
              <Text style={tw`text-white`} >Select car</Text>
              <Icon name="sort-down" color={"white"} type="font-awesome" />
            </TouchableOpacity>
            :

            <View>
              <Text style={tw`font-semibold`}>No car(s) yet</Text>
            </View>
            }
          </View>

          {cars.length !== 0 ? (
            <View style={tw`px-3 mt-5 mb-3`}>
              {
                current_car ? 
                <ServiceInfo
                  serviceDate={cars[0].nextServiceDate}
                  duration={duration}
                  progressLeft={progressLeft}
                />
                :
                <Text style={tw`text-xl text-gray-600 font-medium`}>Select a car from your garage</Text>
              }
            </View>
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
                onPress={() => handleServiceButton("Scan")}
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
                onPress={() => handleServiceButton("Repairs")}
              />
              <ServiceButton
                title="Maintenance"
                image={require("../assets/icons/maintain.png")}
                onPress={() => handleServiceButton("Maintenance")}
              />
              <ServiceButton
                title="Inspection"
                image={require("../assets/icons/Inspect.png")}
                onPress={() => handleServiceButton("Inspection")}
              />
              <ServiceButton
                title="Plans"
                image={require("../assets/icons/wpf_renew-subscription.png")}
                onPress={() => handleServiceButton("Plans")}
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
  selectCar: {
    backgroundColor: "#2bced6",
    paddingHorizontal: 10,
    // paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20
  }
});
