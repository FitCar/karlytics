import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import QuotationCard from "../components/QuotationCard";
import { useSelector } from "react-redux";
import { selectRequest } from "../slices/carSlice";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import Firebase from "../config/firebase";
import { Wave } from "react-native-animated-spinkit";

const firestore = Firebase.firestore();

const Quotation = () => {
  const request = useSelector(selectRequest);
  const { user } = useContext(AuthenticatedUserContext);
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const userId = user.uid;

  useEffect(() => {
    const fetchQuotations = async () => {
      setLoading(true);
      const subscriber = await firestore
        .collection("Quotation")
        .doc(userId)
        .collection("Quotation")
        .doc(request)
        .get();

      if (!subscriber.data()) return setLoading(false);

      setQuote(subscriber.data().quotes);
      return setLoading(false);
    };

    fetchQuotations();
  }, []);

  return (
    <View style={tw`flex-grow`}>
      <View style={tw`flex-row justify-around mt-10`}>
        <View style={tw`mb-8`}>
          <Text
            style={[tw`font-bold text-xl mb-2`, { fontFamily: "SatushiBlack" }]}
          >
            Quotation
          </Text>
          <Text style={{ color: "grey", fontFamily: "SatushiMedium" }}>
            Request ID:{" "}
            <Text style={{ fontFamily: "SatushiBold", color: "#000" }}>
              {request}
            </Text>
          </Text>

          {quote.length > 0 && (
            <Text style={[tw`text-gray-600`, { fontFamily: "SatushiBold" }]}>
              View your quotation below
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={tw`content-center flex-row`}
          onPress={() => navigation.navigate("Basket")}
        >
          <Icon name="shopping-basket" type="font-awesome" />
          <Icon name="chevron-right" type="font-awesome" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={tw`w-full flex-grow items-center justify-center`}>
          <Wave size={30} color="#2bced6" />
        </View>
      ) : (
        <ScrollView style={[tw`mb-20 flex-grow`, { maxHeight: 500 }]}>
          {quote.length === 0 ? (
            <View style={tw`w-full items-center flex-grow justify-center`}>
              <Text style={tw`text-gray-500`}>No Quotation available</Text>
            </View>
          ) : (
            quote.map((quotes, index) => {
              return (
                <View key={index + 1}>
                  <QuotationCard
                    partNumber={quotes.partNumber}
                    description={quotes.description}
                    qty={quotes.qty}
                    unitPrice={quotes.unitPrice}
                    total={quotes.total}
                    id={quotes.index}
                  />
                </View>
              );
            })
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Quotation;

const styles = StyleSheet.create({});
