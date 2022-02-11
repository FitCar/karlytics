import { Picker } from "@react-native-community/picker";
import React, { useCallback, useContext, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import uuid from "react-native-uuid";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastServiceDate,
  setNextDate,
  selectMake,
  selectModel,
} from "../slices/carSlice";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import DateTimePicker from "@react-native-community/datetimepicker";
import { add } from "date-fns";
import { formatDistanceToNow } from 'date-fns'
import { bodyData, car_years } from "../cardata";

const firestore = Firebase.firestore();

const CarRegisteration = () => {
  const { user } = useContext(AuthenticatedUserContext);
  
  const make = useSelector(selectMake);
  const model = useSelector(selectModel);
  const dispatch = useDispatch();
  const garageId = user.uid;

  const navigation = useNavigation();
 
  const [yearOpen, setYearOpen] = useState(false);
  const [bodyOpen, setBodyOpen] = useState(false);

  const onYearOpen = useCallback(() => {
    setBodyOpen(false);
  }, []);

  const onBodyOpen = useCallback(() => {
    setYearOpen(false);
  }, []);

  const [bodyValue, setBodyValue] = useState(null);
  const [yearValue, setYearValue] = useState(null);
  
  const [year, setYear] = useState(car_years);
  const [body, setBody] = useState(bodyData);

  const [lastServiceDate, setLastServiceDate] = useState(new Date());

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || lastServiceDate;
    setShow(Platform.OS === "ios");
    setLastServiceDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const newLastServiceDate = lastServiceDate.toString();
  const nextDate = add(lastServiceDate, {months: 4});
  console.log(nextDate);
  const duration = formatDistanceToNow(nextDate)
  console.log(duration)

  const submit = () => {
    const carRef = firestore
    .collection("Garage")
    .doc(garageId)
    .collection("Garage");
    
    const data = {
      Make: make,
      Model: model,
      garageId,
      lastServiceDate: newLastServiceDate,
      nextServiceDate: nextDate.toDateString()
    };
    
    carRef.doc().set(data);
    dispatch(setNextDate(nextDate.toString()))
    navigation.navigate("Garage");
  };

  //   fetch('https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10', {
  //   method: 'GET',
  //   headers: {
  //     'X-Parse-Application-Id': 't3cWozBdXMX3exSGkjFlvEpYti00or4LIBZYf4D4',
  //     'X-Parse-REST-API-Key': 'Cy3jDfA0BZBS2HpHfbsFijyYUNWmJ4HAIbwr8lHW',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue'
  //   })
  // });

  // const getCarsFromApi = async () => {
  //   const response = await fetch(
  //     'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1'
  //   );
  //   const data = await response; // Here you have the data that you need
  //   console.log(data);
  // }

  // getCarsFromApi();

  return (
    <View style={tw`py-10 px-4`}>
      
      <View style={tw`flex-row mt-5`}>
        <View style={tw`mb-8`}>
          <Text style={tw`font-bold text-lg text-black`}>
            Car registeration
          </Text>
          <Text>Register your car</Text>
        </View>
      </View>

      <KeyboardAvoidingView>
        <View>
          <TextInput placeholder="licence" />
          <TextInput placeholder="Mileage" />
          
          <DropDownPicker
            placeholder="select Year"
            zIndex={3000}
            zIndexInverse={1000}
            open={yearOpen}
            onOpen={onYearOpen}
            value={yearValue}
            items={year}
            setOpen={setYearOpen}
            setValue={setYearValue}
            setItems={setYear}
            style={tw`mb-5`}
          />

          <DropDownPicker
            placeholder="Select Body Type"
            zIndex={2000}
            zIndexInverse={2000}
            open={bodyOpen}
            onOpen={onBodyOpen}
            value={bodyValue}
            items={body}
            setOpen={setBodyOpen}
            setValue={setBodyValue}
            setItems={setBody}
            style={tw`mb-5`}
          />

          <View>
            <Button onPress={showDatepicker} title="Last service date" />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={lastServiceDate}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <View style={tw`mt-36`}>
            <Button title="submit" onPress={submit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CarRegisteration;

const styles = StyleSheet.create({});
