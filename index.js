/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import FetchNetData from "./app/fetch/FetchNetData";
import MainPage from "./app/common_library/MainPage";
//import MainPage from "./app/common_library/MainPage";

AppRegistry.registerComponent(appName, () => MainPage);