import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SettingsScreen from './screens/SettingsScreen';
import SpeedScreen from './screens/SpeedScreen';
import ContactScreen from './screens/ContactScreen';
import GasScreen from './screens/GasScreen';

const SettingsNavigator = createStackNavigator({
        SettingsScreen: SettingsScreen,
        SpeedScreen: SpeedScreen,
        ContactScreen: ContactScreen,
        GasScreen: GasScreen,
      },
      {
        headerMode: 'none'
      })

export default createAppContainer(SettingsNavigator);