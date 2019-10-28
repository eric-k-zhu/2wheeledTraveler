import React from 'react'
import { Text, Button, View } from 'react-native';

export default class GasScreen extends React.Component{
    static navigationOptions = {
        title: 'Gas Preferences',
    };
    render(){
        return(
        <View>
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Back to Settings Page"/>
        </View>
        )
    }
}