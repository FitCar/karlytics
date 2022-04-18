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

const HealthCard = ({image}) => {
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(${color}, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };

  const health = 0.6;

  let color = "";

  if (health < 0.7) {
    color = "220,20,60";
  } else {
    color = "80, 200, 120";
  }

  const data = {
    labels: ["Car Health"], // optional
    data: [health],
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
        <View style={tw`-ml-28 mt-8 mb-5`}>
          <View>
          <Image
            style={styles.logo}
            source={{
              uri:
                `${image}`,
            }}
          />
          </View>
          <View>
          <Text>Distance travelled: 23km</Text>
          <Text>Faults: 0</Text>
          <Text>Status: Very good</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height:90,
    marginBottom: 15,
   
  }
});
