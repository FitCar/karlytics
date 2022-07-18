import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';

const auth = Firebase.auth();

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const state = useSelector(state => state.car)

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    let mount = true

    auth.onAuthStateChanged(async (authenticatedUser) => {
      if(mount) {
        await authenticatedUser ? setUser(authenticatedUser) : setUser(null)
        setIsLoading(false);
      }
    });

    return () => {
      mount = false
    }
  }, []);  
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={"#2bced6"} />
      </View>
    );
  }

  return (
  
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}