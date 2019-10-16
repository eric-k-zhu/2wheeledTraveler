import React from 'react'
import { Text, Button, View } from 'react-native';

export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        title: 'Profile Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Profile Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('RegistrationScreen')} title="Logout"/>
        <Button onPress={() => this.props.navigation.navigate('MapScreen')} title="Map"/>
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Settings"/>
        </View>
        )
    }
}
