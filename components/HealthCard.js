import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import tw from "tailwind-react-native-classnames";

const HealthCard = ({ image }) => {
  const carHealth = 65;

  const getCarColor = () => {
    if (carHealth >= 45 && carHealth < 80) return "orange";
    if (carHealth >= 80) return "#2ca21e";
    return "red";
  };

  return (
    <View style={tw`bg-white rounded-2xl mx-2 mt-5 px-3 py-5`}>
      <Text style={tw`font-bold text-center text-lg`}>Car Health</Text>

      <View style={tw`flex-row items-center justify-around mt-3`}>
        <CircularProgress
          value={carHealth}
          inActiveStrokeColor={getCarColor(carHealth)}
          inActiveStrokeOpacity={0.3}
          textColor={"#ecf0f1"}
          maxValue={100}
          activeStrokeColor={getCarColor(carHealth)}
          valueSuffix={"%"}
        />

        <View>
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: `${image}`,
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
    height: 90,
    marginBottom: 15,
  },
});
