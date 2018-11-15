import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ToolBar from './ToolBar';
import ListTab from './ListTab'

export default class ListScreen extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View>
        <ToolBar />
        <View>
          <ListTab />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('ListScreen', () => ListScreen);