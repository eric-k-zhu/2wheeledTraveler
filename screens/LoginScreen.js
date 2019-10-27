import React from 'react'
import { Text, Button, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        return (
            <View style={styles.main}>
                <Image
                    style={styles.image}
                    source={require('../logo.png')}
                />
                <Text style={styles.title}>2 Wheeled Traveler</Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => this.props.navigation.navigate('ProfileScreen')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => this.props.navigation.navigate('RegistrationScreen')}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        backgroundColor: '#20b353'
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
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
      },
});