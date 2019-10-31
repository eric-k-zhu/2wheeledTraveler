import React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Item, Form, Input, Button, Label } from "native-base";
import { app } from '../config';

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
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
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log("success");
          Alert.alert('Item saved successfully');
          this.props.navigation.navigate('ProfileScreen');
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.main}>

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
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#20b353'
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
  Button: {
    backgroundColor: 'white',
    marginTop: 20
  }
});