import React, { Component } from 'react'
import { Text, View, FlatList, AppRegistry, StyleSheet } from 'react-native'
import Repos from '../assets/repos.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const timestamp = stamp => {
  const date = stamp.toString().slice(0, 10);
  const time = stamp.toString().slice(11, -1);
  return `${date} (${time})`;
}

const Tile = props => (
  <View style={styles.footer}>
    <Icon name={props.icon} size={14} style={styles.pill} />
    <Text style={styles.pad}>{props.value}</Text>
  </View>
);

export default class ListTab extends Component {
  get _formatJson(){
    const repos = Repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      description: repo.description,
      forks: repo.forks_count,
      stargazers: repo.stargazers_count,
      pushedAt: timestamp(repo.pushed_at),
      language: repo.language
    }));

    return repos;
  }

  _renderTiles = ({ item: repo, index }) => {
    const extraStyle = index === this._formatJson.length - 1 ? {marginBottom: 20} : null;
    const shape = `alpha-${repo.language.toLowerCase().slice(0, 1)}-box`;
    return (
      <View style={[styles.tile, extraStyle]}>
        <Text style={styles.header}>{repo.name}</Text>
        <Text style={styles.description}>{repo.description}</Text>
        <View style={styles.footer}>
          <Tile icon={shape} value={repo.language} />
          <Tile icon="source-fork" value={repo.forks} />
          <Tile icon="star-circle" value={repo.stargazers} />
          <Tile icon="clock-outline" value={repo.pushedAt} />
        </View>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        renderItem={this._renderTiles}
        data={this._formatJson}
        keyExtractor={item => item.id.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 0,
    padding: 10,
    borderRadius: 5
  },
  header: {
    fontWeight: '900',
    color: '#bc8a00',
    fontSize: 16
  },
  description: {
    color: 'grey',
    marginVertical: 10,
    lineHeight: 24
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pill: {
    marginRight: 5,
    color: '#bc8a00'
  },
  pad: {
    fontSize: 10
  }
})

AppRegistry.registerComponent('ListTab', () => ListTab);