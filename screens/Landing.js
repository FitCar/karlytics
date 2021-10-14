import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <Button 
      title="Login"
      onPress={() => navigation.navigate('Login')}
      />
      <Button 
      title="Register"
      onPress={() => navigation.navigate('Register')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center"
  }
})

export default Landing
