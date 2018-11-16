import React, { Component } from 'react'
import { Text, View, AppRegistry, TouchableHighlight, TextInput, Animated, StyleSheet } from 'react-native'

export default class SearchView extends Component {
  state = {
    text: ''
  }

  handleSubmit = () => {
    const { text } = this.state;
    alert(text);
    this.setState({text: ''}, () => this.props.search(text));
  }

  render() {
    return (
      <Animated.View style={[styles.container, {marginTop: this.props.marginTop }]}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Type here to search repositories"
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

AppRegistry.registerComponent('SearchView', () => SearchView);