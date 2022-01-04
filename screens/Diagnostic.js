import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import DiagnosticCard from "../components/DiagnosticCard";
import { useDispatch, useSelector } from "react-redux";
import { selectRequest } from "../slices/carSlice";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import Firebase from "../config/firebase";

const firestore = Firebase.firestore();

const Diagnostic = () => {
  const request = useSelector(selectRequest);
  const { user } = useContext(AuthenticatedUserContext);
  const [report, setReport] = useState();

  // console.log(user.uid);
  const userId = user.uid;

  useEffect(() => {
    const subscriber = firestore
      .collection("Report")
      .doc(userId)
      .collection("Report")
      .doc(request)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setReport(doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  //     {
  //       const report = [];

  //       querySnapshot.forEach((documentSnapshot) => {
  //         report.push({
  //           ...documentSnapshot.data(),
  //           // key: documentSnapshot.id,
  //         });
  //       });
  //       // console.log(requests);
  //       setReport(report);
  //       // setLoading(false);
  //     });
  // }, []);

  console.log(report);

  const navigation = useNavigation();
  return (
    <View style={tw`mb-8`}>
      <View style={tw`flex-row justify-around mt-12`}>
        <View style={tw`mb-8`}>
          <Text>Request ID:{request}</Text>
          <Text style={tw`font-bold text-lg text-black`}>Diagnosis</Text>
          <Text>View your car diagnosis below</Text>
        </View>
        <View style={tw`content-center flex-row`}>
          <Text>Quotation</Text>
          <Icon
            onPress={() => navigation.navigate("Quotation")}
            style={tw`ml-2`}
            name="chevron-right"
            type="font-awesome"
          />
        </View>
      </View>
      <ScrollView style={tw`mb-5`}>
        {/* <DiagnosticCard system="Interior" issue={2} />
        <DiagnosticCard system="Exterior" issue={2} />
        <DiagnosticCard system="Underbody" issue={2} />
        <DiagnosticCard system="Underhood" issue={2} />
        <DiagnosticCard system="Road Test" issue={2} /> */}
        {/* {x.map((item) => {
          return (
            <div>{item}</div>
          )
        })} */}
        <View style={tw`mb-24`}>

        <View style={tw`mb-5 bg-white`}>
      <Text style={tw`text-green-800`}>Interior</Text>
      <Text>Fuel door release: {report?report.fuelDoorRelease:'Loading'}</Text>
      <Text>Hood release: {report?report.hoodRelease:'Loading'}</Text>
      <Text>Trunk release: {report?report.trunkRelease:'Loading'}</Text>
      <Text>Air bags: {report?report.airBags:'Loading'}</Text>
      <Text>Tilt/telescopic steering wheels: {report?report.steeringWheels:'Loading'}</Text>
      <Text>Horn: {report?report.horn:'Loading'}</Text>
      <Text>Wiper controls: {report?report.wiperControls:'Loading'}</Text>
      <Text>Wind Shield Washer controls: {report?report.washerControls:'Loading'}</Text>
      <Text>AC: {report?report.ac:'Loading'}</Text>
      </View>

      <View style={tw`mb-5 bg-white`}>
      <Text style={tw`text-green-800`}>Exterior</Text>
      <Text>windshield: {report?report.windShield:'Loading'}</Text>
      <Text>Wiper: {report?report.wiper:'Loading'}</Text>
      <Text>Mirrors: {report?report.sideMirrors:'Loading'}</Text>
      <Text>Head Lights: {report?report.headLights:'Loading'}</Text>
      <Text>Turn signals: {report?report.turnSignals:'Loading'}</Text>
      <Text>Tail lights: {report?report.tailLights:'Loading'}</Text>
      <Text>Brake lights: {report?report.brakeLights:'Loading'}</Text>
      <Text>Reverse lights: {report?report.reverseLights:'Loading'}</Text>
      <Text>Front bumber: {report?report.frontBumper:'Loading'}</Text>
      <Text>Rear bumber: {report?report.rearBumper:'Loading'}</Text>
      </View>

      <View style={tw`mb-5 bg-white`}>
      <Text style={tw`text-green-800`}>Tires</Text>
      <Text>Alignment: {report?report.alignment:'Loading'}</Text>
      <Text>Left front tire: {report?report.leftFrontTire:'Loading'}</Text>
      <Text>Left rear tire: {report?report.leftRearTire:'Loading'}</Text>
      <Text>Right front tire: {report?report.rightFrontTire:'Loading'}</Text>
      <Text>Right rear tire: {report?report.rightRearTire:'Loading'}</Text>
      <Text>Spare tire: {report?report.spareTire:'Loading'}</Text>
      </View>

      <View style={tw`mb-5 bg-white`}>
      <Text style={tw`text-green-800`}>Underhood</Text>
      <Text>Engine Oil: {report?report.engineOil:'Loading'}</Text>
      <Text>Brake Fluid: {report?report.brakeFluid:'Loading'}</Text>
      <Text>Coolant: {report?report.coolant:'Loading'}</Text>
      <Text>Power Steering Fluid: {report?report.powerSteeringFluid:'Loading'}</Text>
      <Text>Transmission Fluid: {report?report.transmissionFluid:'Loading'}</Text>
      <Text>Engine Mounts: {report?report.engineMounts:'Loading'}</Text>
      <Text>Engine Belts: {report?report.engineBelts:'Loading'}</Text>
      <Text>Radiator: {report?report.radiator:'Loading'}</Text>
      <Text>Battery: {report?report.battery:'Loading'}</Text>
      <Text>Alternator: {report?report.alternator:'Loading'}</Text>
      <Text>Fuel Filter: {report?report.fuelFilter:'Loading'}</Text>
      <Text>Fuel Pump: {report?report.fuelPump:'Loading'}</Text>
      </View>

      <View style={tw`mb-5 bg-white`}>
      <Text style={tw`text-green-800`}>Road test</Text>
      <Text>Starting: {report?report.starting:'Loading'}</Text>
      <Text>Idling: {report?report.idling:'Loading'}</Text>
      <Text>Engine Noise: {report?report.engineNoise:'Loading'}</Text>
      <Text>Throttle: {report?report.throttle:'Loading'}</Text>
      <Text>Transmission Shift: {report?report.transmissionShift:'Loading'}</Text>
      <Text>Accelerating: {report?report.accelerating:'Loading'}</Text>
      <Text>Steering Alignment: {report?report.steeringAlignment:'Loading'}</Text>
      <Text>Braking: {report?report.braking:'Loading'}</Text>
      <Text>ABS: {report?report.abs:'Loading'}</Text>
      </View>

      </View>
      </ScrollView>
      <View style={tw`mt-5`}></View>
    </View>
  );
};

export default Diagnostic;

const styles = StyleSheet.create({});
