import React from 'react'
import { Text, Button, View } from 'react-native';

export default class RegistrationScreen extends React.Component{
    static navigationOptions = {
        title: 'Registration Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Registration Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('ProfileScreen')} title="Login"/>
        </View>
        )
    }
}