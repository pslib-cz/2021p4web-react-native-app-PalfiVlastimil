import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'

import { NativeScreenContainer } from 'react-native-screens';
import Contacts from './screens/Contacts'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Appbar } from 'react-native-paper'

import Favorites from './screens/Favorites';
import DirectCall from './screens/DirectCall';
export const FAVORITES = "Favorites";
export const DIRECT_CALL = "Direct Call";
export const CONTACTS = "Contacts";

export default function App() {

  const Tab = createBottomTabNavigator();
  //navigace => appbar
 

  // ve středu test z MIT
  return (
    

      <NavigationContainer>
        
        <Tab.Navigator
          initialRouteName={CONTACTS}
          
          screenOptions={({route}) => ({
           headerRight: () => (
             <View styles={styles.iconContainer}>
               <FontAwesomeIcon style={{paddingRight: 30}} icon={faEllipsisVertical}/>
             </View>
           ),
            tabBarIcon: 
            ({focused, color, size}) =>{
              let iconName;
              switch(route.name){
                case FAVORITES:{
                  iconName = faStar;
                  break;
                }
                case DIRECT_CALL:{
                  iconName = faPhone;
                  break;  
                }
                case CONTACTS:{
                  iconName = faUser;
                  break;
                }
              }
              return <FontAwesomeIcon icon={iconName} />
            }
          
          })}
          >
          <Tab.Screen name={FAVORITES} options={{headerTitle: 'hellp'}} component={Favorites}/>
          <Tab.Screen name={DIRECT_CALL} component={DirectCall}/>
          <Tab.Screen name={CONTACTS} component={Contacts}/>
        </Tab.Navigator>


      </NavigationContainer>
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
  });
