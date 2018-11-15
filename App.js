import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './src/WelcomeScreen';
import ListScreen from './src/ListScreen';

const App = createStackNavigator({
  Repository: {screen: ListScreen},
  Welcome: {screen: WelcomeScreen},
});

export default App;

AppRegistry.registerComponent('App', () => App);