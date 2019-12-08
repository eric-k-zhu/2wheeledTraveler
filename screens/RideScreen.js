import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from "native-base";
import openMap from 'react-native-open-maps';
import { API_KEY } from '../config';
import { app } from '../config';
import email from 'react-native-email'
import GLOBAL from './global.js'
import moment from 'moment';

export default class RideScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: "", // lat of gas station
            lng: "", // lng of gas station
            current: "", // stores lat and lng of current location
            currentTime: GLOBAL.curTime
        };
    }

    componentDidMount() {
        setInterval(() => {
            var time = moment().utcOffset('-05:00').format('hh:mm a');
            this.setState({
                currentTime: time
            })
            GLOBAL.curTime = time
            this.getCurrentLocation()
        }, 1000)
    }
    

    getCurrentLocation() {
        // Get current location and pass it to findGas
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ current: position })
            }
        );
    }

    findGas() {
        // create lat long string
        let curLocation = this.state.current.coords["latitude"] + "," + this.state.current.coords["longitude"];

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
        let subject = app.auth().currentUser.displayName + " has sent you their location"
        let body = "https://www.google.com/maps/place/" + this.state.current.coords["latitude"] + "," + this.state.current.coords['longitude'];

        const to = ['annatruelove97@gmail.com'] // string or array of email addresses
        email(to, {
            subject: subject,
            body: body
        }).catch(console.error)
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.main}>
                    <SpeedSettings />
                </View>

                <View style={styles.bottom}>
                    <Button full success style={styles.button2} onPress={() => this.findGas()}>
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

function SpeedSettings() {
    var arr = [];

    if (GLOBAL.check1) {
        arr.push(<CurrentSpeed key='1' />)
    }
    if (GLOBAL.check2) {
        arr.push(<MaxSpeed key='2' />)
    }
    if (GLOBAL.check3) {
        arr.push(<AvgSpeed key='3' />)
    }
    if (GLOBAL.check4) {
        arr.push(<Distance key='4' />)
    }
    if (GLOBAL.check5) {
        arr.push(<CurrentTime key='5' />)
    }

    return (
        <View>{arr}</View>
    );
}

// SPEED SETTINGS COMPONENTS

function CurrentSpeed() {
    return (
        <View>
            <Text style={styles.text2}>Current Speed:</Text>
            <Button full success style={styles.button3}><Text style={styles.text}>Current Speed</Text></Button>
        </View>
    );
}

function CurrentTime() {
    return (
        <View>
            <Text style={styles.text2}>Current Time:</Text>
            <Button full success style={styles.button3}><Text style={styles.text}>{GLOBAL.curTime}</Text></Button>
        </View>
    );
}

function AvgSpeed() {
    return (
        <View>
            <Text style={styles.text2}>Average Speed:</Text>
            <Button full success style={styles.button3}><Text style={styles.text}>AvgSpeed</Text></Button>
        </View>
    );
}

function Distance() {
    return (
        <View>
            <Text style={styles.text2}>Distance Traveled:</Text>
            <Button full success style={styles.button3}><Text style={styles.text}>Distance Traveled</Text></Button>
        </View>
    );
}

function MaxSpeed() {
    return (
        <View>
            <Text style={styles.text2}>Max Speed:</Text>
            <Button full success style={styles.button3}><Text style={styles.text}>MaxSpeed</Text></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 30
    },
    bottom: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 30,
        width: 300,
        height: 75,
        alignSelf: 'center'
    },
    button2: {
        backgroundColor: '#56ba58',
        marginTop: 10,
        marginBottom: 30,
        width: 300,
        height: 100,
        alignSelf: 'center'
    },
    button3: {
        backgroundColor: 'white',
        borderColor: '#56ba58',
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 30,
        width: 300,
        height: 75,
        alignSelf: 'center',
        textAlign: 'center'
    },
    headingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24
    },
    text: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center'
    },
    text2: {
        textAlign: 'center',
        fontSize: 15
    }
});