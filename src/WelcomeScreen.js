import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, ActivityIndicator, AppRegistry
} from 'react-native';
import Repos from '../assets/repos.json';

export default class WelcomeScreen extends Component {
  state = {
    repos: [],
    loading: true
  }

  static navigationOptions = {
    header: null
  };

  schedule = () => {
    this.setState({ repos: Repos, loading: false });
    this.props.navigation.navigate('Repository');
  }

  async componentDidMount() {
    setTimeout(this.schedule, 5000);
  }

  componentWillUnmount = () => {
    clearTimeout(this.schedule);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textGroup}>
          <Text style={[styles.text, styles.bold]}>LEKAN</Text>
          <Text style={[styles.text, styles.thin]}>MEDIA</Text>
        </View>
        <View style={styles.spinnerView}>
          <ActivityIndicator animating={this.state.loading} size='large' color='black' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textGroup: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  spinnerView: {
    flex: 1
  },
  text: {
    fontSize: 36,
    color: '#000'
  },
  thin: {
    fontWeight: '100'
  },
  bold: {
    fontWeight: '900'
  },
});

AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);