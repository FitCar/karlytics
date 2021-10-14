import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

// import firebase from 'firebase'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux'
import {login} from '../slices/userSlice'


function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  

  const register = () => {
    auth().createUserWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email
      }))
    })
    .then((response)=> {
      const uid = response.user.uid;
      const data = {
        email,
        name,
        uid
      }
      
      const userRef = firestore().collection("users");

      userRef
      .doc(uid)
      .set(data)
        console.log(response);
        console.log(email)
        console.log(name)
        console.log(uid)
    })
    .catch((error) => {alert(error)})
}

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder = "name"
        onChangeText={(name) => setName(name)}
      />
      <TextInput 
        placeholder = "email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput 
        placeholder = "password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <Button
          title='Register'
          onPress={register}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Register
