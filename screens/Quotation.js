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
import DiagnosticCard from "../components/DiagnosticCard";
import QuotationCard from "../components/QuotationCard";
import { useDispatch, useSelector } from "react-redux";
import { selectRequest } from "../slices/carSlice";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import Firebase from "../config/firebase";

const firestore = Firebase.firestore();

const Quotation = () => {
  const request = useSelector(selectRequest);
  const { user } = useContext(AuthenticatedUserContext);
  const [quote, setQuote] = useState([]);
  const navigation = useNavigation();

  const userId = user.uid;

  useEffect(() => {
    const fetchQuotations = async () => {
      const subscriber = await firestore
      .collection("Quotation")
      .doc(userId)
      .collection("Quotation")
      .doc(request)
      .get()
      
      if (!subscriber.data()) return 

      return setQuote(subscriber.data().quotes)
    }

    fetchQuotations()
  }, []);


  return (
    <View>
      <View style={tw`flex-row justify-around mt-10`}>
        <View style={tw`mb-8`}>
          <Text>Request ID: {request}</Text>
          <Text style={tw`font-bold text-lg text-black`}>Quotation</Text>
          {quote.length > 0 && <Text style={tw`text-gray-500`}>View your quotation below</Text>}
        </View>
        <TouchableOpacity style={tw`content-center flex-row`}>
          <Icon name="shopping-basket" type="font-awesome" />
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="chevron-right"
            type="font-awesome"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={tw`mb-28`}>
        {quote !== [] ? (
          quote.map((quotes) => {
            return (
              <QuotationCard
                partNumber={quotes.partNumber}
                description={quotes.description}
                qty={quotes.qty}
                unitPrice={quotes.unitPrice}
                total={quotes.total}
                id={quotes.index}
              />
            );
          })
        ) : (
          <Text>"loading"</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Quotation;

const styles = StyleSheet.create({});
