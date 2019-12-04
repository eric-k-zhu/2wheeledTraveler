import React from 'react'
import { Text, View, StyleSheet,Image } from 'react-native';
import {app} from '../config';
import {Button} from "native-base";


import Icon from 'react-native-vector-icons/FontAwesome5';


export default class ProfileScreen extends React.Component {
   
  componentDidMount() {
    const { currentUser } = app.auth()
    this.setState({ currentUser, image: null })
    // let ref = app.storage().ref('icons8-user-90.png')
    // ref.getDownloadURL().then(image => {this.setState({image: image})})
}

  render() {
    let creationYear = new Date(app.auth().currentUser.metadata.creationTime).getFullYear()
  
    return (
      <View style={styles.main}>
     
       <View style={styles.topContainer}>
         <Image source={require('../Images/icons8-user-90.png')}
          style={{width:75, height:75, flex:1 }}>
         </Image>
      
         <View style={{flex:2, textAlign: 'center', paddingLeft:10, paddingTop:10 }}>
           <Text style={styles.headingText}>{app.auth().currentUser.displayName}</Text>
           <Text style={styles.normalText}>Member Since: {creationYear}</Text>
         </View>
        
         <View style={{justiftyContent:"center", alignItems:"center", flex:1, marginLeft: 40}}>
           <Icon
           size={30}
           color='black' np
           name="cog" 
           onPress={() => this.props.navigation.navigate('SettingsScreen')}>
           </Icon>
         </View>
         
       </View>
       
       <View style={styles.middleContainer}>
         <Text style={styles.headingText}>Lifetime Stats</Text>
       </View>
       
       <View style={styles.bottomContainer}>
         <Button full rounded success style={styles.button} onPress={() => this.props.navigation.navigate('MapScreen')}>
           <Text style={styles.buttonText}>Start Ride</Text>
           </Button>
         <Button  style={styles.link} onPress={() => this.props.navigation.navigate('LoginScreen')}>
           <Text style={styles.link}>Log out</Text>
           </Button>
       </View>
     
     </View>
     )
}
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40
    
  },
  normalText: {
    fontSize: 14,
    color: 'black'
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },
  middleContainer:{
    flex:2
  },
  bottomContainer:{
    flex:1
  },
  
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
    backgroundColor: '#56ba58',
    marginTop: 10,
    marginBottom: 30
  },
  buttonText: {
    color: 'white', 
    fontSize: 20
},
link: {
  alignSelf: "center",
  backgroundColor: "transparent",
  color: "black",
  fontSize: 20
}
});
