import React from 'react'
import { Text, Button, View } from 'react-native';

export default class SpeedScreen extends React.Component{
    static navigationOptions = {
        title: 'Speed Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Speed Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('SettingsScreen')} title="Back to Settings Page"/>
        </View>
        )
    }
}