/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './src/home';
import BottomTabs from './src/StackNavigators/bottomTabs';

AppRegistry.registerComponent(appName, () => BottomTabs);
