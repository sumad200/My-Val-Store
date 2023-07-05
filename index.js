/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-url-polyfill/auto';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
