import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    }; 

    render() {
        return (
            <View style= {styles.main}>
                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}} > Speed        Distance        Time</Text>
                </View>
                <View style={{flex: 3}}> 
                    <MapComponent />
                </View>
                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Find a Gas Station         Send Location</Text>
                </View>
            </View>
        )
    }


}

class MapComponent extends React.Component {
    render() {

        return (

            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation

            />
        );
    }
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#20b353'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      backgroundColor: 'white', 
      marginBottom: 15
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });