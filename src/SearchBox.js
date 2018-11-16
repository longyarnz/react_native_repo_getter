import React, { Component } from 'react'
import { Text, View, AppRegistry, TextInput, Animated, StyleSheet } from 'react-native'

export default class SearchBox extends Component {
  state = {
    text: '',
  }

  handleSubmit = () => {
    const { text } = this.state;
    this.setState({text: '', placeholder: 'To go back, click the × icon'}, () => this.props.search(text));
  }

  render() {
    return (
      <Animated.View style={[styles.container, { ...this.props.offsets }]}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Type here to search repositories'
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.handleSubmit}
            clearButtonMode="while-editing"
            value={this.state.text}
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    zIndex: 0,
  },
  input: {
    height: 58, 
    marginHorizontal: 20, 
    padding: 10,
    fontWeight: '700',
    borderBottomWidth: 3,
    borderBottomColor: '#aaa'
  }
})

AppRegistry.registerComponent('SearchBox', () => SearchBox);