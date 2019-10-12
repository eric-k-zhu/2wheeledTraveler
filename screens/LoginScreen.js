import React from 'react'
import { Text, Button, View } from 'react-native';

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Login Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Login Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('RegistrationScreen')} title="Register"/>
        <Button onPress={() => this.props.navigation.navigate('MapScreen')} title="ToMap"/>
        </View>
        )
    }
}
