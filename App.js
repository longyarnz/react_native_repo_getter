import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './src/WelcomeScreen';
import ListScreen from './src/ListScreen';

const App = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  Repository: {screen: ListScreen},
});

export default App;

AppRegistry.registerComponent('App', () => App);