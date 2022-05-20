import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import AddCar from "../components/AddCar";
import HealthCard from "../components/HealthCard";
import ServiceButton from "../components/ServiceButton";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import ServiceInfo from "../components/ServiceInfo";
import { useSelector, useDispatch } from "react-redux";
import { getPlans } from "../slices/carSlice";
import { getCars, fetchBasketItems } from "../slices/carSlice";
import PlansForCar from "../components/PlansForCar";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications'
import { getPermission } from "../notificationsConfig";

const apikey = Constants.manifest.extra.carApi
const firestore = Firebase.firestore();

const Home = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [usersFullname, setusersFullname] = useState(null);
  const [image, setImage] = useState();

  const navigation = useNavigation();
  const router = useRoute();
  const { user } = useContext(AuthenticatedUserContext);

  const [notification, setNotification] = useState(null);
 
  const { current_car, cars, plans, basket } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true

    const fetchuserData = async () => {
      await firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => setusersFullname(doc.data().name))
        .catch((error) => console.log(error));
    };
    
    const fetchGarage = async () => {
      await firestore
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
        dispatch(getCars(garage));
        setLoading(false);
      });
    }
    if(mounted){
      fetchGarage()
      fetchuserData()
    }

    return () => { mounted = false }
  }, []);

  useEffect(() => {
    getPermission(user.uid)
    
    Notifications.addNotificationReceivedListener(notification => {
      //when notification comes in
      setNotification(notification);
    });

    Notifications.addNotificationResponseReceivedListener(response => {
      //when the notification is clicked
      // console.log(response)
      // navigation.navigate("Garage")
    });
  }, [])
  
  useEffect(() => {
    let mounted = true

    const fetchPlans = async () => {
      if (!current_car) return;

      let plan_arr = [];

      await firestore
        .collection("Plans")
        .doc(user.uid)
        .collection("Plans")
        .where("carId", "==", current_car.key)
        .get()
        .then((res) => {
          res.forEach((plan) => {
            plan_arr = [...plan_arr, { ...plan.data(), createdAt: plan.data().createdAt.seconds }];
          });
        })
        .catch((error) => console.log(error));

      await firestore
        .collection("Plans")
        .doc(user.uid)
        .collection("Plans")
        .where("Name", "==", "Membership")
        .get()
        .then((res) => {
          res.forEach((plan) => {
            plan_arr = [...plan_arr, { ...plan.data(), createdAt: plan.data().createdAt.seconds }];
          });
        })
        .catch((error) => console.log(error));

      return dispatch(getPlans(plan_arr));
    };

  
    fetchPlans()

    return () => { mounted = false }
  }, [current_car]);

  useEffect(() => {
    const fetchBasket = () =>{
      firestore.collection("Basket")
      .doc(user.uid)
      .collection("Basket")
      .onSnapshot(snapshot => {
        dispatch(fetchBasketItems(snapshot.docs?.map(doc => doc.data())))
      })
  }

  fetchBasket()
  }, [])

  const handleServiceButton = (route) => {
    if (cars.length === 0)
      return alert("Add car to your garage to access this feature");
    if (!current_car) return alert("Select a car to access these services");

    return navigation.navigate(route);
  };

  const checkModal = () => {
    if (router.params?.alert) return true;
    return false;
  };

  // useEffect(() => {
    // let mounted = true
    // const fetchImage = async () => {
    //   const img = await fetch(
    //     `http://api.carsxe.com/images?key=${apikey}&make=${current_car.Make}&model=${current_car.Model}&year=${current_car.Year}&transparent=true`,
    //     {
    //       method: "GET",
    //     }
    //   );
    //   const res = await img.json();
    //   return res;
    // };
    
    // fetchImage().then((images) => {
    //   if(mounted){
    //     setImage(images.images[0].thumbnailLink)
    //   }
    // }).catch(err => { return err })
    // setLoading(false);

    // return () => { mounted = false }
  // }, [current_car]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={"#2bced6"} />
      </View>
    );
  }

  return (
    <View style={tw`bg-white pt-16 flex-grow`}>
      <ScrollView>
        <View style={tw`bg-white ${checkModal() && "opacity-40"}`}>
          <View style={tw`flex-row justify-between px-3`}>
            <View>
              <Text style={tw`font-bold text-lg text-black`}>
                Welcome {usersFullname}{" "}
              </Text>
              <Text>How's your car feeling today</Text>
            </View>

            <TouchableOpacity
              style={tw`flex-row relative`}
              onPress={() => navigation.navigate("Basket")}
            >
              <View style={styles.basket}>
                <Text style={{ color: "white" }}>{basket.length}</Text>
              </View>

              <Image
                source={require("../assets/icons/shopping-cart.png")}
                style={{ resizeMode: "contain", height: 40 }}
              />
            </TouchableOpacity>
          </View>

          {cars.length !== 0 ? (
            <View style={tw`px-4 mt-5 mb-3`}>
              {current_car ? (
                <View>
                  <Text
                    style={[
                      tw`text-2xl font-semibold mb-5`,
                      { color: "#2bced6" },
                    ]}
                  >
                    {current_car.Make} {current_car.Model}
                  </Text>

                  <ServiceInfo current_car={current_car} />
                </View>
              ) : (
                <Text style={tw`text-xl text-gray-600 font-medium`}>
                  Select a car from your garage
                </Text>
              )}
            </View>
          ) : (
            <AddCar />
          )}

          {cars.length > 0 ? (
            <TouchableOpacity
              style={[styles.selectCar, tw`mx-auto`]}
              onPress={() => navigation.navigate("Garage")}
            >
              <Text style={tw`text-white text-xl text-center`}>
                {current_car ? "Change Car" : "Select Car"}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={tw`w-full items-center justify-center`}>
              <Text style={tw`font-semibold mb-5 text-gray-400`}>
                No car(s) yet
              </Text>
            </View>
          )}

          <View style={tw`bg-gray-100  rounded-t-3xl`}>
            {current_car && (
              <View style={tw`bg-gray-100 mt-5 w-full mx-auto p-3 rounded-lg`}>
                <View style={tw`mb-5`}>
                  <Text style={tw`text-xl font-semibold text-gray-800`}>
                    Membership Plan
                  </Text>
                  {plans.filter((item) => item.Name === "Membership").length >
                  0 ? (
                    plans
                      .filter((item) => item.Name === "Membership")
                      .map((mem, index) => (
                        <Text
                          key={index}
                          style={[tw`font-semibold text-sm text-gray-500`]}
                        >
                          {mem.type} {mem.Name}
                        </Text>
                      ))
                  ) : (
                    <Text style={tw`text-sm text-gray-400`}>
                      You have no membership plan yet
                    </Text>
                  )}
                </View>

                <PlansForCar selectedCar={current_car} plans={plans} />
              </View>
            )}

            <View style={tw`mb-5 flex-grow`}>
              <View>
                {loading ? (
                  <Text>Loading</Text>
                ) : (
                  <HealthCard image={image} />
                )}
              </View>

              <Text style={tw`ml-7 mt-5 text-center font-bold mb-5 text-lg`}>
                Make a request
              </Text>
            </View>

            <View
              style={tw`flex-row mb-24 flex-wrap items-center justify-center`}
            >
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
              <ServiceButton
                title="Buy parts"
                image={require("../assets/icons/shop.png")}
                onPress={() => handleServiceButton("Shop")}
              />
              <ServiceButton
                title="Scan your car"
                image={require("../assets/icons/scan.png")}
                onPress={() => handleServiceButton("Scan")}
              />
            </View>
          </View>
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
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
    width: "80%",
    paddingVertical: 5,
  },

  basket: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2bced6",
    height: 16,
    width: 16,
    zIndex: 2,
    left: -3,
    borderRadius: 999,
  },
});
