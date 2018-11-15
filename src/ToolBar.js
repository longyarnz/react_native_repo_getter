import React, { Component } from 'react';
import { AppRegistry, Text, ToolbarAndroid, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButton = props => <Icon name={props.name} size={25} color="black" style={{margin: 20}} onPress={props.onPress} />;
{/* <ActionButton key={1} name="sort" onPress={() => console.log('sort')} />,
        <ActionButton key={0} name="magnify" onPress={() => console.log('shape')} />, */}

export default class ToolBar extends Component {
  render() {
    return (
      <ToolbarAndroid
        style={styles.toolBar}
        actions={[
          {
            title: 'Search',
            show: 'show'
          }
        ]}
      >
        <Text style={styles.title}>Repository List</Text>
      </ToolbarAndroid>
    )
  }
}

const styles = StyleSheet.create({
  toolBar: {
    backgroundColor: '#fff',
    height: 60,
    elevation: 6,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    color: '#000',
  }
})

AppRegistry.registerComponent('ToolBar', () => ToolBar);