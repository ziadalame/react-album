import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    // Create initial state
    state = { albums: [] };

    // Life cycle method
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => { 
            if (response.status === 200) {
                this.setState({ albums: response.data });
            }
         });
    }

    // Helper method
    renderAlbums() {
        // Map is an array helper to iterate over the array items. 
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
