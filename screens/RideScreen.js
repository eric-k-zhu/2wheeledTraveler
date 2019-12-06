import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "native-base";

export default class MapScreen extends Component {

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.main}>
                    <Button full success style={styles.button2}>
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
        marginBottom: 30
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