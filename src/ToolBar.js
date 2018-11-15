import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButton = props => <Icon name={props.name} size={25} color="black" style={{margin: 10}} />;

export default class ToolBar extends Component {
  render() {
    return (
      [
        <ActionButton key={'jhbs763636jhdjhsbjhd'} name="filter-variant" />,
        <ActionButton key={'jhbs763636jhdjhsbjhd'} name="search-web" />
      ]
    )
  }
}

AppRegistry.registerComponent('ToolBar', () => ToolBar);