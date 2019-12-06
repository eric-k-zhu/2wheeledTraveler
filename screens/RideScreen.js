import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "native-base";
import openMap from 'react-native-open-maps';
import { API_KEY } from '../config';

export default class MapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: "",
            current: ""
        };
    }

    getCurrentLocation() { 
        // Get current location and pass it to findGas
        navigator.geolocation.getCurrentPosition(
            position => {
                //this.setState({ current: position });
                this.setState({ current: position }, function () {
                    this.findGas();
                });
            }
        );
    }

    findGas() {
        // create lat long string
        let curLocation = this.state.current.coords["latitude"] + "," + this.state.current.coords['longitude'];

        // define url
        let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + curLocation + "&rankby=distance&type=gas_station&key=" + API_KEY;

        // set state of lat and long for nearest gas station
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    lat: responseJson.results[0].geometry.location['lat'],
                    lng: responseJson.results[0].geometry.location['lng']
                }, function () {
                    this.navGas();
                });
            });

    }

    navGas() {

        // confirmation pop up: adding xx to your route

        // navigate to closest gas station
        var address = this.state.lat + "," + this.state.lng;
        openMap({ provider: "google", end: address, navigate_mode: "navigate" });
    }

    // work on function to send current location to SMS

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.main}>
                    <Button full success style={styles.button2} onPress={() => this.getCurrentLocation()}>
                        <Text style={styles.buttonText}>Find Gas Station</Text>
                    </Button>

                    <Text style={{ textAlign: 'center' }}>Send Location</Text>

                    <Button full rounded success style={styles.button} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                        <Text style={styles.buttonText}>End Ride</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#56ba58',
        marginTop: 10,
        marginBottom: 30,
        paddingRight: 10
    },
    button2: {
        backgroundColor: '#82CAFF',
        marginTop: 10,
        marginBottom: 30,
        width: 300,
        height: 100,
        alignSelf: 'center'
    },
    headingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24
    }
});