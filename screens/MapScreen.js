import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button } from "native-base";
import openMap from 'react-native-open-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../config';

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        };
    }

    createAddress(geoloc) {
        var str = geoloc.lat + "," + geoloc.lng;
        this.setState({ address: str });
    }

    navigate() {
        openMap({ provider: "google", end: this.state.address, navigate_mode: "navigate" });
        this.props.navigation.navigate('RideScreen')
    }


    render() {
        return (
            <View style={styles.main}>
                    <View style={styles.search}>
                        <Text style={styles.headingText}>Select Your Destination</Text>
                        <GooglePlacesAutocomplete
                            placeholder='Search'
                            minLength={2} // minimum length of text to search
                            autoFocus={true}
                            returnKeyType={'search'} // Can be left out for default return key 
                            listViewDisplayed={false}    // true/false/undefined
                            fetchDetails={true}
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                this.createAddress(details.geometry.location);
                            }
                            }

                            query={{
                                key: API_KEY,
                                language: 'en'
                            }}

                            nearbyPlacesAPI='GooglePlacesSearch'
                            debounce={300}
                        />
                    </View>
                    <View style={styles.main}>
                        <Button full rounded success style={styles.button}
                            onPress={() => this.navigate()}>
                            <Text style={styles.buttonText}>Start Navigation</Text>
                        </Button>
                        <Text style={styles.text}>Switch back to our app once navigation has started!</Text>
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
        color: 'white',
        fontSize: 20
    },
    button: {
        backgroundColor: '#56ba58',
        marginTop: 10,
        marginBottom: 30
    },
    headingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24, 
        textAlign: 'center', 
        marginBottom: 30
    },
    search: {
        paddingTop: 30,
        paddingBottom: 300
    }, 
    text: {
        textAlign: 'center'
    }
});