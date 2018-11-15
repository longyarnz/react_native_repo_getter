import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ToolBar from './ToolBar';

export default class ListScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'Repository List',
    headerRight: <ToolBar />
  }
  
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('ListScreen', () => ListScreen);