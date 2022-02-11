import React from 'react'
import { useState } from 'react'
import { Image, View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

function CarItem({ car, setselectedCars, selectedCars }) {

    const [isChecked, setisChecked] = useState(false)
  
    const selectCar = (id) =>{
      const filteredCars = selectedCars.find(car => car.key === id)
  
      if(!filteredCars) {
        setselectedCars([...selectedCars, car])
        setisChecked(true)
      }else {
        setselectedCars(selectedCars.filter(car => car.key !== id))
        setisChecked(false)
      }
    }
  
    return (
      <View style={tw`flex-row items-center bg-gray-100 rounded-lg shadow-md mb-5 p-3`}> 
         <CheckBox
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked}
          onPress={() => selectCar(car.key)}
        />
  
        <Image source={require("../assets/icons/garage-car.png")} style={{ resizeMode: "contain", height: 50, width: 70 }} />
        
        <View style={tw`ml-5`}>
          <Text style={tw`font-semibold text-lg`}>{car.Make}</Text>
          <Text style={tw`text-lg text-gray-700`}>model: {car.Model}</Text>
        </View>
      </View>
    )
}

export default CarItem