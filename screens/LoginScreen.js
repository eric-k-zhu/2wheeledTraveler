import React from 'react'
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Item, Form, Input, Button, Label } from "native-base";
import { app } from '../config';

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

    LogIn = (email, password) => {
        try {
          app
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
                    <Button full rounded success style={styles.Button} onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
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