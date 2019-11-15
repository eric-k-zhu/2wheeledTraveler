import React from 'react'
import { Text, View, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { Item, Form, Input, Button, Label } from "native-base";
import { app } from '../config';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    LogIn = (email, password) => {
        app
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res.user.email);
                // fulfillment
                this.props.navigation.navigate('ProfileScreen');
            }, reason => {
                // rejections
                Alert.alert("Incorrect username or password. Please try again.")
            });

    };

    render() {
        return (
            <View style={styles.main}>
                <ScrollView keyboardShouldPersistTaps='never'>
                <Image
                    style={styles.image}
                    source={require('../Images/logo.png')}
                />
                <Text style={styles.title}>2 Wheeled Traveler</Text>
                <Form>
                    <Item floatingLabel>
                        <Label style={styles.Label}>Email</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.Label}>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={password => this.setState({ password })}
                        />
                    </Item>
                    <Button full rounded success style={styles.Button} onPress={() => this.LogIn(this.state.email, this.state.password)}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </Form>
                <Text style={styles.Text}>Don't have an account?</Text>
                <Button style={styles.link} onPress={() => this.props.navigation.navigate('RegistrationScreen')}><Text style={styles.link}>Create Account</Text></Button>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        backgroundColor: '#ffffff', 
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        paddingTop: 50
    },
    title: {
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: '#56ba58',
        marginTop: 20,
    }, 
    link: {
        alignSelf: "center",
        backgroundColor: "transparent", 
        textDecorationLine: "underline", 
        color: "#56ba58", 
        fontSize: 20
      }, 
    Text: {
        textAlign: "center",
        paddingTop: 40, 
        fontSize: 20
    }, 
    buttonText: {
        color: 'white', 
        fontSize: 20
    },
    Label: {
        fontSize: 20
    }
});