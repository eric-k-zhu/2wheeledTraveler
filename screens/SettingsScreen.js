import React from 'react'
import { Text, Button, View } from 'react-native';

export default class SettingsScreen extends React.Component{
    static navigationOptions = {
        title: 'Settings',
    };
    render(){
        return(
        <View>
        <Button onPress={() => this.props.navigation.navigate('SpeedScreen')} title="Speed"/>
        <Button onPress={() => this.props.navigation.navigate('GasScreen')} title="Gas"/>
        <Button onPress={() => this.props.navigation.navigate('ContactScreen')} title="Contacts"/>
        </View>
        )
    }
}