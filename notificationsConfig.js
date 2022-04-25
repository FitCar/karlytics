import * as Notifications from 'expo-notifications'
import { isDevice } from "expo-device"
import { Alert } from 'react-native'
import Firebase from "./config/firebase";

const firestore = Firebase.firestore();

export const getPermission = async (userId) => {
        
        if (!isDevice) return Alert.alert("must use physical device to access notifications")
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        
        let finalStatus = existingStatus;
        
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        
        if (finalStatus !== 'granted') {
          Alert.alert('Enable push notifications to use the app!');
          return;
        }

        const token = await Notifications.getExpoPushTokenAsync()

        if(token.data){
            await firestore.collection("users").doc(userId).set({
                NotificationToken: token.data
            }, { merge: true })
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        return
  }

export const ScheduleNotification = async (date, car) => {
  const choosenDate = new Date(date)
  const today = new Date(Date.now())
  const left = choosenDate.getTime() - today.getTime()
  const hours_left = left/(3600*1000)
  const minutes_left = (left%(3600*1000))/(60*1000)
  
  if(minutes_left < 2 && hours_left < 1) return Alert.alert("Time schedule is to close")

    return await Notifications.scheduleNotificationAsync({
      content: {
        title: "Karlytics",
        body: `${car} is almost due for servicing`,
        data: { data: "stufff" }
      },

      trigger: {
        seconds: Math.floor(left/1000)
      }
    });
  
}
