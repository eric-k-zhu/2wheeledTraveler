import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from "native-base";
import openMap from 'react-native-open-maps';
import { API_KEY } from '../config';
import { app } from '../config';
import email from 'react-native-email'
import GLOBAL from './global.js'

export default class RideScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: "",
            current: "",
            contacts:[]
        };
    }

    componentDidMount() {
        this._isMounted = true;
      
        app.database().ref(app.auth().currentUser.uid).on('value', (snapshot) => {
            if (this._isMounted) {
                let data = snapshot.val();
                let contacts = Object.values(data);
                this.setState({contacts:contacts});
              }
         });
    }

    getCurrentLocation() {
        // Get current location and pass it to findGas
        navigator.geolocation.getCurrentPosition(
            position => {
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
                    this.popUp();
                });
            });

    }

    popUp() {

        // confirmation pop up: adding gas to your route
        Alert.alert(
            'Rerouting to Gas Station',
            'Please Confirm Below',
            [
                {
                    text: 'OK', onPress: () => this.navGas()
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed')
                }

            ],
            { cancelable: true },
        );

    }

    navGas() {
        // navigate to closest gas station
        var address = this.state.lat + "," + this.state.lng;
        openMap({ provider: "google", end: address, navigate_mode: "navigate" });
    }

    // work on function to send current location to SMS
    sendLocation() {
        // Get current location and pass it to findGas
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ current: position }, function () {
                    this.sendEmail();
                });
            }
        );
    }

    sendEmail() {

        // let url = `mailto:${"annatruelove97@gmail.com"}`;

        let subject = app.auth().currentUser.displayName + " has sent you their location"
        let body = "https://www.google.com/maps/place/" + this.state.current.coords["latitude"] + "," + this.state.current.coords['longitude'];
        

        let to = this.state.contacts.map(contact => contact.contactEmail) // string or array of email addresses
        console.log(to)
        email(to.slice(0,1), {
            subject: subject,
            body: body,
            bcc: to.slice(1,)
        }).catch(console.error)
    }

    render() {
        return (
            <View style={styles.main}>
                <View>
                    <SpeedSettings/>
                </View>

                <View style={styles.main}>
                    <Button full success style={styles.button2} onPress={() => this.getCurrentLocation()}>
                        <Text style={styles.buttonText}>Find Gas Station</Text>
                    </Button>

                    <Button full success style={styles.button2} onPress={() => this.sendLocation()}>
                        <Text style={styles.buttonText}>Send Location</Text>
                    </Button>

                    <Button full rounded success style={styles.button} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                        <Text style={styles.buttonText}>End Ride</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

function SpeedSettings(){
    var arr =[];

    if (GLOBAL.check1){
        arr.push(<CurrentSpeed key='1'/>)
    }
    if (GLOBAL.check2){
        arr.push(<CurrentTime key='2'/>)
    }
    if (GLOBAL.check3){
        arr.push(<AvgSpeed key='3'/>)
    }
    if (GLOBAL.check4){
        arr.push(<Distance key='4'/>)
    }
    if (GLOBAL.check5){
        arr.push(<MaxSpeed key='5'/>)
    }

    return(
        <View>{arr}</View>
    );
}

// SPEED SETTINGS COMPONENTS

function CurrentSpeed(){
    return <Text style={styles.text}>CurrentSpeed</Text>
}

function CurrentTime(){
    return <Text style={styles.text}>CurrentTime</Text>
}

function AvgSpeed(){
    return <Text style={styles.text}>AvgSpeed</Text>
}

function Distance(){
    return <Text style={styles.text}>Distance</Text>
}

function MaxSpeed(){
    return <Text style={styles.text}>MaxSpeed</Text>
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
        backgroundColor: '#9fe3a0',
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
    }, 
    text: {
        marginTop: 30,
        textAlign: 'center'
    }
});