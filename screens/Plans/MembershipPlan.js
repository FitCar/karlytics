import React from 'react'
import { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { MembershipPlanData } from '../../cardata'
import CarItem from '../../components/CarItem';

function MembershipPlan() {
  const [modalVisible, setmodalVisible] = useState(false)
  const [plan, setplan] = useState(null)
  const [selectedCars, setselectedCars] = useState([])

  const { cars } = useSelector(state => state.car)

  const addCommaToValue = (num) =>{
    let to_string = `${num}`

    return to_string.substring(0, 2) + ',' + to_string.substring(2, to_string.length);
  }

  const handleNext = (selectedPlan) =>{
    setmodalVisible(true)
    setplan(selectedPlan)
  } 

  const handleClose = () =>{
    setmodalVisible(false)
    setselectedCars([])
  }

  return (
    <View style={tw`mt-10 px-5`}>
       {/* modal */}
       <Modal
        animationType="slide"
        visible={modalVisible}

      >
        <View style={tw`flex-grow py-10 px-5`}>
          <View style={tw`flex-row justify-between mb-10`}>
            <View>
              <Text style={tw`text-xl font-semibold`}>Select Car for {plan?.Name} Plan</Text>
              <Text style={tw`text-gray-600 font-medium`}>What Car are you selecting the {plan?.type} for?</Text>
            </View>

            <TouchableOpacity style={tw`items center`} onPress={() => handleClose()}>
              <Text style={tw`text-xl capitalize text-red-600`}>close</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={cars}
            renderItem={({ item }) => (
              <CarItem car={item} selectedCars={selectedCars} setselectedCars={setselectedCars} />
            )}
            keyExtractor={(item) => item.key}
          />

          {
            selectedCars.length > 0 &&
            <TouchableOpacity 
              style={[tw`w-10/12 mx-auto p-3 rounded-md shadow-md`, { backgroundColor: "#2bced6" }]}
            >
              <Text style={tw`text-center`}>Add the <Text style={tw`font-semibold`}>{plan?.Name} {plan.type}</Text> to basket- Total: <Text style={tw`text-lg font-semibold`}>{addCommaToValue(plan?.price*(selectedCars.length))}</Text></Text>
            </TouchableOpacity>
          }
        </View>
        
      </Modal>

      {/* end of modal */}
      <Text style={tw`text-xl font-semibold`}>Membership Plan</Text>
      
      <View style={tw`flex-row mb-6 mt-5 items-center`}>
        <View
          style={tw` w-1/4 h-20 rounded-xl bg-white justify-center items-center`}
        >
          <Image source={require("../../assets/icons/membership.png")} />
          <Text style={tw`text-center`}>Membership Plan</Text>
        </View>

        <View style={tw`mr-28 ml-5`}>
          <Text style={tw`text-gray-500`}>
            "Get exclusive benefits like discounts on all requests and plans, priority response and much more."
          </Text>
        </View>
      </View>

      <View style={tw`items-center`}>
          {/* Gold plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>Gold <Text style={tw`text-xl`}>{addCommaToValue(MembershipPlanData.Gold.price)}</Text></Text>

            {
              MembershipPlanData.Gold.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => handleNext({Name: 'Membership', type: 'Gold', price: MembershipPlanData.Gold.price})}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(MembershipPlanData.Gold.price)}</Text></Text>
            </TouchableOpacity>
          </View>
        
          {/* Silver plan */}
          <View style={[styles.plan, tw`shadow-lg`]}>
            <Text style={styles.planHeader}>Silver <Text style={tw`text-xl`}>{addCommaToValue(MembershipPlanData.Silver.price)}</Text></Text>

            {
              MembershipPlanData.Silver.features.map((feature, index) => (
                <Text key={index+1}>- {feature}</Text>
              ))
            }

            <TouchableOpacity
              style={[tw`border-0 rounded-3xl  w-32 p-2 mt-5 mb-5`, styles.pryColor]}
              onPress={() => handleNext({Name: 'Membership', type: 'Silver', price: MembershipPlanData.Silver.price})}
            >
              <Text style={tw`text-white text-center`}>Select and Pay <Text>{addCommaToValue(MembershipPlanData.Silver.price)}</Text></Text>
            </TouchableOpacity>
          </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  plan: {
    backgroundColor: '#e5e5ea',
    width: "90%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 15
  },

  planHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10
  },

  pryColor: {
    backgroundColor: "#2bced6"
  }
})

export default MembershipPlan
