import React, { Component } from 'react'
import { Text, View, AppRegistry, Animated, Easing } from 'react-native';
import ToolBar from './ToolBar';
import ListTab from './ListTab';
import SearchView from './SearchView';

export default class ListScreen extends Component {
  constructor(props) {
    super(props)
  
    this.slideOffset = new Animated.Value(0);
    this.state = {
      search: false,
      repos: []
    }
  }

  handleSearch = search => {
    this.setState({ search });
  }

  static getDerivedStateFromProps(props, state){
    let repos = props.navigation.getParam('repos');
    repos = state.search ? repos.filter(repo => repo.language.toLowerCase() === state.search.toLowerCase()) : repos;
    return { repos };
  }
  
  static navigationOptions = ({ navigation }) => {
    const toggle = navigation.getParam('toggle');
    return {
      headerLeft: null,
      title: 'Repository List',
      headerRight: <ToolBar toggle={toggle} />,
      animationEnabled: true
    }
  }

  slideDown = (x, y) => {
    this.slideOffset.setValue(x);
    Animated.timing(
      this.slideOffset,
      {
        toValue: y,
        duration: 1000,
        easing: Easing.bounce
      }
    ).start(() => {
      if(x > y){
        this.setState({ search: false });
      }
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggle: this.slideDown });
  }

  render() {
    const marginTop = this.slideOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 0],
    });

    const marginBottom = this.slideOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0],
    });

    const isEmpty = this.props.navigation.getParam('empty');

    return (
      <View style={{flex: 1}}>
        <SearchView offsets={{marginTop, marginBottom}} search={this.handleSearch} />
        <ListTab repos={this.state.repos} close={() => this.slideDown(1, 0)} isEmpty={isEmpty} />
      </View>
    )
  }
}

AppRegistry.registerComponent('ListScreen', () => ListScreen);