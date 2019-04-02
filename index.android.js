/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import FetchNetData from "./app/fetch/FetchNetData";
import MainPage from "./app/common_library/MainPage";
import FindPage from "./app/common_library/FindPage";
import SplashPage from "./app/common_library/SplashPage";
import SplashApp from "./app/common_library/SplashApp";
//import MainPage from "./app/common_library/MainPage";

AppRegistry.registerComponent(appName, () => SplashApp);