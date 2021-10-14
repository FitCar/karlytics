import { useNavigation } from "@react-navigation/native";
import React from "react";
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

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={tw`bg-white`}>
        <View style={tw`ml-5 mt-5`}>
          <View style={tw`mb-8`}>
            <Text style={tw`font-bold text-lg text-black`}>Welcome</Text>
            <Text>How's your car feeling today</Text>
          </View>
        </View>
        <AddCar />

        <View style={tw`bg-gray-100 h-1/2 rounded-t-3xl`}>
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
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
