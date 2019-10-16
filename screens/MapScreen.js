import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    };

    render() {
        return (
            <View style={{flex: 1}}>
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
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        );
    }
}