import { Picker } from "@react-native-community/picker";
import React, { useCallback, useState } from "react";
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

const CarRegisteration = () => {

  const navigation = useNavigation()
  // let years = [];
  // const year = () => {
  //   let min = 1998;
  //   let max = 2021;

  //   let x;
  //   for (x = min; x <= max; x++) {
  //     years.push(x);
  //   }
  // };

  // year();

  // console.log(years.length);

 

  const [yearOpen, setYearOpen] = useState(false);
  const [bodyOpen, setBodyOpen] = useState(false);

  const onYearOpen = useCallback(() => {
    setBodyOpen(false);
  }, []);

  const onBodyOpen = useCallback(() => {
    setYearOpen(false);
  }, []);

  const [open, setOpen] = useState(false);
  const [bodyValue, setBodyValue] = useState(null);
  const [yearValue, setYearValue] = useState(null);
  const [year, setYear] = useState([
    { label: "1998", value: "1998" },
    { label: "1999", value: "1999" },
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
    { label: "2003", value: "2003" },
    { label: "2004", value: "2004" },
    { label: "2005", value: "2005" },
    { label: "2006", value: "2007" },
    { label: "2008", value: "2008" },
    { label: "2009", value: "2009" },
    { label: "2010", value: "2010" },
    { label: "2011", value: "2011" },
    { label: "2012", value: "2012" },
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
  ]);

  const [body, setBody] = useState([
    { label: "Saloon", value: "Saloon" },
    { label: "SUV", value: "SUV" },
    { label: "Pick Up", value: "Pick Up" },
  ]);

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
    <View>
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
          <View style={tw`mt-36`}>
          <Button
            title="submit"
            onPress={() => navigation.navigate("Garage")}
          />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CarRegisteration;

const styles = StyleSheet.create({});
