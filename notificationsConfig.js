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

export const ScheduleNotification = async () => {
    // await Notifications.scheduleNotificationAsync({
    //     content: {
    //     title: "Title",
    //     body: "body",
    //     data: { data: "stufff" }
    //     },
    //     trigger: {
    //         hour: 0,
    //         minute: 0,
    //         second: 20,
    //     }
    // });
}
