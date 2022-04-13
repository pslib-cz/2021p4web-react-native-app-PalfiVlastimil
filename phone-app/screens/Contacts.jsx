import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-web';
import { PermissionsAndroid } from 'react-native-web';
import {Contacts as Cont  }from 'react-native-contacts';
import { DIRECT_CALL } from '../App';


PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  {
    'title': 'Contacts',
    'message': 'This app would like to view your contacts.',
    'buttonPositive': 'Please accept bare mortal'
  }
)
  .then(Cont.getAll()
    .then((contacts) => {
        // work with contacts
          console.log(contacts)
        })
          .catch((e) => {
              console.log(e)
          }))


const Contacts = ({navigation}) => {
  
    return (
        <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
        <Button
        title="what the f..." 
        onPress={() => navigation.navigate(DIRECT_CALL)}
        />

        
      </SafeAreaView>
    )
}
export default Contacts;