import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../slices/carSlice";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../config/firebase";

const firestore = Firebase.firestore();

const QuotationCard = ({
  partNumber,
  description,
  qty,
  unitPrice,
  total,
  id,
}) => {
  const dispatch = useDispatch();
  const { basket, requestId } = useSelector((state) => state.car);
  const navigation = useNavigation();

  const { user } = useContext(AuthenticatedUserContext);

  const addItemToBasket = () => {
    const item_in_basket = basket.filter(
      (item) => item.requestId === requestId && item.index === id
    );

    if (item_in_basket.length > 0)
      return Alert.alert("Item already added to basket");

    dispatch(
      addToBasket({
        partNumber,
        description,
        qty,
        unitPrice,
        total,
        index: id,
        requestId,
      })
    );

    firestore
      .collection("Basket")
      .doc(user.uid)
      .collection("Basket")
      .add({
        partNumber,
        description,
        qty,
        unitPrice,
        total,
        index: id,
        requestId,
      })
      .then((doc) => {
        doc.set(
          {
            basketId: doc.id,
          },
          { merge: true }
        );
      });

    return navigation.navigate("Basket");
  };

  return (
    <View
      style={tw`bg-white mx-4 rounded-xl mb-8 p-5 justify-center shadow-2xl h-28`}
      key={id}
    >
      <View style={tw`flex-row justify-between h-12 items-center`}>
        <Icon name="car-battery" type="font-awesome-5" />
        <View>
          <Text style={[tw`text-gray-500`, { fontFamily: "SatushiMedium" }]}>
            Part Number:{" "}
            <Text
              style={[
                tw`font-semibold`,
                { fontFamily: "SatushiBold", color: "#000" },
              ]}
            >
              {partNumber}
            </Text>{" "}
          </Text>

          <Text style={[tw`text-gray-500`, { fontFamily: "SatushiMedium" }]}>
            Description:{" "}
            <Text
              style={[
                tw`font-semibold`,
                { fontFamily: "SatushiBold", color: "#000" },
              ]}
            >
              {description}
            </Text>
          </Text>

          <Text style={[tw`text-gray-500`, { fontFamily: "SatushiMedium" }]}>
            Qty:{" "}
            <Text
              style={[
                tw`font-semibold`,
                { fontFamily: "SatushiBold", color: "#000" },
              ]}
            >
              {qty}
            </Text>
          </Text>

          <Text style={[tw`text-gray-500`, { fontFamily: "SatushiMedium" }]}>
            Unit Price:{" "}
            <Text
              style={[
                tw`font-semibold`,
                { fontFamily: "SatushiBold", color: "#000" },
              ]}
            >
              {unitPrice}
            </Text>
          </Text>

          <Text style={tw`text-lg`}>
            Total:{" "}
            <Text
              style={[
                tw`font-semibold`,
                { fontFamily: "SatushiBold", color: "#000" },
              ]}
            >
              {total}
            </Text>
          </Text>
        </View>

        <View style={tw`-mt-4`}>
          {basket.filter(
            (item) => item.requestId === requestId && item.index === id
          ).length > 0 ? (
            <Text
              style={[
                tw`text-sm text-gray-500`,
                { fontFamily: "SatushiMedium" },
              ]}
            >
              Already in Basket
            </Text>
          ) : (
            <TouchableOpacity
              style={[
                tw` border-2 items-center mb-1 border-gray-50 py-2 px-2 rounded-xl`,
                { backgroundColor: "#2bced6" },
              ]}
              onPress={addItemToBasket}
            >
              <Text style={tw`text-xs text-white font-semibold`}>
                Add to Basket
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default QuotationCard;

const styles = StyleSheet.create({});
