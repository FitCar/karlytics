import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
// import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { Icon } from "react-native-elements";
import Firebase from "../config/firebase";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const firestore = Firebase.firestore();

const Repairs = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const location = ["On-Site", "Pick-up", "Drop-off"];
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [garage, setGarage] = useState([]); // Initial empty array of users
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  // console.log(date);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const toggle = () => {
    setExpanded(!expanded);
  };

  const submit = () => {
    // const requestId = user.userReducer.users.uid;

    // const newvalue = value.toString(" ");
    const newdate = date.toString();

    // const data = {
    //   newdate,
    //   newvalue,
    //   requestId,
    // };
    const requestId = user.uid;
    const data = {
      requestIcon: "../assets/icons/repair.png",
      requestType: "Repairs",
      Car: selectedCar,
      Location: selectedLocation,
      Schedule: newdate,
      requestId,
      status: "Pending"
    };

    // const requestRef = firestore()
    //   .collection("requests")
    //   .doc(requestId)
    //   .collection("requests");

    const requestRef = firestore
      .collection("Requests")
      .doc(requestId)
      .collection("Requests");

    requestRef.doc().set(data);

    // navigation.navigate("Requests");
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
        // console.log(garage);
        setGarage(garage);
        setLoading(false);
      });
  }, []);

  return (
    <View style={tw`bg-white`}>
      <View style={tw`ml-5 mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>Request Repairs</Text>
          <Text>Select a car</Text>
        </View>
      </View>
      <View>
        {/* <CollapsibleView style={tw`mb-8`} title="select a car">
          {garage.map((car) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setExpanded(!expanded);
                }}
              >
                <Text>
                  {car.Make}, {car.Model}
                </Text>
              </TouchableOpacity>
            );
          })}

          {console.log(garage)}
        </CollapsibleView> */}
        <SelectDropdown
          buttonStyle={tw`mb-5 self-center`}
          data={garage}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem.Make, index);
            setSelectedCar(selectedItem.Make + " " + selectedItem.Model);
          }}
          defaultButtonText="Select your Car"
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem.Make + " " + selectedItem.Model;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item.Make + " " + item.Model;
          }}
        />
        {/* <View
          style={tw`mb-8 flex-row justify-around h-20 items-center shadow-md border-0`}
        >
          <TouchableOpacity>
            <Image source={require("../assets/icons/tire.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/engine.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/ac.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/battery.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/brake.png")} />
          </TouchableOpacity>
        </View> */}
        {/* <CollapsibleView style={tw`mb-8`} title="select location">
          <TouchableOpacity>
            <Text>On-site</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Pick-up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Drop-off</Text>
          </TouchableOpacity>
        </CollapsibleView> */}
        <SelectDropdown
          buttonStyle={tw`mb-5 self-center`}
          data={location}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedLocation(selectedItem);
          }}
          defaultButtonText="Select Location"
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <View style={tw`mb-5`}>
          <Button onPress={showDatepicker} title="Choose Date" />
        </View>

        <View style={tw`mb-5`}>
          <Button onPress={showTimepicker} title="Choose Time" />
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Button
        title="submit"
        onPress={() => {
          submit();
          navigation.navigate("Requests");
        }}
      />
    </View>
  );
};

export default Repairs;

const styles = StyleSheet.create({});
