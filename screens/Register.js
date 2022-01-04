import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button as RNButton } from "react-native";
const { uuid } = require('uuidv4');

import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";

const auth = Firebase.auth();
const firestore = Firebase.firestore();

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");
  const [users, setUsers] = useState("");

  useEffect(() => {
    const subscriber = firestore
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        
        setUsers(users);
        // setLoading(false);
      });
  },[]);

  console.log(users.length);

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth
          .createUserWithEmailAndPassword(email, password)
          // .then(() => {
          //   dispatch(
          //     login({
          //       email: email,
          //     })
          //   );
          // })
          .then((response) => {
            
            const uid = response.user.uid;
            const data = {
              name: name,
              email: email,
              uid: uid,
              id: users.length + 1
              
            };

          

            const userRef = firestore.collection("users");

            userRef.doc(uid).set(data);
            console.log(response);
            console.log(email);
            console.log(name);
            console.log(uid);
          });
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <Text style={styles.title}>Create new account</Text>
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="account"
        placeholder="Enter Fullname"
        autoCapitalize = "true"
        onChangeText={(text) => setName(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="email"
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon="lock"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={password}
        onChangeText={(text) => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <Button
        onPress={onHandleSignup}
        backgroundColor="#2bced6"
        title="Signup"
        tileColor="#fff"
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
        }}
      />
      <RNButton
        onPress={() => navigation.navigate("Login")}
        title="Go to Login"
        color="#2bced6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 24,
  },
});
