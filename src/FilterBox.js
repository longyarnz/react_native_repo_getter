import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'

export default class FilterBox extends Component {
  constructor(props) {
    super(props)

    this.rightOffset = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.slideRight(0, 1);
  }

  slideRight = (x, y, callback = () => { }) => {
    this.rightOffset.setValue(x);
    Animated.timing(
      this.rightOffset,
      {
        toValue: y,
        duration: 300,
        easing: Easing.bounce
      }
    ).start(callback);
  }

  handleFilter = () => {
    this.slideRight(1, 0, () => this.props.filter());
  }

  render() {
    const right = this.rightOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 0],
    });

    return (
      <Animated.View style={[styles.container, { right }]}>
        <TouchableOpacity
          onPress={this.handleFilter}
        >
          <Text style={styles.header}>FILTER BY JAVASCRIPT</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 5,
    elevation: 6,
    padding: 10
  },
  button: {
    paddingVertical: 20,
    fontWeight: '400',
    fontSize: 14,
    color: '#000'
  },
  header: {
    fontWeight: '900',
    paddingVertical: 10,
    fontSize: 16,
    color: '#aaa'
  }
});

AppRegistry.registerComponent('FilterBox', () => FilterBox)