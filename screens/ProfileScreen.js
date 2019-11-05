import React from 'react'
import { Text, Button, View, StyleSheet,Image } from 'react-native';
import {app} from '../config';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = { currentUser: null }
  
  componentDidMount() {
    const { currentUser } = app.auth()
    this.setState({ currentUser })
}

  render() {
    return (
     
      <View style={styles.main}>
        <Text>{app.auth().currentUser.displayName}</Text>
        <View style={styles.main}>
          <Image
              source={require('../Images/settings-512.png')}
          />
      </View>
        <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Logout" />
        <Button onPress={() => this.props.navigation.navigate('MapScreen')} title="Map" />
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Settings" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
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
