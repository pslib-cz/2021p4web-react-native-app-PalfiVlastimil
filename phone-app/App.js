import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { NativeScreenContainer } from 'react-native-screens';
import Contacts from './screens/Contacts'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './screens/Favorites';
import DirectCall from './screens/DirectCall';

export const FAVORITES = "Favorites";
export const DIRECT_CALL = "Direct Call";
export const CONTACTS = "Contacts";

export default function App() {

  const Tab = createBottomTabNavigator();
  // ve středu test z MIT
  return (
    <SafeAreaView>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={CONTACTS}
        >
          <Tab.Screen name={FAVORITES} component={Favorites}/>
          <Tab.Screen name={DIRECT_CALL} component={DirectCall}/>
          <Tab.Screen name={CONTACTS} component={Contacts}/>
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
