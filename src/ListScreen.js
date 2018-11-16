import React, { Component } from 'react'
import { Text, View, AppRegistry, Animated, Easing } from 'react-native';
import ToolBar from './ToolBar';
import ListTiles from './ListTiles';
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';
import ShouldRender from './ShouldRender';

export default class ListScreen extends Component {
  constructor(props) {
    super(props)

    this.slideOffset = new Animated.Value(0);
    this.rightOffset = new Animated.Value(0);
    this.state = {
      showFilterMenu: false,
      searchIsOpen: false,
      search: false,
      isRepoDirty: false,
      repos: []
    }
  }

  handleSearch = search => {
    this.setState({ search, isRepoDirty: true });
  }

  restoreAllRepos = () => {
    let repos = this.props.navigation.getParam('repos');
    this.setState({ repos, isRepoDirty: false, search: false });
  }

  handleFilter = () => {
    let repos = this.props.navigation.getParam('repos');
    repos = repos.filter(repo => repo.language.toLowerCase() === 'javascript');
    this.setState({ search: false, repos, isRepoDirty: true });
  }

  static getDerivedStateFromProps(props, state) {
    let repos = state.repos.length > 0 ? state.repos : props.navigation.getParam('repos');
    if(state.search){
      repos = repos.filter(repo => repo.name.toLowerCase() === state.search.toLowerCase());
    }
    return { repos };
  }

  static navigationOptions = ({ navigation }) => {
    const toggle = navigation.getParam('toggle');
    const filter = navigation.getParam('filter');
    return {
      headerLeft: null,
      title: 'Repository List',
      headerRight: <ToolBar toggle={toggle} filter={filter} />,
      animationEnabled: true,
      headerStyle: {
        elevation: 12,
        backgroundColor: '#fff'
      }
    }
  }

  startAnimation = ({ offsetValue, x, y, callback }) => {
    offsetValue.setValue(x);
    Animated.timing(
      this.slideOffset,
      {
        toValue: y,
        duration: 1000,
        easing: Easing.bounce
      }
    ).start(callback);
  }

  slideDown = (x, y) => {
    this.startAnimation({
      offsetValue: this.slideOffset,
      x,
      y,
      callback: () => {
        this.setState(state => ({ searchIsOpen: !state.searchIsOpen }));
      }
    });
  }

  componentDidMount() {
    const showFilterMenu = () => {
      this.setState(state => (
        {
          showFilterMenu: !state.showFilterMenu,
        })
      )
    }

    this.props.navigation.setParams({ toggle: this.slideDown });
    
    this.props.navigation.setParams({ filter: () => showFilterMenu() });
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
      <View style={{ flex: 1 }}>
        <SearchBox offsets={{ marginTop, marginBottom }} search={this.handleSearch} />
        <ShouldRender if={this.state.showFilterMenu}>
          <FilterBox filter={this.handleFilter} />
        </ShouldRender>
        <ListTiles 
          repos={this.state.repos} 
          close={() => this.slideDown(1, 0)} 
          isEmpty={isEmpty}
          isRepoDirty={this.state.isRepoDirty}
          restoreAllRepos={this.restoreAllRepos}  
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('ListScreen', () => ListScreen);