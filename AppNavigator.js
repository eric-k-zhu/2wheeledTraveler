import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProfileScreen from './screens/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';


const AppNavigator = createStackNavigator({
        ProfileScreen: ProfileScreen,
        RegistrationScreen: RegistrationScreen,
        MapScreen: MapScreen,
        SettingsScreen: SettingsScreen
      })

export default createAppContainer(AppNavigator);