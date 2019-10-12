import React from 'react'
import { Text, Button, View } from 'react-native';

export default class MapScreen extends React.Component{
    static navigationOptions = {
        title: 'Map Screen',
    };
    render(){
        return(
        <View>
        <Text> Hello this is the Map Screen </Text>
        <Button onPress={() => this.props.navigation.navigate('RegistrationScreen')} title="Back to Registration Page"/>
        </View>
        )
    }
}