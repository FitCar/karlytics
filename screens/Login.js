import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import auth from '@react-native-firebase/auth';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  

  const login = (e) => {
   
    auth().signInWithEmailAndPassword(email, password)
    .then((auth)=> {
        console.log(auth);
    })
    .catch(error => alert(error.message))
}

  return (
    <View style={styles.container}>
     
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
          title='Login'
          onPress={login}
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

export default Login
