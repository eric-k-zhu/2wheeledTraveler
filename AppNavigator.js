import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProfileScreen from './screens/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import RideScreen from './screens/RideScreen';

const AppNavigator = createStackNavigator({
        LoginScreen: LoginScreen,
        ProfileScreen: ProfileScreen,
        RegistrationScreen: RegistrationScreen,
        MapScreen: MapScreen,
        SettingsScreen: SettingsScreen, 
        RideScreen: RideScreen
      }, 
      {
        headerMode: 'none'
      })

export default createAppContainer(AppNavigator);