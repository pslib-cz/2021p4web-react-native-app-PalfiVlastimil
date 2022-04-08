import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { NativeScreenContainer } from 'react-native-screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './screens/Contacts'

export default function App() {

  const Tab = createNativeStackNavigator();
  // ve středu test z MIT
  return (
    <SafeAreaView>

      <NavigationContainer
      
      >
        <Tab.Navigator>

          <Tab.Screen name="Homie" component={Contacts}> </Tab.Screen>
        </Tab.Navigator>


      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
