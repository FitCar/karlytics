import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { changeTime } from "../cardata";
import tw from "tailwind-react-native-classnames";
import { ScheduleNotification } from '../notificationsConfig'
import { Icon } from "react-native-elements";
import { useRoute } from '@react-navigation/native';

const ScheduleReminder = () => {
    const { params } = useRoute()

    const [show, setshow] = useState(false)  
    const [mode, setmode] = useState("date")
    const [date, setDate] = useState(new Date());
    const [dateText, setdateText] = useState({
        date: "Choose Date",
        time: "Choose Time"
    })

    const showDatepicker = (currentMode) => {
        setshow(true)
        setmode(currentMode)
    }

    const onChange = (selectedDate, dateTime) => {
        const currentDate = dateTime || date
        setDate(currentDate)

        if(mode === 'date') {
        setdateText({
            ...dateText,
            date: currentDate.toLocaleDateString()
        })
        }else {
        setdateText({
            ...dateText,
            time: `${changeTime(currentDate.getUTCHours(), 'hours')}: ${changeTime(currentDate.getUTCMinutes())} `
        })
        }
    };

    const submitSchedule = () => {
        if(dateText.date === "Choose Date") return Alert.alert("please choose a date to be reminded")  
        if(dateText.time === "Choose Time") return Alert.alert("please choose a specific time to be reminded")

        ScheduleNotification(date, params.current_car.Make+" "+params.current_car.Model)
        return 
    }

  return (
    <View style={tw`flex-grow pt-10 px-4 items-center`}>
        <Text style={tw`font-semibold text-gray-500 mb-5 text-lg`}>Schedule reminder for {params.current_car.Make+" "+params.current_car.Model} </Text>

        <TouchableOpacity onPress={() => showDatepicker("date")} style={tw`mb-5 w-5/6 border-2 mx-auto rounded-lg border-blue-300 py-2`}>
            <Text style={tw`text-blue-500 font-semibold text-center text-xl`}>{dateText.date}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => showDatepicker("time")} style={tw`mb-5 w-5/6 border-2 mx-auto rounded-lg border-blue-300 py-2`}>
            <Text style={tw`text-blue-500 font-semibold text-center text-xl`}>{dateText.time}</Text>
        </TouchableOpacity>

        <View style={tw`w-full`}>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>

        <TouchableOpacity style={tw`p-3 flex-row justify-center shadow-md bg-gray-200 rounded-lg w-full my-3`} onPress={() => submitSchedule()}>
            <Text style={tw`font-bold text-gray-500 text-xs`}>Set Reminder</Text>
            <Icon name="bell" size={12} color="#737f8a" type="font-awesome" />
        </TouchableOpacity>
    </View>
  )
}

export default ScheduleReminder