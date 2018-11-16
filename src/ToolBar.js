import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButton = props => <Icon name={props.name} size={25} color="black" style={{margin: 20}} onPress={props.onPress} />;

export default class ToolBar extends Component {
  state = {
    counter: 0
  }

  toggle = async () => {
    let x = 0, y = 1;
    await this.setState(state => {
      x = this.state.counter % 2 === 0 ? 0 : 1;
      y = this.state.counter % 2 === 0 ? 1 : 0;

      return {
        counter: ++state.counter
      }
    });

    this.props.toggle(x, y);
  }

  render() {
    const shape = this.state.counter % 2 === 0 ? 'magnify' : 'close';
    return (
      [
        <ActionButton key={1} name="sort" onPress={() => console.log('sort')} />,
        <ActionButton key={0} name={shape} onPress={this.toggle} />,
      ]
    )
  }
}

AppRegistry.registerComponent('ToolBar', () => ToolBar);