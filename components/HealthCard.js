import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import tw from "tailwind-react-native-classnames";

const HealthCard = () => {
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(16, 156, 241, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ["Car Health"], // optional
    data: [0.8],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={tw`bg-white rounded-2xl mx-2 mt-5`}>
      <Text style={tw`font-bold text-center text-lg`}>
        Vehicle Health (Coming soon)
      </Text>

      <View style={tw`flex-row`}>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={10}
          radius={65}
          chartConfig={chartConfig}
          hideLegend={true}
          style={tw`-ml-24`}
        />
        <View style={tw`-ml-28 mt-16`}>
          <Image source={require("../assets/icons/garage-car.png")} />
          <Text>Distance travelled: 23km</Text>
          <Text>Faults: 0</Text>
          <Text>Status: Very good</Text>
        </View>
      </View>
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({});
