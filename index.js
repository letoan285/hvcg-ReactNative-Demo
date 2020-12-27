/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RootContainer from './RootContainer';
import AppContainer from './AppContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
