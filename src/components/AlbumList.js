import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

const fetchAlbums = async () => {
  const response = await fetch(
    'https://rallycoding.herokuapp.com/api/music_albums'
  );
  if (response.ok) {
    return response.json();
  }
};

class AlbumList extends Component {
  state = { albums: [], isFetching: false }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetchAlbums()
      .then(albums => this.setState({ albums, isFetching: false }));
  }

  render() {
    let albumComponents = this.state.albums.map(album => {
      return <AlbumDetail key={album.title} {...album} />;
    });
    return (
      <View>
        <Text>Album List</Text>
        {this.state.isFetching && <Text>Fetching</Text>}
        {albumComponents}
      </View>
    );
  }
}

export default AlbumList;
