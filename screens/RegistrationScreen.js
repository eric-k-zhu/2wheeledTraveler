import React from 'react'
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Item, Form, Input, Button, Label } from "native-base";
import { app } from '../config';

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  SignUp = (name, email, password, password2) => {
    if (!(password === password2)) {
      return Alert.alert("Passwords do not match Client Side");
    }
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user1) => {
        //need to update default profile image picture as well
        if(user1.user){
          user1.user.updateProfile({displayName: name,
          photoURL: 'gs://wheeled-traveler.appspot.com/icons8-user-90.png'}).then(
            s => {
              console.log("success");
              Alert.alert('Item saved successfully');
              this.props.navigation.navigate('ProfileScreen');
            }
          )
        }
      }, reason => {
        // rejections
        // need to handle and specify more errors as well
        Alert.alert("Password must be at least 6 characters.")
      });
      
  };

  render() {
    return (
      <View style={styles.main}>
        <ScrollView keyboardShouldPersistTaps='never'>

        <Text style={styles.title}>Register New User</Text>
        <Form>
        <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
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
          <Item floatingLabel>
            <Label style={styles.Label}>Retype Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password2 => this.setState({ password2 })}
            />
          </Item>
        </Form>
        <Button full rounded success style={styles.Button} onPress={() => this.SignUp(this.state.email, this.state.password, this.state.password2)}>
          <Text style={styles.buttonText}>Signup</Text>
        </Button>
        <Button style={styles.link} onPress={() => this.props.navigation.navigate('LoginScreen')} title="Logout"><Text style={styles.link}>Back to Log In</Text></Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 50,
    color: '#56ba58'
  },
  Button: {
    backgroundColor: '#56ba58',
    marginTop: 50, 
    marginBottom: 20
  },
  link: {
    alignSelf: "center",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    color: "#56ba58",
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