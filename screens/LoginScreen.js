import React from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
//import { firebaseConfig } from '../config';
import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB1zBIpnHT8vdRoHCd24RxUEPQAkVkz1YE",
    authDomain: "wheeled-traveler.firebaseapp.com",
    databaseURL: "https://wheeled-traveler.firebaseio.com",
    projectId: "wheeled-traveler",
    storageBucket: "wheeled-traveler.appspot.com",
    messagingSenderId: "699300672684",
    appId: "1:699300672684:web:3ea07bfac92cd25e66db09",
    measurementId: "G-0CW52S3SJC"
  };
firebase.initializeApp(firebaseConfig);

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    SignUp = (email, password) => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    console.log("success");
                    Alert.alert('Item saved successfully');
                });
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    LogIn = (email, password) => {
        try {
          firebase
             .auth()
             .signInWithEmailAndPassword(email, password)
             .then(res => {
                 console.log(res.user.email);
                 this.props.navigation.navigate('ProfileScreen');
          });
    } catch (error) {
          console.log(error.toString(error));
        }
      };

    render() {
        return (
            <View style={styles.main}>
                <Image
                    style={styles.image}
                    source={require('../logo.png')}
                />
                <Text style={styles.title}>2 Wheeled Traveler</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={email => this.setState({ email })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={password => this.setState({ password })}
                            />
                        </Item>
                        <Button full rounded success style={styles.Button} onPress={() => this.LogIn(this.state.email, this.state.password)}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                    <Button full rounded success style={styles.Button} onPress={() => this.SignUp(this.state.email, this.state.password)}>
                        <Text>Signup</Text>
                    </Button>
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
    Button: {
        backgroundColor: 'white',
        marginTop: 20
    }
});