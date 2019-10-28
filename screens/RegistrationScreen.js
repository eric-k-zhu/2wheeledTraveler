import React from 'react'
import { Text, Button, View, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';
import { db } from '../config';

let addItem = (item, item2) => {
  db.ref('/users').push({
    username: item,
    password: item2
  });
};

export default class RegistrationScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };
    render() {
        return (
            <View style={{flex: 5}}>

                <AddItem />
               
            </View>
        )
    }
}

class AddItem extends React.Component {
    state = {
      username: '',
      password: ''
    };
  
    handleUserChange = e => {
      this.setState({
        username: e.nativeEvent.text
      });
    };
    handlePWChange = e => {
      this.setState({
        password: e.nativeEvent.text
      });
    };
    handleSubmit = () => {
      addItem(this.state.username, this.state.password);
      Alert.alert('Item saved successfully');
    };
  
    render() {
      return (
        <View style={styles.main}>
          <Text>Email Address:</Text>
          <TextInput style={styles.itemInput} onChange={this.handleUserChange} />
          <Text>Password:</Text>
          <TextInput style={styles.itemInput} onChange={this.handlePWChange} />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      );
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
    }
  });