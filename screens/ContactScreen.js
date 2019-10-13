import React from 'react'
import { Text, Button, View } from 'react-native';

export default class ContactScreen extends React.Component{
    static navigationOptions = {
        title: 'Contact Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Contacts Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Back to Settings Page"/>
        </View>
        )
    }
}