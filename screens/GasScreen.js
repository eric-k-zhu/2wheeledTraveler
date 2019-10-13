import React from 'react'
import { Text, Button, View } from 'react-native';

export default class GasScreen extends React.Component{
    static navigationOptions = {
        title: 'Gas Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Gas Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Back to Settings Page"/>
        </View>
        )
    }
}