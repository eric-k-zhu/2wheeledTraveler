import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import MapScreen from './screens/MapScreen';


const AppNavigator = createStackNavigator({
        LoginScreen: LoginScreen,
        RegistrationScreen: RegistrationScreen,
        MapScreen: MapScreen
      })

export default createAppContainer(AppNavigator);