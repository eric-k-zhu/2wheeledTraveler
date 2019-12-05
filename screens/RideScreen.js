import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "native-base";

export default class MapScreen extends Component {

    render() {
        return (
            <View style={styles.main}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }} > Speed        Distance        Time</Text>
                </View>

                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Find a Gas Station         Send Location</Text>
                </View>

                <View>
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
        backgroundColor: 'white'
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
        fontSize: 24
    }
});