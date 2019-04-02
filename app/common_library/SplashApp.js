import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainPage from "./MainPage";
import SplashPage from "./SplashPage";

const navigator = createStackNavigator({
    Home: { screen: SplashPage },
    Profile: { screen: MainPage }
})

const SplashApp = createAppContainer(navigator)

export default SplashApp